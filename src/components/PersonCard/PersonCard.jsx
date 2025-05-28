import React, { useState } from 'react';
import './PersonCard.css';
import { Link } from "react-router-dom";

const PersonCard = ({
    id,
    name,
    title,
    salary,
    phone,
    email,
    animal,
    startDate,
    location,
    department,
    skills,
    onUpdate,
}) => {
    
    // const [isDeleting, setIsDeleting] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editData, setEditData] = useState({salary, location, department, 
        skills: Array.isArray(skills) ? skills.join(", ") : skills,});
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSave = () => {

        const updatedSkills = editData.skills.split(", ")
        .map((s) => s.trim())
        .filter(Boolean);

        onUpdate(id, {
            salary: parseFloat(editData.salary),
            location: editData.location,
            department: editData.department,
            skills: updatedSkills,
            });
        setIsEditing(false);
    };
    
    const handleCancel = () => {
        setEditData({salary, location, department, skills: Array.isArray(skills) ? skills.join(", ") : skills,
        });
        setIsEditing(false);
    };

    const isUnchanged = 
        parseFloat(editData.salary) === parseFloat(salary) &&
        editData.location === location &&
        editData.department === department &&
        editData.skills.trim() === (Array.isArray(skills) ? skills.join(", ") : skills);

    const isSaveDisabled = editData.salary === "" || isUnchanged;

    const calculateYearsWorked = (startDate) => {
        const start = new Date(startDate);
        const now = new Date();
        const msInYears = 1000 * 60 * 60 * 24 * 365.25;
        return (now - start) / msInYears;
    };
    
    const yearsWorked = calculateYearsWorked(startDate);
    const fullYears = Math.floor(yearsWorked);
    let reminder = "";

    if (fullYears > 0 && fullYears % 5 === 0 && yearsWorked - fullYears < 0.1) {
        reminder = "🎉 Schedule a recognition meeting.";
    } else if (yearsWorked < 0.5) {
        reminder = "🔔 Schedule a probation review.";
    }

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <>
        <div className='person_card'>
            <button className='person_container' onClick={toggleModal}>
                <p>Name: {name}</p>
                <p>Title: {title}</p>
                <p>Location: {location}</p>
                <p>Department: {department}</p>
                {reminder && <p className="reminder">{reminder}</p>}
            </button>
            </div>
            
            {isModalOpen && (
                <div className="modal-overlay" onClick={toggleModal}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <button className="close-button" onClick={toggleModal}>×</button>
                        <h2>Employee Details</h2>
                        <div className="modal-details">
                            <p><strong>ID:</strong> {id}</p>
                            <p><strong>Name:</strong> {name}</p>
                            <p><strong>Title:</strong> {title}</p>

                            <p><strong>Phone:</strong> {phone}</p>
                            <p><strong>E-mail:</strong> {email}</p>
                            <p><strong>Animal:</strong> {animal}</p>
                            <p><strong>Start Date:</strong> {new Date(startDate).toLocaleString()}</p>
                            <p><strong>Years Worked:</strong> {yearsWorked.toFixed(2)}</p>
                            <p><strong>Salary:</strong> {isEditing ? (
                                            <input type="number" value={editData.salary} 
                                            onChange={(e) => setEditData((prev) => 
                                                ({ ...prev, salary: e.target.value}))} />) : `${salary}€`} </p>
                            <p><strong>Location:</strong> {isEditing ? (
                                            <input type="text" value={editData.location} 
                                            onChange={(e) => setEditData((prev) => 
                                                ({ ...prev, location: e.target.value}))} />) : location} </p>
                            <p><strong>Department:</strong> {isEditing ? (
                                            <input type="text" value={editData.department} 
                                            onChange={(e) => setEditData((prev) => 
                                                ({ ...prev, department: e.target.value}))} />) : department} </p>
                            <p><strong>Skills:</strong> {isEditing ? (
                                            <input type="text" value={editData.skills} 
                                            onChange={(e) => setEditData((prev) => 
                                                ({ ...prev, skills: e.target.value}))} />) : (Array.isArray(skills) ? skills.join(", ") : skills)} </p>
                            {reminder && <p className="reminder">{reminder}</p>}
                            <div>
                                {isEditing ? (
                                    <>
                                        <button onClick={handleSave} disabled={isSaveDisabled}>Save</button>
                                        <button onClick={handleCancel}>Cancel</button>
                                    </>
                                ) : (
                                    <button onClick={() => setIsEditing(true)}>Edit</button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default PersonCard;