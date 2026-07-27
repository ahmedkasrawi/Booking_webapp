import { useUpdateMe, useUser } from "../../hooks/useAuth";
import Header from "../../components/Header";
import Container from "../../components/Container";
import PageTransition from "../../components/animation/PageTransition";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function SettingsPage() {
  const { data: user } = useUser();
  const { mutateAsync } = useUpdateMe();
  
  const [obj, setObj] = useState({
    name: "",
    bio: "",
    specialization: "",
  });

  useEffect(() => {
    if(user){
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setObj({
        name: user.name || "",
        specialization: user.specialization,
        bio: user.bio || "",
      });
    }
    
  }, [user]);
  function handelChange(ele) {
    setObj((c) => {
      return { ...c, [ele.name]: ele.value };
    });
  }
  function handelSave(e) {
    e.preventDefault();
    try {
      mutateAsync(obj);
      toast.success(" تم الحفظ");
    } catch {
      toast.error("لم يتم الحفظ");
    }
  }
  return (
    <PageTransition>
      <div className="pt-10 pb-25 min-h-[91vh] mt-18 xl:mt-16">
        <Header header={"حسابك"} className="pb-10" />
        <Container className="w-full flex justify-center gap-3 mb-7">
          <form className="bg-text-main/10 w-full px-5 py-10 flex flex-col gap-5 rounded">
            <div className="flex justify-center items-center flex-col">
              <div className="w-40 h-40 rounded-full overflow-hidden border-3 border-primary">
                <img
                  src="/hero-sm.jpg"
                  alt="user"
                  className=" scale-145 translate-y-7.5"
                />
              </div>

              <input
                type="file"
                name="img"
                className="mt-2 bg-text-white w-23 px-2 rounded"
              />
            </div>
            <label className="w-full flex flex-col gap-2 ">
              <span className="text-primary font-bold md:text-xl">
                {"الأسم :"}
              </span>
              <input
                className=" bg-white/50 rounded p-1 md:p-2 focus:outline-none"
                type="text"
                value={obj.name}
                name="name"
                onChange={(e) => handelChange(e.currentTarget)}
              />
            </label>
            <label className="w-full flex flex-col gap-2 ">
              <span className="text-primary font-bold md:text-xl">
                {"الأيميل :"}
              </span>
              <input
                readOnly
                className=" bg-gray-500/50 text-white/88 rounded p-1 md:p-2 focus:outline-none cursor-not-allowed"
                type="email"
                value={user?.email}
              />
            </label>
            <label className="w-full flex flex-col gap-2 ">
              <span className="text-primary font-bold md:text-xl">
                {"التخصص :"}
              </span>
              <input
                className=" bg-white/50 rounded p-1 md:p-2 focus:outline-none"
                type="text"
                value={obj.specialization}
                name="specialization"
                onChange={(e) => handelChange(e.currentTarget)}
              />
            </label>
            <label className="w-full flex flex-col gap-2 ">
              <span className="text-primary font-bold md:text-xl">
                {"عنك :"}
              </span>
              <textarea
                className=" bg-white/50 rounded p-1 md:p-2 focus:outline-none h-50 resize-none"
                type="text"
                value={obj.bio}
                name="bio"
                onChange={(e) => handelChange(e.currentTarget)}
              />
            </label>
            <div className="flex justify-center">
              <button
                onClick={(e) => handelSave(e)}
                className="bg-primary py-2 px-5 rounded duration-400 text-white cursor-pointer hover:bg-primary-hover active:scale-90"
              >
                حفظ
              </button>
            </div>
          </form>
        </Container>
        {/* <div>{JSON.stringify(user)}</div> */}
      </div>
    </PageTransition>
  );
}
