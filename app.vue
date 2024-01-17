<script setup>
const menu = [
  {
    "name": "Home",
    "to": "/"
  },
  {
    "name": "About",
    "to": "/about"
  },
  {
    "name": "Services",
    "to": "/services"
  },
  {
    "name": "Rooms",
    "to": "/rooms"
  },
  {
    "name": "Booking",
    "to": "/booking"
  },
  {
    "name": "Contact",
    "to": "/contact"
  }
]

</script>

<template>
  <TopNav :items-menu="menu" />
  <NuxtPage />
  <Footer />
</template>
