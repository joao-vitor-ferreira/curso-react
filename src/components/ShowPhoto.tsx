import { Photo } from "@/types/Photo";

type Props = {
    photo: Photo,
    handleClickClose: () => void
}

export const ShowPhoto = ({ photo, handleClickClose }: Props) => {
    return (
        <div className="flex w-full-screen h-full-screen" onClick={handleClickClose}>
            <img 
                src={photo.path} 
                className="w-5/6 mx-auto rounded-md my-5"
                onClick={(e) => e.stopPropagation()}
            />
        </div>
    );
}