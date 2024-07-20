import React, { useEffect, useState } from 'react'
import { IoMdArrowUp } from 'react-icons/io';
import { useWindowScroll } from 'react-use';

function ArrowToTop({ y }) {
    const [isAnimating, setIsAnimating] = useState(false);

    function handleToTop() {
        window.scrollTo(0, 0);
        setIsAnimating(false);
    }
    
    useEffect(function () {
        /// temps ////////////
        setIsAnimating(false);
        //////////////////////
        
        const id = setTimeout(() => {
            setIsAnimating(true);
        }, 5000);

        return () => clearTimeout(id);
    }, [y]);

    return (
        <span onClick={handleToTop} className={`arrow-to-top ${isAnimating ? 'arrow-animation' : ''}`}>
            <IoMdArrowUp className='icon' />
        </span>
    )
}

export default ArrowToTop