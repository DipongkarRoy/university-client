import FacultyDashboard from "../pages/faculty/FacultyDashboard";
import OfferCourse from "../pages/faculty/OfferCourse";


export const FacultyRoute = [
    {   name: 'dashboard',
        path: 'dashboard',
        element: <FacultyDashboard />
    },
    {
        name:'offercourses',
        path:'offer-courses',
        element:<OfferCourse/>
    }
]