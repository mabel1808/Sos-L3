import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import Services from "../views/Services.vue";
import South from "../views/South.vue";
import East from "../views/East.vue";
import North from "../views/North.vue";
import West from "../views/West.vue";
import Kigali from "../views/Kigali.vue";



const routes= [
    {
    path:"/",
    name:"Home",
    component: Home
    },

    {
       path: "/about",
       name: "About",
       component: About
    },
    {
       path: "/contact",
       name: "Contact",
       component: Contact
    },  
    {
       path: "/services",
       name: "Services",
       component: Services
    }
    ,
    {
    path: "/north",
    name: "North",
    component: North
},

{
    path: "/west",
    name: "West",
    component: West
},
{
    path: "/south",
    name: "South",
    component: South
},

{
    path: "/east",
    name: "East",
    component: East
},
{
    path: "/kigali",
    name: "Kigali",
    component: Kigali
},
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router;