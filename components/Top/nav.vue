<script setup>
const obj = ref(null)
const title = ref("")
const props = defineProps({
  itemsMenu: {
    type: Array,
    default: () => []
    // required: true
  }
})
async function logData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  obj.value = await response.json();
  title.value = obj.value ? " - " + obj.value.title : "";
  console.log(obj.value.title);
}

onMounted(() => {
  console.log(props.itemsMenu);

  logData();
})
</script>

<template>

  <div class="container-xxl bg-white p-0">
    <div id="spinner"
      class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
      <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    
    <!-- Header Start -->
    <div class="container-fluid bg-dark px-0">
      <div class="row gx-0">



        <nuxt-link to="/" class="col-lg-3 bg-dark d-none d-lg-block">
          <a href='/' class="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center">
            <h1 class="m-0 text-primary text-uppercase">Hotelier</h1>
            <div style="font-size:8px;">{{ title }}</div>
          </a>
        </nuxt-link>


        <div class="col-lg-9">
          <div class="row gx-0 bg-white d-none d-lg-flex">
            <div class="col-lg-7 px-5 text-start">
              <div class="h-100 d-inline-flex align-items-center py-2 me-4">
                <i class="fa fa-envelope text-primary me-2"></i>
                <p class="mb-0">info@example.com</p>
              </div>
              <div class="h-100 d-inline-flex align-items-center py-2">
                <i class="fa fa-phone-alt text-primary me-2"></i>
                <p class="mb-0">+012 345 6789</p>
              </div>
            </div>
            <div class="col-lg-5 px-5 text-end">
              <div class="d-inline-flex align-items-center py-2">
                <a class="me-3" href="https://www.facebook.com" target="_blank"><i class="fab fa-facebook-f"></i></a>
                <a class="me-3" href="https://twitter.com" target="_blank"><i class="fab fa-twitter"></i></a>
                <a class="me-3" href="https://linkedin.com" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                <a class="me-3" href="https://www.instagram.com" target="_blank"><i class="fab fa-instagram"></i></a>
                <a class="" href="https://www.youtube.com/" target="_blank"><i class="fab fa-youtube"></i></a>
              </div>
            </div>
          </div>
          <nav class="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0">
            <a href="index.html" class="navbar-brand d-block d-lg-none">
              <h1 class="m-0 text-primary text-uppercase">Hotelier</h1>
            </a>
            <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
              <div class="navbar-nav mr-auto py-0">
                <NuxtLink v-for="item of itemsMenu" :to="item.to" class="nav-item nav-link">{{ item.name }}</NuxtLink>
              </div>
              <a href="https://htmlcodex.com/hotel-html-template-pro"
                class="btn btn-primary rounded-0 py-4 px-md-5 d-none d-lg-block">Premium Version<i
                  class="fa fa-arrow-right ms-3"></i></a>
            </div>
          </nav>
        </div>
      </div>
    </div>
    <!-- Header End -->
  </div>
</template>