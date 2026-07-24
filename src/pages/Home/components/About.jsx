import Container from "../../../components/Container";
import Header from "../../../components/Header";
import ScrollReveal from "../../../components/ScrollReveal";
import {about} from "../../../consts/index"
export default function About({ className }) {
  const services = about?.services?.map((item)=> {
    return (
      <ScrollReveal>
        <p className="text-prg text-xl pb-2">
          {item}
        </p>
      </ScrollReveal>
    );
  })
  return (
    <section className={className}>
      <Container>
        <Header className="text-start pb-7" header={"من نحن ؟"} />

        <p className="text-prg text-xl pb-2">{about?.aboutUs}</p>

        {services}

        <Header
          className="text-start pt-20  pb-7"
          header={"  كيف نقدر ندعمك؟"}
        />
        <ScrollReveal>
          <p className="text-prg text-xl ">
            {about?.how}
          </p>
        </ScrollReveal>
      </Container>
    </section>
  );
}
