<script>
   export let data
</script>


<div class="guides">
    <ul>
        {#each data.props.guides as guide}
            <li>
               <a href={`/guides/${guide.id}`}>{guide.title}</a>
            </li>
        {/each}
    </ul>
</div>



<style>
     .guides {
        margin: 20px;
     }
     ul {
        list-style-type: none;
        padding: 0;
     }
     a {
        display: inline-block;
        margin-top: 10px;
        padding: 10px;
        border: 1px dotted rgba(255, 255, 255, 0.2);
     }
</style>