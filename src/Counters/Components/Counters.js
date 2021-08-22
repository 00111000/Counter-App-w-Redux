// import useGET from "../../Hooks/useGET";
import Counter from "./Counter";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import { useState } from "react";
import { useSelector } from 'react-redux';
import CreateCounter from "./CreateCounter";

export default function Counters() {

  const counters = useSelector(state => state.counters);

  return (
    <>
    <CreateCounter />

    { counters && <Row>
        <Col sm={12}>
          {counters.map((counter) => (
            <Counter 
              key={counter.id}
              counter={counter}
            />
          ))}
        </Col>
      </Row> 
    }
  </>
  );
}
