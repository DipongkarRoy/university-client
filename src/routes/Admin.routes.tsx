
import { ReactNode } from "react";
import AdminDashbord from "../pages/admin/AdminDashbord";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";
import { NavLink } from "react-router-dom";


type TAdminTypeProps ={
    path:string,
    element:React.ReactNode,
    children?:TAdminTypeProps[]
}

type TSidebarItem = {
    key: string;
    label: ReactNode;
    children?: TSidebarItem[];
  };

const adminPath  = [
    {
        name:'Dashboard',
        path:'dashboard',
        element:<AdminDashbord/>
    },
    {
        name:"User Management",
        children :[
            {
                name:'Create Admin',
                path:'create-admin',
                element:<CreateAdmin/>
            },
            {
                name:'Create Faculty',
                path:'create-faculty',
                element:<CreateFaculty/>
            },
            {
                name:'Create Student',
                path:'create-students',
                element:<CreateStudent/>
            }
        ]
    }
]

//sidebar navigation items for admin routes:
export const adminSidebarItems = adminPath.reduce(
    (acc: TSidebarItem[], item) => {
      if (item.path && item.name) {
        acc.push({
          key: item.name,
          label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
        });
      }
  
      if (item.children) {
        acc.push({
          key: item.name,
          label: item.name,
          children: item.children.map((child) => ({
            key: child.name,
            label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
          })),
        });
      }
  
      return acc;
    },
    []
  );

/**Programathical route lear pannel */

export const adminRoutes = adminPath.reduce((acc:TAdminTypeProps[] ,item)=>{
    if(item.path && item.element){
     acc.push({
         path:item.path,
         element:item.element,
     })
    }
    if(item.children){
     item.children.forEach((child)=>{
         acc.push({
             path:child.path,
             element:child.element,
         })
     })
    }
     return acc;
 },[])
 console.log(adminPath);
 

/** 
 * 
 * export const adminPath = [
    {
      path: "dashboard",
      element: <AdminDashbord />,
    },
    {
      path: "create-admin",
      element: <CreateAdmin />,
    },

    {
      path: "create-faculty",
      element: <CreateFaculty />,
    },
    {
      path: "create-students",
      element: <CreateStudent />,
    },
  ]
    
  * */
