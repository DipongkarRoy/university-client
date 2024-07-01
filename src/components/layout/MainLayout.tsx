import { Layout, Menu, MenuProps } from "antd";

import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Outlet } from "react-router-dom";


const { Header, Content, Footer, Sider } = Layout;

const items:MenuProps['items'] = [{
  key: "content",
  icon: <UserOutlined />,
  label: "Content",

},
{
  key: "useroutlined",
  icon: <VideoCameraOutlined />,
  label: "useroutlined",
},{
  key: "Dashboard",
  icon: <UploadOutlined />,
  label: "Dashboard",
  children:[
    {
      key:'home',
      label:'home'
    },
    {
      key:'about',
      label:'about'
    },
    { 
      key:'contact',
      label:'contact'
    }
  ]
}

];

const MainLayout = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      
      <Sider
      
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <div style={{color:'white' ,font:'4rem' ,display:'flex' ,justifyContent:'center',alignItems:'center'}}>
        <h1 style={{height:'20px'}}>PH UNIVERSITY</h1>
      </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} />
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
