import { useSelector } from 'react-redux';
import Notifcation from './Notification';

export default function Notifications () {
  const notifications = useSelector(state => state.notifications);

  return(
    <div className="m-1" style={{ zIndex: 1000, position: 'fixed', top: 0, right: 0, }}>
      {notifications.map((notification) => (
        <Notifcation 
          key={notification.id}
          id={notification.id}
          message={notification.message}
        />
      ))}
    </div>
  );
}
