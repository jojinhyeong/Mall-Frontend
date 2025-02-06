import { Suspense, lazy } from "react";
const Loading = <div>Loading....</div>

const Login = lazy(() => import("../pages/member/loginPage")) 
const Logout = lazy(() => import("../pages/member/logoutPage")) 

const memberRouter = () => {
    return [
        {
            path: "login",
            element: <Suspense fallback={Loading}><Login/></Suspense>
        },
        {
            path: "logout",
            element: <Suspense fallback={Loading}><Logout/></Suspense>
        }
    ]
}
export default memberRouter