import AdminHeader from "../components/AdminHeader";
import { useAllBookings } from "../../hooks/useBooking";

export default function BookingsPage() {
  const { data } = useAllBookings();
  const bookings = data?.data?.bookings;
  const list = bookings?.map((item) => {
    return (
      <div
        key={item._id}
        className=" bg-text-main/20 p-2 rounded-xl shadow-sm shadow-text-black/50"
      >
        <div>
          {"الموفر: "}
          {item.provider.name}
        </div>
        <div className="border-b mb-2 pb-2">
          {"الايميل: "}
          {item.provider?.email}
        </div>
        <div>
          {"العميل: "}
          {item.client.name}
        </div>
        <div className="border-b mb-2 pb-2">
          {"الايميل: "}
          {item.client?.email}
        </div>
        <div>
          {" التاريخ: "}
          {item.date?.slice(0, 10)}
        </div>
        <div>
          {" الحالة: "}
          {item.status}
        </div>
      </div>
    );
  });
  return (
    <div>
      <div className="flex justify-center">
              <AdminHeader className="px-5" title={"التحكم في كل الخدمات"} />
            </div>
      <div className="grid grid-col-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-10">
        {list}
      </div>
    </div>
  );
}

