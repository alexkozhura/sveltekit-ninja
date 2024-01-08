<script>
    import { Title } from "$lib";
</script>

<header>
    <Title title="Ninja Gaming Guides"/>
    <div class="links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/guides">Guides</a> 
    </div>
</header>

<main>
    <!-- puts the content of the component here  -->
    <slot />
</main>


<style>
    @import '../../styles/global.css';
    header {
      display: flex;
      justify-content: center;
    }
    main {
      max-width: 960px;
      margin: 20px auto;
    }
    footer {
      text-align: center;
    }
    .links {
        margin-left: auto;
    }
    a {
        margin-left: 10px;
    }
</style> 