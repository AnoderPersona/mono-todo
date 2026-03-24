export const themes = {
  light: "caramellatte",
  dark: "halloween",
} as const

export type ThemeKey = keyof typeof themes
export type ThemeName = (typeof themes)[ThemeKey]
