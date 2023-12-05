import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import FindDoctor from "../pages/FindDoctor/FindDoctor";
import Login from "../layout/Login";
import MainSignIn from "../pages/Login/MainSignIn/MainSignIn";


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
                // {
                //     path: "single-doctor-details/:id",
                //     element: <DoctorDetails></DoctorDetails>
                // },
                // {
                //     path: "submit-review",
                //     element: <SubmitReview></SubmitReview>
                // },
                // {
                //     path: "book-doctor",
                //     element: <BookDoctor></BookDoctor>
                // },
                // {
                //     path: "see-doctor",
                //     element: <NearAbout></NearAbout>,
                //     exact: true
                // },
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
        }
    ]
)