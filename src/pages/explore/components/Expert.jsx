import { Link } from "react-router-dom";

export default function Expert({ data }) {
  return (
    <div
      id={data?._id}
      className="bg-bg-main relative w-full rounded-2xl border border-text-main/20 shadow-sm flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1.5 group"
    >
      <div className="relative h-56 w-full overflow-hidden">
        <img
          src="/hero.jpg"
          alt={data?.name || "صورة الخبير"}
          className="w-full h-full object-cover transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 text-white bg-black/70 backdrop-blur-sm text-xs px-3 py-1.5 rounded-full font-medium shadow-sm">
          متاح الآن
        </div>
      </div>
      <div className="p-5 flex flex-col grow">
        <div className="mb-3">
          <h3 className="text-xl font-bold text-text-main mb-1 line-clamp-1">
            {data?.name || "اسم الخبير"}
          </h3>
          <p className="text-sm font-medium text-primary">
            {data?.specialization || "التخصص"}
          </p>
        </div>

        <p className="text-sm text-text-main/70 line-clamp-3 mb-5 grow leading-relaxed">
          {data?.bio || "لا توجد نبذة تعريفية متاحة لهذا الخبير حتى الآن."}
        </p>

        {/* 3. قسم الزر */}
        <div className="mt-auto pt-4 border-t border-text-main/10">
          <Link
            to={`/experts/${data?._id}`}
            className="flex items-center justify-center w-full bg-primary hover:opacity-90 text-white font-semibold py-2.5 px-4 rounded-xl transition-all duration-300 active:scale-95"
          >
            عرض
          </Link>
        </div>
      </div>
    </div>
  );
}
