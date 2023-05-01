import React, { useRef, useEffect } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import { TextureLoader } from 'three';
import gsap from 'gsap';
import { pulse } from './animate.js'

function Cube(props) {
    const orbitRef = useRef();
    const groupRef = useRef();
    const meshRef = useRef();
    // const cubeRef = useRef();
 
    // Load the React logo texture
    const reactLogoTexture = useLoader(TextureLoader, './react.svg'); // Replace 'path/to/react-logo.png' with the path to your React logo image
    useEffect(() => {
        pulse(groupRef);
    }, []);
    useEffect(() => {
        const tl = gsap.timeline({ repeat: -1, yoyo: true });

        tl.to(meshRef.current.scale, { x: 2, y: 2, z: 2, duration: 1 })
            .to(meshRef.current.scale, { x: 1, y: 1, z: 1, duration: 1 });

        return () => tl.kill();
    }, []);

    useFrame((state, delta) => {
        groupRef.current.rotation.y += delta * 1.7; // Increase the rotation speed
        meshRef.current.rotation.y += delta * 1.7; // Increase the rotation speed
        orbitRef.current.rotation.y += delta * 0.9; // Increase the orbit speed
    });

    return (
        <group ref={orbitRef}>
            <group ref={groupRef} position={[8, 0, 0]}>
                <Box 
                    args={[1, 1, 1]}
                    ref={meshRef}
                    {...props}
                    castShadow
                    receiveShadow
                >
                    <meshStandardMaterial
                        attach="material"
                        map={reactLogoTexture}
                    />
                </Box>
            </group>
        </group>
    );
}

export default Cube;
