import Container from "../../../components/Container";
import Header from "../../../components/Header";
import SwiperSlider from "../../../components/SwiperSlider";
import {testimonials} from "../../../consts/index"


export default function Testimonials({ className }) {
  return (
    <section className={className}>
      <Header className="pb-3" header={"آراء العملاء"} />
      <Container>
        <SwiperSlider allData={testimonials} type={"test"} />
      </Container>
    </section>
  );
}
