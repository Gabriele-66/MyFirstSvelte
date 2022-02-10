<script>
	import MyForm from './interfaces/Form.svelte'
    import MyTable from './interfaces/Table.svelte'

    let people = [];
    function handleAdd(event){
        people.push(event.detail);
        people = people;
    }
</script>

<div class="ext">
    <div class="sin">
        <MyForm on:add={handleAdd}/>
    </div>

    <div class="sin mytable">
        <MyTable  bind:people/>
    </div>
</div>



<style>
    /* row justify-content-around */
    .bar{
        overflow-x: hidden;
    }
    .ext {
		display: block;
		max-width: 100%;
		text-align: center;
		margin:0 auto;
		padding-top: 10%;
        padding-left: 15%
        ;
	}
    .sin{
        display: block;
        width: 400px;
        height: 400px;
        float: left;
    }  
    .mytable{
        padding-left:100px;
    }
    
</style>