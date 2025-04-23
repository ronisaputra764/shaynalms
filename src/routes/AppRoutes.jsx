import { Routes, Route } from "react-router-dom";
import SignIn from "../pages/SignIn";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import Pricing from "../pages/Pricing";
import ManageCourse from "../pages/ManageCourse";
import ManageCourseMateri from "../pages/ManageCourseMateri";
import Students from "../pages/Students";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/manage-course" element={<ManageCourse />} />
            <Route path="/manage-course-materi" element={<ManageCourseMateri />} />
            <Route path="/students" element={<Students />} />
        </Routes>
    );
};

export default AppRoutes;