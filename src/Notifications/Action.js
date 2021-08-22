export const actions = {
  add_notification: 'ADD_NOTIFICATION',
  remove_notification: 'REMOVE_NOTIFICATION'
};

export const addNotification = (notification) => {
  return {
    type: actions.add_notification,
    payload: notification
  }
};

export const removeNotification = (id) => {
  return {
    type: actions.remove_notification,
    payload: id
  }
};
