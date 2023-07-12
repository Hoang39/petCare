import { useState, useEffect } from "react";

export default function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState("down");
  
    useEffect(() => {
        let lastScrollY = window.scrollY;
    
        const updateScrollDirection = () => {
            const scrollY = window.scrollY;
            const direction = scrollY > lastScrollY ? "down" : "up";
            if (direction !== scrollDirection && (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)) 
                setScrollDirection(direction);
            
            lastScrollY = scrollY > 0 ? scrollY : 0;
        };
        window.addEventListener("scroll", updateScrollDirection); // add event listener

        return () => window.removeEventListener("scroll", updateScrollDirection); // clean up
    }, [scrollDirection]);
  
    return scrollDirection;
};