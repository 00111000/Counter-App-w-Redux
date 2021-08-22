import { useState } from "react";
import Toast from 'react-bootstrap/Toast';
import { useDispatch } from "react-redux";
import { removeNotification } from "../Action";

export default function Notification ({ id, message }) {
  const [show, setShow] = useState(true);
  const dispatch = useDispatch();
  const delay = 3000;

  setTimeout(() => {
    dispatch(removeNotification(id));
  }, delay);

  return(
    <Toast onClose={() => setShow(false)} show={show} delay={delay} autohide>
      <Toast.Header closeButton={false}>
        <strong className="mr-auto">Notification</strong>
      </Toast.Header>
      <Toast.Body>{message}</Toast.Body>
    </Toast>
  );
}
