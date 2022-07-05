import React, {useState} from 'react';

const Pokemon = (props) => {
    const [pokeList, setPokeList] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/')
            .then(response => {
                return response.json()
            })
            .then(response => {
                setPokeList(response.results)
            })
            .catch((err) => {
                console.log(err);
            })},
    []);
    
    return (
        <div className="App">
            <ul>
                {state.pokeList ? state.pokeList.map((pokeList, index)=>{
                    return (<div key={index}>{pokeList.name}</div>)
                }):null}
            </ul>
        </div>
    );
}
export default Pokemon;