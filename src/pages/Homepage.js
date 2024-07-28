import Cardsani from "@/components/Cardsani";
import DesignCards from "@/components/DesignCards";
import Designer from "@/components/Designer";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JoinDribble from "@/components/JoinDribble";
import Slideshow from "@/components/Slideshow";
import Carousel from "@/components/Carousel";

const Homepage = () => {
    return (
      <div className="bg-[#f8f7f4] h-full">
        <Header />
        <Designer />
        <Slideshow />
        <DesignCards />
            <JoinDribble />
            <Carousel/>
        <Footer />
      </div>
    );
}

export default Homepage;