import PropTypes from 'prop-types';

export default function DiaryCont({ date, user }) {
  const formattedDate = new Date(date);
  const year = formattedDate.getFullYear();
  const month = formattedDate.toLocaleString('ko-KR', { month: 'long' });
  const day = formattedDate.getDate();
  return (
    <div className={`flex flex-col ${user === '나' ? `items-start`  : `items-end`} text-white w-5/6 p-6 rounded-2xl`} style={{backgroundColor : '#503E7D'}}>
      <h6>{year}년 {month} {day}일,</h6>
      <div className="title text-center  py-5"><span className='text-2xl'>{user==='나' ? `나의 조각글` : 
      `${user}님으로부터` }</span></div>
      <div className='border-solid border-b-2 border-white w-full'></div>
      <div className="cont py-5">
        <span className='text-base '>요즘 내가 잘 하고 있는건지 이렇게 계속 졸업을 미뤄도 되는 건지 고민이 될 때가 있다.
        주변에 다행히 창업하는 사람들이 있어서 그 사람들을 보면서 안도하기도 하지만, 
        좋은 기업에 취직하는 친구들을 보면 불안하고 조급한 마음도 든다.  내가 너무 늦어지는 건 아닐까, 이렇게 늦게까지 취직 안해도 
        나중에 가정을 꾸리고 결혼하고 하는데 문제가 없을까? 무엇보다 지금 하는 일이 어떻게 끝이 날지 감조차 오지 않는다.?
        </span>   
      </div>
    </div>
  );
}

DiaryCont.propTypes = {
  date: PropTypes.string,
  user: PropTypes.string,
};
