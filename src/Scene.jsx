import React, { Suspense, useRef } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls, PerspectiveCamera, Stars } from '@react-three/drei';
import Cube from './Cube';
import ResizeHandler from './ResizeHandler';
import Starfield from './Starfield';
import RandomflowShip from './assets/randomflow-ship.glb'; // import the .glb file as an asset
import styles from './Scene.module.css';

function CanvasWrapper(props) {
    const canvasRef = useRef(null);

    return (
        <Canvas {...props} ref={canvasRef}>
            {props.children}
        </Canvas>
    );
}

function Model(props) {
    const gltf = useLoader(GLTFLoader, RandomflowShip); // load the .glb file using GLTFLoader
    return <primitive object={gltf.scene} {...props} />;
}

function Scene() {
    return (
        <div id="canvas-container" className={styles.sceneContainer}>
            <div style={{ width: '100vw', height: '100vh' }}>
                <CanvasWrapper
                    camera={{ position: [0, 0, 10], fov: 50 }}
                    style={{ background: 'black' }}
                >
                    <Suspense fallback={null}>
                        <ResizeHandler />
                        <PerspectiveCamera position={[0, 0, 24]} makeDefault />
                        <OrbitControls />
                        <ambientLight />
                        <pointLight position={[10, 10, 10]} />
                        <Model scale={[2, 2, 2]} position={[4, 3, 0]} />
                        <Cube />
                        <Starfield />
                    </Suspense>
                </CanvasWrapper>
            </div>
        </div>
    );
}

export default Scene;
