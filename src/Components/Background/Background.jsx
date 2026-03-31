import './Background.css'
import { useState, useEffect, useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Sphere, Circle, Ring, Torus, OrbitControls, Tube, Edges, DragControls } from "@react-three/drei";
import * as THREE from 'three';
import { AxesHelper } from "three";

function DivRactangle({x, y, z, r, isActive, parentRef}) {

    const ref = useRef();
    
    
    useFrame((_, delta) => {
        if (!ref.current) return;
        
        const parentRotY = parentRef.current.rotation.y;
        const targetRotY = isActive ? -parentRotY : r;
        const target = isActive ? 5 : 1;

        const newRotY = THREE.MathUtils.damp(ref.current.rotation.y, targetRotY, 6, delta);
        const s = THREE.MathUtils.damp(ref.current.scale.x, target, 4, delta);

        ref.current.rotation.y = newRotY;
        ref.current.scale.set(s, s, s);

    });

    return (
        <mesh ref ={ref} position = {[x, y, z]}  >
            <boxGeometry args={[1, 1, 0.1]} />
            <meshBasicMaterial color = "#050505" />
            <Edges
                scale = {1}
                threshold = {15}
                color = "#D9D9D9"
            />
        </mesh>
    )
}

function MainMesh({ test }) {

    const count = 16;
    const radius = 5;
    const [activeIndex, setActiveIndex] = useState(0);
    
    const meshs = useRef();
    const rX = 0;
    const rotateList = useMemo(
      () => [ [rX, 0], [rX, 22.5], [rX, 67.5], [rX, 90], [rX, 112.5], [rX, 135], [rX, 157.5], [rX, 180], [rX, 202.5],
                [rX, 225], [rX, 247.5], [rX, 270], [37, 292.5], [54, 315], [71, 337.5], [90, 337.5],],
      []
    );
  
    useFrame((_, delta) => {
        if (!meshs.current) return;
    
        const safeIndex = Math.max(0, Math.min(15, test ?? 0));
    
        const targetRotationX = THREE.MathUtils.degToRad(
            rotateList[safeIndex][0]
        );
        const targetRotationY = THREE.MathUtils.degToRad(
            rotateList[safeIndex][1]
        );
    
        
        meshs.current.rotation.x = THREE.MathUtils.damp(meshs.current.rotation.x, targetRotationX, 4, delta);
        meshs.current.rotation.y = THREE.MathUtils.damp(meshs.current.rotation.y, targetRotationY, 4, delta);

        const deg = THREE.MathUtils.radToDeg(meshs.current.rotation.y);
        const rawIndex = Math.round((deg) / 22.5);
        const index = ((rawIndex % 16) + 16) % 16;

        setActiveIndex(index);
    });
    const isLocked = activeIndex >= 12;
    const points = Array.from({ length: count }, (_, i) => {
        const angle = (2 * Math.PI * i) / count - Math.PI / 2;

        return {
        x: radius * Math.cos(angle),
        y: radius * Math.sin(angle),
        r: angle
    };
    
    });

    return(
        <mesh ref = {meshs}>
            {points.map((p, i) => (
                <DivRactangle key = {i} parentRef = {meshs} x = {p.x} y ={0} z = {p.y} r = {-p.r} isActive={!isLocked && i === activeIndex}/>
            ))}
        </mesh>
    )
}

function CameraController({step}) {
    const { camera } = useThree();

  useFrame((_, delta) => {
        const isEnd = step >= 12;

        const targetPos = isEnd ? [0, 0, 5] : [0, 0, 0];  
        camera.position.x = THREE.MathUtils.damp(camera.position.x, targetPos[0], 4, delta);
        camera.position.y = THREE.MathUtils.damp(camera.position.y, targetPos[1], 4, delta);
        camera.position.z = THREE.MathUtils.damp(camera.position.z, targetPos[2], 4, delta);
    });

    return null;
}

function Background() {
    const [step, setStep] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            const maxScroll =
            document.documentElement.scrollHeight - window.innerHeight;
    
            const ratio = window.scrollY / maxScroll;
            const newStep = Math.floor(ratio * 15);
    
            setStep(newStep);
        };
  
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div className = 'Background'>
            <Canvas style = {{ width: "100vw", height: "820px"}} 
                    camera = {{ position: [0, 0, 0] }}
                    gl = {{ toneMapping: THREE.NoToneMapping }}>
                <CameraController step = {step} />
                <MainMesh test = {step}/>
            </Canvas>
        </div>
    )
}

export default Background