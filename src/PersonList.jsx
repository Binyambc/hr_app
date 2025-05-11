import { useState, useEffect } from "react";
import { employees } from "./PersonData";
import PersonCard from "./PersonCard";
import axios from "axios";

const PersonList = ({}) => {

    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState([true]);

    useEffect(() => {
        axios.get("http://localhost:3005/employees").then((res) => {
          setEmployees(res.data);
          setLoading(false);
        });
      }, []);

    return (
        <div className="person_list">
        <h1>Employee list</h1>
            <div className="person_grid">
        {employees.map((employee) => (
            <PersonCard key={employee.id} {...employee}/>
        ))}
            </div>
        </div>
    )
}

export default PersonList;
