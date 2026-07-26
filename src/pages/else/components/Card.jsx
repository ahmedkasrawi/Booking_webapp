import ScrollReveal from "../../../components/ScrollReveal";
function Card({ title, paragraph, children }) {
  return (
    <ScrollReveal >
      <article className="group h-full  bg-text-main/7 border border-text-main/12 rounded-xl p-8 shadow-sm transition duration-400 hover:-translate-y-1 hover:shadow-lg shadow-text-black/5">
        <h2 className="text-2xl font-semibold mb-4">{title}</h2>
        <p className="text-prg leading-7">{paragraph}</p> {children}{" "}
      </article>
    </ScrollReveal>
  );
}
export default Card;
