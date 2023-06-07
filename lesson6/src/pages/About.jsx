import { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import data from '../data/Slider';


const About = () => {

  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Navigation, A11y, EffectFade, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        effect="fade"
        autoplay={{ delay: 30 }}
        speed={1300}
        loop={true}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {
          data.map((item, index)=>{
            return <SwiperSlide><img src={item.img} style={{width:'100%', height:'100vh'}} alt="" /></SwiperSlide>
          })
        }
        
      </Swiper>
    </>
  )
}

export default About