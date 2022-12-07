// docs/.vitepress/theme/index.ts
import type { Theme } from 'vitepress'
import { VPTheme } from 'vitepress-theme-you'

// https://github.com/antfu/unocss
import 'uno.css'

const theme: Theme = {
  ...VPTheme,
  enhanceApp: ({ app }) => {},
}

export default theme