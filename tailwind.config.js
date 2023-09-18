const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: [
    "./content/**/*.md",
    "./layouts/**/*.html",
    "./assets/js/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "search-bar-border-light": "#CCCCCC",
        "search-bar-border-dark": "#333333",
      },
      spacing: {
        "84": "21rem",
        "85": "23rem",
      },
      fontFamily: {
        "sans": ["Inter", ...defaultTheme.fontFamily.sans],
      },
      typography: (theme) => ({
        singularisart: {
          css: {
            "--tw-prose-body": theme("colors.gray[700]"),
            "--tw-prose-headings": theme("colors.gray[900]"),
            "--tw-prose-lead": theme("colors.gray[600]"),
            "--tw-prose-links": theme("colors.sky[600]"),
            "--tw-prose-bold": theme("colors.gray[900]"),
            "--tw-prose-counters": theme("colors.gray[500]"),
            "--tw-prose-bullets": theme("colors.gray[400]"),
            "--tw-prose-hr": theme("colors.gray[200]"),
            "--tw-prose-quotes": theme("colors.gray[900]"),
            "--tw-prose-quote-borders": theme("colors.gray[200]"),
            "--tw-prose-captions": theme("colors.gray[500]"),
            "--tw-prose-code": theme("colors.gray[900]"),
            "--tw-prose-pre-code": theme("colors.gray[200]"),
            "--tw-prose-pre-bg": theme("colors.gray[800]"),
            "--tw-prose-th-borders": theme("colors.gray[300]"),
            "--tw-prose-td-borders": theme("colors.gray[200]"),

            "--tw-prose-invert-body": theme("colors.gray[300]"),
            "--tw-prose-invert-headings": theme("colors.neutral[200]"),
            "--tw-prose-invert-lead": theme("colors.gray[400]"),
            "--tw-prose-invert-links": theme("colors.sky[500]"),
            "--tw-prose-invert-bold": theme("colors.neutral[300]"),
            "--tw-prose-invert-counters": theme("colors.gray[400]"),
            "--tw-prose-invert-bullets": theme("colors.gray[400]"),
            "--tw-prose-invert-hr": theme("colors.gray[700]"),
            "--tw-prose-invert-quotes": theme("colors.gray[100]"),
            "--tw-prose-invert-quote-borders": theme("colors.gray[700]"),
            "--tw-prose-invert-captions": theme("colors.gray[400]"),
            "--tw-prose-invert-code": theme("colors.neutral[300]"),
            "--tw-prose-invert-pre-code": theme("colors.gray[300]"),
            "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
            "--tw-prose-invert-th-borders": theme("colors.gray[600]"),
            "--tw-prose-invert-td-borders": theme("colors.gray[700]"),

            h1: {
              fontSize: "2.25rem",
              lineHeight: "2.5rem",
              marginBottom: "2rem",
              fontWeight: "600",
            },
            h2: {
              fontWeight: "550",
              fontSize: "1.5em",
              marginTop: "1em",
              marginBottom: "1em",
              lineHeight: "1.33",
            },
            h3: {
              fontWeight: "550",
              fontSize: "1.25em",
              marginTop: "1.6em",
              marginBottom: "0.6em",
              lineHeight: "1.6",
            },
            h4: {
              fontWeight: "550",
              marginTop: "1.5em",
              marginBottom: "0.5em",
              lineHeight: "1.5",
            },
            img: {
              marginTop: "0.5rem",
              marginBottom: "0.5rem",
            },
            code: {
              fontWeight: "normal",
            },
            "code::before": {
              content: "none",
            },
            "code::after": {
              content: "none",
            },
            a: {
              fontWeight: "normal",
              color: "var(--tw-prose-links)",
              "&:hover": {
                textDecoration: "underline",
              },
            },
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};
