import CustomerReview from "../customerReview/customerReview";
import FeaturedBrand from "../featuredBrand/FeaturedBrand";
import Featured from "../featuredProducts/Featured";
import Footer from "../footer/Footer";
import Hero from "../hero/Hero";
import Service from "../service/Service";
import home from './Home.module.css';

const Home = () => {
    return (
        <div className={`${home.main}`}>
           <Hero/>
           <Service/>
           <Featured/>
           <FeaturedBrand/>
           <CustomerReview/>
           <Footer/>
        </div>
    );
};

export default Home;