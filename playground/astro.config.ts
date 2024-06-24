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
      social: {
        github: 'https://github.com/HiDeoo/starlight-plugins-docs-components',
      },
      title: 'Starlight Plugins Docs Components',
    }),
  ],
})
