import { actions } from "./Action";

const counters = [
  {
    "id": 1,
    "title": "First Counter",
    "value": 7
  },
  {
    "id": 2,
    "title": "Second Counter",
    "value": 77
  },
  {
    "id": 3,
    "title": "Third Counter",
    "value": 777
  }
];

const countersReducer = (state = counters, action) => {
  switch (action.type) {
    case actions.add_counter:
      return [...state, action.payload];
    case actions.edit_counter:
        const counter = state.filter(counter => counter.id === action.payload.id)[0];
        counter.title = action.payload.title;
        counter.value = action.payload.value;
        return [...state];
    case actions.delete_counter:
      state = state.filter(counter => counter.id !== action.payload);
      return [...state];
    default:
      return [...state];
  };
};
  
export default countersReducer;
