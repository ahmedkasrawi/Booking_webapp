import Container from "./Container";
import Facebook from "@mui/icons-material/Facebook";
import WhatsApp from "@mui/icons-material/WhatsApp";
import YouTube from "@mui/icons-material/YouTube";
import Email from "@mui/icons-material/Email";
import Phone from "@mui/icons-material/Phone";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <section className=" bg-text-main/90 text-text-white w-full">
      <Container className=" py-10 flex flex-col gap-3.5">
        <h3 className=" w-full text-2xl font-bold text-start drop-shadow-md drop-shadow-black/60">
          {" مسار"}
        </h3>
        <p>
          {`منصة بوح تقدم جلسات استماع وكوتشينغ أونلاين لتعزيز الوعي الذاتي 
            وتحسين جودة الحياة عبر مدربين متخصصين وتجربة آمنة وسهلة الاستخدام.`}
        </p>
        <div className="flex gap-2 py-3">
          <button className="p-2 bg-primary/25 rounded-md duration-300 cursor-pointer hover:bg-sky-500 hover:text-white">
            <Facebook />
          </button>
          <button className="p-2 bg-primary/25 rounded-md duration-300 cursor-pointer hover:bg-green-400 hover:text-white">
            <WhatsApp />
          </button>
          <button className="p-2 bg-primary/25 rounded-md duration-300 cursor-pointer hover:bg-red-500 hover:text-white">
            <YouTube />
          </button>
        </div>
        <span className="pb-3 border-t-2 border-text-white"></span>
        <div className="flex flex-wrap sm:w-1/2 xl:w-1/3 justify-between ">
          <Link className="hover:text-primary hover:font-bold duration-300">{`الرئيسية`}</Link>
          <Link className="hover:text-primary hover:font-bold duration-300">{`الخدمات`}</Link>
          <Link className="hover:text-primary hover:font-bold duration-300">{`المستشارين`}</Link>
          <Link className="hover:text-primary hover:font-bold duration-300">{`الحجوزات`}</Link>
          <Link to={"/provider"} className="hover:text-primary hover:font-bold duration-300">{`قدم كخبير`}</Link>
        </div>
        <div className="flex flex-col gap-4">
          <button className="flex gap-3 items-center cursor-pointer">
            <div className="p-2 bg-primary/25 rounded-md duration-300 hover:bg-sky-500 hover:text-white">
              <Email />
            </div>
            care@bauhspace.com
          </button>
          <button className="flex gap-3 items-center cursor-pointer">
            <div className="p-2 bg-primary/25 rounded-md duration-300 hover:bg-sky-500 hover:text-white">
              <Phone />
            </div>
            999999999999
          </button>
        </div>
      </Container>
      <Container className=" py-10 relative border-t-2">
        <p className="text-center w-full ">
          © 2026 Booking System. All rights reserved.
        </p>
      </Container>
    </section>
  );
}
