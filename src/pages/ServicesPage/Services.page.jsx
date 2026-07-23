import Container from "../../components/Container";
import Button from "../../components/Button";
import Header from "../../components/Header";
import { useAllServices } from "../../hooks/useServices";
import Product from "./components/Product";
import { Link } from "react-router-dom";
import PageTransition from "../../components/animation/PageTransition";


export default function ServicesPage() {
  const {isLoading,data} = useAllServices()
  const dataList = data?.data.services;
  const list = dataList?.map((item)=> {
    return (
      <Product key={item._id} data={item}/>
    )
  })
  
  return (
    <PageTransition>
      <section className="pt-10 pb-25 mt-18 xl:mt-16">
        <Container className=" flex flex-col gap-10">
          <Header header={"خدمات الخبراء"} />

          <div className="flex gap-2">
            <button className="bg-text-main/70 text-text-white py-1 px-2 cursor-pointer rounded hover:bg-text-main/80">
              {"الكل"}
            </button>
            <button className="bg-text-main/70 text-text-white py-1 px-2 cursor-pointer rounded hover:bg-text-main/80">
              {"جلسة نصح"}
            </button>
            <button className="bg-text-main/70 text-text-white py-1 px-2 cursor-pointer rounded hover:bg-text-main/80">
              {" مسار المهني "}
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {list}
          </div>
        </Container>
      </section>
    </PageTransition>
  );
}
