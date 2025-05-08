import { type RouteConfig, link_generator } from "@kokomi/link-generator";

const route_config = {
    home: {
        path: "/"
    },
    about: {
        path: "/about"
    },
    business: {
        path: "/business"
    },
    recruit: {
        path: "/recruit"
    },
    partner: {
        path: "/partner"
    }
} as const satisfies RouteConfig;

export const link = link_generator(route_config)