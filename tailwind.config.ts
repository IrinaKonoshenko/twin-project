export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "0px",
      },
      screens: {
        sm: "1120px",
        md: "1120px",
        lg: "1120px",
        xl: "1120px",
        "2xl": "1120px",
      },
      colors: {
        primary: "#F0F3FF",
        secondary: "#466FFF",
        yellow: "#C28B00",
        pink: "#FF4286",
        green: "#1DA054",
        stars: "#FFC700",
        "light-blue": "#32B5EE",
        "light-green": "#1DCA66",
        violet: "#A156FF",
        "black-text": "#232838",
        "border-off": "#DCD8E3",
        "input-label": "#9E9BB1",
        disabled: "#F8F7FA",
        h: "#25374E",
        text: "#435269",
        blue: "#007BFF",
        description: "#58546F",
      },
      fontSize: {
        header1: ["30px", { lineHeight: "40px", fontWeight: "700" }],
        header2: ["20px", { lineHeight: "32px", fontWeight: "700" }],
        header3: ["18px", { lineHeight: "24px", fontWeight: "700" }],
        header4: ["16px", { lineHeight: "24px", fontWeight: "500" }],
        header5: ["14px", { lineHeight: "24px", fontWeight: "500" }],
        header6: ["13px", { lineHeight: "16px", fontWeight: "500" }],
        header7: ["11px", { lineHeight: "16px", fontWeight: "500" }],
        normal: ["14px", { lineHeight: "24px" }],
        small: ["13px", { lineHeight: "16px" }],
        verySmall: ["12px", { lineHeight: "16px" }],
        extraSmall: ["10px", { lineHeight: "12px", fontWeight: "500" }],
        h1: ["46px", { lineHeight: "55.66px", fontWeight: "500" }],
        p: ["20px", { lineHeight: "28.4px" }],
      },
    },
  },
  plugins: [],
};
