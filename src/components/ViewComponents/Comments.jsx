import PropTypes from 'prop-types';
import CommentsCont from "./CommentsCont"

export default function Comments ({setComment, mode}){

    return (
    <div className='flex flex-col justify-start items-start text-white w-5/6 rounded-2xl gap-4' >
      <h1 className="text-white text-xl">나의 답장</h1>
      <div className="cont flex flex-col justify-start items-start text-white w-full p-6 rounded-2xl h-auto" style={{backgroundColor:'#5B4C7D'}}>
        <CommentsCont setComment={setComment} mode={mode} comment={'잘했어'}></CommentsCont>
      </div>
    </div>
    )
}

Comments.propTypes = {
  setComment: PropTypes.func,
  mode: PropTypes.string,
};
