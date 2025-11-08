import type {JSX} from "react";

interface IProps {
    src: string;
    position?: "top" | "bottom";
}

function SideImage({src, position = "top"}: IProps): JSX.Element {
    return (
        <div className={`z-10 absolute ${position === "top" ? "right-0 top-0" : "left-0 bottom-0"} w-70 opacity-80`}>
            <img src={src} alt="Top Right"/>
        </div>
    );
}

export default SideImage;