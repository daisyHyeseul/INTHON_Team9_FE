
import Diary from '../components/ViewComponents/Diary'
import Topbar from '../components/ViewComponents/Topbar'
import { useSelector } from 'react-redux';
import { useState , useEffect} from 'react';
export default function View()
{
    const player=useSelector((user)=>user.user.value);
    const [writer, setWriter] = useState(player)
    return (
        <div className='h-full w-full flex flex-col justify-end items-center '>
            <Topbar></Topbar>
            <div className='diaryCont flex flex-col gap-5' style={{height: '90%', overflow:'auto'}}>
                <div className='flex w-full justify-evenly items-center'>
                    <div className='bg-gray-300 p-5 rounded-3xl w-1/3 text-center'>내가 남긴 글</div>
                    <div className='bg-gray-300 p-5 rounded-3xl w-1/3 text-center'>내가 남긴 답글</div>
                </div>
                {writer === '나' &&
                    <Diary user={player}></Diary>
                }
                {writer !== '나' &&
                    <Diary user={'별명'}></Diary>
                }
            </div>
        </div>
    )
}