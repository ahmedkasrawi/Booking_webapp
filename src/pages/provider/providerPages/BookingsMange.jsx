import { useAllBookings } from "../../../hooks/useBooking";
import BookingRow from "../components/BookingRow";
export default function BookingsMange() {
  const { data } = useAllBookings();
    const bookings = data?.data?.bookings;
    const list = bookings?.map((item) => {
      return (
        <BookingRow
        key={item?._id}
          booking={item}
          client={item.client}
          service={item.service}
          className={
            item.status === "pending"
              ? "bg-amber-400 text-black"
              : item.status === "cancelled"
                ? "bg-red-500 text-black"
                : "bg-green-500 text-black"
          }
        />
      );
    });
  return (
    <section className="overflow-x-auto rounded-lg border border-prg shadow-sm">
      <table className="w-full table-auto border-collapse bg-bg-main text-sm text-text-main">
        <thead className="divide-y-4 divide-text-const">
          <tr >
            <th className="px-4 py-3 font-medium text-text-main">
              {"العنوان"}
            </th>
            <th className="px-4 py-3 font-medium text-text-main">
              {"العميل"}
            </th>
            <th className="px-4 py-3 font-medium text-text-main">
              {"المبلغ"}
            </th>
            <th className="px-4 py-3 font-medium text-text-main">
              {"الوقت"}
            </th>
            <th className="px-4 py-3 font-medium text-text-main">
              {"التاريخ"}
            </th>
            <th className="px-4 py-3 font-medium text-text-main">
              {"الحالة"}
            </th>
            <th className="px-4 py-3 font-medium text-text-main">
              {"اجراءات"}
            </th>
          </tr>
        </thead>
        <tbody className="divide-y bg-text-const/70 text-white divide-prg">{list}</tbody>
      </table>
    </section>
  );
}
