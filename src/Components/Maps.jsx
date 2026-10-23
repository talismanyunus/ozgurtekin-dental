import React from 'react'
import '@tomtom-international/web-sdk-maps/dist/maps.css';

const Maps = () => {
    // Google Maps embed — API key gerektirmez
    return (
        <div className='map-container rounded-lg overflow-hidden border border-gray-200'>
            <iframe
                title="Klinik Konumu"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=Mahmutlar,+Selahattin+Yaman+Cd.+No:7/B,+07450+Alanya/Antalya&output=embed`}
            />
        </div>
    )
}

export default Maps
