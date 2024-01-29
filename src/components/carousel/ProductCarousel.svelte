<script>
  import Carousel from "svelte-carousel";
  import { browser } from "$app/environment";
  /**
   * @type {any}
   */
  export let product;

  const { description, price, products, title } = product;
</script>

{#if browser}
  <Carousel>
    {#each products as product}
      <section
        class="group rounded-lg flex justify-center items-center flex-col"
      >
        <img
          loading="lazy"
          class="w-full object-contain border-[10px] border-b-0 border-black"
          src={product.image}
          alt="images"
        />
        <section
          class="bg-orange-400 px-3 sm:px-8 pt-4 h-[120px] w-full rounded-b-lg text-[var(--light-color-900)] relative"
        >
          <h1 class="text-xl md:text-2xl">{title}</h1>
          <p class="text-black text-sm md:text-base text-pretty">
            {description}
          </p>
          <section
            class="font-medium absolute bottom-[calc(100%-10px)] left-1 bg-[var(--light-color-900)] text-[var(--primary-color-900)] py-1 px-2 duration-300 rounded-full h-[110px] w-[110px] flex justify-center items-center gap-1
      "
          >
            <span class="text-xl group-hover:rotate-[-12deg] duration-300"
              >$</span
            >
            <span class="text-[42px] group-hover:rotate-[8deg] duration-300"
              >{price}</span
            >
          </section>
        </section>
      </section>
    {/each}
  </Carousel>
{/if}
