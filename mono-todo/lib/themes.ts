export const themes = {
  light: "caramellatte",
  dark: "forest",
} as const

export type ThemeKey = keyof typeof themes
export type ThemeName = (typeof themes)[ThemeKey]
