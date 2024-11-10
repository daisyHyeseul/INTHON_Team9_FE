import DiaryCont from '../components/ViewComponents/DiaryCont';
import Comments from '../components/ViewComponents/Comments';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

export default function Submitted() {
  const [issent, setIssent] = useState('begin');
  const [comment, setComment] = useState('');
  const [archiveItems, setArchiveItems]=useState({})
  const phonenumber= useSelector((state) => state.user.number);
  const data = useSelector((state) => state.post.postId);
  console.log(data)
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
      document.querySelector('.writing-area') ? document.querySelector('.writing-area').classList.add('wrong') : '';
    } else {
      const postData = async () => {
        const formData = new FormData();
        formData.append('commentContent', comment);
        formData.append('phone', phonenumber);
        formData.append('postId', data)
        try {
            const response = await fetch(`https://ae78-163-152-3-142.ngrok-free.app/api/v1/post/detail/${data}`, {
                method: 'POST'
            });
            const result = await response.json();
            if (response.ok) {
                console.log('서버 응답:', result);
                setArchiveItems({
                  date:result.data.createdDate.split('T')[0],
                  writer:'익명',
                  content:result.data.content
                })
                console.log(archiveItems)
            }
            
        } catch (error) {
            console.error('요청 오류:', error);
        }
    };
    
    // 함수 호출 예시
    postData();
      setIssent('end');
    }
  };
  const showMessage = () => {
    const postData = async () => {
      try {
          const response = await fetch(`https://ae78-163-152-3-142.ngrok-free.app/api/v1/post/detail/${data}`, {
              method: 'POST'
          });
          const result = await response.json();
          if (response.ok) {
              console.log('서버 응답:', result);
              setArchiveItems({
                date:result.data.createdDate.split('T')[0],
                writer:'익명',
                content:result.data.content
              })
              console.log(archiveItems)
          }
          
      } catch (error) {
          console.error('요청 오류:', error);
      }
  };
  
  // 함수 호출 예시
  postData();
    setIssent('main');
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
          <img className="h-1/6 mb-5" src="/star.png" alt="" />
          <h2 className="text-white text-2xl font-semibold pretendard">오늘의 조각글이</h2>
          <h2 className="text-white text-2xl font-semibold mb-5 pretendard">
            도착했습니다.
          </h2>
          <div className="text-center text-[#e8dfff] text-xs">
            <div className="text-white pretendard">누군가의 조각글에 답장을 보내면,</div>
            <div className="text-white pretendard">나의 조각글도 누군가에게 닿습니다.</div>
          </div>
        </div>
        <button 
          onClick={showMessage}
          className="w-[306px] h-[39px] bg-white rounded-[21px] text-center align-middle text-[#2d1a58] text-xs pretendard"
 
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
          className=" w-5/6 py-2 text-center rounded-3xl text-xs h-[39px] bg-white pretendard"
 
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
          <img className="h-1/6 mb-5" src="/star.png" alt="" />
          <h2 className="text-white text-2xl font-semibold pretendard">조각글과 답장이</h2>
          <h2 className="text-white text-2xl font-semibold mb-5 pretendard">
            전송되었습니다.
          </h2>
          <h5 className="text-white pretendard">조각글의 답변이 도착하면</h5>
          <h5 className="text-white pretendard">문자로 알려드립니다.</h5>
        </div>
        <button
          onClick={() => navigator('/main')}
          className="w-5/6 h-[39px] bg-white rounded-[21px] text-center align-center pretendard"
        >
          확인
        </button>
      </div>
    </div>
  );
}
