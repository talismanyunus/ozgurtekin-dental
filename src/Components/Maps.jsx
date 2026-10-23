import React, {useState, useRef, useEffect} from 'react'
import '@tomtom-international/web-sdk-maps/dist/maps.css';

const Maps = () => {
    const [dimensions, setDimensions] = useState({ width: '500px', height: '500px' })

    useEffect(() => {
        const handleResize = () => {
            const width = Math.max(350, Math.min(window.innerWidth * 0.6, 600))
            const height = Math.max(300, Math.min(window.innerHeight * 0.6, 600))
            setDimensions({ width, height })
        }
        window.addEventListener('resize', handleResize)
        handleResize()
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    // Google Maps embed — API key gerektirmez
    const embedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3189.123456789!2d32.0040!3d36.5440!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDMyJzM4LjQiTiAzMsKwMDAnMTQuNCJF!5e0!3m2!1str!2str!4v1234567890&q=Saray,+Mahmutlar,+Selahattin+Yaman+Cd.+No:7/B,+Alanya"

    return (
        <div className='map-container rounded-lg overflow-hidden border border-gray-200'
             style={{ width: dimensions.width, height: dimensions.height }}>
            <iframe
                title="Klinik Konumu"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=Saray,+Mahmutlar,+Selahattin+Yaman+Cd.+No:7/B,+07450+Alanya/Antalya&output=embed`}
            />
        </div>
    )
}

export default Maps
