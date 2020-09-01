<script>
  import Profile from "./Profile.svelte";
  import Todos from "./Todos.svelte";

  import { auth, googleProvider } from "./firebase";
  import { authState } from "rxfire/auth";

  let user;

  const unsubscribe = authState(auth).subscribe((u) => (user = u));

  function logIn() {
    auth.signInWithPopup(googleProvider);
  }
</script>

<section>
  {#if user}
    <Profile {...user} />
    <button on:click={() => auth.signOut()}>LLogout</button>
    <br />
    <Todos uid={user.id} />
  {:else}<button on:click={logIn}>Sign-in with Google</button>{/if}
</section>
