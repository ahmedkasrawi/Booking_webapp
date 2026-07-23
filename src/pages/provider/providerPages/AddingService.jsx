import { useState } from "react";
import toast from "react-hot-toast";
import { useAddService } from "../../../hooks/useServices";

export default function AddingService() {
  const [obg, setObg] = useState({
    title: "...",
    description: "...",
    price: "100",
    duration: "60",
    category: "software engineering",
  });
  function handleInputs(target) {
    const newValue = { ...obg, [target.name]: target.value };
    setObg(newValue);
  }
  const { mutateAsync } = useAddService();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await mutateAsync(obg);
      toast.success("تم تسجيل الدخول بنجاح");
    } catch {
      toast.error("حدث خطأ");
    }
  }
  return (
    <section className=" duration-300">
      <form
        action=""
        className="flex flex-col w-full justify-center items-center gap-5 "
      >
        <h3 className="text-2xl font-bold mb-5">{"انشاء خدمة"}</h3>
        <label className="w-full flex gap-2 justify-between items-center">
          {" عنوان الخدمة"}
          <input
            value={obg.title}
            onChange={(e) => handleInputs(e.currentTarget)}
            name="title"
            type="text"
            className="bg-text-main/20 w-[87%] border border-text-main rounded-lg block  focus:outline-none p-2"
          />
        </label>
        <label className="w-full flex gap-2 justify-between items-center">
          {" وصف الخدمة"}
          <textarea
            value={obg.description}
            onChange={(e) => handleInputs(e.currentTarget)}
            name="description"
            type="text"
            className="bg-text-main/20 w-[87%] border border-text-main rounded-lg block focus:outline-none p-2 h-25 resize-x-none"
          />
        </label>
        <label className="w-full flex  gap-2 justify-between items-center">
          {"سعر الخدمة"}
          <input
            value={obg.price}
            onChange={(e) => handleInputs(e.currentTarget)}
            name="price"
            type="number"
            className="bg-text-main/20 w-[87%] border border-text-main rounded-lg block  focus:outline-none p-2"
          />
        </label>
        <div className="flex justify-around gap-2 w-full">
          <select
            name="category"
            value={obg.category}
            onChange={(e) => handleInputs(e.currentTarget)}
            className="bg-bg-main/70 p-1 rounded"
          >
            <option>software engineering</option>
            <option>engineering</option>
            <option>mange</option>
          </select>
          <button
            type="submit"
            onClick={handleSubmit}
            className=" bg-text-main/30 px-2 py-1 rounded "
          >
            {"اضافة"}{" "}
          </button>
        </div>
      </form>
    </section>
  );
}
