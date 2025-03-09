import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: 'Ahhf45',
  subtitle: 'GreenRoc的博客',
  lang: 'zh_CN',         // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko'
  themeColor: {
    hue:180,         // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
    fixed: false,     // Hide the theme color picker for visitors
  },
  banner: {
    enable: true,
    src: 'assets/banner.jpeg',   // Relative to the /src directory. Relative to the /public directory if it starts with '/'
    position: 'center',      // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
    credit: {
      enable: true,         // Display the credit text of the banner image
      text: 'Sofia Petterson',              // Credit text to be displayed
      url: 'https://unsplash.com/photos/a-purple-and-red-sunset-over-a-river-LKS4Yoxaxcw'
    }
  },
  toc: {
    enable: true,           // Display the table of contents on the right side of the post
    depth: 2                // Maximum heading depth to show in the table, from 1 to 3
  },
  favicon: [    // Leave this array empty to use the default favicon
    {
      src: '/favicon/logo.png',    // Path of the favicon, relative to the /public directory
    //   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
    //   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
    }
  ]
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    {
      name: "友链",
      url: "/links/",
    },
    LinkPreset.About,
    {
      name: "联系",
      url: "/contact/",
    },
    {
      name: "开往",
      url: "https://www.travellings.cn/go.html",
      external: true,
    },
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'assets/avatar.jpeg',  // Relative to the /src directory. Relative to the /public directory if it starts with '/'
  name: 'GreenRoc',
  bio: 'There is no fate but what we make for ourselves.',
  links: [
    {
      name: "GitHub",
      icon: "fa6-brands:github",
      url: "https://github.com/GreenRoc114",
    },
    {
      name: "Bilibili",
      icon: "fa6-brands:bilibili",
      url: "https://space.bilibili.com/1558348500",
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}
