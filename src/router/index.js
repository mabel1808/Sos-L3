import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import Services from "../views/Services.vue";
import Photos from "../views/Photos.vue";
import Videos from "../views/Videos.vue";
import South from "../views/South.vue";
import East from "../views/East.vue";
import North from "../views/North.vue";
import West from "../views/West.vue";
import Kigali from "../views/Kigali.vue";
import Translation from "../views/Translation.vue";



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
         path: "/photos",
         name: "Photos",
         component: Photos
     },
     {
         path: "/videos",
         name: "Videos",
         component: Videos
     }
    ,
    {
       path: "/translation",
       name: "Translation",
       component: Translation
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