import { useState, useEffect } from "react"
import { HelpCircle, CheckCircle2, XCircle } from "lucide-react"
import { useTheme } from "../../context/ThemeContext"

const Mcq = ({ currentSubtopic }) => {
  const { darkMode } = useTheme()
  
  // Track selected answers per question index: { [questionIndex]: optionIndex }
  const [selectedAnswers, setSelectedAnswers] = useState({})

  // Reset selected answers when the subtopic changes
  useEffect(() => {
    setSelectedAnswers({})
  }, [currentSubtopic])

  const handleSelect = (questionIndex, optIdx) => {
    // Prevent changing answer once selected
    if (selectedAnswers[questionIndex] !== undefined) return

    setSelectedAnswers(prev => ({
      ...prev,
      [questionIndex]: optIdx
    }))
  }

  return (
    <div>
      {currentSubtopic?.questions && currentSubtopic.questions.length > 0 && (
        <div className="mt-8 space-y-4">
          <h3 className={`text-sm font-semibold flex items-center space-x-2 ${darkMode ? 'text-slate-200' : 'text-slate-900'}`}>
            <HelpCircle className="w-4 h-4 text-indigo-500" />
            <span>Practice MCQs</span>
          </h3>
          {currentSubtopic.questions.map((q, idx) => {
            const selectedOpt = selectedAnswers[idx]
            const isAnswered = selectedOpt !== undefined

            return (
              <div key={idx} className={`p-4 rounded-xl space-y-3 border ${
                darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
              }`}>
                <p className={`text-xs font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                  {idx + 1}. {q.questionText}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {q.options.map((opt, optIdx) => {
                    let btnStyle = darkMode 
                      ? 'bg-slate-950 border-slate-800 text-slate-300 hover:border-indigo-500 hover:text-white' 
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-indigo-500 hover:bg-slate-100/50'

                    let icon = null

                    if (isAnswered) {
                      if (optIdx === q.correctOptionIndex) {
                        // Correct option
                        btnStyle = 'bg-emerald-500/10 border-emerald-500 text-emerald-500 font-medium'
                        icon = <CheckCircle2 className="w-4 h-4 text-emerald-500 ml-auto shrink-0" />
                      } else if (optIdx === selectedOpt) {
                        // Wrong selected option
                        btnStyle = 'bg-rose-500/10 border-rose-500 text-rose-500 font-medium'
                        icon = <XCircle className="w-4 h-4 text-rose-500 ml-auto shrink-0" />
                      } else {
                        // Unselected other options after answering
                        btnStyle = darkMode 
                          ? 'bg-slate-950/40 border-slate-800/50 text-slate-500 opacity-60' 
                          : 'bg-slate-50/50 border-slate-200/50 text-slate-400 opacity-60'
                      }
                    }

                    return (
                      <button 
                        key={optIdx} 
                        onClick={() => handleSelect(idx, optIdx)}
                        disabled={isAnswered}
                        className={`text-left p-2.5 rounded-lg text-xs transition-all border flex items-center justify-between ${btnStyle}`}
                      >
                        <span>{opt}</span>
                        {icon}
                      </button>
                    )
                  })}
                </div>
                {isAnswered && (
                  <div className={`text-[11px] font-medium pt-1 ${
                    selectedOpt === q.correctOptionIndex ? 'text-emerald-500' : 'text-rose-500'
                  }`}>
                    {selectedOpt === q.correctOptionIndex ? 'Correct! Well done.' : 'Incorrect. The correct answer is highlighted above.'}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Mcq