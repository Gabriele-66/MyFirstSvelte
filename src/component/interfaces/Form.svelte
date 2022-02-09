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
			nome:Fname,
			cognome:Lname
		})
		formDis=alert(`First Name ${Fname},Last Name ${Lname},C.F. ${Cf},Sex ${Sex}`);
	}
</script>

<h2 style="text-align:center">My Form</h2>

<form on:submit|preventDefault={handleSubmit}>
    <div class="row">
		<input type="text" class="col" placeholder="First name" bind:value={Fname}>
		<input type="text" class="col" placeholder="Last name" bind:value={Lname}>
    </div>
    
    <div class="row">
        <select class="col" bind:value={Sex}>
			<option value="" selected>Please choose...</option>
			<option value="M">Male</option>
			<option value="F">Famale</option>
        </select>
		<input type="text" class="col" placeholder="C.F." bind:value={Cf}>
    </div>

    <button class="col" disabled={disBtn} type=submit>
		Submit
	</button>
</form>


<style>

	form {
		display: block;
		width: 500px;
		max-width: 100%;
		text-align: center;
		margin:0 auto;
		padding-top: 10%;
	}

	input{
		text-align: center;
	}
</style>