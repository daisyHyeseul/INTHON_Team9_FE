import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export default function ArchiveComponents({ item }) {
    const { date, isnew, type, summary, writer, ai, content, title } = item;
    
    // 날짜 포맷
    const formattedDate = new Date(date);
    const year = formattedDate.getFullYear();
    const month = formattedDate.toLocaleString('ko-KR', { month: 'long' });
    const day = formattedDate.getDate();

    const typeIcons = {
        writing: '/public/writing.png',
        film: '/public/film.png',
        music: '/public/music.png',    // 예시: 음악 관련 type
        picture: '/public/picture.png',
    };
    const iconSrc = typeIcons[type];
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/lastview', { state: item });
    };

    return (
        <div
            className="archive-grid h-1/3 mb-5 rounded-3xl p-4 flex flex-col overflow-auto justify-around gap-2"
            style={{ backgroundColor: '#514873', width: '45%' }}
            onClick={handleClick}
        >
            {/* 상단 날짜와 new 태그 */}
            <div className="flex justify-between items-center">
                <div className="text-white flex flex-col">
                    <div className="text-sm">{year}</div>
                    <div className="text-xl font-semibold">
                        {month} {day}일
                    </div>
                </div>
                {isnew && <span className="text-sm text-purple-100 font-semibold">new</span>}
            </div>

            {/* 요약 텍스트 */}
            <div className="text-white text-sm flex items-start flex-col gap-3">
                <img src={iconSrc} alt="type icon" className="h-5" /> {/* 조건부 아이콘 */}
                {summary}
            </div>

            {/* 작가 및 제목 */}
            <div className="text-white">
                <div className="text-sm font-semibold">{ai}</div>
                <div className="text-xs">- {title}</div>
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
