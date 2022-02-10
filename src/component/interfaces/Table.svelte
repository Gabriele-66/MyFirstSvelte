<script>
    export let people = [];

    function eliminaRiga(index){
        people.splice(index,1);
        people=people;
    }

</script>

<!-- {JSON.stringify(people)}
{people.length} -->

{#if people.length>0}
    <table class="table table-bordered table-dark">
        <thead>
            <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Sex</th>
            <th>C.F.</th>
            <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {#each people as person,index}
                <tr>
                    <td>{person.name}</td>
                    <td>{person.surname}</td>
                    <td>{person.sex}</td>
                    <td>{person.cf}</td>
                    <td><button on:click={()=>eliminaRiga(index)}>X</button></td>
                </tr>
            {/each}
        </tbody>
    </table>
{:else}
    <p>NESSUN ELEMENTO INSERITO</p>
{/if}

<style>
    /* p{
        color: red;
        text-align: center;
    } */
</style>