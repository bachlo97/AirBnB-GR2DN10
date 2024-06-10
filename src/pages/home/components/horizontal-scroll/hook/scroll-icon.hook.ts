import { useEffect, useRef} from "react";




export const useScrollHorizontal = () => {
    const tabMenuRef = useRef<HTMLUListElement>(null);
    const btnLeftRef = useRef<HTMLDivElement>(null);
    const btnRightRef = useRef<HTMLDivElement>(null);

    const IconVisibility = () => {
        if (tabMenuRef.current && btnLeftRef.current && btnRightRef.current) {
            const scrollLeftValue = Math.ceil(tabMenuRef.current.scrollLeft);
            const scrollableWidth =
                tabMenuRef.current.scrollWidth - tabMenuRef.current.clientWidth;

            btnLeftRef.current.classList.toggle("hidden", scrollLeftValue <= 0);
            btnRightRef.current.classList.toggle(
                "hidden",
                scrollableWidth <= scrollLeftValue,
            );
        }
    };

    const handleScrollRight = () => {
        tabMenuRef.current && (tabMenuRef.current.scrollLeft += 600);
        setTimeout(() => IconVisibility(), 300);
    };

    const handleScrollLeft = () => {
        tabMenuRef.current && (tabMenuRef.current.scrollLeft -= 600);
        setTimeout(() => IconVisibility(), 300);
    };

    useEffect(() => {
            const tabMenu = tabMenuRef.current;
            IconVisibility();
            tabMenu && tabMenu.addEventListener("scroll", () => {
                IconVisibility();
            });

            let activeDrag = false;
            tabMenu && tabMenu.addEventListener("mousemove", (drag) => {
                if (!activeDrag) return;
                tabMenu.scrollLeft -= drag.movementX;
                IconVisibility();
                tabMenu.classList.add("dragging");
            });

            tabMenu && tabMenu.addEventListener("mouseup", () => {
                activeDrag = false;
                tabMenu.classList.remove("dragging");
            });
            tabMenu && tabMenu.addEventListener("mousedown", () => {
                activeDrag = true;
            });
    }, []);

    return [{tabMenuRef,btnLeftRef,btnRightRef},{handleScrollLeft,handleScrollRight}]

}