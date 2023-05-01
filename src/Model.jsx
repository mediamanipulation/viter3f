import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function Model(props) {
    const gltf = useLoader(GLTFLoader, props.url);
    const ref = useRef();
    const controlsRef = useRef();
    const { camera, gl } = useThree();

    useFrame(() => {
        ref.current.rotation.y = controlsRef.current.getAzimuthalAngle();
    });

    return (
        <>
            <primitive ref={ref} object={gltf.scene} {...props} />
            <OrbitControls ref={controlsRef} args={[camera, gl.domElement]} />
        </>
    );
}

export default Model;
