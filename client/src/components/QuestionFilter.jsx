import React from 'react'
import { useAppContext } from '../context/AppContext'

const QuestionFilter = () => {
  const { searchTerm, setSearchTerm } = useAppContext()
  return (
    <div className="mb-1 w-full">
      <p className='font-semibold text-gray-400 uppercase tracking-wider text-[10px] mb-2 text-center'>প্রশ্ন খুঁজুন</p>
      <input
        type="text"
        value={searchTerm}
        placeholder="Search topics or tags..."
        className="w-full px-6 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  )
}

export default QuestionFilter
