import AdminHeader from "../components/AdminHeader.jsx";
import { useAllUsers } from "../../hooks/useAdmin.js";

export default function UsersPage() {
  const { data } = useAllUsers();
  const list = data?.data?.users?.map((item) => {
    return (
      <div key={item._id} className="bg-text-main/20 p-2 rounded-xl shadow-sm shadow-text-black/50">
        <div className="flex justify-between gap-2">
          <div>
            {"الاسم: "}
            {item.name}
          </div>
          <div>
            {"الدور: "}
            {item.role}
          </div>
        </div>

        <div>
          {"الايميل: "}
          {item.email}
        </div>

        <select>
          <option value="pending">pending</option>
          <option value="accepted">accepted</option>
          <option value="pending">blocking</option>
        </select>
      </div>
    );
  });
  return (
    <section>
      <div className="flex justify-center">
        <AdminHeader className="px-5" title={"التحكم في كل المستخدمين"} />
      </div>
      <div className="grid grid-col-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-10">
        {list}
      </div>
    </section>
  );
}
