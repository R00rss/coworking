<script>
  import { items } from "../../constants/menu";
  import menu_burger from "../../assets/icons/menu-burger.svg";

  /**
/**
 * @param {string} href
 * @returns {void}
 */
  function scrollIntoView(href) {
    if (!href) return;
    const el = document.querySelector(href);
    if (!el) return;
    el.scrollIntoView({
      behavior: "smooth",
    });
  }
</script>

<nav
  class="montserrat sticky z-20 bg-[var(--light-color-900)] top-0 shadow-[2px_2px_12px_-4px]"
>
  <section class="flex px-10 justify-between items-center">
    <div
      class="w-[250px] flex justify-center items-center font-bold text-xl rounded-3xl text-[var(--primary-color-900)] duration-300 cursor-pointer px-3 py-9"
    >
      <h1>Coworking Quito</h1>
    </div>
    <ul class="sm:flex gap-1 justify-center items-center hidden">
      {#each items as item, i}
        <button
          on:click|preventDefault={() => scrollIntoView(item.href)}
          class="w-[150px] text-center hover:shadow-[0px_2px_10px_-2px_var(--primary-color-700)] duration-300 cursor-pointer px-3 py-2 rounded-lg"
        >
          <a
            class="w-full"
            on:click|preventDefault={() => scrollIntoView(item.href)}
            href={item.href}>{item.name}</a
          >
        </button>
      {/each}
    </ul>
    <section class="group flex-col flex sm:hidden gap-4 relative py-9 w-[70px] justify-center items-center">
      <button type="button" class="">
        <img class="h-6 w-6" src={menu_burger} alt="menu burger" />
      </button>
      <ul class="group-hover:flex hidden flex-col gap-1 justify-center items-center p-2 rounded-b-lg  duration-300 absolute center top-full bg-[var(--light-color-900)]">
      {#each items as item, i}
        <button
          on:click|preventDefault={() => scrollIntoView(item.href)}
          class="w-[150px] text-center hover:shadow-[0px_2px_10px_-2px_var(--primary-color-700)] duration-300 cursor-pointer px-3 py-2 rounded-lg"
        >
          <a
            class="w-full"
            on:click|preventDefault={() => scrollIntoView(item.href)}
            href={item.href}>{item.name}</a
          >
        </button>
      {/each}
    </ul>
    </section>
  </section>
</nav>
<style>
  .center {
    left: 50%;
    transform: translate(-70%, -0%);
  }

</style>
