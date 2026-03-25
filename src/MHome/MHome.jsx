import './MHome.css'
import MHomePage1 from'./MHomePage1.jsx'
import MHomePage2 from'./MHomePage2.jsx'
import MHomePage3 from'./MHomePage3.jsx'
import Header from './../Components/Header/Header.jsx'
import Footer from './../Components/Footer/Footer.jsx'
import Background from '../Components/Background/Background.jsx'
import { useEffect, useRef } from "react";





function MHome() {

    const cursorRef = useRef();

    useEffect(() => {
        const move = (e) => {
        cursorRef.current.style.top = e.clientY + "px";
        cursorRef.current.style.left = e.clientX + "px";
        };

        const show = () => {
        cursorRef.current.style.opacity = "1";
        };

        const hide = () => {
        cursorRef.current.style.opacity = "0";
        };

        window.addEventListener("mousemove", move);
        document.addEventListener("mouseenter", show);
        document.addEventListener("mouseleave", hide);

        return () => {
        window.removeEventListener("mousemove", move);
        document.removeEventListener("mouseenter", show);
        document.removeEventListener("mouseleave", hide);
        };
    }, []);

    return (
        <div className = 'MHome'>
            <div className = 'MH_header'><Header where = {0} /></div>
            <div className = 'MH1_Background'><Background /></div>
            <div className = 'MH1_Page1'><MHomePage1 /></div>
            <div className = 'MH2_Page2'><MHomePage2 /></div>
            <div className = 'MH3_Page3'><MHomePage3 /></div>
            <div className="cursor" ref = {cursorRef}>
                <div></div>
            </div>

            <div className = 'MH_Footer'><Footer/></div>
        </div>
    )
}

export default MHome

