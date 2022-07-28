import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const CreateAuthor = () => {
    const [name, setName] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        axios

            .post(`http://localhost:8000/api/authors`, {
                name
            })

            .then((res) => {
                console.log(res);
                navigate('/');
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data.errors);
            });
    }

    return (
        <div>
            <h1>Favorite Authors</h1><br/>
            <h3><Link to={'/'}>Home</Link></h3><br/>
            <h2>Add a new author:</h2><br/>

            <form
                onSubmit={handleSubmit}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}
            >
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                {errors.name && <span style={{color: "red"}}>{errors.name.message}</span>}<br/>

                <Link to={'/'}><button>Cancel</button></Link>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )


}

export default CreateAuthor;


