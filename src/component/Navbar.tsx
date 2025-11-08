import navLogo from "../assets/logo.svg";

function Navbar() {
    return (
        <div className="fixed top-0 w-full left-0 py-4 px-5">
            <img src={navLogo} alt="logo" className="w-16"/>
        </div>
    );
}

export default Navbar;