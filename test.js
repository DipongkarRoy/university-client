const array = [1, 2,4,5,6,8,9];

const result = array.reduce((acc ,items)=>{
    acc.push(acc+items)
    return acc;

},[]);

console.log(result);

const adminPath2 = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    element: "ADMIN_Dashboard",
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "/admin/create-admin",
        element: "CREATE_ADMIN",
      },
      {
        name: "Create Faculty",
        path: "/admin/create-faculty",
        element: "CREATE_Faculty",
      },
      {
        name: "Create Student",
        path: "/admin/create-students",
        element: "CREATE_students",
      },
    ],
  },
];

const newArray = adminPath2.reduce((acc ,item)=>{
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
console.log(newArray);

