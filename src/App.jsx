import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useState } from "react";
import { employees } from "./PersonData.js";
import PersonList from './PersonList.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import AddEmployeeForm from './AddEmployee.jsx';
import About from "./About.jsx";
import './App.css';

const RootLayout = () => {
  return (
    <div className='app'>
      <Header logo='HR-App'/>
      <main>
        <Outlet />
      </main>
      <Footer copyRight={'© Binyam Angamo - REACT25S'}/>
    </div>
  )
}

const App = () => {
  const [employeesData, setEmployeesData] = useState(employees);

  const addEmployeeHandler = (newEmployee) => {

    const employeeWithId = {
      ...newEmployee,
      id: Date.now(),
      skills: typeof newEmployee.skills === 'string' 
        ? newEmployee.skills.split(",").map(skill => skill.trim())
        : newEmployee.skills
    };
    setEmployeesData(prev => [...prev, employeeWithId]);
  };

  const router = createBrowserRouter([
    {
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <PersonList employeesData={employeesData} />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/add",
          element: <AddEmployeeForm onAddEmployee={addEmployeeHandler} />
        }
      ]
    }
  ]);
  
  return <RouterProvider router={router} />
    
};

export default App;

