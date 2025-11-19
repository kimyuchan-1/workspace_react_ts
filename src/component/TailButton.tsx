const BTStyle = {
    blue: {
        base: "bg-blue-500",
        hover: "hover:bg-blue-600"
    },
    orange: {
        base: "bg-orange-500",
        hover: "hover:bg-orange-600"
    },
    lime: {
        base: "bg-lime-500",
        hover: "hover:bg-lime-600"
    },
    yellow: {
        base: "bg-yellow-300",
        hover: "hover:bg-yellow-500"
    }
} as const;

interface TailButtonProps {
    color: keyof typeof BTStyle;
    caption: string;
    onHandle?: (e:React.MouseEvent<HTMLButtonElement>) => void;
}


export default function TailButton({ color, caption, onHandle }:TailButtonProps) {
    const btst = BTStyle[color];

    return (
        <div>
            <button className={`${btst.base} text-white 
                                rounded-md ${btst.hover} hover:font-bold
                                px-4 py-2 m-2 w-9/10
                                cursor-pointer select-none`}
                onClick={onHandle}>
                {caption}
            </button>
        </div>
    )
}
