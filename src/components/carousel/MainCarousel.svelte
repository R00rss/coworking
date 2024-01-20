<script>
  import Carousel from "svelte-carousel";
  import { browser } from "$app/environment";
  import { images } from "../../constants/images";
</script>

{#if browser}
  <section id="home"  class="relative montserrat">
    <section class="main_title">
      <h1 class="text-5xl font-semibold drop-shadow-[1px_1px_5px_var(--dark-color-900)]">El mejor Coworking en Quito</h1>
      <h2 class="text-xl text-[var(--primary-color-900)] font-medium drop-shadow-[1px_1px_5px_var(--dark-color-900)]">Oficinas coworking en Quito</h2>
    </section>
    <Carousel
     autoplay
     autoplayDuration={2000}
     arrows={false}
     dots={false}
     >
      {#each images as image}
        <img
          class="w-full h-[800px] object-cover"
          src={image}
          alt="images"
        />
      {/each}
    </Carousel>
  </section>
{/if}

<style>
  .main_title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px;
    z-index: 1;
    width: 100%;
    text-align: center;
    color: var(--light-color-900);
  }
</style>