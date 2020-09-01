<script>
  import TodoItem from "./TodoItem.svelte";
  import { db } from "./firebase";
  import { collectionData } from "rxfire/firestore";
  import { startWith } from "rxjs/operators";

  export let uid;

  let text = "Some task";

  const query = db
    .collection("todos")
    .where("uid", "==", uid)
    .orderBy("created");

  const todos = collectionData(query, "id").pipe(startWith([]));

  function add() {
    db.collection("todos").add({
      uid,
      text,
      complete: false,
      created: Date.now(),
    });
  }

  function updateStatus(event) {
    const { id, newStatus } = event.detail;
    db.collection("todos").doc(id).update({ complete: newStatus });
  }

  function removeItem(event) {
    const { id } = event.detail;
    db.collection("toods").doc("id").delete();
  }
</script>

<style>
  input {
    display: block;
  }
</style>

<ul>
  {#each $todos as todo}
    <TodoItem {...todo} on:remove={removeItem} on:toggle={updateStatus} />
  {/each}
</ul>

<input type="text" name="todo-title" bind:value={text} />

<button on:click={add}>Add Task</button>
