import {useState} from 'react';
import Maps from '../Components/Maps';
import { SubCategorys } from '../data/Form Data/data.json';
import { SubCategorysItalian } from '../data/Form Data/data.italian.json';
import { SubCategorysTurkish } from '../data/Form Data/data.turkish.json';
import ScrollAnimation from 'react-animate-on-scroll';
import { useTranslation } from 'react-i18next';

const Contact = (props) => {
  const {language} = props
  const { t } = useTranslation()
  const [categoryData, setCategoryData] = useState([])
  const [category, setCategory] = useState(false)

  const nameValidation = (e) => {
    // basic name validation placeholder
  }
  const emailValidation = (e) => {
    // basic email validation placeholder
  }
  const numberValidation = (e) => {
    // basic number validation placeholder
  }


  const categoryFilter = (e) => { 
    if(language === "tr"){
      for(var i = 0;i < SubCategorysTurkish.length;i++){
        if(SubCategorysTurkish[i].category == e.target.value){
          setCategoryData(SubCategorysTurkish[i].subCategorys)
        }
      }
    }else if(language === "it"){
      for(var i = 0;i < SubCategorysItalian.length;i++){
        if(SubCategorysItalian[i].category == e.target.value){
          setCategoryData(SubCategorysItalian[i].subCategorys)
        }
      }
    }else{
      for(var i = 0;i < SubCategorys.length;i++){
        if(SubCategorys[i].category == e.target.value){
          setCategoryData(SubCategorys[i].subCategorys)
        }
      }
    }
  }

  return (
    <div className='flex sm:flex-col md:flex-col lg:flex-row justify-center gap-10 w-full mb-24 sm:px-4 md:px-16 '>
      <form className='sm:w-full lg:w-[38%]  text-white' action="https://formspree.io/f/mbjevbjr" method="POST">
        <div className='flex flex-col child:mb-5 sm:child:px-3 md:child:px-5 lg:child:px-8 pt-8 BackgroundImage'>
          <p className="text-2xl font-bold">{t("formTitle")}</p>
          <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5  '>
            {/* Full Name Field */}
            <input type='text' placeholder={t("formName")} name='Emri Mbiemri' onChange={(e) => nameValidation(e)} className='w-full bg-white bg-opacity-20 border-white border rounded-md pl-3 py-3 placeholder-white text-white sm:text-base' required/>
            {/* Email Field */}
            <input type='email' placeholder={t("formEmail")} name="Adresa Emailit" onChange={(e) => emailValidation(e)} className='w-full bg-white bg-opacity-20 border-white border rounded-md pl-3 py-3 placeholder-white text-white sm:text-base' required/>
            {/* Date Field */}
            <input type='text' placeholder="Date" name="Data e Takimit" onFocus={(e) => (e.target.type = 'date')} onBlur={(e) => (e.target.type = 'text')} className='w-full bg-white bg-opacity-20 border-white border rounded-md pl-3 py-3 placeholder-white text-white sm:text-base' required/>
            {/* Time Field */}
            <input type='text' placeholder={t("formTime")} name="Orari Takimit" onFocus={(e) => (e.target.type = 'time')} onBlur={(e) => (e.target.type = 'text')} className='w-full bg-white bg-opacity-20 border-white border rounded-md pl-3 py-3 placeholder-white text-white sm:text-base' required/>
            {/* Category Field */}
            <select onChange={(e) => {
              categoryFilter(e)
              setCategory(e)
              }} name="Kategoria" className='w-full bg-white bg-opacity-20 border-white border rounded-md pl-3 py-3 text-white sm:text-base'required>
            {
              language === "it"
              ? Array.from(SubCategorysItalian).map(data => (
                  <option className="text-neutral-800" key={data.category} value={data.category}>{data.category}</option>
                ))
              : language === "tr"
              ? Array.from(SubCategorysTurkish).map(data => (
                  <option className="text-neutral-800" key={data.category} value={data.category}>{data.category}</option>
                ))
              : Array.from(SubCategorys).map(data => (
                  <option className="text-neutral-800" key={data.category} value={data.category}>{data.category}</option>
                ))
            }
            </select>
            {/* Service Field */}
            <select name="Sherbimi" className='w-full bg-white bg-opacity-20 border-white border rounded-md pl-3 py-3 text-white sm:text-base' required>
              {
                Array.from(categoryData).map(data => (
                  <option className='text-neutral-800' key={data} value={data}>{data}</option>
                ))
              }
            </select>
          </div>
          <div className='flex flex-col child:mb-5'>
            <input type='Numri Telefonit' name="Phone Number" placeholder={t("formNumber")} onChange={(e) => numberValidation(e)} className='w-full py-3 pl-3 bg-white bg-opacity-20 rounded-md border border-white placeholder-white text-white sm:text-base' required/>
            <textarea placeholder={t("formMessage")} name="Mesazhi " rows={4} className='w-full pl-3 py-3 bg-white bg-opacity-20 border border-white mb-5 rounded-md placeholder-white text-white sm:text-base'/>
          <button type='submit' className='w-full h-16 bg-[#6B7D4A] border-none hover:bg-white hover:text-black duration-300'>Book Appointment</button>
          </div>
        </div>
      </form>
      <div>
        <p className='text-[#6B7D4A] font-medium'>{t("locationTitle")}</p>
        <Maps/>
      </div>
    </div>
  )
}

export default Contact
