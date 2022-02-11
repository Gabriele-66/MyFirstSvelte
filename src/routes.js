import Interface from './component/routes/table-Data/Interface.svelte'
import Login from './component/routes/login/Login.svelte'
import NotFound from './component/routes/NotFound.svelte'

export default {
    '/': Login,
    '/Interface': Interface,
    '*': NotFound,  //se esiste deve essere ultimo
};
