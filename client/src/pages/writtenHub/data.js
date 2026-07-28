import axios from 'axios';

// ১. আপনার দেওয়া নতুন সাবজেক্ট লিস্ট (যেখানে MCQ কম্পোনেন্ট এবং নতুন নামগুলো আছে)
export const writtenSubjects = [
    { 
        id: "bengali-100",
        name: "বাংলা (০০১)", 
        mark: 100, 
        duration: "৩ ঘন্টা", 
        icon: "📕", 
        color: "bg-rose-50 text-rose-600 border-rose-100",
        note: "সাধারণ ক্যাডার"
    },
    { 
        id: "bengali-200",
        name: "বাংলা (০০২)", 
        mark: 200, 
        duration: "৪ ঘন্টা", 
        icon: "📖", 
        color: "bg-orange-50 text-orange-600 border-orange-100",
        note: "উভয় ক্যাডার"
    },
    { 
        id: "english",
        name: "ইংরেজি", 
        mark: 200, 
        duration: "৪ ঘন্টা", 
        icon: "🔤", 
        color: "bg-blue-50 text-blue-600 border-blue-100" 
    },
    { 
        id: "bangladesh-affairs",
        name: "বাংলাদেশ বিষয়াবলি", 
        mark: 200, 
        duration: "৪ ঘন্টা", 
        icon: "🇧🇩", 
        color: "bg-green-50 text-green-600 border-green-100" 
    },
    { 
        id: "international-affairs",
        name: "আন্তর্জাতিক বিষয়াবলি", 
        mark: 100, 
        duration: "৩ ঘন্টা", 
        icon: "🌍", 
        color: "bg-indigo-50 text-indigo-600 border-indigo-100" 
    },
    { 
        id: "math-mental",
        name: "গাণিতিক যুক্তি ও মানসিক দক্ষতা", 
        mark: 100, 
        detailMark: "৫০+৫০",
        duration: "৩ ঘন্টা", 
        icon: "🧠", 
        color: "bg-pink-50 text-pink-600 border-pink-100" 
    },
    { 
        id: "science-tech",
        name: "সাধারণ বিজ্ঞান ও প্রযুক্তি", 
        mark: 100, 
        duration: "৩ ঘন্টা", 
        icon: "🔬", 
        color: "bg-purple-50 text-purple-600 border-purple-100" 
    },
    { 
        id: "professional-subject",
        name: "পেশাগত বিষয়", 
        mark: 200, 
        duration: "৪ ঘন্টা", 
        icon: "🎓", 
        color: "bg-slate-50 text-slate-700 border-slate-100",
        note: "কারিগরি ক্যাডার"
    }
];

/**
 * Fetch and process data following the new logic
 */
export const fetchMenuData1 = async (backendUrl) => {
    try {
        // সঠিক পাথ ব্যবহার করুন (ব্যাকএন্ডের সাথে মিল রেখে)
        const response = await axios.get(`${backendUrl}/api/articles`);
        const remoteData = response.data || [];

        return subjects.map((subject) => {
            let matchedArticles = [];
            const name = subject.name;

            // ১. Popular Blog
            if (subject.isSpecial || name === "Popular Blog") {
                matchedArticles = [...remoteData]
                    .sort((a, b) => (b.views || 0) - (a.views || 0))
                    .slice(0, 10);
            } 
            // ২. MCQ Logic
            else if (name === 'Blog-MCQ' || name === 'Exam-MCQ') {
                matchedArticles = remoteData.filter(post => 
                    post.category?.includes(name) || 
                    post.tags?.some(tag => tag.includes("MCQ"))
                );
            }
            // ৩. General Subject Filtering
            else {
                matchedArticles = remoteData.filter((post) => {
                    // ডেটাবেসের ফিল্ডগুলো চেক করা হচ্ছে
                    const backendSubject = post.content_header?.subject || "";
                    const backendCategory = post.category || "";

                    // সরাসরি নাম মিললে অথবা কিওয়ার্ড মিললে ফিল্টার হবে
                    return (
                        backendSubject === name || 
                        backendCategory.includes(name) ||
                        // বাংলা-ইংরেজি কীওয়ার্ড সাপোর্ট
                        (name.includes("বাংলাদেশ") && (backendSubject.includes("Bangladesh") || backendSubject.includes("বাংলাদেশ"))) ||
                        (name.includes("আন্তর্জাতিক") && (backendSubject.includes("International") || backendSubject.includes("আন্তর্জাতিক"))) ||
                        (name.includes("বিজ্ঞান") && (backendSubject.includes("Science") || backendSubject.includes("বিজ্ঞান")))
                    );
                });
            }

            return {
                ...subject,
                id: name.toLowerCase().replace(/\s+/g, "-"),
                label: name,
                articles: matchedArticles
            };
        });
    } catch (error) {
        console.error("fetchMenuData Error:", error);
        return [];
    }
};


export const fetchMenuData = async (backendUrl) => {
    try {
        const response = await axios.get(`${backendUrl}/api/articles`);
        const remoteData = response.data || [];

        return writtenSubjects.map((subject) => {
            let matchedArticles = [];
            const name = subject.name;

            // ১. Popular Blog (Special Logic)
            if (subject.isSpecial || name === "Popular Blog") {
                matchedArticles = [...remoteData]
                    .sort((a, b) => (b.views || 0) - (a.views || 0))
                    .slice(0, 10);
            } 
            // ২. MCQ Logic (If applicable)
            else if (name.includes('MCQ')) {
                matchedArticles = remoteData.filter(post => 
                    post.category?.includes("MCQ") || 
                    post.tags?.some(tag => tag.toUpperCase().includes("MCQ"))
                );
            }
            // ৩. General & Written Subject Filtering
            else {
                matchedArticles = remoteData.filter((post) => {
                    const backendSubject = post.content_header?.subject || "";
                    const backendCategory = post.category || "";
                    const backendSyllabus = post.content_header?.syllabus_category || "";

                    // কন্ডিশনাল চেকিং:
                    const isNameMatch = backendSubject.includes(name) || name.includes(backendSubject);
                    
                    // স্পেসিফিক কিওয়ার্ড সাপোর্ট (বাংলাদেশ, আন্তর্জাতিক, বিজ্ঞান ইত্যাদি)
                    const isKeywordMatch = 
                        (name.includes("বাংলাদেশ") && (backendSubject.includes("Bangladesh") || backendSubject.includes("বাংলাদেশ"))) ||
                        (name.includes("আন্তর্জাতিক") && (backendSubject.includes("International") || backendSubject.includes("আন্তর্জাতিক"))) ||
                        (name.includes("বিজ্ঞান") && (backendSubject.includes("Science") || backendSubject.includes("বিজ্ঞান"))) ||
                        (name.includes("বাংলা") && (backendSubject.includes("Bengali") || backendSubject.includes("বাংলা"))) ||
                        (name.includes("ইংরেজি") && (backendSubject.includes("English") || backendSubject.includes("ইংরেজি")));

                    return isNameMatch || isKeywordMatch || backendCategory.includes(name) || backendSyllabus.includes(name);
                });
            }

            return {
                ...subject,
                id: subject.id || name.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-"),
                label: name,
                articles: matchedArticles
            };
        });
    } catch (error) {
        console.error("fetchMenuData Error:", error);
        return [];
    }
};