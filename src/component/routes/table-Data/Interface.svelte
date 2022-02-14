<script>
	import MyForm from './interfaces/Form.svelte'
    import MyTable from './interfaces/Table.svelte'
    import { token } from '../../../Stores.js'
    import { get } from 'svelte/store'
    import { onMount } from 'svelte';

    let people = [];

    onMount(
        async ()=>{
            axios.get('person.json',{
                params:{
                    token: get(token)
                }
            })
            .then(function (response) {
                //console.log(get(token));
                //console.log(response.data);
                people = response.data;
                //console.log(response.data[i]);
                people.sort(sortArray);
            })
            .catch(function (error) {
                console.log(error);
            })
        }
    );
    
    function sortArray(x, y) {
    if (x.surname < y.surname) { return -1; }
    if (x.surname > y.surname) { return 1; }
    return 0;
    }

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
