const About = () => {
    return (
        <div className="about" >
            <h1>About HR App</h1>
            <div className="about-content">
                <p>Welcome to our HR Management System!</p>
                <h2>Features</h2>
                <ul>
                    <li>View Employees</li>
                    <li>Add new employees</li>
                    <li>Track employee skills and department</li>
                    <li>Manage employee contact information</li>
                </ul>
                <h2>How to use</h2>
                <p>Navigate through the application using the menu at the top</p>
                <ul>
                    <li>Home: View all employees</li>
                    <li>Add Employee: Create new employee records</li>
                    <li>About: Learn more about the application</li>
                </ul>
            </div>
        </div>
    )
}

export default About;
