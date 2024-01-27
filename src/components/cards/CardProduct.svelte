<script>
  import ProductCarousel from "../carousel/ProductCarousel.svelte";

  import close_icon from "../../assets/icons/cross.svg";

  /** @type {any} */
  export let product;

  /** @type {HTMLDialogElement} */
  let dialogElement;

  function openPopup() {
    alert("open");
    if (dialogElement) dialogElement.showModal();
  }

  function closePopup() {
    if (dialogElement) dialogElement.close();
  }
  const { description, image, price, promo, subtitle, title } = product;
</script>

<section
  class="flex flex-col justify-start items-center shadow-[2px_2px_10px_-6px_#000000] min-h-[400px] min-w-[350px] w-[350px] aspect-[2/3] 2xl:min-w-[380px] 2xl:w-[380px]"
>

<!-- handle onclick and touch event -->
  <button
    on:click={openPopup}
    class="group relative overflow-hidden cursor-pointer w-full"
  >
    <img
      class="cursor-pointer hover:scale-105 duration-300"
      src={image}
      alt={title}
    />
    <section
      class="font-medium absolute top-1 left-1 bg-orange-400 text-[var(--light-color-900)] py-1 px-2 duration-300 rounded-full h-[110px] w-[110px] flex justify-center items-center gap-1
  "
    >
      <span class="text-xl group-hover:rotate-[-12deg] duration-300">$</span>
      <span class="text-[42px] group-hover:rotate-[8deg] duration-300"
        >{price}</span
      >
    </section>
    <span
      class="absolute rounded-[0px_12px_0px_0px] bottom-0 bg-orange-400 text-[var(--light-color-900)] py-1 px-2 group-hover:animate-pulse duration-300
  "
    >
      Fotos
    </span>
    {#if promo != undefined && promo != ""}
      <span
        class="absolute bottom-6 right-1 bg-[var(--light-color-900)] text-[var(--primary-color-900)] py-1 px-2 -rotate-12 group-hover:scale-105 duration-300"
      >
        {promo}
      </span>
    {/if}
  </button>

  <main class="flex-grow p-2 flex flex-col items-center justify-between">
    <section>
      <h1 class="text-xl font-medium text-orange-400">{title}</h1>
      <p class="text-sm font-light text-slate-900">
        {description}
      </p>
    </section>
    <p class="text-xs font-normal text-slate-800/50 w-full">
      {subtitle}
    </p>
  </main>

  <dialog
    class="bg-transparent overflow-hidden w-full h-full m-0 outline-none focus-within:outline-none focus:outline-none"
    bind:this={dialogElement}
  >
    <section class="w-full h-full flex justify-center items-center">
      <section
        class="w-full xs:w-[min(650px,90%)] max-h-[90vh] m-auto relative flex justify-center items-center"
      >
        <button
          class="absolute -top-8 right-6 z-10 outline-none focus:outline-none w-7 h-7 shadow-[2px_2px_10px_-2px] bg-[var(--primary-color-900)] p-1.5 rounded-full"
          on:click={closePopup}
        >
          <img
            class="w-full h-full object-contain invert"
            src={close_icon}
            alt="close icon"
          />
        </button>
        <ProductCarousel {product} />
      </section>
    </section>
  </dialog>
</section>

<style>
  dialog::backdrop {
    background-color: rgba(0, 0, 0, 0.5);
  }
  dialog:modal {
    max-width: 100vw;
    max-height: 100vh;
  }
</style>
