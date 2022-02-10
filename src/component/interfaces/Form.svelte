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
    <div >
		<input type="text" placeholder="First name" bind:value={Fname}>
		<input type="text" placeholder="Last name" bind:value={Lname}>
    </div>
    
    <div>
        <select bind:value={Sex}>
			<option value="" selected>Please choose...</option>
			<option value="M">Male</option>
			<option value="F">Famale</option>
        </select>
		<input type="text" placeholder="C.F." bind:value={Cf}>
    </div>

    <button disabled={disBtn} type=submit>
		Submit
	</button>
</form>


<style>

	/* form {
		display: block;
		width: 500px;
		max-width: 100%;
		text-align: center;
		margin:0 auto;
		padding-top: 10%;
	}

	input{
		text-align: center;
	} */
</style>