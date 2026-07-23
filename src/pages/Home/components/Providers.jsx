
import Container from "../../../components/Container";
import Header from "../../../components/Header";
import { providers } from "../../../consts/index";

import SwiperSlider from "../../../components/SwiperSlider";
export default function Providers({className}) {
  return (
    <section className={className}>
      <Container>
        <Header className="pb-10" header={`مدربين معتمدين`} />
        <p className="text-prg text-xl text-center">{` احجز جلسة واختر من بين أكثر من ٢٠ لايف كوتش جودة حياة معتمد يشاركك رحلة نمو وتغيير وتحقيق أهداف `}</p>
        <div className=" pt-20 flex-wrap w-full">
          <SwiperSlider allData={providers} type={"img"} />
        </div>
      </Container>
    </section>
  );
}
