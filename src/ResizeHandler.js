import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';

export default function ResizeHandler() {
    const { gl, camera, size } = useThree();

    useEffect(() => {
        camera.aspect = size.width / size.height;
        camera.updateProjectionMatrix();

        gl.setSize(size.width, size.height);
        gl.setPixelRatio(window.devicePixelRatio);

        const resizeObserver = new ResizeObserver(() => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            gl.setSize(window.innerWidth, window.innerHeight);
        });

        resizeObserver.observe(document.body);

        return () => {
            resizeObserver.disconnect();
        };
    }, [camera, gl, size.width, size.height]);

    return null;
}
