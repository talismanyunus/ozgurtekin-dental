import React from 'react'
import { AboutGalleryImage1,GalleryAboutImage1, GalleryAboutImage2, GalleryAboutImage3, GalleryAboutImage4 } from '../assets';
import {Swiper,SwiperSlide} from 'swiper/react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Trans, useTranslation } from 'react-i18next';
import { Navigation } from "swiper/core";
import "swiper/css/navigation";


const AboutPageGallery = () => {
    const { t } = useTranslation()

    return (
        <ScrollAnimation className='flex w-full justify-center items-center sm:mb-12 md:mb-24 lg:mb-32 overflow-hidden' animateIn='fadeInTop'>
            <div className='w-full sm:px-5 md:px-16 lg:px-32 '>
                <p className="text-[#6B7D4A] font-bold">{t("aboutGallery")}</p>
                <p className="sm:text-2xl md:text-4xl lg:text-4xl font-bold text-[#849661] mt-3 mb-10">
                    <Trans components={{ br: <br className='sm:hidden'/> }}>{t("aboutGalleryTitle")}</Trans>
                </p>
                <Swiper
                    modules={[Navigation]}
                    navigation={true}
                    spaceBetween={20}
                    slidesPerView={1}
                    speed="1000"
                    loop={true}
                    breakpoints={{
                    767:{
                        slidesPerView: 2,
                    },
                    992: {
                        slidesPerView: 3
                    }
                    }}
                >
                    <SwiperSlide>
                        <div className='overflow-hidden rounded-lg h-64'>
                            <img src={GalleryAboutImage1} alt="Image 1" draggable="false" className='w-full h-full object-cover hover:scale-105 duration-500'/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='overflow-hidden rounded-lg h-64'>
                            <img src={GalleryAboutImage2} alt="Image 2" draggable="false" className='w-full h-full object-cover hover:scale-105 duration-500'/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='overflow-hidden rounded-lg h-64'>
                            <img src={GalleryAboutImage3} alt="Image 3" draggable="false" className='w-full h-full object-cover hover:scale-105 duration-500'/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='overflow-hidden rounded-lg h-64'>
                            <img src={GalleryAboutImage4} alt="Image 4" draggable="false" className='w-full h-full object-cover hover:scale-105 duration-500'/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='overflow-hidden rounded-lg h-64'>
                            <img src={GalleryAboutImage1} alt="Image 1" draggable="false" className='w-full h-full object-cover hover:scale-105 duration-500'/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='overflow-hidden rounded-lg h-64'>
                            <img src={GalleryAboutImage2} alt="Image 2" draggable="false" className='w-full h-full object-cover hover:scale-105 duration-500'/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='overflow-hidden rounded-lg h-64'>
                            <img src={GalleryAboutImage3} alt="Image 3" draggable="false" className='w-full h-full object-cover hover:scale-105 duration-500'/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='overflow-hidden rounded-lg h-64'>
                            <img src={GalleryAboutImage4} alt="Image 4" draggable="false" className='w-full h-full object-cover hover:scale-105 duration-500'/>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </ScrollAnimation>
    )
}

export default AboutPageGallery