import Image from 'next/image';
import Banner from '@/public/bannerPortfolio.webp';

function BannerHome() { 
    return (
      <div className='mx-12'>
        <Image src={Banner} alt="Banner" className='h-96 w-full object-cover block object-center rounded-3xl rendering-pixelated' />
      </div>
    );
  }


export { BannerHome }