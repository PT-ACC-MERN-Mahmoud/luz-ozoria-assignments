import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';

const EditAuthor = () => {
    const [name, setName] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();
    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/authors/${id}`)
            .then((res) => {
                console.log(res.data);
                setName(res.data.name);
            })
            .catch((err) => console.log('GET AUTHOR BY ID ERROR', err));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .put(`http://localhost:8000/api/authors/${ id }`, {
                name,
            })
            .then((res) => {
                console.log(res.data);
                navigate('/');
            })
            .catch((err) => console.log('POST ERROR', err));
    };
    return (
        <div style={{border: "solid black 1px"}}>
            <h1>Favorite Authors</h1>
            <h3><Link to={`/`}>Back to home</Link></h3><br/>
            <h2> Edit this author</h2><br/>

            <form onSubmit={handleSubmit}>
                <label>Name:</label><br/>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} /><br/><br/>

                <Link to={'/'}><button>Cancel</button></Link>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default EditAuthor;



