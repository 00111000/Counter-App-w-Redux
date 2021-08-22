import { actions } from "./Action";

const notifications = [];

const notificationsReducer = (state = notifications, action) => {
  switch (action.type) {
    case actions.add_notification:
      state = [...state, action.payload];
      return state;
      case actions.remove_notification:
        state = state.filter(notification => notification.id !== action.payload);
        return state;
    default:
      return state;
  };
};

export default notificationsReducer;
