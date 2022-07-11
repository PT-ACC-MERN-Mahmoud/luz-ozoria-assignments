import { useParams, Link } from 'react-router-dom';

const Params = (props) => {

    const {value, text, background} = useParams();

    const style = {
        color: text,
        backgroundColor: background,
    };

    return (
        <div>
            {isNaN(+value) ? 
                <h1 style={style}>The word is: {value}</h1> : 
                <h1 style={style}> The number is: {value}</h1>}
            <Link to={"/"}>Go home</Link>

        </div>
    )
};

export default Params;