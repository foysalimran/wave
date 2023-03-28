/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary": "#0069FF",
        "secondary": "#FBFBFB",
        "dark": "#111827",
        "gallery": "#EFEFEF",
        "light-gray1": "#666666",
        "dark-secondary": "#333333",
        "light-gray2": "#707070",
        "light-gray3": "#6B7280",
        "light-gray4": "#4D4D4D",
        "brown1": "#532D00",
        "brown2": "#412300",
        "mine-shaft": "#212121",
        "ffffff00": "#FFFFFF00",
        "tree-poppy": "#F7931E",
      },
      screens: {
        'xs': {'max': '448px'},
        'xsmin': {'min': '449px'},
      },
      padding: {
        '15': '60px',
      },
      margin: {
        '15': '60px',
      },
      height: {
        '15': '60px',
      },
      width: {
        '15': '60px',
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
