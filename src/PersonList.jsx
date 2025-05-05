import {employees} from "./PersonData";
import PersonCard from "./PersonCard";

const PersonList = ({ employeesData }) => {
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
