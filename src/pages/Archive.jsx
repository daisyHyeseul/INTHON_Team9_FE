import LoginForm from '../components/ArchiveComponents/loginForm';
import ArchiveComponents from '../components/ArchiveComponents/archiveComp';
import {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';

 
export default function Main()
{
    const itemsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);
    const login = useSelector((state) => state.login.isLoggedIn);
    const phoneNumber = useSelector((state)=>state.user.number)
    document.querySelector('body').classList.remove('grad');
    document.querySelector('body').style.backgroundColor = '#321E5B';
    const [archiveItems, setArchiveItems] = useState([]);
    // const archiveItems = Array.from({ length: 0 }, (_, i) => ({
    //     date: `2024-11-${(i % 2) + 8}`,
    //     isnew: i % 2 === 0,
    //     type: 'film',
    //     summary: '삶의 불확실함 속에서 자신의 길을 찾고자 하는 마음',
    //     writer: '도담',
    //     ai : '로버트 프로스트',
    //         content: '요즘 내가 잘 하고 있는건지 이렇게 계속 졸업을 미뤄도 되는 건지 고민이 될 때가 있다. 주변에 다행히 창업하는 사람들이 있어서 그 사람들을 보면서 안도하기도 하지만, 좋은 기업에 취직하는 친구들을 보면 불안하고 조급한 마음도 든다.  내가 너무 늦어지는 건 아닐까, 이렇게 늦게까지 취직 안해도 나중에 가정을 꾸리고 결혼하고 하는데 문제가 없을까? 무엇보다 지금 하는 일이 어떻게 끝이 날지 감조차 오지 않는다.?',
    //     title: `The Road Not Taken ${i + 1}`
    // }));
    useEffect(()=>{
        if(login)
        {
            const postData = async () => {
                try {
                    const response = await fetch('https://ae78-163-152-3-142.ngrok-free.app/api/v1/post/672f5b969bb2f12630046ac8', {
                      method: 'POST',
                    });
                    
                    if (!response.ok) {
                        throw new Error('데이터 전송에 실패했습니다.');
                    }
                    
                    const result = await response.json();
                    console.log('서버 응답:', result);
                    setArchiveItems(result.data)
                } catch (error) {
                    console.error('요청 오류:', error);
                }
            };
            
            // 함수 호출 예시
            postData();
        }
    },[login])
    
    const totalPages = Math.ceil(archiveItems.length / itemsPerPage);

    // 현재 페이지의 항목 필터링
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = archiveItems.slice(startIndex, startIndex + itemsPerPage);

    // 페이지 변경 함수
    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };
    
 
    return (
        <div className="w-full h-full relative flex justify-center items-center overflow-hidden relative"   style={{ height: '85%' }}>
            <div className={`w-full h-full transition-transform duration-500 ${!login  ? 'translate-x-0' : '-translate-x-full'}`}
                style={{ position: 'absolute', top: 0, left: 0 }}>
                <LoginForm/>
            </div>
            <div className={`archive-grid grid grid-cols-2 justify-between  gap-y-5 overflow-auto transition-transform duration-500 ${login  ? 'translate-x-0 ' : 'translate-x-full'}`}
                style={{ position: 'absolute', top: 0, left: login ? '5%' : '100%', width:'90%' , height:'90%'}}>
                {currentItems.map((item, index) => (
                    <div key={index} className="w-full h-full">
                        <ArchiveComponents item={item} />
                    </div>
                ))}
            </div>

            {/* 페이지네이션 컨트롤 */}
            {login && 
            <div className="pagination-controls flex justify-center gap-4 mt-4 absolute bottom-0">
                <button 
                    onClick={() => handlePageChange(currentPage - 1)} 
                    disabled={currentPage === 1}
                    className="px-3 py-1 bg-gray-300 rounded-xl disabled:opacity-50"
                >
                    이전
                </button>
                <span className="text-white flex justify-center items-center">{currentPage} / {totalPages}</span>
                <button 
                    onClick={() => handlePageChange(currentPage + 1)} 
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 bg-gray-300 rounded-xl disabled:opacity-50"
                >
                    다음
                </button>
            </div>
            }
            
        </div>
    )
 
}
