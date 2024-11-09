import DiaryCont from "../components/ViewComponents/DiaryCont";
import Comments from "../components/ViewComponents/Comments";

import { useNavigate } from 'react-router-dom';

import { useState, useEffect } from "react";

export default function Submitted() {
    const [issent, setIssent] = useState('begin');
    const [comment, setComment] = useState('');

    const navigator = useNavigate();
    useEffect(() => {
        document.querySelector('body').classList.remove('grad');

        if (issent === 'begin') {
            document.querySelector('body').style.backgroundColor = '#3F2763'; 
        } else if (issent === 'main') {
            document.querySelector('body').style.backgroundColor = '#391F60'; 
        } else {
            document.querySelector('body').style.backgroundColor = '#321E5B'; 
        }
    }, [issent]);
    return (
        <div className="flex flex-col justify-start items-center  w-full overflow-hidden relative" style={{height:'85%'}}>
            
            {/* {조각글 도착 화면} */}
            <div
                className={`arriveCont flex flex-col justify-start items-center overflow-auto h-full 
                    w-full transition-transform duration-500 ${issent === 'begin' ? 'translate-x-0' : '-translate-x-full'}`}
                style={{ position: 'absolute', top: 0, left: 0 }}
            >
                <div className="w-full flex flex-col justify-center items-center">
                    <img className="h-1/6 mb-5" src="../../public/star.png" alt="" />
                    <h2 className="text-white text-2xl font-semibold">오늘의 조각글이</h2>
                    <h2 className="text-white text-2xl font-semibold mb-5">도착했습니다.</h2>
                    <h5 className="text-white">누군가의 조각글에 답장을 보내면,</h5>
                    <h5 className="text-white">나의 조각글도 누군가에게 닿습니다.</h5>
                </div>
                <div
                    onClick={() => setIssent('main')}
                    className="w-3/5 py-2 text-center rounded-3xl"
                    style={{ backgroundColor: '#D2D0D9' }}
                >
                    확인
                </div>
            </div>
            
            {/* 전송하기 화면 */}
            <div
                className={`arriveCont flex flex-col justify-start items-center gap-5 overflow-auto h-full w-full transition-transform duration-500 
                    ${issent === 'main' ? 'translate-x-0' : issent === 'end' ? '-translate-x-full' : 'translate-x-full'}`}
                style={{ position: 'absolute', top: 0, left: 0 }}
            >
                {/* <div className="w-5/6">
                    <h1 className="text-white text-2xl">오늘의 조각글이</h1>
                    <h1 className="text-white text-2xl">도착했습니다.</h1>
                </div> */}
                <DiaryCont date={'2024-11-08'} user={'도담'} />
                <Comments setComment={setComment} mode={'writing'} />
                <div
                    onClick={() => setIssent('end')}
                    className="w-3/5 py-2 text-center rounded-3xl"
                    style={{ backgroundColor: '#D2D0D9' }}
                >
                    전송하기
                </div>
            </div>

            {/* 확인 화면 */}
            <div
                className={`arriveCont flex flex-col justify-start items-center overflow-auto h-full 
                    w-full transition-transform duration-500 ${issent === 'end' ? 'translate-x-0' : 'translate-x-full'}`}
                style={{ position: 'absolute', top: 0, left: 0 }}
            >
                <div className="w-full flex flex-col justify-center items-center">
                    <img className="h-1/6 mb-5" src="../../public/star.png" alt="" />
                    <h2 className="text-white text-2xl font-semibold">조각글과 답장이</h2>
                    <h2 className="text-white text-2xl font-semibold mb-5">전송되었습니다.</h2>
                    <h5 className="text-white">조각글의 답변이 도착하면</h5>
                    <h5 className="text-white">문자로 알려드립니다.</h5>
                </div>
                <div
                    onClick={() => navigator('/main')}

                    className="w-3/5 py-2 text-center rounded-3xl"
                    style={{ backgroundColor: '#D2D0D9' }}
                >
                    확인
                </div>
            </div>
        </div>
    );
}
