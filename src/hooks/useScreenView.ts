import { RefObject, useEffect } from 'react';

export const useScreenView = <T extends HTMLElement>(
    refs: RefObject<(T | null)[]> | RefObject<T>,
    callback: (e: IntersectionObserverEntry) => void,
    options: IntersectionObserverInit
) => {
    //IntersectionObserver
    useEffect(() => {
        const io = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                callback(entry);
                io.unobserve(entry.target); // 한번만 실행하도록 지정
            }
        }, options);

        if (Array.isArray(refs.current)) {
            refs.current.forEach(ref => ref && io.observe(ref));
        } else {
            refs.current && io.observe(refs.current);
        }

        return () => {
            io && io.disconnect();
        };
    }, [refs.current, callback, options]);

    const observerRef = (index: number) => (el: T) => {
        if (Array.isArray(refs.current)) refs.current[index] = el;
    };

    return { observerRef };
};
