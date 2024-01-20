<script>
  import Matriz from "../maps/Matriz.svelte";
  import FormContact from "./FormContact.svelte";
</script>

<section id="contact" class="pt-10">
  <section
    class="px-10 py-5 bg-[var(--primary-color-900)] text-[var(--light-color-900)] font-semibold text-3xl flex justify-center items-center"
  >
    <h1 class="w-[1200px]">Contáctanos</h1>
  </section>
  <section class="flex justify-center items-center gap-2 p-2 w-[min(1200px,90%)] mx-auto">
    <FormContact />
    <Matriz />
  </section>
</section>
