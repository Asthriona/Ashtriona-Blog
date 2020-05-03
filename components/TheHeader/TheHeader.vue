<template>
    <header class="main-header">
        <nav class="main-nav">
            <ul class="nav-links">
                <a href="http://asthriona.com">Home</a>
                <nuxt-link to="/" tag="li" class="nav-link"><a>All Post</a></nuxt-link>
                <nuxt-link to="/about" tag="li" class="nav-link"><a>About</a></nuxt-link>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
    .main-header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background: #38529C;
        height: 4.5rem;
    }
    .main-nav {
        height: 100%;
    }
    .nav-link {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        margin: 0 1rem;
        padding: 0.3rem;
    }
    .nav-links {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 1rem;
        padding: 0.3rem;
    }
    .nav-link.nav-link.nuxt-link-exact-active {
        border-bottom: 3px solid #ffd000;
    }
    .nav-links a {
        display: block;
        text-decoration: none;
        color: white;
    }
    .nav-link a:hover,
    .nav-link a:active,
    .nav-link.nuxt-link-exact-active a {
        color: #ffd000;
    }
</style>

<script>
console.log('%c Asthriona', 'font-size:100px;color:#fff;text-shadow:0 3px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);')
console.log("Website developed by Asthriona")
console.log("Hosted by Sirius Media Group")
console.log("GitHub: https://github.com/Asthriona/Asthriona-blog")
</script>