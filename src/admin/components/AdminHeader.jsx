
export default function AdminHeader({ className, paragraph, title }) {
  return (
    <div
      className={`flex items-center bg-primary/30 border-x-4  rounded-2xl ${className}`}
    >
      <h1 className="font-bold py-2 md:text-xl drop-shadow-md drop-shadow-prg/60">
        {title}
      </h1>
      <p className="text-prg">{paragraph}</p>
    </div>
  );
}
