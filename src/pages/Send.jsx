import React, { useState } from 'react';
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
            phoneNumber: !phoneNumber,
            nickname: !nickname,
            journalEntry: !journalEntry,
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
                const response = await fetch('https://2d56-163-152-3-142.ngrok-free.app/post/test', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                if (response.ok) {
                    console.log('Data submitted successfully:', formData);
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
        <div className="flex flex-col justify-start items-center w-full min-h-screen bg-gradient-to-b from-purple-900 to-purple-600 p-4" style={{height:'85%'}}>
            <style>{`
                /* 회색 스크롤바 스타일 */
                .custom-scrollbar {
                    overflow-y: scroll;
                    max-height: 200px; /* 컨텐츠 영역 높이를 제한하여 스크롤바 길이 제한 */
                }

                .custom-scrollbar::-webkit-scrollbar {
                    width: 8px; /* 스크롤바 너비 설정 */
                }

                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent; /* 트랙 배경을 투명하게 설정 */
                }

                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background-color: #A0A0A0; /* 스크롤바 색상 (회색) */
                    border-radius: 4px; /* 스크롤바 모서리를 둥글게 */
                    height: 50px;
                }
            `}</style>
            <div className="w-full max-w-3xl space-y-4 p-4">
                <form className="flex flex-col w-full space-y-4">
                    <p className="text-white text-center text-3xl mb-1 font-semibold">
                        11월 9일의 조각글
                    </p>
                    <p className="text-white text-center text-base mb-2">
                        나의 조각글을 남기고 다른 조각글을 받아봐요
                    </p>

                    {/* 전화번호 필드 */}
                    <label className="text-base font-medium text-white">
                        전화번호
                        <span className="text-xs text-gray-200 font-xs ml-2">
                            *전화번호로 비밀번호와 답변 알림을 보내드려요
                        </span>
                    </label>
                    <input
                        id="phone"
                        type="tel"
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                        placeholder="전화번호를 입력해주세요."
                        className={`w-full p-4 rounded-full focus:outline-none ${
                            errors.phoneNumber ? 'ring-2 ring-red-500' : 'focus:ring-2 focus:ring-white'
                        } text-white bg-purple-300 placeholder-white`}
                    />

                    {/* 닉네임 필드 */}
                    <label className="text-base font-medium text-white">
                        닉네임
                    </label>
                    <input
                        id="nickname"
                        type="text"
                        value={nickname}
                        onChange={handleNicknameChange}
                        placeholder="닉네임을 입력해주세요."
                        className={`w-full p-4 rounded-full focus:outline-none ${
                            errors.nickname ? 'ring-2 ring-red-500' : 'focus:ring-2 focus:ring-white'
                        } text-white bg-purple-300 placeholder-white`}
                    />

                    {/* 조각글 필드 */}
                    <label className="text-base font-medium text-white">
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
                            className={`w-full p-4 rounded-3xl focus:outline-none resize-none ${
                                errors.journalEntry ? 'ring-2 ring-red-500' : 'focus:ring-2 focus:ring-white'
                            } text-white bg-purple-300 placeholder-white scroll-smooth custom-scrollbar`}
                    />
                        <div className="absolute bottom-2 right-3 text-white text-sm">
                            {journalEntry.length}/{maxChars}
                        </div>
                    </div>
                </form>

                <button
                    onClick={handleSubmit}
                    className="w-full py-3 bg-white text-black rounded-full text-lg hover:bg-gray-300 transition-colors mt-4"
                >
                    띄워보내기
                </button>
            </div>
        </div>
    );
}
