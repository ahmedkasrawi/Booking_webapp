import { useState } from "react";
import Input from "./Input";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
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
    <div className="fixed w-full h-screen bg-black/60 top-0 z-200 flex justify-center items-center">
      <form
        className="bg-white/98
          w-9/10 md:w-5/7 lg:w-6/10  py-10 px-5 md:px-15
          lg:px-20 flex flex-col justify-around items-center
          rounded-2xl gap-5 shadow-sm shadow-mist-450 text-center
        "
      >
        <LockPersonIcon fontSize="large" />
        <h1 className="font-bold text-2xl">{"امن حجوزاتك"}</h1>
        <p className="font-medium text-lg text-gray-600">
          {" رجاءا سجل الدخول او اقم بانشاء حساب جديد لتقوم بالحجز"}
        </p>

        <Input
          title={"الاسم:"}
          type="name"
          name="name"
          value={inputs.name}
          handle={handleInputs}
          className="w-full py-3"
        />
        <Input
          title={"الايميل:"}
          type="email"
          name="email"
          value={inputs.email}
          handle={handleInputs}
          className="w-full py-3"
        />
        <Input
          title={"كلمة السر:"}
          type="password"
          name="password"
          value={inputs.password}
          handle={handleInputs}
          className="w-full py-3"
        />
        <Input
          title={"تاكيد كلمة السر:"}
          type="confirm"
          name="confirm"
          value={inputs.passwordConfirm}
          handle={handleInputs}
          className="w-full py-3"
        />
        <input
          type="submit"
          disabled={error}
          onClick={handleSubmit}
          value="Login"
          className="bg-black cursor-pointer text-white rounded-md px-10 py-3 w-full hover:bg-gray-800 disabled:bg-gray-400"
        />

        <span href="" className="  self-end">
          {"نسيت كلمة السر"}
        </span>
        <Link to="/login" className="font-bold text-lg">
          {"تسجيل الدخول"}
        </Link>
      </form>
    </div>
  );
}
