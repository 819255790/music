import VueRouter from "vue-router"

import Index from "./pages/Index"
import Tuijian from "./pages/Tuijian"
import Hot from "./pages/Hot"
import Search from "./pages/Search"
import Detail from "./pages/Detail"
import Play from "./pages/Play"

let router = new VueRouter({
    routes: [{
            path: "/",
            redirect: "/index/tuijian"
        },
        {
            path: "/index",
            component: Index,
            children: [{
                    path: "/index/tuijian",
                    component: Tuijian,

                },
                {
                    path: "/index/hot",
                    component: Hot
                },
                {
                    path: "/index/search",
                    component: Search

                }
            ]
        }, {

            path: "/index/tuijian/detail",
            component: Detail

        }, {
            name:"play",
            path: "/index/play/:id",
            component: Play

        }
    ],
    linkActiveClass: "active",
})

export default router