import type {JSX, ReactNode} from "react";
import {twMerge} from 'tailwind-merge';

interface IProps {
    children: ReactNode;
    className?: string;
}

function Container({children, className}: IProps): JSX.Element {
    return (
        <div
            className={twMerge("min-h-screen w-full pt-10 bg-[url(/src/assets/mainBg.jpg)] relative", className)}>
            <div className={twMerge("z-50 w-full h-full", className)}>
                {children}
            </div>
        </div>
    );
}

export default Container;