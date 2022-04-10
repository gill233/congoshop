import Link from "next/link";
function MyApp({ Component, pageProps }) {
    return (
    <>
    <Link href="/"> 
    <a>Acceuille</a> 
    </Link>
     <Link href="/about"> 
     <a>A propose de nous</a> 
     </Link>
      
    <Component {...pageProps} />
    </>
    )
  }

  export default MyApp