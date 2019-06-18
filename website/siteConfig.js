/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/overwolf-logo_300x240.svg',
    infoLink: 'https://www.overwolf.com',
    pinned: true,
  },
];

const siteConfig = {
  title: ' ', // Title for your website.
  homepage_title: 'Overwolf Developers',
  tagline: 'Easily create apps for PC gamers',
  url: 'https://overwolf.github.io', // Your website URL
  baseUrl: '/developers-site/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'developers-site',
  organizationName: 'overwolf',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'start/getting-started', label: 'Getting Started'},
    {doc: 'topics/best-practices-overview', label: 'Docs'},
    {doc: 'api/overwolf-api-overview', label: 'API'},
    {doc: 'status/all', label: 'Status'},
    {doc: 'download/download-overview', label: 'Download'},
	  {doc: 'api/changelog', label: 'Changelog'},
    //{blog: true, label: 'Blog'},
    {href: 'https://medium.com/overwolf-developers', label: 'Blog' },
    {href: 'https://discuss.developers.overwolf.com/', label: 'Q&A' },
	  {doc: 'support/contact-us', label: 'Support'},  //{page: 'help', label: 'Support'}
	  {search: true }
  ],

  markdownPlugins: [
    // Highlight admonitions.
    require('remarkable-admonitions')({ icon: 'svg-inline' })
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/ow-logo.svg',
  footerIcon: 'img/ow-logo.svg',
  favicon: 'img/ow-favicon.ico',

  /* Colors for website */
  colors: {
    primaryColor: '#20232a', //2E8555
    secondaryColor: '#205C3B',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */
  editUrl: 'https://github.com/overwolf/developers-site/tree/master/docs/',
  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Overwolf`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/highlight.min.js', 'https://buttons.github.io/buttons.js',  'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js','/js/code-block-buttons.js'],
  stylesheets: ['https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/styles/default.min.css', '/css/code-block-buttons.css'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/docusaurus.png',
  twitterImage: 'img/docusaurus.png',

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
   enableUpdateTime: true,
   enableUpdateBy: true,
   scrollToTop: true,
   scrollToTopOptions: {
    zIndex: 100,
    backgroundColor: '#20232A',
  },
   docsSideNavCollapsible: true

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;