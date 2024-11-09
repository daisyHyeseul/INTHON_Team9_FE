import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { formatDate } from './dateFromat';
export default function ArchiveComponents({ item }) {
    const { date, isnew, type, summary, writer, ai, content, title } = item;
    
    // 날짜 포맷
    const upComingdDate = formatDate(date);
    const formattedDate = date.replace(/-/g, '.');
    
    const typeIcons = {
        writing: '/writing.png',
        film: '/film.png',
        music: '/music.png',    // 예시: 음악 관련 type
        picture: '/picture.png',
    };
    const iconSrc = typeIcons[type];
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/lastview', { state: item });
    };

    return (
        <div
            className="archive-grid w-[159px] h-[228px] m-auto rounded-3xl py-2 px-3 flex flex-col overflow-auto justify-around gap-2"
            style={{ backgroundColor: '#514873'}}
            onClick={handleClick}
        >
            {/* 상단 날짜와 new 태그 */}
            <div className="flex justify-between items-center">
                <div className="text-white flex flex-col">
                    <div className='text-xl font-bold'>{upComingdDate}</div>
                    <div className='text-[11px] font-semibold'>{formattedDate}</div>
                </div> 
                {isnew && <span className="text-[10px] font-normal text-purple-100 pretendard ">new</span>}
            </div>

            {/* 요약 텍스트 */}
            <div className="text-white text-xs font-normal flex items-start flex-col pretendard gap-3 my-2">
 
                <img src={iconSrc} alt="type icon" className="h-5" /> {/* 조건부 아이콘 */}
                {summary}
            </div>

            {/* 작가 및 제목 */} 
            <div className="text-white w-full">
                <div className="text-xs font-semibold pretendard">{ai}</div>
                <div className="text-xs font-semibold pretendard">- {title}</div>
 
            </div>
        </div>
    );
}

ArchiveComponents.propTypes = {
    item: PropTypes.shape({
        date: PropTypes.string.isRequired,
        isnew: PropTypes.bool.isRequired,
        type: PropTypes.string.isRequired,
        summary: PropTypes.string.isRequired,
        writer: PropTypes.string.isRequired,
        ai: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
};
