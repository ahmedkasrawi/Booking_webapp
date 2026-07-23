
export default function Header({header,paragraph, className=""}) {
  return (
    <div className={`text-center mx-auto md:px-0 ${className}`}>
      <h1 className="font-bold text-3xl mb-3 md:text-4xl drop-shadow-md drop-shadow-prg/60">
        {header}
      </h1>
      <p className="text-prg">{paragraph}</p>
    </div>
  );
}
