type Props = {
    children: string;
}

export const Card = ({ children }: Props) => {
    return (
        <div className="w-52 h-52 bg-red-400 text-center border">
            { children }
        </div>
    );

}