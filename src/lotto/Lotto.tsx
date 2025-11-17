import TailBall from '../component/TailBall';
import TailButton from '../component/TailButton';
import { useState } from 'react';

export default function Lotto() {
  const [numbers, setNumbers] = useState([]);
  const [remainNum, setRemainNum] = useState();
  const [plusString, setplusString] = useState();

  const generateBalls = () => {
    let temp = [];

    // 랜덤 번호 생성
    while (temp.length != 7) {
      let n = Math.floor(Math.random() * 45)+1;
      if (temp.indexOf(n) == -1) {
        temp.push(n);
      }
    }

    // 나머지 숫자 추출
    let remain = temp.pop(6);

    // 남은 배열 정렬
    temp.sort((a,b) => a-b);

    // setUseState
    setNumbers(temp);
    setRemainNum(remain);
    setplusString("+");
  };

  const tagBalls = numbers.map(item => <TailBall 
                          number = {item}
                          key = {item}/>);

  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>
      <div className='w-full h-1/3 
                      flex items-center justify-center flex-wrap'>
        {tagBalls}
        <span className='flex justify-center items-center 
                         text-4xl font-bold p-1'>
           {plusString} 
        </span>
        <TailBall number = {remainNum} />
      </div>
      <TailButton color = {"blue"} caption = {"로또번호생성"} onHandle={generateBalls}/>
    </div>
  )
}
