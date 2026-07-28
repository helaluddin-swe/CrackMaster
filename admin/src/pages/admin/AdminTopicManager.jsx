import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  Plus, 
  Trash2, 
  CheckCircle2, 
  Loader2, 
  BookOpen, 
  Eye, 
  Code, 
  Layers, 
  RefreshCw, 
  Highlighter,
  AlertCircle,
  Circle,
  PlusCircle,
  Lightbulb,
  X,
  HelpCircle
} from 'lucide-react';
import { useAppContext } from '../../context/AppContext';
import { useTheme } from '../../context/ThemeContext';

export default function AdminTopicManager() {
  const { darkMode } = useTheme();
  const { backendUrl } = useAppContext();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  // Database Data State
  const [dbCourses, setDbCourses] = useState([]);
  const [selectedCourseData, setSelectedCourseData] = useState(null);

  const defaultRichHTML = `
<article>
  <header>
    <h1>বাংলা সাহিত্য: চর্যাপদ ও শ্রীকৃষ্ণকীর্তন</h1>
    <p><b>চর্যাপদ</b> হলো বাংলা ভাষার প্রাচীনতম কাব্য নিদর্শন।</p>
  </header>
  <section>
    <h2>গুরুত্বপূর্ণ আবিষ্কার</h2>
    <p>অধিক তথ্যের জন্য ভিজিট করুন: <a href="https://bn.wikipedia.org" target="_blank" rel="noopener noreferrer">উইকিপিডিয়া</a></p>
  </section>
</article>
  `.trim();

  // Unified Form State
  const [formData, setFormData] = useState({
    slug: 'bangla',
    title: 'বাংলা সাহিত্য ও ব্যাকরণ',
    chapterId: 'ch-bangla-1',
    chapterTitle: 'অধ্যায় ১: প্রাচীন ও মধ্যযুগ',
    topicId: 'top-bangla-1',
    topicTitle: '১.১ চর্যাপদ ও শ্রীকৃষ্ণকীর্তন',
    subtopics: [
      {
        id: 'sub-bangla-1',
        title: 'চর্যাপদের আবিষ্কার ও কবিগণ',
        content: defaultRichHTML,
        duration: '১২ মিনিট পঠন',
        completed: false,
        questions: [
          {
            questionText: 'চর্যাপদ কে আবিষ্কার করেন?',
            options: ['ড. সুনীতিকুমার চট্টোপাধ্যায়', 'হরপ্রসাদ শাস্ত্রী', 'ড. মুহম্মদ শহীদুল্লাহ', 'সুকুমার সেন'],
            correctOptionIndex: 1,
            explanation: '১৯০৭ সালে মহামহোপাধ্যায় হরপ্রসাদ শাস্ত্রী নেপালের রাজদরবারের গ্রন্থশালা থেকে চর্যাপদের পুঁথি আবিষ্কার করেন।'
          }
        ]
      }
    ]
  });

  const subjectsList = [
    { name: "বাংলা সাহিত্য", slug: "bangla" },
    { name: 'ইংরেজি ভাষা ও সাহিত্য', slug: "english" },
    { name: 'গাণিতিক যুক্তি', slug: "math" },
    { name: 'বাংলাদেশ বিষয়াবলি', slug: "bd-affairs" },
    { name: 'আন্তর্জাতিক বিষয়াবলি', slug: "intl-affairs" },
    { name: 'সাধারণ বিজ্ঞান', slug: "general-science" },
    { name: 'কম্পিউটার ও তথ্যপ্রযুক্তি', slug: "computer-technology" },
    { name: 'মানসিক দক্ষতা', slug: "mental-ethics" },
    { name: 'সুশাসন ও নৈতিকতা', slug: "ethics" },
  ];

  const htmlTags = [
    { label: 'html', open: '<html>\n', close: '\n</html>' },
    { label: 'head', open: '<head>\n', close: '\n</head>' },
    { label: 'title', open: '<title>', close: '</title>' },
    { label: 'meta desc', open: '<meta name="description" content="">', close: '' },
    { label: 'link canon', open: '<link rel="canonical" href="">', close: '' },
    { label: 'body', open: '<body>\n', close: '\n</body>' },
    { label: 'header', open: '<header>\n', close: '\n</header>' },
    { label: 'nav', open: '<nav>\n', close: '\n</nav>' },
    { label: 'main', open: '<main>\n', close: '\n</main>' },
    { label: 'article', open: '<article>\n', close: '\n</article>' },
    { label: 'section', open: '<section>\n', close: '\n</section>' },
    { label: 'h1', open: '<h1>', close: '</h1>' },
    { label: 'h2', open: '<h2>', close: '</h2>' },
    { label: 'h3', open: '<h3>', close: '</h3>' },
    { label: 'p', open: '<p>', close: '</p>' },
    { label: 'strong', open: '<strong>', close: '</strong>' },
    { label: 'em', open: '<em>', close: '</em>' },
    { label: 'ul', open: '<ul>\n  ', close: '\n</ul>' },
    { label: 'ol', open: '<ol>\n  ', close: '\n</ol>' },
    { label: 'li', open: '<li>', close: '</li>' },
    { label: 'img', open: '<img src="" alt="">', close: '' },
    { label: 'figure', open: '<figure>\n  ', close: '\n</figure>' },
    { label: 'figcaption', open: '<figcaption>', close: '</figcaption>' },
    { label: 'a', open: '<a href="">', close: '</a>' },
    { label: 'table', open: '<table>\n  <tr>\n    <td></td>\n  </tr>\n</table>', close: '' },
    { label: 'blockquote', open: '<blockquote>\n  ', close: '\n</blockquote>' },
    { label: 'details', open: '<details>\n  <summary>Title</summary>\n  ', close: '\n</details>' },
    { label: 'time', open: '<time datetime="">', close: '</time>' },
    { label: 'footer', open: '<footer>\n', close: '\n</footer>' },
  ];

  useEffect(() => {
    fetchCourseCatalog();
  }, []);

  const fetchCourseCatalog = async () => {
    try {
      const res = await axios.get(`${backendUrl}/api/v1/courses`);
      if (res.data.success && res.data.data.length > 0) {
        setDbCourses(res.data.data);
        loadCourseDetails(res.data.data[0].slug);
      }
    } catch (err) {
      console.error("Failed to load courses from DB:", err);
    }
  };

  const loadCourseDetails = async (slug) => {
    setIsLoading(true);
    setMessage({ type: '', text: '' });
    try {
      const res = await axios.get(`${backendUrl}/api/v1/courses/${slug}`);
      if (res.data.success) {
        const course = res.data.data;
        setSelectedCourseData(course);

        const firstChapter = course.chapters?.[0] || { id: `ch-${Date.now()}`, title: 'New Chapter', topics: [] };
        const firstTopic = firstChapter.topics?.[0] || { id: `top-${Date.now()}`, title: 'New Topic', subtopics: [] };

        setFormData({
          slug: course.slug,
          title: course.title,
          chapterId: firstChapter.id,
          chapterTitle: firstChapter.title,
          topicId: firstTopic.id,
          topicTitle: firstTopic.title,
          subtopics: firstTopic.subtopics?.length ? firstTopic.subtopics : [{
            id: `sub-${Date.now()}`,
            title: '',
            content: '<section>\n  <h2>New Content</h2>\n</section>',
            duration: '১০ মিনিট পঠন',
            completed: false,
            questions: []
          }]
        });
      }
    } catch (err) {
      setMessage({ type: 'error', text: 'Failed to fetch course details from database. Using default/local schema.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubjectChange = (e) => {
    const slug = e.target.value;
    const found = subjectsList.find(s => s.slug === slug);
    setFormData(prev => ({ ...prev, slug, title: found ? found.name : prev.title }));
    loadCourseDetails(slug);
  };

  const handleChapterSelect = (e) => {
    const chId = e.target.value;
    const foundChapter = selectedCourseData?.chapters.find(c => c.id === chId);
    if (foundChapter) {
      const firstTopic = foundChapter.topics?.[0] || { id: `top-${Date.now()}`, title: 'New Topic', subtopics: [] };
      setFormData(prev => ({
        ...prev,
        chapterId: foundChapter.id,
        chapterTitle: foundChapter.title,
        topicId: firstTopic.id,
        topicTitle: firstTopic.title,
        subtopics: firstTopic.subtopics?.length ? firstTopic.subtopics : prev.subtopics
      }));
    }
  };

  const handleTopicSelect = (e) => {
    const topId = e.target.value;
    const foundChapter = selectedCourseData?.chapters.find(c => c.id === formData.chapterId);
    const foundTopic = foundChapter?.topics.find(t => t.id === topId);
    if (foundTopic) {
      setFormData(prev => ({
        ...prev,
        topicId: foundTopic.id,
        topicTitle: foundTopic.title,
        subtopics: foundTopic.subtopics?.length ? foundTopic.subtopics : prev.subtopics
      }));
    }
  };

  // --- Subtopic (Parts) Handlers with Immutable Updates ---
  const handleAddSubtopic = () => {
    setFormData(prev => ({
      ...prev,
      subtopics: [
        ...prev.subtopics,
        {
          id: `sub-${Date.now()}`,
          title: '',
          content: '<section>\n  <h2>New Part</h2>\n  <p>Content goes here...</p>\n</section>',
          duration: '১০ মিনিট পঠন',
          completed: false,
          questions: []
        }
      ]
    }));
  };

  const handleRemoveSubtopic = (sIdx) => {
    setFormData(prev => ({
      ...prev,
      subtopics: prev.subtopics.filter((_, idx) => idx !== sIdx)
    }));
  };

  const handleSubtopicChange = (sIdx, field, value) => {
    setFormData(prev => ({
      ...prev,
      subtopics: prev.subtopics.map((sub, idx) => 
        idx === sIdx ? { ...sub, [field]: value } : sub
      )
    }));
  };

  // --- Editor Tag Insertion ---
  const insertTag = (sIdx, openTag, closeTag = '') => {
    const textarea = document.getElementById(`editor-${sIdx}`);
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const currentText = formData.subtopics[sIdx].content;
    const selectedText = currentText.substring(start, end);

    const newContent = currentText.substring(0, start) + openTag + selectedText + closeTag + currentText.substring(end);
    handleSubtopicChange(sIdx, 'content', newContent);

    setTimeout(() => {
      textarea.focus();
      const newCursorPos = start + openTag.length + selectedText.length;
      textarea.setSelectionRange(newCursorPos, newCursorPos);
    }, 0);
  };

  const handleHighlight = (sIdx, color) => {
    const colorClasses = {
      yellow: 'bg-yellow-200 dark:bg-yellow-900/50 text-yellow-900 dark:text-yellow-100 px-1 rounded',
      blue: 'bg-blue-200 dark:bg-blue-900/50 text-blue-900 dark:text-blue-100 px-1 rounded',
      red: 'bg-rose-200 dark:bg-rose-900/50 text-rose-900 dark:text-rose-100 px-1 rounded',
      orange: 'bg-orange-200 dark:bg-orange-900/50 text-orange-900 dark:text-orange-100 px-1 rounded'
    };
    const openTag = `<span class="${colorClasses[color]} font-medium">`;
    const closeTag = `</span>`;
    insertTag(sIdx, openTag, closeTag);
  };

  // ==========================================
  // --- UPGRADED ADVANCED MCQ HANDLERS ---
  // ==========================================
  const handleAddQuestion = (sIdx) => {
    setFormData(prev => ({
      ...prev,
      subtopics: prev.subtopics.map((sub, idx) => {
        if (idx !== sIdx) return sub;
        return {
          ...sub,
          questions: [
            ...sub.questions,
            { 
              questionText: '', 
              options: ['', '', '', ''], 
              correctOptionIndex: 0,
              explanation: '' 
            }
          ]
        };
      })
    }));
  };

  const handleQuestionChange = (sIdx, qIdx, field, value) => {
    setFormData(prev => ({
      ...prev,
      subtopics: prev.subtopics.map((sub, idx) => {
        if (idx !== sIdx) return sub;
        return {
          ...sub,
          questions: sub.questions.map((q, questionIndex) => 
            questionIndex === qIdx ? { ...q, [field]: value } : q
          )
        };
      })
    }));
  };

  const handleOptionChange = (sIdx, qIdx, optIdx, value) => {
    setFormData(prev => ({
      ...prev,
      subtopics: prev.subtopics.map((sub, idx) => {
        if (idx !== sIdx) return sub;
        return {
          ...sub,
          questions: sub.questions.map((q, questionIndex) => {
            if (questionIndex !== qIdx) return q;
            const updatedOptions = [...q.options];
            updatedOptions[optIdx] = value;
            return { ...q, options: updatedOptions };
          })
        };
      })
    }));
  };

  const handleAddOption = (sIdx, qIdx) => {
    setFormData(prev => ({
      ...prev,
      subtopics: prev.subtopics.map((sub, idx) => {
        if (idx !== sIdx) return sub;
        return {
          ...sub,
          questions: sub.questions.map((q, questionIndex) => {
            if (questionIndex !== qIdx) return q;
            return { ...q, options: [...q.options, ''] };
          })
        };
      })
    }));
  };

  const handleRemoveOption = (sIdx, qIdx, optIdx) => {
    setFormData(prev => ({
      ...prev,
      subtopics: prev.subtopics.map((sub, idx) => {
        if (idx !== sIdx) return sub;
        return {
          ...sub,
          questions: sub.questions.map((q, questionIndex) => {
            if (questionIndex !== qIdx) return q;
            const newOptions = q.options.filter((_, i) => i !== optIdx);
            
            // Adjust correct index safely if the removed option was selected
            let newCorrectIndex = q.correctOptionIndex;
            if (newCorrectIndex >= newOptions.length) {
              newCorrectIndex = Math.max(0, newOptions.length - 1);
            } else if (optIdx === q.correctOptionIndex) {
              newCorrectIndex = 0;
            }
            
            return { ...q, options: newOptions, correctOptionIndex: newCorrectIndex };
          })
        };
      })
    }));
  };

  const handleRemoveQuestion = (sIdx, qIdx) => {
    setFormData(prev => ({
      ...prev,
      subtopics: prev.subtopics.map((sub, idx) => {
        if (idx !== sIdx) return sub;
        return {
          ...sub,
          questions: sub.questions.filter((_, questionIndex) => questionIndex !== qIdx)
        };
      })
    }));
  };

  // --- Submit ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage({ type: '', text: '' });

    try {
      const token = localStorage.getItem('token');
      const headers = token ? { headers: { Authorization: `Bearer ${token}` } } : {};

      const payload = {
        slug: formData.slug,
        title: formData.title,
        chapters: [{
          id: formData.chapterId,
          title: formData.chapterTitle,
          topics: [{
            id: formData.topicId,
            title: formData.topicTitle,
            subtopics: formData.subtopics 
          }]
        }]
      };

      await axios.post(`${backendUrl}/api/v1/courses/seed`, payload, headers);
      setMessage({ type: 'success', text: 'Curriculum content and all parts published successfully!' });
    } catch (err) {
      setMessage({ type: 'error', text: err.response?.data?.message || 'Failed to save to database.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Dynamic Theme Object
  const theme = {
    bgMain: darkMode ? 'bg-slate-950' : 'bg-slate-100',
    bgCard: darkMode ? 'bg-slate-900' : 'bg-white',
    border: darkMode ? 'border-slate-800' : 'border-slate-200',
    textMain: darkMode ? 'text-slate-100' : 'text-slate-900',
    textMuted: darkMode ? 'text-slate-400' : 'text-slate-600',
    inputBg: darkMode ? 'bg-slate-950' : 'bg-slate-50',
    primary: darkMode ? 'text-indigo-400' : 'text-indigo-600',
    cardShadow: darkMode ? 'shadow-xl shadow-black/20' : 'shadow-lg shadow-slate-200/50',
    previewBg: darkMode ? 'bg-slate-950' : 'bg-white',
    proseTheme: darkMode ? 'prose-invert text-slate-300 marker:text-slate-500' : 'prose-slate text-slate-700',
  };

  const banglaOptionLabels = ['ক', 'খ', 'গ', 'ঘ', 'ঙ', 'চ'];

  return (
    <div className={`min-h-screen p-4 md:p-8 font-sans transition-colors duration-300 ${theme.bgMain} ${theme.textMain}`}>
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* Header */}
        <div className={`flex flex-col md:flex-row justify-between items-start md:items-center border-b pb-4 gap-4 ${theme.border}`}>
          <div>
            <h1 className="text-xl md:text-2xl font-bold flex items-center gap-2">
              <BookOpen className={`w-6 h-6 ${theme.primary}`} /> 
              Advanced Topic & Content Manager
            </h1>
            <p className={`text-sm mt-1 ${theme.textMuted}`}>
              Upload multi-part HTML content, inject SEO/Semantic tags, and build smart interactive MCQs.
            </p>
          </div>
          {isLoading && (
            <div className="flex items-center gap-2 text-xs font-semibold text-indigo-500 animate-pulse">
              <RefreshCw className="w-4 h-4 animate-spin" /> Loading DB Data...
            </div>
          )}
        </div>

        {message.text && (
          <div className={`p-4 rounded-lg text-sm font-medium flex items-center gap-2 ${
            message.type === 'success' 
              ? 'bg-emerald-100 text-emerald-800 border border-emerald-200 dark:bg-emerald-950/50 dark:text-emerald-300 dark:border-emerald-800' 
              : 'bg-rose-100 text-rose-800 border border-rose-200 dark:bg-rose-950/50 dark:text-rose-300 dark:border-rose-800'
          }`}>
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <span>{message.text}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* Hierarchy Global Settings */}
          <div className={`${theme.bgCard} border ${theme.border} p-5 md:p-8 rounded-2xl space-y-6 ${theme.cardShadow}`}>
            <h2 className={`text-sm font-bold uppercase tracking-wider ${theme.primary} flex items-center gap-2`}>
              <Layers className="w-4 h-4"/> 1. Topic Hierarchy Allocation
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div>
                <label className={`block mb-1.5 text-sm font-medium ${theme.textMuted}`}>Subject / Course</label>
                <select 
                  value={formData.slug} 
                  onChange={handleSubjectChange}
                  className={`w-full border rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 ${theme.inputBg} ${theme.border} ${theme.textMain}`}
                >
                  {subjectsList.map(sub => <option key={sub.slug} value={sub.slug}>{sub.name} ({sub.slug})</option>)}
                </select>
              </div>

              <div>
                <label className={`block mb-1.5 text-sm font-medium ${theme.textMuted}`}>Select Existing Chapter</label>
                <select 
                  value={formData.chapterId} 
                  onChange={handleChapterSelect}
                  className={`w-full border rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 ${theme.inputBg} ${theme.border} ${theme.textMain}`}
                  disabled={!selectedCourseData?.chapters?.length}
                >
                  {selectedCourseData?.chapters?.length ? (
                    selectedCourseData.chapters.map(ch => <option key={ch.id} value={ch.id}>{ch.title}</option>)
                  ) : (
                    <option value={formData.chapterId}>New / Manual Chapter</option>
                  )}
                </select>
              </div>

              <div>
                <label className={`block mb-1.5 text-sm font-medium ${theme.textMuted}`}>Select Existing Topic</label>
                <select 
                  value={formData.topicId} 
                  onChange={handleTopicSelect}
                  className={`w-full border rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 ${theme.inputBg} ${theme.border} ${theme.textMain}`}
                  disabled={!selectedCourseData?.chapters?.find(c => c.id === formData.chapterId)?.topics?.length}
                >
                  {selectedCourseData?.chapters?.find(c => c.id === formData.chapterId)?.topics?.length ? (
                    selectedCourseData.chapters.find(c => c.id === formData.chapterId).topics.map(t => <option key={t.id} value={t.id}>{t.title}</option>)
                  ) : (
                    <option value={formData.topicId}>New / Manual Topic</option>
                  )}
                </select>
              </div>
            </div>

            <hr className={`my-2 ${theme.border}`} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className={`block mb-1.5 text-sm font-medium ${theme.textMuted}`}>Chapter ID</label>
                <input 
                  type="text" required value={formData.chapterId} onChange={(e) => setFormData(prev => ({ ...prev, chapterId: e.target.value }))}
                  className={`w-full border rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 ${theme.inputBg} ${theme.border} ${theme.textMain}`}
                />
              </div>
              <div>
                <label className={`block mb-1.5 text-sm font-medium ${theme.textMuted}`}>Chapter Title</label>
                <input 
                  type="text" required value={formData.chapterTitle} onChange={(e) => setFormData(prev => ({ ...prev, chapterTitle: e.target.value }))}
                  className={`w-full border rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 ${theme.inputBg} ${theme.border} ${theme.textMain}`}
                />
              </div>
              <div>
                <label className={`block mb-1.5 text-sm font-medium ${theme.textMuted}`}>Topic ID</label>
                <input 
                  type="text" required value={formData.topicId} onChange={(e) => setFormData(prev => ({ ...prev, topicId: e.target.value }))}
                  className={`w-full border rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 ${theme.inputBg} ${theme.border} ${theme.textMain}`}
                />
              </div>
              <div>
                <label className={`block mb-1.5 text-sm font-medium ${theme.textMuted}`}>Topic Title</label>
                <input 
                  type="text" required value={formData.topicTitle} onChange={(e) => setFormData(prev => ({ ...prev, topicTitle: e.target.value }))}
                  className={`w-full border rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 ${theme.inputBg} ${theme.border} ${theme.textMain}`}
                />
              </div>
            </div>
          </div>

          {/* DYNAMIC SUBTOPICS (PARTS) */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className={`text-lg font-bold ${theme.textMain}`}>2. Content Parts & MCQs</h2>
              <button 
                type="button" 
                onClick={handleAddSubtopic} 
                className="bg-slate-800 hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600 text-white text-sm px-4 py-2 rounded-lg flex items-center space-x-2 shadow-md transition"
              >
                <Plus className="w-4 h-4" /> <span>Add New Part</span>
              </button>
            </div>

            {formData.subtopics.map((subtopic, sIdx) => (
              <div key={subtopic.id} className={`${theme.bgCard} border ${theme.border} p-5 md:p-8 rounded-2xl space-y-6 ${theme.cardShadow} relative`}>
                
                {formData.subtopics.length > 1 && (
                  <button type="button" onClick={() => handleRemoveSubtopic(sIdx)} className="absolute top-4 right-4 text-rose-500 hover:text-rose-600 bg-rose-50 hover:bg-rose-100 dark:bg-rose-900/30 p-2 rounded-lg transition-colors" title="Remove this entire part">
                    <Trash2 className="w-5 h-5" />
                  </button>
                )}
                
                <h3 className={`text-base font-bold ${theme.primary} mb-2`}>Part {sIdx + 1}</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div>
                    <label className={`block mb-1.5 text-sm font-medium ${theme.textMuted}`}>Part ID</label>
                    <input type="text" required value={subtopic.id} onChange={(e) => handleSubtopicChange(sIdx, 'id', e.target.value)} className={`w-full border rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 ${theme.inputBg} ${theme.border} ${theme.textMain}`} />
                  </div>
                  <div>
                    <label className={`block mb-1.5 text-sm font-medium ${theme.textMuted}`}>Part Title</label>
                    <input type="text" required value={subtopic.title} onChange={(e) => handleSubtopicChange(sIdx, 'title', e.target.value)} className={`w-full border rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 ${theme.inputBg} ${theme.border} ${theme.textMain}`} />
                  </div>
                  <div>
                    <label className={`block mb-1.5 text-sm font-medium ${theme.textMuted}`}>Est. Duration</label>
                    <input type="text" required value={subtopic.duration} onChange={(e) => handleSubtopicChange(sIdx, 'duration', e.target.value)} className={`w-full border rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 ${theme.inputBg} ${theme.border} ${theme.textMain}`} />
                  </div>
                </div>

                {/* Rich HTML Editor with Custom Toolbar */}
                <div className="space-y-3">
                  <label className={`text-sm font-bold flex items-center gap-2 ${theme.textMain}`}>
                    <Code className="w-4 h-4 text-indigo-500"/> HTML Source Code
                  </label>
                  
                  {/* HTML TAGS & SEO TOOLBAR */}
                  <div className={`p-3 rounded-lg border flex flex-col gap-3 ${theme.inputBg} ${theme.border}`}>
                    <div className="flex items-center gap-3 pb-2 border-b border-slate-200 dark:border-slate-800">
                      <span className={`text-xs font-semibold flex items-center gap-1 ${theme.textMuted}`}>
                        <Highlighter className="w-3.5 h-3.5"/> Colors:
                      </span>
                      <button type="button" onClick={() => handleHighlight(sIdx, 'yellow')} className="w-5 h-5 rounded-full bg-yellow-400 border border-slate-300 shadow-sm hover:scale-110 transition-transform" title="Yellow"></button>
                      <button type="button" onClick={() => handleHighlight(sIdx, 'blue')} className="w-5 h-5 rounded-full bg-blue-400 border border-slate-300 shadow-sm hover:scale-110 transition-transform" title="Blue"></button>
                      <button type="button" onClick={() => handleHighlight(sIdx, 'red')} className="w-5 h-5 rounded-full bg-rose-400 border border-slate-300 shadow-sm hover:scale-110 transition-transform" title="Red"></button>
                      <button type="button" onClick={() => handleHighlight(sIdx, 'orange')} className="w-5 h-5 rounded-full bg-orange-400 border border-slate-300 shadow-sm hover:scale-110 transition-transform" title="Orange"></button>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {htmlTags.map((tag, idx) => (
                        <button 
                          key={idx} type="button" 
                          onClick={() => insertTag(sIdx, tag.open, tag.close)}
                          className={`px-2 py-1 text-[11px] font-mono rounded border hover:bg-indigo-50 dark:hover:bg-indigo-900/40 hover:text-indigo-600 transition-colors ${theme.border} ${theme.textMain} ${theme.bgCard}`}
                          title={`Insert <${tag.label}>`}
                        >
                          &lt;{tag.label}&gt;
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <textarea 
                    id={`editor-${sIdx}`} rows={8} required value={subtopic.content}
                    onChange={(e) => handleSubtopicChange(sIdx, 'content', e.target.value)}
                    className={`w-full border rounded-lg p-4 text-sm font-mono leading-relaxed focus:outline-none focus:ring-2 focus:ring-indigo-500 ${theme.inputBg} ${theme.border} ${theme.textMain}`}
                  ></textarea>
                </div>

                {/* LIVE PREVIEW SECTION */}
                <div className={`mt-2 border rounded-xl overflow-hidden ${theme.border}`}>
                  <div className={`px-4 py-2 border-b flex items-center gap-2 bg-slate-800/5 dark:bg-slate-800/30 ${theme.border}`}>
                    <Eye className={`w-4 h-4 ${theme.primary}`} />
                    <h3 className={`text-xs font-bold ${theme.textMain}`}>Live Preview (Part {sIdx + 1})</h3>
                  </div>
                  <div className={`p-5 ${theme.previewBg}`}>
                    <div className={`prose max-w-none prose-sm leading-relaxed break-words ${theme.proseTheme}`} dangerouslySetInnerHTML={{ __html: subtopic.content }} />
                  </div>
                </div>

                {/* ========================================== */}
                {/* --- UPGRADED ADVANCED MCQ SECTION --- */}
                {/* ========================================== */}
                <div className={`pt-6 border-t ${theme.border} space-y-6`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <HelpCircle className={`w-5 h-5 ${theme.primary}`} />
                      <h4 className={`text-base font-bold ${theme.textMain}`}>
                        Practice MCQs <span className={`text-xs font-normal ${theme.textMuted}`}>(For Part {sIdx + 1})</span>
                      </h4>
                    </div>
                    <button 
                      type="button" 
                      onClick={() => handleAddQuestion(sIdx)} 
                      className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200 dark:bg-indigo-900/40 dark:text-indigo-300 text-xs font-semibold px-3.5 py-2 rounded-lg flex items-center space-x-1.5 transition shadow-sm"
                    >
                      <Plus className="w-4 h-4" /> <span>Add New Question</span>
                    </button>
                  </div>

                  <div className="space-y-4">
                    {subtopic.questions.map((q, qIdx) => (
                      <div key={qIdx} className={`border p-5 rounded-2xl space-y-4 relative transition-all ${theme.bgMain} ${theme.border}`}>
                        
                        {/* Question Header & Remove Button */}
                        <div className="flex items-start justify-between gap-3">
                          <span className="bg-indigo-600 text-white font-bold text-xs px-2.5 py-1 rounded-md flex-shrink-0">
                            Q{qIdx + 1}
                          </span>
                          <button 
                            type="button" 
                            onClick={() => handleRemoveQuestion(sIdx, qIdx)} 
                            className="text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-900/30 p-1.5 rounded-lg transition-colors flex-shrink-0"
                            title="Delete this question"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Question Input */}
                        <div>
                          <input 
                            type="text" 
                            required 
                            placeholder={`Enter question text (e.g., চর্যাপদ কবে আবিষ্কার হয়?)`} 
                            value={q.questionText} 
                            onChange={(e) => handleQuestionChange(sIdx, qIdx, 'questionText', e.target.value)} 
                            className={`w-full border rounded-xl p-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 ${theme.inputBg} ${theme.border} ${theme.textMain}`} 
                          />
                        </div>

                        {/* Options Section */}
                        <div className="space-y-2.5">
                          <label className={`block text-xs font-semibold uppercase tracking-wider ${theme.textMuted}`}>
                            Options <span className="normal-case font-normal text-slate-400">(Click checkmark to select correct answer):</span>
                          </label>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {q.options.map((opt, optIdx) => {
                              const isCorrect = q.correctOptionIndex === optIdx;
                              const banglaChar = banglaOptionLabels[optIdx] || (optIdx + 1);

                              return (
                                <div 
                                  key={optIdx} 
                                  className={`flex items-center gap-2 p-2.5 rounded-xl border transition-all ${
                                    isCorrect 
                                      ? 'border-emerald-500 bg-emerald-50/70 dark:bg-emerald-950/30 shadow-sm' 
                                      : `${theme.border} ${theme.bgCard}`
                                  }`}
                                >
                                  {/* Radio / Checkmark selector */}
                                  <button
                                    type="button"
                                    onClick={() => handleQuestionChange(sIdx, qIdx, 'correctOptionIndex', optIdx)}
                                    className={`p-1 rounded-full flex-shrink-0 transition-transform active:scale-95 ${
                                      isCorrect 
                                        ? 'text-emerald-600 dark:text-emerald-400' 
                                        : 'text-slate-300 dark:text-slate-600 hover:text-slate-500'
                                    }`}
                                    title="Mark as Correct Answer"
                                  >
                                    {isCorrect ? (
                                      <CheckCircle2 className="w-5 h-5 fill-emerald-100 dark:fill-emerald-900" />
                                    ) : (
                                      <Circle className="w-5 h-5" />
                                    )}
                                  </button>

                                  {/* Alphabet / Bangla Label */}
                                  <span className={`text-xs font-bold w-6 text-center uppercase flex-shrink-0 ${
                                    isCorrect ? 'text-emerald-700 dark:text-emerald-300' : theme.textMuted
                                  }`}>
                                    {String.fromCharCode(65 + optIdx)} ({banglaChar})
                                  </span>

                                  {/* Option Input */}
                                  <input 
                                    type="text" 
                                    required 
                                    value={opt} 
                                    onChange={(e) => handleOptionChange(sIdx, qIdx, optIdx, e.target.value)} 
                                    placeholder={`Option ${optIdx + 1}`} 
                                    className={`w-full bg-transparent text-sm focus:outline-none ${theme.textMain}`} 
                                  />

                                  {/* Remove option button (keep at least 2 options) */}
                                  {q.options.length > 2 && (
                                    <button
                                      type="button"
                                      onClick={() => handleRemoveOption(sIdx, qIdx, optIdx)}
                                      className="text-slate-300 hover:text-rose-500 dark:text-slate-600 dark:hover:text-rose-400 p-1 flex-shrink-0"
                                      title="Remove option"
                                    >
                                      <X className="w-3.5 h-3.5" />
                                    </button>
                                  )}
                                </div>
                              );
                            })}
                          </div>

                          {/* Add Option Button (Supports up to 6 options like BCS/Bank prelims) */}
                          {q.options.length < 6 && (
                            <button
                              type="button"
                              onClick={() => handleAddOption(sIdx, qIdx)}
                              className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1.5 pt-1"
                            >
                              <PlusCircle className="w-3.5 h-3.5" /> Add Another Option <span className="text-[10px] text-slate-400 font-normal">(e.g., 5-option BCS format)</span>
                            </button>
                          )}
                        </div>

                        {/* Explanation / Solution Field */}
                        <div className="pt-2 border-t border-slate-200 dark:border-slate-800/80">
                          <label className={`block mb-1.5 text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 ${theme.textMuted}`}>
                            <Lightbulb className="w-3.5 h-3.5 text-amber-500" /> Solution / Explanation <span className="normal-case text-slate-400 font-normal">(ব্যাখ্যা - Optional)</span>
                          </label>
                          <textarea
                            rows={2}
                            placeholder="Explain why this option is correct (appears to students after submitting quiz)..."
                            value={q.explanation || ''}
                            onChange={(e) => handleQuestionChange(sIdx, qIdx, 'explanation', e.target.value)}
                            className={`w-full border rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 leading-relaxed ${theme.inputBg} ${theme.border} ${theme.textMain}`}
                          />
                        </div>

                      </div>
                    ))}

                    {subtopic.questions.length === 0 && (
                      <div className={`text-center py-8 border-2 border-dashed rounded-2xl ${theme.border}`}>
                        <HelpCircle className={`w-8 h-8 mx-auto mb-2 opacity-30 ${theme.textMuted}`} />
                        <p className={`text-sm font-medium ${theme.textMuted}`}>No MCQs added for Part {sIdx + 1} yet.</p>
                        <p className="text-xs text-slate-400 mt-0.5">Click 'Add New Question' above to create practice quizzes for this lesson.</p>
                      </div>
                    )}
                  </div>
                </div>

              </div>
            ))}
          </div>

          <button type="submit" disabled={isSubmitting} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-xl text-base font-bold flex items-center justify-center space-x-2 shadow-lg transition-transform active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none">
            {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <CheckCircle2 className="w-5 h-5" />}
            <span>Publish Full Topic Curriculum</span>
          </button>
        </form>
      </div>
    </div>
  );
}