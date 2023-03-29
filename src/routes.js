/*!

=========================================================
* Paper Dashboard React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import Notifications from "views/Notifications.js";
import Icons from "views/Icons.js";
import Typography from "views/Typography.js";
import TableList from "views/Tables.js";
import Maps from "views/Map.js";
import UserPage from "views/User.js";
import UserProfile from "views/UserProfile.js";
import UpgradeToPro from "views/Upgrade.js";
import TSIG1 from "./views/TSIG1"
import TSIG2 from "./views/TSIG2"
import AJE1 from "./views/AJE1"
import AJE2 from "./views/AJE2"
import EPPE1 from "./views/EPPE1"
import EPPE2 from "./views/EPPE2"
import New from "views/New";
import NewTech from "views/NewTech";
import TablesTeach from "views/TablesTeach";
import EPPEFE1 from "views/EPPE1FE"
import EPPEFE2 from "views/EPPE2FE"
var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin"
  },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "nc-icon nc-diamond",
  //   component: Icons,
  //   layout: "/admin"
  // },
  {
    path: "/maps",
    name: "شهادة الحضور",
    icon: "nc-icon nc-tile-56",
    component: Maps,
    layout: "/admin"
  },
 
  {
    path: "/user-page",
    component: UserPage,
    layout: "/admin"
  },
  
  {
    path: "/tables",
    name: "قائمة التلامذة",
    icon: "nc-icon nc-tile-56",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/tablesTeach",
    name: "قائمة المعلمين",
    icon: "nc-icon nc-tile-56",
    component: TablesTeach,
    layout: "/admin"
  },
  {
    path: "/TSIG1",
    name: "تقني مساندة في اعلامبة التصرف 1",
    icon: "nc-icon nc-single-02",
    component: TSIG1,
    layout: "/admin"
  },
  {
    path: "/TSIG2",
    name: "تقني مساندة في اعلامبة التصرف 2",
    icon: "nc-icon nc-single-02",
    component: TSIG2,
    layout: "/admin"
  },
  {
    path: "/AJE1",
    name: "منشط روضة اطفال 1",
    icon: "nc-icon nc-single-02",
    component: AJE1,
    layout: "/admin"
  },
  {
    path: "/AJE2",
    name: "منشط روضة اطفال 2",
    icon: "nc-icon nc-single-02",
    component: AJE2,
    layout: "/admin"
  },
  {
    path: "/EPPE1",
    name: "مربي طفولة اولى و مبكرة 1",
    icon: "nc-icon nc-single-02",
    component: EPPE1,
    layout: "/admin"
  },
  {
    path: "/EPPE2",
    name: "مربي طفولة اولى و مبكرة 2",
    icon: "nc-icon nc-single-02",
    component: EPPE2,
    layout: "/admin"
  },
  {
    path: "/EPPEFE1",
    name: "مربي طفولة اولى فيفري 1",
    icon: "nc-icon nc-single-02",
    component: EPPEFE1,
    layout: "/admin"
  },
  {
    path: "/EPPEFE2",
    name: "مربي طفولة اولى فيفري 2",
    icon: "nc-icon nc-single-02",
    component: EPPEFE2,
    layout: "/admin"
  },
  {
    path: "/NewStudent",
    name: "(ة)اضافة تلميذ",
    icon: "nc-icon nc-single-02",
    component: New,
    layout: "/admin"
  },
  {
    path: "/NewTeacher",
    name: "اضافة معلم(ة)",
    icon: "nc-icon nc-single-02",
    component: NewTech,
    layout: "/admin"
  },
];
export default routes;
