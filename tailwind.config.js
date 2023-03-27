/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary": "#0069FF",
        "dark": "#111827",
        "gallery": "#EFEFEF",
        "light-gray1": "#666666",
        "mine-shaft": "#333333",
        "light-gray2": "#707070",
        "light-gray3": "#6B7280",
        "light-gray4": "#4D4D4D",
        "brown1": "#532D00",
        "brown2": "#412300",
        "mine-shaft": "#212121",
        "ffffff00": "#FFFFFF00",
        "tree-poppy": "#F7931E",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
