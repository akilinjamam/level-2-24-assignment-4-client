import CustomerReview from "../customerReview/customerReview";
import Extra from "../extra/Extra";
import ExtraTwo from "../extra/ExtraTwo";
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
           <Extra/>
           <ExtraTwo/>
           <Footer/>
        </div>
    );
};

export default Home;

//client-production-link:  https://level-2-24-assignment-4-client.vercel.app/