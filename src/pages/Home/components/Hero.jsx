import Button from "../../../components/Button";
import Container from "../../../components/Container";
import Search from "@mui/icons-material/Search";
import ArrowBack from "@mui/icons-material/ArrowBack";
export default function Hero() {
  return (
    <div className="h-[55vh] hero bg-text-main/80 relative w-full bg-cover flex py-10 rounded-b-[5%] drop-shadow-md drop-shadow-black/50">
      <Container className="flex gap-10 flex-col justify-center md:justify-end z-10 items-center">
        <h3 className="bold text-4xl md:text-5xl text-white drop-shadow-md drop-shadow-black">
          {"لتطوير مسارك المهني تحدث مباشرة مع خبراء الصناعة"}
        </h3>
        <div className="flex border-2 border-text-const bg-bg-main/90 w-full max-w-150 rounded-[15px_30px_30px_15px]  xl:bg-bg-main/10 xl:text-white ">
          <span className="bg-text-const text-white border border-text-const py-1 px-2 rounded-s-full relative cursor-pointer inset-e-0.5 ">
            <Search />
          </span>
          <input
            type="search"
            placeholder="ابحث عن خبير الان . . ."
            className="w-full py-2 px-2 rounded-2xl focus:outline-0"
          />
        </div>
        <Button className="bg-primary w-fit rounded-2xl border-2 border-text-main/90 ">
          احجز جلستك الان <ArrowBack className="animate-pulse " />
        </Button>
      </Container>
      <div className="bg-black/25 absolute w-full h-full top-0 rounded-b-[5%]"></div>
    </div>
  );
}
