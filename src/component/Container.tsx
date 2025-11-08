import type {JSX, ReactNode} from "react";

interface IProps {
    children: ReactNode;
}

function Container({children}: IProps): JSX.Element {
    return (
        <div
            className="min-h-screen h-screen w-full bg-[url(/src/assets/mainBg.jpg)] relative">
            {children}
        </div>
    );
}

export default Container;