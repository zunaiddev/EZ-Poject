import Navbar from "../component/Navbar.tsx";
import {Outlet} from "react-router-dom";

function RootLayout() {
    return (
        <main className="w-full h-full relative">
            <Navbar/>
            <Outlet/>
        </main>
    );
}

export default RootLayout;