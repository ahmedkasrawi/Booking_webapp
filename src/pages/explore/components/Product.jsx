export default function Product({ data, handelClick, time }) {
  return (
    <div
      id={data._id}
      className="bg-bg-main border-2 border-text-main/10 w-full rounded-2xl flex flex-col justify-between overflow-hidden duration-300 hover:shadow-xl hover:border-primary/30  group"
    >
      <div className="w-full h-48 overflow-hidden relative bg-text-main/5">
        <img
          src="/service.avif"
          alt={data?.title}
          className="w-full h-full object-cover duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3 bg-bg-main/90 backdrop-blur-sm px-3 py-1 rounded-full border border-text-main/10 shadow-sm">
          <span className="text-xs font-bold text-prg">{data?.category}</span>
        </div>
      </div>

      <div className="p-5 flex flex-col grow">
        <div className="mb-4">
          <h3
            className="text-lg font-bold text-text-main line-clamp-1 mb-1"
            title={data?.title}
          >
            {data?.title}
          </h3>
        </div>
        <div className="w-full h-px bg-text-main/10 mb-4"></div>
        <div className="flex justify-between items-center mt-auto mb-5">
          <div className="flex flex-col">
            <span className="text-xs text-text-main/60 font-medium mb-1">
              السعر
            </span>
            <span className="text-base font-bold text-primary">
              {data?.price ? `${data.price} $` : "مجانًا"}
            </span>
          </div>
          <div className="w-px h-8 bg-text-main/10"></div>
          <div className="flex flex-col text-end">
            <span className="text-xs text-text-main/60 font-medium mb-1">
              المدة
            </span>
            <span className="text-base font-bold text-text-main">
              {data.duration} دقيقة
            </span>
          </div>
        </div>
        <button
        type="button"
          disabled={!time}
          onClick={handelClick}
          className="w-full bg-primary disabled:bg-text-main/50 text-text-white py-2.5 px-4 rounded-xl font-bold transition-colors duration-300 hover:bg-primary-hover active:scale-95 disabled:active:scale-100 flex justify-center cursor-pointer disabled:cursor-not-allowed items-center gap-2"
        >
          احجز الآن
        </button>
      </div>
    </div>
  );
}