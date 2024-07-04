import OfferCourse from "../pages/students/OfferCourse";
import StudentDashboard from "../pages/students/StudentDashboard";


export const StudentRoute = [

    {
        name:'dashboard',
        path: 'dashboard',
        element:<StudentDashboard/>
    },
    {
        name:'offercourses',
        path: 'offer-courses',
        element:<OfferCourse/>
    }
]