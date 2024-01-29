<script>
  import headerImage from "../../assets/office/formImage.jpg";
  import { sendEmail } from "../../services/email";
  import Dashes from "./Dashes.svelte";

  /**
   * @param {{ preventDefault: () => void; target: any; }} e
   */
  function onSubmit(e) {
    const body = {
      Nombre: e.target.name.value,
      Correo: e.target.email.value,
      Mensaje: e.target.message.value,
    };
    const subject = e.target.subject.value;
    const requestBody = {
      body,
      subject,
    };
    sendEmail(requestBody).then((res) => {
      console.log(res);
      if (res.status === 200) {
        alert("Correo enviado correctamente");
      } else {
        alert("Error al enviar el correo");
      }
    });
  }
</script>

<section class="shadow-[2px_2px_10px_-6px_#000000] w-full">
  <img
    loading="lazy"
    class="w-full max-h-[400px]"
    src={headerImage}
    alt="headerImage"
  />
  <form
    id="contact-form"
    on:submit|preventDefault={onSubmit}
    class="flex flex-col gap-4 justify-center items-center py-4 px-6"
  >
    <input
      class="duration-300 w-full px-2 py-1 outline-none focus:outline-none focus-within:outline-none border-b-2 border-orange-400/70 shadow-[2px_2px_10px_-10px] rounded-sm"
      type="text"
      name="name"
      placeholder="Nombre"
      required
    />
    <input
      class="duration-300 w-full px-2 py-1 outline-none focus:outline-none focus-within:outline-none border-b-2 border-orange-400/70 shadow-[2px_2px_10px_-10px] rounded-sm"
      type="email"
      name="email"
      placeholder="Correo"
      required
    />
    <input
      class="duration-300 w-full px-2 py-1 outline-none focus:outline-none focus-within:outline-none border-b-2 border-orange-400/70 shadow-[2px_2px_10px_-10px] rounded-sm"
      type="text"
      name="subject"
      placeholder="Asunto"
      required
    />
    <textarea
      class="w-full px-2 py-1 outline-none focus:outline-none focus-within:outline-none border-b-2 border-orange-400/70 shadow-[2px_2px_10px_-10px] rounded-sm resize-none"
      name="message"
      placeholder="Quiero un espacio de trabajo!"
      required
    ></textarea>
    <section class="flex flex-col lg:flex-row justify-center items-center gap-2 pt-4 w-full">
      <Dashes />
      <button
        class=" bg-orange-400 border border-transparent hover:border-orange-400 hover:text-orange-400 hover:bg-transparent duration-300 px-2 py-1 w-[170px] text-[var(--light-color-900)] font-semibold rounded-full"
        type="submit">Enviar</button
      >
    </section>
  </form>
</section>

<style>
  /* select all children from #contact-form */
  #contact-form input:focus:invalid {
    border-bottom: 2px solid red !important;
  }

  #contact-form input:focus:valid {
    border-bottom: 2px solid green !important;
  }
</style>
