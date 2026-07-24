import { useState } from "react";
import Input from "./Input";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/useAuth";
import { toast } from "react-hot-toast";

export default function LoginPage() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(true);

  const navigate = useNavigate();
  function handleDisabled(inputs) {
    if (inputs.email.length >= 5) {
      if (inputs.password.length >= 6) {
        setError(false);
        return;
      }
    }
    setError(true);
  }

  function handleInputs(target) {
    const newValue = { ...inputs, [target.name]: target.value };
    setInputs(newValue);
    handleDisabled(newValue);
  }

  const { mutateAsync } = useLogin();
  
  async function handleSubmit(e) {
    e.preventDefault();
    setError(true);
    try {
      await mutateAsync(inputs);
      toast.success("تم تسجيل الدخول بنجاح");
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "something went wrong");
      toast.error("كلمة السر او الايميل غير صحيح");
    }
  }

  return (
    <div className="fixed w-full h-screen bg-black/60 text-text-main top-0 z-40 flex justify-center items-center">
      <form
        className="bg-bg-main/98
          w-9/10 sm:w-8/11 md:w-5/7 xl:w-1/2 h-fit py-10 px-5 md:px-15
          lg:px-20 flex flex-col justify-around items-center
          rounded-xl gap-3 md:gap-5 shadow-sm shadow-mist-450 text-center
        "
      >
        <LockPersonIcon fontSize="large" />
        <h1 className="font-bold text-xl md:text-2xl">{"أمن حجوزاتك"}</h1>
        <p className="font-medium text-sm md:text-lg text-text-main">
          {" رجاءا سجل الدخول او اقم بانشاء حساب جديد لتقوم بالحجز"}
        </p>

        <Input
          title={"الايميل:"}
          type="email"
          name="email"
          value={inputs.email}
          handle={handleInputs}
          className="w-full py-1 md:py-2 text-text-black"
        />
        <div className="w-full flex flex-col">
          <Input
            title={"كلمة السر:"}
            type="password"
            name="password"
            value={inputs.password}
            handle={handleInputs}
            className="w-full py-1 md:py-2 text-text-black"
          />
          <span href="" className=" text-red-500 text-sm md:text-md self-end">
            forget password
          </span>
        </div>
        <input
          type="submit"
          disabled={error}
          onClick={handleSubmit}
          value="دخول"
          className="bg-black flex-2 cursor-pointer text-white rounded-md  py-1 md:py-2 w-full hover:bg-gray-800 disabled:bg-gray-400"
        />

        <div>
          <Link
            to="/register"
            className="font-semibold w-full text-sm md:text-lg rounded px-1  flex justify-center items-center text-sky-600"
          >
            إنشاء حساب
          </Link>
        </div>
      </form>
    </div>
  );
}
