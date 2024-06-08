import { useEffect, useRef, useState } from "react";



export const useHomeCarousel = (data:any) =>{
    const thumbnailListWrapperRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [btnState, setBtnState] = useState(false);

    useEffect(() => {
        setCurrentIndex(0);
    }, []);


    const getClonedNode = (wrapperRef: React.RefObject<HTMLDivElement>) => {
        return (
            wrapperRef.current &&
            wrapperRef.current.children[0]?.cloneNode(true)
        );
    };
    
    const applyCloneTransition = (clone: Node | null,wrapperRef: React.RefObject<HTMLDivElement>,className:string) => {
        if (clone instanceof Element) {
            clone.classList.remove(className);
            wrapperRef.current?.appendChild(clone);
            wrapperRef.current?.children[1].classList.add(className);
        }
    };
    
    const removeFirstChild = (wrapperRef: React.RefObject<HTMLDivElement>) => {
        wrapperRef.current?.children[0].remove();
    };
    const updateThumbnailIndexes = (wrapperRef: React.RefObject<HTMLDivElement>) => {
        if (wrapperRef.current) {
            for (let i = 2; i < wrapperRef.current.childElementCount; i++) {
                const child = wrapperRef.current.children[i] as HTMLElement;
                child.style.setProperty("--idx", `${i - 2}`);
            }
        }
    };
    

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
        setBtnState(true);
        const clone = getClonedNode(thumbnailListWrapperRef);
        applyCloneTransition(clone, thumbnailListWrapperRef, "zoom");
        updateThumbnailIndexes(thumbnailListWrapperRef);
        setTimeout(() => {
            removeFirstChild(thumbnailListWrapperRef);
            setBtnState(false);
        }, 500);
    };

    return [{currentIndex,btnState,thumbnailListWrapperRef},{handleNext}]
}