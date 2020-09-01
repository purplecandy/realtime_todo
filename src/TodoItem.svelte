<script>
  import { create } from "domain";

  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  function remove() {
    dispatch("remove", { id });
  }

  function toggleStatus() {
    let newStatus = !complete;
    dispatch("toggle", {
      id,
      newStatus,
    });
  }

  export let id;
  export let complete;
  export let text;
</script>

<style>
  .is-complete {
    text-decoration-line: line-through;
    color: green;
  }
</style>

<li>
  {#if complete}
    <span class="is-complete">{text}</span>
    <button on:click={toggleStatus}>✔️</button>
  {:else}<span>{text}</span> <button on:click={toggleStatus}>❌</button>{/if}

  <button on:click={remove}> 🗑 </button>
</li>
