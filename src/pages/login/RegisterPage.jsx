import { useState } from "react";
import Input from "./Input";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import { Link, useNavigate } from "react-router-dom";
import { useRegister } from "../../hooks/useAuth";
import { toast } from "react-hot-toast";

export default function RegisterPage() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
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
  const { mutateAsync } = useRegister();
  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

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
        <h1 className="font-bold text-xl md:text-2xl">{"امن حجوزاتك"}</h1>
        <p className="font-medium text-sm md:text-lg text-text-main">
          {" رجاءا سجل الدخول او اقم بانشاء حساب جديد لتقوم بالحجز"}
        </p>

        <Input
          title={"الاسم:"}
          type="name"
          name="name"
          value={inputs.name}
          handle={handleInputs}
          className=" text-text-black"
        />
        <Input
          title={"الايميل:"}
          type="email"
          name="email"
          value={inputs.email}
          handle={handleInputs}
          className=" text-text-black"
        />
        <Input
          title={"كلمة السر:"}
          type="password"
          name="password"
          value={inputs.password}
          handle={handleInputs}
          className=" text-text-black"
        />
        <Input
          title={"تاكيد كلمة السر:"}
          type="confirm"
          name="confirm"
          value={inputs.passwordConfirm}
          handle={handleInputs}
          className=" text-text-black"
        />
        <input
          type="submit"
          disabled={error}
          onClick={handleSubmit}
          value="Login"
          className="bg-black cursor-pointer text-white rounded-md px-10 py-3 sm:py-2 w-full hover:bg-gray-800 disabled:bg-gray-400"
        />

        <div className="font-semibold mt-2 w-full text-sm md:text-lg rounded px-1  flex justify-center items-center">
          {"لديك حساب بالفعل؟ "}
          <Link to="/login" className="text-sky-600 ms-1">
            سجل الدخول
          </Link>
        </div>
      </form>
    </div>
  );
}
