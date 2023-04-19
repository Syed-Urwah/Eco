import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

export default function ProductSwipper({ product }) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                spaceBetween={10}
                navigation={true}
                loop={true}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2 h-96 lg:h-[500px] w-full"
            >
               

                { product.images &&
                    product.images.map((images) => {
                        return <SwiperSlide key={images}>
                                    <img className="w-full h-full object-cover rounded-3xl bg-slate-500" src={images} />
                                </SwiperSlide>
                    })
                }
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper horizontalSwipper py-5"
            >
                {product.images &&
                    product.images.map((images) => {
                        return <SwiperSlide key={images} className="h-52 w-52 hover:cursor-pointer">
                                    <img className="w-full h-1/2 object-cover rounded-2xl" src={images} />
                                </SwiperSlide>
                    })
                }
            </Swiper>
        </>
    );
}
