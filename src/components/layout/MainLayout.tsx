import { Button, Layout } from "antd";


import {   Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useAppDispatch } from "../../redux/hook";
import { logOut } from "../../redux/features/auth/AuthSlice";


const { Header, Content, Footer} = Layout;

// const items:MenuProps['items'] = [
// {
//   key: "Dashboard",
//   label: <NavLink to='/admin/dashboard'>Dashboard</NavLink>,
// },
// {
//   key: "users-management",
//   label:'User Management',
//   children:[
//     {
//       key:'create-admin',
//       label:<NavLink to='/admin/create-admin'>Create Admin</NavLink>,
//     },
//     {
//       key:'create-faculty',
//       label:<NavLink to='/admin/create-faculty'>Create Faculty</NavLink>,
//     },
//     {
//       key:'create-student',
//       label:<NavLink to='/admin/create-students'>Create Student</NavLink>,
//     },
//   ]
// }

// ];

const MainLayout = () => {

  const dispatch = useAppDispatch()
  const handleLogout = ()=>{
    dispatch(logOut());
  }
  return (
    <Layout style={{ height: "100vh" }}>
      
      {/* components */}
      <Sidebar/>
      <Layout>
        <Header><Button onClick={handleLogout}>logout</Button></Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
          <Outlet/>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
