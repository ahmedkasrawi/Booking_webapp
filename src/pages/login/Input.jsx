export default function Input({ title, type, className, name, value, handle, error }) {
  return (
    <div className="w-full flex flex-col">
      <label className="flex items-center w-full gap-2">
        <span className="w-20 block cursor-pointer">{title}</span>
        <input
          type={type}
          className={`bg-prg/30 border border-gray-400 rounded-md px-2 shadow-sm shadow-mist-450 w-full py-1 md:py-2 ${className}`}
          name={name}
          id={name}
          value={value[name]}
          onChange={(e) => handle(e.target)}
          placeholder={name}
        />
      </label>
      <span className=" block cursor-pointer pt-1 w-full text-red-500 text-center">
        {error}
      </span>
    </div>
  );
}
