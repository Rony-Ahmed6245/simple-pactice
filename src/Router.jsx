import {
    createBrowserRouter,
} from "react-router-dom";
import App from "./App";
import Error from "./Error";
import About from "./About";
import Login from "./Login";
import From from "./From";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children:[
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/from",
                element:<From/>
            }
        ]
    },
    {
        path: "/about",
        element: <About></About>
    }
]);
export default router;