import { Layout, Menu } from "antd";
import { sidebarItemsGanarators } from "../../utils/sidebarItem.genarator";
import { adminPath } from "../../routes/Admin.routes";
import { FacultyRoute } from "../../routes/Faculty.routes";
import { StudentRoute } from "../../routes/Student.routes";
const { Sider } = Layout;

const userRoles = {
  ADMIN: "admin",
  STUDENT: "student",
  FACULTY: "faculty",
};
const Sidebar = () => {
  const role = "admin";
  let sidebarItems;
  switch (role) {
    case userRoles.ADMIN:
      sidebarItems = sidebarItemsGanarators(adminPath, userRoles.ADMIN);
      break;
    case userRoles.FACULTY:
      sidebarItems = sidebarItemsGanarators(FacultyRoute, userRoles.FACULTY);
      break;
    case userRoles.STUDENT:
      sidebarItems = sidebarItemsGanarators(StudentRoute, userRoles.STUDENT);
      break;
    default:
      break;
  }

  return (
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
      <div
        style={{
          color: "white",
          font: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ height: "20px" }}>PH UNIVERSITY</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={(sidebarItems)}
      />
    </Sider>
  );
};

export default Sidebar;
