import LoginForm from '../components/ArchiveComponents/loginForm';
import ArchiveComponents from '../components/ArchiveComponents/archiveComp';

import { useSelector } from 'react-redux';
 
export default function Main()
{

    const login = useSelector((state) => state.login.isLoggedIn);
    document.querySelector('body').classList.remove('grad');
    document.querySelector('body').style.backgroundColor = '#321E5B';

    const archiveItems = [
        {
            date: '2024-11-09',
            isnew: false,
            type: 'film',
            summary: '삶의 불확실함 속에서 자신의 길을 찾고자 하는 마음',
            writer: '도담',
            ai : '로버트 프로스트',
            content: '요즘 내가 잘 하고 있는건지 이렇게 계속 졸업을 미뤄도 되는 건지 고민이 될 때가 있다. 주변에 다행히 창업하는 사람들이 있어서 그 사람들을 보면서 안도하기도 하지만, 좋은 기업에 취직하는 친구들을 보면 불안하고 조급한 마음도 든다.  내가 너무 늦어지는 건 아닐까, 이렇게 늦게까지 취직 안해도 나중에 가정을 꾸리고 결혼하고 하는데 문제가 없을까? 무엇보다 지금 하는 일이 어떻게 끝이 날지 감조차 오지 않는다.?',
            title: 'The Road Not Taken'
        },
        {
            date: '2024-11-09',
            isnew: true,
            type: 'writing',
            summary: '삶의 불확실함 속에서 자신의 길을 찾고자 하는 마음',
            writer: '도담도',
            ai : '로버트 프로스트',
            content: '요즘 내가 잘 하고 있는건지 이렇게 계속 졸업을 미뤄도 되는 건지 고민이 될 때가 있다. 주변에 다행히 창업하는 사람들이 있어서 그 사람들을 보면서 안도하기도 하지만, 좋은 기업에 취직하는 친구들을 보면 불안하고 조급한 마음도 든다.  내가 너무 늦어지는 건 아닐까, 이렇게 늦게까지 취직 안해도 나중에 가정을 꾸리고 결혼하고 하는데 문제가 없을까? 무엇보다 지금 하는 일이 어떻게 끝이 날지 감조차 오지 않는다.?',
            title: 'The Road Not Taken'
        },
        {
            date: '2024-11-09',
            isnew: true,
            type: 'picture',
            summary: '삶의 불확실함 속에서 자신의 길을 찾고자 하는 마음',
            writer: '도담도담',
            ai : '로버트 프로스트',
            content: '요즘 내가 잘 하고 있는건지 이렇게 계속 졸업을 미뤄도 되는 건지 고민이 될 때가 있다. 주변에 다행히 창업하는 사람들이 있어서 그 사람들을 보면서 안도하기도 하지만, 좋은 기업에 취직하는 친구들을 보면 불안하고 조급한 마음도 든다.  내가 너무 늦어지는 건 아닐까, 이렇게 늦게까지 취직 안해도 나중에 가정을 꾸리고 결혼하고 하는데 문제가 없을까? 무엇보다 지금 하는 일이 어떻게 끝이 날지 감조차 오지 않는다.?',
            title: 'The Road Not Taken'
        },
    ];


    return (
        <div className="w-full h-full relative flex justify-center items-center overflow-hidden">
            <div className={`w-full h-full transition-transform duration-500 ${!login  ? 'translate-x-0' : '-translate-x-full'}`}
                style={{ position: 'absolute', top: 0, left: 0 }}>
                <LoginForm/>
            </div>
            <div className={`archive-grid  flex flex-wrap justify-between h-full overflow-auto transition-transform duration-500 ${login  ? 'translate-x-0 ' : 'translate-x-full'}`}
                style={{ position: 'absolute', top: 0, left: login ? '5%' : '100%', width:'90%' }}>
                {archiveItems.map((item, index) => (
                    <ArchiveComponents key={index} item={item} />
                ))}
                
            </div>
        </div>
    )
}
 
