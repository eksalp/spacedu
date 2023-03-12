import Hero from "../components/hero_elemt/Hero";
import Navbar from "../components/navbar/Navbar";
import ContactImg from "../components/assets/1.jpg"

function Contact (){
    return(
        <>
        <Navbar />
        <Hero
        cName="hero-mid"
        heroImg={ContactImg}
        title="Contact"
        btnClass="hide"
        
        
        />
        </>
    )
}

export default Contact;