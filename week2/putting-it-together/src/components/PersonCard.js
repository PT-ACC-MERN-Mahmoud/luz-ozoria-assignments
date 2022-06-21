import React, {useState} from 'react';

const PersonCard = (props) => {
    const { firstName, lastName, age, hairColor } = props;
    const [birthday, setBirthday] = useState(props.age)

return (
    <div className="container">
    <h2>{lastName}, {firstName}</h2>
    <p>Age: {props.age}</p>
    <button onClick={(e) => setBirthday(birthday + 1)}>Birthday button for {props.firstName} {props.lastName}</button>
    <p>Hair Color: {hairColor}</p>
    </div>
);
}

export default PersonCard;