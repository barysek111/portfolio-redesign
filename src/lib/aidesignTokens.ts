/**
 * Token map from docs/aidesign-os-design-system.json
 * Source: https://aidesign-os.com — visual rules only, not layout copy.
 */
export const aidesign = {
  color: {
    background: "#F6F6F6",
    surface: "#F5F5F3",
    textPrimary: "#1A1A1A",
    textSecondary: "#666666",
    textTertiary: "#999999",
    borderLight: "#E8E8E8",
    borderMedium: "#D0D0D0",
  },
  spacing: {
    sectionY: { mobile: 48, tablet: 80, desktop: 120 },
    sectionGap: { mobile: 48, tablet: 64, desktop: 96 },
    element: 24,
    large: 48,
  },
  motion: {
    durationMs: 250,
    easing: "cubic-bezier(0.4, 0, 0.2, 1)",
  },
} as const;
