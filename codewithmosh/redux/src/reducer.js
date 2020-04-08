import * as actions from "./actionTypes";

let lastId = 0;

export default function reducer(state = [], action) {
  switch (action.type) {
    case actions.BUG_ADDED:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case actions.BUG_REMOVED:
      return [state.filter((bug) => bug.id !== action.payload.id)];

    case actions.BUG_RESOLVED:
      /* If the id of the bug is not euqal to passed bug(which needs to be resolved), 
         we wanna return the bug as is otherwise, we wanna take a copy of bug and modify
        (immutable way)  */
      return state.map((bug) =>
        bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
      );
    default:
      return state;
  }
}
