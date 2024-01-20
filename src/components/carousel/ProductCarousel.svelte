<script>
  import Carousel from "svelte-carousel";
  import { browser } from "$app/environment";
  /**
   * @type {any}
   */
  export let products;
  console.log(products);
</script>

{#if browser}
  <Carousel autoplay autoplayDuration={4000}>
    {#each products as product}
      <img
        class="w-full h-[800px] object-cover"
        src={product.image}
        alt="images"
      />
    {/each}
  </Carousel>
{/if}
