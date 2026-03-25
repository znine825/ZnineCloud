import './Background.css'
import { useState, useEffect, useRef, useMemo } from 'react';
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Circle, Ring, Torus, OrbitControls, Tube, Edges, DragControls } from "@react-three/drei";
import * as THREE from 'three';
import { AxesHelper } from "three";

function MakeLing(args) {
    return (
        <Ring 
            args = {[args.radius - args.thickness, args.radius, 100]} 
            position = {[args.x, args.y, args.z]}
            rotation = {[args.rotate[0], args.rotate[1], args.rotate[2]]}
            >
            <meshBasicMaterial
                transparent
                color = "white"
                side = {THREE.DoubleSide}
                opacity = {args.opa}/>
        </Ring>
    )
}

function M1Ring({x, y, z, text}) {

    const path = new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, 0.5, 0),
        new THREE.Vector3(0, -0.5, 0),
    ])



    return (
            <mesh 
                position={[x, y, z]}

            >
                {/* h,  */}
                <Tube args={[ path, 2, 4.5, 100, true ]}> {/* 바깥 면 */} 
                    <meshBasicMaterial color = "rgb(39, 39, 39)" />
                    <Edges
                        scale={1.01}
                        threshold={15}
                        color = "rgb(214, 214, 214)"
                    />
                </Tube>
                <Tube args={[ path, 2, 0.5, 100, true ]}> {/* 안쪽 면 */}
                    <meshBasicMaterial color = "rgb(39, 39, 39)" />
                    <Edges
                        scale={1.01}
                        threshold={15}
                        color = "rgb(39, 39, 39)"
                    />
                </Tube>
                <Torus
                    args={[ 1.0, 0.5, 2, 100 ]}
                    rotation={[Math.PI / 2, 0, 0]}
                    position={[0, 0.02, 0]}
                    >
                    <meshBasicMaterial color = "rgb(39, 39, 39)" />
                </Torus>
                <Torus
                    args={[ 1.0, 0.5, 2, 100 ]}
                    rotation={[Math.PI / 2, 0, 0]}
                    position={[0, 0.48, 0]}
                    >
                    <meshBasicMaterial color = "rgb(39, 39, 39)" />
                </Torus>
            </mesh>
    )
}
function MainMesh({ test }) {
    
    const meshs = useRef();

    const rotateList = useMemo(
      () => [ [210, 0], [210, 0], [210, 0], [210, 0], [210, 0], [210, 0], [210, 0], [90, 0],],
      []
    );
  
    useFrame((state, delta) => {
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
            <M1Ring x = {0} y ={-1.5} z = {0.0} text = '링1'/>
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
                            }}>
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