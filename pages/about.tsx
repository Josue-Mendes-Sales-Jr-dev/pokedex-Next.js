import Styles from "../styles/about.module.css"
import Image
 from "next/image"
export default function About(){
    return(
        <>
        <div className={Styles.container}>
            <h1>Sobre o projeto</h1>
            <p className={Styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat unde, nobis error accusamus doloribus, magnam accusantium earum, dolor vel ratione minus nulla aliquid molestiae blanditiis id et quos! Incidunt, similique?
            </p>
            <Image src="/images/charizard.png" width={250}
             height={245} alt="image de charizard"/>
            
        </div>
        </>
    )
}