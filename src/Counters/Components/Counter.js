import EditCounter from "./EditCounter";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useDispatch } from "react-redux";
import { deleteCounter } from "../Action";
import { editCounter } from "../Action";
import { addNotification } from "../../Notifications/Action";

export default function Counter(props) {
  const dispatch = useDispatch();
  const counter = props.counter;

  return(
    <Card className="col-sm-12 mb-2">
      <Card.Body>
        <div style={{textAlign: "right"}} className="mb-1">
          <Button onClick={function (){
              dispatch(deleteCounter(counter.id));
              dispatch(addNotification({id: new Date().getUTCMilliseconds(), message: 'Counter Deleted'}));
             }} variant="danger" className="mr-1" style={{marginRight: '5px'}}>
            <i className="far fa-trash-alt"></i>
          </Button>
          <EditCounter counter={counter}/>
        </div>
        <Card.Title>{counter.title}</Card.Title>
        <Card.Title style={{textAlign: 'center'}}>{counter.value}</Card.Title>
        <Row>
          <Col sm={6}>
            <Button onClick={() => dispatch(editCounter({id: counter.id, title: counter.title, value: counter.value - 1}))} variant="danger" style={{width: '100%'}}>-</Button>
          </Col>
          <Col sm={6}>
            <Button onClick={() => dispatch(editCounter({id: counter.id, title: counter.title, value: counter.value + 1}))} variant="success" style={{width: '100%'}}>+</Button>
          </Col>
        </Row>
        <Row className="mt-1">
          <Col sm={12}>
            <Button onClick={() => dispatch(editCounter({id: counter.id, title: counter.title, value: 0}))} variant="primary" size="sm" style={{width: '100%'}}>Reset</Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
