import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: "en-US",
  title: "Awesome Android Root",
  description: "A comprehensive, curated list of Android root apps, tools, and utilities. Includes ad blockers, system tools, customization apps, and root-specific utilities.",
  ignoreDeadLinks: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico', sizes: 'any' }],
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],

    ['link', { rel: 'canonical', href: 'https://awesome-android-root.netlify.app/' }],
    ['link', { rel: 'dns-prefetch', href: 'https://awesome.re' }],
    ['link', { rel: 'preconnect', href: 'https://awesome.re' }],
    ['link', { rel: 'dns-prefetch', href: 'https://profile-counter.glitch.me/' }],
    ['link', { rel: 'preconnect', href: 'https://profile-counter.glitch.me/' }],
        
    // OpenGraph Meta Tags
    ['meta', { property: 'og:title', content: 'Awesome Android Root' }],
    ['meta', { property: 'og:description', content: 'A comprehensive, curated list of Android root apps, tools, and utilities. Includes ad blockers, system tools, customization apps, and root-specific utilities.' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:image', content: 'https://raw.githubusercontent.com/fynks/awesome-android-root/refs/heads/main/docs/public/images/logo.png' }],
    ['meta', { property: 'og:url', content: 'https://awesome-android-root.netlify.app/' }],
    ['meta', { property: 'og:site_name', content: 'Awesome Android Root' }],
    
    // Twitter Card Meta Tags
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'Awesome Android Root' }],
    ['meta', { name: 'twitter:description', content: 'A comprehensive, curated list of Android root apps, tools, and utilities. Includes ad blockers, system tools, customization apps, and root-specific utilities.' }],
    ['meta', { name: 'twitter:image', content: 'https://raw.githubusercontent.com/fynks/awesome-android-root/refs/heads/main/docs/public/images/logo.png' }],

    // SEO Meta Tags
    ['meta', { name: 'keywords', content: 'android root, root apps, magisk modules, xposed modules, android customization, android tools, root utilities, android mods, cool rooted android apps, android root tool, root apk for android, adb debugging toolreddit, root apps for android, android tweaking toolbox without root, android os netlify, termux android root, how to root android in termux, android root app, how to get root access in termux without rooting your android root, awesome android root, android rooten, how to root magisk any samsung devices android 14 2024, app root for android, sdf tools android root, how to use terminal emulator in android device root, android jailbreak rooter, android root software, how to root android termux, lsposed zygisk, android root nobody, app root android, how to install parrot os on android without root youtube, debloating solution, awesome root android, android root jar, android run an app as root, awesome android kotlin apps, how to root andoid in temux, kernelsu, install parrot os on android termux non root youtube, android root file name, andid oot, android root tools, install kali linux on android without root andronix termux youtube, termux root android hilfe, adb macrodroid, android root modify app classification, toop 5 root application on android, root genes android, awesome android, aandroid root tool, best apps for rooted android reddit, root android app apk, youtube netlify lite app, git awesome android rot, start android app with root, andri root, apps to root android, root and other apps android, apps for rooting android from play store, rooted andoid 15, xposed installer 官网, apatch root, install hydra on termux in android without root youtube, qmqm.netlify.app, root, they like the applications to be integrated in the android root, android permissions list, tools to root android device, run termux command from kernel mamager, how to install termux on android no root, root package manager android, android hilfe rooten' }],
    ['meta', { name: 'author', content: 'Fynks' }],
    ['meta', { name: 'robots', content: 'index, follow' }],
    ['meta', { name: 'language', content: 'English' }]

    ],
  themeConfig: {
    logo: {
      light: '/images/logo.svg',
      dark: '/images/logo_dark.svg',
      alt: 'Site Logo'
    },
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Apps', link: '/apps' },
      { text: 'Rooting Guides', link: '/rooting-guides/' },
      { text: 'FAQs', link: '/faqs' }
    ],
    sidebar: [
      {
        text: 'Rooting Guides',
          items: [
            { text: 'Basics', link: '/rooting-guides/' },
            { text: 'Xiaomi', link: '/rooting-guides/xiaomi' },
            { text: 'Samsung', link: '/rooting-guides/samsung' },
            { text: 'pixel', link: '/rooting-guides/pixel' }
        ]
      },
      {text: 'Navigation',
        items: [
          {text: 'Home', link: '/'},
          {text: 'Apps', link: '/apps'},
          {text: 'FAQs', link: '/faqs'},
          {text: 'Contributions', link: '/contributing'},
        ]

      }
    ],
    footer: {
      message: "Released under the UnLicensed License."
    }
  }
})
