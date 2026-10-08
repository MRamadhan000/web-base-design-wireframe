export const typography = {
  display: {
    className:
      "text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-foreground",
  },

  heading: {
    className:
      "text-2xl md:text-3xl font-bold leading-tight text-foreground",
  },

  title: {
    className:
      "text-lg md:text-xl font-semibold leading-snug text-foreground",
  },

  body: {
    className:
      "text-base font-normal leading-7 text-foreground",
  },

  caption: {
    className:
      "text-xs md:text-sm font-normal leading-5 text-muted-foreground",
  },
} as const;

export type TypographyVariant = keyof typeof typography;