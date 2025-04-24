const PersonCard = (props) => {

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
    }
        else if (yearsWorked < 0.5) {
            reminder = "🔔 Schedule a probation review.";
        }
    

    return (
    <div className='person_container'>
        <p>ID: {props.id}</p>
        <p>Name: {props.firstNameLastName}</p>
        <p>Tile: {props.title}</p>
        <p>Salary: {props.salary}</p>
        <p>Phone: {props.phone}</p>
        <p>E-mail: {props.email}</p>
        <p>Animal: {props.animal}</p>
        <p>Start Date: {props.startDate}</p>
        <p>Years Worked: {yearsWorked.toFixed(2)}</p>
        <p>Department: {props.department}</p>
        <p>Skills: {props.skills}</p>
        {reminder && <p className="reminder">{reminder}</p> }
    </div>
    );
};

export default PersonCard;
