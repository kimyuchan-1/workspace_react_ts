import { FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";

export default function Home() {

    return (
        <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="flex items-center justify-center mb-8">
                <FaReact className="text-7xl text-cyan-500 mx-4" />
                <BiLogoTypescript className="text-7xl text-blue-800 mx-4" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Welcome to My React App</h1>
            <p className="text-lg text-gray-600 mb-8">This is a simple application to showcase different features.</p>
        </div>
    )
}
