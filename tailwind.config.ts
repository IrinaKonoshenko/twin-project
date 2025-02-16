export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F0F3FF",
        secondary: "#466FFF",
        yellow: "#C28B00",
        pink: "#FF4286",
        green: "#1DA054",
        stars: "#E5A831",
        "light-blue": "#32B5EE",
        "light-green": "#1DCA66",
        violet: "#A156FF",
        "black-text": "#232838",
        "border-off": "#DCD8E3",
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
      },
    },
  },
  plugins: [],
};
