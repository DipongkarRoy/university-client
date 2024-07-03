const items = [
  {
    key: "Dashboard",
    label: "Dashboard",
  },
  {
    key: "users-management",
    label: "User Management",
    children: [
      {
        key: "create-admin",
        label: "Create Admin",
      },
      {
        key: "create-faculty",
        label: "Create Faculty",
      },
      {
        key: "create-student",
        label: "Create Student",
      },
    ],
  },
];

const newAdmin = items.reduce((acc, item) => {
  if (item.key && item.label) {
    acc.push({
      path: item.key,
      element: "Navlink",
    });
  }

  if (item.children) {
    acc.push({
      path: item.key,
      element: item.label,
      children: item.children.map((child) => ({
        path: child.key,
        element: child.label,
      })),
    });
  }

  return acc;
}, []);

console.log(newAdmin);
