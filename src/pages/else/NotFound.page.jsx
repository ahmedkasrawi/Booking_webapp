import { Link } from "react-router-dom";
import Button from "../../components/Button";

export default function NotFoundPage() {
    return (
        <div className="bg-neutral-950 h-screen w-full flex flex-col justify-center items-center overflow-hidden relative font-sans selection:bg-emerald-500 selection:text-white">
            
            {/* الخلفية: عناصر جمالية متحركة تمثل ألوان علم فلسطين كـ جلو (Glow Effect) */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-950/20 rounded-full blur-[120px] animate-pulse pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-950/15 rounded-full blur-[150px] animate-pulse pointer-events-none" style={{ animationDuration: '6s' }}></div>

            <div className="max-w-2xl w-full text-center px-6 relative z-10 space-y-8">
                
                {/* الجزء العلوي: أنيميشن الـ 404 المكسور والجدار الصامد */}
                <div className="relative inline-block select-none">
                    {/* رقم 404 مدمج مع تأثير الوميض الاهتزازي (Glitch/Pulse) */}
                    <div className="text-[12rem] md:text-[16rem] font-black text-neutral-800/40 leading-none tracking-tighter animate-pulse">
                        404
                    </div>
                    
                    {/* عبارة الـ Badge الداعمة لغزة فوق الرقم */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex flex-col items-center justify-center space-y-3">
                        <div className="flex items-center space-x-1.5 bg-neutral-900/90 border border-neutral-800 px-4 py-1.5 rounded-full shadow-2xl backdrop-blur-sm animate-bounce">
                            <span className="text-lg translate-y-[-0.1em]">💚</span>
                            <span className="text-xs font-bold tracking-wider text-neutral-200 uppercase">Gaza Will Never Be Forgotten</span>
                        </div>
                    </div>
                </div>

                {/* النصوص والرسالة الإبداعية */}
                <div className="space-y-4 max-w-lg mx-auto">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-neutral-100 tracking-tight">
                        Lost in Space, Bound by Truth
                    </h1>
                    <p className="text-sm md:text-base text-neutral-400 leading-relaxed">
                        The page you're looking for doesn't exist, just as humanity has lost its commitment to justice. Borders may disappear, buildings may crumble, but  <span className="text-emerald-400 font-semibold underline decoration-emerald-500/30 decoration-2">the spirit of Gaza remains unbroken</span>.
                    </p>
                </div>

                {/* جزء التحكم والعودة المصمم بلمسة الـ Minimalist */}
                <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
                    <Link to="/home" className="w-full sm:w-auto">
                        <Button className="w-full sm:w-auto px-8 py-3.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-950 font-semibold text-sm rounded-xl transition-all duration-300 shadow-lg shadow-neutral-100/5 hover:-translate-y-0.5">
                            Back to Home
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}