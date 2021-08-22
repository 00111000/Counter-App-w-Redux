import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from "react-redux";
import { addCounter } from "../Action";
import { addNotification } from "../../Notifications/Action";

export default function CreateCounter() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);

  return(
    <>
      <div style={{textAlign: "right"}}>
        <Button onClick={() => setShow(true)} variant="success" className="mb-2">
          Create Counter
        </Button>
      </div>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Counter</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <div className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" 
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <Form.Label>Value</Form.Label>
                <Form.Control type="number" 
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={function () {
            dispatch(addCounter({id: new Date().getUTCMilliseconds(), title: title, value: value}));
            dispatch(addNotification({id: new Date().getUTCMilliseconds(), message: 'Counter Created'}));
            setShow(false);
          }} variant="primary">
            Add Counter
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
