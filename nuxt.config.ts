import { resolve } from "path";
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: { "@": resolve(__dirname, '/') },
  css: ["~/assets/style.scss"],
  app: {
    head: {
      script: [
        { 'src': 'https://code.jquery.com/jquery-3.4.1.min.js', tagPosition: 'bodyClose' },
        { 'src': 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js', tagPosition: 'bodyClose' },
        { 'src': 'counterup/counterup.min.js', tagPosition: 'bodyClose' },
        { 'src': 'wow/wow.js', tagPosition: 'bodyClose' },
        { 'src': 'easing/easing.js', tagPosition: 'bodyClose' },
        { 'src': 'owlcarousel/owl.carousel.js', tagPosition: 'bodyClose' },
        { 'src': 'waypoints/waypoints.min.js', tagPosition: 'bodyClose' },
        { 'src': 'tempusdominus/js/moment.min.js', tagPosition: 'bodyClose' },
        { 'src': 'tempusdominus/js/moment-timezone.min.js', tagPosition: 'bodyClose' },
        { 'src': 'tempusdominus/js/tempusdominus-bootstrap-4.min.js', tagPosition: 'bodyClose' },
        { 'src': 'main.js', tagPosition: 'bodyClose' }
      ],
    },
  },

})




