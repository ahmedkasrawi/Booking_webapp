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
        <Container className=" py-10 flex flex-col gap-3.5">
          <h3 className=" w-full text-2xl font-bold text-start drop-shadow-md drop-shadow-black/60">
            {" مسار"}
          </h3>
          <p>{footer?.title}</p>
          <div className="flex gap-2 py-3">
            <button
              type="button"
              className="p-2 bg-primary/25 rounded-md duration-300 cursor-pointer hover:bg-sky-500 hover:text-white"
            >
              <Facebook />
            </button>
            <button
              type="button"
              className="p-2 bg-primary/25 rounded-md duration-300 cursor-pointer hover:bg-green-400 hover:text-white"
            >
              <WhatsApp />
            </button>
            <button
              type="button"
              className="p-2 bg-primary/25 rounded-md duration-300 cursor-pointer hover:bg-red-500 hover:text-white"
            >
              <YouTube />
            </button>
          </div>
          <span className="pb-3 border-t-2 border-white"></span>
          <div className="flex flex-wrap sm:w-1/2 xl:w-1/3 justify-between ">
            <Link className="hover:text-primary hover:font-bold duration-300">{`الرئيسية`}</Link>
            <Link className="hover:text-primary hover:font-bold duration-300">{`الخدمات`}</Link>
            <Link className="hover:text-primary hover:font-bold duration-300">{`المستشارين`}</Link>
            <Link className="hover:text-primary hover:font-bold duration-300">{`الحجوزات`}</Link>
            <Link
              to={"/provider"}
              className="hover:text-primary hover:font-bold duration-300"
            >{`قدم كخبير`}</Link>
          </div>
          <div className="flex flex-col gap-4">
            <button
              type="button"
              className="flex gap-3 items-center cursor-pointer"
            >
              <div className="p-2 bg-primary/25 rounded-md duration-300 hover:bg-sky-500 hover:text-white">
                <Email />
              </div>
              care@bauhspace.com
            </button>
            <button
              type="button"
              className="flex gap-3 items-center cursor-pointer"
            >
              <div className="p-2 bg-primary/25 rounded-md duration-300 hover:bg-sky-500 hover:text-white">
                <Phone />
              </div>
              999999999999
            </button>
          </div>
        </Container>
        <Container className=" py-10 relative border-t-2">
          <p className="text-center w-full ">{footer.rights}</p>
        </Container>
      </div>
    </section>
  );
}
