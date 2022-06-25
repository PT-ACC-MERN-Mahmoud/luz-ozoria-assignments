import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState('');
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const createUser = (e) => {
        e.preventDefault();

        const newUser = { firstName, lastName, email, password, confirmPassword };
        console.log("Welcome", newUser);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");

        setHasBeenSubmitted( true );
    };

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1) {
            setFirstNameError("Field is required!");
        } else if(e.target.value.length < 2) {
            setFirstNameError("First name must be 2 characters or longer!");
        } else {
            setFirstNameError("");
        }
        console.log()
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 1) {
            setLastNameError("Field is required!");
        } else if(e.target.value.length < 2) {
            setLastNameError("Last name must be 2 characters or longer!");
        } else {
            setLastNameError("");
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmail("Field is required!");
        } else if(e.target.value.length < 5) {
            setEmail("Email must be 5 characters or longer!");
        } else {
            setEmail("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
        setConfirmPassword(e.target.value)
        if(password !== confirmPassword){
            setPasswordError('Passwords must match!')
        }else if (e.target.value.length < 8){
            setPasswordError("Password must be 8 characters or longer!")
        }else {
            setPasswordError('')
        }
    }
    
    const formMessage = () => {
        if( hasBeenSubmitted ) {
        return "Thank you for submitting the form!";
	} else {
        return "Welcome, please submit the form";
	}
    };
    
    return (
        <form onSubmit={ createUser }>
            {
                hasBeenSubmitted ? 
                <h3>Thank you for submitting the form!</h3> :
                <h3>Welcome, please submit the form.</h3> 
            }
            <div>
                <label>First Name: </label> 
                <input type="text" value={firstName} onChange={ handleFirstName }/>
                {
                    firstNameError?
                    <p>{ firstNameError }</p>:
                    ""
                }
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" value={lastName} onChange={ handleLastName } />
                {
                    lastNameError?
                    <p>{ lastNameError }</p>:
                    ""
                }
            </div>
            <div>
                <label>Email:</label> 
                <input type="text" value={email} onChange={ handleEmail } />
                {
                    emailError?
                    <p>{ emailError }</p>:
                    ""
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="text" value={password} onChange={ handlePassword } />
                {
                    passwordError?
                    <p>{ passwordError }</p>:
                    ""
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" value={confirmPassword} onChange={ handlePassword } />
                {
                    passwordError?
                    <p>{ passwordError }</p>:
                    ""
                }
            </div>
            <input type="submit" value="Create User" />
        </form>
    );
};
    
export default UserForm;
