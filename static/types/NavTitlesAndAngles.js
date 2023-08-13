// type that holds the current route, the angle at which the arrow should point, and the text that should be displayed with the arrow, and where it should link to
const NavTitlesAndAngles = {
    "/": {
        angle: 0,
        text: "Posts",
        href: "/posts",

    },
    "/posts": {
        angle: 180,
        text: "Home",
        href: "/",
    },
    "/posts/[slug]": {
        angle: -45,
        text: "Posts",
        href: "/posts",
    },    

}

export default NavTitlesAndAngles;