import Container from "./Container.tsx";
import leftArrow from "../assets/leftArrow.png";
import ExploreButton from "./Buttons/ExploreButton.tsx";
import FloatingImage from "./FloatingImage.tsx";
import type {JSX} from "react";
import vector from "../assets/Vector5.png";
import {useNavigate} from "react-router-dom";

interface IProps {
    data: {
        h1: string;
        desc: string;
        src: string;
        list: string[];
        images: string[];
    }
}

function Service({data}: IProps): JSX.Element {
    const {h1, src, desc, list, images} = data;
    const navigate = useNavigate();

    function handleBack() {
        navigate(-1);
    }

    return (
        <Container className="flex flex-col gap-9 p-5 items-center relative">
            <div className="w-full flex  flex-col justify-center items-center text-center">
                <h1 className="text-2xl font-bold">
                    {h1}
                </h1>
                <img src={vector} alt="Design" className="w-2xl"/>
            </div>
            <div className="w-fit">
                <button onClick={handleBack}
                        className="flex border-2 px-2 py-0.5 border-orange-500 rounded-lg gap-2 cursor-pointer">
                    <img src={leftArrow} alt="Left Arrow" className="w-4"/>
                    Back
                </button>
                <div className="w-full flex justify-center items-center flex-col md:flex-row">
                    <img src={src} alt="Frame" className="w-sm"/>
                    <div className="w-full max-w-xl">
                        <p className="text-lg font-semibold">
                            {desc}
                        </p>
                        <ul className="mt-3 list-disc pl-6">
                            {list
                                .map((item: string, i: number): JSX.Element =>
                                    (<li key={i}>{item}</li>))}
                        </ul>
                    </div>
                </div>
                <ExploreButton/>
            </div>
            <FloatingImage src={images[0]} className="right-40 top-1/3 size-24 opacity-70"/>
            <FloatingImage src={images[1]} className="right-80 size-20 bottom-1/4"/>
            <FloatingImage src={images[2]} className="right-60 top-1/7 h-26"/>
            <FloatingImage src={images[3]} className="left-46 bottom-40 h-18"/>
        </Container>
    );
}

export default Service;