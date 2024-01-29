<script>
  import "../app.css";
  import Navbar from "../components/layout/Navbar.svelte";
  import Footer from "../components/layout/Footer.svelte";
  import { dev } from "$app/environment";
  import { inject } from "@vercel/analytics";

  inject({ mode: dev ? "development" : "production" });
</script>

<Navbar />
<main class="montserrat">
  <slot />
</main>
<Footer />
