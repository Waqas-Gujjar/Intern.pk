// tailwind.config.js
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}", // adjust if needed
    ],
    theme: {
      extend: {
        animation: {
          shine: 'shine 1.2s ease-in-out',
        },
        keyframes: {
          shine: {
            '0%': { boxShadow: '0 0 0px #42a824' },
            '50%': { boxShadow: '0 0 15px #42a824' },
            '100%': { boxShadow: '0 0 0px #42a824' },
          },
        },
      },
    },
    plugins: [],
  };
  