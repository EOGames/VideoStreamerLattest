import { Navigate,Outlet } from "react-router-dom";

const PrivateRoute = () =>
{
    const auth = localStorage.getItem('admin');

    return(
        auth ?<Outlet/>: <Navigate to={'/'} />
    );
}
export default PrivateRoute;
