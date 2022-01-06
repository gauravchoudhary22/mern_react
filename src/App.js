import './App.css';
import { Link } from "react-router-dom";
// import Create from './components/create'
// import Read from './components/read'
// import Update from './components/update'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Link to="/create">Create User</Link> |{" "} 
    <Link to="/read">Read Data</Link> |{" "}
    <Link to="/update">Update User</Link> |{" "}
    </div>
  );
}

export default App;
