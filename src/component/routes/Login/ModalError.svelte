<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();
	
    export let modalSwitch;
	
    function closeModal() {
        modalSwitch = false;
        dispatch('closeModal', { modalSwitch });
    }
</script>

<div id="background" style="--display: {modalSwitch ? 'block' : 'none'};" on:click={closeModal}></div>
<div id="modal" style="--display: {modalSwitch ? 'block' : 'none'};">
    <p>UTENTE NON TROVATO</p>
</div>





<style>
    #background {
        display: var(--display);
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
    }

    #modal {
        display: var(--display);
       	position: fixed;
        z-index: 2;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgb(0, 0, 0);
        filter: drop-shadow(0 0 20px #333);
    }
</style>