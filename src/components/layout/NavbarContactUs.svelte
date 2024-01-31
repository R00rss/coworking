<script>
  import ecuador_flag from "../../assets/icons/world-flag.webp";
  import wpa_icon from "../../assets/icons/whatsapp.webp";
</script>

<nav
  class="w-full py-3 bg-[var(--primary-color-900)] px-2 flex flex-row justify-start items-center gap-2"
>
  <p class="text-[var(--light-color-900)] text-xl font-semibold hidden md:block">Contáctanos directo a WhatsApp:</p>
  <p class="text-[var(--light-color-900)] text-xl font-semibold hidden xs:block md:hidden">Contáctanos:</p>
  <a
    class="w-max px-4 py-0.5 flex justify-center items-center gap-2 rounded-full bg-[var(--light-color-900)] shadow-[1px_1px_10px_-2px_#000000]"
    href="https://wa.me/593999040805?text=Hola,%20quiero%20informacion%20de%20coworking%20en%20Quito"
  >
    <img
      class="w-10 h-10 object-contain"
      src={ecuador_flag}
      alt="ecuador flag"
    />
    <p class="hidden xs:block gradient-text font-semibold text-[var(--primary-color-900)]">
      +593 999040805
    </p>
    <img class="w-10 h-10 object-contain" src={wpa_icon} alt="wpa_icon" />
  </a>
</nav>

<style>
  .gradient-text {
    background: linear-gradient(45deg, #ff5e5e, #ffa15e, #fec406);
    -webkit-background-clip: text;
    color: transparent;
  }
</style>
