
export default function Product({ data, className }) {
  return (
    <div
      id={data._id}
      className={`bg-bg-main border border-text-main w-full pb-5 flex flex-col justify-between duration-300  ${className}`}
    >
      <div className="w-full overflow-hidden rounded-t-md">
        <img
          src="/service.avif"
          alt="service"
          className="w-full bg-text-main rounded-t-md max-h-50 duration-300"
        />
      </div>

      <div className="py-2 px-2">
        <h3>{data.title}</h3>
        <p>{data?.provider?.name}</p>
        <p>{data?.category}</p>
      </div>

      <button
        type="button"
        className="my-2 mx-4 flex justify-center bg-primary text-white py-1 px-3 rounded-2xl hover:bg-primary-hover"
      >
        {" عرض"}
      </button>
    </div>
  );
}
