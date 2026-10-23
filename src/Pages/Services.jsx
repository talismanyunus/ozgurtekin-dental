import {useEffect, useState} from 'react'
import { AboutImg } from '../assets';
import { ServicesData } from '../data/Services Data/data.json';
import { ServicesDataItalian } from '../data/Services Data/data.italian.json';
import { ServicesDataAlbanian } from '../data/Services Data/data.albanian.json';
import { ServicesDataTurkish } from '../data/Services Data/data.turkish.json';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Services = (props) => {
  const [categoryData, setCategoryData] = useState({});
  const { setTypeOfService } = props;
  const { t } = useTranslation();
  const {language} = props;

  useEffect(() => {
    if(language == "it"){
      setCategoryData(ServicesDataItalian)
    }else if(language == "sq"){
      setCategoryData(ServicesDataAlbanian)
    }else if(language == "tr"){
      setCategoryData(ServicesDataTurkish)
    }else{
      setCategoryData(ServicesData)
    }
  },[language])

  const searchFunction = (e) => {
    if(language == "en"){
      if(e.target.value == "all"){
        setCategoryData(ServicesData)
      }else{
        setCategoryData(ServicesData.filter((data) => data.category == e.target.value))
      }
    }else if(language == "sq"){
      if(e.target.value == "all"){
        setCategoryData(ServicesDataAlbanian)
      }else{
        setCategoryData(ServicesDataAlbanian.filter((data) => data.category == e.target.value))
      }
    }else if(language == "tr"){
      if(e.target.value == "all"){
        setCategoryData(ServicesDataTurkish)
      }else{
        setCategoryData(ServicesDataTurkish.filter((data) => data.category == e.target.value))
      }
    }else{
      if(e.target.value == "all"){
        setCategoryData(ServicesDataItalian)
      }else{
        setCategoryData(ServicesDataItalian.filter((data) => data.category == e.target.value))
      }
    }
  }


  return (
    <div className="w-full flex-col overflow-x-hidden">
      {/* First Section */}
      <div className="flex flex-row justify-between sm:px-5 md:px-10 lg:px-28 py-10 items-center">
        <div className="flex flex-col gap-3">
          <p className="font-bold sm:text-2xl text-4xl text-[#849661]">{t("services")}</p>
          <p className="font-medium text-[#849661]">
            <Link to="/">Home</Link> - <span className="text-[#6B7D4A]">{t("services")}</span>
          </p>
        </div>
        <img
          src={AboutImg}
          alt="About Img"
          className="sm:w-24 md:w-36 lg:w-40"
        />
      </div>
      {/* Second Section */}
      <div className='flex flex-col gap-5 items-center sm:px-5 md:px-10 lg:px-28 sm:py-10 md:py-16 lg:py-24'>
        <div className='flex sm:flex-col flex-row flex-wrap justify-center gap-3 child:rounded-md child:bg-[#6B7D4A] child-hover:bg-[#849661] child:border-none text-white child:duration-300'>
          <button type='submit' className='px-5 py-3 sm:w-full' value="all" onClick={(e) => searchFunction(e)}>{t("servicesButton1")}</button>
          <button type='submit' className='px-5 py-3 sm:w-full' value="surgery" onClick={(e) => searchFunction(e)}>{t("servicesButton2")}</button>
          <button type='submit' className='px-5 py-3 sm:w-full' value="general-dentistry" onClick={(e) => searchFunction(e)}>{t("servicesButton3")}</button>
          <button type='submit' className='px-5 py-3 sm:w-full' value="cosmetic-dentistry" onClick={(e) => searchFunction(e)}>{t("servicesButton4")}</button>
          <button type='submit' className='px-5 py-3 sm:w-full' value="aesthetic-medicine" onClick={(e) => searchFunction(e)}>{t("servicesButton5")}</button>
        </div>
        <div className='grid sm:grid-cols-1 grid-cols-2 gap-5 w-full'>
          {
            Array.from(categoryData).map((data) => {
              return (
                <div key={data.id} className='border border-slate-100 rounded-lg group overflow-hidden flex flex-col fadeInLeft shadow-sm hover:shadow-md duration-300'>
                  {/* Görsel */}
                  <div className='overflow-hidden h-52'>
                    <img src={data.coverImage} alt={data.title} className='w-full h-full object-cover group-hover:scale-110 duration-300'/>
                  </div>
                  {/* İkon + İçerik */}
                  <div className='relative flex flex-col p-5 pt-0'>
                    {/* İkon: görselle metin arasına köprü */}
                    <img
                      src={data.icon}
                      width={60}
                      alt={data.title}
                      className='relative -top-7 left-3 z-10 p-2 rounded-full bg-white shadow shadow-neutral-400 group-hover:bg-[#6B7D4A] border-4 border-white duration-300'
                    />
                    <div className='-mt-4'>
                      <Link to={`/services/${data.id}`} onClick={() => setTypeOfService(data)}>
                        <p className='text-[#849661] text-xl font-bold pb-3 hover:text-[#6B7D4A] duration-200'>{data.title}</p>
                      </Link>
                      <p className='text-sm text-neutral-500 line-clamp-2'>{data.subDescription}</p>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Services