import { useTheme } from "../../context/ThemeContext"

const LogoUpdated = ({onNavigate}) => {
  const {darkMode}=useTheme()
  return (
    <div className="flex flex-col cursor-pointer group shrink-0" onClick={() => onNavigate('/')}>
      <h1 className={`text-xl md:text-2xl font-black tracking-tight transition-colors duration-300 ${darkMode
          ? "text-white group-hover:text-indigo-400"
          : "text-slate-900 group-hover:text-indigo-600"
        }`}>
        Preli<span className={darkMode ? "text-indigo-500" : "text-indigo-600"}>Master</span>
      </h1>
      <p className={`text-[9px] uppercase tracking-[0.2em] font-bold -mt-1 ${darkMode ? "text-slate-400" : "text-slate-500"
        }`}>
        Exam & Career Preparation
      </p>
    </div>
  )
}
export default LogoUpdated