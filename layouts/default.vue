<template>
  <div>
    <theHeader />
    <main class="main-content">
      <nuxt />
    <TheFooter />
    </main>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader/TheHeader'
import TheFooter from '@/components/TheFooter/TheFooter'
export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  font-family: "Raleway", sans-serif;
  margin: 0;
  height: 100%;
}
.main-content {
  margin-top: 4.5rem;
}
</style>

