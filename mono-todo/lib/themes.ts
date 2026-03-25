export const themes = {
  light: "caramellatte",
  dark: "dark-caramel",
} as const

export type ThemeKey = keyof typeof themes
export type ThemeName = (typeof themes)[ThemeKey]
