<script>
	import MyForm from './interfaces/Form.svelte'
    import MyTable from './interfaces/Table.svelte'

    let people = [];
    function handleAdd(event){
        people.push(event.detail);
        people = people;
    }
</script>

<MyForm style="float:left; display:block; width:300px; height:300px;" on:add={handleAdd}/>
<MyTable style="float:rigth; display:block; width:300px; height:300px;" bind:people/>

<style>
    .MyTable{
        text-align: center;
    }
</style>

<div style="float:left; display:block; width:300px; height:300px; background-color:grey;"></div>

<div style="float:left; display:block; width:300px; height:300px; background-color:green;"></div>

<div style="clear:both;"></div>