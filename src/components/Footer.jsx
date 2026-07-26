import Container from "./Container";
import Facebook from "@mui/icons-material/Facebook";
import WhatsApp from "@mui/icons-material/WhatsApp";
import YouTube from "@mui/icons-material/YouTube";
import Email from "@mui/icons-material/Email";
import Phone from "@mui/icons-material/Phone";
import { Link } from "react-router-dom";
import { footer } from "../consts/index";
export default function Footer() {
  return (
    <section className="bg-text-const  text-white w-full">
      <div className="bg-prg/10">
        {" "}
        <Container className=" py-10 flex flex-col gap-3.5 ">
          <h3 className=" w-full text-2xl font-bold text-start drop-shadow-md drop-shadow-black/60">
            {" مسار"}
          </h3>
          <p className="pb-5">{footer?.title}</p>
          <span className="pb-3  border-t-2 border-white"></span>

          <div className="flex flex-wrap gap-7 justify-between md:justify-around">
            <div className="grid ">
              <h5 className="w-full mb-0 text-xl font-bold text-primary">
                روابط سريعة
              </h5>
              <Link
                to={"/"}
                className="hover:text-primary font-bold duration-300"
              >{`الرئيسية`}</Link>
              <Link
                to={"/contact"}
                className="hover:text-primary font-bold duration-300"
              >{`تواصل معنا`}</Link>
              <Link
                to={"/explore"}
                className="hover:text-primary font-bold duration-300"
              >{`استكشاف`}</Link>
            </div>
            <div className="flex flex-col gap-4 ">
              <h5 className="w-full mb-3 text-xl font-bold text-primary">
                تواصل معنا
              </h5>
              <button
                type="button"
                className="flex gap-3 items-center cursor-pointer"
              >
                <div className="p-2 flex justify-center items-center bg-primary/25 text-lg sm:text-2xl rounded-md duration-300 hover:bg-sky-500 hover:text-white">
                  <Email fontSize="" />
                </div>
                <span className="text-sm">care@bauhspace.com</span>
              </button>
              <button
                type="button"
                className="flex gap-3 items-center cursor-pointer"
              >
                <div className="p-2 flex justify-center items-center bg-primary/25 text-lg sm:text-2xl rounded-md duration-300 hover:bg-sky-500 hover:text-white">
                  <Phone fontSize="" />
                </div>
                <span className="text-sm">201234567899+</span>
              </button>
              <div className="flex gap-2 py-3">
                <button
                  type="button"
                  className="p-2 flex text-lg sm:text-2xl justify-center items-center bg-primary/25 rounded-md duration-300 cursor-pointer hover:bg-sky-500 hover:text-white"
                >
                  <Facebook fontSize="" />
                </button>
                <button
                  type="button"
                  className="p-2 flex text-lg sm:text-2xl justify-center items-center bg-primary/25 rounded-md duration-300 cursor-pointer hover:bg-green-400 hover:text-white"
                >
                  <WhatsApp fontSize="" />
                </button>
                <button
                  type="button"
                  className=" p-2 flex text-lg sm:text-2xl justify-center items-center bg-primary/25 rounded-md duration-300 cursor-pointer hover:bg-red-500 hover:text-white"
                >
                  <YouTube fontSize="" />
                </button>
              </div>
            </div>
            <div>
              <h5 className="w-full mb-5 text-xl font-bold text-primary">
                {" "}
                للخبراء
              </h5>
              <Link
                to={"/provider"}
                className="hover:text-primary hover:font-bold duration-300"
              >{`قدم كخبير`}</Link>
            </div>
          </div>
        </Container>
        <Container className=" py-10 relative border-t-2">
          <p className="text-center w-full ">{footer.rights}</p>
        </Container>
      </div>
    </section>
  );
}
