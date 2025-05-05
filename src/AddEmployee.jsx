import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header"
import Footer from "./Footer"

const AddEmployeeForm = ({ onAddEmployee }) => {
    const [formData, setFormData] = useState({
        name: "",
        title: "",
        salary: "",
        phone: "",
        email: "",
        animal: "",
        startDate: "",
        location: "",
        department: "",
        skills: "",
    })

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({...prev, [name]: value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const employeeData = {
            ...formData,
            salary: parseFloat(formData.salary),
            skills: formData.skills
        };
        onAddEmployee(employeeData);
        navigate("/");
    }

    return (
        <div className="add-employee">
            <h1>Add New Employee</h1>
            <form onSubmit={handleSubmit} className="employee-form">
                <div className="form-group">
                    <input 
                        type="text"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        name="name"
                        required
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text"
                        placeholder="Title"
                        value={formData.title}
                        onChange={handleChange}
                        name="title"
                        required
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="number"
                        placeholder="Salary"
                        value={formData.salary}
                        onChange={handleChange}
                        name="salary"
                        required
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="tel"
                        placeholder="Phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        name="phone"
                        required
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="email"
                        placeholder="E-mail"
                        value={formData.email}
                        onChange={handleChange}
                        name="email"
                        required
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text"
                        placeholder="Favorite animal"
                        value={formData.animal}
                        onChange={handleChange}
                        name="animal"
                        required
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="date"
                        placeholder="Start Date"
                        value={formData.startDate}
                        onChange={handleChange}
                        name="startDate"
                        required
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text"
                        placeholder="Location"
                        value={formData.location}
                        onChange={handleChange}
                        name="location"
                        required
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text"
                        placeholder="Department"
                        value={formData.department}
                        onChange={handleChange}
                        name="department"
                        required
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text"
                        placeholder="Skills (comma-separated)"
                        value={formData.skills}
                        onChange={handleChange}
                        name="skills"
                        required
                    />
                </div>
                <button type="submit" className="submit-btn">Add Employee</button>
            </form>
        </div>
    );
};

export default AddEmployeeForm;
