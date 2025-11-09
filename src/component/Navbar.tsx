import navLogo from "../assets/logo.svg";
import menu from "../assets/menu.png";
import close from "../assets/cross.svg";
import {useState} from "react";
import {Link} from "react-router-dom";

function Navbar() {
    const isMobile: boolean = window.innerWidth <= 500;
    const [src, setSrc] = useState(menu);
    const [open, setOpen] = useState(false);

    function handleClick(): void {
        setSrc(open ? menu : close);
        setOpen(!open);
    }

    return (
        <div className="w-full fixed left-0 top-0 z-999 p-5 flex justify-between items-center max-h-16">
            <img src={navLogo} alt="logo" className="w-16"/>
            <div className="flex gap-5 items-center">
                <nav
                    className={`flex items-center justify-center gap-5 transform duration-500 ${open ? "translate-x-0 opacity-100" : "translate-x-[120%] opacity-0"} 
                    ${isMobile && "absolute top-full right-2 bg-gray-300 p-2 rounded-2xl flex-col"}`}>
                    <Link to="/" onClick={handleClick}>Home</Link>
                    <Link to="/service" onClick={handleClick}>Services</Link>
                    <Link to="/portfolio" onClick={handleClick}>Portfolio</Link>
                    <Link to="/contact-us" onClick={handleClick}
                          className="bg-orange-500 text-white px-3 py-1.5 rounded-2xl">
                        Lets Talk
                    </Link>
                </nav>
                <img src={src} className="w-9 cursor-pointer" alt="Cross" onClick={handleClick}/>
            </div>
        </div>
    );
}

export default Navbar;