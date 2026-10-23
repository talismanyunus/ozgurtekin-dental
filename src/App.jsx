import { Routes,Route } from 'react-router-dom'
import './App.css'
import { Home, About, DentalTourism, Blog, BlogsTypes, Services, ContactPage, ServiceTypes, PrivacyPolicy, TermsConditions } from './Pages/index';
import Navbar from './Components/Navbar';
import { useState, useLayoutEffect, useEffect } from 'react';
import { Logo, Whatsapp } from './assets/index';
import Footbar from './Components/Footbar';
import { defaultLang } from './Components/i18n.js';

function App() {
  const [ loading, setLoading ] = useState(false);
  const [ typeOfService, setTypeOfService ] = useState("");
  const [ blogType, setBlogType ] = useState("");
  const [ language, setLanguage ] = useState(defaultLang);

  // Dil değişince Tawk.to widget dilini güncelle
  useEffect(() => {
    if (window.Tawk_API && window.Tawk_API.setAttributes) {
      window.Tawk_API.setAttributes({ language }, function(){});
    }
  }, [language]);

  useLayoutEffect(() => {
    setLoading(true)
    setTimeout(() => (
      setLoading(false)
    ),2000)
  },[])

  return (
    <div  className="font-roboto">
      {
        loading 
          ? 
            <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
              <img src={Logo} alt='Logo Loading' className='animate-bounce w-56 max-w-[70vw]'/>
            </div>
        
          : 
            <div>
              <Navbar setLanguage={setLanguage}/>
              <Routes>
                <Route path="/" element={<Home language={language}/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/dental-tourism" element={<DentalTourism/>}/>
                <Route path="/blogs" element={<Blog setBlogType={setBlogType} language={language}/>}/>
                <Route path="/blogs/:blogType" element={<BlogsTypes blogType={blogType}/>}/>
                <Route path="/services" element={<Services  setTypeOfService={setTypeOfService} language={language}/>}/>
                <Route path="/services/:serviceType" element={<ServiceTypes typeOfService={typeOfService}/>}/>
                <Route path="/free-quote" element={<ContactPage/>}/>
                <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
                <Route path="/terms-and-conditions" element={<TermsConditions/>}/>
              </Routes>
              <Footbar/>
              <a href="#" onClick={(e) => e.preventDefault()} target='_blank'><img src={Whatsapp} alt="Whatsapp" width={60} className="hover:scale-110 duration-500 cursor-pointer bg-[#25D366] rounded-full fixed bottom-5 z-50 left-6 p-2" /></a>
            </div>
        }
    </div>
  )
}

export default App
