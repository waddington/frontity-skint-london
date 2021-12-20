import Root from "./theme";
import image from "@frontity/html2react/processors/image";
import iframe from "@frontity/html2react/processors/iframe";
import link from "@frontity/html2react/processors/link";

export default {
  name: "skint-2022",
  roots: {
    theme: Root
  },
  state: {
    theme: {
      menu: [
        {
          name: "Home",
          href: '/',
        },
        {
          name: "Food & Drink",
          href: '/category/food-drink/',
          submenu: [
            {
              name: "Budget Bites",
              href: "/category/food-drink/budget-bites/"
            },
            {
              name: "Student",
              href: "/category/food-drink/student/"
            },
          ]
        },
        {
          name: "Culture",
          href: '/category/culture/',
          submenu: [
            {
              name: "Theatre & Music",
              href: "/category/culture/theatre-music/"
            },
            {
              name: "Film & Telly",
              href: "/category/culture/film/"
            },
            {
              name: "Arts & Museums",
              href: "/category/culture/arts-museums/"
            },
            {
              name: "Nightlife & Comedy",
              href: "/category/culture/nightlife-comedy/"
            },]
        },
        {
          name: "Style",
          href: '/category/style/',
          submenu: [
            {
              name: "Home & Fashion",
              href: "/category/style/homefashion/"
            },
            {
              name: "Beauty & Health",
              href: "/category/style/healthfitness/"
            },
          ]
        },
        {
          name: "Family",
          href: '/category/family/',
          submenu: [
            {
              name: "Weekend",
              href: "/category/family/weekend/"
            },]
        },
        {
          name: "News",
          href: '/category/news/',
        },
        {
          name: "Travel",
          href: '/category/family/travel/',
        },
        {
          name: "Agency",
          href: '/category/agency/',
        },
      ],
      isUrlVisible: true,
      isMobileMenuOpen: false,
      scrollPosition: 0,
    }
  },
  actions: {
    theme: {
      toggleMobileMenu: ({state}) => {
        state.theme.isMobileMenuOpen = !state.theme.isMobileMenuOpen
      }

    }
  }
};
