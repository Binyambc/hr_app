import { useState } from "react";
import PersonCard from "../../PersonCard/PersonCard";
import "./personList.css"

const PersonList = ({employeesData, onUpdate}) => {

    const [searchValue, setSearchValue] = useState("");

    if (!employeesData || !Array.isArray(employeesData)) {
        return <p>Loading employee data...</p>;
      }

    const searchHandle = (e) => {
        setSearchValue(e.target.value);
    };

    const filteredEmployees = employeesData.filter((employee) => {
        const search = searchValue.toLowerCase();
        const matchSearch = 
            employee.name.toLowerCase().includes(search) ||
            employee.department.toLowerCase().includes(search);
        return matchSearch;
    })
        return (
            <>
            <div className="person_list">
                <h1>Employee list</h1>
                <div className="employees">
                    <div>
                        <label htmlFor="search">Search</label>
                            <input 
                                type="text" 
                                id="search" 
                                name="search"
                                placeholder="search by name or department" 
                                value={searchValue} 
                                onChange={searchHandle} 
                            />    
                    </div>   
                </div>

                <div className="person_grid">
                    {filteredEmployees.length > 0 ? (
                        filteredEmployees.map((employee) => (
                            <PersonCard
                                key={employee.id}
                                {...employee}
                                onUpdate={(id, updatedFields) => onUpdate(id, updatedFields)}
                            />
                        ))
                    ) : (
                        <p>No matches found. try another search.</p>
                    )
                }
                    
                </div>    
            </div>
            </>
        )
}

export default PersonList;
