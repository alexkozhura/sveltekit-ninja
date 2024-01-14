<script>
    import { page } from '$app/stores';
</script>

<div class="error">
    <h1>{$page.status} {$page.error.message}</h1>
    <p>Looks like you've lost your way</p>
    <a href="/guides">View All Guides...</a>
</div>

<style>
    .error {
        text-align: center;
        margin-bottom: 60px;
    }
</style>