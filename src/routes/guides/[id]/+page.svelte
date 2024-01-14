<script>
    export let data
 </script>

<div class="guide">
    <h2>{data && data.props.guide ? data.props.guide.title : 'Loading...'}</h2>
    <p>{data && data.props.guide ? data.props.guide.body: 'Loading...'}</p>
</div>

<style>
    .guide {
        margin-top: 40px;
        padding: 10px;
        border: 1px dotted rgba(255,255,255,0.2);
    }
</style>