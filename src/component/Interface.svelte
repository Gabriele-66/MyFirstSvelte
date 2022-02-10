<script>
	import MyForm from './interfaces/Form.svelte'
    import MyTable from './interfaces/Table.svelte'

    function sortArray(x, y) {
    if (x.surname < y.surname) { return -1; }
    if (x.surname > y.surname) { return 1; }
    return 0;
    }

    let people = [];
    function handleAdd(event){
        people.push(event.detail);
        people.sort(sortArray);
        people = people;
    }

</script>



<div class="container">
    <div class="row">
        <div class="col-md-6">
            <MyForm on:add={handleAdd}/>
        </div>
        <div class="col-md-6">
            <MyTable  bind:people/>
        </div>
    </div>
</div>
