import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import FindDoctor from "../pages/FindDoctor/FindDoctor";
import Login from "../layout/Login";
import MainSignIn from "../pages/Login/MainSignIn/MainSignIn";
import Profile from "../layout/Profile";
import AllUser from "../pages/Admin/AllUser/AllUser";
import AllDoctor from "../pages/Admin/AllDoctor/AllDoctor";
import DoctorDetails from "../pages/DoctorDetails/DoctorDetails";
import SubmitReview from "../pages/SubmitReview/SubmitReview";
import BookDoctor from "../pages/BookDoctor/BookDoctor";
import PrivateRoutes from "./PrivateRoutes";


export const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Main></Main>,
            children: [
                {
                    path: "/",
                    element: <Home></Home>
                },
                {
                    path: "find-doctor",
                    element: <FindDoctor></FindDoctor>
                },
                {
                    path: "single-doctor-details/:id",
                    element: <PrivateRoutes> <DoctorDetails></DoctorDetails>
                    </PrivateRoutes>
                },
                {
                    path: "submit-review",
                    element: <SubmitReview></SubmitReview>
                },
                {
                    path: "book-doctor",
                    element: <PrivateRoutes> <BookDoctor></BookDoctor>
                    </PrivateRoutes>
                },
                
                {
                    path: "about-us",
                    element: <About></About>
                },
            ]
        },

        {
            path: '/login',
            element: <Login></Login>,
            children: [
                {
                    path: '/login',
                    element: <MainSignIn></MainSignIn>
                },
            ]
        },

        {
            path: '/admin-route',
            element: <Profile></Profile>,
            children: [
                {
                    path: 'admin-route',
                    element: <AllUser></AllUser>
                },
                {
                    path: 'account-doctors',
                    element: <AllDoctor></AllDoctor>
                },

            ]
        }
    ]
)