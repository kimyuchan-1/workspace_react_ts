import { useLocation, useNavigate } from 'react-router-dom'
import TailButton from '../component/TailButton';
import type { FestivalData } from './Festival';

export default function FestivalContent() {
    const location = useLocation();
    const content:FestivalData = location.state.content;

    const navigate = useNavigate();
    const handleHome = () => {
        navigate(`/festival`);
    }

    const kakaoMapUrl = `https://map.kakao.com/link/map/${content?.MAIN_PLACE.replace(',', '').replace(' ', '')},${content?.LAT},${content?.LNG}`;
    const handleMap = () => {
        window.open(kakaoMapUrl);
    }

    return (
        <div className='w-full flex flex-col justify-center items-center '>
            <div className='text-4xl font-bold p-3 m-3'>{content.TITLE}</div>
            <div className='w-full flex flex-col md:flex-col lg:flex-row justify-center items-center '>
                <img src={content.MAIN_IMG_THUMB} alt={content.TITLE}
                    className='h-4/5 rounded-md m-2 w-4/5 sm:w-4/5 sm:h-4/5 lg:w-3/5 lg:h-3/5 xl:w-4/5 xl:h-4/5' />
                <table className='w-4/5 lg:w-2/5 p-2 rounded-md shadow-lg m-1 table-fixed'>
                    <tbody className='m-3'>
                        <tr>
                            <td className='text-gray-600 p-2 w-1/4 text-right'>
                                축제구분
                            </td>
                            <td className='text-black font-bold p-2 break-all'>
                                {content.GUGUN_NM}
                            </td>
                        </tr>
                        <tr>
                            <td className='text-gray-600 p-2 w-1/4 text-right'>
                                주소
                            </td>
                            <td className='text-black font-bold flex flex-row items-center p-2'>
                                {content.ADDR1 == "" ? "주소 없음" : content.ADDR1}&nbsp;
                                <TailButton color="yellow" caption="카카오지도보기" onHandle={handleMap} />
                            </td>
                        </tr>
                        <tr>
                            <td className='text-gray-600 p-2 w-1/4 text-right'>
                                연락처
                            </td>
                            <td className='text-black font-bold p-2'>
                                {content.CNTCT_TEL == "" ? "연락처 없음" : content.CNTCT_TEL}
                            </td>
                        </tr>
                        <tr>
                            <td className='text-gray-600 p-2 w-1/4 text-right'>
                                홈페이지
                            </td>
                            <td className='text-black font-bold p-2 break-all'>
                                {content.HOMEPAGE_URL == "" ? "홈페이지 없음" : (<a href={content.HOMEPAGE_URL} className='hover:cursor-pointer hover:underline select-none'>{content.HOMEPAGE_URL}</a>)}
                            </td>
                        </tr>
                        <tr>
                            <td className='text-gray-600 p-2 w-1/4 text-right'>
                                상세내용
                            </td>
                            <td className='text-black font-bold p-2 break-all'>
                                {content.ITEMCNTNTS.split(/[.!?]+/g).slice(0, 11).join(".")}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='p-3 m-3'>
                <TailButton color="blue" caption="목록으로" onHandle={handleHome} />
            </div>
        </div>
    )
}
