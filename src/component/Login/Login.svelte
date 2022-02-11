<script>
    let usrNm = "";
    let pwd = "";
    let submitted = false;
    function handleSubmit() {
		alert(`UserName: ${usrNm}, Password: ${pwd}`);
	}
</script>

<div id="login">
    <h3 class="text-center text-white">Login form</h3>
    <div class="container">
        <div id="login-row" class="row justify-content-center align-items-center">
            <div id="login-box" class="col-">
                <form id="login-form" class="form" action="" method="post" class:submitted on:submit|preventDefault={handleSubmit}>
                    <h3 class="text-center text-info">Login to Your Account</h3>
                    <div class="form-group">
                        <label for="username" class="text-info">Username:</label>
                        <input type="text" name="username" id="username" class="form-control" bind:value={usrNm} required><br>
                    </div>
                    <div class="form-group">
                        <label for="password" class="text-info">Password:</label>
                        <input type="text" name="password" id="password" class="form-control" bind:value={pwd} required><br>
                    </div>
                    <div class="form-group" style="text-align:center">
                        <button type="submit" name="submit" class="btn btn-info" value="submit" on:click={() => submitted = true}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>



<style>
    #login{
        background-image: url("login.jpg");
        background-size: cover;
    }
    #login .container #login-row #login-box {
        margin-top: 120px;
        max-width: 600px;
        height: 320px;
        border: 1px solid #9C9C9C;
        background-color: #EAEAEA;
        border-radius: 3%;
    }
    #login .container #login-row #login-box #login-form {
        padding: 20px;
    }

    .submitted input:focus:invalid {
		outline: 1px solid #c00;
	}

    .submitted input:invalid {
		border: 1px solid #c00;
	}
</style>