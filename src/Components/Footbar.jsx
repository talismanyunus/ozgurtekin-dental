import React from 'react'
import { Contact, Logo, Location, EmailIcon, Arrow, Logo2, Logo3 } from '../assets'
import { Link } from 'react-router-dom'
import { Trans, useTranslation } from 'react-i18next'

const Footbar = () => {
    const { t } = useTranslation()

    return (
    <div className='w-full bg-[#849661]'>
        <div className='sm:flex sm:flex-col md:grid md:grid-cols-2 md:gap-12 lg:flex lg:flex-row justify-evenly sm:py-10 md:py-12 sm:px-3 md:px-16 lg:pt-20'>
            <div className='child:text-white items-center'>
                <img src={Logo3} alt='Logo' className='mb-5 w-72'/>
                <p><Trans components={{ br: <br className='sm:hidden md:hidden'/>}}>{t("footbarDescription1")}</Trans></p>
            </div>
            <div className='sm:mt-5'>
                <p className='text-2xl font-medium text-white'>{t("footBarTitle1")}</p>
                <div className='border-b w-16 border-white border-opacity-40 border-[1px] mt-6'></div>
                <p className='flex flex-row gap-2 mt-8 text-white'>
                    <img src={Location} alt="Location Icon"/>
                    Mahmutlar, Selahattin Yaman Cd. No:7/B, 07450 Alanya/Antalya
                </p>
                <a href="tel:+905078788507"><p className='flex flex-row gap-2 my-4 text-white'>
                    <img src={Contact} alt='Contact Support'/>
                    0507 878 85 07
                </p></a>
                <a href="mailto:info@ozgurtekin.com"><p className='flex flex-row gap-2 text-white'>
                    <img src={EmailIcon} alt='Email Icon'/>
                    info@ozgurtekin.com
                </p></a>
            </div>
            <div className='sm:mt-5'>
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
            <div className='sm:mt-5'>
                <p className='text-2xl font-medium text-white'>{t("footBarTitle3")}</p>
                <div className='border-b w-16 border-white border-opacity-40 border-[1px] mt-6'></div>
                <ol className='child:mt-3 mt-6 list-disc list-inside text-white child-hover:opacity-70'>
                    <li><Link to="/privacy-policy">{t("footBarPrivacy")}</Link></li>
                    <li><Link to="/terms-and-conditions">{t("footBarTerms")}</Link></li>
                </ol>
            </div>
        </div>
        {/* Alt imza çizgisi */}
        <div className='border-t border-white border-opacity-20 mt-10 py-5 flex sm:flex-col md:flex-row justify-between items-center sm:px-3 md:px-16 gap-2'>
            <p className='text-white text-opacity-70 text-sm'>© {new Date().getFullYear()} Dt. Özgür Tekin Ağız ve Diş Sağlığı. Tüm hakları saklıdır.</p>
            <a href="https://yusahmedia.com" target='_blank' rel='noreferrer' className='text-white text-opacity-70 text-sm hover:text-opacity-100 duration-300'>
                Tasarım & Geliştirme: <span className='font-semibold text-white'>yusahmedia</span>
            </a>
        </div>
    </div>
  )
}

export default Footbar