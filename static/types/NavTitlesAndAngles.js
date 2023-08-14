/*

Object used for the page transition events, routing, and the angle of the arrow in the nav bar. each obj contains:
- angle: the angle of the arrow in the nav bar
- text: the text of the arrow in the nav bar
- href: the href of the arrow in the nav bar
- pageTransition: the page transition object for the page transition component

*/

const NavTitlesAndAngles = {
  "/": {
    angle: 0,
    text: "Posts",
    href: "/posts",
    pageTransition: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      animate: {
        x: 0,
        opacity: 1,
      },
      exit: {
        x: "100%",
        opacity: 0,
      },
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  },
  "/posts": {
    angle: 180,
    text: "Home",
    href: "/",
    pageTransition: {
      initial: {
        x: "100%",
        opacity: 0,
      },
      animate: {
        x: 0,
        opacity: 1,
      },
      exit: {
        x: "-100%",
        opacity: 0,
      },
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  },
  "/posts/[slug]": {
    angle: 180,
    text: "Posts",
    href: "/posts",
    pageTransition: {
      initial: {
        opacity: 0,
      },
      animate: {
        opacity: 1,
      },
      exit: {
        opacity: 0,
      },
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  },
};

export default NavTitlesAndAngles;
