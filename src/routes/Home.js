 import Hero from "../components/hero_elemt/Hero";
import Navbar from "../components/navbar/Navbar";
import Footer  from "../components/footer/Footer";


function Home (){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero"
        heroImg="https://c.tadst.com/gfx/750w/un-child-rights.jpg"
        title="Title"
        text="text"
        buttonText="button name"
        url="/"   
        // url for button
        btnClass="show"
        />

      
        <Footer/>
        </>

    
    )
}

export default Home;