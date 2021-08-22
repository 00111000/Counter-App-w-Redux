import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Body from './Body';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Notifications from "./Notifications/Components/Notifications";

export default function App() {
  return (
    <Router>
      <Notifications />
      <Header />
      <Body />
    </Router>
  );
}
