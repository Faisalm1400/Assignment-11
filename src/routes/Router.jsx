import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import AuthLayout from "../layout/AuthLayout";
import AddMarathons from "../pages/Marathons/AddMarathons";
import Marathons from "../pages/Marathons/Marathons";
import PrivateRoute from "./PrivateRoute";
import MarathonDetails from "../pages/Marathons/MarathonDetails";
import RegistrationForm from "../pages/RegistrationForm";
import Dashboard from "../pages/Dashboard/Dashboard";
import MyMarathonList from "../pages/Dashboard/MyMarathonList.jsx";
import MyApply from "../pages/Dashboard/MyApply.jsx";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/addMarathons",
                element: <PrivateRoute>
                    <AddMarathons />
                </PrivateRoute>
            },
            {
                path: "/marathons",
                element: <PrivateRoute>
                    <Marathons />
                </PrivateRoute>
            },
            {
                path: "/marathon/:id",
                element: <PrivateRoute>
                    <MarathonDetails />
                </PrivateRoute>
            },
            {
                path: "/registration/:id",
                element: <PrivateRoute>
                    <RegistrationForm />
                </PrivateRoute>
            },
            {
                path: "/dashboard",
                element: <PrivateRoute>
                    <Dashboard />
                </PrivateRoute>
            },
            {
                path: "/dashboard/myMarathons",
                element: <PrivateRoute>
                    <MyMarathonList />
                </PrivateRoute>
            },
            {
                path: "/dashboard/myApply",
                element: <PrivateRoute>
                    <MyApply />
                </PrivateRoute>
            }
        ],
    },
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            {
                path: "/auth/login",
                element: <Login />
            },
            {
                path: "/auth/register",
                element: <Register />
            }
        ]
    }
]);

export default router;