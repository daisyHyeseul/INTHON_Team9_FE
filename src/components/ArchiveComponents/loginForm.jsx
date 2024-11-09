
import { useDispatch } from 'react-redux';
import { toggleLogin } from '../../features/loginSlice';


export default function LoginForm (){

    const dispatch = useDispatch();
    const isValid = () => {
        dispatch(toggleLogin()); // 클릭 시 login 상태를 true로 변경
    };

    return (
        <div className="login-form-container w-full h-full flex flex-col justify-center items-center gap-10">
            <div className="form-group flex flex-col text-white w-5/6 gap-2">
                <label className="form-label text-base pretendard">전화번호</label>
                <input
                    type="text"
                    placeholder="전화번호를 입력해주세요."
                    className="transition-all duration-100 form-input-tel px-5 py-2 rounded-3xl pretendard"
                    style={{backgroundColor:'#463973'}}
                />
            </div>

            <div className="form-group flex flex-col text-white w-5/6 gap-2">
                <label className="form-label  text-base pretendard">비밀번호 <span className="subtext text-xs ml-2 text-purple-200 pretendard">*문자로 전송되었던 비밀번호를 입력해주세요</span></label>
                <input
                    type="password"
                    placeholder="비밀번호를 입력해주세요."
                    className="form-input-password px-5 py-2 rounded-3xl pretendard"
                    style={{backgroundColor:'#463973'}}
                />
            </div>

            <button onClick={isValid} className="submit-button text-black w-5/6 bg-white px-5 py-2 rounded-3xl pretendard">입장하기</button>
        </div>
    )
}


  