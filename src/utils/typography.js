import Typography from 'typography';
const typography = new Typography({
  baseFontSize: '20px',
  baseLineHeight: 1,
  headerWeight: 700,
  bodyWeight: 400,
  boldWeight: 700,
  googleFonts: [
    {
      name: 'Karla',
      styles: ['700'],
    },
    {
      name: 'Inconsolata',
      styles: ['400', '700'],
    },
  ],
  headerFontFamily: ['Karla', 'Verdana', 'Geneva', 'sans-serif'],
  bodyFontFamily: ['Inconsolata', 'Courier New', 'Courier', 'Monospace'],
});
export default typography;
