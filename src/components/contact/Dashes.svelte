<script>
  let numbers = Array.from(Array(30).keys()).map((n) => n + 1);
</script>

<section class="flex gap-0.5 text-orange-400 font-semibold">
  {#each numbers as number}
    <span class="text-xl">-</span>
  {/each}
</section>
