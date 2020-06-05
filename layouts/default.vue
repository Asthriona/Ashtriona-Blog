<template>
  <div>
    <div id="page-container">
      <div id="content-wrap">
        <theHeader />
        <main class="main-content">
          <nuxt />
          <TheFooter />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader/TheHeader";
import TheFooter from "@/components/TheFooter/TheFooter";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  components: {
    TheHeader,
    TheFooter
  }
};
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
h1 {
  font-size: 1.4rem;
  font-weight: bold;
}
.main-content {
  margin-top: 4.5rem;
}
#page-container {
  position: relative;
  min-height: 100vh;
}

#content-wrap {
  padding-bottom: 8rem; /* Footer height */
}

#footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 8rem; /* Footer height */
}
</style>

