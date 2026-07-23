import About from "./components/About";
import Hero from "./components/Hero";
import Providers from "./components/Providers";
import Testimonials from "./components/Testimonials";
import Why from "./components/Why";
import PageTransition from "../../components/animation/PageTransition"; 

export default function HomePage(){
    return (
      <PageTransition>
        <div className="mt-18 xl:mt-16">
          <Hero />
          <About className="pt-20" />
          <Providers className="mt-25 py-25 bg-text-main/5" />
          <Why className={"pt-25"} />
          <Testimonials className="mt-25 py-25 bg-text-main/5" />
        </div>
      </PageTransition>
    );
}
//