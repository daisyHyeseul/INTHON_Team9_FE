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
      <div className="form-group flex flex-col text-white w-5/6 gap-2">
        <label className="form-label text-base">전화번호</label>
        <input
          type="text"
          placeholder="전화번호를 입력해주세요."
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          className="transition-all duration-100 form-input-tel px-5 py-2 rounded-3xl"
          style={{ backgroundColor: '#463973' }}
        />
      </div>

      <div className="form-group flex flex-col text-white w-5/6 gap-2">
        <label className="form-label  text-base">
          비밀번호{' '}
          <span className="subtext text-xs ml-2 text-purple-200">
            *문자로 전송되었던 비밀번호를 입력해주세요
          </span>
        </label>
        <input
          type="password"
          placeholder="비밀번호를 입력해주세요."
          value={password}
          onChange={handlePasswordChange}
          className="form-input-password px-5 py-2 rounded-3xl"
          style={{ backgroundColor: '#463973' }}
        />
      </div>

      <button
        onClick={isValid}
        className="submit-button text-black w-5/6 bg-white px-5 py-2 rounded-3xl"
      >
        입장하기
      </button>
    </div>
  );
}
