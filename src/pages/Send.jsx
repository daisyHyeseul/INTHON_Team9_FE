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

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newErrors = {
            phoneNumber: !/^\d{10,11}$/.test(phoneNumber), // 정규식으로 폰번호 확인 (예: 010-1234-5678)
            nickname: nickname.trim() === '', // 닉네임이 비어있는지 확인
            journalEntry: journalEntry.trim() === '' // journalEntry가 비어있는지 확인
        };

        setErrors(newErrors);
        // 에러가 없을 때만 폼을 제출
        if (!newErrors.phoneNumber && !newErrors.nickname && !newErrors.journalEntry) {
            const formData = {
                phoneNumber,
                nickname,
                journalEntry,
            };
            try {
                const response = await fetch('https://2d56-163-152-3-142.ngrok-free.app/api/v1/post', {
                    method: 'POST',
                    body: formData,
                });

                const responseData = await response.json();

                if (response.ok) {
                    console.log('Data submitted successfully:', responseData);
                    setPhoneNumber('');
                    setNickname('');
                    setJournalEntry('');
                    navigate('/Submitted');
                } else {
                    console.error('Failed to submit data');
                }
            } catch (error) {
                console.error('Error submitting data:', error);
            }

        }
    };

    return (
        <div className="flex flex-col justify-start items-center w-full h-full bg-transparent px-4" style={{height:'85%'}}>
            <div className=" archive-grid w-full max-w-3xl space-y-4 p-4 overflow-auto">
                <form className="flex flex-col w-full space-y-4 gap-2">
                    <div className='w-full h-full mb-5'>
                        <img className='h-auto w-1/6 m-auto' src="../../public/star.png" alt="" />
                        <p className="text-white text-center text-3xl mb-1 font-semibold">
                            11월 9일의 조각글
                        </p>
                        <p className="text-purple-100 text-center text-base">
                            나의 조각글을 남기고 다른 조각글을 받아봐요
                        </p>
                    </div>

                    {/* 전화번호 필드 */}
                    <label className="text-purple-100 text-sm font-medium ">
                        전화번호
                        <span className=" text-xs ml-2 text-purple-200" >

                            *전화번호로 비밀번호와 답변 알림을 보내드려요
                        </span>
                    </label>
                    <input
                        id="phone"
                        type="tel"
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
 
                        placeholder="ex) 01011112222"
 
                        className={`text-white transition-all duration-100 form-input-tel px-5 py-2 rounded-3xl text-sm outline-none 
                            focus:border-solid focus:border-white focus:border-2  ${errors.phoneNumber ? 'wrong' : ''}`}
                        style={{backgroundColor:'#6C548C'}}
                    />

                    {/* 닉네임 필드 */}
                    <label className="text-sm font-medium text-purple-100">

                        닉네임
                    </label>
                    <input
                        id="nickname"
                        type="text"
                        value={nickname}
                        onChange={handleNicknameChange}
 
                        placeholder="ex) nickname"
 
                        className={`text-white transition-all duration-100 form-input-tel px-5 py-2 rounded-3xl 
                                    ${errors.nickname && nickname==='' ? 'wrong' : ''} text-sm outline-none focus:border-solid focus:border-white focus:border-2`}
                    style={{backgroundColor:'#6C548C'}}
                    />

                    {/* 조각글 필드 */}
                    <label className="text-sm font-medium text-purple-100">

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

                            className={`w-full p-4 rounded-3xl focus:outline-none resize-none focus:border-solid focus:border-white focus:border-2
                            text-white scroll-smooth text-sm ${errors.journalEntry && journalEntry === '' ? 'wrong' : ''}`}
                            style={{backgroundColor:'#6C548C'}}
                            

                    />
                        <div className="absolute bottom-2 right-3 text-white text-sm">
                            {journalEntry.length}/{maxChars}
                        </div>
                    </div>
                </form>

                <button
                    onClick={handleSubmit}

                    className="w-full py-2 bg-white text-black rounded-full text-base "

                >
                    띄워보내기
                </button>
            </div>
        </div>
    );
}

