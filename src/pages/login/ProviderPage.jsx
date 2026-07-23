import  { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useBeProvider, useUser } from "../../hooks/useAuth";


export default function ProviderPage() {
  const [inputs, setInputs] = useState({
    specialization: "",
    bio: "",
  });
  const {data} = useUser()
  
  const navigate = useNavigate();
  function handleInputs(target) {
    const newValue = { ...inputs, [target.name]: target.value };
    setInputs(newValue);
  }

  function handleBio(target) {
    const newValue = { ...inputs, specialization: target.value };
    setInputs(newValue);
    console.log(target);
  }
  const { mutateAsync } = useBeProvider();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await mutateAsync(inputs);
      toast.success("تم تسجيل الدخول بنجاح");
      navigate("/");
    } catch {
      toast.error("كلمة السر او الايميل غير صحيح");
    }
  }
  return (
    <div className="bg-text-const flex justify-center items-center h-screen">
      <form className="bg-white/85 p-4 md:p-7 flex flex-col gap-10 w-90 sm:w-8/10 lg:w-6/10 items-center rounded ">
        <h1>{data?.role}</h1>
        <h1>اضف هذه الحقول وسنراحعها </h1>
        <textarea
          title={"الوصف:"}
          type="text"
          name="bio"
          value={inputs.bio}
          onChange={(e) => handleInputs(e.currentTarget)}
          className="w-full p-2 text-text-main bg-text-const/20 min-w-60 h-50 rounded resize-none"
        />
        <select
          value={inputs.specialization}
          onChange={(e) => handleBio(e.currentTarget)}
        >
          <option value="software engineer">software engineer</option>
          <option value="engineer">engineer</option>
          <option value="manager">manager</option>
        </select>

        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-black cursor-pointer text-white rounded-md px-10 py-3 w-full hover:bg-gray-800 disabled:bg-gray-400"
        >
          {"كن خبير"}
        </button>
      </form>
    </div>
  );
}
