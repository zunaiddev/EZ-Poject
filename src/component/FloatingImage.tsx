import {twMerge} from "tailwind-merge";

function FloatingImage({className, src}: { className?: string, src?: string }) {
    return (
        <img src={src} alt="Floaring Image"
             className={twMerge("max-w-25 absolute z-0", className)}/>
    );
}

export default FloatingImage;