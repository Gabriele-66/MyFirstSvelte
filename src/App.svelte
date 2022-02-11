<script>
	import Home from './component/routes/Home.svelte'
	import Router from 'svelte-spa-router';
	// Importa tutto
	import routes from './routes';
</script>

<h1 style="text-align:center">My First Svelte</h1>
<Home/>
<Router {routes} />