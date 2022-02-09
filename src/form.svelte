<script>
	let Fname ='';
	let Lname ='';
	let Cf ='';
	let Sex ='';
	
	function handleSubmit() {
		alert(`First Name ${Fname},Last Name ${Lname},C.F. ${Cf},Sex ${Sex}`);
	}
</script>

<h2 style="text-align:center">My Form</h2>

<form on:submit|preventDefault={handleSubmit}>
    <div>
        <div class="form-group">
			<input type="text" class="form-control" placeholder="First name" bind:value={Fname}>
		</div>
		<div class="form-group">
			<input type="text" class="form-control" placeholder="Last name" bind:value={Lname}>
		</div>
    </div>
    
    <div>
        <div>
            <select bind:value={Sex} required>
				<option  disabled>Please choose...</option>
				<option >Male</option>
				<option >Famale</option>
        	</select>
        </div>
        <div class="form-group">
			<input type="text" class="form-control" placeholder="C.F." bind:value={Cf}>
		</div>
    </div>

    <button disabled={!Fname || !Lname || !Sex || !Cf} type=submit>
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
		padding-top: 20%;
	}

	input{
		text-align: center;
	}
</style>