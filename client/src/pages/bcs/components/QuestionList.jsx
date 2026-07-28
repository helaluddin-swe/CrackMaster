
import { BCS_Question_List } from '../../../assets/assest'
import { Link } from 'react-router-dom'
import { useAppContext } from '../../../context/AppContext'

const QuestionList = () => {
  const { setDataSource, setSelectedCategory, setSearchTerm } = useAppContext();

  
  const handleDataInitialization = (data) => {
    setDataSource(data);
    setSelectedCategory("All");
    setSearchTerm("");
  };


  return (
    <div className='grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-4 mx-2 py-6'>
      {BCS_Question_List.map((list, index) => (
        <Link 
          key={list._id} 
          onClick={() =>{scrollTo(0,0); handleDataInitialization(list.BCS)}}
          className='relative overflow-hidden group bg-linear-to-br from-cyan-400 to-pink-500 p-6 hover:scale-105 hover:shadow-xl transition-all duration-300 h-48 rounded-2xl border-none text-white flex flex-col justify-between' 
          to={`/question-list/${list._id}/${list.title}`}
        >
          {/* Decorative Background Number */}
          <span className='absolute right-3 -bottom-1 text-white/20 text-8xl font-black italic'>
            {index +44}
          </span>

          <div className='relative z-10'> 
            <p className='absolute -top-7 -right-8 text-white bg-red-400 rounded-lg px-2 font-bold py-1 animate-pulse'>{list.update}</p>
            <div className='bg-white/20 w-fit px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-2 -right-2'>
              Preliminary
            </div>
            <h2 className='text-xl font-bold leading-tight'>
              {list.title.replace(/-/g, ' ')}
            </h2>
          </div>

          <div className='relative z-10 flex items-center gap-2 text-sm font-medium opacity-90'>
            <span>প্রশ্ন ও সমাধান ({list.BCS.length})  </span>
            <span className='group-hover:translate-x-2 transition-transform'>→</span>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default QuestionList