// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import React from 'react';
import 'swiper/css';

import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, EffectCoverflow } from 'swiper/modules';

const data = [
  {
    id: 1,
    title: 'Pathan',
    description: `Pathan is an upcoming Indian Hindi-language action thriller film directed by Siddharth Anand and produced by Aditya Chopra under their banner Yash Raj Films. It stars Shah Rukh Khan, Deepika Padukone and John Abraham in lead roles. The film marks the fourth collaboration between Khan and Padukone after Om Shanti Om (2007), Chennai Express (2013) and Happy New Year (2014) and the first collaboration between Khan and Abraham. The film is scheduled to be released theatrically on 2 November 2022, coinciding with the Diwali festival.`,
    image: 'https://upload.wikimedia.org/wikipedia/en/c/c3/Pathaan_film_poster.jpg'
  },
  {
    id: 2,
    title: 'Jawaan',
    description: `A man is driven by a personal vendetta to rectify the wrongs in society, while keeping a promise made years ago. He comes up against a monstrous outlaw with no fear, who has caused extreme suffering to many.`,
    image: 'https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202309/shah-rukh-khan--jawan--srk-films-295651-1x1.jpg?VersionId=flG135APjYu35mqHqhjNACK3.P335ZY8'
  },
  {
    id: 3,
    title: 'Don',
    description: `Don: Directed by Farhan Akhtar. With Shah Rukh Khan, Priyanka Chopra Jonas, Arjun Rampal, Isha Koppikar. Vijay is recruited by a police officer to`,
    image: 'https://m.media-amazon.com/images/M/MV5BMzAyMWE0MjgtMDVjNS00ZDMyLWE4NjQtNWU2ZDgyYTlmMjdjXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_.jpg'
  },
  {
    id: 4,
    title: 'Don 2',
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, quae.`,
    image: 'https://m.media-amazon.com/images/M/MV5BMzNiYWYxNWYtZDYzMC00MzA0LTkzY2UtNDAwNDhiYmVjNmEwXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg'
  },
]
function App() {
  const [activeSlideIndex, setActiveSlideIndex] = React.useState(0);

  const handleSlideChange = (swiper) => {
    setActiveSlideIndex(swiper.realIndex); // Update active slide index
  };

  return (
    <div className='main-container'

    >
      <div className='container'>
        <Swiper
          onSlideChange={handleSlideChange}

          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          //
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          modules={[EffectCoverflow, Autoplay]}
          className="swiper_container"
        >
          {
            data.map((item) => (
              <SwiperSlide
                key={item.id}
              >

                <img src={item.image} alt={item.title} />
              </SwiperSlide>

            ))
          }

        </Swiper>
      </div>
      <div className='rightSection'>
        <h1>
          {data[activeSlideIndex].title}
        </h1>
        <p>
          {data[activeSlideIndex].description}
        </p>
        <button className='btn'> Watch Now</button>
      </div>
    </div>
  )
}

export default App
