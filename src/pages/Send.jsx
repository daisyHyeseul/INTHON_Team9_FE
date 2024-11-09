import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

export default function Send() {
  const maxChars = 500;
  const [journalEntry, setJournalEntry] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [nickname, setNickname] = useState('');
  const [errors, setErrors] = useState({
    phoneNumber: false,
    nickname: false,
    journalEntry: false,
  });
  const navigate = useNavigate();

  const currentDate = new Date();
  const formattedDate = `${currentDate.getMonth() + 1}월 ${currentDate.getDate()}일`;

  const handleInputChange = (event) => {
    setJournalEntry(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleNicknameChange = (event) => {
    setNickname(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newErrors = {
      phoneNumber: !/^\d{10,11}$/.test(phoneNumber), // 정규식으로 폰번호 확인 (예: 010-1234-5678)
      nickname: nickname.trim() === '', // 닉네임이 비어있는지 확인
      journalEntry: journalEntry.trim() === '', // journalEntry가 비어있는지 확인
    };

    setErrors(newErrors);
    // 에러가 없을 때만 폼을 제출
    if (
      !newErrors.phoneNumber &&
      !newErrors.nickname &&
      !newErrors.journalEntry
    ) {
      // const formData = {
      //     phoneNumber,
      //     nickname,
      //     journalEntry,
      // };
      navigate('/submitted');
      // try {
      //     const response = await fetch('/api/submit', {
      //         method: 'POST',
      //         headers: {
      //             'Content-Type': 'application/json',
      //         },
      //         body: JSON.stringify(formData),
      //     });

      //     if (response.ok) {
      //         console.log('Data submitted successfully:', formData);
      //         setPhoneNumber('');
      //         setNickname('');
      //         setJournalEntry('');
      //         navigate('/Submitted');
      //     } else {
      //         console.error('Failed to submit data');
      //     }
      // } catch (error) {
      //     console.error('Error submitting data:', error);
      // }
    }
  };

  return (
    <div
      className="flex flex-col justify-start items-center w-full h-full bg-transparent px-4"
      style={{ height: '85%' }}
    >
      <div className="archive-grid w-full max-w-3xl space-y-4 p-4 overflow-auto">
        <form className="flex flex-col items-center w-full space-y-4 gap-2">
          <div className="w-full h-full mb-5">
            <img
              className="h-auto w-1/6 m-auto"
              src="../../public/star.png"
              alt=""
            />
            <p className="text-white text-center text-3xl mb-1 mt-[12px] font-semibold pretendard">
              {formattedDate}의 조각글
            </p>
            <p className="text-purple-100 text-center text-base pretendard">
              나의 조각글을 남기고 다른 조각글을 받아봐요
            </p>
          </div>
          {/* 전화번호 필드 */}
          <div>
            <div className="flex items-center justify-start">
              <label className="text-purple-100 text-xs font-medium pretendard">
                전화번호
              </label>
              <span className="ml-2 text-white/60 text-[10px] font-normal font-['Pretendard Variable'] pretendard">
                *전화번호로 비밀번호와 답변 알림을 보내드려요
              </span>
            </div>
            <input
              id="phone"
              type="tel"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              placeholder="ex) 01011112222"
              className={`text-white transition-all duration-100 form-input-tel mt-[7px] px-5 py-2 text-xs outline-none 
                            focus:border-solid focus:border-white focus:border w-[306px] h-9 bg-[#7763a5]/50 rounded-[18px] ${
                              errors.phoneNumber ? 'wrong' : ''
                            } pretendard`}
              style={{ backgroundColor: '#6C548C' }}
            />
          </div>
          {/* 닉네임 필드 */}
          <div>
            <div className="text-xs font-medium text-purple-100 pretendard">닉네임</div>
            <input
              id="nickname"
              type="text"
              value={nickname}
              onChange={handleNicknameChange}
              placeholder="ex) nickname"
              className={`text-white transition-all duration-100 form-input-tel w-[306px] mt-[7px] h-9 px-5 py-2 rounded-3xl 
                                    ${
                                      errors.nickname && nickname === ''
                                        ? 'wrong'
                                        : ''
                                    } text-xs outline-none focus:border-solid focus:border-white focus:border pretendard`}
              style={{ backgroundColor: '#6C548C' }}
            />
          </div>
          <div>
            {/* 조각글 필드 */}
            <label className="text-xs font-medium text-purple-100 pretendard">
              조각글
            </label>
            <div className="relative w-full">
              <textarea
                id="journal"
                value={journalEntry}
                onChange={handleInputChange}
                placeholder="어떤 이야기든 괜찮아요. 자유롭게 글을 작성해주세요."
                rows="8"
                maxLength={maxChars}
                className={`p-[13px] w-[306px] rounded-[18px] focus:outline-none resize-none  mt-[7px] focus:border-solid focus:border-white focus:border
                            text-white scroll-smooth text-xs ${
                              errors.journalEntry && journalEntry === ''
                                ? 'wrong'
                                : ''
                            } pretendard`}
                style={{ backgroundColor: '#6C548C' }}
              />
              <div className="absolute bottom-4 right-3 text-white/60 text-xs font-normal pretendard">
                {journalEntry.length}/{maxChars}
              </div>
            </div>
          </div>
          <button
            onClick={handleSubmit}
            className="w-[306px] h-[39px] bg-white/80 py-2 text-[#2d1a58] text-xs rounded-full pretendard"
          >
            띄워보내기
          </button>
        </form>
      </div>
    </div>
  );
}
