import {
  BiLogoFacebook,
  BiLogoFacebookSquare,
  BiLogoInstagram,
  BiLogoTwitter,
  BiLogoPinterest,
  BiLogoPinterestAlt,
} from "react-icons/bi";

export const NAV_LINKS = {
  MAIN: [
    {
      path: "/",
      label: "Home",
    },
    {
      path: "/venues",
      label: "Venues",
    },
    {
      path: "/about",
      label: "About",
    },
    {
      path: "/contact",
      label: "Contact",
    },
  ],
  AUTH: [
    {
      path: "/login",
      label: "Login",
    },
    {
      path: "/register",
      label: "Register",
    },
  ],
};

export const SOCIAL_LINKS = [
  {
    label: "Facebook",
    footerIcon: BiLogoFacebookSquare,
    contactIcon: BiLogoFacebook,
  },
  {
    label: "Instagram",
    footerIcon: BiLogoInstagram,
    contactIcon: BiLogoInstagram,
  },
  {
    label: "Twitter",
    footerIcon: BiLogoTwitter,
    contactIcon: BiLogoTwitter,
  },
  {
    label: "Pinterest",
    footerIcon: BiLogoPinterest,
    contactIcon: BiLogoPinterestAlt,
  },
];
