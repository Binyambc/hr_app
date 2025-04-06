const Person = (props) => {
    return (
    <div class='person_container'>
        <p>Name: {props.firstNameLastName}</p>
        <p>Tile: {props.title}</p>
        <p>Salary: {props.salary}</p>
        <p>Phone: {props.phone}</p>
        <p>E-mail: {props.phone}</p>
        <p>Animal: {props.animal}</p>
    </div>
    );
};

export default Person;
