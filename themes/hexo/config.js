const CONFIG = {
  HEXO_HOME_BANNER_ENABLE: true,
  // Starting from version 3.14.1, the greetings are configured in blog.config.js, separated by commas ','.
  HEXO_HOME_BANNER_GREETINGS: ["Yo! I'm Jon. A BJJ Coach & Fighter", 'Fighter & Coder'], // Text for the homepage banner

  HEXO_HOME_NAV_BUTTONS: true, // Whether to show category buttons on the homepage
  // Known unresolved bug, images fail to load on mobile when set to true; Temporarily recommended to set as false.
  HEXO_HOME_NAV_BACKGROUND_IMG_FIXED: true, // Whether the background image on the homepage is fixed when scrolling; true means the image does not move with scroll; false means it moves with scroll.
  // Whether to show the start reading button
  HEXO_SHOW_START_READING: true,

  // Menu configuration
  HEXO_MENU_INDEX: true, // Show homepage
  HEXO_MENU_CATEGORY: true, // Show categories
  HEXO_MENU_TAG: false, // Show tags
  HEXO_MENU_ARCHIVE: true, // Show archives
  HEXO_MENU_SEARCH: true, // Show search

  HEXO_POST_LIST_COVER: true, // Show cover images in the list
  HEXO_POST_LIST_COVER_HOVER_ENLARGE: false, // Enlarge cover images on hover in the list

  HEXO_POST_LIST_COVER_DEFAULT: true, // Use the site background as the default cover when the cover is empty
  HEXO_POST_LIST_SUMMARY: true, // Article summary
  HEXO_POST_LIST_PREVIEW: false, // Load article preview
  HEXO_POST_LIST_IMG_CROSSOVER: true, // Alternate images on the left and right in the blog list

  HEXO_ARTICLE_ADJACENT: true, // Show recommendations for the previous and next articles
  HEXO_ARTICLE_COPYRIGHT: true, // Show article copyright notice
  HEXO_ARTICLE_RECOMMEND: true, // Article related recommendations

  HEXO_WIDGET_LATEST_POSTS: true, // Show the latest posts card
  HEXO_WIDGET_ANALYTICS: false, // Show analytics card
  HEXO_WIDGET_TO_TOP: true,
  HEXO_WIDGET_TO_COMMENT: true, // Jump to the comment section
  HEXO_WIDGET_DARK_MODE: true, // Dark mode
  HEXO_WIDGET_TOC: true // Floating table of contents on mobile
}
export default CONFIG
