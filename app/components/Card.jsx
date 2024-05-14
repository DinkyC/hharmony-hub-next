import Image from 'next/image';

export default function Card({ children, title, desc, photo, alt }) {
   return (
        <div className="card mt-10 w-46 lg:w-[30vw] glass bg-dark-red">
          <figure className="-mb-28"><Image src={photo} width={500} height={500} alt={alt}/></figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>
                {desc}
            </p>
            <div className="card-actions justify-end">
            { children } 
            </div>
          </div>
        </div>
   );
}
