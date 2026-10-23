import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react';
import { GalleryImage1,GalleryImage2,GalleryImage3,GalleryImage4, GalleryImage5 } from '../assets';
import 'swiper/css';
import ScrollAnimation from 'react-animate-on-scroll';
import { useTranslation } from 'react-i18next';
import { Navigation } from 'swiper/core';
import "swiper/css/navigation";

const images = [
  { src: GalleryImage1, labelKey: "ourGalleryDescription1" },
  { src: GalleryImage2, labelKey: "ourGalleryDescription2" },
  { src: GalleryImage3, labelKey: "ourGalleryDescription3" },
  { src: GalleryImage4, labelKey: "ourGalleryDescription4" },
  { src: GalleryImage5, labelKey: "ourGalleryDescription5" },
  { src: GalleryImage1, labelKey: "ourGalleryDescription1" },
  { src: GalleryImage2, labelKey: "ourGalleryDescription2" },
  { src: GalleryImage3, labelKey: "ourGalleryDescription3" },
  { src: GalleryImage4, labelKey: "ourGalleryDescription4" },
  { src: GalleryImage5, labelKey: "ourGalleryDescription5" },
];

const GallerySwiper = () => {
  const { t } = useTranslation();

  return (
    <ScrollAnimation className='flex w-full justify-center items-center sm:mb-12 md:mb-24 lg:mb-32 overflow-hidden' animateIn='fadeInTop'>
      <div className='w-full sm:px-3 md:px-16 lg:px-32'>
        <p className="text-[#6B7D4A] font-bold">{t("ourGallery")}</p>
        <p className="sm:text-2xl md:text-4xl lg:text-4xl font-bold text-[#849661] mt-3 mb-10">
          {t("ourGalleryTitle")} {t("ourGalleryTitle2")}
        </p>
        <Swiper
          modules={[Navigation]}
          navigation={true}
          spaceBetween={20}
          slidesPerView={1}
          speed="1000"
          loop={true}
          breakpoints={{
            767: { slidesPerView: 2 },
            992: { slidesPerView: 3 }
          }}
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              {/* relative + overflow-hidden → absolute çocuklar buraya göre konumlanır */}
              <div className='relative overflow-hidden group h-64'>
                <img
                  src={img.src}
                  alt={`Gallery ${i + 1}`}
                  draggable="false"
                  className='w-full h-full object-cover group-hover:scale-105 duration-500'
                />
                {/* Başlık — normalde görünmez, hover'da aşağıdan kayar */}
                <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 duration-300 bg-white bg-opacity-90 py-4">
                  <p className="text-xl font-bold text-[#849661] text-center">
                    {t(img.labelKey)}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </ScrollAnimation>
  )
}

export default GallerySwiper
