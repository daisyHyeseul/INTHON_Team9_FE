import { useEffect , useState} from 'react';
import { useLocation } from 'react-router-dom';
import DiaryCont from '../components/ViewComponents/DiaryCont';
import Comments from '../components/ArchiveComponents/Comments'
export default function LastView() {
    const location = useLocation();
    const data = location.state; // 전달된 데이터를 가져옴
    const formattedDate = new Date(data.date);
    const year = formattedDate.getFullYear();
    const month = formattedDate.toLocaleString('ko-KR', { month: 'long' });
    const day = formattedDate.getDate();
    const typeIcons = {
        writing: '/public/writing_filled.png',
        film: '/public/film_filled.png',
        music: '/public/music_filled.png',    // 예시: 음악 관련 type
        picture: '/public/picture_filled.png',
    };
    const iconSrc = typeIcons[data.type];
    const [view,setView] = useState('myCont')
    const [isModalOpen, setIsModalOpen] = useState(false);
    useEffect(()=>{
        document.querySelector('.lastViewTitle').textContent=`${year}년 ${month} ${day}일의 조각글`;
    },[])
    return (
        <div className='w-full h-full relative flex flex-col items-center p-4 text-white overflow-auto' style={{ backgroundColor: '#321E5B' }}>
            {/* 상단 전환 버튼 */}
            <div className="flex justify-between items-center w-5/6 max-w-md mb-4 border-solid border-2 border-purple-200 rounded-full p-1">
                <button 
                    onClick={() => setView('myCont')}
                    className={`flex-1 rounded-full px-4 py-2 font-semibold transition-all duration-500 ${view === 'myCont' ? `bg-white text-purple-800` : `bg-transparent text-white`}`}
                >
                    나의 조각글
                </button>
                <button 
                    onClick={() => setView('myComment')}
                    className={`flex-1 rounded-full px-4 py-2 font-semibold transition-all duration-500 ${view === 'myComment' ? `bg-white text-purple-800` : `bg-transparent text-white`}`}
                >
                    내가 남긴 말
                </button>
            </div>


            {/* 글 조각 소개 */}
            <div  onClick={() => setIsModalOpen(true)} className="text-center mb-6 flex flex-col justify-center items-center gap-2 py-3 w-5/6 rounded-2xl text-black" style={{backgroundColor :'#D4D2D9'}}> 
                <img src={iconSrc} alt="type icon" className="h-5 mb-2" />
                <p className="text-xs font-semibold m-0">{data.summary}</p>
                <p className="text-xs font-semibold m-0">{data.writer} - {data.title}</p>
            </div>
            <img className='h-16' src="../../public/star.png" alt="" />
            <div className='flex flex-col gap-10 justify-center items-center'>
                <DiaryCont date={'2024-11-09'} user ={view === 'myCont' ? '나' : '도담'}></DiaryCont>
                <Comments user ={view === 'myCont' ? '나' : '도담'}></Comments>
            </div>
            {/* {모달} */}
            {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                <div 
                    className="bg-white rounded-lg p-6 w-5/6 max-w-md h-auto text-black text-center relative flex flex-col justify-center items-center gap-5 transform transition-transform duration-300 ease-out"
                    style={{
                        animation: 'scaleUp 0.3s ease-out'
                    }}
                >
                    <button 
                        onClick={() => setIsModalOpen(false)} 
                        className="absolute top-2 right-2 text-lg font-bold"
                    >
                        &times;
                    </button>
                    <img src={iconSrc} alt="type icon" className="w-1/6" />
                    <div>
                        <p className='font-semibold'>{data.title}</p>
                        <p>{data.writer}</p>
                    </div>
                    <div className='border-solid border-2 w-1/3 border-purple-950'></div>
                    <p className='m-3'>저는 두 갈래 길 앞에서 늘 고민하며, 어느 쪽이 맞는 길일지 몰라 방황했어요. 
                        그래서 이 시를 통해 선택의 어려움과 혼란을 표현하고자 했습니다. 각자의 길은 다 다르고, 
                        내가 걷는 길도 결국 나만의 이야기를 만들어 주더군요. 남들과 다른 속도와 방향이지만, 그 길을 믿고 가세요. 
                        지금도 충분히 잘하고 계십니다.</p>
                    <p onClick={() => window.open('https://www.poetryfoundation.org/poems/44272/the-road-not-taken', '_blank')} className='w-full bg-purple-950 text-white py-3 rounded-3xl cursor-pointer'>더 알아보기</p>
                </div>
            </div>
            )}
        </div>
    );
}