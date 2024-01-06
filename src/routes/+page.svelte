<script>
    let title = 'Ninja Gaming Guides'; 

    const updateTitle = () => {
         title = 'Something completely different';
    }
</script>

<div class="index">
    <h2>{title}</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, atque dolorum? Quis libero qui tempora laborum dolorum molestiae! Sed perspiciatis placeat maxime animi? Itaque at quibusdam asperiores excepturi rem adipisci?</p>
    <button on:click={updateTitle}>Change title</button>
    <input type="text" bind:value={title}>
</div>

<style>
    .index {
        text-align: center;
        display: block;
        margin: 20px auto;
    }
</style>