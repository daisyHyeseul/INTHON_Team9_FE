import DiaryCont from '../components/ViewComponents/DiaryCont';
import Comments from '../components/ViewComponents/Comments';

import { useNavigate } from 'react-router-dom';

import { useState, useEffect } from 'react';

export default function Submitted() {
  const [issent, setIssent] = useState('begin');
  const [comment, setComment] = useState('');
  const navigator = useNavigate();
  const maxChars = 250;
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
  const onsubmit = () => {
    if (comment.length === 0) {
      document.querySelector('.writing-area').classList.add('wrong');
    } else {
      setIssent('end');
    }
  };
  const showMessage = () => {
    setIssent('main');
  };
  const archiveItems = {
    date: '2024-11-09',
    writer: '도담',
    content:
      '요즘 내가 잘 하고 있는건지 이렇게 계속 졸업을 미뤄도 되는 건지 고민이 될 때가 있다. 주변에 다행히 창업하는 사람들이 있어서 그 사람들을 보면서 안도하기도 하지만, 좋은 기업에 취직하는 친구들을 보면 불안하고 조급한 마음도 든다.  내가 너무 늦어지는 건 아닐까, 이렇게 늦게까지 취직 안해도 나중에 가정을 꾸리고 결혼하고 하는데 문제가 없을까? 무엇보다 지금 하는 일이 어떻게 끝이 날지 감조차 오지 않는다.?',
  };

  return (
    <div
      className="flex flex-col justify-start items-center  w-full overflow-hidden relative"
      style={{ height: '85%' }}
    >
      {/* {조각글 도착 화면} */}
      <div
        className={`arriveCont flex flex-col justify-start items-center overflow-auto h-full 
                    w-full transition-transform duration-500 ${
                      issent === 'begin' ? 'translate-x-0' : '-translate-x-full'
                    }`}
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        <div className="w-full flex flex-col justify-center items-center">
          <img className="h-1/6 mb-5" src="../../public/star.png" alt="" />
          <h2 className="text-white text-2xl font-semibold">오늘의 조각글이</h2>
          <h2 className="text-white text-2xl font-semibold mb-5">
            도착했습니다.
          </h2>
          <div className="text-center text-[#e8dfff] text-xs">
            <div className="text-white">누군가의 조각글에 답장을 보내면,</div>
            <div className="text-white">나의 조각글도 누군가에게 닿습니다.</div>
          </div>
        </div>
        <button
          onClick={showMessage}
          className="w-[306px] h-[39px] bg-white rounded-[21px] text-center align-middle text-[#2d1a58] text-xs "
        >
          조각글 열어보기
        </button>
      </div>

      {/* 전송하기 화면 */}
      <div
        className={`arriveCont flex flex-col justify-start items-center gap-5 overflow-auto h-full w-full transition-transform duration-500 
                    ${
                      issent === 'main'
                        ? 'translate-x-0'
                        : issent === 'end'
                        ? '-translate-x-full'
                        : 'translate-x-full'
                    }`}
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        <DiaryCont archiveItems={archiveItems} />
        <Comments
          maxLength={maxChars}
          setComment={setComment}
          mode={'writing'}
          comment={comment}
        />
        <div
          onClick={() => {
            onsubmit();
          }}
          className=" w-5/6 py-2 text-center rounded-3xl text-xs h-[39px] bg-white"
        >
          마음 전달하기
        </div>
      </div>

      {/* 확인 화면 */}
      <div
        className={`arriveCont flex flex-col justify-start items-center overflow-auto h-full 
                    w-full transition-transform duration-500 ${
                      issent === 'end' ? 'translate-x-0' : 'translate-x-full'
                    }`}
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        <div className="w-full flex flex-col justify-center items-center">
          <img className="h-1/6 mb-5" src="../../public/star.png" alt="" />
          <h2 className="text-white text-2xl font-semibold">조각글과 답장이</h2>
          <h2 className="text-white text-2xl font-semibold mb-5">
            전송되었습니다.
          </h2>
          <h5 className="text-white">조각글의 답변이 도착하면</h5>
          <h5 className="text-white">문자로 알려드립니다.</h5>
        </div>
        <button
          onClick={() => navigator('/main')}
          className="w-5/6 h-[39px] bg-white rounded-[21px] text-center align-center"
        >
          확인
        </button>
      </div>
    </div>
  );
}
