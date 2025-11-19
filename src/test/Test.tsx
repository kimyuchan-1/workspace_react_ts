export default function Test() {
    // 기본 데이터 타입
    let age : number | string = 30;
    let name : string = "K-digital";
    let isStudent : boolean = true;

    // let x : undefined = undefined;
    // let y : null = null;

    let nums : number[] = [1, 2, 3];
    let strs : Array<string> = ["a", "b", "c"];
    let tup : [string, number] = ["Kim", 30];

    // 타입
    type Person = {
        name: string;
        age: number;
    }

    // 인터페이스
    interface Person1 {
        name: string;
        age: number;
    }
    // 타입은 유니온 타입이 가능하지만 인터페이스는 불가 -> 타입을 주로 사용

    let person: Person = {
        name: 'pnu', 
        age: 30
    };

    let person1: Person1 = {
        name: 'pnu', 
        age: 20
    };

    // 리터럴 타입(특정 값만 들어갈 수 있는 타입) | 유니온 타입(| 기호를 사용하여 여러 타입 중 하나를 허용)
    let direction: "left" | "right" =  "left";
    direction = "right";

    type Msg = (msg:string) => string;
/*
    const handleMsg = (msg: string) : string => {
        return msg + "님 반갑습니다."
    };
*/
    const handleMsg: Msg = (msg) => {
        return msg + "님 반갑습니다."
    };

    const handleClick = () : void => {
        console.log("클릭");
        console.log(handleMsg("K-digital"));
    };

    return (
        <div className ="w-full h-screen flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold">TypeScript 기본 문법</h1>
            <ul className="mt-10">
                <li>기본데이터타입 (string) : 이름 {name}</li>
                <li>기본데이터타입 (number) : 나이 {age}</li>
                <li>기본데이터타입 (boolean) : {isStudent ? "학생" : "일반인"}</li>
                <li>배열 (array) : {nums.join(", ")}</li>
                <li>배열 (array) : {strs.join(", ")}</li>
                <li>튜플 (tuple) : 이름 {tup[0]}, 나이 {tup[1]}</li>
                <li>객체 (object) : {person.name}, {person.age}</li>
                <li>객체 (object) : {person1.name}, {person1.age}</li>
                <li>방향 : {direction}</li>
            </ul>
            <div>
                <button className="bg-amber-500 rounded-md text-white p-2 m-1 hover:cursor-pointer"
                        onClick={handleClick}>
                    클릭
                </button>
            </div>
        </div>
    )
}
