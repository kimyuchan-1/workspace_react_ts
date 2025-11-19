interface TailCardProps {
    title: string;
    url: string;
    location: string;
    keyword: string;
    keyVal: string;
}

export default function TailCard({ title, url, location, keyword, keyVal }:TailCardProps) {
    let keywordTags : (React.ReactElement | undefined)[] = keyword.split(", ").map((item, idx) => {
        if (item == "") {
            return;
        }

        return (<span className="inline-block rounded-full bg-gray-200 
                                text-gray-700 text-sm font-semibold
                                mr-2 mb-2 px-3 py-1" key={keyVal + idx}>{item}
                </span>);
    });

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={url} alt={title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <div className="text-gray-700 text-base">{location}</div>
                <div className="pt-4 pb-2">
                    {keywordTags}
                </div>
            </div>
        </div>
    )
}