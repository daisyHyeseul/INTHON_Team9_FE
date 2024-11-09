import { useDispatch } from 'react-redux';
import { toggleLogin } from '../../features/loginSlice';
import { useState } from 'react';
export default function LoginForm() {
  const dispatch = useDispatch();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const isValid = async () => {
    dispatch(toggleLogin());
    // try {
    //     // FormData 생성
    //     const formData = new FormData();
    //     formData.append('phone', phoneNumber);
    //     formData.append('password', password);
    //     // API 요청
    //     const response = await fetch('https://2d56-163-152-3-142.ngrok-free.app/api/v1/user', {
    //         method: 'POST',
    //         body: formData
    //     });

    //     // 응답 처리
    //     const result = await response.json();
    //     if (response.ok) {
    //         console.log(result);
    //         dispatch(setNumber(phoneNumber));
    //         dispatch(toggleLogin());
    //     } else {
    //         console.error('저장 실패:', result);
    //     }
    // } catch (error) {
    //     console.error('API 요청 오류:', error);
    // }
    // 클릭 시 login 상태를 true로 변경
  };

  return (
    <div className="login-form-container w-full h-full flex flex-col justify-center items-center gap-10">
      <div className="form-group flex flex-col text-white  gap-2">
        <label className="text-purple-100 text-xs font-medium ">전화번호</label>
        <input
          type="text"
          placeholder="전화번호를 입력해주세요."
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          className={
            'text-white transition-all duration-100 form-input-tel mt-[7px] px-5 py-2 text-xs outline-none focus:border-solid focus:border-white focus:border w-[306px] h-9 bg-[#7763a5]/50 rounded-[18px]'
          }
        />
      </div>

      <div className="form-group flex flex-col text-white  gap-2">
        <div className="flex items-center justify-start">
          <label className="text-purple-100 text-xs font-medium ">
            비밀번호
            <span className="ml-2 text-white/60 text-[10px] font-normal">
              *문자로 전송되었던 비밀번호를 입력해주세요
            </span>
          </label>
        </div>
        <input
          type="password"
          placeholder="비밀번호를 입력해주세요."
          value={password}
          onChange={handlePasswordChange}
          className="form-input-password px-5 py-2 w-[306px] h-9 bg-[#7763a5]/50 rounded-[18px] "
        />
      </div>
      <button
        onClick={isValid}
        className="w-[306px] h-[39px] bg-white/80 py-2 text-[#2d1a58] text-xs rounded-full"
      >
        입장하기
      </button>
    </div>
  );
}
