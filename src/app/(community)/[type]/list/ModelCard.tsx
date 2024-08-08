import Image, { StaticImageData } from "next/image";

export default function ModelCard({imgLink}:{imgLink: StaticImageData}) {
    return (
        <Image 
            className="w-1/5 p-4 bg-gray-500" 
            src={imgLink}
            alt="Sample image GV70" 
            width={500}
            height={500}
        />
    );
}