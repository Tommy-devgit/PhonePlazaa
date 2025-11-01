import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
// @ts-ignore: CSS module definitions missing in the project
import "swiper/css";
// @ts-ignore: CSS module definitions missing in the project
import "swiper/css/pagination";
// @ts-ignore: CSS module definitions missing in the project
import "swiper/css/navigation";

const heroSlides = [
  {
    title: "Welcome To PhonePlazaa",
    description: "Explore the latest flagship phones from top brands — powerful, sleek, and stunning.",
    image: "/images/banner-1.jpg",
    button: "Shop Now",
  },
  {
    title: "Accessories that Define You",
    description: "From wireless earbuds to cases, complete your mobile experience with style.",
    image: "/images/banner-2.jpg",
    button: "Discover More",
  },
  {
    title: "Unbeatable Deals",
    description: "Save big on selected gadgets and accessories. Limited time offers only!",
    image: "/images/banner-3.jpg",
    button: "Grab the Deal",
  },
];

export default function Hero() {
  return (
    <div className="relative w-full h-[90vh] overflow-hidden rounded-2xl">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-full"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center flex items-center justify-center text-white"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="bg-black/60 backdrop-blur-sm w-full h-full flex flex-col items-center justify-center text-center px-6 md:px-16">
                <h1 className="text-4xl md:text-6xl font-bold text-red-700 mb-4 drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl max-w-2xl mb-6 text-gray-200">
                  {slide.description}
                </p>
                <Link
                  to="/products"
                  className="bg-red-700 hover:bg-red-800 transition px-6 py-3 rounded-lg font-semibold shadow-md inline-block"
                >
                  {slide.button}
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
