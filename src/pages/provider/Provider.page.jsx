import BookingsMange from "./providerPages/BookingsMange";
import Container from "../../components/Container";
import Header from "../../components/Header";
import PageTransition from "../../components/animation/PageTransition";
import { useState } from "react";
import AddingService from "./providerPages/AddingService";
import ServicesMange from "./providerPages/ServicesMange";
export default function BookingsPage() {
  const [page, setPage] = useState("الحجوزات");
  

  return (
    <PageTransition>
      <div className="pt-10 pb-25 min-h-[91vh] mt-18 xl:mt-16">
        <Header header={" -- الإدارة --"} className="pb-10" />
        <div className="flex justify-center gap-3">
          <button
            onClick={() => setPage("الحجوزات")}
            className={`py-1 px-2 rounded-lg ${page === "الحجوزات" ? "bg-text-main/80 text-text-white" : "bg-text-main/20 "}`}
          >
            {" الحجوزات"}
          </button>
          <button
            onClick={() => setPage("إضافة")}
            className={`py-1 px-2 rounded-lg ${page === "إضافة" ? "bg-text-main/80 text-text-white" : "bg-text-main/20 "}`}
          >
            {"إضافة خدمة"}
          </button>
          <button
            onClick={() => setPage("الخدمات")}
            className={`py-1 px-2 rounded-lg ${page === "الخدمات" ? "bg-text-main/80 text-text-white" : "bg-text-main/20 "}`}
          >
            {" الخدمات "}
          </button>
          <button
            className={`py-1 px-2 rounded-lg ${page === "المواعيد" ? "bg-text-main/80 text-text-white" : "bg-text-main/20 "}`}
          >
            {" المواعيد"}
          </button>
        </div>

        <Container className="flex flex-col min-h-110 rounded gap-5 bg-text-main/15 mt-10 py-10 duration-300">
          {page === "الحجوزات" ? (
            <BookingsMange/>
          ) : page === "إضافة" ? (
            <AddingService />
          ) : (
            <ServicesMange/>
          )}
        </Container>
      </div>
    </PageTransition>
  );
}
