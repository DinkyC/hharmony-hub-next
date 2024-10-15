import Image from 'next/image';

export default function Card({ children, title, desc, photo, alt, PhotoSize=null }) {
   return (
        <div className="card mt-10 w-46 lg:w-[30vw] lg:h-[85vh] glass bg-dark-red">
          <figure className=""><Image className={PhotoSize} src={photo} width={500} height={500} alt={alt}/></figure>
          <div className="h-30 lg:h-5 card-body">
            <h2 className="mb-8 lg:mb-4 mt-0 card-title">{title}</h2>
            <p className='text-lg'>
                {desc}
            </p>
            <div className="card-actions justify-end">
            { children } 
            </div>
          </div>
        </div>
   );
}
