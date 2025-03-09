import { useEffect } from 'react';

const useIntersectionObserver = () => {
    useEffect(() => {
        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        };

        const observerOptions = {
            root: null,
            threshold: 0.1,
            rootMargin: '0px'
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        const elements = document.querySelectorAll('.reveal');

        elements.forEach(el => observer.observe(el));

        return () => {
            elements.forEach(el => observer.unobserve(el));
        };
    }, []);
};

export default useIntersectionObserver;