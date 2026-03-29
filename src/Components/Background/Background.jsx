import './Background.css'
import { useState, useEffect, useRef, useMemo } from 'react';
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Circle, Ring, Torus, OrbitControls, Tube, Edges, DragControls } from "@react-three/drei";
import * as THREE from 'three';
import { AxesHelper } from "three";

function DivRing({x, y, z, r}) {
    return (
        <mesh position = {[x, y + 0.25, z]} rotation = {[0, Math.PI / r, 0]}>
            <boxGeometry args={[1, 1, 0.1]} />
            <meshBasicMaterial color = "#050505" />
            <Edges
                scale = {1.00}
                threshold = {15}
                color = "rgb(214, 214, 214)"
            />
        </mesh>
    )
}

function M1Ring({x, y, z}) {

    const path = new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, 0.5, 0),
        new THREE.Vector3(0, -0.5, 0),
    ])


    return (
            <mesh position={[x, y, z]} >
                <DivRing x = {-5} y ={0} z = {0} r = {1}/>
                <DivRing x = {5} y ={0} z = {0} r = {1}/>
                <DivRing x = {0} y ={0} z = {-5} r = {2}/>
                <DivRing x = {0} y ={0} z = {5} r = {2}/>

            </mesh>
    )
}
function MainMesh({ test }) {
    
    const meshs = useRef();

    const rotateList = useMemo(
      () => [ [10, 0], [20, 0], [30, 0], [40, 0], [50, 0], [60, 0], [70, 0], [90, 0],],
      []
    );
  
    useFrame((_, delta) => {
        if (!meshs.current) return;
    
        // 범위 보호
        const safeIndex = Math.max(0, Math.min(7, test ?? 0));
    
        const targetRotationX = THREE.MathUtils.degToRad(
            rotateList[safeIndex][0]
        );
        const targetRotationY = THREE.MathUtils.degToRad(
            rotateList[safeIndex][1]
        );
    
        
        meshs.current.rotation.x = THREE.MathUtils.damp(
            meshs.current.rotation.x,
            targetRotationX,
            4,      // 감속 정도
            delta   // 프레임 독립
        );
        meshs.current.rotation.z = THREE.MathUtils.damp(
            meshs.current.rotation.z,
            targetRotationY,
            4,      // 감속 정도
            delta   // 프레임 독립
        );
    });

    return(
        <mesh ref = {meshs}>
            <M1Ring x = {0} y ={0} z = {0}/>
        </mesh>
    )
}

function Background() {
    const [step, setStep] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            const maxScroll =
            document.documentElement.scrollHeight - window.innerHeight;
    
            const ratio = window.scrollY / maxScroll;
            const newStep = Math.min(8, Math.floor(ratio * 9));
    
            setStep(newStep);
        };
  
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div className = 'Background'>
        <Canvas style={{ width: "100vw", height: "820px"}}
                                camera={{
                                position: [0, 0, 5],
                            }}
                gl={{ toneMapping: THREE.NoToneMapping }}>
            <OrbitControls
                enablePan = {false}
                enableRotate = {true}
                enableZoom = {false}
            />
            <MainMesh test = {step}/>
            </Canvas>
        </div>
    )
}

export default Background