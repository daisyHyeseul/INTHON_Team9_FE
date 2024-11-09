import LoginForm from '../components/ArchiveComponents/loginForm';
import ArchiveComponents from '../components/ArchiveComponents/archiveComp';

import { useSelector } from 'react-redux';

export default function Archive() {
  const login = useSelector((state) => state.login.isLoggedIn);
  document.querySelector('body').classList.remove('grad');
  document.querySelector('body').style.backgroundColor = '#321E5B';
  return (
    <div className="w-full h-full relative flex justify-center items-center overflow-hidden">
      <div
        className={`w-full h-full transition-transform duration-500 ${
          !login ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        <LoginForm />
      </div>
      <div
        className={`archive-grid  flex flex-wrap justify-between h-full overflow-auto transition-transform duration-500 ${
          login ? 'translate-x-0 ' : 'translate-x-full'
        }`}
        style={{
          position: 'absolute',
          top: 0,
          left: login ? '5%' : '100%',
          width: '90%',
        }}
      >
        <ArchiveComponents
          date={'2024-11-09'}
          isnew={false}
          type={'film'}
          summary={'삶의 불확실함 속에서 자신의 길을 찾고자 하는 마음'}
          writer={'로버트 프로스트'}
          title={'The Road Not Taken'}
        />
        <ArchiveComponents
          date={'2024-11-09'}
          isnew={true}
          type={'writing'}
          summary={'삶의 불확실함 속에서 자신의 길을 찾고자 하는 마음'}
          writer={'로버트 프로스트'}
          title={'The Road Not Taken'}
        />
        <ArchiveComponents
          date={'2024-11-09'}
          isnew={true}
          type={'picture'}
          summary={'삶의 불확실함 속에서 자신의 길을 찾고자 하는 마음'}
          writer={'로버트 프로스트'}
          title={'The Road Not Taken'}
        />
      </div>
    </div>
  );
}
