import { gsap } from "gsap";

export function pulse(groupRef) {
    const duration = 1;
    const repeat = -1;
    const yoyo = true;

    gsap.to(groupRef.current.scale, {
        duration,
        repeat,
        yoyo,
        x: 3,
        y: 3,
        z: 3,
        ease: "power2.out",
    });
}
