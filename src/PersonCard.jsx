import React, { useState } from 'react';
import './PersonCard.css';

const PersonCard = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const calculateYearsWorked = (startDate) => {
        const start = new Date(startDate);
        const now = new Date();
        const msInYears = 1000 * 60 * 60 * 24 * 365.25;
        return (now - start) / msInYears;
    };

    const yearsWorked = calculateYearsWorked(props.startDate);
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
            <button className='person_container' onClick={toggleModal}>
                <p>ID: {props.id}</p>
                <p>Name: {props.name}</p>
                <p>Title: {props.title}</p>
                <p>Salary: €{props.salary.toLocaleString()}</p>
                <p>Phone: {props.phone}</p>
                <p>E-mail: {props.email}</p>
                <p>Animal: {props.animal}</p>
                <p>Start Date: {new Date(props.startDate).toLocaleString()}</p>
                <p>Years Worked: {yearsWorked.toFixed(2)}</p>
                <p>Location: {props.location}</p>
                <p>Department: {props.department}</p>
                <p>Skills: {Array.isArray(props.skills) ? props.skills.join(", ") : props.skills}</p>
                {reminder && <p className="reminder">{reminder}</p>}
            </button>

            {isModalOpen && (
                <div className="modal-overlay" onClick={toggleModal}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <button className="close-button" onClick={toggleModal}>×</button>
                        <h2>Employee Details</h2>
                        <div className="modal-details">
                            <p><strong>ID:</strong> {props.id}</p>
                            <p><strong>Name:</strong> {props.name}</p>
                            <p><strong>Title:</strong> {props.title}</p>
                            <p><strong>Salary:</strong> ${props.salary.toLocaleString()}</p>
                            <p><strong>Phone:</strong> {props.phone}</p>
                            <p><strong>E-mail:</strong> {props.email}</p>
                            <p><strong>Animal:</strong> {props.animal}</p>
                            <p><strong>Start Date:</strong> {new Date(props.startDate).toLocaleString()}</p>
                            <p><strong>Years Worked:</strong> {yearsWorked.toFixed(2)}</p>
                            <p><strong>Location:</strong> {props.location}</p>
                            <p><strong>Department:</strong> {props.department}</p>
                            <p><strong>Skills:</strong> {Array.isArray(props.skills) ? props.skills.join(", ") : props.skills}</p>
                            {reminder && <p className="reminder">{reminder}</p>}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default PersonCard;