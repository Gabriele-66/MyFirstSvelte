<script>
import { createEventDispatcher } from "svelte";

	let Fname ='';
	let Lname ='';
	let Cf ='';
	let Sex ='';
	$:disBtn=!Fname || !Lname || !Sex || !Cf;

	const dispatch = createEventDispatcher();
	function handleSubmit() {
		dispatch('add',{
			name:Fname,
			surname:Lname,
			cf:Cf,
			sex:Sex
		})
		console.log(`First Name ${Fname}, Last Name ${Lname}, C.F. ${Cf}, Sex ${Sex}`);
	}
</script>

<h2 style="text-align:center">My Form</h2>

<form on:submit|preventDefault={handleSubmit}>
    <div class="row">
		<input class="col" type="text" placeholder="First name" bind:value={Fname}>
		<input class="col" type="text" placeholder="Last name" bind:value={Lname}>
    </div>
    
    <div class="row">
        <select class="col" bind:value={Sex}>
			<option value="" selected>Please choose...</option>
			<option value="M">Male</option>
			<option value="F">Famale</option>
        </select>
		<input class="col" type="text" placeholder="C.F." bind:value={Cf}>
    </div>

    <button disabled={disBtn} type=submit>
		Submit
	</button>
</form>


<style>
	input{
		text-align: center;
	}
</style>