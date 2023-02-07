
import styles from "../../styles/Pokemon.module.css";

import Image from "next/image";

import { useRouter } from "next/router";
export async function getStaticPaths(){
  const maxPokemons = 100;
  const api = "https://pokeapi.co/api/v2/pokemon/";
  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();


  const paths = data.results.map((pokemon,index) => {
    return {
      params: { pokemonId: (index+1).toString() },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export async function getStaticProps(context){
  const id = context.params.pokemonId;

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  const data = await res.json();
  console.log("data:"+ data)

  return {
    props: { pokemon: data },
  };
};



export default function Pokemon({ pokemon }) {
  
   const router=useRouter()
   if(router.isFallback){
    return <div>Carregando...</div>
   }
  
  return (
    <div className={styles.pokemon_container}>
      <h1 className={styles.pokemon_title}>{pokemon.name}</h1>
      <Image
        className={styles.pokemon_image}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        width="150"
        height="120"
        alt={pokemon.name}
      />
      
      <div className={styles.boxSide}>
      <div className={styles.pokemon_number}>
        <h3>Número:</h3>
        <p>#{pokemon.id}</p>
      </div>
        <div>
          <h3>Tipos:</h3>
          <div className={styles.types_container}>
            {pokemon.types.map((item, index) => (
              <span
                key={index}
                className={`${styles.type} ${styles["type_" + item.type.name]}`}
              >
                {item.type.name}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3  className={styles.pokemon_height}>Altura:</h3>
          <p>{pokemon.height * 10} cm</p>
        </div>
        <div>
          <h3  className={styles.pokemon_weigth}>Peso:</h3>
          <p>{pokemon.weight / 10} kg</p>
        </div>
      </div>
    </div>
  );
}

