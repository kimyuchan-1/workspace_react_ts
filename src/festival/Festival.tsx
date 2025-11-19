import {useState, useEffect} from 'react'
import TailCard from '../component/TailCard'
import { Link } from 'react-router-dom'

export interface FestivalData {
    UC_SEQ: string;
    TITLE: string;
    GUGUN_NM: string;
    ADDR1: string;
    CNTCT_TEL: string;
    HOMEPAGE_URL: string;
    ITEMCNTNTS: string;
    MAIN_IMG_THUMB: string;
    LAT: number;
    LNG: number;
    PLACE: string;
    MAIN_PLACE: string;
}

interface FestivalApiResponse {
    getFestivalKr: {
        item: FestivalData[];
    }
}

export default function Festival() {
    const [fData, setFData] = useState<FestivalData[]>([]);
    const [selectedDistrict, setSelectedDistrict] = useState<FestivalData[]>([]);
    const [cardTags, setCardTags] = useState<React.ReactElement[]>([]);
    const [optionTags, setOptionTags] = useState<React.ReactElement[]>([]);

    const getFetchData = async () => {
        const apiKey = import.meta.env.VITE_APP_API_KEY; 
        const baseUrl = '/dataApi/6260000/FestivalService/getFestivalKr?';
        let url = `${baseUrl}serviceKey=${apiKey}&pageNo=1&numOfRows=41&resultType=JSON`;

        try{
            const resp = await fetch(url);
            const data: FestivalApiResponse = await resp.json();
            const festivalData = await data.getFestivalKr.item;
            setFData(festivalData);

            const temp =  [
            ...new Set(festivalData.map(item => item.GUGUN_NM))
            ].sort();
            const options = temp.map(item => <option key = {item} value  = {item}>{item}</option>);
            setOptionTags(options);

            setSelectedDistrict(festivalData);

        } catch (error) {
            console.log("에러 발생",error);
        }

    };

    const selectDistrict = (e:React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();

        if (e.target.value == '1') {
            setSelectedDistrict(fData);
        } else {
            const temp = fData.filter(item => item.GUGUN_NM === e.target.value);
            setSelectedDistrict(temp);
        }
    };

    useEffect(()=>{
        const tempTags = selectedDistrict.map((item, idx) => 
        <Link to="/festival/content" key = {item.UC_SEQ+idx} state = {{content:item}}>
            <TailCard title={item.TITLE} url={item.MAIN_IMG_THUMB} 
                      location={item.ITEMCNTNTS.split(/[.!?]+/g)[0]+"."+item.ITEMCNTNTS.split(/[.!?]+/g)[1]+"."} keyword={item.PLACE} 
                      keyVal={item.UC_SEQ} key={item.UC_SEQ}/> </Link>);

        setCardTags(tempTags);
    },[selectedDistrict]);

    useEffect(()=>{
        getFetchData();
        
    },[]);

    return (
        <div className='w-full flex flex-col justify-start items-center p-3'>
            <h2 className='text-3xl font-bold m-1'>부산축제정보</h2>
            <select className='border-solid border border-gray-500 
                               m-3 p-1 w-3/10 text-left text-sm rounded-sm'
                    name = "district"
                    onChange={selectDistrict}
                    defaultValue="1"
                    required>
                <option value="1">-- 지역 선택 --</option>
                {optionTags}
            </select>
            <div className='grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-3 pb-3'>
                {cardTags}
            </div>
        </div>
    )
}
