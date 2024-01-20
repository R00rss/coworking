<script>
    import "../app.css"
    import Navbar from "../components/layout/Navbar.svelte";
    import Footer from "../components/layout/Footer.svelte";
</script>

<Navbar />
<main class="montserrat">
    <slot />
</main>
<Footer />