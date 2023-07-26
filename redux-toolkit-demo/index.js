import { store } from "./app/store.js";
import { cakeActions } from "./features/cake/cakeSlice.js";
import { icecreamAction } from "./features/icecream/icecreamSlice.js";
import { fetchUsers } from "./features/user/userSlice.js";
import { userReducer } from "./features/user/userSlice.js";

console.log('Initial states', store.getState())

const unsubscribe = store.subscribe(() => {
    console.log('updated state ', store.getState())
})

store.dispatch(fetchUsers())

// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.restocked(3))

// store.dispatch(icecreamAction.ordered())
// store.dispatch(icecreamAction.ordered())
// store.dispatch(icecreamAction.ordered())
// store.dispatch(icecreamAction.restocked(3))

// unsubscribe()