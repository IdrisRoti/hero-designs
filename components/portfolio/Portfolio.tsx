import Contact from "./Contact"
import Header from "./Header"
import Hero from "./Hero"
import SelectedWorks from "./SelectedWorks"
import Services from "./Services"
import Testimonials from "./Testimonials"

const Portfolio = () => {
  return (
    <div>
        <section id="who">
            <Header /> 
            <Hero /> 
        </section>
        <section id="services">
            <Services />
        </section>
        <section className="pt-20 bg-stone-100" id="portfolio">
            <SelectedWorks />
        </section>
        <section className="relative" id="availabilty">
            <Testimonials />
            <Contact />
        </section>
    </div>
  )
}

export default Portfolio