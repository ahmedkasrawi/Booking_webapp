import PageTransition from "../../components/animation/PageTransition";
import Container from "../../components/Container";
import Header from "../../components/Header";
import Card from "./components/Card";
import ScrollReveal from "../../components/ScrollReveal";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

export default function AboutPage() {
  const [expanded, setExpanded] = useState(false);

  const handelChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <PageTransition>
      {/* تمت إضافة dir="rtl" هنا لضبط الاتجاه للغة العربية */}
      <div className="pt-15 mb-25 mt-5 text-text-prg" dir="rtl">
        <Container>
          <Header
            header={"مرحباً بكم في منصة الاستشارات الخاصة بنا"}
            paragraph={
              "نحن نقدم تجربة سلسة لحجز الاستشارات مع سهولة في الجدولة، مدفوعات آمنة، ونخبة مختارة من الخبراء. مهمتنا هي جعل الحصول على الاستشارة بسيطاً، مريحاً، وموثوقاً."
            }
            className="py-10"
          />
          <section className="grid gap-8 md:grid-cols-3 mb-16">
            <Card
              title={"رؤيتنا"}
              paragraph={
                "نطمح لأن نكون خيارك الأول لحجز الاستشارات عبر الإنترنت من خلال تقديم خبراء متخصصين ودعم استثنائي للعملاء."
              }
            />
            <Card
              title={"سهولة الجدولة"}
              paragraph={
                "استمتع بعملية حجز سريعة، ومواعيد مرنة، وتذكيرات فورية لتكون دائماً على علم بموعد استشارتك القادمة."
              }
            />
            <Card
              title={"دفع آمن"}
              paragraph={
                "ادفع بثقة باستخدام خيارات دفع آمنة وخطوات حجز موثوقة تحمي معلوماتك الشخصية والمالية."
              }
            />
          </section>

          <section className="">
            <h2 className="text-3xl font-bold mb-7 text-center">
              الأسئلة الشائعة
            </h2>
            <ScrollReveal>
              {" "}
              <Accordion
                elevation={0}
                disableGutters
                expanded={expanded === "panel1"}
                onChange={handelChange("panel1")}
                className=" mb-5! border! border-text-main/12! rounded-md! bg-text-main/7! text-text-main! shadow-sm! shadow-text-black/5"
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon className="text-text-black" />}
                >
                  <h3 className="text-xl font-semibold mb-3">
                    كيف يمكنني متابعة تفاصيل حجزي؟
                  </h3>
                </AccordionSummary>
                <AccordionDetails>
                  <p className="leading-7 text-prg">
                    بعد إتمام الحجز، ستتلقى رسالة تأكيد عبر البريد الإلكتروني
                    تحتوي على تفاصيل الموعد ورابط الانضمام للجلسة الاستشارية
                    الخاصة بك.
                  </p>
                </AccordionDetails>
              </Accordion>
            </ScrollReveal>
            <ScrollReveal>
              <Accordion
                disableGutters
                elevation={0}
                className="mb-5! border! border-text-main/12! rounded-md! bg-text-main/7! text-text-main! shadow-sm! shadow-text-black/5"
                expanded={expanded === "panel2"}
                onChange={handelChange("panel2")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon className="text-text-black" />}
                >
                  <h3 className="text-xl font-semibold mb-3">
                    ما هي طرق الدفع المتاحة؟
                  </h3>
                </AccordionSummary>
                <AccordionDetails>
                  <p className="leading-7 text-prg">
                    ندعم الدفع عبر البطاقات الائتمانية، بطاقات الخصم المباشر،
                    وطرق الدفع المحلية حسب منطقتك الجغرافية.
                  </p>
                </AccordionDetails>
              </Accordion>
            </ScrollReveal>
            <ScrollReveal>
              <Accordion
                disableGutters
                elevation={0}
                className=" border! border-text-main/12! rounded-md! bg-text-main/7! text-text-main! shadow-sm! shadow-text-black/5"
                expanded={expanded === "panel3"}
                onChange={handelChange("panel3")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon className="text-text-black" />}
                >
                  <h3 className="text-xl font-semibold mb-3">
                    هل يمكنني إلغاء أو إعادة جدولة الحجز؟
                  </h3>
                </AccordionSummary>
                <AccordionDetails>
                  <p className="leading-7 text-prg">
                    نعم، يمكنك إلغاء أو إعادة جدولة موعدك خلال الفترة المحددة
                    مسبقاً، طالما أن ذلك يتوافق مع سياسة الإلغاء والحجوزات
                    الخاصة بنا.
                  </p>
                </AccordionDetails>
              </Accordion>
            </ScrollReveal>
          </section>
        </Container>
      </div>
    </PageTransition>
  );
}
