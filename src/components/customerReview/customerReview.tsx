import review from '../../images/customer-review.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { allReviews } from './allReviews';
import Slider from 'react-slick';

const CustomerReview = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false
      };
    return (
        <div className="w-full h-[450px] flex items-center justify-between my-6">
            <section className="w-[590px] h-full bg-purple-50 p-3">
                <p className='my-6 text-3xl font-bold text-gray-700'>CUSTOMER REVIEWS</p>
                <div className='w-full h-[290px] m-auto'>
                    <Slider {...settings}>
                        {
                            allReviews.map(review => {
                                return (
                                    <div className=''>
                                        <div className='h-[200px] w-[200px] m-auto my-6'>
                                            <img className='rounded-full' src={review.img} alt="" />
                                        </div>
                                        <div>
                                            <p className='text-center'>{review.reviews}</p>
                                        </div>

                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>

            </section>
            <section className="w-[590px] h-full bg-purple-50 flex items-center justify-center">
                <img width={400} src={review} alt="" />
            </section>
        </div>
    );
};

export default CustomerReview;