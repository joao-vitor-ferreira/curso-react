import { Photo } from "@/types/Photo";
import { useState } from "react";
import { ShowPhoto } from "./ShowPhoto";

type Props = {
    photos: Photo[]
}

export const Gallery = ({ photos }: Props) => {
    const [displayingPhoto, setDisplayingPhoto] = useState<Photo|null>();
    const handleClick = (photo: Photo) => {
        setDisplayingPhoto(photo)
    }

    const handleClickClose = () => {
        setDisplayingPhoto(null);
    }

    return (
        <>
            { !displayingPhoto && <>
                <h1 className="py-5 text-3xl font-bold text-center">Fotos Intergalaticas</h1>
                <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    { photos.map( photo => {
                        return <img 
                            key={photo.id} 
                            src={photo.path} 
                            onClick={() => handleClick(photo)}
                            className="cursor-pointer rounded"
                        />
                    })}
                </div>
            </>}
            { displayingPhoto && <>
                <i 
                    className="absolute top-10 right-10 text-white cursor-pointer"
                    onClick={handleClickClose}
                >X</i>
                <ShowPhoto 
                    photo={displayingPhoto} 
                    handleClickClose={handleClickClose}
                /> 
            </>}
        </>
    );
}