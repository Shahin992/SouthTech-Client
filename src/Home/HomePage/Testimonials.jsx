/* eslint-disable react/jsx-key */
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { RiDoubleQuotesR } from "react-icons/ri";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
const ReviewCard = () => {
    const [testimonial,setTestimonial] = useState([])
    useEffect(()=>{
        fetch('/testimonials.json')
        .then(res => res.json())
        .then(data => setTestimonial(data))
    },[])
    return (
        <div className="my-10 p-3">
            <h3 className="text-3xl text-[#08193C] font-bold text-center mb-10">Testimonials That Inspire: Hear It from Our Customers</h3>
            <div>
            <Swiper
      modules={[Navigation, Pagination, A11y,Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      onSlideChange={() => console.log('slide change')}
     
      breakpoints={{
        1024:{
            slidesPerView: 1,
        },
          
        640: {
          slidesPerView: 1,
        },
      
        320: {
          slidesPerView: 1,
        },
      }}
    >
        {
            testimonial.map(testi=> (
                <SwiperSlide>
        <div>
        <div className="px-10  bg-base-100 shadow-xl h-60 flex justify-center items-center">
       
 
  <div className=" items-center text-center">
    <div className="flex justify-center items-center">
    <RiDoubleQuotesR className="text-7xl text-[#01619C] " />
    </div>
  
    <h2 className="px-5 mb-3 text-2xl font-medium">{testi.comment}</h2>
    <div className="flex justify-center items-center gap-5">
        <figure><img className="w-16 h-16 rounded-full" src="https://static.tcimg.net/authors/c1722665982a5bd0/matt-digiulio.jpg" alt="" /></figure>
        <div>
            <h3 className="text-xl font-bold">{testi.username}</h3>
        </div>
    </div>
  </div>
</div>
        
        </div>
        </SwiperSlide>

            ))
        }



      
     
    </Swiper>
            </div>
            
        </div>
    );
};

export default ReviewCard;