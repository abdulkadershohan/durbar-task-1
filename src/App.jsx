// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

const data = [
  {
    id: 1,
    title: 'Node JS Developer',
    description: `Node JS is a JavaScript runtime built on Chrome’s V8 JavaScript engine. Node JS uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.`,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png'
  },
  {
    id: 2,
    title: 'React JS Developer ',
    description: `React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.`,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'
  },
  {
    id: 2,
    title: 'Next JS Developer ',
    description: `Next.js is an open-source development framework built on top of Node.js enabling React based web applications functionalities such as server-side rendering and generating static websites.`,
    logo: 'https://images.ctfassets.net/23aumh6u8s0i/c04wENP3FnbevwdWzrePs/1e2739fa6d0aa5192cf89599e009da4e/nextjs'
  },
]
function App() {
  const [activeSlideIndex, setActiveSlideIndex] = React.useState(0);

  const handleSlideChange = (swiper) => {
    setActiveSlideIndex(swiper.realIndex); // Update active slide index
  };
  React.useEffect(() => {
    const findTitle = data.find((item, index) => index === activeSlideIndex);
    document.title = findTitle.title;
  }, [activeSlideIndex]);
  return (
    <div
      className='container'
    >
      <Swiper
        dir="rtl"
        slidesPerView={1}
        onSlideChange={handleSlideChange}
        // onSwiper={(swiper) => console.log(swiper)}
        //
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}

      >
        {
          data.map((item) => (
            <SwiperSlide
              key={item.id}
            >
              <div className='box'>
                <img src={item.logo} alt={item.title} className='logo' />
                <h3 className='title'>{item.title}</h3>
                <p className='description'>{item.description}</p>
              </div>

            </SwiperSlide>

          ))
        }
      </Swiper>
    </div>
  )
}

export default App
