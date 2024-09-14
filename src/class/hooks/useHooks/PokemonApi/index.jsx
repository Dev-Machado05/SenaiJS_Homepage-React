import { useEffect } from "react";

export default function PokemonAPI() {
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/fennekin')
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
    }, []);

    return (
        <h1>em desenvolvimento...</h1>
    );
}