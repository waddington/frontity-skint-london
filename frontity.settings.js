const settings = {
  "name": "skint-london",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "skint-2022",
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://www.skintlondon.com",
          // "homepage": "/Home",
          // "postsPage": "/posts"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ]
};

export default settings;
