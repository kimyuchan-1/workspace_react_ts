const BALLCOLOR = [
    "bg-red-500",
    "bg-orange-500",
    "bg-yellow-500",
    "bg-green-500",
    "bg-blue-500"
] as const;

interface TailBallProps {
    number? : number ;
}

export default function TailBall({number}:TailBallProps) {

    return (
        <div className={`w-18 h-18 rounded-full
                        text-xl font-bold
                        text-white ${BALLCOLOR[Math.floor(number == undefined ? NaN : number/10)]}
                        m-2
                        flex justify-center items-center`}>
            {number}
        </div>
    )
}
