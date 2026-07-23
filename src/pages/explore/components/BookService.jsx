import toast from "react-hot-toast";
import { useAddBooking } from "../../../hooks/useBooking";

export default function BookService({
  data,
  date,
  isOpen,
  setIsOpen,
  className,
}) {
  const { mutateAsync } = useAddBooking();
  if (!isOpen) return;

  async function handleBooking() {
    try {
      await mutateAsync({
        service: data?._id,
        date: date.date,
        timeSlot: date.time,
      });
      toast.success("تم حجز الخدمة بنجاح");
      setIsOpen(false);
    } catch {
      toast.error("فشل حجز الخدمة");
      setIsOpen(false);
    }
  }
  return (
    <div
      onClick={() => setIsOpen(false)}
      className={`flex justify-center items-center w-full h-full z-50 top-0 left-0 fixed bg-black/50 ${className}`}
    >
      <div onClick={(e)=> e.stopPropagation()} className="bg-white py-6 px-4 w-2/3 md:w-1/2 lg:w-1/3 rounded-md">
        <h3 className="">
          {"الخدمة: "}
          {data?.title}
        </h3>
        <h3 className="py-2">
          {"السعر: "}
          {data?.price}
        </h3>
        <h3>
          {"المدة: "}
          {data?.duration}
        </h3>
        <div className=" py-3 gap-1 w-full text-white flex">
          <button
            onClick={handleBooking}
            className="w-full bg-green-500 py-1 px-3 rounded-md"
          >
            {"تأكيد"}
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="w-full bg-red-600 py-1 px-3 rounded-md"
          >
            {"إلغاء"}
          </button>
        </div>
      </div>
    </div>
  );
}
