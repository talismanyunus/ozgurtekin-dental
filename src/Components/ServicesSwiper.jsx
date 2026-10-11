import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react';
import { ServicesImage1,ServicesImage2,ServicesImage4,ServicesImage5, SurgeryIcon, GeneralIcon, CosmeticIcon, AeshteticIcon, ImplantologjiIcon, ConservativeIcon } from '../assets';
import { Link } from 'react-router-dom';
import { Navigation } from "swiper/core";
import ScrollAnimation from 'react-animate-on-scroll';
import { useTranslation } from 'react-i18next';
import "swiper/css/navigation";

// Slide verisi — tekrar kodu önlemek için
const slides = [
  { img: ServicesImage4, icon: ImplantologjiIcon, labelKey: "servicesButton2", iconPad: "p-1" },
  { img: ServicesImage2, icon: ConservativeIcon,  labelKey: "servicesButton3", iconPad: "p-3" },
  { img: ServicesImage1, icon: CosmeticIcon,      labelKey: "servicesButton4", iconPad: "p-3" },
  { img: ServicesImage5, icon: AeshteticIcon,     labelKey: "servicesButton5", iconPad: "p-3" },
  { img: ServicesImage4, icon: SurgeryIcon,       labelKey: "servicesButton2", iconPad: "p-3" },
  { img: ServicesImage2, icon: GeneralIcon,       labelKey: "servicesButton3", iconPad: "p-3" },
  { img: ServicesImage1, icon: CosmeticIcon,      labelKey: "servicesButton4", iconPad: "p-3" },
  { img: ServicesImage5, icon: AeshteticIcon,     labelKey: "servicesButton5", iconPad: "p-3" },
];

const ServicesSwiper = () => {
  const { t } = useTranslation();

  return (
    <ScrollAnimation className='flex w-full flex-col justify-center items-center mb-32' animateIn='fadeInTop'>
      <div className='w-full sm:px-3 md:px-20 lg:px-32'>
        <div className='text-center'>
          <p className="text-[#00ACB1] font-bold">{t("ourServices")}</p>
          <p className="sm:text-2xl md:text-4xl lg:text-4xl sm:font-extrabold md:font-extrabold lg:font-bold text-[#002856] mt-3 mb-10">
            {t("ourServicesTitle")}
          </p>
        </div>
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={true}
          speed="1000"
          loop={true}
          breakpoints={{
            767: { slidesPerView: 2 },
            992: { slidesPerView: 3 }
          }}
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className='border-r-2 border-slate-100 border-b-2 group flex flex-col'>
                {/* Görsel + overlay birlikte overflow-hidden container içinde */}
                <div className='relative overflow-hidden h-56'>
                  <img
                    src={slide.img}
                    alt={`Service ${i + 1}`}
                    draggable="false"
                    className='w-full h-full object-cover'
                  />
                  {/* Hover overlay — görsel içinde kalır */}
                  <div className='absolute inset-0 linearBlue opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[10]' />
                </div>
                {/* İkon + Başlık — görsel ile metin arasında sabit hizalamak için flex */}
                <div className='relative flex flex-col border-r-2 border-slate-100 border-b-2'>
                  <img
                    src={slide.icon}
                    alt='Service Icon'
                    width={70}
                    className={`absolute -top-9 left-6 z-10 ${slide.iconPad} rounded-full bg-white shadow shadow-neutral-500 group-hover:bg-[#00ACB1] border-8 border-white duration-300`}
                  />
                  <p className='pt-10 pb-6 pl-10 text-2xl text-[#002856] font-bold'>
                    {t(slide.labelKey)}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Link to="/services">
        <button type='submit' className='h-16 bg-[#00ACB1] px-20 rounded-lg duration-300 border-none hover:bg-[#002856] text-white mt-10'>
          {t("ourServicesButton")}
        </button>
      </Link>
    </ScrollAnimation>
  )
}

export default ServicesSwiper
