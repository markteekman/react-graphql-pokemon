import Tilt from 'react-parallax-tilt';
import './PokeCard.css';

export default function PokeCard({ name, id }: { name: string; id: string }) {
  return (
    <>
      <Tilt
        className="poke-card parallax-effect-glare-scale"
        perspective={500}
        glareEnable={true}
        glareColor="#ffffff"
      >
        <div className="inner-element">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
            alt={name}
          />
          <p>{name}</p>
        </div>
      </Tilt>
    </>
  );
}
