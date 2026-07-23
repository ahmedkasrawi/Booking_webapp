import { useState } from "react";
import Container from "../../components/Container";
import Header from "../../components/Header";
import Expert from "./components/Expert";
import PageTransition from "../../components/animation/PageTransition";
import Pagination from "../../components/Pagination";
import { useAllProviders } from "../../hooks/useAuth";

const filters = [
  ["الكل", ""],
  ["طبيب", "Doctor"],
  ["مهندس", "engineer"],
];

export default function ExplorePage() {
  const [page, setPage] = useState(1);
  const [specialization, setSpecialization] = useState("");
  const { data } = useAllProviders(page, specialization);
  const dataList = data?.data?.users;
  const handleFilterChange = (value) => {
    setSpecialization(value);
    setPage(1);
    console.log(value);
  };
  const list = dataList?.map((item) => {
    return <Expert key={item.id} data={item} />;
  });
  return (
    <PageTransition>
      <section className="pt-10 pb-25 mt-18 xl:mt-16">
        <Container className="flex flex-col gap-8 md:gap-10">
          <Header
            header="أفضل الخبراء"
            paragraph="اختر خبيراً مناسباً واحجز جلستك في خطوات بسيطة"
          />
        </Container>
        <Container className="w-full my-10 flex  justify-center gap-3 mb-7">
          {filters.map((filter) => {
            const isActive = specialization === filter[1];
            return (
              <button
                key={filter[1]}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => handleFilterChange(filter[1])}
                className={`shrink-0 py-1.5 px-3 cursor-pointer rounded-xl text-sm font-medium duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                  isActive
                    ? "bg-text-main text-text-white shadow-sm"
                    : "bg-text-main/15 text-text-main hover:bg-text-main/25"
                }`}
              >
                {filter[0]}
              </button>
            );
          })}
        </Container>
        <Container className="pt-5">
          {list ? (
            <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {list}
            </div>
          ) : (
            <p className="py-15 w-full flex justify-center bg-text-main/10 rounded font-bold">
              {"لا يوجد خبراء"}
            </p>
          )}

          <Pagination
            className="mt-10"
            pagination={data?.pagination}
            setPage={setPage}
          />
        </Container>
      </section>
    </PageTransition>
  );
}
