import './App.css';
import { DeptLogin, DeptSignup, DeptHome } from "../Pages";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>

        {/* Departments */}
        <Route path="/d/login" element={<DeptLogin/>} />
        <Route path="/d/signup" element={<DeptSignup />} />
        <Route path="/d/" element={<DeptHome />}/>

      </Routes>
    </div>
  );
}

export default App


// npm install axios
// npm install react-router-dom
// npm install react-toastify
// npm install react-cookie