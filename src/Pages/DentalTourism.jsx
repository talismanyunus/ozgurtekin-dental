import {useState} from "react"
import {AboutImg, BlogImage1, BlogImage2, Gallery1, Gallery2, Gallery3, Gallery4, Gallery5, Gallery6, Gallery7, HouseIcon, MedIcon, Plane1Icon, Plane2Icon} from "../assets"
import ScrollAnimation from "react-animate-on-scroll"
import { Link } from "react-router-dom"
import { Trans, useTranslation } from "react-i18next"

const DentalTourism = () => {
  const { t } = useTranslation()
  const [button1, setButton1] = useState(true)
  const [button2, setButton2] = useState(false)
  const [button3, setButton3] = useState(false)
  const [button4, setButton4] = useState(false)

  const changeButtonStatus = e => {
    if (e.target.id === "Family" && button1 === false) {
      setButton1(true)
      setButton2(false)
      setButton3(false)
      setButton4(false)
    } else if (e.target.id === "Cosmetic" && button2 === false) {
      setButton1(false)
      setButton2(true)
      setButton3(false)
      setButton4(false)
    } else if (e.target.id === "CheckUps" && button3 === false) {
      setButton1(false)
      setButton2(false)
      setButton3(true)
      setButton4(false)
    } else if (e.target.id === "Implants" && button4 === false) {
      setButton1(false)
      setButton2(false)
      setButton3(false)
      setButton4(true)
    }
  }
  

  return (
    <div className="w-full flex-col">
      {/* First Section */}
      <div className="flex flex-row justify-between sm:px-5 md:px-10 lg:px-28 py-10 items-center">
        <div className="flex flex-col gap-3">
          <p className="font-bold text-4xl text-[#849661]">{t("dentalTourism")}</p>
          <p className="font-medium text-[#849661]">
            <Link to="/">Home</Link> - <span className="text-[#6B7D4A]">{t("dentalTourism")}</span>
          </p>
        </div>
        <img
          src={AboutImg}
          alt="About Img"
          className="sm:w-24 md:w-36 lg:w-40"
        />
      </div>
      {/* Second Section */}
      <div className="flex sm:flex-col md:flex-col lg:flex-row sm:items-center md:items-center lg:justify-center sm:gap-10 md:gap-14 lg:gap-10 py-10 sm:px-5 md:px-10 lg:px-28">
        <img
          src={BlogImage1}
          alt="About Image Section 1"
          className=" lg:w-2/5"
        />
        <div className="items-center  md:px-16">
          <p className="text-[#849661] sm:text-3xl text-4xl font-bold py-5">
            {t("dentalTourismPage")}
          </p>
          <p className="text-md text-neutral-500">
            {t("dentalTourismPageDescription")}
          </p>
        </div>
      </div>
      {/* DropDowns */}
      <div className="flex sm:flex-col md:flex-col lg:flex-row items-center w-full sm:my-12 md:my-24 lg:my-32 sm:px-5 md:px-10 lg:px-28 gap-10">
        {/* Görsel — sadece lg'de göster */}
        <div className="lg:w-1/2 sm:hidden md:hidden lg:flex lg:justify-end">
          <img
            src={BlogImage2}
            alt="Background Image"
            className="w-full h-[500px] object-cover blur-[1px] rounded-lg"
          />
        </div>
        {/* İçerik */}
        <div className="flex flex-col lg:w-1/2 sm:w-full md:w-full">
          <p className="text-[#6B7D4A] sm:text-sm font-bold">{t("dental")}</p>
          <div className="child:text-[#849661] child:font-bold sm:child:text-2xl md:child:text-4xl lg:child:text-4xl mt-3 mb-10">
            <p>
              <Trans components={{ br: <br className="sm:hidden md:hidden"/> }}>{t("dentalTitle")}</Trans>
            </p>
          </div>
          <div className="flex sm:flex-col md:flex-col gap-5 z-10 mb-10 child:text-white child:rounded-md child-hover:bg-[#6B7D4A] child:px-6 md:child:px-5 child:py-4 md:child:py-2 child:duration-300 md:child:text-2xl">
            <button
              type="button"
              id="Family"
              onClick={e => changeButtonStatus(e)}
              className={button1 ? "bg-[#6B7D4A] flex flex-row items-center gap-2" : "bg-[#849661] flex flex-row items-center gap-2"}
            >
              <img src={Plane1Icon} alt="Travel 1 Icon"/>
              {t("dentalDropdown1Title")}
            </button>
            <button
              type="button"
              id="Cosmetic"
              onClick={e => changeButtonStatus(e)}
              className={button2 ? "bg-[#6B7D4A] flex flex-row items-center gap-2" : "bg-[#849661] flex flex-row items-center gap-2"}
            >
              <img src={HouseIcon} alt="Accomodation Icon"/>
              {t("dentalDropdown2Title")}
            </button>
            <button
              type="button"
              id="CheckUps"
              onClick={e => changeButtonStatus(e)}
              className={button3 ? "bg-[#6B7D4A] flex flex-row items-center gap-2" : "bg-[#849661] flex flex-row items-center gap-2"}
            >
              <img src={Plane2Icon} alt="Travel 2 Icon"/>
              {t("dentalDropdown3Title")}
            </button>
            <button
              type="button"
              id="Implants"
              onClick={e => changeButtonStatus(e)}
              className={button4 ? "bg-[#6B7D4A] flex flex-row items-center gap-2" : "bg-[#849661] flex flex-row items-center gap-2"}
            >
              <img src={MedIcon} alt="Medical Icon"/>
              {t("dentalDropdown4Title")}
            </button>
          </div>
          {/* Button 1 Text */}
          <div className={button1 ? "visible fadeInRight" : "hidden"}>
            <p className="text-[#849661] font-bold text-xl md:text-3xl mb-4">
              {t("dentalDropdown1Title")}
            </p>
            <p className="text-neutral-500 md:text-xl">
              <Trans components={{ br: <br className="sm:hidden md:hidden"/>}}>{t("dentalDropdown1Description")}</Trans>
            </p>
          </div>
          {/* Button 2 Text */}
          <div className={button2 ? "visible fadeInRight" : "hidden"}>
            <p className="text-[#849661] font-bold text-xl md:text-3xl mb-4">
              {t("dentalDropdown2Title")}
            </p>
            <p className="text-neutral-500 md:text-xl">
              <Trans components={{ br: <br className="sm:hidden md:hidden"/> }}>{t("dentalDropdown2Description")}</Trans>
            </p>
          </div>
          {/* Button 3 Text */}
          <div className={button3 ? "visible fadeInRight" : "hidden"}>
            <p className="text-[#849661] font-bold text-xl md:text-3xl mb-4">
              {t("dentalDropdown3Title")}
            </p>
            <p className="text-neutral-500 md:text-xl">
              <Trans components={{ br: <br className="sm:hidden md:hidden"/> }}>{t("dentalDropdown3Description")}</Trans>
            </p>
          </div>
          {/* Button 4 Text */}
          <div className={button4 ? "visible fadeInRight" : "hidden"}>
            <p className="text-[#849661] font-bold text-xl md:text-3xl mb-4">
              {t("dentalDropdown4Title")}
            </p>
            <p className="text-neutral-500 md:text-xl">
              <Trans components={{ br: <br className="sm:hidden md:hidden"/> }}>{t("dentalDropdown4Description")}</Trans>
            </p>
          </div>
        </div>
      </div>
      {/* Countrys Gallery */}
      <ScrollAnimation animateIn="fadeInTop" className="flex flex-col items-center py-10 sm:px-3 md:px-16">
        <p className="sm:text-2xl text-4xl font-bold text-[#849661] sm:text-center">
          {t("dentalGalleryTitle")}
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:px-24 py-14 w-full">
          {[
            { src: Gallery1, label: "Alanya" },
            { src: Gallery2, label: "Antalya" },
            { src: Gallery3, label: "Konyaaltı" },
            { src: Gallery4, label: "Side" },
            { src: Gallery5, label: "Belek" },
            { src: Gallery6, label: "İstanbul" },
            { src: Gallery7, label: "Kapadokya" },
          ].map((item, i) => (
            <div key={i} className="relative group overflow-hidden rounded-lg h-60">
              <img
                src={item.src}
                alt={item.label}
                className="w-full h-full object-cover group-hover:scale-105 duration-500 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300">
                <div className="bg-[#849661] px-6 py-2 rounded">
                  <p className="text-2xl font-bold text-white text-center">{item.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollAnimation>
    </div>
  )
}

export default DentalTourism
