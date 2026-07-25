import PageTransition from "../../components/animation/PageTransition";
import Container from "../../components/Container";
import Header from "../../components/Header";
import Card from ".//Card";

function Contact() {
  return (
    <PageTransition>
      <div className="py-15 mt-5 text-text-prg">
        <Container>
          <Header
            header={"تريد مساعدة؟ نحن هنا لأجلك"}
            paragraph={
              "تواصل مع فريقنا إذا كان لديك أي أسئلة. سنرد بسرعة مع دعم ودّي وشخصي."

            }
            className="py-10"
          />
          

          <section className="grid gap-6 md:grid-cols-3 mb-16">
            <Card
              title={"دعم العملاء"}
              paragraph={
                "فريقنا متاح طوال أيام الأسبوع للإجابة على استفساراتكم وحل أي مشكلات تتعلق بحجوزاتكم الاستشارية."
              }
            >
              <p className="text-sm mt-2 font-medium text-primary">
                الأحد - الخميس: 9 صباحاً - 8 مساءً
              </p>
            </Card>
            <Card
              title={"راسلنا عبر البريد"}
              paragraph={
                "أرسل لنا استفساراتك وتفاصيل حجزك للحصول على مساعدة سريعة."
              }
            >
              <p className="text-sm mt-2 font-medium text-primary">
                support@consultations.com
              </p>
            </Card>

            <Card
              title={"اتصل بنا"}
              paragraph={
                "هل تحتاج إلى إجابة فورية؟ اتصل بخط الدعم الخاص بنا للمساعدة المباشرة."
              }
            >
              <p className="text-sm mt-2 font-medium text-primary">
                +1 (800) 123-4567
              </p>
            </Card>
          </section>

          <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="bg-primary/20 border border-text-main/7 rounded-xl p-8 shadow-sm shadow-text-main/30">
              <h2 className="text-3xl font-bold mb-6">أرسل لنا رسالة</h2>
              <form className="space-y-6">
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    htmlFor="name"
                  >
                    الاسم الكامل
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="أدخل اسمك"
                    className="w-full rounded-2xl border border-text-main/15 bg-text-main/30 px-4 py-3 text-text-white placeholder:text-text-white outline-none transition focus:border-text-const focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    htmlFor="email"
                  >
                    البريد الإلكتروني
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border border-text-main/15 bg-text-main/30 px-4 py-3 text-text-white placeholder:text-text-white outline-none transition focus:border-text-const focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    htmlFor="message"
                  >
                    الرسالة
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    placeholder="أخبرنا كيف يمكننا مساعدتك بخصوص استشارتك"
                    className="w-full rounded-2xl border border-text-main/15 bg-text-main/30 px-4 py-3 text-text-white placeholder:text-text-white outline-none transition focus:border-text-const focus:ring-2 focus:ring-primary resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-black font-semibold transition duration-300 hover:bg-purple-600 hover:shadow-lg"
                >
                  إرسال الرسالة
                </button>
              </form>
            </div>

            <div className="space-y-6">
              <Card
                title={"استفسارات عامة"}
                paragraph={
                  "للاستفسارات حول المستشارين، مواعيد الحجوزات، أو الدعم العام، تواصل معنا وسنرد عليك خلال يوم عمل واحد."
                }
              ></Card>

              <Card
                title={"تصفح منصتنا"}
                paragraph={
                  "قم بزيارة منصتنا في أي وقت لاستكشاف أحدث الخدمات الاستشارية وحجز المواعيد المتاحة."
                }
              >
                <p className="text-sm mt-2 font-medium text-primary">
                  السبت - الجمعة: متاح عبر الإنترنت 24/7
                </p>
              </Card>
            </div>
          </section>
        </Container>
      </div>
    </PageTransition>
  );
}

export default Contact;
