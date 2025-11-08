import ContactUs from "./component/ContactUs.tsx";
import Home from "./component/Home.tsx";
import {Toaster} from "react-hot-toast";

function App() {
    return <div>
        <Home/>
        <ContactUs/>
        <Toaster/>
    </div>;
}

export default App