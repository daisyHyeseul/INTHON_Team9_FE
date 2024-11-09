import PropTypes from 'prop-types';
import { useRef } from 'react';

// eslint-disable-next-line react/prop-types
export default function CommentsCont({ setComment, maxLength, mode, comment }) {
  const textareaRef = useRef(null);

  const handleInput = () => {
    const textarea = textareaRef.current;
    textarea.style.height = 'auto'; // 높이 초기화
    textarea.style.height = `${textarea.scrollHeight}px`; // 내용에 맞춰 높이 설정
    setComment(textarea.value);
  };

 
  return (
    <div className="w-full">
      {mode === 'writing' ? (
        <textarea
          ref={textareaRef}
          onInput={handleInput}
          maxLength={maxLength}
          className="bg-transparent outline-none w-full h-auto resize-none"
          placeholder="나를 닮은 그 사람에게 해주고 싶은 말을 적어주세요."
        />
      ) : (
        <p>{comment}</p>
      )}
    </div>
  ); 
}

CommentsCont.propTypes = {
  setComment: PropTypes.func,
  mode: PropTypes.string,
  comment: PropTypes.string.isRequired,
};
