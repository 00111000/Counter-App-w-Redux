import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from "react-redux";
import { editCounter } from "../Action";
import { addNotification } from "../../Notifications/Action";

export default function EditCounter(props) {
  const dispatch = useDispatch();
  const id = props.counter.id;
  const [title, setTitle] = useState(props.counter.title);
  const [value, setValue] = useState(props.counter.value);
  const [show, setShow] = useState(false);

  return(
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        <i className="fas fa-pencil-alt"></i>
      </Button>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Counter</Modal.Title>
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
          <Button onClick={function (){
            dispatch(editCounter({id: id, title: title, value: value}));
            dispatch(addNotification({id: new Date().getUTCMilliseconds(), message: 'Counter Edited'}));
            setShow(false);
          }} variant="primary">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
