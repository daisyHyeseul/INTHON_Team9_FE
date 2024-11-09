import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Main() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true);
  document.querySelector('body').classList.add('grad');
  useEffect(() => {
    // 1초 후 사라지기 시작
    const fadeOutTimer = setTimeout(() => {
      setIsVisible(false); // 페이드 아웃 시작
    }, 1000);

    // 2초 후 페이지 전환
    const navigateTimer = setTimeout(() => {
      navigate('/send');
    }, 2000);

    // 타이머 정리
    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(navigateTimer);
    };
  }, [navigate]);

  return (
    <div
      className={`w-full h-full flex flex-col gap-5 justify-center items-center transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <img
        className="w-auto"
        style={{ height: '10%' }}
        src="/moon.png"
        alt=""
      />
      <h1 className="text-white font-semibold text-xl">나의 조각집</h1>
      <p className="text-white text-base pretendard">
        나와 닮은 마음을 발견하는 작은 쉼터
      </p>
    </div>
  );
}
