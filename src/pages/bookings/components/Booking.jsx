import DeleteOutlineIcon from "@mui/icons-material/DeleteOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import PersonOutlineIcon from "@mui/icons-material/PercentOutlined";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Chat from "@mui/icons-material/Chat";

const getStatusConfig = (status) => {
  switch (status) {
    case "pending":
      return {
        text: "قيد الانتظار",
        colors: "text-amber-600 bg-amber-50 border-amber-200",
        border: "border-t-amber-400",
      };
    case "cancelled":
      return {
        text: "ملغي",
        colors: "text-red-600 bg-red-50 border-red-200",
        border: "border-t-red-500",
      };
    default: // confirmed أو أي حالة أخرى
      return {
        text: "مؤكد",
        colors: "text-emerald-600 bg-emerald-50 border-emerald-200",
        border: "border-t-primary",
      };
  }
};

export default function Booking({ booking, provider, service }) {
  const statusConfig = getStatusConfig(booking?.status);

  return (
    <div
      className={`bg-primary/5 relative rounded-xl border border-text-main/10 shadow-sm duration-300 hover:shadow-md hover:-translate-y-1 border-t-4 flex flex-col ${statusConfig.border}`}
    >
      <div className="p-4 grow">
        <div className="flex justify-between items-start mb-4 gap-2">
          <h3 className="text-lg font-bold text-text-main line-clamp-1">
            {service?.title}
          </h3>
          <span
            className={`text-xs font-semibold px-2.5 py-1 rounded-md border whitespace-nowrap ${statusConfig.colors}`}
          >
            {statusConfig.text}
          </span>
        </div>
        {/* name  */}
        <div className="flex flex-col gap-2.5 text-sm text-text-main/80 mb-5">
          <div className="flex items-center gap-2">
            <PersonOutlineIcon fontSize="small" className="text-primary/70" />
            <span className="font-medium">{provider?.name}</span>
          </div>
          {/* duration  */}
          <div className=" flex justify-between items-center pb-1">
            <div className="flex flex-col">
              <span className="text-xs text-text-main mb-0.5">المدة</span>
              <span className="font-bold text-text-main">
                {booking?.bookedDuration == 60 ? "ساعة" : "نصف ساعة"}
              </span>
            </div>
            {/* price  */}
            <div className="flex flex-col items-end ">
              <span className="text-xs text-text-main mb-0.5">السعر</span>
              <div className="font-bold text-primary">
                <span className="text-lg me-1">{booking.bookedPrice}</span>
                <span className="text-xs">جنيه</span>
              </div>
            </div>
          </div>
          {/* date & time  */}
          <div className="bg-primary/15 rounded-lg p-3 flex justify-between items-center border border-primary/80">
            <CalendarTodayIcon fontSize="small" className="text-primary/70" />
            <span>{booking?.date?.slice(0, 10)}</span>
            <span className="text-text-main/60 mx-1">|</span>
            <AccessTimeIcon fontSize="small" className="text-primary/70" />
            <span dir="ltr" className="font-medium">
              {booking?.timeSlot}
            </span>
          </div>
        </div>
      </div>

      <div className="p-3 border-t border-text-black/50 flex justify-end gap-2 bg-text-white rounded-b-xl">
        {booking?.status === "confirmed" ? (
          <button
            title="محادثة"
            type="button"
            className="p-2 rounded-lg border text-sky-600 bg-sky-50 hover:bg-sky-500 hover:text-white transition-colors duration-200"
          >
            <Chat fontSize="small" />
          </button>
        ) : (
          ""
        )}
        <button
          title="التفاصيل"
          type="button"
          className="p-2 rounded-lg border text-sky-600 bg-sky-50 hover:bg-sky-500 hover:text-white transition-colors duration-200"
        >
          <DescriptionOutlinedIcon fontSize="small" />
        </button>

        <button
          title="إلغاء الحجز"
          type="button"
          className="p-2 rounded-lg border text-red-600 bg-red-50 hover:bg-red-500 hover:text-white transition-colors duration-200"
        >
          <DeleteOutlineIcon fontSize="small" />
        </button>
      </div>
    </div>
  );
}
