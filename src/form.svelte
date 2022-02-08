<script>
	let questions = [
		{ id: 1, text: `Where did you go to school?` },
		{ id: 2, text: `What is your mother's name?` },
		{ id: 3, text: `What is another personal fact that an attacker could easily find with Google?` }
	];

	let selected;

	let answer = '';

	function handleSubmit() {
		alert(`answered question ${selected.id} (${selected.text}) with "${answer}"`);
	}
</script>

<h2 style="text-align:center">My Form</h2>

<form on:submit|preventDefault={handleSubmit}>

    <div>
        <div class="form-group">
			<input type="text" class="form-control" placeholder="First name" required>
		</div>
		<div class="form-group">
			<input type="text" class="form-control" placeholder="Last name" required>
		</div>
    </div>
    
    <div>
        <div>
            <select bind:value={selected} on:change="{() => answer = ''}">
            {#each questions as question}
                <option value={question}>
                    {question.text}
                </option>
            {/each}
        </select>
        <input bind:value={answer}>
        </div>
        <div class="form-group">
			<input type="text" class="form-control" placeholder="Last name" required>
		</div>
    </div>
	
<!-- pernome e cognome <button class="btn btn-full" on:click={() => submitted = true}>Continue</button> -->
	
    <button disabled={!answer} type=submit>
		Submit
	</button>
</form>

<p>selected question {selected ? selected.id : '[waiting...]'}</p>

<style>
	form {
		display: block;
		width: 500px;
		max-width: 100%;
	}
</style>