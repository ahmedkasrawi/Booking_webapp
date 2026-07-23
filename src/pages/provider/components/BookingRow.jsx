import Agree from "@mui/icons-material/Done";
import { useChangeStatus } from "../../../hooks/useBooking";
import toast from "react-hot-toast";
import { useState } from "react";
export default function BookingRow({ booking, client, service, className }) {
  const [status, setStatus] = useState(booking.status);
  const { mutateAsync } = useChangeStatus();
  async function handleSubmit() {
    if (booking.status === status) {
      toast.error("لا يوجد اي تعديلات");
      return;
    }
    try {
      await mutateAsync({ id: booking?._id, obg: { status } });
      toast.success("تم تاكيد الحجز بنجاح");
    } catch {
      toast.error("حدث خطأ");
    }
  }
  function handelSelect(value) {
    if (value === "pending" && !(booking.status === "pending")) {
      toast.error("لا يمكن جعل الحجز معلق");
      return;
    }
    setStatus(value);
  }
  return (
    <tr className="hover:bg-primary/50 odd:bg-emerald-950/50 even:bg-primary/10 text-center ">
      <td className="px-6 py-4 font-medium text-white/90">{service?.title}</td>
      <td className="px-6 py-4 font-medium text-white/90">{client?.name}</td>
      <td className="px-6 py-4 font-medium text-white/90">
        {booking?.bookedPrice}
      </td>
      <td className="px-6 py-4 font-medium text-white/90 ">
        <span>{booking?.timeSlot}</span>
      </td>
      <td className="px-6 py-4 font-medium text-white/90 ">
        <span>{booking?.date?.slice(0, 10)}</span>
      </td>
      <td className={`px-6 py-4 font-medium  text-white/90`}>
        <select
          onChange={(e) => handelSelect(e.currentTarget.value)}
          value={status}
          className={` p-1 rounded border-2
            ${className}`}
        >
          <option value="pending">{"معلق"}</option>
          <option value="confirmed">{"مؤكد"}</option>
          <option value="cancelled">{"ملغي"}</option>
        </select>
      </td>
      <td className={`px-6 py-4 font-medium text-white/90 bg-black/50`}>
        <button className="cursor-pointer bg-green-500 py-1 px-2 rounded" onClick={handleSubmit}>
          {"حفظ"}
        </button>
      </td>
    </tr>
  );
}
