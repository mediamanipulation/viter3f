import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import RandomflowShip from './assets/randomflow-ship.glb';

function Model(props) {
    const gltf = useGLTF(RandomflowShip);
    const ref = useRef();
    useFrame(() => {
        ref.current.rotation.y += 0.01;
    });
    return <primitive ref={ref} object={gltf.scene} {...props} />;
}

export default Model;
