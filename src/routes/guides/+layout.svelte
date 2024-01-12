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
      background: rgba(0,0,0,0.1)
    }
    main {
        max-width: 960px;
      margin: 20px auto;
    }
    nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      margin: 0 auto;
    }
    .links {
      margin-left: auto;
    }
    a {
      margin-left: 10px;
    }
  </style>