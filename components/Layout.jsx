import Navbar1 from "./Navbar1"
import Footer from "./Footer"
import Head from "next/head"

const Layout=({children})=>{
    return(
        <>
         <Head>
            <link rel="shortcut icon" href="/images/favicon.ico" />
            <title>pokedex</title>
         </Head>
         <Navbar1/>
          <main className="mainContainer">
            {children}
          </main>
          <Footer/>
        </>
    )
}
export default Layout