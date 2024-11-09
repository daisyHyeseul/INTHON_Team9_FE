import { useNavigate } from 'react-router-dom';
export default function Topbar() {
  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleGoBack = () => {
    navigate(-1); // 이전 페이지로 이동
  };
  return (
    <div
      className="fixed top-0 w-full bg-slate-400 flex items-center  cursor-pointer"
      style={{ height: '8%' }}
    >
      <button onClick={handleGoBack} className="text-gray-200">
        뒤로
      </button>
    </div>
  );
}
