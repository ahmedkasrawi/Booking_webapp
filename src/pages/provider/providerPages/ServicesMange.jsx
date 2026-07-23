import { useUser } from "../../../hooks/useAuth.js";
import { useAllServices } from "../../../hooks/useServices.js";
import Product from "../components/Product.jsx";

export default function ServicesMange() {
  const { data: user } = useUser();
  const { data: services } = useAllServices({ provider: user._id });
  const dataList = services?.data.services;
  const list = dataList?.map((item) => {
    return (
      <Product
        key={item._id}
        data={item}
        className="rounded-sm shadow-md max-w-80"
      />
    );
  });
  return (
    <div className="flex gap-5">
      {/* <div>{JSON.stringify(data)}</div> */}
      {list}
    </div>
  );
}
