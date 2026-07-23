import Header from "../../../components/Header";
import Container from "../../../components/Container";
import Card from "../../../components/Card";
import ScrollReveal from "../../../components/ScrollReveal";
import {whyUs} from "../../../consts/index.js"


export default function Why({ className }) {
  const dataList = whyUs.map((item) => {
    return (
      <ScrollReveal>
        <Card
          title={item.title}
          border-gray-300
          paragraph={item.prg}
          className="border-gray-300 text-center"
        ></Card>
      </ScrollReveal>
    );
  });
  return (
    <div className={className}>
      <Header
        className="pb-10"
        header={"ساهمنا في رحلات تحوّل منذ انطلاقتنا"}
        paragraph={"انطلقت بوح في ابريل 2026"}
      />
      <Container className="w-full grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5">
        {dataList}
      </Container>
    </div>
  );
}
