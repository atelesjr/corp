import type { StaticImageData } from 'next/image'
import Image from "next/image";


interface HeroProps {
  imgData: StaticImageData
  imgAlt: string
  title: string
}

export default function Hero({imgData, imgAlt, title}: HeroProps) {
  return(
    <div className='relative h-screen'>
      <div className="absolute -z-10 inset-0">
          <Image 
            src={imgData} 
            alt={imgAlt}
            fill
            style={{ objectFit: 'cover'}}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900" />

      </div>
      <div className='pt-48 flex justify-center items-center'>
        <div className="text-white text-6xl">
          {title}
        </div>test

      </div>
    </div>
  )
}