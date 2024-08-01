/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        vvsm: '380px',
        vsm: '576px',
        sm: '600px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        xxl: '1400px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '7rem',
        }
      },
      fontFamily: {
        roboto: ['var(--font-roboto)'],
      },
      fontSize: {
        md: "15px"
      },
      colors: {
        main:  "#7B1FA2",
        mainBlack: "#272729",
        mainGray: "#757F95",
        mainBg:"#f4f5f9",
        mainYellow: "#fad505",
      },
    },
    boxShadow: {
      "custom":"0 0 20px rgba(0, 0, 0, .08)",
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    }
  ],
}
