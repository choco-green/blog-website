module.exports = {
    mode: "jit",
    content: [ "./src/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}",
               "./public/*.html" ],
    darkMode: "media", // or 'media' or 'class'
    theme: {
        extend: {
            screens: {
                "xxs": "350px",
                "xs": "500px",
            },
        },
    },
    plugins: [
        require("@tailwindcss/line-clamp"),
    ],
};
