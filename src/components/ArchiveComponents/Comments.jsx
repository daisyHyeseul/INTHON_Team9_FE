import PropTypes from 'prop-types';


export default function Comments ({items}){
    console.log(items)
    return ( 
        <div className={`flex flex-col ${items.user ? items.user === '나' ? `items-end`  : `items-start` : 'items-center'} text-white w-5/6 p-6 rounded-2xl`} style={{backgroundColor : '#71648E'}}>
            
            {!items.user ? (
                <div className='flex justify-center items-center'>
                    <div className='text-xs font-semibold '>조각글이 답변을 기다리는 중</div>
                </div>
            ) : (
                <>
                    <div className="title text-center  py-5"><span className='text-[#e8dfff] text-xl font-semibold'>{items.user==='나' ? `익명으로부터` : 
                        `내가 남긴 말` }</span>
                    </div>
                    <div className='border-solid border-b-2 border-white w-full'></div>
                    <div className="cont py-5">
                        <span className='text-white text-xs font-normal'> {items.content} </span>   
                    </div>
                </>
            )}
            
 
        </div>
    )
}

Comments.propTypes = {
    items: PropTypes.shape({
        user: PropTypes.string,
        content: PropTypes.string,
    }).isRequired,
};
  
  