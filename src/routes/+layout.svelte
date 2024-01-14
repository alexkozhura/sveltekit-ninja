<script>
  import { Title } from "$lib";
  import { page } from "$app/stores";
  import { derived } from "svelte/store";

  const isGuidesRoute = derived(page, $page => $page.url.pathname.startsWith("/guides"));
</script>

{#if !$isGuidesRoute}
  <header> 
      <Title title="Ninja Gaming Guides"/>
  </header>
{/if}

<slot />

<main>
  <!-- Content of the component here -->
  
</main>

<footer>
  <p>Copyright 2022 Ninja Gaming Guides</p>
</footer>

<style>
  @import '../styles/global.css';
  header {
      display: flex;
      justify-content: center;
      width: 100%;
      background: rgba(0, 0, 0, 0.1); /* Example styling */
  }
  main {
      max-width: 960px;
      margin: 20px auto;
  }
  footer {
      text-align: center;
  }
</style>
