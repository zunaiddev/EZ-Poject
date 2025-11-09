import type {JSX} from "react";
import Container from "../component/Container.tsx";
import FloatingImage from "../component/FloatingImage.tsx";
import footer from "../assets/serviceFooter.svg";
import frame1 from "../assets/frame1.png";
import frame2 from "../assets/frame2.png";
import frame3 from "../assets/frame3.png";
import tape from "../assets/tape.png";
import {twMerge} from "tailwind-merge";
import {Link} from "react-router-dom";

function ServicePage(): JSX.Element {
    return (
        <Container className="flex justify-center items-center p-5">
            <div className="flex gap-4 flex-wrap justify-center items-center">
                <Frame to="/service/1" src={frame1} imageStyle="-top-5" className="w-86"/>
                <Frame to="/service/2" src={frame3} imageStyle="-left-6 -top-6"/>
                <Frame to="/service/3" src={frame2} className="w-86"/>
            </div>
            <FloatingImage src={footer} className="bottom-0 left-0 max-w-none w-full"/>
        </Container>
    );
}

interface FrameProps {
    src: string;
    to: string;
    imageStyle?: string;
    className?: string;
}

function Frame({src, imageStyle, className, to}: FrameProps): JSX.Element {
    return <Link to={to} className={twMerge("relative w-80 h-100 overflow-hidden", className)}>
        <div className={twMerge("absolute top-0 w-40 overflow-hidden", imageStyle)}>
            <img src={tape} className="size-full" alt="tape"/>
        </div>
        <img src={src} className="w-full max-w-sm" alt="frame image"/>
    </Link>
}

export default ServicePage;