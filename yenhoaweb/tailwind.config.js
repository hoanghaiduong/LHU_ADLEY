/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"], // Quét các file html và js trong thư mục src
  theme: {
    extend: {
      colors: {
        'forest-green': '#2d6a4f', // Xanh lá cây đậm của rừng
        'earth-brown': '#8c5a3b',  // Nâu của gỗ, đất
        'soft-beige': '#f5f5dc',   // Màu Be/Nền
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'], // Font cho tiêu đề
        'sans': ['Montserrat', 'sans-serif'],   // Font cho nội dung
      },
      // Thêm họa tiết thổ cẩm làm background-image
      backgroundImage: {
        'brocade-pattern': "url('/assets/images/tho-cam-pattern.svg')",
      }
    },
  },
  plugins: [],
}