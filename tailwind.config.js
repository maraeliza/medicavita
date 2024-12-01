module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        "gray-20": "#E0E7FF", // Azul claro
        "gray-50": "#D1D9FF", // Azul suave
        "gray-100": "#A3B8FF", // Azul mais profundo
        "gray-500": "#2D3A5F", // Cinza azulado escuro, mais sóbrio e elegante
        "primary-100": "#A3C8FF", // Azul claro suave, mais calmo e agradável
        "primary-300": "#4287F5", // Azul médio, mais vibrante e dinâmico
        "primary-500": "#0056B3", // Azul vibrante, mais forte e sofisticado
        "secondary-400": "#6FB5A9", // Verde-azulado suave, mais equilibrado e tranquilo
        "secondary-500": "#56A5DD", // Verde-azulado mais forte, mais profundo e sério
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred":
          "linear-gradient(90deg, #6EE7B7 0%, #3B82F6 100%)", // Gradiente azul-verde
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
