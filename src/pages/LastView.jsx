import { useEffect , useState} from 'react';
import { useLocation } from 'react-router-dom';
import DiaryCont from '../components/ViewComponents/DiaryCont';
import Comments from '../components/ArchiveComponents/Comments'
export default function LastView() {
    const location = useLocation();
    const data = location.state; // 전달된 데이터를 가져옴
    const formattedDate = new Date(data.createdDate.split('T')[0]);
    const year = formattedDate.getFullYear();
    const month = formattedDate.toLocaleString('ko-KR', { month: 'long' });
    const day = formattedDate.getDate();
    const [view,setView] = useState('myCont')
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [contentData,setContentData] = useState('');
    const [similarId, setSimilarId] = useState('67301d120ee48950e3a91f31');
    const [comments, setcomments] = useState('');
    const [similardate,setsimilardate]= useState('');
    const [similarWriter,setsimilarWriter]= useState('');
    const [similarCont, setsimilarCont]= useState('');
    const [similarComment, setsimilarComment] = useState('')
    const typeIcons = {
        '글': '/writing_filled.png',
        '영화': '/film_filled.png',
        '드라마': '/film_filled.png',
        '음악': '/music_filled.png',    // 예시: 음악 관련 type
        '그림': '/picture_filled.png',
    };
    const summary = data.authorMessage.split('.')[0] + '.';
    const archiveItemsToUnknown = {
        date: data.createdDate.split('T')[0],
        writer: '나',
        content: contentData,
    };
    const archiveItemsFromUnknown = {
        date: similardate,
        writer: similarWriter, //수정
        content: similarCont, //수정
    };
    const commentItemsFromUnknown = {
        user : comments === '' ? '나' : '',
        content : comments 
    }
    const commentItemsToUnknown = {
        user :  '익명',
        content : similarComment //수정
    }
    const iconSrc = typeIcons[data.category];
    useEffect(()=>{
        document.querySelector('.lastViewTitle').textContent=`${year}년 ${month} ${day}일의 조각글`;
        // const postData = async () => {
        //     try {
        //         const response = await fetch(`https://ae78-163-152-3-142.ngrok-free.app/api/v1/post/similar`, {
        //             method: 'POST'
        //         });
                
        //         if (!response.ok) {
        //             throw new Error('데이터 전송에 실패했습니다.');
        //         }
                
        //         const result = await response.json();
        //         console.log('서버 응답:', result);
        //     } catch (error) {
        //         console.error('요청 오류:', error);
        //     }
        // };
        
        // // 함수 호출 예시
        // postData();
        const postData = async () => {
            try {
                const response = await fetch(`https://ae78-163-152-3-142.ngrok-free.app/api/v1/post/detail/${data.id}`, {
                    method: 'POST'
                });
                
                if (!response.ok) {
                    throw new Error('데이터 전송에 실패했습니다.');
                }
                
                const result = await response.json();
                setContentData(result.data.content)
                setcomments(result.data.comments ? result.data.comments[0] : '')
                result.data.twinPostId ? setSimilarId(result.data.twinPostId) : '';
                console.log('서버 응답:', result);
            } catch (error) {
                console.error('요청 오류:', error);
            }
        };
        
        // 함수 호출 예시
        postData();
    },[])
    useEffect(()=>{
        if(similarId.length>0)
        {
            const postData = async () => {
                try {
                    const response = await fetch(`https://ae78-163-152-3-142.ngrok-free.app/api/v1/post/detail/${similarId}`, {
                        method: 'POST'
                    });
                    
                    if (!response.ok) {
                        throw new Error('데이터 전송에 실패했습니다.');
                    }
                    
                    const result = await response.json();
                    setsimilarComment(result.data.comments ? result.data.comments[0] : '')
                    setsimilarCont(result.data.content)
                    setsimilarWriter('익명')
                    setsimilardate(result.data.createdDate.split('.')[0] + '.')
                
                    console.log('서버 응답:', result);
                } catch (error) {
                    console.error('요청 오류:', error);
                }
            };
            
            // 함수 호출 예시
            postData();
        }
    },[similarId])
    // useEffect(()=>{
    // },[view])
    return (
        <div className='w-full h-full relative flex flex-col items-center p-4 text-white overflow-auto' style={{ backgroundColor: '#321E5B'}}>
            {/* 상단 전환 버튼 */}
            <div className="flex justify-between items-center w-5/6 max-w-md mb-4  rounded-full " style={{  border:'1px solid #7763a5', padding:'3px'}}>
                <button 
                    onClick={() => setView('myCont')}
 
                    className={`flex-1 rounded-full px-4 py-2  transition-all duration-500 ${view === 'myCont' ? `bg-white text-purple-800` : `bg-transparent text-white`} pretendard`}
 
                >
                    나의 조각글
                </button>
                <button 
                    onClick={() => setView('myComment')}
 
                    className={`flex-1 rounded-full px-4 py-2  transition-all duration-500 ${view === 'myComment' ? `bg-white text-purple-800` : `bg-transparent text-white`} pretendard`}
 
                >
                    내가 남긴 말
                </button>
            </div>


            {/* 글 조각 소개 */}
            <div  onClick={() => setIsModalOpen(true)} className="text-center flex flex-col justify-center items-center gap-2 py-3 w-5/6 rounded-xl bg-white/90 text-black" > 
                <img src={iconSrc} alt="type icon" className="h-5 mb-2" />

                <p className="text-xs font-normal m-0 pretendard">{summary}</p>
                <p className="text-xs font-semibold m-0 pretendard">{data.author}</p>

            </div>
 
            <img className='h-16 my-5' src="/star.png" alt="" /> 
            <div className='flex flex-col gap-10 w-full justify-center items-center'>
                <DiaryCont archiveItems={view === 'myCont' ? archiveItemsToUnknown : archiveItemsFromUnknown}></DiaryCont>
                <Comments items={view === 'myCont' ?  commentItemsFromUnknown :commentItemsToUnknown }></Comments>
            </div>
            {/* {모달} */}
            {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 ">
                <div 
                    className="bg-white rounded-lg p-6 w-[257px] h-[354px] text-black text-center relative flex flex-col justify-center items-center gap-5 transform transition-transform duration-300 ease-out"
                    style={{
                        animation: 'scaleUp 0.3s ease-out'
                    }}
                >
                    <button 
                        onClick={() => setIsModalOpen(false)} 
                        className="absolute top-2 right-2 text-lg font-bold "
                    >
                        &times;
                    </button> 
                    <img src={iconSrc} alt="type icon" className="w-[17px] h-[17px]" />
                    <div className=''>
                        <p className='text-sm font-semibold pretendard'>{data.title}</p>
                        <p className='text-xs font-normal pretendard'>{data.author}</p>
                    </div>
                    <div className='border-solid border-2 w-1/3 border-purple-950'></div>
                    <p className='m-3 text-[10px] pretendard'>{data.authorMessage}</p>
                    {/* <p onClick={() => window.open('https://www.poetryfoundation.org/poems/44272/the-road-not-taken', '_blank')} className='w-full bg-purple-950 text-white py-3 rounded-3xl cursor-pointer text-xs font-normal'>더 알아보기</p> */}
 
                </div>
            </div>
            )}
        </div>
    );
}
