import React, { useEffect, useRef } from 'react'
import { Wrapper, Boxes, Box } from './TestMarqueeElement'
import { gsap } from 'gsap'

const TestMarquee = () => {

    const refs = useRef([]);
    const addToRefs = (el) => {
        if (el && !refs.current.includes(el)) {
            refs.current.push(el)
        }
    }

    useEffect(() => {
        var colors = ["#f38630", "#6fb936", "#ccc", "#6fb936"];

        //initially colorize each box and position in a row
        gsap.set(refs.current, {
            backgroundColor: (i) => colors[i % colors.length],
            x: (i) => i * -50
        });


        gsap.to(refs.current, {
            duration: 5,
            ease: "none",
            x: "-=500", //move each box 500px to right
            modifiers: {
                x: gsap.utils.unitize(x => parseFloat(x) % 500)
            },
            repeat: -1
        });
    }, [])
    return (
        <Wrapper>
            <Boxes>
                <Box ref={addToRefs}>1</Box>
                <Box ref={addToRefs}>2</Box>
                <Box ref={addToRefs}>3</Box>
                <Box ref={addToRefs}>4</Box>
                <Box ref={addToRefs}>5</Box>
                <Box ref={addToRefs}>6</Box>
                <Box ref={addToRefs}>7</Box>
                <Box ref={addToRefs}>8</Box>
                <Box ref={addToRefs}>9</Box>
                <Box ref={addToRefs}>10</Box>
            </Boxes>
        </Wrapper>
    )
}

export default TestMarquee
