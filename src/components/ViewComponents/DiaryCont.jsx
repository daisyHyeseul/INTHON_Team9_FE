import { comment } from 'postcss';
import PropTypes from 'prop-types';

export default function DiaryCont({ archiveItems }) {
  const {date, writer, content} = archiveItems
  const formattedDate = new Date(date);
  const year = formattedDate.getFullYear();
  const month = formattedDate.toLocaleString('ko-KR', { month: 'long' });
  const day = formattedDate.getDate();
  return (
    <div className={`flex flex-col ${writer === '나' ? `items-start`  : `items-end`} text-white w-5/6 p-6 rounded-2xl`} style={{backgroundColor : '#503E7D'}}>
      <h6>{year}년 {month} {day}일,</h6>
      <div className="title text-center  py-5"><span className='text-2xl'>{writer==='나' ? `나의 조각글` : 
      `${writer}님으로부터` }</span></div>
      <div className='border-solid border-b-2 border-white w-full'></div>
      <div className="cont py-5">
        <span className='text-base '> {content}
        </span>   
      </div>
    </div>
  );
}

DiaryCont.propTypes = {
  archiveItems: PropTypes.shape({
      date: PropTypes.string.isRequired,
      writer: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
  }).isRequired,
};

