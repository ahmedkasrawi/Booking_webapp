import Container from "../../../components/Container";
import Header from "../../../components/Header";
import ScrollReveal from "../../../components/ScrollReveal";

export default function About({ className }) {
  return (
    <section className={className}>
      <Container>
        <Header className="text-start pb-7" header={"من نحن ؟"} />

        <p className="text-prg text-xl pb-2">
          {`“بوح” منصة رقمية تربطك بمدربين معتمدين (لايف كوتش) في جودة الحياة،
           وتقدّم لك:`}
        </p>

        <ScrollReveal>
          <p className="text-prg text-xl pb-2">{`  جلسات إنصات بدون أحكام`}</p>
        </ScrollReveal>
        <ScrollReveal>
          <p className="text-prg text-xl pb-2">
            {"دوائر دعم جماعي مع ناس يشبهونك"}
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <p className="text-prg text-xl pb-2">
            {"جلسات كوتشينج فردية تساعدك تنمو من الداخل"}
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <p className="text-prg text-xl">
            {"بوح، لأنك تستحق تُسمَع، وتُفهم، وتنمو."}
          </p>
        </ScrollReveal>

        <Header
          className="text-start pt-20  pb-7"
          header={"  كيف نقدر ندعمك؟"}
        />
        <ScrollReveal>
          <p className="text-prg text-xl ">
            {`
            في بوح، نرافقك من خلال جلسات كوتشينج تساعدك على ترتيب أفكارك، توضيح أهدافك، واتخاذ خطوات عملية وواضحة.
            يدعمك الكوتشينج في مجالات مثل وضوح الأهداف، اتخاذ القرارات، بناء العادات، إدارة الوقت، التطور الشخصي والمهني، تحسين التواصل، والالتزام بالتغيير من خلال المتابعة.
          `}
          </p>
        </ScrollReveal>
      </Container>
    </section>
  );
}
