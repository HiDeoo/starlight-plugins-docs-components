import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'

export default defineConfig({
  integrations: [
    starlight({
      credits: true,
      customCss: ['./src/styles/custom.css'],
      editLink: {
        baseUrl: 'https://github.com/HiDeoo/starlight-plugins-docs-components/edit/main/docs/',
      },
      sidebar: [
        {
          label: 'Examples',
          autogenerate: { directory: 'examples' },
        },
      ],
      social: [
        {
          href: 'https://bsky.app/profile/hideoo.dev',
          icon: 'blueSky',
          label: 'Bluesky',
        },
        {
          href: 'https://github.com/HiDeoo/starlight-plugins-docs-components',
          icon: 'github',
          label: 'GitHub',
        },
      ],
      title: 'Starlight Plugins Docs Components',
    }),
  ],
})
