/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#3B40D5",
        secondary: "#3CFFA1",
        input:"#F2F2F2",
        txtPrimary:'#130A3B',
        stroke:"#D9D2D2",
      },
      borderRadius:{
        'dm':"4px"
      }
    },
  },
  plugins: [],
}

