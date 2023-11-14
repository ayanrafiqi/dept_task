import react from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import Department from "./Components/Department";
import CreateEdit from "./Components/CreateEdit";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Router>
      {/* <Header/> */}
      <SideBar />
      <Container>
        <Routes>
          <Route path="/" element={<Department />} />
          <Route path="/edit/:id" element={<CreateEdit />} />
          <Route path="/create" element={<CreateEdit />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
