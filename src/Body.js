import { Switch, Route } from "react-router-dom";
import Counters from "./Counters/Components/Counters";
import Homepage from "./Homepage";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from "react-bootstrap";

export default function Body() {
  return(
    <div className="m-3">
      <Container>
        <Row>
          <Col sm={12} md={12}>
            <Switch>
              <Route path="/" exact>
                <Homepage />
              </Route>
              <Route path="/counters" exact>
                <Counters />
              </Route>
            </Switch>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
