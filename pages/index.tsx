import styles from "@/styles/Home.module.css";
import Card from "../components/Card";
import Image from "next/image";

export async function getStaticProps() {
  const maxPokemons = 100;
  const api = "https://pokeapi.co/api/v2/pokemon/";
  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();

  //add pokemon index

  data.results.forEach((item, index) => {
    item.id = index + 1;
  });

  return {
    props: {
      pokemons: data.results,
    },
  };
}
export default function Home({ pokemons }) {
  return (
    <>
      <h1 className={styles.h1}>
        <span>Poke</span>dex{" "}
        <Image
          src="/images/pokeball.png"
          width={30}
          height={30}
          alt="pokeball"
        />
      </h1>
      <ul className={styles.menu}>
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>
            <Card pokemon={pokemon} />
          </li>
        ))}
      </ul>
    </>
  );
}
