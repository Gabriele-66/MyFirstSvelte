<script>
    import {push, pop, replace} from 'svelte-spa-router'
</script>

<p on:click={()=>push('/')}>HOME</p>
<!-- <p on:click={()=>pop()}>HOME</p> -->
<style>
    p{
        cursor:pointer
    }
</style>