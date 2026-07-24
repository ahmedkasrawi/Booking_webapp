import Star from "@mui/icons-material/Star";
export default function Card({
  title,
  paragraph,
  children,
  className,
  data,
  type,
}) {
  if (type === "img") {
    return (
      <div
        className={`border-2   rounded-md duration-400 hover:-translate-y-1 ${className}`}
      >
        <img
          src={"/hero-sm.jpg"}
          className="rounded-t-md bg-text-main/40 min-h-46 "
          alt="خبير"
        />
        {children}
        <div className="  px-2 my-2 h-19 overflow-hidden">
          <h1 className="mb-2 font-semibold text-md ">{data?.title}</h1>
          <p className="text-sm text-prg ">{data?.paragraph}</p>
        </div>
      </div>
    );
  }
  if (type === "test") {
    let stars = [];
    for (let index = 0; index < data.star; index++) {
      stars.push(1);
      if (index === 4) {
        break;
      }
    }
    const starsIcons = stars.map((index) => {
      return (
        <Star
          key={index}
          sx={{ fontSize: "16px" }}
          className="text-amber-500"
        />
      );
    });
    return (
      <div
        className={` border-2 p-2 flex flex-col items-center justify-center gap-2 rounded-2xl duration-300  hover:bg-text-white/60 hover:-translate-y-1  ${className} `}
      >
        <div>{starsIcons}</div>
        <p className="text-sm text-prg h-20 w-full line-clamp-2">
          {data.paragraph}
        </p>
        <div className="w-full border border-text-main/50 "></div>
        <h1 className=" font-bold text-lg self-start">{data.title}</h1>
      </div>
    );
  }

  return (
    <div
      className={`border-2 p-5 rounded-2xl duration-400 hover:-translate-y-1 ${className}`}
    >
      {children}
      <h1 className="my-2 font-bold text-lg">{title}</h1>
      <p className="text-sm text-prg">{paragraph}</p>
    </div>
  );
}
