<script>
  export let displayName;
  export let uid;
  export let photoUrl;
</script>

<h3>Hi {displayName}</h3>

<img src={photoUrl} width="100" alt="user avatar" />

<p>Your userId is {uid}</p>
