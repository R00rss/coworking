<script>
  import headerImage from "../../assets/office/formImage.jpg";
  import Dashes from "./Dashes.svelte";
</script>

<section class="shadow-[2px_2px_10px_-6px_#000000] w-full">
  <img class="w-full max-h-[400px]" src={headerImage} alt="headerImage" />
  <form action="" class="flex flex-col gap-4 justify-center items-center py-4 px-6">
    <input
      class="w-full px-2 py-1 outline-none focus:outline-none focus-within:outline-none border-b-2 border-orange-400/70 shadow-[2px_2px_10px_-10px] rounded-sm"
      type="text"
      placeholder="Nombre"
    />
    <input
      class="w-full px-2 py-1 outline-none focus:outline-none focus-within:outline-none border-b-2 border-orange-400/70 shadow-[2px_2px_10px_-10px] rounded-sm"
      type="text"
      placeholder="Correo"
    />
    <input
      class="w-full px-2 py-1 outline-none focus:outline-none focus-within:outline-none border-b-2 border-orange-400/70 shadow-[2px_2px_10px_-10px] rounded-sm"
      type="text"
      placeholder="Asunto"
    />
    <textarea
      class="w-full px-2 py-1 outline-none focus:outline-none focus-within:outline-none border-b-2 border-orange-400/70 shadow-[2px_2px_10px_-10px] rounded-sm resize-none"
      name=""
      id=""
      placeholder="Quiero un espacio de trabajo!!"
    ></textarea>
    <section class="flex justify-center items-center gap-2 pt-4">
      <Dashes />
      <button
        class=" bg-orange-400 border border-transparent hover:border-orange-400 hover:text-orange-400 hover:bg-transparent duration-300 px-2 py-1 w-[170px] text-[var(--light-color-900)] font-semibold rounded-full"
        type="submit">Enviar</button
      >
    </section>
  </form>
</section>
