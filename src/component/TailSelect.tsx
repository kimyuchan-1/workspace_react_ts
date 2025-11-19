interface TailSelectProps {
    id : string;
    ref : React.RefObject<HTMLSelectElement>;
    title : string;
    opk : string[];
    opv : string[];
    onHandle : () => void;
};

export default function TailSelect({ id, ref, title, opk, opv, onHandle }:TailSelectProps) {

    return (
        <div className="flex flex-col flex-1 max-w-100">
            <label htmlFor={id}
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                {title}
            </label>
            <select id={id}
                ref={ref}
                name={id}
                onChange={onHandle}
                defaultValue=""
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-9/10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="" disabled>{title}을 선택하세요.</option>
                {
                    opk && opk.map((op, idx) => <option key={op+idx} value={op}>
                        {opv[idx]}
                    </option>)
                }
            </select>
        </div>
  )
}