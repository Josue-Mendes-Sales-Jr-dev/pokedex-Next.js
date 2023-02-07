import Link from "next/link"
import Image from "next/image"
import styles from '../styles/navbar.module.css'
import {Navbar,Container,Nav} from "react-bootstrap"


const Navbar1=()=>{
    return(
        <>
         <Navbar bg="dark" variant="dark" expand="lg" className={styles.nav}>
        
        <Container className={styles.container}>
        
        <Navbar.Brand ><Link className={styles.link} href='/'>
          <Image src='/images/pokeball.png' width={30} height={30} alt="pokeball"/>
           <h3>Pokedex</h3>
        </Link> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className={styles.navLinks}>
          <Link className={styles.linkNav} href='/'>home</Link>  
          <Link className={styles.linkNav} href='/about'>about</Link>  
          </Nav>
        </Navbar.Collapse>
          
        </Container>
      </Navbar>
        </>
    )
}
export default Navbar1

