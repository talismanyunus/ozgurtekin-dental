import React from 'react'
import { Contact, Logo, Location, EmailIcon, Arrow, Logo2, Logo3 } from '../assets'
import { Link } from 'react-router-dom'
import { Trans, useTranslation } from 'react-i18next'

const Footbar = () => {
    const { t } = useTranslation()

    return (
    <div className='w-full bg-[#849661]'>
        {/* Logo + Açıklama — mobilde ortalı */}
        <div className='sm:flex sm:flex-col sm:items-center sm:text-center sm:px-5 sm:pt-10 sm:pb-6 md:hidden lg:hidden border-b border-white border-opacity-20'>
            <img src={Logo3} alt='Logo' className='mb-4 sm:w-44 max-w-full'/>
            <p className='text-white text-sm leading-6 opacity-80 max-w-xs'><Trans components={{ br: <br className='hidden'/>}}>{t("footbarDescription1")}</Trans></p>
        </div>

        {/* Mobil: 2 kolon grid — İletişim | Explore+OtherLinks */}
        <div className='sm:grid sm:grid-cols-2 sm:gap-6 sm:px-5 sm:py-8 md:hidden lg:hidden'>
            {/* Sol: İletişim */}
            <div>
                <p className='text-white font-semibold text-base mb-3'>{t("footBarTitle1")}</p>
                <div className='border-b w-10 border-white border-opacity-40 mb-4'></div>
                <div className='flex flex-col gap-3 text-white text-sm'>
                    <p className='flex flex-row gap-2 items-start leading-5'>
                        <img src={Location} alt="Location Icon" className='mt-0.5 flex-shrink-0' width={14}/>
                        <span className='break-words opacity-90'>Mahmutlar, Selahattin Yaman Cd. No:7/B, 07450 Alanya</span>
                    </p>
                    <a href="tel:+905078788507" className='flex flex-row gap-2 items-center opacity-90'>
                        <img src={Contact} alt='Phone' className='flex-shrink-0' width={14}/>
                        0507 878 85 07
                    </a>
                    <a href="mailto:info@ozgurtekin.com" className='flex flex-row gap-2 items-center opacity-90 break-all'>
                        <img src={EmailIcon} alt='Email' className='flex-shrink-0' width={14}/>
                        info@ozgurtekin.com
                    </a>
                </div>
            </div>
            {/* Sağ: Explore + Other Links */}
            <div className='flex flex-col gap-6'>
                <div>
                    <p className='text-white font-semibold text-base mb-3'>{t("footBarTitle2")}</p>
                    <div className='border-b w-10 border-white border-opacity-40 mb-4'></div>
                    <ul className='flex flex-col gap-2 text-white text-sm opacity-90'>
                        <li><Link to="/">{t("home")}</Link></li>
                        <li><Link to="/about">{t("about")}</Link></li>
                        <li><Link to="/services">{t("services")}</Link></li>
                        <li><Link to="/blogs">{t("blog")}</Link></li>
                        <li><Link to="/dental-tourism">{t("dentalTourism")}</Link></li>
                        <li><Link to="/free-quote">{t("contact")}</Link></li>
                    </ul>
                </div>
                <div>
                    <p className='text-white font-semibold text-base mb-3'>{t("footBarTitle3")}</p>
                    <div className='border-b w-10 border-white border-opacity-40 mb-4'></div>
                    <ul className='flex flex-col gap-2 text-white text-sm opacity-90'>
                        <li><Link to="/privacy-policy">{t("footBarPrivacy")}</Link></li>
                        <li><Link to="/terms-and-conditions">{t("footBarTerms")}</Link></li>
                    </ul>
                </div>
            </div>
        </div>

        {/* Tablet + Desktop: orijinal layout */}
        <div className='sm:hidden md:grid md:grid-cols-2 md:gap-12 lg:flex lg:flex-row justify-evenly md:py-12 md:px-16 lg:pt-20'>
            <div className='child:text-white items-center'>
                <img src={Logo3} alt='Logo' className='mb-5 md:w-56 lg:w-72 max-w-full'/>
                <p className='break-words text-sm leading-6'><Trans components={{ br: <br className='sm:hidden md:hidden'/>}}>{t("footbarDescription1")}</Trans></p>
            </div>
            <div className='md:mt-0'>
                <p className='text-2xl font-medium text-white'>{t("footBarTitle1")}</p>
                <div className='border-b w-16 border-white border-opacity-40 border-[1px] mt-6'></div>
                <p className='flex flex-row gap-2 mt-8 text-white items-start'>
                    <img src={Location} alt="Location Icon" className='mt-1 flex-shrink-0'/>
                    <span className='break-words'>Mahmutlar, Selahattin Yaman Cd. No:7/B, 07450 Alanya/Antalya</span>
                </p>
                <a href="tel:+905078788507"><p className='flex flex-row gap-2 my-4 text-white items-center'>
                    <img src={Contact} alt='Contact Support' className='flex-shrink-0'/>
                    0507 878 85 07
                </p></a>
                <a href="mailto:info@ozgurtekin.com"><p className='flex flex-row gap-2 text-white items-center'>
                    <img src={EmailIcon} alt='Email Icon' className='flex-shrink-0'/>
                    info@ozgurtekin.com
                </p></a>
            </div>
            <div>
                <p className='text-2xl font-medium text-white'>{t("footBarTitle2")}</p>
                <div className='border-b w-16 border-white border-opacity-40 border-[1px] mt-6'></div>
                <ol className='my-8 child:mb-3 list-disc list-inside text-white child-hover:text-white child-hover:opacity-70'>
                    <li><Link to="/">{t("home")}</Link></li>
                    <li><Link to="/about">{t("about")}</Link></li>
                    <li><Link to="/services">{t("services")}</Link></li>
                    <li><Link to="/blogs">{t("blog")}</Link></li>
                    <li><Link to="/dental-tourism">{t("dentalTourism")}</Link></li>
                    <li><Link to="/free-quote">{t("contact")}</Link></li>
                </ol>
            </div>
            <div>
                <p className='text-2xl font-medium text-white'>{t("footBarTitle3")}</p>
                <div className='border-b w-16 border-white border-opacity-40 border-[1px] mt-6'></div>
                <ol className='child:mt-3 mt-6 list-disc list-inside text-white child-hover:opacity-70'>
                    <li><Link to="/privacy-policy">{t("footBarPrivacy")}</Link></li>
                    <li><Link to="/terms-and-conditions">{t("footBarTerms")}</Link></li>
                </ol>
            </div>
        </div>

        {/* Alt imza çizgisi */}
        <div className='border-t border-white border-opacity-20 mt-6 py-4 flex sm:flex-col md:flex-row justify-between items-center sm:px-5 md:px-16 gap-2'>
            <p className='text-white text-opacity-70 text-xs sm:text-center'>© {new Date().getFullYear()} Dt. Özgür Tekin Ağız ve Diş Sağlığı. Tüm hakları saklıdır.</p>
            <a href="https://yusahmedia.com" target='_blank' rel='noreferrer' className='text-white text-opacity-70 text-xs hover:text-opacity-100 duration-300 sm:text-center'>
                Tasarım & Geliştirme: <span className='font-semibold text-white'>yusahmedia</span>
            </a>
        </div>
    </div>
  )
}

export default Footbar
