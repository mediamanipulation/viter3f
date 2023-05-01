import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointsMaterial, BufferGeometry, Float32BufferAttribute } from 'three';

function Starfield() {
    const ref = useRef();
    const geometry = new BufferGeometry();
    const vertices = [];

    for (let i = 0; i < 2000; i++) {
        const x = (Math.random() - 0.5) * 2000;
        const y = (Math.random() - 0.5) * 2000;
        const z = (Math.random() - 0.5) * 2000;
        vertices.push(x, y, z);
    }

    geometry.setAttribute('position', new Float32BufferAttribute(vertices, 3));

    useFrame(({ clock }) => {
        if (ref.current) {
            ref.current.position.z += 0.5;
            if (ref.current.position.z > 1000) {
                ref.current.position.z -= 2000;
            }
        }
    });

    return (
        <points ref={ref}>
            <primitive object={geometry} />
            <pointsMaterial color="white" size={4} />
        </points>
    );
}

export default Starfield;
