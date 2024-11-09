import { Link } from 'react-router-dom';




export default function  Topbar (){
    return (
        <div className="fixed top-0 w-full bg-slate-400 flex items-center" style={{height : '8%'}}>
            <Link to="/main">
                <span className="text-gray-200  ">뒤로</span>
            </Link>
        </div>
    )
}