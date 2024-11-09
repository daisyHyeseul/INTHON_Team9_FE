import PropTypes from 'prop-types';


export default function Comments ({items}){
    return (
        <div className={`flex flex-col ${items.user === '나' ? `items-end`  : `items-start`} text-white w-5/6 p-6 rounded-2xl`} style={{backgroundColor : '#71648E'}}>
            <div className="title text-center  py-5"><span className='text-2xl'>{items.user==='나' ? `익명으로부터` : 
            `내가 남긴 말` }</span></div>
            <div className='border-solid border-b-2 border-white w-full'></div>
            <div className="cont py-5">
                <span className='text-base '> {items.content}
                </span>   
            </div>
        </div>
    )
}

Comments.propTypes = {
    items: PropTypes.shape({
        user: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
    }).isRequired,
};
  
  