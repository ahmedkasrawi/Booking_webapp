import AdminHeader from "../components/AdminHeader";
import {useAllServices} from "../../hooks/useServices"

export default function Services() {
  const {data} = useAllServices();
  const services = data?.data?.services;
  const list = services?.map((item) => {
    return (
      <div
        key={item._id}
        className="bg-text-main/20 p-2 rounded-xl shadow-sm shadow-text-black/50"
      >
        <div>
          {"الموفر: "}
          {item.provider.name}
        </div>
        <div>
          {"الخدمة: "}
          {item.title}
        </div>
        <div>
          {"السعر: "}
          {item.price}
        </div>
        <div>
          {" الحالة: "}
          {item.isActive ? "نشط" : "غير نشط"}
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
