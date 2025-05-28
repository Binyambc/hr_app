import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import PersonList from './components/pages/Employees/PersonList.jsx';
import PersonCard from "./components/PersonCard/PersonCard.jsx";
import AddEmployeeForm from './components/pages/AddBookForm/AddEmployee.jsx';
import About from "./components/pages/About/About.jsx";
import './App.css';
import axios from "axios";
import Root from "./components/pages/Root.jsx";

const App = () => {
  const [employeesData, setEmployeesData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3005/employees")
      .then((res) => setEmployeesData(res.data))
      .catch((err) => console.error("Failed to fetch employees", err));
  }, []);

  const addEmployeeHandler = (newEmployee) => {
    setEmployeesData((prev) => [...prev, newEmployee]);
  };


  const handleUpdate = (id, updatedFields) => {
    axios
      .patch(`http://localhost:3005/employees/${id}`, updatedFields )
      .then((res) => {
        setEmployeesData((prev) =>
        prev.map((employee) => (employee.id === id ? res.data : employee))
      );
      })
      .catch((err) => {
        console.error("Failed to update Change:", err)
      });

    };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root/>}>
          <Route index element={<About/>}/>
          <Route 
            path="/employees" 
              element={
                <PersonList
                  employeesData={employeesData}
                  onUpdate={handleUpdate}
                />
              }
            />  
          <Route path="/employees/:id" element={<PersonCard/>}/>
          <Route
            path="/addEmployeeForm"
            element={<AddEmployeeForm onAddEmployee={addEmployeeHandler}/>}
          />  
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

