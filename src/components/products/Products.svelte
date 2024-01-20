<script>
  import { products } from "../../constants/products";
  import CardProduct from "../cards/CardProduct.svelte";
</script>

<section id="products" class="">
  <section
    class="px-10 py-5 bg-[var(--primary-color-900)] text-[var(--light-color-900)] font-semibold text-3xl flex justify-center items-center"
  >
    <h1 class="w-[1200px]">Productos</h1>
  </section>
  <section
    class="py-5 montserrat flex flex-wrap 2lx:flex-nowrap justify-center items-center gap-4 2xl:gap-8 mt-4 w-[min(90%,1500px)] mx-auto"
  >
    {#each products as product, i}
      <CardProduct {product} />
    {/each}
  </section>
</section>
