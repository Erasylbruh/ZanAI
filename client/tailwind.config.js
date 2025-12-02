/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#D97706", // Amber/Gold
                secondary: "#1E293B", // Slate 800
            },
        },
    },
    plugins: [],
}
