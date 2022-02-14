<script>
    import {push, pop, replace} from 'svelte-spa-router'
    import Mymodal from './ModalError.svelte'
    import {token} from '../../../Stores.js'
 //   import { get } from 'svelte/store'

    let usrNm = "";
    let pwd = "";
    $: usrNmC = false;
    $: pwdC = false;
    let modalSwitch = false;

    function closeModal() {
        modalSwitch = false;
    }

    function handleSubmit() {
        if(usrNm==""){
            usrNmC=true;
        } 
        else{
            usrNmC=false;
        } 
        if(pwd==""){
            pwdC=true;
        }
        else{
            pwdC=false;
        }
        if(usrNm!="" && pwd!=""){

            axios.post("login.json")
            .then(function(response){
                //console.log(response)
                if(response.data.token){
                    //console.log(response.data.token);
                    token.set(response.data.token);
                    //console.log(get(token))
                    push('/Interface');
                }
                else{
                    modalSwitch = true;
                    console.log(modalSwitch)
                }
            })
            .catch(function(error){
                console.log(error)
            })

            usrNmC=false;
            pwdC=false;
        }
	}
</script>

<div id="login">
    <div class="container">
        <div id="login-row" class="row justify-content-center align-items-center">
            <div id="login-box" class="col-">
                <div id="login-form" class="form" action="" method="post">
                    <h3 class="text-center text-info">Login to Your Account</h3>
                    <div class="form-group">
                        <label for="username" class="text-info">Username:</label>
                        {#if usrNmC}<p>USERNAME OBBLIGATORIO</p>{/if}
                        <input type="text" name="username" id="username" class="form-control" bind:value={usrNm} required>
                    </div>
                    <div class="form-group">
                        <label for="password" class="text-info">Password:</label>
                        {#if pwdC}<p>PASSWORD OBBLIGATORIA</p>{/if}
                        <input type="text" name="password" id="password" class="form-control" bind:value={pwd} required>
                    </div>
                    <div class="form-group" style="text-align:center">
                        <button type="submit" name="submit" class="btn btn-info" value="submit" on:click|preventDefault={handleSubmit}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

{#if modalSwitch}
<Mymodal {modalSwitch} on:closeModal={closeModal}/>
{/if}


<style>
    p{
        color:#c00
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
        padding: 17px;
    }

    input:focus:invalid {
		outline: 1px solid #c00;
	}

    input:invalid {
		border: 1px solid #c00;
	}

</style>