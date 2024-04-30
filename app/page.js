import Header from "@/components/Header";
import NewArrival from "@/components/NewArrival";
import ShoeBanner from "@/components/ShoeBanner";
import TopBrands from "@/components/TopBrands";


function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <Header/>
      <ShoeBanner/>
      <TopBrands/>
      <NewArrival/>
    </section>
  )
}

export default Home;