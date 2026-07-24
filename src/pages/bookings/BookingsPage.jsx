import { useState } from "react";
import { useMyBookings } from "../../hooks/useBooking";
import Pagination from "../../components/Pagination";
import Booking from "./components/Booking";
import Container from "../../components/Container";
import Header from "../../components/Header";
import PageTransition from "../../components/animation/PageTransition";

const filters = [
  ["الكل", ""],
  ["مؤكد", "confirmed"],
  ["غير مؤكد", "pending"],
  ["ملغي", "cancelled"],
];
export default function BookingsPage() {
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState("");
  const { data } = useMyBookings({ page, status, limit: 9 });
  const bookings = data?.data?.bookings;
  const handleFilterChange = (newStatus) => {
    setStatus(newStatus);
    setPage(1);
  };

  const list = bookings?.map((item) => {
    return (
      <Booking
        key={item._id}
        booking={item}
        provider={item.provider}
        service={item.service}
        className={
          item.status === "pending"
            ? "border-amber-500"
            : item.status === "cancelled"
              ? "border-red-500"
              : "border-primary"
        }
      />
    );
  });

  return (
    <PageTransition>
      <div className="pt-10 pb-25 min-h-[91vh] mt-18 xl:mt-16">
        <Header header={"حجوزاتك"} className="pb-10" />
        <Container className="w-full flex justify-center gap-3 mb-7">
          {filters.map((filter) => {
            const isActive = status === filter[1];
            return (
              <button
                key={filter[1]}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => handleFilterChange(filter[1])}
                className={`shrink-0 py-1.5 px-3 cursor-pointer rounded-xl text-sm font-medium duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                  isActive
                    ? "bg-text-main text-text-white shadow-sm"
                    : "bg-text-main/15 text-text-main hover:bg-text-main/25"
                }`}
              >
                {filter[0]}
              </button>
            );
          })}
        </Container>
        {/* bookings */}
        <Container className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {list}
        </Container>
        {/* pagination */}
        <Container className="pt-5">
          <Pagination pagination={data?.pagination} setPage={setPage} />
        </Container>
      </div>
    </PageTransition>
  );
}
