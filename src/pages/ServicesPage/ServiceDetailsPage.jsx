import { useParams } from "react-router-dom";
import { useService } from "../../hooks/useServices";
import Container from "../../components/Container";
import Header from "../../components/Header";
import { useAvailable } from "../../hooks/useBooking";
import { useState } from "react";
import PageTransition from "../../components/animation/PageTransition";
import { useAddBooking } from "../../hooks/useBooking";
import {toast} from "react-hot-toast";


export default function ServiceDetails() {
  const { id } = useParams();
  const { data, isLoading } = useService(id);
  const service = data?.data?.service;
  const [date, setDate] = useState({ time: "", date: "" });
  const providerId = data?.data?.service?.provider?._id;
  const { data: time } = useAvailable(providerId, date.date);
  const { mutateAsync } = useAddBooking();
  if (isLoading) {
    return <div>...</div>;
  }
  function handelTime(item) {
    setDate({ ...date, [item.name]: item.value });
  }
  const list = time?.data.availableSlots.map((item) => {
    return (
      <button
        key={item}
        type="button"
        name="time"
        value={item}
        onClick={(e) => handelTime(e.currentTarget)}
        className={` p-1 rounded cursor-pointer ${item == date.time ? "bg-prg text-white" : "bg-text-main/20"}`}
      >
        {item}
      </button>
    );
  });
  async function handleBooking(){
    try {
      await mutateAsync({ service: service?._id, date: date.date, timeSlot:date.time });
      toast.success("تم حجز الخدمة بنجاح")
    }catch {
      toast.error("فشل حجز الخدمة");
    }
  }
  return (
    <PageTransition>
      <Container className={`py-10 mt-18 xl:mt-16`}>
        <Header header={service?.title} className="pb-10" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          <div className=" overflow-hidden rounded-t-md">
            <img
              src="/service.avif"
              alt="service"
              className="w-full bg-text-main rounded-t-md max-h-50 duration-300"
            />
          </div>
          <div className=" py-2 px-2">
            <p>
              {"الوصف: "}
              {service?.description}
            </p>
            <p>
              {"المدة: "}
              {service?.duration}
            </p>
            <p>
              {"السعر: "}
              {service?.price}
            </p>
            <p>
              {"الخبير: "}
              {service?.provider?.name}
            </p>
          </div>
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <label className="py-1">
              {"التاريح :"}
              <input
                onChange={(e) => handelTime(e.currentTarget)}
                type="date"
                name="date"
                value={date.date}
                id=""
              />
            </label>
            <div className="flex gap-5 flex-wrap mt-3">{list}</div>
          </div>
        </div>

        <button
          type="button"
          onClick={handleBooking}
          className="mt-10 w-full flex justify-center px-10 bg-primary text-white py-1 rounded-2xl hover:bg-primary-hover"
        >
          {"احجز الان"}
        </button>
      </Container>
    </PageTransition>
  );
}
