import { useState } from "react";
import Container from "../../components/Container";
import Header from "../../components/Header";
import PageTransition from "../../components/animation/PageTransition";
import { useProvider } from "../../hooks/useAuth";
import { useParams } from "react-router-dom";
import { useAvailable } from "../../hooks/useBooking";
import { useAllServices } from "../../hooks/useServices";
import Product from "./components/Product";
import BookService from "./components/BookService";

export default function ExpertsPage() {
  const [dataBooking, setDataBooking] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const { id } = useParams();
  const dateNow = new Date().toISOString().slice(0, 10);
  const { data: dataProvider } = useProvider(id);
  const [date, setDate] = useState({
    time: "",
    date: dateNow,
  });

  const { data: time } = useAvailable(id, date.date);
  const { data: dataService } = useAllServices({ provider: id });
  const services = dataService?.data?.services;

  function handelTime(item) {
    setDate({ ...date, [item.name]: item.value });
  }
  const list = time?.data.availableSlots?.map((item) => {
    const isSelected = item === date.time;
    return (
      <button
        key={item}
        type="button"
        name="time"
        value={item}
        onClick={(e) => handelTime(e.currentTarget)}
        className={`px-5 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 border 
        ${
          isSelected
            ? "bg-prg text-text-white border-prg shadow-md scale-105"
            : "bg-bg-main text-text-main border-text-main/20 hover:border-primary hover:text-primary hover:bg-primary/5"
        }`}
      >
        {item}
      </button>
    );
  });

  const servicesList = services?.map((item) => {
    return (
      <Product
        time={date?.time}
        handelClick={() => {
            setIsOpen((c) => !c);
            setDataBooking(item);
        }}
        key={item._id}
        data={item}
      />
    );
  });

  const provider = dataProvider?.data?.provider;

  return (
    <PageTransition>
      <section
        id={provider?._id}
        className="relative pt-10 pb-25 mt-18 xl:mt-16 min-h-screen"
      >
        {/* إزالة Header واستبداله بتصميم مدمج أو تركه إن كان يعرض مسار تنقل (Breadcrumb) */}
        <Header
          header="الملف الشخصي للخبير"
          className="flex justify-center text-2xl pb-8 font-bold text-text-main"
        />

        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 bg-bg-main rounded-2xl p-6 border border-text-main/10 shadow-sm flex flex-col items-center text-center">
            {/* الصورة */}
            <div className="w-32 h-32 md:w-40 md:h-40 mb-5 rounded-full overflow-hidden border-4 border-primary/20 shadow-inner relative group">
              <img
                src="/hero-sm.jpg"
                alt={provider?.name || "صورة الخبير"}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* الاسم والتخصص */}
            <h2 className="text-2xl font-bold text-text-main mb-2">
              {provider?.name}
            </h2>
            <div className="inline-flex items-center justify-center bg-primary/10 px-4 py-1.5 rounded-full mb-6">
              <span className="text-sm font-semibold text-primary">
                {provider?.specialization || "غير محدد"}
              </span>
            </div>

            {/* النبذة التعريفية */}
            <div className="w-full text-start">
              <h3 className="font-bold text-text-main mb-3 border-b border-text-main/10 pb-2">
                عني
              </h3>
              <p className="text-sm text-text-main/70 leading-relaxed bg-text-main/5 px-4 py-4 rounded-xl border border-text-main/5">
                {provider?.bio ||
                  "لا توجد نبذة تعريفية متاحة لهذا الخبير حتى الآن."}
              </p>
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-8">
            {/* قسم اختيار الموعد */}
            <div className="bg-bg-main rounded-2xl p-6 md:p-8 border border-text-main/10 shadow-sm">
              <h3 className="text-xl font-bold text-text-main mb-6 flex items-center gap-2">
                حجز موعد
              </h3>

              <div className="mb-8">
                <label className=" font-semibold text-text-main mb-3 text-sm flex items-center gap-2">
                  اختر التاريخ:
                  <input
                    onChange={(e) => handelTime(e.currentTarget)}
                    type="date"
                    name="date"
                    value={date.date}
                    className="w-full md:w-1/2 p-3 rounded-xl border border-text-main/20 bg-transparent text-text-main focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all cursor-pointer"
                  />
                </label>
              </div>

              <div>
                <span className="block font-semibold text-text-main mb-4 text-sm">
                  الأوقات المتاحة:
                </span>
                {list && list.length > 0 ? (
                  <div className="flex gap-3 flex-wrap">{list}</div>
                ) : (
                  <p className="text-sm text-text-main/60 bg-text-main/5 p-4 rounded-xl text-center border border-text-main/10">
                    لا توجد أوقات متاحة في هذا التاريخ.
                  </p>
                )}
              </div>
            </div>

            {/* قسم الخدمات */}
            <div className="bg-bg-main rounded-2xl p-6 md:p-8 border border-text-main/10 shadow-sm">
              <h3 className="text-xl font-bold text-text-main mb-6 border-b border-text-main/10 pb-4">
                الخدمات المقدمة
              </h3>

              {servicesList && servicesList.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {servicesList}
                </div>
              ) : (
                <p className="text-sm text-text-main/60 text-center py-6">
                  لا توجد خدمات مضافة حتى الآن.
                </p>
              )}
            </div>
          </div>
        </Container>
        <BookService
          data={dataBooking}
          date={date}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          className={isOpen ? "flex" : "hidden"}
        />
      </section>
    </PageTransition>
  );
}
