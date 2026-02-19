import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import axios from "axios";

const EmployeeDetail = () => {
    const { id } = useParams();
    const [employee, setEmployee] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        axios 
            .get(`https://hr-app-backend-8.onrender.com/employees/${id}`)
            .then((res) => {
                setEmployee(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Failed to fetch employee:", err);
                setLoading(false);
            });
    }, [id]);

    

    return (
        <div className="employee-detail">
            <h1>{employee.name}</h1>
            <p><strong>Department:</strong> {employee.department}</p>
            <p><strong>Salary:</strong> ${employee.salary}</p>
            <button onClick={() => navigate(-1)}>Back to List</button>
        </div>
    );
};

export default EmployeeDetail;
