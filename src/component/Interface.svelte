<script>
	import MyFormI from './interfaces/Form.svelte'
    import MyTableI from './interfaces/Table.svelte'

    function handleAdd(event){
        console.log(event.detail.nome)
    }
</script>

<MyFormI on:add={handleAdd}/>