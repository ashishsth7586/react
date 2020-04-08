import store from "./store";
import { bugAdded, bugResolved } from "./actionCreators";

store.dispatch(bugAdded("Bug 1"));
store.dispatch(bugResolved(1));

console.log(store.getState());
