import { useQuery, gql } from '@apollo/client';
import PokeCard from './PokeCard';
import CodeBlock from './CodeBlock';
import './App.css';
import './CodeBlock.css';

const GET_POKEMON = gql`
  query GetPokemon {
    pokemon(
      where: {
        name: { _in: ["bulbasaur", "squirtle", "charmander", "pikachu"] }
      }
    ) {
      id
      name
    }
  }
`;

// Extract the query string for display purposes
const queryString = `query GetPokemon {
  pokemon(
    where: {
      name: { _in: ["bulbasaur", "squirtle", "charmander", "pikachu"] }
    }
  ) {
    id
    name
  }
}`;

function App() {
  const { loading, error, data } = useQuery(GET_POKEMON);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <h1>Choose your starter</h1>

      <CodeBlock
        code={queryString}
        language="graphql"
        title="GraphQL Query"
      />

      <ul>
        {data.pokemon.map((pokemon: { id: string; name: string }) => {
          return (
            <PokeCard
              key={pokemon.id}
              name={pokemon.name}
              id={pokemon.id}
            />
          );
        })}
      </ul>
    </>
  );
}

export default App;
