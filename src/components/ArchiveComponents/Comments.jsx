import PropTypes from 'prop-types';


export default function Comments ({user}){
    return (
        <div className={`flex flex-col ${user === '나' ? `items-end`  : `items-start`} text-white w-5/6 p-6 rounded-2xl`} style={{backgroundColor : '#71648E'}}>
            <div className="title text-center  py-5"><span className='text-2xl'>{user==='나' ? `익명으로부터` : 
            `내가 남긴 말` }</span></div>
            <div className='border-solid border-b-2 border-white w-full'></div>
            <div className="cont py-5">
                <span className='text-base pretendard'>요즘 내가 잘 하고 있는건지 이렇게 계속 졸업을 미뤄도 되는 건지 고민이 될 때가 있다.
                주변에 다행히 창업하는 사람들이 있어서 그 사람들을 보면서 안도하기도 하지만, 
                </span>   
            </div>
        </div>
    )
}

Comments.propTypes = {
    user: PropTypes.string,
  };
  