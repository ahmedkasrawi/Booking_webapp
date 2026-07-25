function Card({ title, paragraph, children }) {
  return (
    <article className="group bg-text-white/15 border border-text-main/7 rounded-xl p-8 shadow-sm transition duration-400 hover:-translate-y-1 hover:shadow-lg shadow-text-black/5">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <p className="text-prg leading-7">{paragraph}</p> {children}{" "}
    </article>
  );
}
export default Card;
