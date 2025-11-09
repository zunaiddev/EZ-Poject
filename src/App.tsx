import router from "./routes/AppRoutes.tsx";
import {RouterProvider} from "react-router-dom";
import {Toaster} from "react-hot-toast";

function App() {
    return <div>
        <RouterProvider router={router}/>
        <Toaster/>
    </div>;
}

export default App