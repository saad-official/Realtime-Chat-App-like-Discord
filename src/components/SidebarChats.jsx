import { FaHashtag } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { setChannel } from '../features/chatSlice';
const SidebarChats = ({ id, name }) => {
    const dispatch = useDispatch();
  return (
      <div className='flex space-x-2 px-2 mb-2 text-[20px] items-center hover:bg-slate-900 justify-start py-2 cursor-pointer' onClick={() => {
          dispatch(setChannel({channelId:id, channelName:name}))
      }}>
          {/* <HashtagIcon className='' /> */}
          <FaHashtag size='20' />
          <h5 className='text-slate-300'>{name}</h5>
      </div>
  )
}

export default SidebarChats