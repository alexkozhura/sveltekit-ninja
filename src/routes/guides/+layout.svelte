<script>
    import { Title } from "$lib";
</script>

<header>
    <nav>
            <Title title="Ninja Gaming Guides"/>
            <div class="links">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/guides">Guides</a> 
            </div>
    </nav>
</header>

<main>
    <!-- puts the content of the component here  -->
    <slot />
</main>


<style>
    header {
      text-align: center;
      width: 100%;
      background: rgba(0,0,0,0.1);
    }
    main {
        max-width: 960px;
      margin: 20px auto;
    }
    nav {
      display: flex;
      align-items: center;
      justify-content: space-between; /* This will push the title and links to opposite ends */
      width: 100%;
      padding: 0 1%; /* Adjust the percentage to control the distance from the edges */
    }
    .links {
      margin-right: 5%; 
    }
    /* Optionally adjust margins for links if needed */
    a {
      margin-left: 10px;
    }
  </style>