import { Link } from "react-router-dom";
import Button from "../../components/Button";

export default function NotFoundPage() {
  return (
    <div className="bg-neutral-950 h-screen w-full flex flex-col justify-center items-center overflow-hidden relative font-sans selection:bg-emerald-500 selection:text-white">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-950/20 rounded-full blur-[120px] animate-pulse pointer-events-none"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-950/15 rounded-full blur-[150px] animate-pulse pointer-events-none"
        style={{ animationDuration: "6s" }}
      ></div>

      <div className="max-w-2xl w-full text-center px-6 relative z-10 space-y-8">
        <div className="relative inline-block select-none">
          <div className="text-[12rem] md:text-[16rem] font-black text-neutral-800/40 leading-none tracking-tighter animate-pulse">
            404
          </div>
        </div>

        <div className="space-y-3 max-w-lg mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold text-neutral-100">
            الصفحة غير موجودة
          </h1>
          <p className="text-sm md:text-base text-neutral-400 leading-relaxed">
            عذراً، يبدو أن الرابط الذي تحاول الوصول إليه غير متوفر حالياً أو تم
            نقله.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link to="/home" className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto px-8 py-3.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-950 font-semibold text-sm rounded-xl transition-all duration-300 shadow-lg shadow-neutral-100/5 hover:-translate-y-0.5">
              العودة إلى الصفحة الرئيسية
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
