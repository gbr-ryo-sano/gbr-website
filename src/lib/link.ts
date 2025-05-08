import { type RouteConfig, link_generator } from '@kokomi/link-generator';

const route_config = {
	home: {
		path: '/'
	},
	about: {
		path: '/about'
	},
	philosophy: {
		path: "/philosophy"
	},
	business: {
		path: '/business'
	},
	recruit: {
		path: '/recruit'
	},
	contact: {
		path: '/contact'
	},
	policy: {
		path: "/policy"
	},
    dummy_image: {
        path: "https://dummyimage.com/:detail",
    }
} as const satisfies RouteConfig;

export const link = link_generator(route_config);
