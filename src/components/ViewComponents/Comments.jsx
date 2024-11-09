import PropTypes from 'prop-types';
import CommentsCont from './CommentsCont';

 
// eslint-disable-next-line react/prop-types
export default function Comments({ comment, setComment, maxLength, mode }) {
  return (
    <div className="flex flex-col justify-start items-start text-white w-5/6 rounded-2xl ">
      <h1 className="text-[#e8dfff] text-xs font-normal mb-[8px] pretendard">나의 답장</h1>
      <div className="cont flex flex-col justify-start items-start w-full bg-[#7763a5]/50 rounded-[18px] p-4 h-[158px] text-white text-xs font-normal">
        <CommentsCont
          setComment={setComment}
          mode={mode}
          comment={'잘했어'}
          maxLength={maxLength}
        ></CommentsCont>
 
      </div>

      {/* <div className="absolute bottom-0 text-white/60 text-xs font-normal">
        {comment.length}/{maxLength}
      </div> */}
    </div>
  );
}

Comments.propTypes = {
  setComment: PropTypes.func,
  mode: PropTypes.string,
};
