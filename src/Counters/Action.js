export const actions = {
  add_counter: 'ADD_COUNTER',
  edit_counter: 'EDIT_COUNTER',
  delete_counter: 'DELETE_COUNTER'
};

export const addCounter = (counter) => {
  return {
    type: actions.add_counter,
    payload: counter
  };
};

export const editCounter = (counter) => {
  return {
    type: actions.edit_counter,
    payload: {
      id: counter.id,
      title: counter.title,
      value: counter.value
    }
  };
};

export const deleteCounter = (id) => {
  return {
    type: actions.delete_counter,
    payload: id
  };
};
