import Image from "next/image"
import Link from "next/link"
import styles from "../styles/Card.module.css"

export default function Card({pokemon}){
    return(
        <>
        <div className={styles.card}>
            <Image 
            className={styles.card_img}
             src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
             width={150} height={140} alt={`${pokemon.name}`}/>
             <div className={styles.boxCardText}>
                <h3>{pokemon.name}</h3>
                <button>
                    <Link href={`/pokemon/${pokemon.id}`}>detalhes</Link>
                </button>
             </div>
        </div>
        
        </>
    )
}