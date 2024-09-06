import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter,Outlet,Route,RouterProvider } from "react-router-dom";

const Body  = () =>{


// creating routing 
const appRouter  = createBrowserRouter([
    {
        path:"/",
        element:<Login />
    },
    {
        path:"/browse",
        element:<Browse />
    }
])




return(

    <div>
        <RouterProvider router={appRouter}/>
    </div>
)

}
export default Body;