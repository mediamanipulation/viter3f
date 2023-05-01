import { useEffect } from 'react';
import { gsap } from 'gsap';

const useGsapAnimation = (ref, circleAround) => {
    useEffect(() => {
        const tl = gsap.timeline({ repeat: -1 });
        tl.to(ref.current.position, {
            duration: 2,
            y: 1.5,
            x: 2,
            ease: 'Power4.out',
        }).to(ref.current.position, {
            duration: 2,
            x: 0,
            y: 0,
            ease: 'Power4.inOut',
        });

        if (circleAround) {
            const circleTL = gsap.timeline({ repeat: -1 });
            circleTL.to(ref.current.position, {
                duration: 4,
                x: circleAround.x,
                y: circleAround.y,
                z: circleAround.z,
                modifiers: {
                    x: gsap.utils.unitize(parseFloat),
                    y: gsap.utils.unitize(parseFloat),
                    z: gsap.utils.unitize(parseFloat),
                },
                ease: 'Power1.inOut',
            });
        }

        return () => {
            tl.kill();
            if (circleAround) circleTL.kill();
        };
    }, [ref, circleAround]);
};

export default useGsapAnimation;
