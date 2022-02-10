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
	<div class="container">
		<div class="row">
			<input class="col-sm" type="text" placeholder="First name" bind:value={Fname}>
			<input class="col-sm" type="text" placeholder="Last name" bind:value={Lname}>
		</div>
		
		<div class="row">
			<select class="col-sm" bind:value={Sex}>
				<option value="" selected>Please choose...</option>
				<option value="M">Male</option>
				<option value="F">Female</option>
			</select>
			<input class="col-sm" type="text" placeholder="C.F." bind:value={Cf}>
		</div>

		<div style="text-align:center">
			<button disabled={disBtn} type=submit>
				Submit
			</button>
		</div>
	</div>
</form>


<style>

	button{
		outline: none;
		cursor: pointer;
		text-decoration: none;
		padding: 10px 20px;
		border-radius: 10%;
		background-color: rgb(81, 255, 0);
		border: solid 2px #a30000;
		margin: 0 auto;
		text-align: center;
	}

	button:hover{
		background-color: rgb(201, 80, 76);
		color: yellow;
	}
</style>