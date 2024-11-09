import PropTypes from 'prop-types';
import DiaryCont from './DiaryCont'
import Comments from './Comments'


export default function Diary ({user}){
    return (
        <div className="h-auto w-auto bg-slate-500 rounded-3xl  text-white flex flex-col justify-center items-center">
            <DiaryCont user ={user}></DiaryCont>
            <Comments></Comments>
        </div>
    )
}

Diary.propTypes = {
    user: PropTypes.string.isRequired,
  };
  