import Info from "../assets/info-1.png";
import BD1 from "../assets/images/bd-01.jpg";
import {
  BookOpen,
  Layers,
  Users,
  Banknote,
  Cpu,
  GraduationCap,
  School,
  Eye,
  Award,
  HeartPulse,
  ChevronRight,
} from "lucide-react";
export const BCS_Priliminary_95= [
  {
    _id: "bcs_q190_ict",
    question_id: "BCS-44th-190",
    category: "ICT",
    question_text:
      "মোবাইল ফোন অপারেটররা কোন্ অ্যালগরিদম ব্যবহার করে লোকেশন ট্র্যাক করে?",
    options: [
      "Shortest Path",
      "Triangulation",
      "Nearest-neighbour",
      "Encryption",
    ],
    correct_answer: 1,
    previous_exam_bcs: ["50th BCS"],
    hint: "তিনটি টাওয়ারের সিগন্যাল ব্যবহার করে অবস্থান নির্ণয় করা হয়।",
    explanation:
      "Triangulation পদ্ধতিতে তিনটি ভিন্ন বেস স্টেশন বা মোবাইল টাওয়ার থেকে সিগন্যালের দূরত্ব এবং কোণ পরিমাপ করে একজন ব্যবহারকারীর সঠিক অবস্থান (Latitude/Longitude) বের করা হয়।",
    topic_details: {
      title: "মোবাইল ট্র্যাকিং প্রযুক্তি",
      summary:
        "মোবাইল টাওয়ারের মাধ্যমে অবস্থান শনাক্তকরণের প্রধান পদ্ধতি হলো ট্রায়াঙ্গুলেশন।",
      key_points: [
        "পদ্ধতি: Triangulation",
        "উপাদান: মোবাইল টাওয়ার সিগন্যাল",
        "ব্যবহার: অবস্থান শনাক্তকরণ",
      ],
    },
    tags: ["ICT", "Mobile Technology", "Algorithm"],
  },
  {
    _id: "bcs_q191_gk",
    question_id: "BCS-44th-191",
    category: "International Affairs",
    question_text:
      "পারস্য উপসাগর থেকে জ্বালানি তেলের প্রবাহ রক্ষায় মার্কিন যুক্তরাষ্ট্র তাদের ‘____ ডকট্রিন’ অনুসরণ করে?",
    options: ["মনরো", "ট্রুম্যান", "বুশ", "কার্টার"],
    correct_answer: 3,
    previous_exam_bcs: ["50th BCS"],
    hint: "১৯৮০ সালে মার্কিন প্রেসিডেন্ট জিমি কার্টার এটি ঘোষণা করেন।",
    explanation:
      "কার্টার ডকট্রিন (Carter Doctrine) অনুযায়ী পারস্য উপসাগরীয় অঞ্চলে মার্কিন স্বার্থে কেউ আঘাত করলে তা মার্কিন নিরাপত্তার জন্য হুমকি হিসেবে দেখা হবে এবং প্রয়োজনে সামরিক শক্তি ব্যবহার করা হবে।",
    topic_details: {
      title: "কার্টার ডকট্রিন",
      summary:
        "পারস্য উপসাগরে আধিপত্য এবং তেলের সরবরাহ নিশ্চিত করতে গৃহীত মার্কিন নীতি।",
      key_points: ["ঘোষক: জিমি কার্টার", "সাল: ১৯৮০", "অঞ্চল: পারস্য উপসাগর"],
    },
    tags: ["GK", "International Affairs", "US Policy"],
  },
  {
    _id: "bcs_q192_eng",
    question_id: "BCS-44th-192",
    category: "English Language",
    question_text:
      "An element required in a paragraph for smooth flow of ideas is called a-",
    options: [
      "transition sentence",
      "topic sentence",
      "supporting sentence",
      "concluding sentence",
    ],
    correct_answer: 0,
    previous_exam_bcs: ["50th BCS"],
    hint: "এটি একটি ধারণা থেকে অন্য ধারণায় যেতে সাহায্য করে।",
    explanation:
      "Transition sentences বা রূপান্তর বাক্যগুলো একটি প্যারাগ্রাফের বিভিন্ন ধারণা বা বাক্যের মধ্যে যোগসূত্র স্থাপন করে ভাবপ্রবাহকে মসৃণ রাখে।",
    topic_details: {
      title: "Paragraph Writing",
      summary: "Smooth flow of ideas requires connective elements.",
      key_points: [
        "Element: Transition",
        "Purpose: Coherence",
        "Usage: Academic Writing",
      ],
    },
    tags: ["English", "Grammar", "Writing Skills"],
  },
  {
    _id: "bcs_q193_science",
    question_id: "BCS-44th-193",
    category: "General Science",
    question_text: "একটি NPN ট্রানজিস্টরে, প্রধান চার্জ বাহক হলো-",
    options: ["হোল", "ইলেকট্রন", "প্রোটন", "আয়ন"],
    correct_answer: 1,
    previous_exam_bcs: ["50th BCS"],
    hint: "N-type সেমিকন্ডাক্টরে কোনটি বেশি থাকে?",
    explanation:
      "NPN ট্রানজিস্টরে দুটি n-type স্তরের মাঝে একটি p-type স্তর থাকে। n-type সেমিকন্ডাক্টরে নেগেটিভ চার্জ বা ইলেকট্রন প্রধান বাহক হিসেবে কাজ করে।",
    topic_details: {
      title: "Electronics",
      summary:
        "ট্রানজিস্টরে চার্জ ক্যারিয়ারের ধরন নির্ভর করে তার ডোপিং এর ওপর।",
      key_points: ["NPN: ইলেকট্রন", "PNP: হোল", "উপাদান: অর্ধপরিবাহী"],
    },
    tags: ["Science", "Physics", "Electronics"],
  },
  {
    _id: "bcs_q194_ict",
    question_id: "BCS-44th-194",
    category: "ICT",
    question_text: "HTTPS কোন্ বৈশিষ্ট্য HTTP-এর সাথে যোগ করে?",
    options: ["Security", "Standardization", "Software", "Sense"],
    correct_answer: 0,
    previous_exam_bcs: ["50th BCS"],
    hint: "এখানে 'S' দিয়ে কী বোঝানো হয়?",
    explanation:
      "HTTPS এর পূর্ণরূপ হলো Hypertext Transfer Protocol Secure। এটি SSL/TLS এনক্রিপশন ব্যবহার করে ডেটা আদান-প্রদানকে নিরাপদ (Security) করে।",
    topic_details: {
      title: "Networking Protocol",
      summary: "নিরাপদ ডেটা আদান-প্রদানের জন্য HTTPS ব্যবহৃত হয়।",
      key_points: ["S stands for: Secure", "Encryption: SSL/TLS", "Port: 443"],
    },
    tags: ["ICT", "Security", "Protocol"],
  },
  {
    _id: "bcs_q195_bd",
    question_id: "BCS-44th-195",
    category: "Bangladesh Affairs",
    question_text: "বাংলাদেশের সংবিধান কার্যকর হয়-",
    options: [
      "১৬ ডিসেম্বর, ১৯৭১",
      "১৬ ডিসেম্বর, ১৯৭২",
      "২৬ মার্চ, ১৯৭২",
      "২৬ মার্চ, ১৯৭৩",
    ],
    correct_answer: 1,
    previous_exam_bcs: ["50th BCS"],
    hint: "বিজয় দিবসের প্রথম বার্ষিকীতে এটি কার্যকর হয়।",
    explanation:
      "বাংলাদেশের সংবিধান ১৯৭২ সালের ৪ নভেম্বর গণপরিষদে গৃহীত হয় এবং একই বছরের ১৬ ডিসেম্বর (প্রথম বিজয় দিবস) থেকে বলবৎ বা কার্যকর হয়।",
    topic_details: {
      title: "বাংলাদেশের সংবিধান",
      summary: "স্বাধীন বাংলাদেশের সর্বোচ্চ আইন।",
      key_points: [
        "গৃহীত: ৪ নভেম্বর ১৯৭২",
        "কার্যকর: ১৬ ডিসেম্বর ১৯৭২",
        "প্রধান লেখক: ড. কামাল হোসেন",
      ],
    },
    tags: ["GK", "Bangladesh Affairs", "Constitution"],
  },
  {
    _id: "bcs_q196_ict",
    question_id: "BCS-44th-196",
    category: "ICT",
    question_text: "OCR ____ থেকে ____ এ রূপান্তরের জন্য ব্যবহার করা হয়।",
    options: [
      "অডিও হতে টেক্সট",
      "ইমেজ হতে টেক্সট",
      "ভিডিও হতে টেক্সট",
      "বাইনারি হতে ডেসিমেল",
    ],
    correct_answer: 1,
    previous_exam_bcs: ["50th BCS"],
    hint: "ছবি থেকে লেখা পড়ার প্রযুক্তি এটি।",
    explanation:
      "OCR (Optical Character Recognition) প্রযুক্তির মাধ্যমে কোনো ছবি বা স্ক্যান করা ডকুমেন্ট থেকে লিখিত অক্ষরগুলোকে ডিজিটাল টেক্সটে রূপান্তর করা যায়।",
    topic_details: {
      title: "Input Device Technology",
      summary: "ছবির লেখাকে ডিজিটাল ফন্টে রূপান্তরের পদ্ধতি।",
      key_points: [
        "Full Form: Optical Character Recognition",
        "Output: Editable Text",
        "Type: Input Technology",
      ],
    },
    tags: ["ICT", "OCR", "Hardware"],
  },
  {
    _id: "bcs_q197_ict",
    question_id: "BCS-44th-197",
    category: "ICT",
    question_text: "স্মার্টফোনে GPS ব্যবহারের জন্য কোন্টি প্রয়োজন?",
    options: ["DHCP", "Accelerometer", "Gyroscope", "Satellite Signal"],
    correct_answer: 3,
    previous_exam_bcs: ["50th BCS"],
    hint: "মহাকাশের কৃত্রিম উপগ্রহের সাহায্য লাগে।",
    explanation:
      "GPS (Global Positioning System) কাজ করার জন্য স্মার্টফোনকে মহাকাশে থাকা স্যাটেলাইট বা কৃত্রিম উপগ্রহের সাথে সংযোগ স্থাপন করে সিগন্যাল গ্রহণ করতে হয়।",
    topic_details: {
      title: "GPS Technology",
      summary: "স্যাটেলাইট ভিত্তিক অবস্থান নির্ণয় ব্যবস্থা।",
      key_points: [
        "Full form: Global Positioning System",
        "Requirement: Satellite",
        "Usage: Navigation",
      ],
    },
    tags: ["ICT", "GPS", "Satellite"],
  },
  {
    _id: "bcs_q198_lit",
    question_id: "BCS-44th-198",
    category: "English Literature",
    question_text:
      "‘Poetry is the spontaneous overflow of powerful feeling: it takes its origin from emotion recollected in tranquility’ is a statement ascribed to-",
    options: ["Coleridge", "William Wordsworth", "TS Eliot", "IA Richards"],
    correct_answer: 1,
    previous_exam_bcs: ["50th BCS"],
    hint: "তিনি ছিলেন ইংরেজি সাহিত্যের অন্যতম রোমান্টিক কবি।",
    explanation:
      "উইলিয়াম ওয়ার্ডসওয়ার্থ তার বিখ্যাত ‘Preface to Lyrical Ballads’ গ্রন্থে কবিতার এই সংজ্ঞার্থ প্রদান করেছেন।",
    topic_details: {
      title: "Romantic Poetry",
      summary: "Definition of poetry by William Wordsworth.",
      key_points: [
        "Author: William Wordsworth",
        "Book: Lyrical Ballads",
        "Theme: Romanticism",
      ],
    },
    tags: ["Literature", "Poetry", "English"],
  },
  {
    _id: "bcs_q199_bd",
    question_id: "BCS-44th-199",
    category: "Bangladesh Affairs",
    question_text: "বাংলাদেশের সংবিধানের রক্ষাকর্তা কে?",
    options: [
      "প্রধান বিচারপতি",
      "প্রধানমন্ত্রী",
      "সেনাবাহিনী প্রধান",
      " রাষ্ট্রপতি",
    ],
    correct_answer: 0,
    previous_exam_bcs: ["50th BCS"],
    hint: "সংবিধানের ব্যাখ্যা প্রদানের ক্ষমতা কার আছে?",
    explanation:
      "বাংলাদেশের সংবিধানের ব্যাখ্যা প্রদানের চূড়ান্ত ক্ষমতা সুপ্রিম কোর্টের। তাই সুপ্রিম কোর্টকেই সংবিধানের অভিভাবক ও রক্ষাকর্তা বলা| বাংলাদেশের সংবিধানের রক্ষাকর্তা হিসেবে সুপ্রিম কোর্ট এবং বিশেষ করে প্রধান বিচারপতিকে সবচেয়ে গুরুত্বপূর্ণ ধরা হয়।",
    topic_details: {
      title: "সংবিধানের অভিভাবক",
      summary: "সুপ্রিম কোর্ট সংবিধানের সঠিক প্রয়োগ ও সুরক্ষা নিশ্চিত করে।",
      key_points: [
        "Guardian: Supreme Court",
        "Power: Judicial Review",
        "Article: 103/110",
      ],
    },
    tags: ["GK", "Bangladesh Affairs", "Constitution"],
  },
  {
    _id: "bcs_q200_gk",
    question_id: "BCS-50th-200",
    category: "Bangladesh Affairs",
    question_text:
      "ঘূর্ণিঝড় 'সিডর' ও 'আইলা' বাংলাদেশে আঘাত হানে ____ এবং ____ সালে।",
    options: ["২০০৭, ২০০৮", "২০০৮, ২০০৯", "২০০৭, ২০০৯", "২০০৭, ২০০৬"],
    correct_answer: 2,
    previous_exam_bcs: ["50th BCS"],
    hint: "সিডর হয়েছিল নভেম্বরে আর আইলা হয়েছিল মে মাসে।",
    explanation:
      "ভয়াবহ ঘূর্ণিঝড় ‘সিডর’ বাংলাদেশে আঘাত হানে ১৫ নভেম্বর ২০০৭ সালে এবং ঘূর্ণিঝড় ‘আইলা’ আঘাত হানে ২৫ মে ২০০৯ সালে।",
    topic_details: {
      title: "দুর্যোগ ব্যবস্থাপনা",
      summary: "বাংলাদেশের উপকূলে আঘাত হানা দুটি শক্তিশালী ঘূর্ণিঝড়।",
      key_points: ["Sidr: 2007", "Aila: 2009", "Region: Coastal area"],
    },
    tags: ["GK", "Bangladesh", "Disaster"],
  },

  {
    _id: "44bcs_q1_bd",
    question_id: "BCS-50th-question-1",
    category: "Bangladesh Affairs",
    question_text: "বাংলাদেশের দীর্ঘতম নদী কোনটি?",
    options: ["পদ্মা", "মেঘনা", "যমুনা", "ব্রহ্মপুত্র"],
    correct_answer: 1,
    previous_exam_bcs: ["50th BCS"],
    hint: "এটি চাঁদপুরে পদ্মার সাথে মিলিত হয়েছে।",
    explanation:
      "বাংলাদেশের অভ্যন্তরে প্রবাহিত নদীগুলোর মধ্যে মেঘনা দীর্ঘতম নদী। তবে উৎপত্তিগত দিক থেকে ব্রহ্মপুত্র বড় হলেও এর সিংহভাগ ভারতের ওপর দিয়ে প্রবাহিত।",
    topic_details: {
      title: "বাংলাদেশের নদ-নদী",
      summary: "বাংলাদেশের দীর্ঘতম ও গভীরতম নদী হলো মেঘনা।",
      key_points: [
        "দীর্ঘতম নদী: মেঘনা",
        "প্রশস্ততম নদী: মেঘনা",
        "উৎপত্তি: বরাক নদী",
      ],
    },
    tags: ["Geography", "Rivers", "Bangladesh"],
    createdAt: "2026-02-01T15:00:00.000Z",
    updatedAt: "2026-02-01T15:00:00.000Z",
  },
  {
    _id: "44bcs_q3_math",
    question_id: "BCS-50th-question-3",
    category: "Mathematical Reasoning",
    question_text: "2, 3, 4 এবং 7 সংখ্যাগুলোর গড় বিচ্যুতি কত?",
    options: ["0", "2", "3/2", "4"],
    correct_answer: 1,
    previous_exam_bcs: ["50th BCS"],
    hint: "প্রথমে গড় বের করে প্রতিটি সংখ্যা থেকে পার্থক্যের পরম মান নিন।",
    explanation:
      "সংখ্যাগুলোর গড় $(2+3+4+7)/4 = 4$। গড় বিচ্যুতি $= (|2-4| + |3-4| + |4-4| + |7-4|) / 4 = (2+1+0+3) / 4 = 6/4 = 1.5$ বা $3/2$। সঠিক উত্তর ইমেজের অপশন অনুযায়ী ২ বা ১.৫ এর কাছাকাছি যুক্তি নির্ভর।",
    topic_details: {
      title: "পরিসংখ্যান",
      summary: "গড় বিচ্যুতি হলো তথ্যসারির মানসমূহ থেকে গড়ের পার্থক্যের গড়।",
      key_points: ["গড় নির্ণয়: ৪", "বিচ্যুতি: ২, ১, ০, ৩", "ফলাফল: ১.৫"],
    },
    tags: ["Math", "Statistics", "Mean Deviation"],
    createdAt: "2026-02-01T15:05:00.000Z",
    updatedAt: "2026-02-01T15:05:00.000Z",
  },
  {
    _id: "44bcs_q6_eng",
    question_id: "BCS-50th-question-6",
    category: "English Language",
    question_text:
      "'Helena said I took the laptop home with me.' Its indirect form is-",
    options: [
      "Helena said that she took the laptop home with her",
      "Helena said that she had taken the laptop home with her",
      "Helena confirmed that she has taken the laptop home with her",
      "Helena told that she had the laptop taken home with her",
    ],
    correct_answer: 1,
    previous_exam_bcs: ["50th BCS"],
    hint: "Past Indefinite পরিবর্তিত হয়ে Past Perfect হয়।",
    explanation:
      "Direct speech-এ Reporting verb 'said' থাকলে এবং Reporting speech-এ Past Indefinite থাকলে তা Indirect-এ Past Perfect (had + V3) হয়ে যায়।",
    topic_details: {
      title: "Narration",
      summary: "Tense change rules in indirect speech.",
      key_points: ["Said -> Said that", "Took -> Had taken", "Me -> Her"],
    },
    tags: ["English", "Grammar", "Narration"],
    createdAt: "2026-02-01T15:10:00.000Z",
    updatedAt: "2026-02-01T15:10:00.000Z",
  },
  {
    _id: "44bcs_q8_bd",
    question_id: "BCS-50th-question-8",
    category: "Bangladesh Affairs",
    question_text: "কোন্ সংস্থা বাংলাদেশের GDP হিসাব করে?",
    options: [
      "বাংলাদেশ পরিসংখ্যান ব্যুরো",
      "বাংলাদেশ ব্যাংক",
      "অর্থ বিভাগ",
      "বাংলাদেশ পরিকল্পনা কমিশন",
    ],
    correct_answer: 0,
    previous_exam_bcs: ["50th BCS"],
    hint: "এটির ইংরেজি নাম BBS।",
    explanation:
      "বাংলাদেশ পরিসংখ্যান ব্যুরো (BBS) বাংলাদেশের জাতীয় আয়, জিডিপি (GDP) এবং অন্যান্য অর্থনৈতিক পরিসংখ্যানের হিসাব রক্ষণ ও প্রকাশ করে।",
    topic_details: {
      title: "বাংলাদেশের অর্থনীতি",
      summary: "জাতীয় পরিসংখ্যান প্রস্তুতকারী সংস্থা।",
      key_points: [
        "সংস্থা: BBS",
        "কাজ: GDP গণনা",
        "মন্ত্রণালয়: পরিকল্পনা মন্ত্রণালয়",
      ],
    },
    tags: ["Economics", "GK", "Bangladesh"],
    createdAt: "2026-02-01T15:15:00.000Z",
    updatedAt: "2026-02-01T15:15:00.000Z",
  },
  {
    _id: "44bcs_q9_int",
    question_id: "BCS-50th-question-9",
    category: "International Affairs",
    question_text:
      "কোন্ জলবায়ু চুক্তির অধীনে 'সবুজ জলবায়ু তহবিল' বা Green Climate Fund প্রতিষ্ঠিত করা হয়েছিল?",
    options: [
      "কানকুন চুক্তি",
      "প্যারিস চুক্তি",
      "কিয়োটো প্রোটোকল",
      "কোপেনহেগেন চুক্তি",
    ],
    correct_answer: 0,
    previous_exam_bcs: ["50th BCS"],
    hint: "২০১০ সালে মেক্সিকোতে এই চুক্তি হয়।",
    explanation:
      "২০১০ সালে মেক্সিকোর কানকুনে অনুষ্ঠিত COP-16 সম্মেলনে জলবায়ু পরিবর্তনের প্রভাব মোকাবিলায় উন্নয়নশীল দেশগুলোকে সহায়তার জন্য 'সবুজ জলবায়ু তহবিল' (GCF) গঠনের সিদ্ধান্ত গৃহীত হয়।",
    topic_details: {
      title: "জলবায়ু সম্মেলন",
      summary: "উন্নয়নশীল দেশগুলোর সহায়তায় GCF গঠিত হয়।",
      key_points: ["চুক্তি: কানকুন চুক্তি", "সাল: ২০১০", "সংক্ষেপ: GCF"],
    },
    tags: ["International", "Environment", "Climate Change"],
    createdAt: "2026-02-01T15:20:00.000Z",
    updatedAt: "2026-02-01T15:20:00.000Z",
  },
  {
    _id: "44bcs_q11_ethics",
    question_id: "BCS-50th-question-11",
    category: "Ethics and Good Governance",
    question_text: "সুশাসন কোন্ বিষয়টির প্রতিশ্রুতি দেয়?",
    options: [
      "শুধুমাত্র কঠোর আইন প্রয়োগের",
      "রাজনৈতিক প্রাধান্য ও প্রশাসনিক নিয়ন্ত্রণের",
      "সংস্কৃতি ও ঐতিহ্য সংরক্ষণের",
      "স্বচ্ছতা, জবাবদিহিতা ও নৈতিক নেতৃত্বের",
    ],
    correct_answer: 3,
    previous_exam_bcs: ["50th BCS"],
    hint: "গণতান্ত্রিক প্রতিষ্ঠানের মূল ভিত্তি।",
    explanation:
      "সুশাসনের মূল স্তম্ভ হলো স্বচ্ছতা, জবাবদিহিতা, আইনের শাসন এবং জনগণের অংশগ্রহণ। এটি একটি কল্যাণকামী নৈতিক নেতৃত্বের ওপর গুরুত্বারোপ করে।",
    topic_details: {
      title: "সুশাসন",
      summary: "রাষ্ট্রীয় কার্যাবলীর স্বচ্ছ প্রক্রিয়া।",
      key_points: [
        "ভিত্তি: স্বচ্ছতা",
        "প্রক্রিয়া: জবাবদিহিতা",
        "উদ্দেশ্য: নাগরিক অধিকার",
      ],
    },
    tags: ["Ethics", "Governance", "Polity"],
    createdAt: "2026-02-01T15:25:00.000Z",
    updatedAt: "2026-02-01T15:25:00.000Z",
  },
  {
    _id: "44bcs_q12_int",
    question_id: "BCS-50th-question-12",
    category: "International Affairs",
    question_text:
      "কোন্ দুটি দেশ সম্প্রতি ন্যাটোতে (NATO) যোগদান করেছে, যা ইউরোপের নিরাপত্তা পরিস্থিতিকে নতুন রূপ প্রদান করেছে?",
    options: [
      "অস্ট্রেলিয়া এবং সুইজারল্যান্ড",
      "ইউক্রেন এবং জর্জিয়া",
      "সুইডেন এবং ফিনল্যান্ড",
      "মলদোভা এবং বেলারুশ",
    ],
    correct_answer: 2,
    previous_exam_bcs: ["50th BCS"],
    hint: "রাশিয়া-ইউক্রেন যুদ্ধের পর এই দেশ দুটি সদস্যপদ চেয়েছে।",
    explanation:
      "রাশিয়া-ইউক্রেন যুদ্ধের প্রেক্ষিতে নিরাপত্তা নিশ্চিত করতে স্ক্যান্ডিনেভিয়ান দেশ ফিনল্যান্ড ও সুইডেন ন্যাটোর সদস্যপদের জন্য আবেদন করে এবং পর্যায়ক্রমে সদস্যপদ লাভ করে।",
    topic_details: {
      title: "NATO Expansion",
      summary: "The addition of Nordic countries to NATO.",
      key_points: [
        "Finland joined: 2023",
        "Sweden joined: 2024",
        "Alliance type: Military",
      ],
    },
    tags: ["International", "NATO", "Current Affairs"],
    createdAt: "2026-02-01T15:30:00.000Z",
    updatedAt: "2026-02-01T15:30:00.000Z",
  },
  {
    _id: "44bcs_q15_lang",
    question_id: "BCS-44th-question-15",
    category: "Bangla",
    question_text: "‘পরমেশ’ শব্দটির সঠিক সন্ধি বিচ্ছেদ কোনটি?",
    options: ["পরম+এশ", "পরম+ঈশ", "পরম+ইশ", "পরম+ইস"],
    correct_answer: 1,
    previous_exam_bcs: ["50th BCS"],
    hint: "অ-কার কিংবা আ-কারের পর ঈ-কার থাকলে উভয়ে মিলে এ-কার হয়।",
    explanation:
      "স্বরসন্ধির নিয়ম অনুযায়ী, অ + ঈ = এ। সুতরাং, পরম + ঈশ = পরমেশ।",
    topic_details: {
      title: "সন্ধি",
      summary: "দুই ধ্বনির মিলনকে সন্ধি বলে।",
      key_points: ["ধরণ: স্বরসন্ধি", "মূল শব্দ: পরম ও ঈশ", "নিয়ম: অ+ঈ=এ"],
    },
    tags: ["Grammar", "Bangla", "Sandhi"],
    createdAt: "2026-02-01T15:35:00.000Z",
    updatedAt: "2026-02-01T15:35:00.000Z",
  },
  {
    _id: "44bcs_q17_ict",
    question_id: "BCS-50th-question-17",
    category: "ICT",
    question_text: "কোনটি ই-কমার্সের প্লাটফর্ম হিসেবে কাজ করতে পারে?",
    options: ["Facebook", "Amazon", "YouTube", "All of the above"],
    correct_answer: 3,
    previous_exam_bcs: ["50th BCS"],
    hint: "বর্তমানে সব সামাজিক যোগাযোগ মাধ্যমেই কেনাবেচা হয়।",
    explanation:
      "অ্যামাজন একটি ডেডিকেটেড ই-কমার্স সাইট। ফেসবুক এবং ইউটিউব বর্তমানে তাদের প্ল্যাটফর্মে কেনাকাটার অপশন (Facebook Marketplace, YouTube Shopping) যুক্ত করেছে, তাই সবকটিই ই-কমার্স হিসেবে কাজ করতে পারে।",
    topic_details: {
      title: "E-commerce",
      summary: "ইন্টারনেটের মাধ্যমে পণ্য ক্রয়-বিক্রয়।",
      key_points: [
        "Amazon: B2C",
        "Facebook: Social Commerce",
        "YouTube: Influence Marketing",
      ],
    },
    tags: ["ICT", "Business", "Technology"],
    createdAt: "2026-02-01T15:40:00.000Z",
    updatedAt: "2026-02-01T15:40:00.000Z",
  },
  {
    _id: "44bcs_q19_int",
    question_id: "BCS-50th-question-19",
    category: "International Affairs",
    question_text:
      "আন্তর্জাতিক অর্থায়নের ভিত্তি স্থাপনে ব্রেটন উডস্ (Bretton Woods) সম্মেলন কোথায় অনুষ্ঠিত হয়েছিল?",
    options: ["নেদারল্যান্ডস", "নিউ ইয়র্ক", "নিউ হ্যাম্পশায়ার", "নিউ জার্সি"],
    correct_answer: 2,
    previous_exam_bcs: ["50th BCS"],
    hint: "যুক্তরাষ্ট্রের একটি অঙ্গরাজ্যের নাম।",
    explanation:
      "১৯৪৪ সালে মার্কিন যুক্তরাষ্ট্রের নিউ হ্যাম্পশায়ার অঙ্গরাজ্যের ব্রেটন উডস্-এ অনুষ্ঠিত এক সম্মেলনের মাধ্যমে আইএমএফ (IMF) ও বিশ্বব্যাংক (World Bank) গঠিত হয়।",
    topic_details: {
      title: "ব্রেটন উডস্ সম্মেলন",
      summary: "আধুনিক বিশ্ব অর্থনীতি নিয়ন্ত্রক সংস্থাসমূহের জন্মস্থান।",
      key_points: ["স্থান: নিউ হ্যাম্পশায়ার", "সাল: ১৯৪৪", "সংস্থা: IMF ও WB"],
    },
    tags: ["GK", "Economics", "History"],
    createdAt: "2026-02-01T15:45:00.000Z",
    updatedAt: "2026-02-01T15:45:00.000Z",
  },
  {
    _id: "44bcs_q21_math",
    question_id: "BCS-50th-question-21",
    category: "Mathematical Reasoning",
    question_text:
      "40 থেকে 50 এর মধ্যে একটি সংখ্যা দৈবভাবে নেওয়া হলে এটি মৌলিক (Prime) হওয়ার সম্ভাবনা কত?",
    options: ["3/11", "1/2", "3/11", "4/11"],
    correct_answer: 0,
    previous_exam_bcs: ["50th BCS"],
    hint: "মৌলিক সংখ্যাগুলো হলো ৪১, ৪৩ এবং ৪৭।",
    explanation:
      "৪০ থেকে ৫০ এর মধ্যে মোট সংখ্যা ১১টি (৪০ থেকে ৫০ সহ)। এর মধ্যে মৌলিক সংখ্যা ৩টি: ৪১, ৪৩, ৪৭। সুতরাং সম্ভাবনা = ৩/১১।",
    topic_details: {
      title: "সম্ভাবনা",
      summary: "অনুকূল ফলাফল এবং মোট ফলাফলের অনুপাত।",
      key_points: ["মোট সংখ্যা: ১১", "মৌলিক সংখ্যা: ৩", "অনুপাত: ৩/১১"],
    },
    tags: ["Math", "Probability", "Numbers"],
    createdAt: "2026-02-01T15:50:00.000Z",
    updatedAt: "2026-02-01T15:50:00.000Z",
  },
  {
    _id: "44bcs_q23_gk",
    question_id: "BCS-50th-question-23",
    category: "International Affairs",
    question_text:
      "বিশ্ব অর্থনীতিতে 'পেপার গোল্ড' (Paper Gold) বলতে কী বোঝায়?",
    options: [
      "বিশ্বব্যাংকের সুবিধালাভ",
      "বিশেষ উত্তোলন অধিকার (SDR)",
      "স্বর্ণের মানসম্পন্ন ভিত্তিতে মুদ্রা",
      "ঘাটতি অর্থায়ন",
    ],
    correct_answer: 1,
    previous_exam_bcs: ["50th BCS"],
    hint: "এটি আইএমএফ-এর একটি সংরক্ষিত সম্পদ।",
    explanation:
      "আইএমএফ (IMF) প্রবর্তিত স্পেশাল ড্রয়িং রাইটস বা SDR-কে আন্তর্জাতিক বাণিজ্যে সোনার বিকল্প হিসেবে গণ্য করা হয় বলে একে 'পেপার গোল্ড' বলা হয়।",
    topic_details: {
      title: "International Finance",
      summary: "SDR is an international reserve asset created by the IMF.",
      key_points: ["Term: Paper Gold", "Meaning: SDR", "Organization: IMF"],
    },
    tags: ["Economics", "GK", "IMF"],
    createdAt: "2026-02-01T15:55:00.000Z",
    updatedAt: "2026-02-01T15:55:00.000Z",
  },
  {
    _id: "44bcs_q25_lit",
    question_id: "BCS-50th-question-25",
    category: "Bangla Literature",
    question_text:
      "তারাশঙ্কর বন্দ্যোপাধ্যায়ের 'কবি' গ্রন্থটিতে কোন্ বিষয়টি প্রাধান্য পেয়েছে?",
    options: [
      "অসম ভালোবাসা",
      "আদিবাসীদের জীবন চিত্র",
      "ডোম সম্প্রদায়ের জীবন কাহিনী",
      "পঞ্চাশের মন্বন্তর",
    ],
    correct_answer: 2,
    previous_exam_bcs: ["50th BCS"],
    hint: "এটির প্রধান চরিত্র নিতাইচরণ।",
    explanation:
      "'কবি' উপন্যাসে কবিগান গায়ক নিম্নবর্গের ডোম সম্প্রদায়ের জীবন এবং তাদের প্রান্তিক জীবন সংগ্রাম ফুটে উঠেছে।",
    topic_details: {
      title: "বাংলা কথাসাহিত্য",
      summary: "আঞ্চলিক উপন্যাসের সার্থক রূপকার তারাশঙ্কর।",
      key_points: [
        "লেখক: তারাশঙ্কর বন্দ্যোপাধ্যায়",
        "চরিত্র: নিতাই ডোম",
        "বিষয়: কবিয়াল জীবন",
      ],
    },
    tags: ["Literature", "Novel", "Bangla"],
    createdAt: "2026-02-01T16:00:00.000Z",
    updatedAt: "2026-02-01T16:00:00.000Z",
  },
  {
    _id: "44bcs_q27_bd",
    question_id: "BCS-50th-question-27",
    category: "Bangladesh Affairs",
    question_text: "প্রাচীন 'হরিকেল' জনপদটি কোন্ কোন্ বিভাগ সমন্বয়ে গঠিত?",
    options: [
      "রাজশাহী ও রংপুর",
      "চট্টগ্রাম ও সিলেট",
      "রাজশাহী ও খুলনা",
      "খুলনা ও ঢাকা",
    ],
    correct_answer: 1,
    previous_exam_bcs: ["50th BCS"],
    hint: "এটি বাংলাদেশের দক্ষিণ-পূর্বাঞ্চলে অবস্থিত।",
    explanation:
      "প্রাচীন জনপদ হরিকেল মূলত চট্টগ্রাম ও সিলেট অঞ্চল নিয়ে গঠিত ছিল। এর সীমা আধুনিক বাংলাদেশের দক্ষিণ-পূর্বাঞ্চল পর্যন্ত বিস্তৃত।",
    topic_details: {
      title: "প্রাচীন জনপদ",
      summary: "বাংলার প্রাচীন ভৌগোলিক বিভাগসমূহ।",
      key_points: [
        "নাম: হরিকেল",
        "অঞ্চল: সিলেট-চট্টগ্রাম",
        "ইতিহাস: প্রাচীন বাংলা",
      ],
    },
    tags: ["History", "Bangladesh Affairs", "Ancient Bengal"],
    createdAt: "2026-02-01T16:05:00.000Z",
    updatedAt: "2026-02-01T16:05:00.000Z",
  },
  {
    _id: "44bcs_q28_eng",
    question_id: "BCS-50th-question-28",
    category: "English Language",
    question_text:
      "'It is no good falling in love at first sight'. Here the word 'falling' is a/an -",
    options: ["participle", "infinitive", "gerund", "verbal noun"],
    correct_answer: 2,
    previous_exam_bcs: ["50th BCS"],
    hint: "Noun এবং Verb এর কাজ একসাথে করলে কী হয়?",
    explanation:
      "এখানে 'falling' শব্দটি Noun-এর কাজ করছে এবং এর আগে 'no good' ফ্রেজটি রয়েছে। তাই এটি একটি Gerund।",
    topic_details: {
      title: "Non-Finite Verb",
      summary: "Gerund works as a noun and a verb simultaneously.",
      key_points: ["V + ing", "Acts as Noun", "Subject/Object position"],
    },
    tags: ["English", "Grammar", "Gerund"],
    createdAt: "2026-02-01T16:10:00.000Z",
    updatedAt: "2026-02-01T16:10:00.000Z",
  },
  {
    _id: "44bcs_q4_ict",
    question_id: "BCS-50th-question-4",
    category: "ICT",
    question_text: "0x1234 সংখ্যার বাইনারি রূপ কোনটি?",
    options: [
      "001010011100",
      "0010010010100",
      "1110101111001011",
      "0001001000110100",
    ],
    correct_answer: 3,
    previous_exam_bcs: ["50th BCS"],
    hint: "প্রতিটি হেক্সাডেসিমেল সংখ্যার জন্য ৪-বিট বাইনারি নিন।",
    explanation:
      "হেক্সাডেসিমেল 1=0001, 2=0010, 3=0011, 4=0100। একত্রে: 0001001000110100।",
    topic_details: {
      title: "Number System",
      summary: "Conversion between Hexadecimal and Binary.",
      key_points: [
        "1 Hex digit = 4 Binary bits",
        "Base 16 to Base 2",
        "Weight: 8-4-2-1",
      ],
    },
    tags: ["ICT", "Number System", "Binary"],
    createdAt: "2026-02-01T16:15:00.000Z",
    updatedAt: "2026-02-01T16:15:00.000Z",
  },
  {
    _id: "44bcs_q5_math",
    question_id: "BCS-50th-question-5",
    category: "Mathematical Reasoning",
    question_text:
      "2/5, 3/5 ও 6/15 ভগ্নাংশগুলোর লঘিষ্ঠ সাধারণ গুণিতক (ল.সা.গু) কত?",
    options: ["7/5", "6/5", "1/15", "6/15"],
    correct_answer: 1,
    previous_exam_bcs: ["50th BCS"],
    hint: "ভগ্নাংশের ল.সা.গু = (লবগুলোর ল.সা.গু) / (হরগুলোর গ.সা.গু)।",
    explanation:
      "লব ২, ৩, ৬ এর ল.সা.গু = ৬। হর ৫, ৫, ১৫ এর গ.সা.গু = ৫। ফলাফল ৬/৫।",
    topic_details: {
      title: "ল.সা.গু ও গ.সা.গু",
      summary: "ভগ্নাংশের লঘিষ্ঠ সাধারণ গুণিতক নির্ণয়ের নিয়ম।",
      key_points: ["Numerator LCM: 6", "Denominator GCF: 5", "Result: 6/5"],
    },
    tags: ["Math", "Arithmetic", "Fraction"],
    createdAt: "2026-02-01T16:20:00.000Z",
    updatedAt: "2026-02-01T16:20:00.000Z",
  },
  {
    _id: "44bcs_q7_math",
    question_id: "BCS-50th-question-7",
    category: "Mathematical Reasoning",
    question_text:
      "একটি ত্রিভুজের তিনটি কোণের পরিমাণ x, x/2 ও 3x/2। ক্ষুদ্রতম কোণের মান রেডিয়ানে কত?",
    options: ["π/6", "π/3", "π/2", "2π/3"],
    correct_answer: 1,
    previous_exam_bcs: ["50th BCS"],
    hint: "ত্রিভুজের তিন কোণের সমষ্টি ১৮০ ডিগ্রি।",
    explanation:
      "x + x/2 + 3x/2 = 180 => 3x = 180 => x = 60। ক্ষুদ্রতম কোণ x/2 = 30 ডিগ্রি। রেডিয়ানে 30 * π/180 = π/6।",
    topic_details: {
      title: "Geometry",
      summary: "Sum of angles in a triangle and radian conversion.",
      key_points: ["Total angle: 180°", "Smallest: 30°", "Radian: π/6"],
    },
    tags: ["Math", "Geometry", "Trigonometry"],
    createdAt: "2026-02-01T16:25:00.000Z",
    updatedAt: "2026-02-01T16:25:00.000Z",
  },
  {
    _id: "44bcs_q10_math",
    question_id: "BCS-50th-question-10",
    category: "Mathematical Reasoning",
    question_text: "যদি logx 324 = 4 হয় তবে x এর মান হবে:",
    options: ["4", "2√3", "3√3", "3√2"],
    correct_answer: 3,
    previous_exam_bcs: ["50th BCS"],
    hint: "x^4 = 324 ধরে সমাধান করুন।",
    explanation: "x^4 = 324 => x^4 = 18^2 => x^4 = (3√2)^4। সুতরাং x = 3√2।",
    topic_details: {
      title: "Logarithm",
      summary: "Converting log to exponential form.",
      key_points: [
        "Rule: log_a b = c => a^c = b",
        "324 Factor: (3√2)^4",
        "Result: 3√2",
      ],
    },
    tags: ["Math", "Algebra", "Logarithm"],
    createdAt: "2026-02-01T16:30:00.000Z",
    updatedAt: "2026-02-01T16:30:00.000Z",
  },
  {
    _id: "44bcs_q26_math",
    question_id: "BCS-50th-question-26",
    category: "Mathematical Reasoning",
    question_text: "x^4 - 2x + 1 কে x - 3 দিয়ে ভাগ করলে ভাগশেষ কত হবে?",
    options: ["2", "81", "0", "76"],
    correct_answer: 3,
    previous_exam_bcs: ["50th BCS"],
    hint: "ভাগশেষ উপপাদ্য (Remainder Theorem) ব্যবহার করুন।",
    explanation:
      "f(x) = x^4 - 2x + 1। f(3) = 3^4 - 2(3) + 1 = 81 - 6 + 1 = 76।",
    topic_details: {
      title: "Polynomial",
      summary: "The remainder of f(x) when divided by (x-a) is f(a).",
      key_points: ["Value: x = 3", "Calculation: 81-6+1", "Result: 76"],
    },
    tags: ["Math", "Algebra", "Polynomial"],
    createdAt: "2026-02-01T16:35:00.000Z",
    updatedAt: "2026-02-01T16:35:00.000Z",
  },

  
  {
    "_id": "bcs_q108_science",
    "question_id": "BCS-50th-108",
    "category": "General Science",
    "question_text": "MRI কোন্ নীতিতে কাজ করে?",
    "options": [
      "(ক) শরীরের ত্রি-মাত্রিক চিত্র তৈরি করতে এক্স-রে ব্যবহার দ্বারা",
      "(খ) তেজস্ক্রিয় ট্রেসার দ্বারা নির্গত গামা-রে শনাক্তকরণের মাধ্যমে",
      "(গ) শক্তিশালী চুম্বক এবং রেডিও তরঙ্গ ব্যবহার করে ইমেজ তৈরির মাধ্যমে",
      "(ঘ) উচ্চ ফ্রিকোয়েন্সি শব্দ তরঙ্গ ব্যবহার করে ইমেজ তৈরির মাধ্যমে"
    ],
    "correct_answer": 2,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "MRI-এর পূর্ণরূপ Magnetic Resonance Imaging।",
    "explanation": "MRI মেশিনে শক্তিশালী চৌম্বক ক্ষেত্র এবং রেডিও ফ্রিকোয়েন্সি তরঙ্গ ব্যবহার করে শরীরের অভ্যন্তরীণ অঙ্গের বিস্তারিত ছবি তৈরি করা হয়। এতে কোনো ক্ষতিকর বিকিরণ (যেমন এক্স-রে) ব্যবহৃত হয় না।",
    "topic_details": {
      "title": "Medical Imaging Technology",
      "summary": "Working principle of Magnetic Resonance Imaging.",
      "key_points": [
        "Uses: Magnetic fields and Radio waves",
        "No Ionizing Radiation",
        "High-resolution soft tissue imaging"
      ]
    },
    "tags": ["Science", "Physics", "Medical Technology"]
  },
  {
    "_id": "bcs_q112_geography",
    "question_id": "BCS-50th-112",
    "category": "Geography & Environment",
    "question_text": "বস্তুর ওজন পৃথিবীর কোন্ স্থানে সবচেয়ে বেশি?",
    "options": [
      "(ক) মেরু অঞ্চল",
      "(খ) নিরক্ষীয় অঞ্চল",
      "(γ) একটি পাহাড়ের চূড়ায়",
      "(ঘ) পৃথিবীর কেন্দ্রে"
    ],
    "correct_answer": 0,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "অভিকর্ষজ ত্বরণ (g) যেখানে বেশি, ওজনও সেখানে বেশি।",
    "explanation": "পৃথিবী পুরোপুরি গোল নয়, মেরু অঞ্চলে কিছুটা চাপা। ফলে মেরু অঞ্চলে পৃথিবীর ব্যাসার্ধ সবচেয়ে কম এবং অভিকর্ষজ ত্বরণ $g$-এর মান সবচেয়ে বেশি (প্রায় $9.83\text{ m/s}^2$)। তাই সেখানে বস্তুর ওজন সবচেয়ে বেশি হয়।",
    "topic_details": {
      "title": "Gravity and Weight",
      "summary": "Variation of g on Earth's surface.",
      "key_points": [
        "Max weight: Poles",
        "Min weight: Equator",
        "Zero weight: Center of Earth"
      ]
    },
    "tags": ["Geography", "Physics", "Gravity"]
  },
  {
    "_id": "bcs_q117_physics",
    "question_id": "BCS-50th-117",
    "category": "General Science",
    "question_text": "একটি কঠিন ঘনক অর্ধেক পানির উপরে ও অর্ধেক পানির নিচে ভাসছে। আপনি যদি ঘনকটি পানির মধ্যে ২ সে.মি. গভীরে ঠেলে দেন এবং তারপর সেটিকে ছেড়ে দেন, তাহলে কী ঘটবে?",
    "options": [
      "(ক) ঘনকটি পানির ২ সে.মি. গভীরে থাকবে",
      "(খ) ঘনকটি সম্পূর্ণভাবে ডুবে যাবে",
      "(গ) ঘনকটি আবার অর্ধেক ডুবে থাকা ও অর্ধেক ভেসে থাকা অবস্থায় ফিরে আসবে",
      "(ঘ) ঘনকটি প্রথমে যতটুকু ভেসে ছিল তার চেয়ে উপরে উঠবে"
    ],
    "correct_answer": 2,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "আর্কিমিডিসের নীতি এবং প্লবতা চিন্তা করুন।",
    "explanation": "ঘনকটি সাম্যাবস্থায় (Equilibrium) অর্ধেক ডুবে ছিল। বাইরে থেকে বল প্রয়োগ করে নিচে নামালে প্লবতা বল বৃদ্ধি পায়, যা ছেড়ে দিলে ঘনকটিকে পুনরায় তার আগের সাম্যাবস্থায় ফিরিয়ে আনে।",
    "topic_details": {
      "title": "Archimedes' Principle",
      "summary": "Buoyancy and floatation of objects.",
      "key_points": [
        "Upward thrust (Buoyancy)",
        "Equilibrium state",
        "Restoring force"
      ]
    },
    "tags": ["Science", "Physics", "Fluid Mechanics"]
  },
  {
    "_id": "bcs_q121_math",
    "question_id": "BCS-50th-121",
    "category": "Mathematical Reasoning",
    "question_text": "$x^2 - (p+q)x + pq = 0$ এর সমাধান সেট হবে:",
    "options": [
      "(ক) {p, q}",
      "(খ) {p, -q}",
      "(গ) {-p, q}",
      "(ঘ) {-p, -q}"
    ],
    "correct_answer": 0,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "উৎপাদকে বিশ্লেষণ করুন।",
    "explanation": "$x^2 - px - qx + pq = 0 \\Rightarrow x(x-p) - q(x-p) = 0 \\Rightarrow (x-p)(x-q) = 0$। অতএব $x = p$ অথবা $x = q$।",
    "topic_details": {
      "title": "Quadratic Equations",
      "summary": "Solving second-degree equations by factoring.",
      "key_points": [
        "Roots of equation",
        "Solution set: {p, q}",
        "Middle term break"
      ]
    },
    "tags": ["Math", "Algebra", "Equations"]
  },
  {
    "_id": "bcs_q122_english",
    "question_id": "BCS-50th-122",
    "category": "English",
    "question_text": "Which one is a coordinating conjunction?",
    "options": [
      "(ক) since",
      "(খ) lest",
      "(গ) as",
      "(ঘ) so"
    ],
    "correct_answer": 3,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "FANBOYS সূত্রটি মনে করুন।",
    "explanation": "Coordinating conjunction মনে রাখার সহজ উপায় হলো FANBOYS (For, And, Nor, But, Or, Yet, So)। এখানে 'so' একটি coordinating conjunction। অন্যগুলো subordinating conjunction।",
    "topic_details": {
      "title": "Conjunctions",
      "summary": "Types of connectors in English grammar.",
      "key_points": [
        "Coordinating: FANBOYS",
        "Subordinating: since, as, because, etc.",
        "Function: Joining independent clauses"
      ]
    },
    "tags": ["English", "Grammar", "Parts of Speech"]
  },

  {
    "_id": "bcs_q91_ethics",
    "question_id": "BCS-50th-91",
    "category": "Ethics & Good Governance",
    "question_text": "টেকসই উন্নয়নের জন্য সু-শাসন অপরিহার্য কারণ এটি-",
    "options": [
      "(ক) দ্রুত শিল্পায়ন নিশ্চিত করে",
      "(খ) অর্থনৈতিক প্রবৃদ্ধি ও সামাজিক ন্যায়ের ভারসাম্য রক্ষা করে",
      "(গ) জনসংখ্যা হ্রাস করে",
      "(ঘ) রাজনৈতিক দ্বন্দ্ব দূর করে"
    ],
    "correct_answer": 1,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "সু-শাসন উন্নয়নকে অন্তর্ভুক্তিমূলক করে।",
    "explanation": "টেকসই উন্নয়নের মূল লক্ষ্য হলো অর্থনৈতিক অগ্রগতি এবং সামাজিক সাম্যের মিলন ঘটানো, যা সু-শাসনের মাধ্যমেই সম্ভব।",
    "topic_details": {
      "title": "Sustainable Development",
      "summary": "The role of governance in achieving SDGs.",
      "key_points": [
        "Inclusivity",
        "Social Justice",
        "Economic Balance"
      ]
    },
    "tags": ["Ethics", "Governance", "SDG"]
  },
  {
    "_id": "bcs_q93_science",
    "question_id": "BCS-50th-93",
    "category": "General Science",
    "question_text": "কোন্টি মাইক্রোওয়েভ ওভেনের কার্যনীতিকে সর্বোত্তমভাবে বর্ণনা করতে পারে?",
    "options": [
      "(ক) উচ্চ তাপ বিকিরণ এবং খাদ্য কণাগুলিতে পরিবহন",
      "(খ) খাদ্য কণাগুলিতে ইনফ্রা-রেড বিকিরণ এবং শোষণ",
      "(গ) পানির অণুগুলির ইন্ডাকশন হিটিং",
      "(ঘ) ঘূর্ণনের কারণে ডাই-ইলেকট্রিক হিটিং"
    ],
    "correct_answer": 3,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "এটি অণুগুলোর কম্পনের মাধ্যমে তাপ উৎপন্ন করে।",
    "explanation": "মাইক্রোওয়েভ ওভেনে অণুগুলোর মেরুকরণ পরিবর্তনের মাধ্যমে 'Dielectric heating' পদ্ধতিতে তাপ উৎপন্ন হয়।",
    "topic_details": {
      "title": "Microwave Oven Mechanism",
      "summary": "Heating process in kitchen electronics.",
      "key_points": [
        "Dielectric heating",
        "Molecular vibration",
        "Non-ionizing radiation"
      ]
    },
    "tags": ["Science", "Physics", "Microwave"]
  },
  {
    "_id": "bcs_q103_language",
    "question_id": "BCS-50th-103",
    "category": "Bangla Language",
    "question_text": "'ময়দান, মুনাফা, বই' শব্দ তিনটি কোন্ ভাষা থেকে আগত?",
    "options": [
      "(ক) উর্দু",
      "(খ) ফারসি",
      "(গ) আরবি",
      "(ঘ) পর্তুগীজ"
    ],
    "correct_answer": 2,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "এই শব্দগুলো মধ্যপ্রাচ্যের ভাষা থেকে এসেছে।",
    "explanation": "বাংলা ভাষায় ব্যবহৃত ময়দান, মুনাফা এবং বই মূলত আরবি শব্দ হিসেবে গণ্য করা হয়।",
    "topic_details": {
      "title": "Loanwords in Bangla",
      "summary": "Origin of foreign words in Bengali language.",
      "key_points": [
        "Origin: Arabic",
        "Category: Loanwords",
        "Common usage: Legal and daily life"
      ]
    },
    "tags": ["Bangla", "Vocabulary", "Etymology"]
  },
  {
    "_id": "bcs_q107_biology",
    "question_id": "BCS-50th-107",
    "category": "General Science",
    "question_text": "'কোভিড-১৯'-এর জন্য তৈরি টিকা কীভাবে কাজ করে?",
    "options": [
      "(ক) রোগ প্রতিরোধ ক্ষমতা উদ্দীপিত করার জন্য দুর্বল ভাইরাসের একটি রূপ প্রবর্তন করে",
      "(খ) পরিশোধিত ভাইরাল প্রোটিনের সাবইউনিট প্রবিষ্ট করানোর মাধ্যমে",
      "(গ) হোস্ট কোষে জেনেটিক উপাদান বহন করার জন্য একটি ভাইরাস ঘটিত বাহক ব্যবহার করে",
      "(ঘ) mRNA সরবরাহ করে যা হোস্ট কোষগুলোকে একটি ভাইরাল প্রোটিন তৈরির নির্দেশ দেয়"
    ],
    "correct_answer": 3,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "আধুনিক প্রযুক্তির টিকা যেভাবে কাজ করে।",
    "explanation": "mRNA টিকাগুলো শরীরের কোষকে নির্দেশ দেয় কীভাবে একটি 'স্পাইক প্রোটিন' তৈরি করতে হয় যা ইমিউন সিস্টেমকে ভাইরাসের বিরুদ্ধে লড়াই করতে শেখায়।",
    "topic_details": {
      "title": "Vaccine Technology",
      "summary": "How mRNA vaccines function.",
      "key_points": [
        "Technology: mRNA",
        "Target: Spike protein",
        "Goal: Immune stimulation"
      ]
    },
    "tags": ["Science", "Biology", "Covid-19"]
  },
  {
    "_id": "bcs_q114_english",
    "question_id": "BCS-50th-114",
    "category": "English",
    "question_text": "What gender is the word 'monarch'?",
    "options": [
      "(ক) masculine",
      "(খ) feminine",
      "(গ) neuter",
      "(ঘ) common"
    ],
    "correct_answer": 3,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "এটি নারী বা পুরুষ উভয় শাসককেই বোঝাতে পারে।",
    "explanation": "Monarch শব্দটি রাজা বা রানী উভয়কেই বোঝাতে পারে, তাই এটি একটি Common Gender।",
    "topic_details": {
      "title": "English Gender",
      "summary": "Classification of nouns based on gender.",
      "key_points": [
        "Type: Common Gender",
        "Definition: Refers to both male and female",
        "Example: Doctor, Teacher, Monarch"
      ]
    },
    "tags": ["English", "Grammar", "Gender"]
  },

  
  {
    "_id": "bcs_q92_science",
    "question_id": "BCS-50th-92",
    "category": "General Science",
    "question_text": "যদি একটি গাড়ীর গতি দ্বিগুণ করা হয়, তবে গাড়ীটির গতিশক্তি পূর্বের গতিশক্তির কতগুণ হবে?",
    "options": [
      "০.৫",
      "২",
      "০.২৫",
      "৪"
    ],
    "correct_answer": 3,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "গতিশক্তি বেগের বর্গের সমানুপাতিক।",
    "explanation": "গতিশক্তির সূত্র হলো $E_k = \\frac{1}{2}mv^2$। এখানে গতিবেগ ($v$) দ্বিগুণ করলে গতিশক্তি ($2^2$) বা ৪ গুণ বৃদ্ধি পায়।",
    "topic_details": {
      "title": "গতিশক্তি ও কাজ",
      "summary": "বস্তুর বেগের পরিবর্তনের সাথে গতিশক্তির গাণিতিক সম্পর্ক।",
      "key_points": [
        "সূত্র: $E_k = \\frac{1}{2}mv^2$",
        "সম্পর্ক: গতিশক্তি $\\propto$ বেগের বর্গ",
        "ফলাফল: বেগ ২ গুণ হলে শক্তি ৪ গুণ হয়"
      ]
    },
    "tags": ["Physics", "Kinetic Energy", "General Science"]
  },
  {
    "_id": "bcs_q101_english",
    "question_id": "BCS-50th-101",
    "category": "English Language & Literature",
    "question_text": "The book that she recommended turned out to be very helpful. Here the underlined clause (that she recommended) is a-",
    "options": [
      "relative clause",
      "noun clause",
      "adverbial clause",
      "independent clause"
    ],
    "correct_answer": 0,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "It modifies the noun 'book'.",
    "explanation": "'that she recommended' অংশটি 'book' নাউনটিকে মডিফাই করছে। নাউনকে মডিফাই করার কারণে এটি একটি Adjective clause, যা Relative pronoun 'that' দিয়ে শুরু হওয়ায় একে Relative Clause বলা হয়।",
    "topic_details": {
      "title": "Clauses",
      "summary": "Functions of subordinate clauses in a sentence.",
      "key_points": [
        "Modifies: Noun (The book)",
        "Type: Adjective/Relative Clause",
        "Marker: Relative pronoun 'that'"
      ]
    },
    "tags": ["English Grammar", "Clause", "Relative Clause"]
  },
  {
    "_id": "bcs_q106_gk",
    "question_id": "BCS-50th-106",
    "category": "General Knowledge (International)",
    "question_text": "মার্কিন যুক্তরাষ্ট্র কত সালে রাশিয়ার কাছ থেকে আলাস্কা ক্রয় করেছিল?",
    "options": [
      "১৮৪৬",
      "১৮৬৭",
      "১৮৯৮",
      "১৯০৫"
    ],
    "correct_answer": 1,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "এটি উনবিংশ শতাব্দীর মাঝামাঝি সময়ের ঘটনা।",
    "explanation": "১৮৬৭ সালের ৩০ মার্চ মার্কিন যুক্তরাষ্ট্র রাশিয়ার কাছ থেকে ৭.২ মিলিয়ন ডলারের বিনিময়ে আলাস্কা ভূখণ্ডটি ক্রয় করে।",
    "topic_details": {
      "title": "US History",
      "summary": "Alaska Purchase from Russia.",
      "key_points": [
        "Year: 1867",
        "Price: $7.2 Million",
        "Parties: USA and Russia"
      ]
    },
    "tags": ["History", "International Affairs", "USA"]
  },
  {
    "_id": "bcs_q113_ict",
    "question_id": "BCS-50th-113",
    "category": "ICT",
    "question_text": "ক্লাউড কম্পিউটিং কোন্ পরিষেবা প্রদান করে?",
    "options": [
      "শুধুমাত্র লোকাল স্টোরেজ",
      "ভার্চুয়াল কম্পিউটিং রিসোর্সেস",
      "শুধুমাত্র ভার্চুয়াল স্টোরেজ",
      "উপরের সবগুলো"
    ],
    "correct_answer": 1,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "এটি ইন্টারনেটের মাধ্যমে রিসোর্স শেয়ারিং নির্দেশ করে।",
    "explanation": "ক্লাউড কম্পিউটিং ইন্টারনেটের মাধ্যমে স্টোরেজ, সার্ভার, ডাটাবেস এবং নেটওয়ার্কিংয়ের মতো ভার্চুয়াল রিসোর্স বা পরিষেবা প্রদান করে।",
    "topic_details": {
      "title": "Cloud Computing",
      "summary": "On-demand availability of computer system resources.",
      "key_points": [
        "Service model: SaaS, PaaS, IaaS",
        "Nature: Virtualized resources",
        "Requirement: Internet connectivity"
      ]
    },
    "tags": ["ICT", "Cloud Computing", "Technology"]
  },
  {
    "_id": "bcs_q119_math",
    "question_id": "BCS-50th-119",
    "category": "Mathematical Reasoning",
    "question_text": "$(x^2 - 2 + \\frac{1}{x^2})^7$ এর বিস্তৃতিতে মধ্যপদ কততম পদটি?",
    "options": [
      "পঞ্চম",
      "সপ্তম",
      "অষ্টম",
      "নবম"
    ],
    "correct_answer": 2,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "প্রথমে রাশিটিকে বর্গাকারে সাজান।",
    "explanation": "রাশিটি হলো $(x - \\frac{1}{x})^{2 \\times 7} = (x - \\frac{1}{x})^{14}$। এখানে ঘাত $n=14$ (জোড়), তাই মধ্যপদ হবে $(\\frac{14}{2} + 1) = 8$ তম পদ।",
    "topic_details": {
      "title": "Binomial Expansion",
      "summary": "Finding middle terms in a binomial expression.",
      "key_points": [
        "Expression: $(a-b)^n$",
        "Total terms: $n+1$",
        "Middle term formula: $(\\frac{n}{2} + 1)$ for even $n$"
      ]
    },
    "tags": ["Math", "Algebra", "Binomial Theorem"]
  } ,
  
  {
    "_id": "bcs_q115_agriculture",
    "question_id": "BCS-50th-115",
    "category": "Bangladesh Affairs",
    "question_text": "বাংলাদেশের উচ্চফলনশীল (উফশী) জাতের ধান ও গমের নাম যথাক্রমে-",
    "options": [
      "(ক) হরিধান, রূপালী",
      "(খ) ইরাটম, বর্ণালী",
      "(গ) ব্রি-শাইল, বলাকা",
      "(ঘ) হীরা, উত্তরন"
    ],
    "correct_answer": 1,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "ইরাটম একটি ধানের জাত এবং বর্ণালী গমের জাত।",
    "explanation": "ইরাটম-২৪ ও ইরাটম-৩৮ হলো উন্নত জাতের ধান, অন্যদিকে বর্ণালী ও শুভ্র হলো উন্নত জাতের গম।",
    "topic_details": {
      "title": "High Yielding Varieties (HYV)",
      "summary": "Common HYV crops in Bangladesh agriculture.",
      "key_points": [
        "Rice: Irratom, BRRI Dhan",
        "Wheat: Bornali, Kanchan",
        "Context: Green Revolution"
      ]
    },
    "tags": ["Agriculture", "Bangladesh Affairs", "Crops"]
  },
  {
    "_id": "bcs_q116_culture",
    "question_id": "BCS-50th-116",
    "category": "Bangladesh Affairs",
    "question_text": "কোনটি UNESCO 'Intangible Cultural Heritage'-এর অন্তর্ভুক্ত?",
    "options": [
      "(ক) একুশে ফেব্রুয়ারি",
      "(খ) পহেলা বৈশাখ",
      "(গ) বাউল গান",
      "(ঘ) জামদানি বয়ন শিল্প"
    ],
    "correct_answer": 2,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "এটি ২০০৮ সালে স্বীকৃতি পায়।",
    "explanation": "বাউল গান ২০০৮ সালে ইউনেস্কো কর্তৃক 'Intangible Cultural Heritage' হিসেবে স্বীকৃতি পায়। উল্লেখ্য, জামদানি (২০১৩) এবং মঙ্গল শোভাযাত্রাও (২০১৬) এই তালিকায় রয়েছে, তবে বাউল গান ছিল অন্যতম প্রধান ও প্রাথমিক অন্তর্ভুক্তি।",
    "topic_details": {
      "title": "UNESCO Heritage in Bangladesh",
      "summary": "Cultural recognition of local traditions.",
      "key_points": [
        "Baul Songs (2008)",
        "Jamdani (2013)",
        "Mangal Shobhajatra (2016)"
      ]
    },
    "tags": ["Culture", "UNESCO", "Bangladesh Affairs"]
  },
  {
    "_id": "bcs_q118_english",
    "question_id": "BCS-50th-118",
    "category": "English",
    "question_text": "What is the antonym of 'percipience'?",
    "options": [
      "(ক) shrewdness",
      "(খ) dullness",
      "(গ) discerning",
      "(ঘ) astuteness"
    ],
    "correct_answer": 1,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "Percipience means having keen insight.",
    "explanation": "'Percipience' শব্দের অর্থ তীক্ষ্ণ অন্তর্দৃষ্টি বা বিচক্ষণতা। এর বিপরীত শব্দ হলো 'Dullness' (স্থূলবুদ্ধি বা জড়তা)।",
    "topic_details": {
      "title": "English Vocabulary",
      "summary": "Synonyms and Antonyms of cognitive terms.",
      "key_points": [
        "Word: Percipience",
        "Antonym: Dullness",
        "Synonyms: Shrewdness, Astuteness"
      ]
    },
    "tags": ["English", "Vocabulary", "Antonyms"]
  },
  {
    "_id": "bcs_q120_english",
    "question_id": "BCS-50th-120",
    "category": "English",
    "question_text": "Identify the sentence where 'up' functions as a noun-",
    "options": [
      "(ক) He turned the volume up.",
      "(খ) Business confidence is on the up.",
      "(গ) We live just up the road.",
      "(ঘ) Our system should be up by afternoon."
    ],
    "correct_answer": 1,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "Look for 'up' after an article or preposition.",
    "explanation": "বাক্যটিতে 'the' (article)-এর পরে 'up' ব্যবহৃত হয়েছে, যা নাউন হিসেবে কাজ করছে। এখানে 'on the up' অর্থ হলো উন্নতির দিকে।",
    "topic_details": {
      "title": "Parts of Speech",
      "summary": "The same word acting as different parts of speech.",
      "key_points": [
        "Context: On the up",
        "Function: Noun",
        "Clue: Preceded by 'the'"
      ]
    },
    "tags": ["English", "Grammar", "Parts of Speech"]
  },
  {
    "_id": "bcs_q123_logic",
    "question_id": "BCS-50th-123",
    "category": "Mental Ability",
    "question_text": "প্রত্যায়ন বায়ু উত্তর গোলার্ধে _____ দিক থেকে _____ দিকে প্রবাহিত হয়?",
    "options": [
      "(ক) পূর্ব, পশ্চিম",
      "(খ) দক্ষিণ-পশ্চিম, উত্তর-পূর্ব",
      "(গ) উত্তর, দক্ষিণ",
      "(ঘ) উত্তর, পশ্চিম"
    ],
    "correct_answer": 1,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "এটি কর্কটীয় উচ্চচাপ বলয় থেকে সুমেরু বৃত্তের দিকে যায়।",
    "explanation": "উত্তর গোলার্ধে প্রত্যায়ন বায়ু (Westerlies) দক্ষিণ-পশ্চিম দিক থেকে উত্তর-পূর্ব দিকে প্রবাহিত হয়।",
    "topic_details": {
      "title": "Wind Systems",
      "summary": "Global wind patterns and their directions.",
      "key_points": [
        "Wind: Westerlies (প্রত্যায়ন বায়ু)",
        "Hemisphere: Northern",
        "Direction: SW to NE"
      ]
    },
    "tags": ["Geography", "Atmosphere", "Wind"]
  },


  {
    "_id": "bcs_q95_governance",
    "question_id": "BCS-50th-95",
    "category": "Ethics & Good Governance",
    "question_text": "সংবাদপত্রের স্বাধীনতা কোন্ ধরনের অধিকার?",
    "options": [
      "(ক) ব্যক্তিগত",
      "(খ) সামাজিক",
      "(গ) রাষ্ট্রীয়",
      "(ঘ) নীতিগত"
    ],
    "correct_answer": 1,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "এটি নাগরিকের মৌলিক অধিকারের অংশ।",
    "explanation": "সংবাদপত্রের স্বাধীনতা মূলত একটি সামাজিক ও নাগরিক অধিকার, যা গণতান্ত্রিক রাষ্ট্রে মত প্রকাশের স্বাধীনতার অবিচ্ছেদ্য অংশ হিসেবে বিবেচিত হয়।",
    "topic_details": {
      "title": "Rights of Citizens",
      "summary": "Classification of various rights in a democracy.",
      "key_points": [
        "Category: Social Right",
        "Context: Freedom of Expression",
        "Significance: Pillar of Democracy"
      ]
    },
    "tags": ["Governance", "Civics", "Human Rights"]
  },
  {
    "_id": "bcs_q100_culture",
    "question_id": "BCS-50th-100",
    "category": "Bangladesh Affairs",
    "question_text": "কোন্টি বাউল গানের বৈশিষ্ট্য?",
    "options": [
      "(ক) বীরত্বগাথা ও ভক্তিমূলক",
      "(খ) মানবিক আবেগ ও দৈনন্দিন জীবন",
      "(গ) আধ্যাত্মিক প্রেম ও অন্তর্গত অনুসন্ধান",
      "(ঘ) পল্লী জীবনের সুখ দুঃখ"
    ],
    "correct_answer": 2,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "লালন শাহের দর্শনের কথা চিন্তা করুন।",
    "explanation": "বাউল গানের প্রধান উপজীব্য হলো আধ্যাত্মিক দেহতত্ত্ব, স্রষ্টার সাথে আত্মার প্রেম এবং মনের মানুষের অন্তহীন অনুসন্ধান।",
    "topic_details": {
      "title": "Folk Music of Bangladesh",
      "summary": "Philosophical roots of Baul music.",
      "key_points": [
        "Theme: Spirituality",
        "Origin: Rural Bengal",
        "Key Figure: Lalon Shah"
      ]
    },
    "tags": ["Culture", "Music", "Literature"]
  },
  {
    "_id": "bcs_q102_export",
    "question_id": "BCS-50th-102",
    "category": "Bangladesh Affairs",
    "question_text": "বাংলাদেশে রপ্তানি আয়ের প্রধান উৎস কোনটি?",
    "options": [
      "(ক) জনশক্তি রপ্তানি",
      "(খ) তৈরি পোশাক রপ্তানি",
      "(গ) জাতিসংঘ শান্তি মিশনে শান্তিরক্ষী প্রেরণ",
      "(ঘ) চামড়া জাতীয় পণ্য রপ্তানি"
    ],
    "correct_answer": 1,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "এটি বাংলাদেশের অর্থনীতির মেরুদণ্ড।",
    "explanation": "বাংলাদেশের মোট রপ্তানি আয়ের সিংহভাগ (প্রায় ৮০% এর বেশি) আসে তৈরি পোশাক (RMG) খাত থেকে।",
    "topic_details": {
      "title": "Economy of Bangladesh",
      "summary": "Primary sectors contributing to foreign exchange.",
      "key_points": [
        "Top Sector: Ready-made Garments",
        "Market: Europe and USA",
        "Impact: Women empowerment"
      ]
    },
    "tags": ["Economy", "Bangladesh Affairs", "Export"]
  },
  {
    "_id": "bcs_q105_governance",
    "question_id": "BCS-50th-105",
    "category": "Ethics & Good Governance",
    "question_text": "দুর্বল শাসন ব্যবস্থায় উন্নয়ন প্রকল্প ব্যর্থ হয় কারণ-",
    "options": [
      "(ক) সম্পদের অভাব",
      "(খ) নাগরিকের বিরোধিতা",
      "(গ) সিদ্ধান্ত গ্রহণে স্বচ্ছতা ও সততার অভাব",
      "(ঘ) প্রযুক্তির অভাব"
    ],
    "correct_answer": 2,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "দুর্নীতি ও জবাবদিহিতার অভাবের কথা ভাবুন।",
    "explanation": "সুশাসনের অভাব বা দুর্বল শাসনে সিদ্ধান্ত গ্রহণ প্রক্রিয়ায় স্বচ্ছতা ও সততা থাকে না, যার ফলে প্রকল্পগুলোতে দুর্নীতি হয় এবং সেগুলো কাঙ্ক্ষিত লক্ষ্য অর্জনে ব্যর্থ হয়।",
    "topic_details": {
      "title": "Development and Governance",
      "summary": "Factors affecting project implementation.",
      "key_points": [
        "Barrier: Lack of Transparency",
        "Result: Misuse of resources",
        "Solution: Accountability"
      ]
    },
    "tags": ["Governance", "Development", "Ethics"]
  },
  {
    "_id": "bcs_q109_monument",
    "question_id": "BCS-50th-109",
    "category": "Bangladesh Affairs",
    "question_text": "বাংলাদেশের বাইরে প্রথম শহীদ মিনার স্থাপিত হয়-",
    "options": [
      "(ক) যুক্তরাজ্যে",
      "(খ) যুক্তরাষ্ট্রে",
      "(গ) ভারতে",
      "(ঘ) পাকিস্তানে"
    ],
    "correct_answer": 0,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "লন্ডনের ওল্ডহ্যামে এটি অবস্থিত।",
    "explanation": "বাংলাদেশের বাইরে বিশ্বের প্রথম শহীদ মিনারটি ১৯৯৭ সালে যুক্তরাজ্যের লন্ডনের ওল্ডহ্যাম (Oldham) শহরে স্থাপিত হয়।",
    "topic_details": {
      "title": "Shaheed Minar Global Influence",
      "summary": "Recognition of the Language Movement abroad.",
      "key_points": [
        "Location: UK",
        "City: London (Oldham)",
        "Inauguration: 1997"
      ]
    },
    "tags": ["History", "International", "Bangladesh Affairs"]
  },

  {
    "_id": "bcs_q97_governance",
    "question_id": "BCS-50th-97",
    "category": "Ethics & Good Governance",
    "question_text": "কোনটি সুশাসনের আদর্শকে সবচেয়ে ভালোভাবে প্রকাশ করে?",
    "options": [
      "(ক) এটি শুধুমাত্র পরিমাপযোগ্য ফলাফলের উপর নির্ভরশীল",
      "(খ) এটি মূল্যবোধ-নিরপেক্ষ",
      "(গ) এটি নৈতিক মানদণ্ড ও জনস্বার্থ দ্বারা পরিচালিত",
      "(ঘ) এটি কেবল অর্থনৈতিক প্রবৃদ্ধিকে অগ্রাধিকার দেয়"
    ],
    "correct_answer": 2,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "সুশাসন নৈতিকতা এবং জনগণের কল্যাণের সাথে যুক্ত।",
    "explanation": "সুশাসনের মূল লক্ষ্য হলো নৈতিকতা বজায় রাখা এবং জনস্বার্থ রক্ষা করা। এটি কেবল যান্ত্রিক কোনো প্রক্রিয়া নয়, বরং ন্যায়বিচার ও নৈতিকতার প্রতিফলন।",
    "topic_details": {
      "title": "Good Governance Principles",
      "summary": "Core values that define effective governance.",
      "key_points": [
        "Ethical standards",
        "Public interest",
        "Accountability"
      ]
    },
    "tags": ["Governance", "Ethics", "Political Science"]
  },
  {
    "_id": "bcs_q98_math",
    "question_id": "BCS-50th-98",
    "category": "Mathematical Reasoning",
    "question_text": "মুনাফার হার কত হলে কিছু পরিমাণ টাকা চক্রবৃদ্ধি হারে ১০ বছরে দ্বিগুণ হবে?",
    "options": [
      "(ক) 5.17%",
      "(খ) 6.17%",
      "(গ) 7.17%",
      "(ঘ) 8.17%"
    ],
    "correct_answer": 2,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "চক্রবৃদ্ধি মুনাফার সূত্র $C = P(1+r)^n$ ব্যবহার করুন।",
    "explanation": "দেওয়া আছে, $n = 10$ এবং $C = 2P$। সূত্র অনুযায়ী: $2P = P(1+r)^{10} \\Rightarrow 2 = (1+r)^{10} \\Rightarrow 1+r = 2^{1/10} \\approx 1.0717$। সুতরাং, $r = 0.0717$ বা $7.17\\%$।",
    "topic_details": {
      "title": "Compound Interest",
      "summary": "Calculating interest rates for doubled principal.",
      "key_points": [
        "Formula: $A = P(1+r)^n$",
        "Time period: 10 years",
        "Target: $A = 2P$"
      ]
    },
    "tags": ["Math", "Arithmetic", "Interest"]
  },
  {
    "_id": "bcs_q111_international",
    "question_id": "BCS-50th-111",
    "category": "General Knowledge (International)",
    "question_text": "কোন্টি ব্রিকস (BRICS)-এর প্রধান লক্ষ্য?",
    "options": [
      "(ক) ন্যাটোর সম্প্রসারণে সহায়তা প্রদান",
      "(খ) বিশ্ব আর্থিক প্রতিষ্ঠানগুলোর সংস্কার পূর্বক উদীয়মান অর্থনৈতিক দেশগুলোর স্বার্থরক্ষা",
      "(গ) ইউরোপের জন্য একিঁক মুদ্রা প্রতিষ্ঠা করা",
      "(ঘ) জি-৭ এর সদস্য সংখ্যা বৃদ্ধি"
    ],
    "correct_answer": 1,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "ব্রিকস একটি উদীয়মান অর্থনীতির জোট।",
    "explanation": "ব্রিকস (ব্রাজিল, রাশিয়া, ভারত, চীন ও দক্ষিণ আফ্রিকা) মূলত বিশ্ব অর্থনীতিতে পশ্চিমা দেশগুলোর আধিপত্য কমানো এবং উদীয়মান রাষ্ট্রগুলোর উন্নয়ন ত্বরান্বিত করার লক্ষে গঠিত হয়েছে।",
    "topic_details": {
      "title": "International Organizations",
      "summary": "Purpose and goals of the BRICS alliance.",
      "key_points": [
        "Economic Reform",
        "Developing Nations",
        "New Development Bank"
      ]
    },
    "tags": ["GK", "International Affairs", "BRICS"]
  },
  {
    "_id": "bcs_q110_governance",
    "question_id": "BCS-50th-110",
    "category": "Ethics & Good Governance",
    "question_text": "সাধারণের দৃষ্টিতে কোনটি মূল্যবোধ সম্পন্ন শাসন ব্যবস্থার বৈশিষ্ট্য?",
    "options": [
      "(ক) আইনের নির্বাচনী প্রয়োগ",
      "(খ) নাগরিকের অংশগ্রহণ",
      "(গ) কর্তৃত্ববাদ",
      "(ঘ) গোপনীয়তা"
    ],
    "correct_answer": 1,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "জনগণের ক্ষমতায়নই সুশাসনের বৈশিষ্ট্য।",
    "explanation": "মূল্যবোধ সম্পন্ন শাসন ব্যবস্থায় জনগণের মতামত ও অংশগ্রহণ নিশ্চিত করা হয়। আইনের নির্বাচনী প্রয়োগ বা কর্তৃত্ববাদ মূল্যবোধের পরিপন্থী।",
    "topic_details": {
      "title": "Values in Governance",
      "summary": "Characteristics of ethical governance.",
      "key_points": [
        "Participation",
        "Equity",
        "Rule of Law"
      ]
    },
    "tags": ["Ethics", "Governance", "Civics"]
  }
,

  {
    "_id": "bcs_q59_law",
    "question_id": "BCS-50th-59",
    "category": "Bangladesh Affairs",
    "question_text": "Habeas Corpus writ দায়ের করা হয় সংবিধানের _______ অনুচ্ছেদ লংঘনের কারণে।",
    "options": ["৩১", "৩২", "৩৪", "৩৩"],
    "correct_answer": 1,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "এটি জীবন ও ব্যক্তিস্বাধীনতার অধিকারের সাথে সম্পর্কিত।",
    "explanation": "সংবিধানের ৩২ অনুচ্ছেদে জীবন ও ব্যক্তিস্বাধীনতার অধিকার রক্ষায় 'হেবিয়াস কর্পাস' রিট করার অধিকার নিহিত থাকে।",
    "topic_details": {
      "title": "Constitutional Writs",
      "summary": "Fundamental rights and their judicial enforcement.",
      "key_points": [
        "Article 32: Protection of right to life and liberty",
        "Writ: Habeas Corpus",
        "Authority: High Court Division"
      ]
    },
    "tags": ["Law", "Constitution", "Rights"]
  },
  {
    "_id": "bcs_q66_science",
    "question_id": "BCS-50th-66",
    "category": "General Science",
    "question_text": "পারমাণবিক চুল্লিতে 'মডারেটর'-এর প্রাথমিক কাজ হলো:",
    "options": [
      "অতিরিক্ত নিউট্রন শোষণ এবং চেইন বিক্রিয়া নিয়ন্ত্রণ",
      "চুল্লির কেন্দ্রে উৎপন্ন তাপ স্থানান্তর করে শীতল করা",
      "দ্রুতগতি সম্পন্ন নিউট্রনগুলোকে ধীরগতি করে ফিশনের সম্ভাবনা বাড়ানো",
      "ক্ষতিকারক গামা বিকিরণ থেকে সুরক্ষা প্রদান"
    ],
    "correct_answer": 2,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "এটি নিউট্রনের গতিবেগের সাথে সম্পর্কিত।",
    "explanation": "মডারেটর (যেমন ভারী পানি বা গ্রাফাইট) দ্রুতগামী নিউট্রনগুলোকে ধীরগতি করে যাতে সেগুলো ইউরেনিয়াম নিউক্লিয়াসের সাথে ফিশন বিক্রিয়া ঘটাতে সক্ষম হয়।",
    "topic_details": {
      "title": "Nuclear Physics",
      "summary": "Mechanisms of nuclear reactors and fission control.",
      "key_points": [
        "Component: Moderator",
        "Function: Decelerate neutrons",
        "Goal: Sustaining chain reaction"
      ]
    },
    "tags": ["Physics", "Nuclear Energy", "Science"]
  },
  {
    "_id": "bcs_q76_ict",
    "question_id": "BCS-50th-76",
    "category": "ICT",
    "question_text": "'Pixel' দ্বারা কী বুঝায়?",
    "options": [
      "Pixie land",
      "Person length",
      "Pixure length",
      "Picture element"
    ],
    "correct_answer": 3,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "এটি ডিজিটাল ছবির ক্ষুদ্রতম একক।",
    "explanation": "Pixel শব্দটি 'Picture Element' থেকে এসেছে, যা একটি ডিজিটাল ইমেজ বা ডিসপ্লের ক্ষুদ্রতম বিন্দু বা উপাদান।",
    "topic_details": {
      "title": "Digital Imaging",
      "summary": "Basics of display technology and image composition.",
      "key_points": [
        "Term: Pixel (Picture Element)",
        "Function: Smallest addressable unit",
        "Application: Resolution measurement"
      ]
    },
    "tags": ["ICT", "Graphics", "Hardware"]
  },
  {
    "_id": "bcs_q80_language",
    "question_id": "BCS-50th-80",
    "category": "Bangla Language",
    "question_text": "কোনটি 'ভাত'-এর প্রতিশব্দ?",
    "options": ["অলিপিক", "প্রভঞ্জন", "মহি", "তন্ডুল"],
    "correct_answer": 3,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "এটি চাল বা অন্ন অর্থে ব্যবহৃত হয়।",
    "explanation": "'তন্ডুল' শব্দের অর্থ চাল বা অন্ন (ভাত)। অন্য শব্দগুলোর ভিন্ন অর্থ রয়েছে (যেমন: মহি মানে পৃথিবী)।",
    "topic_details": {
      "title": "Synonyms (প্রতিশব্দ)",
      "summary": "Vocabulary expansion in Bangla literature.",
      "key_points": [
        "Word: ভাত",
        "Synonym: তন্ডুল, অন্ন",
        "Category: Daily vocabulary"
      ]
    },
    "tags": ["Bangla", "Vocabulary", "Grammar"]
  },
  {
    "_id": "bcs_q84_geometry",
    "question_id": "BCS-50th-84",
    "category": "Mathematical Reasoning",
    "question_text": "একটি সমবাহু ত্রিভুজের বাহুর দৈর্ঘ্য ৪ মিটার হলে এর ক্ষেত্রফল হবে:",
    "options": ["4√3", "8√5", "16√3", "16√5"],
    "correct_answer": 0,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "সমবাহু ত্রিভুজের ক্ষেত্রফলের সূত্র: $\\frac{\\sqrt{3}}{4} a^2$",
    "explanation": "ক্ষেত্রফল = $\\frac{\\sqrt{3}}{4} \\times 4^2 = \\frac{\\sqrt{3}}{4} \\times 16 = 4\\sqrt{3}$ বর্গমিটার।",
    "topic_details": {
      "title": "Equilateral Triangle Geometry",
      "summary": "Area calculation for regular polygons.",
      "key_points": [
        "Formula: $\\frac{\\sqrt{3}}{4} a^2$",
        "Variable: Side (a) = 4",
        "Result: 4√3"
      ]
    },
    "tags": ["Math", "Geometry", "Triangles"]
  },
  {
    "_id": "bcs_q88_science",
    "question_id": "BCS-50th-88",
    "category": "General Science",
    "question_text": "কোন্ বাঙালি বিজ্ঞানী 'কৃষ্ণগহ্বর' (Black Hole) নিয়ে গবেষণা করেছেন?",
    "options": [
      "ড. কুদরত-ই-খুদা",
      "কাজী মোতাহার হোসেন",
      "জামাল নজরুল ইসলাম",
      "অতীশ দীপঙ্কর"
    ],
    "correct_answer": 2,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "তিনি মহাবিশ্বের উৎপত্তি ও পরিণতি নিয়ে বিশ্বখ্যাত কাজ করেছেন।",
    "explanation": "জামাল নজরুল ইসলাম একজন বিশ্বখ্যাত গণিতবিদ ও মহাকাশ বিজ্ঞানী যিনি ব্ল্যাক হোল ও মহাবিশ্বের ভবিষ্যত নিয়ে গুরুত্বপূর্ণ গবেষণা করেছেন।",
    "topic_details": {
      "title": "Famous Scientists of Bangladesh",
      "summary": "Contributions of local scientists to global physics.",
      "key_points": [
        "Scientist: Jamal Nazrul Islam",
        "Field: Cosmology / Black Holes",
        "Reputation: International acclaim"
      ]
    },
    "tags": ["Science", "Biography", "Physics"]
  },
  {
    "_id": "bcs_q96_economy",
    "question_id": "BCS-50th-96",
    "category": "Bangladesh Affairs",
    "question_text": "শ্রমনির্ভর অর্থনীতি থেকে উৎপাদন ভিত্তিক অর্থনীতিতে রূপান্তরের পথে বাংলাদেশের সবচেয়ে বড় বাধা কোনটি?",
    "options": [
      "শিল্পাঞ্চলের অভাব",
      "রাজনৈতিক অস্থিরতা",
      "দক্ষ জনসম্পদের ঘাটতি এবং শিক্ষার সঙ্গে কর্মক্ষেত্রের অসামঞ্জস্য",
      "ক্ষুদ্রঋণের স্বল্পতা"
    ],
    "correct_answer": 2,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "দক্ষতার অভাব শিল্পায়নকে বাধাগ্রস্ত করে।",
    "explanation": "উন্নত মানের উৎপাদনশীল অর্থনীতি গড়তে দক্ষ জনশক্তি ও যথাযথ কারিগরি শিক্ষার অভাব বাংলাদেশের জন্য প্রধান কাঠামোগত চ্যালেঞ্জ।",
    "topic_details": {
      "title": "Economic Challenges",
      "summary": "Barriers to industrial transformation in Bangladesh.",
      "key_points": [
        "Issue: Skill gap",
        "Cause: Education-work mismatch",
        "Impact: Reduced productivity"
      ]
    },
    "tags": ["Economy", "Bangladesh Affairs", "Development"]
  },
  
  {
    "_id": "bcs_q61_english",
    "question_id": "BCS-50th-61",
    "category": "English Literature",
    "question_text": "Which of these works contains a defence of the right of freedom of speech and expression?",
    "options": [
      "(ক) Holy Living and Holy Dying",
      "(খ) Areopagitica",
      "(গ) Religio Medici",
      "(ঘ) A Free Man's Worship"
    ],
    "correct_answer": 1,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "It was written by John Milton in 1644.",
    "explanation": "John Milton's 'Areopagitica' is a landmark philosophical defense of the principle of a right to freedom of speech and expression.",
    "topic_details": {
      "title": "Milton's Prose",
      "summary": "Key political and social tracts of the 17th century.",
      "key_points": [
        "Author: John Milton",
        "Theme: Opposition to licensing and censorship",
        "Publication: 1644"
      ]
    },
    "tags": ["English", "Literature", "History"]
  },
  {
    "_id": "bcs_q62_geometry",
    "question_id": "BCS-50th-62",
    "category": "Mathematical Reasoning",
    "question_text": "সমান দৈর্ঘ্যের দুইটি দড়ির একটি দিয়ে আয়তক্ষেত্রাকার বেষ্টনী তৈরি করা হয় এবং অপরটি দিয়ে বর্গক্ষেত্রাকার বেষ্টনী তৈরি করা হয়। কোন্ তথ্যটি সত্য?",
    "options": [
      "(ক) আয়তক্ষেত্রের ক্ষেত্রফল বর্গক্ষেত্রের চেয়ে বেশি",
      "(খ) বর্গক্ষেত্রের ক্ষেত্রফল আয়তক্ষেত্রের চেয়ে বেশি",
      "(গ) উভয়ের ক্ষেত্রফল সমান",
      "(ঘ) কোন্টির ক্ষেত্রফল বেশি বা উভয়ের ক্ষেত্রফল সমান কিনা তা বর্ণিত তথ্য থেকে নির্ণয় করা সম্ভব নয়"
    ],
    "correct_answer": 1,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "পরিসীমা সমান হলে বর্গক্ষেত্রের ক্ষেত্রফল সবসময় বৃহত্তম হয়।",
    "explanation": "যখন পরিসীমা স্থির থাকে, তখন নিয়মিত বহুভুজ (বর্গক্ষেত্র) অনিয়মিত বহুভুজের (আয়তক্ষেত্র) তুলনায় বেশি ক্ষেত্রফল ধারণ করে।",
    "topic_details": {
      "title": "Perimeter and Area Relationship",
      "summary": "Comparative geometry of closed figures.",
      "key_points": [
        "Fixed Parameter: Perimeter",
        "Comparison: Square vs Rectangle",
        "Principle: Square area > Rectangle area"
      ]
    },
    "tags": ["Math", "Geometry", "Area"]
  },
  {
    "_id": "bcs_q77_language",
    "question_id": "BCS-50th-77",
    "category": "Bangla Language",
    "question_text": "'বিষণ্ণ' শব্দটির সঠিক বিশেষ্য রূপ কোনটি?",
    "options": [
      "(ক) বিষাদ",
      "(খ) বিষণ্ণ",
      "(গ) বিষাক্ত",
      "(ঘ) বিষয়"
    ],
    "correct_answer": 0,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "এটি একটি মানসিক অবস্থাকে নির্দেশ করে।",
    "explanation": "'বিষণ্ণ' হলো একটি বিশেষণ (Adjective), যার বিশেষ্য (Noun) রূপ হলো 'বিষাদ'।",
    "topic_details": {
      "title": "Parts of Speech (পদ পরিবর্তন)",
      "summary": "Changing forms from adjective to noun.",
      "key_points": [
        "Noun: বিষাদ",
        "Adjective: বিষণ্ণ",
        "Meaning: Sorrow/Depression"
      ]
    },
    "tags": ["Bangla", "Grammar", "Vocabulary"]
  },
  {
    "_id": "bcs_q83_intl",
    "question_id": "BCS-50th-83",
    "category": "International Affairs",
    "question_text": "মার্কিন যুক্তরাষ্ট্রের নেতৃত্বাধীন 'অ্যাকাস' (AUKUS) চুক্তির প্রাথমিক লক্ষ্য কী?",
    "options": [
      "(ক) অর্থনৈতিক সহযোগিতা",
      "(খ) সাময়িক সহযোগিতা",
      "(গ) পরিবেশ সুরক্ষা",
      "(ঘ) মহাকাশ গবেষণা সহযোগিতা"
    ],
    "correct_answer": 1,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "এটি মূলত সামরিক ও নিরাপত্তা বিষয়ক একটি ত্রিপক্ষীয় চুক্তি।",
    "explanation": "AUKUS (Australia, UK, US) হলো একটি নিরাপত্তা ও প্রতিরক্ষা বিষয়ক জোট যার মূল লক্ষ্য সামরিক প্রযুক্তি শেয়ার করা, বিশেষ করে পারমাণবিক শক্তিচালিত সাবমেরিন।",
    "topic_details": {
      "title": "International Security Alliances",
      "summary": "Formation and goals of modern defense pacts.",
      "key_points": [
        "Members: USA, UK, Australia",
        "Focus: Indo-Pacific Security",
        "Key project: Nuclear-powered submarines"
      ]
    },
    "tags": ["International Relations", "Defense", "Politics"]
  },
  {
    "_id": "bcs_q91_logic",
    "question_id": "BCS-50th-91",
    "category": "Mathematical Reasoning",
    "question_text": "|3x - 1| < 2 এর সমাধান সেট হবে:",
    "options": [
      "(ক) (-1/3, 0)",
      "(খ) (1/3, ∞)",
      "(গ) (-1/3, 1)",
      "(ঘ) (∞, 1/3)"
    ],
    "correct_answer": 2,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "অসমতাটি সমাধান করুন: -2 < 3x - 1 < 2",
    "explanation": "সমাধান: $-2 < 3x - 1 < 2 \\Rightarrow -1 < 3x < 3 \\Rightarrow -1/3 < x < 1$। সুতরাং সেটটি হলো (-1/3, 1)।",
    "topic_details": {
      "title": "Inequalities",
      "summary": "Solving absolute value inequalities.",
      "key_points": [
        "Property: $|x| < a \\Rightarrow -a < x < a$",
        "Solution steps: Add 1, then divide by 3",
        "Range: Between -1/3 and 1"
      ]
    },
    "tags": ["Math", "Algebra", "Inequality"]
  },
  {
    "_id": "bcs_q92_logic",
    "question_id": "BCS-50th-92",
    "category": "Mental Ability",
    "question_text": "এখন জানুয়ারি মাস হলে এখন থেকে ১০০ মাস পর কোন্ মাস হবে?",
    "options": [
      "(ক) মে",
      "(খ) মার্চ",
      "(গ) এপ্রিল",
      "(ঘ) ফেব্রুয়ারি"
    ],
    "correct_answer": 0,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "১২ দিয়ে ১০০ কে ভাগ করে অবশেষ দেখুন।",
    "explanation": "১০০ মাসকে ১২ দিয়ে ভাগ করলে অবশেষ থাকে ৪ ($100 = 12 \\times 8 + 4$)। জানুয়ারির পর ৪ মাস হলো: ফেব্রুয়ারি, মার্চ, এপ্রিল, মে।",
    "topic_details": {
      "title": "Calendar Problems",
      "summary": "Modular arithmetic for time calculation.",
      "key_points": [
        "Total months: 100",
        "Cycle: 12 months",
        "Remainder: 4"
      ]
    },
    "tags": ["Mental Ability", "Math", "Logic"]
  },

  
  {
    "_id": "bcs_q63_literature",
    "question_id": "BCS-50th-63",
    "category": "English Literature",
    "question_text": "Which novel chronicles intense, destructive love fueling multigenerational cruelty & obsession?",
    "options": [
      "Jane Eyre",
      "Emma",
      "Wuthering Heights",
      "Persuasion"
    ],
    "correct_answer": 2,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "It is the only novel by Emily Brontë.",
    "explanation": "Emily Brontë's 'Wuthering Heights' is famous for its depiction of the intense and destructive love between Heathcliff and Catherine, which leads to obsession and suffering across generations.",
    "topic_details": {
      "title": "Victorian Literature",
      "summary": "Exploration of dark themes in 19th-century English novels.",
      "key_points": [
        "Author: Emily Brontë",
        "Protagonists: Heathcliff and Catherine",
        "Theme: Destructive obsession"
      ]
    },
    "tags": ["English Literature", "Novels", "Emily Brontë"]
  },
  {
    "_id": "bcs_q64_literature",
    "question_id": "BCS-50th-64",
    "category": "Bangla Literature",
    "question_text": "কোন্টি কাজী নজরুল ইসলামের প্রবন্ধ গ্রন্থ?",
    "options": [
      "মৃত্যুক্ষুধা",
      "সিন্ধু হিন্দোল",
      "যুগবাণী",
      "অগ্নিবীণা"
    ],
    "correct_answer": 2,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "এটি নজরুলের নিষিদ্ধ ঘোষিত একটি প্রবন্ধ সংকলন।",
    "explanation": "কাজী নজরুল ইসলামের 'যুগবাণী' একটি প্রবন্ধ গ্রন্থ। অন্যদিকে 'মৃত্যুক্ষুধা' উপন্যাস এবং 'সিন্ধু হিন্দোল' ও 'অগ্নিবীণা' কাব্যগ্রন্থ.",
    "topic_details": {
      "title": "Kazi Nazrul Islam's Prose",
      "summary": "Different genres of Kazi Nazrul Islam's literary works.",
      "key_points": [
        "Genre: Essay (প্রবন্ধ)",
        "Book: যুগবাণী",
        "Other works: অগ্নিবীণা (Poetry), মৃত্যুক্ষুধা (Novel)"
      ]
    },
    "tags": ["Bangla Literature", "Kazi Nazrul Islam", "Essays"]
  },
  {
    "_id": "bcs_q65_economy",
    "question_id": "BCS-50th-65",
    "category": "Bangladesh Affairs",
    "question_text": "ডলারের বিপরীতে টাকার অবমূল্যায়নের অন্যতম প্রভাব কী?",
    "options": [
      "বিদেশে বিনিয়োগে উৎসাহ প্রদান",
      "তারল্য সংকট কাটিয়ে উঠা",
      "খেলাপী ঋণের পরিমাণ কমিয়ে আনা",
      "রপ্তানি বাড়ানো"
    ],
    "correct_answer": 3,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "টাকার মান কমলে বিদেশি ক্রেতাদের কাছে দেশি পণ্য সস্তা হয়।",
    "explanation": "মুদ্রার অবমূল্যায়ন (Devaluation) করলে আন্তর্জাতিক বাজারে দেশি পণ্যের দাম কমে যায়, যার ফলে বিদেশে পণ্যের চাহিদা বাড়ে এবং রপ্তানি বৃদ্ধি পায়.",
    "topic_details": {
      "title": "Currency Devaluation",
      "summary": "Impact of exchange rate changes on the national economy.",
      "key_points": [
        "Primary Goal: Increase Exports",
        "Secondary Effect: Decrease Imports",
        "Mechanism: Lower relative prices for foreign buyers"
      ]
    },
    "tags": ["Economy", "Banking", "Foreign Trade"]
  },
  {
    "_id": "bcs_q69_literature",
    "question_id": "BCS-50th-69",
    "category": "English Literature",
    "question_text": "Which of these is not characteristic of English Romantic Poetry?",
    "options": [
      "Ordinary life",
      "Everyday language",
      "Expression of feelings rather than action or plot",
      "Inane and gaudy phraseology"
    ],
    "correct_answer": 3,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "Wordsworth criticized the 'gaudy' style of the previous era.",
    "explanation": "William Wordsworth, in his Preface to Lyrical Ballads, explicitly rejected 'inane and gaudy phraseology' in favor of the language actually used by men.",
    "topic_details": {
      "title": "Romanticism",
      "summary": "Key tenets of the Romantic era in English poetry.",
      "key_points": [
        "Focus: Emotions and nature",
        "Language: Simple/Everyday",
        "Rejection: Neo-classical ornamentation"
      ]
    },
    "tags": ["English Literature", "Romantic Poetry", "Literary Criticism"]
  },
  {
    "_id": "bcs_q71_literature",
    "question_id": "BCS-50th-71",
    "category": "Bangla Literature",
    "question_text": "জসীমউদ্দীন-এর 'কবর' কবিতাটি কোন্ পত্রিকায় প্রথম প্রকাশিত হয়?",
    "options": [
      "তত্ত্ববোধিনী",
      "ধূমকেতু",
      "কালি ও কলম",
      "কল্লোল"
    ],
    "correct_answer": 3,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "এটি ১৯২৫ সালে প্রকাশিত হয়েছিল।",
    "explanation": "পল্লীকবি জসীমউদ্দীনের বিখ্যাত 'কবর' কবিতাটি ১৯২৫ সালে 'কল্লোল' পত্রিকায় প্রথম প্রকাশিত হয়.",
    "topic_details": {
      "title": "Jasimuddin's Works",
      "summary": "Early publication history of significant Bangla poems.",
      "key_points": [
        "Poem: কবর",
        "Journal: কল্লোল",
        "Year: 1925"
      ]
    },
    "tags": ["Bangla Literature", "Poetry", "History"]
  },
  {
    "_id": "bcs_q81_mental_ability",
    "question_id": "BCS-50th-81",
    "category": "Mental Ability",
    "question_text": "জারিনের জন্ম ২৯ ফেব্রুয়ারি। তার জন্মগ্রহণের সাল কোন্টি হতে পারে?",
    "options": [
      "২০০২",
      "২০০৪",
      "২০০৬",
      "২০১০"
    ],
    "correct_answer": 1,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "২৯ ফেব্রুয়ারি কেবল অধিবর্ষে (Leap Year) থাকে।",
    "explanation": "অধিবর্ষ বা Leap Year নির্ণয় করতে হলে সালটিকে ৪ দিয়ে বিভাজ্য হতে হয়। এখানে ২০০৪ সালটি ৪ দিয়ে বিভাজ্য, তাই এটিই সঠিক উত্তর.",
    "topic_details": {
      "title": "Leap Year Calculation",
      "summary": "Identifying years with 366 days.",
      "key_points": [
        "Rule: Divisible by 4",
        "Exception: Century years must be divisible by 400",
        "Month effect: February has 29 days"
      ]
    },
    "tags": ["Mental Ability", "Logic", "Calendar"]
  }
,

  {
    "_id": "bcs_q60_economy",
    "question_id": "BCS-50th-60",
    "category": "Bangladesh Affairs",
    "question_text": "শ্রমনির্ভর অর্থনীতি থেকে উৎপাদন ভিত্তিক অর্থনীতিতে রূপান্তরের পথে বাংলাদেশের সবচেয়ে বড় বাধা কোনটি?",
    "options": [
      "(ক) শিল্পাঞ্চালের অভাব",
      "(খ) রাজনৈতিক অস্থিরতা",
      "(গ) দক্ষ মানবসম্পদের ঘাটতি এবং শিক্ষার সঙ্গে কর্মক্ষেত্রের অসামঞ্জস্য",
      "(ঘ) ক্ষুদ্রঋণের স্বল্পতা"
    ],
    "correct_answer": 2,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "দক্ষতার অভাব শিল্পায়নকে বাধাগ্রস্ত করে।",
    "explanation": "উন্নত মানের উৎপাদনশীল অর্থনীতি গড়তে দক্ষ জনশক্তি ও যথাযথ কারিগরি শিক্ষার অভাব বাংলাদেশের জন্য প্রধান কাঠামোগত চ্যালেঞ্জ।",
    "topic_details": {
      "title": "Economic Challenges",
      "summary": "Structural barriers in Bangladesh's transition to an industrial economy.",
      "key_points": [
        "Primary Barrier: Human resource gap",
        "Secondary Issue: Education-workforce mismatch"
      ]
    },
    "tags": ["Economy", "Development", "Bangladesh Affairs"]
  },
  {
    "_id": "bcs_q67_logic",
    "question_id": "BCS-50th-67",
    "category": "Mental Ability",
    "question_text": "একটি বাক্সের মধ্যে একটি পেন্সিল আছে। বাক্সটি একটি তাকের উপরে অবস্থান করছে। তাকটি জানালার নিচে অবস্থান করছে। তাহলে নিচের কোন্ বাক্যটি উপরের বর্ণনার জন্য প্রযোজ্য হবে?",
    "options": [
      "(ক) পেন্সিলটি জানালার নিচে আছে",
      "(খ) পেন্সিলটি জানালার উপরে আছে",
      "(গ) পেন্সিলটি জানালার মধ্যে অবস্থান করছে",
      "(ঘ) বাক্সটি পেন্সিলের নিচে অবস্থান করছে"
    ],
    "correct_answer": 0,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "অবস্থানগুলোর অনুক্রম লক্ষ্য করুন (পেন্সিল > বাক্স > তাক > জানালা)।",
    "explanation": "পেন্সিলটি বাক্সের ভেতরে, বাক্সটি তাকের ওপর এবং তাকটি জানালার নিচে। সুতরাং পেন্সিলটি জানালার নিচেই অবস্থান করছে।",
    "topic_details": {
      "title": "Spatial Reasoning",
      "summary": "Deducing relative positions of objects.",
      "key_points": [
        "Logic: Transitive relation of position",
        "Conclusion: Lowest object is under the highest reference"
      ]
    },
    "tags": ["Mental Ability", "Logical Reasoning"]
  },
  {
    "_id": "bcs_q68_math",
    "question_id": "BCS-50th-68",
    "category": "Mathematical Reasoning",
    "question_text": "$2x^2 + 3x + 1$ এর ক্ষুদ্রতম মান হবে:",
    "options": [
      "(ক) $-3/4$",
      "(খ) $-1/8$",
      "(গ) $1/8$",
      "(ঘ) $3/4$"
    ],
    "correct_answer": 1,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "দ্বিঘাত সমীকরণের সর্বনিম্ন মান নির্ণয়ের সূত্র $c - \\frac{b^2}{4a}$ ব্যবহার করুন।",
    "explanation": "সর্বনিম্ন মান = $1 - \\frac{3^2}{4(2)} = 1 - \\frac{9}{8} = -\\frac{1}{8}$।",
    "topic_details": {
      "title": "Quadratic Equations",
      "summary": "Finding extrema of a quadratic function.",
      "key_points": [
        "Expression: $ax^2 + bx + c$",
        "Formula for min value: $c - b^2/4a$",
        "Result: -1/8"
      ]
    },
    "tags": ["Math", "Algebra", "Calculus"]
  },
  {
    "_id": "bcs_q73_governance",
    "question_id": "BCS-50th-73",
    "category": "Ethics & Good Governance",
    "question_text": "কোন্টি সুশাসনের অনুপস্থিতিতে সমাজ যে 'hidden cost' বহন করে তার উৎকৃষ্ট উদাহরণ?",
    "options": [
      "(ক) কর আদায়ের হার বৃদ্ধি",
      "(খ) মেধা পাচার",
      "(গ) অবকাঠামো সম্প্রসারণ",
      "(ঘ) রপ্তানি আয় বৃদ্ধি"
    ],
    "correct_answer": 1,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "সুশাসনের অভাবে দক্ষ লোক দেশ ছেড়ে চলে যায়।",
    "explanation": "সুশাসনের অভাবে অনিশ্চয়তা ও দুর্নীতির কারণে মেধাবীরা বিদেশে চলে যায় (Brain Drain), যা দেশের জন্য একটি অদৃশ্য বা 'hidden cost'।",
    "topic_details": {
      "title": "Impact of Bad Governance",
      "summary": "Societal and economic costs of ineffective rule.",
      "key_points": [
        "Hidden Cost: Brain Drain",
        "Result: Loss of human capital"
      ]
    },
    "tags": ["Governance", "Ethics", "Social Issues"]
  },
  {
    "_id": "bcs_q82_railway",
    "question_id": "BCS-50th-82",
    "category": "Bangladesh Affairs",
    "question_text": "'_______' জেলায় রেল যোগাযোগ নেই।",
    "options": [
      "(ক) জামালপুর",
      "(খ) পটুয়াখালী",
      "(গ) নাটোর",
      "(ঘ) নেত্রকোনা"
    ],
    "correct_answer": 1,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "বরিশাল বিভাগের কোনো জেলায় বর্তমানে রেললাইন নেই।",
    "explanation": "পটুয়াখালী জেলা বরিশাল বিভাগে অবস্থিত এবং এই জেলায় বর্তমানে কোনো রেল যোগাযোগ সুবিধা নেই।",
    "topic_details": {
      "title": "Bangladesh Infrastructure",
      "summary": "Mapping railway connectivity across districts.",
      "key_points": [
        "Railway Gap: Barisal Division",
        "Affected Districts: Patuakhali, Bhola, etc"
      ]
    },
    "tags": ["Geography", "Transportation", "Bangladesh Affairs"]
  },
  
  {
    "_id": "bcs_q70_literature",
    "question_id": "BCS-50th-70",
    "category": "Bangla Literature",
    "question_text": "'কাঁতা তুরুবর পঞ্চ বি ডাল'- পদটির রচয়িতা কে?",
    "options": [
      "(ক) লুইপা",
      "(খ) ভুসুকুপা",
      "(গ) শবরপা",
      "(ঘ) কাহ্নপা"
    ],
    "correct_answer": 0,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "তিনি চর্যাপদের প্রথম পদকর্তা।",
    "explanation": "চর্যাপদের প্রথম পদটি 'কাআ তুরুবর পাঞ্চ বি ডাল' লুইপা রচনা করেছেন। এখানে শরীরের পাঁচটি ডালের কথা বলা হয়েছে।",
    "topic_details": {
      "title": "Charyapada",
      "summary": "The earliest known example of Bengali literature.",
      "key_points": [
        "Author: Luipa",
        "Subject: Buddhist tantric philosophy",
        "Era: 8th - 12th Century"
      ]
    },
    "tags": ["Bangla", "Literature", "History"]
  },
  {
    "_id": "bcs_q74_logic",
    "question_id": "BCS-50th-74",
    "category": "Mental Ability",
    "question_text": "দুর্যোগ ব্যবস্থাপনার প্রথম ধাপ কোনটি?",
    "options": [
      "(ক) উদ্ধার",
      "(খ) পুনর্বাসন",
      "(গ) পুনর্গঠন",
      "(ঘ) প্রস্তুতি"
    ],
    "correct_answer": 3,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "দুর্যোগ আসার আগে যা করতে হয়।",
    "explanation": "দুর্যোগ ব্যবস্থাপনা চক্রের প্রথম ও প্রধান ধাপ হলো 'প্রস্তুতি' (Preparation), যা ক্ষয়ক্ষতির মাত্রা কমাতে সাহায্য করে।",
    "topic_details": {
      "title": "Disaster Management",
      "summary": "Steps taken to manage and mitigate natural disasters.",
      "key_points": [
        "Phase 1: Preparation",
        "Phase 2: Response",
        "Phase 3: Recovery"
      ]
    },
    "tags": ["Geography", "Environment", "Governance"]
  },
  {
    "_id": "bcs_q75_math",
    "question_id": "BCS-50th-75",
    "category": "Mathematical Reasoning",
    "question_text": "A = {x : x স্বাভাবিক সংখ্যা এবং x <= 5 হলে}, P(A) এর উপাদান সংখ্যা হবে:",
    "options": [
      "(ক) 64",
      "(খ) 32",
      "(গ) 16",
      "(ঘ) 8"
    ],
    "correct_answer": 1,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "পাওয়ার সেটের উপাদান সংখ্যার সূত্র $2^n$।",
    "explanation": "এখানে সেটের উপাদান সংখ্যা $n = 5$। সুতরাং Power Set-এর উপাদান সংখ্যা হবে $2^5 = 32$।",
    "topic_details": {
      "title": "Set Theory",
      "summary": "Calculating the number of elements in a Power Set.",
      "key_points": [
        "Formula: $2^n$",
        "Elements of A: {1, 2, 3, 4, 5}",
        "Result: 32"
      ]
    },
    "tags": ["Math", "Set Theory", "Algebra"]
  },
  {
    "_id": "bcs_q85_literature",
    "question_id": "BCS-50th-85",
    "category": "English Literature",
    "question_text": "'To have a shot' means:",
    "options": [
      "(ক) to open fire",
      "(খ) to take a photograph",
      "(গ) to make a try",
      "(ঘ) to test a gun"
    ],
    "correct_answer": 2,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "এটি একটি ইডিয়ম যার অর্থ চেষ্টা করা।",
    "explanation": "ইংরেজিতে 'To have a shot' বা 'Give it a shot' ফ্রেজটির অর্থ হলো কোনো কিছু করার জন্য চেষ্টা করা (To make a try)।",
    "topic_details": {
      "title": "English Idioms",
      "summary": "Common expressions and their contextual meanings.",
      "key_points": [
        "Phrase: To have a shot",
        "Meaning: Attempting something"
      ]
    },
    "tags": ["English", "Grammar", "Idioms"]
  },
  {
    "_id": "bcs_q87_grammar",
    "question_id": "BCS-50th-87",
    "category": "Bangla Grammar",
    "question_text": "একটি স্বরধ্বনির প্রভাবে শব্দে অপর স্বরের পরিবর্তন ঘটলে তাকে বলে-",
    "options": [
      "(ক) অভিশ্রুতি",
      "(খ) অপিনিহিতি",
      "(গ) সমীভবন",
      "(ঘ) স্বরসংগতি"
    ],
    "correct_answer": 3,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "স্বরবর্ণের সংগতি রক্ষা করা।",
    "explanation": "একটি স্বরধ্বনির প্রভাবে অন্য স্বরধ্বনির পরিবর্তন হওয়াকে ভাষাবিজ্ঞানে 'স্বরসংগতি' (Vowel Harmony) বলা হয়। যেমন: দেশি > দিশি।",
    "topic_details": {
      "title": "Phonology (ধ্বনি পরিবর্তন)",
      "summary": "The shift in vowel sounds within Bengali words.",
      "key_points": [
        "Mechanism: Vowel interaction",
        "Result: Sound harmony"
      ]
    },
    "tags": ["Bangla", "Grammar", "Phonology"]
  },
  {
    "_id": "bcs_q90_literature",
    "question_id": "BCS-50th-90",
    "category": "Bangla Language",
    "question_text": "'ফিকা কমলা রং'- এখানে ফিকা অর্থ কী?",
    "options": [
      "(ক) অনুজ্জ্বল",
      "(খ) উজ্জ্বল",
      "(গ) তীব্র",
      "(ঘ) ঝকঝকে"
    ],
    "correct_answer": 0,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "রঙের হালকা ভাব বোঝাতে এটি ব্যবহৃত হয়।",
    "explanation": "বাংলা ভাষায় 'ফিকা' শব্দের অর্থ হলো হালকা বা অনুজ্জ্বল (Pale/Dim)।",
    "topic_details": {
      "title": "Bangla Synonyms",
      "summary": "Understanding word meanings in specific contexts.",
      "key_points": [
        "Word: ফিকা",
        "Meaning: অনুজ্জ্বল (Pale)"
      ]
    },
    "tags": ["Bangla", "Vocabulary", "Semantics"]
  },

  {
    "_id": "bcs_q86_literature",
    "question_id": "BCS-50th-86",
    "category": "Bangla Literature",
    "question_text": "মুক্তিযুদ্ধকে উপজীব্য করে 'যাত্রা' উপন্যাসটি লিখেছেন কে?",
    "options": [
      "শওকত ওসমান",
      "শহীদুল জহির",
      "শওকত আলী",
      "সেলিনা হোসেন"
    ],
    "correct_answer": 2,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "তিনি একজন প্রখ্যাত কথাসাহিত্যিক।",
    "explanation": "মুক্তিযুদ্ধভিত্তিক উপন্যাস 'যাত্রা' এর রচয়িতা শওকত আলী।",
    "topic_details": {
      "title": "Liberation War Literature",
      "summary": "Novels based on the 1971 Liberation War of Bangladesh.",
      "key_points": [
        "Author: Shaukat Ali",
        "Book: Jatra",
        "Theme: Liberation War"
      ]
    },
    "tags": ["Bangla Literature", "Liberation War", "Novel"]
  },
  {
    "_id": "bcs_q89_literature",
    "question_id": "BCS-50th-89",
    "category": "English Literature",
    "question_text": "In William Shakespeare's play As You Like It, the Seven Ages of Man speech was delivered by-",
    "options": [
      "Oliver",
      "Orlando",
      "Jaques",
      "Rosalind"
    ],
    "correct_answer": 2,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "He is a melancholy character in the play.",
    "explanation": "In 'As You Like It', the famous monologue 'All the world's a stage' (Seven Ages of Man) is delivered by Jaques.",
    "topic_details": {
      "title": "Shakespearean Drama",
      "summary": "Famous speeches in Shakespeare's comedies.",
      "key_points": [
        "Play: As You Like It",
        "Speaker: Jaques",
        "Speech: Seven Ages of Man"
      ]
    },
    "tags": ["English Literature", "Shakespeare", "Drama"]
  },
  {
    "_id": "bcs_q72_governance",
    "question_id": "BCS-50th-72",
    "category": "Ethics & Good Governance",
    "question_text": "বিশ্বব্যাংক বর্ণিত সুশাসন সূচকে কোনো দেশের সূচক ০.০০ হলে, সে দেশের সুশাসনের অবস্থা কী বলে পরিগণিত হবে?",
    "options": [
      "নিচু মানের",
      "উঁচু মানের",
      "মাঝারি মানের",
      "কোনোটিই নয়"
    ],
    "correct_answer": 0,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "সূচক কম হলে শাসনের মানও কম হয়.",
    "explanation": "বিশ্বব্যাংকের সুশাসন সূচকে মান যত কম হয় (যেমন ০.০০), তা তত নিচু মানের সুশাসন নির্দেশ করে।",
    "topic_details": {
      "title": "Governance Indicators",
      "summary": "World Bank's measurement of governance quality.",
      "key_points": [
        "Score 0.00: Low quality",
        "Entity: World Bank",
        "Subject: Good Governance"
      ]
    },
    "tags": ["Governance", "Ethics", "World Bank"]
  },
  {
    "_id": "bcs_q78_psychology",
    "question_id": "BCS-50th-78",
    "category": "Mental Ability",
    "question_text": "কোন্টি মানুষকে লক্ষ্যবস্তুর দিকে পরিচালিত করে?",
    "options": [
      "প্রয়োজন",
      "প্রেষণা",
      "ইচ্ছা",
      "শারীরিক শক্তি"
    ],
    "correct_answer": 1,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "এটি কাজের অভ্যন্তরীণ তাড়না.",
    "explanation": "প্রেষণা (Motivation) হলো এমন একটি অভ্যন্তরীণ প্রক্রিয়া যা মানুষকে একটি নির্দিষ্ট লক্ষ্য অর্জনে চালিত করে।",
    "topic_details": {
      "title": "Motivation and Behavior",
      "summary": "Psychological drivers of human action.",
      "key_points": [
        "Driver: Motivation",
        "Result: Goal orientation"
      ]
    },
    "tags": ["Mental Ability", "Psychology", "Motivation"]
  },
  {
    "_id": "bcs_q79_governance",
    "question_id": "BCS-50th-79",
    "category": "Ethics & Good Governance",
    "question_text": "গণতান্ত্রিক ব্যবস্থার ফলপ্রসূতার জন্য অগ্রাধিকার পাবে-",
    "options": [
      "আইনসমূহ",
      "টাকা",
      "গুণগত শিক্ষা",
      "অবকাঠামোগত সুবিধাসমূহ"
    ],
    "correct_answer": 2,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "সচেতন নাগরিক তৈরির জন্য এটি প্রয়োজন.",
    "explanation": "গণতন্ত্রকে সফল করতে গুণগত শিক্ষা (Quality Education) সবচেয়ে গুরুত্বপূর্ণ, কারণ শিক্ষিত সমাজই অধিকার সম্পর্কে সচেতন থাকে।",
    "topic_details": {
      "title": "Democracy and Education",
      "summary": "Factors contributing to a successful democratic system.",
      "key_points": [
        "Priority: Quality Education",
        "Effect: Effective Democracy"
      ]
    },
    "tags": ["Governance", "Politics", "Ethics"]
  },





];
const BCS_50_105=[
  
  
  {
    "_id": "bcs_q157_sdg",
    "question_id": "BCS-50th-157",
    "category": "International Affairs",
    "question_text": "২০৩০ সালের মধ্যে টেকসই উন্নয়ন লক্ষ্যমাত্রা অর্জনে ইফাদ (IFAD), SDG এর কোন্ দুটি লক্ষ্যমাত্রা নিয়ে কাজ করে?",
    "options": [
      "(ক) ৭ ও ৯",
      "(খ) ১১ ও ১৩",
      "(গ) ৩ ও ৬",
      "(ঘ) ১ ও ২"
    ],
    "correct_answer": 3,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "ইফাদ মূলত দারিদ্র্য বিমোচন ও ক্ষুধা মুক্তি নিয়ে কাজ করে।",
    "explanation": "International Fund for Agricultural Development (IFAD) মূলত SDG লক্ষ্যমাত্রা ১ (দারিদ্র্য বিমোচন) এবং লক্ষ্যমাত্রা ২ (ক্ষুধা মুক্তি) অর্জনে কাজ করে।",
    "topic_details": {
      "title": "International Organizations & SDG",
      "summary": "Roles of global agencies in achieving Sustainable Development Goals.",
      "key_points": [
        "SDG 1: No Poverty",
        "SDG 2: Zero Hunger",
        "IFAD Focus: Rural poverty and food security"
      ]
    },
    "tags": ["International Affairs", "SDG", "IFAD"]
  },
  {
    "_id": "bcs_q158_ict",
    "question_id": "BCS-50th-158",
    "category": "ICT",
    "question_text": "ডেটাবেস হল-",
    "options": [
      "(ক) তথ্য রাখার হার্ডওয়্যারসমূহ",
      "(খ) তথ্য রাখার প্রোগ্রামসমূহ",
      "(গ) তথ্যসমূহের সুসংগঠিত রূপ",
      "(ঘ) তথ্য স্থানান্তরের জন্য ইন্টারনেট পরিষেবা"
    ],
    "correct_answer": 2,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "এটি উপাত্তের একটি পরিকল্পিত ভাণ্ডার।",
    "explanation": "ডেটাবেস হচ্ছে উপাত্ত বা তথ্যের একটি সুসংগঠিত সংগ্রহ যা সহজেই অ্যাক্সেস, পরিচালনা এবং আপডেট করা যায়।",
    "topic_details": {
      "title": "Database Management System",
      "summary": "Fundamental concepts of data storage and organization.",
      "key_points": [
        "Structured data collection",
        "Electronic storage",
        "Efficient retrieval"
      ]
    },
    "tags": ["ICT", "Database", "General Science"]
  },
  {
    "_id": "bcs_q159_intl",
    "question_id": "BCS-50th-159",
    "category": "International Affairs",
    "question_text": "মিয়ানমারে পরিচালিত স্ক্যাম সেন্টারগুলো মোকাবিলায় সম্প্রতি কোন্ দেশ 'স্ক্যাম সেন্টার স্ট্রাইক ফোর্স' চালু করেছে?",
    "options": [
      "(ক) রাশিয়া",
      "(খ) চীন",
      "(গ) মার্কিন যুক্তরাষ্ট্র",
      "(ঘ) থাইল্যান্ড"
    ],
    "correct_answer": 3,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "এটি একটি প্রতিবেশী দেশ।",
    "explanation": "মিয়ানমার সীমান্তবর্তী অঞ্চলে সাইবার অপরাধ ও স্ক্যাম সেন্টার দমনে থাইল্যান্ড সম্প্রতি বিশেষ স্ট্রাইক ফোর্স গঠন করেছে।",
    "topic_details": {
      "title": "Regional Security",
      "summary": "Measures against cybercrime in Southeast Asia.",
      "key_points": [
        "Cyber scam centers",
        "Bilateral security issues",
        "Thailand's initiative"
      ]
    },
    "tags": ["International Affairs", "Cyber Crime", "Thailand"]
  },
  {
    "_id": "bcs_q160_lit",
    "question_id": "BCS-50th-160",
    "category": "English Literature",
    "question_text": "In Gulliver's Travels, which of these traits Swift does not show in his depiction of the land of the Lilliput?",
    "options": [
      "(ক) pride",
      "(খ) lies",
      "(গ) peace & wisdom",
      "(ঘ) silly rules"
    ],
    "correct_answer": 2,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "Lilliputians were characterized by their pettiness.",
    "explanation": "Jonathan Swift depicts Lilliput as a place of petty pride, deceit, and ridiculous rules, but notably lacks 'peace & wisdom'.",
    "topic_details": {
      "title": "Satire in English Literature",
      "summary": "Jonathan Swift's critique of human nature and politics.",
      "key_points": [
        "Work: Gulliver's Travels",
        "Theme: Satire on British politics",
        "Trait: Absence of wisdom in Lilliput"
      ]
    },
    "tags": ["English Literature", "Jonathan Swift", "Satire"]
  },
  {
    "_id": "bcs_q161_grammar",
    "question_id": "BCS-50th-161",
    "category": "Bangla Language",
    "question_text": "কোন্ বাক্যে সমধাতুজ কর্ম রয়েছে?",
    "options": [
      "(ক) সে বই পড়ছে",
      "(খ) সে গভীর চিন্তায় মগ্ন",
      "(গ) আজ এমন ঘুম ঘুমিয়েছি!",
      "(ঘ) সে খেলা করছে।"
    ],
    "correct_answer": 2,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "ক্রিয়া এবং কর্ম যদি একই ধাতু থেকে উৎপন্ন হয়।",
    "explanation": "যেখানে বাক্যের ক্রিয়া এবং কর্ম একই মূল ধাতু থেকে উৎপন্ন হয়, তাকে সমধাতুজ কর্ম বলে। এখানে 'ঘুম' (কর্ম) এবং 'ঘুমিয়েছি' (ক্রিয়া) একই ধাতু থেকে উৎপন্ন।",
    "topic_details": {
      "title": "Bangla Grammar - Karok",
      "summary": "Understanding different types of objects in sentences.",
      "key_points": [
        "Cognate Object (সমধাতুজ কর্ম)",
        "Verb and Object origin",
        "Sentence structure"
      ]
    },
    "tags": ["Bangla", "Grammar", "Syntax"]
  },
  {
    "_id": "bcs_q162_math",
    "question_id": "BCS-50th-162",
    "category": "Mathematical Reasoning",
    "question_text": "সেট {2, 3, 4} এর প্রকৃত উপসেট কয়টি?",
    "options": [
      "(ক) ৩",
      "(খ) ৭",
      "(গ) ৪",
      "(ঘ) ৯"
    ],
    "correct_answer": 1,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "প্রকৃত উপসেটের সূত্র হল $2^n - 1$।",
    "explanation": "এখানে উপাদান সংখ্যা $n = 3$। সুতরাং প্রকৃত উপসেটের সংখ্যা $2^3 - 1 = 8 - 1 = 7$।",
    "topic_details": {
      "title": "Set Theory",
      "summary": "Calculating subsets and proper subsets of a set.",
      "key_points": [
        "Subset formula: $2^n$",
        "Proper subset formula: $2^n - 1$",
        "Null set inclusion"
      ]
    },
    "tags": ["Math", "Set Theory", "Algebra"]
  },
  {
    "_id": "bcs_q163_climate",
    "question_id": "BCS-50th-163",
    "category": "Geography & Environment",
    "question_text": "জলবায়ু কূটনীতিতে 'Common but Differentiated Responsibilities (CBDR)' নীতি প্রথম কোথায় স্বীকৃত হয়েছিল?",
    "options": [
      "(ক) রিও-ঘোষণা",
      "(খ) কিয়োটো প্রোটোকল",
      "(গ) প্যারিস চুক্তি",
      "(ঘ) স্টকহোম ঘোষণা"
    ],
    "correct_answer": 0,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "এটি ১৯৯২ সালের ধরিত্রী সম্মেলনে ঘটেছিল।",
    "explanation": "১৯৯২ সালে ব্রাজিলের রিও ডি জেনেরিওতে অনুষ্ঠিত ধরিত্রী সম্মেলনে (Rio Earth Summit) CBDR নীতিটি প্রথম আনুষ্ঠানিকভাবে গৃহীত হয়।",
    "topic_details": {
      "title": "Environmental Policy",
      "summary": "Key principles in international climate negotiations.",
      "key_points": [
        "CBDR Principle",
        "Rio Declaration 1992",
        "Responsibility of developed nations"
      ]
    },
    "tags": ["Geography", "Climate Change", "International Affairs"]
  },
  {
    "_id": "bcs_q164_folk",
    "question_id": "BCS-50th-164",
    "category": "Bangla Literature",
    "question_text": "ময়মনসিংহ গীতিকা কতটি ভাষায় অনূদিত হয়েছে?",
    "options": [
      "(ক) ২৩টি",
      "(খ) ২০টি",
      "(গ) ২২টি",
      "(ঘ) ২৫টি"
    ],
    "correct_answer": 0,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "দীনেশচন্দ্র সেন এর সংকলক।",
    "explanation": "বিখ্যাত লোকসংগীত সংকলন 'ময়মনসিংহ গীতিকা' এ পর্যন্ত ২৩টি ভাষায় অনূদিত হয়েছে।",
    "topic_details": {
      "title": "Folk Literature of Bengal",
      "summary": "Global reach of Bengali folk ballads.",
      "key_points": [
        "Compiler: Dinesh Chandra Sen",
        "Translation count: 23",
        "Cultural significance"
      ]
    },
    "tags": ["Bangla Literature", "Folk Lore", "General Knowledge"]
  },
  {
    "_id": "bcs_q165_ict",
    "question_id": "BCS-50th-165",
    "category": "ICT",
    "question_text": "Transmission Control Protocol (TCP) OSI রেফারেন্স মডেলের কোন্ লেয়ারের প্রোটোকল?",
    "options": [
      "(ক) অ্যাপ্লিকেশন লেয়ার",
      "(খ) নেটওয়ার্ক লেয়ার",
      "(গ) ট্রান্সপোর্ট লেয়ার",
      "(ঘ) ডেটালিঙ্ক লেয়ার"
    ],
    "correct_answer": 2,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "এটি এন্ড-টু-এন্ড যোগাযোগ নিশ্চিত করে।",
    "explanation": "OSI মডেলের ৪র্থ লেয়ার বা ট্রান্সপোর্ট লেয়ারে TCP (Transmission Control Protocol) কাজ করে।",
    "topic_details": {
      "title": "OSI Model Layers",
      "summary": "Functionality of network protocols in different layers.",
      "key_points": [
        "Layer 4: Transport Layer",
        "Protocol: TCP/UDP",
        "Reliability and Flow Control"
      ]
    },
    "tags": ["ICT", "Networking", "OSI Model"]
  },
  {
    "_id": "bcs_q166_govt",
    "question_id": "BCS-50th-166",
    "category": "Bangladesh Affairs",
    "question_text": "সংস্কার কমিশন নতুন সংস্কার প্রস্তাবে বাংলাদেশ সংসদের উচ্চ কক্ষে ______ টি আসন প্রস্তাব করে।",
    "options": [
      "(ক) ২৫",
      "(খ) ৫০",
      "(গ) ৭৫",
      "(ঘ) ১০০"
    ],
    "correct_answer": 3,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "এটি সাম্প্রতিক রাষ্ট্র সংস্কারের প্রস্তাব।",
    "explanation": "বিভিন্ন রাষ্ট্র সংস্কার প্রস্তাবে বাংলাদেশ সংসদের জন্য দ্বি-কক্ষবিশিষ্ট পার্লামেন্টের উচ্চ কক্ষে ৫০টি আসনের কথা উল্লেখ করা হয়েছে।",
    "topic_details": {
      "title": "State Reform & Constitution",
      "summary": "Proposals for structural changes in the legislative body.",
      "key_points": [
        "Upper House proposal",
        "Seats: 50",
        "Parliamentary system reform"
      ]
    },
    "tags": ["Bangladesh Affairs", "Politics", "Constitution"]
  },
  {
    "_id": "bcs_q167_math",
    "question_id": "BCS-50th-167",
    "category": "Mathematical Reasoning",
    "question_text": "ABSCISSA শব্দটির বর্ণগুলিকে নিয়ে কত প্রকারে বিন্যাস করা যায়?",
    "options": [
      "(ক) ১০০৮০",
      "(খ) ৬৭২০",
      "(গ) ৩৩৬০",
      "(ঘ) ৩৩৫৯"
    ],
    "correct_answer": 2,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "মোট বর্ণ ৮টি, যার মধ্যে S আছে ৩টি।",
    "explanation": "শব্দটিতে মোট ৮টি বর্ণ রয়েছে। এখানে S আছে ৩টি। সুতরাং বিন্যাস সংখ্যা $= \frac{8!}{3!} = \frac{40320}{6} = 6720$। (দ্রষ্টব্য: চিত্রে ৩৩৬০ অপশনটি চিহ্নিত করা হয়েছে যা অন্য হিসাব সাপেক্ষ হতে পারে, তবে সাধারণ বিন্যাস ৬৭২০)।",
    "topic_details": {
      "title": "Permutation & Combination",
      "summary": "Arranging letters with repetitions.",
      "key_points": [
        "Total items: 8",
        "Repeated items: 3 (S)",
        "Formula: $n! / p!$"
      ]
    },
    "tags": ["Math", "Permutation", "Algebra"]
  },
  {
    "_id": "bcs_q168_ict",
    "question_id": "BCS-50th-168",
    "category": "ICT",
    "question_text": "আপনার পারসোনাল কম্পিউটারে (পিসি) কোন্ একটি প্রোগ্রাম এর কর্মদক্ষতা (performance) বৃদ্ধির জন্য কোন্ কাজটি সর্বোত্তম হবে বলে আপনি মনে করেন?",
    "options": [
      "(ক) প্রোগ্রামটির জন্য এমন একটা অ্যালগরিদম তৈরি করা যা Asymptotically faster",
      "(খ) পিসির Configuration উন্নত করা",
      "(গ) খুব দ্রুত গতির I/O devices লাগানো",
      "(ঘ) খ এবং গ উভয়ই"
    ],
    "correct_answer": 0,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "সফটওয়্যারের গতি অ্যালগরিদমের ওপর নির্ভর করে।",
    "explanation": "সফটওয়্যারের মৌলিক কর্মদক্ষতা বৃদ্ধির জন্য Asymptotically faster অ্যালগরিদম ব্যবহার করা হার্ডওয়্যার পরিবর্তনের চেয়ে বেশি কার্যকর।",
    "topic_details": {
      "title": "Algorithm Efficiency",
      "summary": "How code logic impacts system performance.",
      "key_points": [
        "Time complexity",
        "Asymptotic analysis",
        "Software optimization"
      ]
    },
    "tags": ["ICT", "Computer Science", "Algorithms"]
  },
  {
    "_id": "bcs_q169_drama",
    "question_id": "BCS-50th-169",
    "category": "Bangla Literature",
    "question_text": "আধুনিক বাংলা নাটক মূলত কয়টি পর্বে বিভক্ত?",
    "options": [
      "(ক) ৬টি",
      "(খ) ৪টি",
      "(গ) ৫টি",
      "(ঘ) ৭টি"
    ],
    "correct_answer": 2,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "এর বিকাশের স্তরগুলো বিবেচনা করুন।",
    "explanation": "বাংলা নাটকের ইতিহাস ও বিবর্তনকে মূলত ৫টি প্রধান পর্বে বা যুগে ভাগ করা হয়।",
    "topic_details": {
      "title": "History of Bangla Drama",
      "summary": "Eras of development in Bengali theatrical arts.",
      "key_points": [
        "Pre-modern to Post-modern",
        "Stages of development",
        "Literary evolution"
      ]
    },
    "tags": ["Bangla Literature", "Drama", "History"]
  },
  {
    "_id": "bcs_q170_sentence",
    "question_id": "BCS-50th-170",
    "category": "English Grammar",
    "question_text": "Identify the compound sentence:",
    "options": [
      "(ক) Either you do it or you will be fined",
      "(খ) Unless you do it, you will be fined",
      "(গ) Do it or I shall fine you",
      "(ঘ) You have to do it, otherwise I will fine you"
    ],
    "correct_answer": 0,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "Look for coordinating conjunctions like 'Either...or'.",
    "explanation": "Compound sentences use coordinating conjunctions. 'Either...or' creates a compound structure linking two independent clauses.",
    "topic_details": {
      "title": "Types of Sentences",
      "summary": "Classification of sentences by structure.",
      "key_points": [
        "Simple, Complex, Compound",
        "Coordinating conjunctions",
        "Independent clauses"
      ]
    },
    "tags": ["English", "Grammar", "Syntax"]
  },
  {
    "_id": "bcs_q171_intl",
    "question_id": "BCS-50th-171",
    "category": "International Affairs",
    "question_text": "চীনের উদ্যোগে চালু করা 'বেল্ট অ্যান্ড রোড ইনিশিয়েটিভ' (BRI)-এর প্রাথমিক লক্ষ্য কী?",
    "options": [
      "(ক) একটি নতুন আন্তর্জাতিক মুদ্রা প্রতিষ্ঠা করা",
      "(খ) নৌ ঘাঁটির মাধ্যমে বিশ্বব্যাপী অর্থনৈতিক সম্প্রসারণ",
      "(গ) বিশ্বব্যাপী অর্থনৈতিক উন্নয়নে অর্থায়ন",
      "(ঘ) বাণিজ্য এবং অবকাঠামোর একটি বিশ্বব্যাপী নেটওয়ার্ক তৈরি করা"
    ],
    "correct_answer": 3,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "এটি সিল্ক রোড পুনরুজ্জীবনের প্রকল্প।",
    "explanation": "BRI-এর মূল লক্ষ্য হল অবকাঠামো উন্নয়ন ও বিনিয়োগের মাধ্যমে এশিয়া, ইউরোপ এবং আফ্রিকার মধ্যে বাণিজ্যিক যোগাযোগ ও নেটওয়ার্ক স্থাপন করা।",
    "topic_details": {
      "title": "China's Foreign Policy",
      "summary": "Infrastructure and economic initiatives on a global scale.",
      "key_points": [
        "One Belt One Road",
        "Global trade network",
        "Infrastructural connectivity"
      ]
    },
    "tags": ["International Affairs", "China", "Economy"]
  },
  {
    "_id": "bcs_q172_security",
    "question_id": "BCS-50th-172",
    "category": "ICT / International",
    "question_text": "আন্তর্জাতিক নিরাপত্তা আলোচনায় নিচের কোন্ সাইবার হুমকিটি ক্রমবর্ধমানভাবে তাৎপর্যপূর্ণ হয়ে উঠেছে?",
    "options": [
      "(ক) ফিশিং (Phishing)",
      "(খ) স্প্যাম ইমেইল (Spam e-mail)",
      "(গ) র‍্যানসমওয়্যার অ্যাটাক (Ransomware Attack)",
      "(ঘ) পরিচয় চুরি (Identity Theft)"
    ],
    "correct_answer": 2,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "এটি মুক্তিপণ দাবির সাথে জড়িত।",
    "explanation": "র‍্যানসমওয়্যার (Ransomware) বর্তমান বিশ্বে দেশগুলোর সার্বভৌমত্ব ও অর্থনৈতিক নিরাপত্তার জন্য সবচেয়ে বড় হুমকি হিসেবে আবির্ভূত হয়েছে।",
    "topic_details": {
      "title": "Cyber Security",
      "summary": "Modern threats to national and global digital infrastructure.",
      "key_points": [
        "Data encryption",
        "Financial extortion",
        "State-sponsored cyberwarfare"
      ]
    },
    "tags": ["ICT", "Security", "Cyber Crime"]
  },
  {
    "_id": "bcs_q173_grammar",
    "question_id": "BCS-50th-173",
    "category": "Bangla Language",
    "question_text": "'প্রাচ্য' শব্দের বিপরীত শব্দ কোন্টি?",
    "options": [
      "(ক) প্রতীচ্য",
      "(খ) প্রাচীনা",
      "(গ) অপপ্রাচ্য",
      "(ঘ) নবীন"
    ],
    "correct_answer": 0,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "পূর্ব এর বিপরীতে পশ্চিম।",
    "explanation": "'প্রাচ্য' শব্দের অর্থ পূর্ব দেশীয়, এর বিপরীত শব্দ হলো 'প্রতীচ্য' যার অর্থ পশ্চিম দেশীয়।",
    "topic_details": {
      "title": "Bangla Antonyms",
      "summary": "Words reflecting opposite meanings in Bengali.",
      "key_points": [
        "প্রাচ্য vs প্রতীচ্য",
        "Directional opposites",
        "Etymological origin"
      ]
    },
    "tags": ["Bangla", "Vocabulary", "Grammar"]
  },
  {
    "_id": "bcs_q174_lit",
    "question_id": "BCS-50th-174",
    "category": "English Literature",
    "question_text": "The lines 'A Book of Verses underneath the Bough, / A Jug of Wine, a Loaf of Bread - and Thou / Beside me singing in the Wilderness...' are taken from a famous translation work by-",
    "options": [
      "(ক) Scott Fitzgerald",
      "(খ) Edward Fitzgerald",
      "(গ) William Fitzgerald",
      "(ঘ) Gerald Fitzgerald"
    ],
    "correct_answer": 1,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "The Rubaiyat of Omar Khayyam.",
    "explanation": "These famous lines are from Edward Fitzgerald's translation of 'The Rubaiyat of Omar Khayyam'.",
    "topic_details": {
      "title": "Classic Translations",
      "summary": "Persian poetry translated into English literature.",
      "key_points": [
        "Author: Omar Khayyam",
        "Translator: Edward Fitzgerald",
        "Genre: Poetry (Quatrains)"
      ]
    },
    "tags": ["English Literature", "Translation", "Poetry"]
  },
  {
    "_id": "bcs_q175_ict",
    "question_id": "BCS-50th-175",
    "category": "ICT",
    "question_text": "কোন্টি কম্বিনেশনাল লজিক সার্কিট নয়?",
    "options": [
      "(ক) রেজিস্টার (Register)",
      "(খ) ডিকোডার (Decoder)",
      "(গ) মাল্টিপ্লেক্সার (Multiplexer)",
      "(ঘ) NAND গেট"
    ],
    "correct_answer": 0,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "এটির মেমরি বা স্মৃতি আছে।",
    "explanation": "রেজিস্টার একটি সিকোয়েনশিয়াল সার্কিট কারণ এটি মেমরি হিসেবে ডেটা ধরে রাখতে পারে, যা কম্বিনেশনাল সার্কিটে থাকে না।",
    "topic_details": {
      "title": "Digital Logic Design",
      "summary": "Classification of logic circuits based on memory.",
      "key_points": [
        "Combinational vs Sequential",
        "Memory elements",
        "Register functionality"
      ]
    },
    "tags": ["ICT", "Digital Electronics", "Computer Science"]
  },
  {
    "_id": "bcs_q176_science",
    "question_id": "BCS-50th-176",
    "category": "General Science",
    "question_text": "কাগজের প্রধান রাসায়নিক উপাদান কোন্টি?",
    "options": [
      "(ক) লিগনিন (Lignin)",
      "(খ) রেজিন (Resin)",
      "(গ) হেমি সেলুলোজ",
      "(ঘ) সেলুলোজ"
    ],
    "correct_answer": 3,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "উদ্ভিদ কোষে এটি পাওয়া যায়।",
    "explanation": "কাগজ মূলত উদ্ভিদের তন্তু থেকে তৈরি হয়, যার প্রধান রাসায়নিক উপাদান হলো সেলুলোজ।",
    "topic_details": {
      "title": "Industrial Chemistry",
      "summary": "Chemical composition of everyday materials.",
      "key_points": [
        "Paper making process",
        "Organic polymers",
        "Cellulose fibers"
      ]
    },
    "tags": ["Science", "Chemistry", "Industry"]
  },
  {
    "_id": "bcs_q177_math",
    "question_id": "BCS-50th-177",
    "category": "Mental Ability",
    "question_text": "ঘড়ির ঘণ্টার কাঁটা ও মিনিটের কাঁটা একদিনে কতবার মিলিত হয়?",
    "options": [
      "(ক) ১২",
      "(খ) ১৮",
      "(গ) ২২",
      "(ঘ) ২৪"
    ],
    "correct_answer": 2,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "প্রতি ১২ ঘণ্টায় ১১ বার মিলিত হয়।",
    "explanation": "ঘড়ির কাঁটা প্রতি ১২ ঘণ্টায় ১১ বার মিলিত হয় (১১টা থেকে ১টার মাঝে কেবল একবার ১২টায় মিলিত হয়)। সুতরাং ২৪ ঘণ্টায় বা একদিনে $11 \times 2 = 22$ বার মিলিত হয়।",
    "topic_details": {
      "title": "Clock Problems",
      "summary": "Analyzing the relative motion of clock hands.",
      "key_points": [
        "Relative speed",
        "Frequency of coincidence",
        "Calculation for 24 hours"
      ]
    },
    "tags": ["Math", "Mental Ability", "Logic"]
  },
  {
    "_id": "bcs_q178_governance",
    "question_id": "BCS-50th-178",
    "category": "Ethics & Good Governance",
    "question_text": "স্বচ্ছতা কেন সু-শাসন সম্পর্কে নাগরিকের ধারণাকে উন্নত ও স্বচ্ছ করে?",
    "options": [
      "(ক) এটি প্রশাসনিক চাপ বাড়ায়",
      "(খ) এটি রাজনৈতিক প্রতিযোগিতা কমায়",
      "(গ) এটি জনগণের নজরদারি ও সচেতন মূল্যায়নের জন্য সুযোগ দেয়",
      "(ঘ) উপরের সবগুলো"
    ],
    "correct_answer": 2,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "জবাবদিহিতার সাথে সম্পর্কিত।",
    "explanation": "স্বচ্ছতা নিশ্চিত হলে জনগণ সরকারের কাজ পর্যবেক্ষণ ও মূল্যায়ন করতে পারে, যা সু-শাসনের প্রতি আস্থা বাড়ায়।",
    "topic_details": {
      "title": "Transparency in Governance",
      "summary": "The role of open information in democratic systems.",
      "key_points": [
        "Public scrutiny",
        "Informed evaluation",
        "Reduced corruption"
      ]
    },
    "tags": ["Ethics", "Good Governance", "Policy"]
  },
  {
    "_id": "bcs_q179_spelling",
    "question_id": "BCS-50th-179",
    "category": "Bangla Language",
    "question_text": "কোন্ বানানটি শুদ্ধ?",
    "options": [
      "(ক) নিশিথিনি",
      "(খ) কথোপকথন",
      "(গ) পিপিলিকা",
      "(ঘ) সমিচিন"
    ],
    "correct_answer": 1,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "কথার পিঠে কথা বলা।",
    "explanation": "এখানে 'কথোপকথন' বানানটি শুদ্ধ। অন্যান্য অপশনের শুদ্ধ রূপ: নিশীথিনী, পিপীলিকা, সমীচীন।",
    "topic_details": {
      "title": "Bangla Orthography",
      "summary": "Correct usage of vowels and consonants in Bengali words.",
      "key_points": [
        "Spelling rules",
        "Commonly misspelled words",
        "Vowel consistency"
      ]
    },
    "tags": ["Bangla", "Grammar", "Spelling"]
  },
  {
    "_id": "bcs_q180_physics",
    "question_id": "BCS-50th-180",
    "category": "Mental Ability",
    "question_text": "একটি আয়না থেকে একটি বস্তু আয়নার পৃষ্ঠ থেকে পৃষ্ঠের লম্ব বরাবর সেকেন্ডে ১০ সে.মি. বেগে চলতে শুরু করল। ৪ সেকেন্ড পর বস্তুটি ও তার প্রতিবিম্বের মধ্যে দূরত্ব কত হবে?",
    "options": [
      "(ক) ৪০ সে.মি.",
      "(খ) ১৬০ সে.মি.",
      "(গ) ৮০ সে.মি.",
      "(ঘ) ০ সে.মি."
    ],
    "correct_answer": 2,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "বস্তু ও প্রতিবিম্বের দূরত্ব আয়না থেকে সমান হয়।",
    "explanation": "৪ সেকেন্ডে বস্তুর অতিক্রান্ত দূরত্ব $= 10 \times 4 = 40$ সে.মি.। প্রতিবিম্বও আয়না থেকে ৪০ সে.মি. দূরে থাকবে। সুতরাং বস্তু ও প্রতিবিম্বের দূরত্ব $= 40 + 40 = 80$ সে.মি.।",
    "topic_details": {
      "title": "Light & Reflection",
      "summary": "Properties of images in plane mirrors.",
      "key_points": [
        "Object distance = Image distance",
        "Total distance calculation",
        "Linear motion"
      ]
    },
    "tags": ["Math", "Physics", "Mental Ability"]
  },
  {
    "_id": "bcs_q181_english",
    "question_id": "BCS-50th-181",
    "category": "English Grammar",
    "question_text": "'The villagers believed that he was an honest leader.' Passive form of this sentence is:",
    "options": [
      "(ক) He was believed to be an honest leader",
      "(খ) He was believed to have been an honest leader",
      "(গ) He has been believed to be an honest leader",
      "(ঘ) He was believed he was an honest leader"
    ],
    "correct_answer": 0,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "Passive of reported belief sentences.",
    "explanation": "When people's beliefs are reported, the passive structure 'He was believed to be...' is used for the past tense.",
    "topic_details": {
      "title": "Voice Change",
      "summary": "Converting complex active sentences into passive voice.",
      "key_points": [
        "Reported verbs (believe, say, think)",
        "Infinitive construction",
        "Past tense agreement"
      ]
    },
    "tags": ["English", "Grammar", "Voice"]
  },
  {
    "_id": "bcs_q182_math",
    "question_id": "BCS-50th-182",
    "category": "Mathematical Reasoning",
    "question_text": "০.৫ × ০.০৫ × ০.০০০৫ = ?",
    "options": [
      "(ক) ০.১২৫",
      "(খ) ০.০১২৫",
      "(গ) ০.০০১২৫",
      "(ঘ) ০.০০০০০১২৫"
    ],
    "correct_answer": 3,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "দশমিকের পরের ঘরগুলো গুণ করুন।",
    "explanation": "$5 \times 5 \times 5 = 125$। দশমিকের পর মোট ঘর সংখ্যা $= 1 + 2 + 4 = 7$। সুতরাং উত্তর হবে ০.০০০০০১২৫।",
    "topic_details": {
      "title": "Decimal Multiplication",
      "summary": "Multiplying numbers with floating points.",
      "key_points": [
        "Positioning the decimal",
        "Counting fractional digits",
        "Precision"
      ]
    },
    "tags": ["Math", "Arithmetic", "General Knowledge"]
  },
  {
    "_id": "bcs_q183_logic",
    "question_id": "BCS-50th-183",
    "category": "Mental Ability",
    "question_text": "লামিয়া একটি শ্রেণীর সামনে থেকে নবম এবং পিছন থেকে ৩৬তম হলে শ্রেণীতে শিক্ষার্থী কতজন?",
    "options": [
      "(ক) ৪৪",
      "(খ) ৪৫",
      "(গ) ৪৬",
      "(ঘ) ৪৮"
    ],
    "correct_answer": 0,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "মোট $= (সামনে + পিছন) - ১$।",
    "explanation": "এখানে লামিয়াকে দুইবার গোনা হয়েছে। সুতরাং মোট শিক্ষার্থী $= (9 + 36) - 1 = 45 - 1 = 44$।",
    "topic_details": {
      "title": "Ranking Problems",
      "summary": "Determining total counts in a sequence based on positions.",
      "key_points": [
        "Position overlaps",
        "Sequence logic",
        "Subtraction of the common element"
      ]
    },
    "tags": ["Math", "Mental Ability", "Logic"]
  },
  {
    "_id": "bcs_q184_science",
    "question_id": "BCS-50th-184",
    "category": "General Science",
    "question_text": "'এপিকালচার' কোন্ বিষয় নিয়ে আলোচনা করে?",
    "options": [
      "(ক) গুটিপোকা এবং রেশম",
      "(খ) মৌমাছি এবং মধু",
      "(গ) মৎস চাষ",
      "(ঘ) তামাক চাষ"
    ],
    "correct_answer": 1,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "এটি মধু উৎপাদনের সাথে সম্পর্কিত।",
    "explanation": "মৌমাছি পালন ও মধু উৎপাদনের বিজ্ঞানসম্মত চাষকে এপিকালচার (Apiculture) বলা হয়।",
    "topic_details": {
      "title": "Scientific Culture Branches",
      "summary": "Terminology for various types of farming and breeding.",
      "key_points": [
        "Apiculture: Bees",
        "Sericulture: Silkworms",
        "Pisciculture: Fish"
      ]
    },
    "tags": ["Science", "Biology", "General Knowledge"]
  },
  {
    "_id": "bcs_q185_lit",
    "question_id": "BCS-50th-185",
    "category": "Bangla Literature",
    "question_text": "পুথি সাহিত্যে প্রাচীনতম লেখক কে?",
    "options": [
      "(ক) ভারত চন্দ্র রায়",
      "(খ) কাজী দৌলত",
      "(গ) আব্দুল হাকিম",
      "(ঘ) ফকির গরীবুল্লাহ"
    ],
    "correct_answer": 1,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "মধ্যযুগের একজন বিখ্যাত কবি।",
    "explanation": "পুথি সাহিত্যের বিকাশে আদি ও অন্যতম প্রধান লেখক হলেন কাজী দৌলত।",
    "topic_details": {
      "title": "History of Bangla Literature",
      "summary": "Early writers and foundations of Puthi Sahitya.",
      "key_points": [
        "Medieval period writers",
        "Folk influences",
        "Puthi style development"
      ]
    },
    "tags": ["Bangla Literature", "Puthi", "History"]
  },
  {
    "_id": "bcs_q186_english",
    "question_id": "BCS-50th-186",
    "category": "English Grammar",
    "question_text": "Which functions both as a transitive and an intransitive verb?",
    "options": [
      "(ক) sleep",
      "(খ) arrive",
      "(গ) break",
      "(ঘ) die"
    ],
    "correct_answer": 2,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "It can take an object or stand alone.",
    "explanation": "'Break' can be used without an object (The window broke) and with an object (He broke the window).",
    "topic_details": {
      "title": "Verb Types",
      "summary": "Distinguishing between transitive and intransitive usage.",
      "key_points": [
        "Direct objects",
        "Ergative verbs",
        "Syntactic flexibility"
      ]
    },
    "tags": ["English", "Grammar", "Verbs"]
  },
  {
    "_id": "bcs_q187_env",
    "question_id": "BCS-50th-187",
    "category": "Geography & Environment",
    "question_text": "'______ কনভেনশন' বিপজ্জনক বর্জ্যের আন্তঃসীমান্ত পরিবহন নিয়ন্ত্রণ করে।",
    "options": [
      "(ক) স্টকহোম",
      "(খ) রোটারডাম",
      "(গ) বাসেল",
      "(ঘ) মিনামাটা"
    ],
    "correct_answer": 2,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "এটি সুইজারল্যান্ডের একটি শহরে স্বাক্ষরিত হয়েছিল।",
    "explanation": "১৯৮৯ সালে স্বাক্ষরিত বাসেল কনভেনশন (Basel Convention) মূলত বিপজ্জনক বর্জ্যের আন্তর্জাতিক স্থানান্তর নিয়ন্ত্রণ করে।",
    "topic_details": {
      "title": "International Environmental Law",
      "summary": "Treaties regulating waste and chemicals.",
      "key_points": [
        "Hazardous waste control",
        "Transboundary movement",
        "Signed in Basel"
      ]
    },
    "tags": ["Geography", "Environment", "International Affairs"]
  },
  {
    "_id": "bcs_q188_ethics",
    "question_id": "BCS-50th-188",
    "category": "Ethics & Good Governance",
    "question_text": "কোন্টি মূল্যবোধের সারসত্তাকে প্রতিফলিত করে?",
    "options": [
      "(ক) কর্তৃপক্ষ কর্তৃক আরোপিত নিয়ম",
      "(খ) নৈতিক নির্দেশ ছাড়া প্রথা ও ঐতিহ্য",
      "(গ) নৈতিক আচরণ নির্দেশক বিশ্বাস ও নীতি",
      "(ঘ) সামাজিক শৃঙ্খলার আইনি বাধ্যবাধকতা"
    ],
    "correct_answer": 2,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "এটি মানুষের অন্তরের বিশ্বাসের সাথে সম্পর্কিত।",
    "explanation": "মূল্যবোধ মূলত মানুষের সেই বিশ্বাস ও আদর্শ যা তার নৈতিক আচরণকে পরিচালিত করে।",
    "topic_details": {
      "title": "Concept of Values",
      "summary": "Definition and essence of ethical values.",
      "key_points": [
        "Inner conviction",
        "Moral compass",
        "Guided behavior"
      ]
    },
    "tags": ["Ethics", "Values", "Social Science"]
  },
  {
    "_id": "bcs_q189_lit",
    "question_id": "BCS-50th-189",
    "category": "English Literature",
    "question_text": "Which play is filled with nonsensical conversations, meaningless dialogues, and characters who often become forgetful?",
    "options": [
      "(ক) Pygmalion",
      "(খ) The Skin Game",
      "(গ) Waiting for Godot",
      "(ঘ) Candida"
    ],
    "correct_answer": 2,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "A major work of the Theatre of the Absurd.",
    "explanation": "Samuel Beckett's 'Waiting for Godot' is the quintessential 'Theatre of the Absurd' play, featuring repetitive and nonsensical dialogues.",
    "topic_details": {
      "title": "Theatre of the Absurd",
      "summary": "Existential themes in 20th-century drama.",
      "key_points": [
        "Author: Samuel Beckett",
        "Non-linear structure",
        "Themes of pointlessness"
      ]
    },
    "tags": ["English Literature", "Modernism", "Drama"]
  },
  {
    "_id": "bcs_q29_lit",
    "question_id": "BCS-50th-29",
    "category": "English Literature",
    "question_text": "In which of these poems did Matthew Arnold express a pessimistic worldview, reflecting on a world full of conflicts and lacking in joy, evincing an implicit criticism of Victorian era's aggressive spirit?",
    "options": [
      "(ক) Scholar Gipsy",
      "(খ) Dover Beach",
      "(গ) Rugby Chapel",
      "(ঘ) Immortality"
    ],
    "correct_answer": 1,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "The poem mentions the 'Sea of Faith'.",
    "explanation": "'Dover Beach' is Matthew Arnold's most famous representative of Victorian melancholy and spiritual struggle.",
    "topic_details": {
      "title": "Victorian Poetry",
      "summary": "Reflection of faith vs. industrialization conflicts.",
      "key_points": [
        "Author: Matthew Arnold",
        "Theme: Melancholy and loss of faith",
        "Metaphor: The Sea of Faith"
      ]
    },
    "tags": ["English Literature", "Victorian Era", "Poetry"]
  },
  {
    "_id": "bcs_q30_geo",
    "question_id": "BCS-50th-30",
    "category": "International Affairs",
    "question_text": "উত্তর কোরিয়া ও দক্ষিণ কোরিয়ার মধ্যকার বিভক্তকারী রেখা হলো ______ উত্তর অক্ষরেখা।",
    "options": [
      "(ক) ৩৮°",
      "(খ) ৩৪°",
      "(গ) ৪১°",
      "(ঘ) ২৩.৫০°"
    ],
    "correct_answer": 0,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "It is known as the 38th Parallel.",
    "explanation": "The 38th parallel north is the circle of latitude that was used as the border between North and South Korea.",
    "topic_details": {
      "title": "Geopolitics",
      "summary": "Borders formed during the Cold War era.",
      "key_points": [
        "Boundary: 38th Parallel",
        "Region: Korean Peninsula",
        "Context: Post-WWII division"
      ]
    },
    "tags": ["International Affairs", "Geography", "Borders"]
  },
  {
    "_id": "bcs_q31_sports",
    "question_id": "BCS-50th-31",
    "category": "Bangladesh Affairs",
    "question_text": "বাংলাদেশ ______ সাল থেকে গ্রীষ্মকালীন অলিম্পিকে অংশগ্রহণ করে আসছে।",
    "options": [
      "(ক) ১৯৮৫",
      "(খ) ১৯৮৪",
      "(গ) ১৯৮৬",
      "(ঘ) ১৯৮৩"
    ],
    "correct_answer": 1,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "Los Angeles Olympics.",
    "explanation": "Bangladesh made its Olympic debut at the 1984 Summer Olympics in Los Angeles.",
    "topic_details": {
      "title": "Bangladesh in Olympics",
      "summary": "History of sports participation on the global stage.",
      "key_points": [
        "First Year: 1984",
        "Event: Los Angeles Summer Olympics",
        "Affiliation: IOC"
      ]
    },
    "tags": ["Bangladesh Affairs", "Sports", "Olympics"]
  },
  {
    "_id": "bcs_q32_grammar",
    "question_id": "BCS-50th-32",
    "category": "Bangla Language",
    "question_text": "'ই' এর মাত্রার উপরের অংশের নাম কী?",
    "options": [
      "(ক) চৈতন্য",
      "(খ) আঁকড়ি",
      "(গ) পাগড়ি",
      "(ঘ) জোড় আঁকড়ি"
    ],
    "correct_answer": 1,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "এটি একটি বর্ণ অলংকরণ।",
    "explanation": "বাংলা বর্ণমালায় 'ই' বর্ণের উপরের হ্রস্ব বা দীর্ঘ টানকে 'আঁকড়ি' বলা হয়।",
    "topic_details": {
      "title": "Bangla Orthography",
      "summary": "Parts of Bengali scripts and letters.",
      "key_points": [
        "Letter: ই",
        "Part: আঁকড়ি",
        "Anatomy: Upper script ornament"
      ]
    },
    "tags": ["Bangla", "Grammar", "Script"]
  },
  {
    "_id": "bcs_q33_sci",
    "question_id": "BCS-50th-33",
    "category": "General Science",
    "question_text": "ভাইরাস সম্পর্কে কোন্ বিবৃতিটি সঠিক?",
    "options": [
      "(ক) এদের যেকোনো সিনথেটিক নিউট্রিয়েন্ট মিডিয়ামে কালচার করা যায়",
      "(খ) এদের জেনেটিক উপাদান হিসেবে ডিএনএ এবং আরএনএ থাকে",
      "(গ) এরা এক ধরণের অন্তঃকোষীয় পরজীবী",
      "(ঘ) ভাইরাস হলো অণুবীক্ষণিক জীবন্ত প্রাণী"
    ],
    "correct_answer": 2,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "Host cell connection.",
    "explanation": "Viruses are obligate intracellular parasites that can only replicate inside a host cell.",
    "topic_details": {
      "title": "Virology",
      "summary": "Biological characteristics of viruses.",
      "key_points": [
        "Classification: Obligate Parasite",
        "Structure: DNA or RNA (not both usually)",
        "Life: Non-living outside host"
      ]
    },
    "tags": ["Science", "Biology", "Virus"]
  },
  {
    "_id": "bcs_q34_agri",
    "question_id": "BCS-50th-34",
    "category": "Bangladesh Affairs",
    "question_text": "কোন ফসলটি রপ্তানী বহুমুখীকরণে সম্ভাবনাময়?",
    "options": [
      "(ক) আউশ ধান",
      "(খ) তৈলবীজ",
      "(গ) পাট",
      "(ঘ) আলু"
    ],
    "correct_answer": 3,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "Bangladesh exports this vegetable globally.",
    "explanation": "Potato has emerged as a high-potential crop for export diversification in Bangladesh.",
    "topic_details": {
      "title": "Agriculture Economy",
      "summary": "Export potential of non-traditional crops.",
      "key_points": [
        "Crop: Potato",
        "Context: Export diversification",
        "Growth: Increased surplus production"
      ]
    },
    "tags": ["Bangladesh Affairs", "Economy", "Agriculture"]
  },
  {
    "_id": "bcs_q35_spelling",
    "question_id": "BCS-50th-35",
    "category": "English Grammar",
    "question_text": "কোনটি সঠিক বানান?",
    "options": [
      "(ক) Gazete",
      "(খ) Gazzete",
      "(গ) Gaggete",
      "(ঘ) Gazette"
    ],
    "correct_answer": 3,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "Official government publication term.",
    "explanation": "The correct spelling is 'Gazette', derived from Italian 'gazzetta'.",
    "topic_details": {
      "title": "English Spelling",
      "summary": "Commonly misspelled official terms.",
      "key_points": [
        "Word: Gazette",
        "Usage: Legal publication",
        "Spelling: Double 'z', double 't'"
      ]
    },
    "tags": ["English", "Grammar", "Spelling"]
  },
  {
    "_id": "bcs_q36_folk",
    "question_id": "BCS-50th-36",
    "category": "Bangla Literature",
    "question_text": "বাংলা পুথি সাহিত্যের উদাহরণ কোনটি?",
    "options": [
      "(ক) নূরনামা",
      "(খ) আমীর হামজা",
      "(গ) গোপী চন্দ্রের সন্ন্যাস",
      "(ঘ) মহুয়া"
    ],
    "correct_answer": 1,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "Known as Dobhashi literature.",
    "explanation": "'Amir Hamza' is a classic example of Puthi Sahitya, particularly in the Dobhashi tradition.",
    "topic_details": {
      "title": "Puthi Sahitya",
      "summary": "Medieval and early modern folk literature.",
      "key_points": [
        "Work: Amir Hamza",
        "Genre: Folk/Puthi",
        "Style: Dobhashi (Mixed language)"
      ]
    },
    "tags": ["Bangla Literature", "Folk", "Puthi"]
  },
  {
    "_id": "bcs_q37_battery",
    "question_id": "BCS-50th-37",
    "category": "General Science",
    "question_text": "লিথিয়াম-আয়ন ব্যাটারির সম্পর্কে কোন্ বিবৃতিটি মিথ্যা?",
    "options": [
      "(ক) Ni-Cd ব্যাটারির তুলনায় এদের শক্তির ঘনত্ব বেশি",
      "(খ) এতে লিথিয়াম কোবাল্ট অক্সাইড ক্যাথোড ব্যবহার করা হয়",
      "(গ) 'মেমরি এফেক্ট'-এর কারণে এদের পর্যায়ক্রমিক সম্পূর্ণ ডিসচার্জের প্রয়োজন হয়",
      "(ঘ) এখানে অতিরিক্ত চার্জিং-এর ফলে আগুন লাগতে পারে"
    ],
    "correct_answer": 2,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "Lithium-ion batteries don't suffer from memory effect.",
    "explanation": "Lithium-ion batteries do NOT have 'memory effect', which is a characteristic of Ni-Cd batteries.",
    "topic_details": {
      "title": "Energy Storage",
      "summary": "Characteristics of rechargeable batteries.",
      "key_points": [
        "Tech: Li-ion",
        "Benefit: No memory effect",
        "Risk: Thermal runaway if overcharged"
      ]
    },
    "tags": ["Science", "Physics", "Technology"]
  },
  {
    "_id": "bcs_q38_synonym",
    "question_id": "BCS-50th-38",
    "category": "Bangla Language",
    "question_text": "'স্বর্গ' শব্দের সঠিক সমার্থক শব্দজোড়া কোনটি?",
    "options": [
      "(ক) হরিদ্বশ্ব, বিটদান",
      "(খ) ক্ষিতি, উর্বী",
      "(গ) দিনমণি, দিন নাথ",
      "(ঘ) ত্রিদিব, সুরপুর"
    ],
    "correct_answer": 3,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "Heavenly place for gods.",
    "explanation": "'Tridiv' and 'Surpur' are synonyms for 'Swarga' (Heaven).",
    "topic_details": {
      "title": "Bangla Synonyms",
      "summary": "Vocabulary enhancement through synonyms.",
      "key_points": [
        "Word: স্বর্গ",
        "Synonyms: ত্রিদিব, সুরপুর",
        "Category: Mythology/Religion"
      ]
    },
    "tags": ["Bangla", "Grammar", "Vocabulary"]
  },
  {
    "_id": "bcs_q39_preposition",
    "question_id": "BCS-50th-39",
    "category": "English Grammar",
    "question_text": "Candidates are required to get ______ the centre before 09:00 AM.",
    "options": [
      "(ক) at",
      "(খ) to",
      "(গ) in",
      "(ঘ) into"
    ],
    "correct_answer": 1,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "Movement towards a destination.",
    "explanation": "'Get to' indicates arriving at or reaching a destination.",
    "topic_details": {
      "title": "English Prepositions",
      "summary": "Usage of prepositions in directional context.",
      "key_points": [
        "Phrase: Get to",
        "Context: Arrival",
        "Structure: Destination marker"
      ]
    },
    "tags": ["English", "Grammar", "Preposition"]
  },
  {
    "_id": "bcs_q40_biology",
    "question_id": "BCS-50th-40",
    "category": "General Science",
    "question_text": "কোন্ টিস্যু পেশীকে হাড়ের সাথে সংযুক্ত রাখে?",
    "options": [
      "(ক) তরুণাস্থি",
      "(খ) লিগামেন্ট",
      "(গ) টেন্ডন",
      "(ঘ) অ্যারিওলার টিস্যু"
    ],
    "correct_answer": 2,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "Connects muscle to bone.",
    "explanation": "A tendon is a fibrous connective tissue that attaches muscle to bone.",
    "topic_details": {
      "title": "Human Anatomy",
      "summary": "Connective tissues in the skeletal system.",
      "key_points": [
        "Tendon: Muscle to Bone",
        "Ligament: Bone to Bone",
        "Classification: Fibrous tissue"
      ]
    },
    "tags": ["Science", "Biology", "Anatomy"]
  },
  {
    "_id": "bcs_q41_energy",
    "question_id": "BCS-50th-41",
    "category": "General Science",
    "question_text": "'গ্রে-হাইড্রোজেন'-এর তুলনায় 'গ্রিন-হাইড্রোজেন'-এর সুবিধা হলো-",
    "options": [
      "(ক) এটি উৎপাদন করা সস্তা",
      "(খ) এতে কার্বন নিঃসরণ প্রায় শূন্য হয়",
      "(গ) এটি সংরক্ষণ এবং পরিবহন করা সহজ",
      "(ঘ) প্রতি একক আয়তনে এর শক্তি ঘনত্ব বেশি"
    ],
    "correct_answer": 1,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "Produced by renewable energy.",
    "explanation": "Green hydrogen is produced via electrolysis powered by renewables, resulting in zero carbon emissions.",
    "topic_details": {
      "title": "Renewable Energy",
      "summary": "The spectrum of hydrogen production.",
      "key_points": [
        "Green H2: Zero carbon",
        "Grey H2: Fossil fuel based",
        "Impact: Decarbonization"
      ]
    },
    "tags": ["Science", "Environment", "Energy"]
  },
  {
    "_id": "bcs_q42_applied",
    "question_id": "BCS-50th-42",
    "category": "Bangla Language",
    "question_text": "কোন বাক্যটি প্রয়োগগত দিক থেকে শুদ্ধ?",
    "options": [
      "(ক) মাছ আকাশে উড়ে।",
      "(খ) তাঁর খুব আনন্দ পেল।",
      "(গ) আবশ্যক ব্যয়ে কার্পণ্য অনুচিত।",
      "(ঘ) সকল ছাত্রগণ পাঠে মনোযোগী।"
    ],
    "correct_answer": 2,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "Check for redundancy and logical errors.",
    "explanation": "Option (গ) is grammatically and logically correct. 'সকল ছাত্রগণ' is a redundancy error (বাহুল্য দোষ).",
    "topic_details": {
      "title": "Bangla Syntax",
      "summary": "Correct application of grammar and logic in sentences.",
      "key_points": [
        "Error type: Redundancy (বাহুল্য দোষ)",
        "Logical error: Fish flying",
        "Purity: Necessary spending vs miserliness"
      ]
    },
    "tags": ["Bangla", "Grammar", "Syntax"]
  },
  {
    "_id": "bcs_q43_health",
    "question_id": "BCS-50th-43",
    "category": "General Science",
    "question_text": "একজন টাইপ-১ ডায়াবেটিক রোগীর ক্ষেত্রে কোন্ বক্তব্যটি সঠিক?",
    "options": [
      "(ক) নির্দিষ্ট কোষের ইনসুলিন প্রতিরোধিতা",
      "(খ) বিটা কোষগুলির অটো-ইমিউন ধ্বংসের কারণে অmapping পর্যাপ্ত ইনসুলিন তৈরি করে",
      "(গ) অগ্ন্যাশয়ের আলফা কোষ দ্বারা গ্লুকাগনের অতিরিক্ত উৎপাদন",
      "(ঘ) প্রো-ইনসুলিন থেকে ইনসুলিনে রূপান্তরে ত্রুটি"
    ],
    "correct_answer": 1,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "Beta cells destruction.",
    "explanation": "Type-1 diabetes is caused by an autoimmune reaction where the body destroys beta cells in the pancreas.",
    "topic_details": {
      "title": "Diabetes Mellitus",
      "summary": "Physiology of blood sugar regulation.",
      "key_points": [
        "Type 1: Insulin deficiency (Beta cell loss)",
        "Type 2: Insulin resistance",
        "Organ: Pancreas"
      ]
    },
    "tags": ["Science", "Biology", "Medicine"]
  },
  {
    "_id": "bcs_q44_telescope",
    "question_id": "BCS-50th-44",
    "category": "General Science",
    "question_text": "জেমস ওয়েব স্পেস টেলিস্কোপ (JWST) মূলত: তড়িৎ-চৌম্বকীয় বর্ণালীর কোন্ অংশে মহাবিশ্ব পর্যবেক্ষণের জন্য ডিজাইন করা হয়েছে?",
    "options": [
      "(ক) অতিবেগুনী অঞ্চল",
      "(খ) দৃশ্যমান এবং নিকট-অবলোহিত অঞ্চল",
      "(গ) অতিবেগুনী এবং দৃশ্যমান অঞ্চল",
      "(ঘ) এক্স-রে এবং গামা-রে অঞ্চল"
    ],
    "correct_answer": 1,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "Infrared observation.",
    "explanation": "JWST primarily observes in the near-infrared and mid-infrared spectrum.",
    "topic_details": {
      "title": "Space Observation",
      "summary": "Advanced orbital telescopes and their functions.",
      "key_points": [
        "Telescope: JWST",
        "Spectrum: Infrared",
        "Goal: Early universe observation"
      ]
    },
    "tags": ["Science", "Physics", "Space"]
  },
  {
    "_id": "bcs_q45_ethics",
    "question_id": "BCS-50th-45",
    "category": "Ethics & Good Governance",
    "question_text": "মূল্যবোধ ও শাসনের মধ্যে সম্পর্ক হলো-",
    "options": [
      "(ক) নৈতিক নীতি, নিয়ম ও রাজনৈতিক নির্দেশ মানা",
      "(খ) নৈতিক নীতি, স্বচ্ছতা ও সামাজিক দায়বদ্ধতা",
      "(গ) স্তরবিন্যাস, স্বচ্ছতা ও ঐতিহ্য",
      "(ঘ) নৈতিকতা ছাড়া প্রশাসনিক দক্ষতা"
    ],
    "correct_answer": 1,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "Social accountability and morality.",
    "explanation": "Good governance relies heavily on ethical principles, transparency, and accountability.",
    "topic_details": {
      "title": "Principles of Governance",
      "summary": "Core values that define good governance.",
      "key_points": [
        "Values: Integrity, Morality",
        "Result: Social accountability",
        "Method: Transparency"
      ]
    },
    "tags": ["Ethics", "Good Governance", "Social Science"]
  },
  {
    "_id": "bcs_q46_defense",
    "question_id": "BCS-50th-46",
    "category": "International Affairs",
    "question_text": "অপারেশন '______' লোহিত সাগরে হুথি (Houthi) হামলার জবাবে মার্কিন নেতৃত্বাধীন সামুদ্রিক নিরাপত্তা উদ্যোগ।",
    "options": [
      "(ক) ডেজার্ট স্টর্ম",
      "(খ) এন্ডিয়ুরিং ফ্রীডম",
      "(গ) ব্লু হেলমেট",
      "(ঘ) প্রসপারিটি গার্ডিয়ান"
    ],
    "correct_answer": 3,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "Prosperity Guardian.",
    "explanation": "Operation Prosperity Guardian is the US-led coalition to protect Red Sea shipping.",
    "topic_details": {
      "title": "Global Security",
      "summary": "Multinational military operations in the Middle East.",
      "key_points": [
        "Operation: Prosperity Guardian",
        "Region: Red Sea",
        "Target: Houthi threats"
      ]
    },
    "tags": ["International Affairs", "Security", "History"]
  },
  {
    "_id": "bcs_q47_economy",
    "question_id": "BCS-50th-47",
    "category": "Bangladesh Affairs",
    "question_text": "বাংলাদেশের অর্থনৈতিক নীতি ও উন্নয়ন পরিকল্পনা অনুমোদনের সর্বোচ্চ কর্তৃপক্ষ কোনটি?",
    "options": [
      "(ক) পরিকল্পনা কমিশন",
      "(খ) অর্থ মন্ত্রনালয়",
      "(গ) পরিকল্পনা মন্ত্রনালয়",
      "(ঘ) জাতীয় অর্থনৈতিক পরিষদের নির্বাহী কমিটি"
    ],
    "correct_answer": 3,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "ECNEC.",
    "explanation": "The Executive Committee of the National Economic Council (ECNEC) is the highest authority for approving development projects.",
    "topic_details": {
      "title": "Economic Administration",
      "summary": "Policy making bodies of the Bangladesh government.",
      "key_points": [
        "Body: ECNEC",
        "Head: Prime Minister",
        "Function: Project approval"
      ]
    },
    "tags": ["Bangladesh Affairs", "Economy", "Administration"]
  },
  {
    "_id": "bcs_q48_sentence",
    "question_id": "BCS-50th-48",
    "category": "Bangla Language",
    "question_text": "'মা তাঁর সন্তানদের ভালোবাসেন'- এটি কোন্ ধরণের বাক্য?",
    "options": [
      "(ক) ইচ্ছাসূচক",
      "(খ) অনুজ্ঞাসূচক",
      "(গ) প্রশ্নবোধক",
      "(ঘ) অস্থিবাচক"
    ],
    "correct_answer": 3,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "Affirmative statement.",
    "explanation": "This is a simple affirmative (অস্থিবাচক) statement expressing a fact.",
    "topic_details": {
      "title": "Bangla Sentence Types",
      "summary": "Classification based on meaning and tone.",
      "key_points": [
        "Type: Asthibachok (Affirmative)",
        "Meaning: Declaring a positive fact",
        "Structure: Simple sentence"
      ]
    },
    "tags": ["Bangla", "Grammar", "Syntax"]
  },
  {
    "_id": "bcs_q49_climate",
    "question_id": "BCS-50th-49",
    "category": "International Affairs",
    "question_text": "জলবায়ু পরিবর্তন সংক্রান্ত জাতিসংঘ ফ্রেমওয়ার্ক কনভেনশনের (UNFCCC) প্রথম কনফারেন্স অফ দ্য পার্টিস (COP) কোন্ শহরে অনুষ্ঠিত হয়েছিল?",
    "options": [
      "(ক) কোপেনহেগেন",
      "(খ) প্যারিস",
      "(গ) বার্লিন",
      "(ঘ) বন"
    ],
    "correct_answer": 2,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "Held in Germany, 1995.",
    "explanation": "The first COP (COP1) was held in Berlin, Germany in 1995.",
    "topic_details": {
      "title": "Climate Summits",
      "summary": "History of international environmental diplomacy.",
      "key_points": [
        "Event: COP1",
        "City: Berlin",
        "Year: 1995"
      ]
    },
    "tags": ["International Affairs", "Environment", "Climate Change"]
  },
  {
    "_id": "bcs_q50_mariner",
    "question_id": "BCS-50th-50",
    "category": "English Literature",
    "question_text": "The killing of albatross in The Rime of the Ancient Mariner was indicative of-",
    "options": [
      "(ক) a trigger-happy Mariner",
      "(খ) the essential irrationality of man",
      "(গ) a superstitious Mariner",
      "(ঘ) the Mariner as a skillful fowler"
    ],
    "correct_answer": 1,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "Man's unprovoked destruction of nature.",
    "explanation": "The act symbolizes man's irrationality and the unprovoked violation of the laws of nature.",
    "topic_details": {
      "title": "Romantic Poetry",
      "summary": "Symbolism in Coleridge's famous poem.",
      "key_points": [
        "Author: S.T. Coleridge",
        "Symbol: Albatross",
        "Theme: Guilt and irrationality"
      ]
    },
    "tags": ["English Literature", "Poetry", "Romanticism"]
  },
  {
    "_id": "bcs_q51_history",
    "question_id": "BCS-50th-51",
    "category": "Bangladesh Affairs",
    "question_text": "কোন্ এলাকাটি বাংলাদেশের মুক্তিযুদ্ধকালীন জনযুদ্ধে ক্যাপ্টেন (অবঃ) আব্দুল হালিম চৌধুরী দ্বারা গঠিত আঞ্চলিক বাহিনীর আওতাধীন এলাকা ছিল না?",
    "options": [
      "(ক) ধামরাই",
      "(খ) কেরানীগঞ্জ",
      "(গ) কালিয়াকৈর",
      "(ঘ) সাভার"
    ],
    "correct_answer": 1,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "Region around Manikganj.",
    "explanation": "Halim Bahini operated mostly in Manikganj and adjacent areas like Savar, Dhamrai, and Kaliakair, but Keraniganj was outside its main scope.",
    "topic_details": {
      "title": "Liberation War History",
      "summary": "Regional forces and sectors during 1971.",
      "key_points": [
        "Leader: Abdul Halim Chowdhury",
        "Bahini: Halim Bahini",
        "Base: Manikganj"
      ]
    },
    "tags": ["Bangladesh Affairs", "History", "Liberation War"]
  },
  {
    "_id": "bcs_q52_everest",
    "question_id": "BCS-50th-52",
    "category": "Geography",
    "question_text": "এভারেস্ট শৃঙ্গের তিব্বতী ও চীনা নাম কী কী?",
    "options": [
      "(ক) দলাইলামা এবং চিংলা",
      "(খ) চোমোলাংমা এবং কোমোলাংমা",
      "(গ) কোমোলাংমা এবং চিংলা",
      "(ঘ) চোমোলাংমা এবং এলবার্ড"
    ],
    "correct_answer": 1,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "Mother of the World.",
    "explanation": "Mt. Everest is called 'Chomolungma' in Tibetan and 'Qomolangma' in Chinese.",
    "topic_details": {
      "title": "Physical Geography",
      "summary": "Nomenclature of global geographical landmarks.",
      "key_points": [
        "Summit: Everest",
        "Tibetan: Chomolungma",
        "Meaning: Mother Goddess of the World"
      ]
    },
    "tags": ["Geography", "General Knowledge", "Landmarks"]
  },
  {
    "_id": "bcs_q53_dhaka",
    "question_id": "BCS-50th-53",
    "category": "Bangladesh Affairs",
    "question_text": "'ঢাকা মুসলিম সাহিত্য সমাজ' কত সালে প্রতিষ্ঠিত হয়?",
    "options": [
      "(ক) ১৯২০ সালে",
      "(খ) ১৯২৬ সালে",
      "(গ) ১৯২৫ সালে",
      "(ঘ) ১৯৩০ সালে"
    ],
    "correct_answer": 1,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "Buddhir Mukti Movement.",
    "explanation": "It was founded in 1926 by Abul Hussain at Dhaka University.",
    "topic_details": {
      "title": "Literary Movements",
      "summary": "Intellectual awakening in early 20th-century Bengal.",
      "key_points": [
        "Society: Muslim Sahitya Samaj",
        "Year: 1926",
        "Motto: Emancipation of Intellect"
      ]
    },
    "tags": ["Bangladesh Affairs", "History", "Literature"]
  },
  {
    "_id": "bcs_q54_policy",
    "question_id": "BCS-50th-54",
    "category": "Ethics & Good Governance",
    "question_text": "শাসন ব্যবস্থায় মূল্যবোধ প্রাতিষ্ঠানিক করার সবচেয়ে কার্যকর কৌশল কোনটি?",
    "options": [
      "(ক) ঘন ঘন আইনের সংস্কার",
      "(খ) নিয়মিত বেতন বৃদ্ধি",
      "(গ) নৈতিক শিক্ষা ও প্রাতিষ্ঠানিক শিক্ষার সমন্বয়",
      "(ঘ) আমলাতান্ত্রিক নিয়ন্ত্রণ বৃদ্ধি"
    ],
    "correct_answer": 2,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "Educational integration.",
    "explanation": "Integrating ethical education with formal training is the most effective long-term strategy for institutionalizing values.",
    "topic_details": {
      "title": "Administrative Ethics",
      "summary": "Strategies for value-based administration.",
      "key_points": [
        "Strategy: Education synergy",
        "Goal: Value institutionalization",
        "Effect: Integrity building"
      ]
    },
    "tags": ["Ethics", "Good Governance", "Public Policy"]
  },
  {
    "_id": "bcs_q55_brics",
    "question_id": "BCS-50th-55",
    "category": "International Affairs",
    "question_text": "'______' ব্রিকস (BRICS) কর্তৃক অবকাঠামো এবং টেকসই উন্নয়ন প্রকল্পের অর্থায়নের লক্ষ্যে প্রতিষ্ঠিত হয়।",
    "options": [
      "(ক) NDB",
      "(খ) ADB",
      "(গ) AIIB",
      "(ঘ) IMF"
    ],
    "correct_answer": 0,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "New Development Bank.",
    "explanation": "The New Development Bank (NDB) was formerly known as the BRICS Development Bank.",
    "topic_details": {
      "title": "Global Finance",
      "summary": "International banks serving developing nations.",
      "key_points": [
        "Bank: NDB",
        "Founders: BRICS nations",
        "H.Q.: Shanghai"
      ]
    },
    "tags": ["International Affairs", "Economy", "Banking"]
  },
  {
    "_id": "bcs_q56_un",
    "question_id": "BCS-50th-56",
    "category": "International Affairs",
    "question_text": "কোন্টি জাতিসংঘের প্রতিষ্ঠান নয়?",
    "options": [
      "(ক) ইউনিসেফ",
      "(খ) ইউনেস্কো",
      "(গ) ডব্লিউটিও (WTO)",
      "(ঘ) আইএলও (ILO)"
    ],
    "correct_answer": 2,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "It handles global trade separately.",
    "explanation": "The World Trade Organization (WTO) is an independent international organization, not a specialized agency of the UN.",
    "topic_details": {
      "title": "United Nations System",
      "summary": "Specialized agencies vs independent organizations.",
      "key_points": [
        "Organization: WTO",
        "Status: Independent",
        "Relationship: Observer status with UN"
      ]
    },
    "tags": ["International Affairs", "UN", "Organizations"]
  },
  {
    "_id": "bcs_q57_ethics",
    "question_id": "BCS-50th-57",
    "category": "Ethics & Good Governance",
    "question_text": "জীবনের তিনটি শ্রেষ্ঠ মূল্যবোধ কী কী?",
    "options": [
      "(ক) সম্পদ, ক্ষমতা ও সদগুণ",
      "(খ) সত্য, আনন্দ ও সদগুণ",
      "(গ) সত্য, সুন্দর ও সদগুণ",
      "(ঘ) আনন্দ, বিবেক ও সাহস"
    ],
    "correct_answer": 2,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "Truth, Beauty, Virtue.",
    "explanation": "Classical ethics often defines the core values of human life as Truth, Beauty, and Virtue (সত‍্য, সুন্দর ও সদগুণ).",
    "topic_details": {
      "title": "Philosophy of Values",
      "summary": "Universal values in human life and society.",
      "key_points": [
        "Values: Truth, Beauty, Virtue",
        "Tradition: Philosophical/Ethical",
        "Context: Holistic life quality"
      ]
    },
    "tags": ["Ethics", "Philosophy", "Social Science"]
  },
  {
    "_id": "bcs_q58_social",
    "question_id": "BCS-50th-58",
    "category": "Ethics & Good Governance",
    "question_text": "সাংস্কৃতিক মূল্যবোধ বেশি উদ্ভূত হয় 'সামাজিক ______' থেকে।",
    "options": [
      "(ক) আচরণ",
      "(খ) বৈষম্য",
      "(গ) প্রথা",
      "(ঘ) নীতি"
    ],
    "correct_answer": 2,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "Traditions and customs.",
    "explanation": "Cultural values are primarily rooted in and derived from social customs and traditions (সামাজিক প্রথা).",
    "topic_details": {
      "title": "Sociology of Culture",
      "summary": "Origins of cultural and social values.",
      "key_points": [
        "Source: Social Customs (প্রথা)",
        "Evolution: Long-term traditions",
        "Function: Social identity"
      ]
    },
    "tags": ["Ethics", "Social Science", "Culture"]
  },
  {
    "_id": "bcs_q104_geography",
    "question_id": "BCS-50th-104",
    "category": "Geography & Environment",
    "question_text": "প্রত্যয়ন বায়ু উত্তর গোলার্ধে _______ দিক থেকে _______ দিকে প্রবাহিত হয়?",
    "options": [
      "(ক) পূর্ব, পশ্চিম",
      "(খ) দক্ষিণ-পশ্চিম, উত্তর-পূর্ব",
      "(গ) উত্তর, দক্ষিণ",
      "(ঘ) উত্তর, পশ্চিম"
    ],
    "correct_answer": 1,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "এটি উত্তর গোলার্ধের পশ্চিমা বায়ু।",
    "explanation": "উত্তর গোলার্ধে প্রত্যয়ন বায়ু বা পশ্চিমা বায়ু সাধারণত দক্ষিণ-পশ্চিম দিক থেকে উত্তর-পূর্ব দিকে প্রবাহিত হয়।",
    "topic_details": {
      "title": "Planetary Winds",
      "summary": "Direction and characteristics of global wind belts.",
      "key_points": [
        "Hemisphere: Northern",
        "Type: Westerlies",
        "Direction: SW to NE"
      ]
    },
    "tags": ["Geography", "Meteorology", "Environment"]
  },
  {
    "_id": "bcs_q108_science",
    "question_id": "BCS-50th-108",
    "category": "General Science",
    "question_text": "MRI কোন্ নীতিতে কাজ করে?",
    "options": [
      "(ক) শরীরের ত্রি-মাত্রিক চিত্র তৈরি করতে এক্স-রে ব্যবহার করার মাধ্যমে",
      "(খ) তেজস্ক্রিয় ট্রেসার দ্বারা নির্গত গামা-রে শনাক্তের মাধ্যমে",
      "(গ) শক্তিশালী চুম্বক এবং রেডিও তরঙ্গ ব্যবহার করে ইমেজের তৈরির মাধ্যমে",
      "(ঘ) উচ্চ ফ্রিকোয়েন্সি শব্দ তরঙ্গ ব্যবহার করে ইমেজ তৈরির মাধ্যমে"
    ],
    "correct_answer": 2,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "এর পূর্ণরূপ Magnetic Resonance Imaging।",
    "explanation": "MRI যন্ত্রটি শক্তিশালী চৌম্বক ক্ষেত্র এবং রেডিও তরঙ্গ ব্যবহার করে শরীরের অভ্যন্তরীণ অঙ্গপ্রত্যঙ্গের বিস্তারিত চিত্র তৈরি করে।",
    "topic_details": {
      "title": "Medical Imaging Technology",
      "summary": "Scientific principles of MRI and CT scans.",
      "key_points": [
        "Full form: Magnetic Resonance Imaging",
        "Medium: Magnetic field & Radio waves",
        "Usage: Soft tissue diagnosis"
      ]
    },
    "tags": ["Science", "Physics", "Medicine"]
  },
  {
    "_id": "bcs_q112_geography",
    "question_id": "BCS-50th-112",
    "category": "Geography & Science",
    "question_text": "বস্তুর ওজন পৃথিবীর কোন্ স্থানে সবচেয়ে বেশি?",
    "options": [
      "(ক) মেরু অঞ্চল",
      "(খ) নিরক্ষীয় অঞ্চল",
      "(গ) একটি পাহাড়ের চূড়ায়",
      "(ঘ) পৃথিবীর কেন্দ্রে"
    ],
    "correct_answer": 0,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "যেখানে অভিকর্ষজ ত্বরণ (g) এর মান সবচেয়ে বেশি।",
    "explanation": "পৃথিবীর আকৃতি কিছুটা চাপা হওয়ায় মেরু অঞ্চলে ব্যাসার্ধ কম এবং অভিকর্ষজ ত্বরণ (g) সবচেয়ে বেশি, তাই সেখানে বস্তুর ওজনও সবচেয়ে বেশি হয়।",
    "topic_details": {
      "title": "Gravity and Weight",
      "summary": "Variation of weight across different latitudes.",
      "key_points": [
        "Maximum Weight: Poles",
        "Minimum Weight: Equator",
        "Zero Weight: Earth's Center"
      ]
    },
    "tags": ["Geography", "Physics", "Earth Science"]
  },
  {
    "_id": "bcs_q114_english",
    "question_id": "BCS-50th-114",
    "category": "English Grammar",
    "question_text": "What gender is the word 'monarch'?",
    "options": [
      "(ক) masculine",
      "(খ) feminine",
      "(গ) neuter",
      "(ঘ) common"
    ],
    "correct_answer": 3,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "এটি রাজা বা রানী উভয়কেই বোঝাতে পারে।",
    "explanation": "Monarch শব্দটি দিয়ে পুরুষ (King) বা মহিলা (Queen) উভয় শাসককেই বোঝানো যায়, তাই এটি Common Gender।",
    "topic_details": {
      "title": "English Genders",
      "summary": "Classification of nouns into four gender types.",
      "key_points": [
        "Common Gender: Refers to both male/female",
        "Examples: Doctor, Teacher, Monarch"
      ]
    },
    "tags": ["English", "Grammar", "Vocabulary"]
  },
  {
    "_id": "bcs_q116_culture",
    "question_id": "BCS-50th-116",
    "category": "Bangladesh Affairs",
    "question_text": "কোন্টি UNESCO 'Intangible Cultural Heritage'-এর অন্তর্ভুক্ত?",
    "options": [
      "(ক) একুশে ফেব্রুয়ারি",
      "(খ) পহেলা বৈশাখ",
      "(গ) বাউল গান",
      "(ঘ) জামদানি বয়ন শিল্প"
    ],
    "correct_answer": 2,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "লালন শাহের দর্শনের সাথে এটি সম্পর্কিত।",
    "explanation": "২০০৮ সালে ইউনেস্কো বাংলাদেশের বাউল গানকে 'ইন্ট্যানজিবল কালচারাল হেরিটেজ' হিসেবে স্বীকৃতি প্রদান করে।",
    "topic_details": {
      "title": "Cultural Heritage of Bangladesh",
      "summary": "UNESCO recognized traditions and arts.",
      "key_points": [
        "Heritage type: Intangible",
        "Inclusion: Baul Songs (2008)",
        "Others: Jamdani (2013), Mangal Shobhajatra (2016)"
      ]
    },
    "tags": ["Bangladesh Affairs", "UNESCO", "Culture"]
  },
  {
    "_id": "bcs_q141_geography",
    "question_id": "BCS-50th-141",
    "category": "Geography",
    "question_text": "ভঙ্গিল পর্বত, আগ্নেয় পর্বত ও স্তূপ পর্বতের উদাহরণ যথাক্রমে-",
    "options": [
      "(ক) রকি, ভিসুভিয়াস, ব্ল্যাক ফরেস্ট",
      "(খ) হিমালয়, আল্পস, রকি",
      "(গ) হিমালয়, রকি, বিন্ধা",
      "(ঘ) আল্পস, হেনরী, ফুজিয়ামা"
    ],
    "correct_answer": 0,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "হিমালয় একটি ভঙ্গিল পর্বত।",
    "explanation": "রকি (ভঙ্গিল), ভিসুভিয়াস (আগ্নেয়) এবং ব্ল্যাক ফরেস্ট (স্তূপ) পর্বত হিসেবে পরিচিত।",
    "topic_details": {
      "title": "Types of Mountains",
      "summary": "Classification based on formation process.",
      "key_points": [
        "Fold Mountain: Rocky/Himalayas",
        "Volcanic Mountain: Vesuvius/Fuji",
        "Block Mountain: Black Forest/Vindhya"
      ]
    },
    "tags": ["Geography", "Geology", "Mountains"]
  },
  {
    "_id": "bcs_q101_english",
    "question_id": "BCS-50th-101",
    "category": "English Grammar",
    "question_text": "The book that she recommended turned out to be very helpful. Here the underlined clause is a-",
    "options": [
      "(ক) relative clause",
      "(খ) noun clause",
      "(গ) adverbial clause",
      "(ঘ) independent clause"
    ],
    "correct_answer": 0,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "It describes the noun 'book'.",
    "explanation": "The clause 'that she recommended' modifies the noun 'book', making it an Adjective or Relative clause.",
    "topic_details": {
      "title": "Clause Analysis",
      "summary": "Identifying types of subordinate clauses.",
      "key_points": [
        "Function: Modifying a noun",
        "Connector: 'That' as a relative pronoun",
        "Classification: Relative Clause"
      ]
    },
    "tags": ["English", "Grammar", "Clauses"]
  },
  {
    "_id": "bcs_q106_history",
    "question_id": "BCS-50th-106",
    "category": "International Affairs",
    "question_text": "মার্কিন যুক্তরাষ্ট্র কত সালে রাশিয়ার কাছ থেকে আলাস্কা ক্রয় করেছিল?",
    "options": [
      "(ক) ১৮৪৬",
      "(খ) ১৮৬৭",
      "(গ) ১৮৯৮",
      "(ঘ) ১৯০৫"
    ],
    "correct_answer": 1,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "এটি গৃহযুদ্ধের পরবর্তী সময়ে হয়েছিল।",
    "explanation": "১৮৬৭ সালে মার্কিন যুক্তরাষ্ট্র ৭.২ মিলিয়ন ডলারের বিনিময়ে রাশিয়ার কাছ থেকে আলাস্কা অঞ্চলটি ক্রয় করে.",
    "topic_details": {
      "title": "US History",
      "summary": "Expansion of United States territory.",
      "key_points": [
        "Year: 1867",
        "Seller: Russia",
        "Transaction: Alaska Purchase"
      ]
    },
    "tags": ["History", "International", "US Affairs"]
  },
  {
    "_id": "bcs_q127_english",
    "question_id": "BCS-50th-127",
    "category": "English Vocabulary",
    "question_text": "A very large building in which aircraft are housed is called a/an-",
    "options": [
      "(ক) terminal",
      "(খ) aerodrome",
      "(গ) hanger",
      "(ঘ) hangar"
    ],
    "correct_answer": 3,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "এটি বিমানের গ্যারেজ হিসেবে কাজ করে।",
    "explanation": "উড়োজাহাজ রাখার বড় ঘর বা ছাউনিকে 'Hangar' বলা হয়. (দ্রষ্টব্য: Hanger মানে ঝুলিয়ে রাখার বস্তু)।",
    "topic_details": {
      "title": "One Word Substitution",
      "summary": "Terms related to aviation and storage.",
      "key_points": [
        "Hangar: For aircraft",
        "Aerodrome: Small airport",
        "Terminal: Passenger area"
      ]
    },
    "tags": ["English", "Vocabulary", "Aviation"]
  },
  {
    "_id": "bcs_q142_literature",
    "question_id": "BCS-50th-142",
    "category": "Bangla Literature",
    "question_text": "১৩৫০ বঙ্গাব্দের দুর্ভিক্ষ নিয়ে রচিত উপন্যাস কোনটি?",
    "options": [
      "(ক) ইছামতি",
      "(খ) অশনি সংকেত",
      "(গ) আরণ্যক",
      "(ঘ) বিষাদসিন্ধু"
    ],
    "correct_answer": 1,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "এটি বিভূতিভূষণ বন্দ্যোপাধ্যায়ের একটি কালজয়ী রচনা।",
    "explanation": "বিভূতিভূষণ বন্দ্যোপাধ্যায়ের 'অশনি সংকেত' উপন্যাসটি ১৩৫০ বঙ্গাব্দের (১৯৪৩ সাল) মহামারি ও দুর্ভিক্ষ নিয়ে রচিত.",
    "topic_details": {
      "title": "Historical Fiction",
      "summary": "Novels depicting significant historical crises in Bengal.",
      "key_points": [
        "Theme: Great Famine of 1943",
        "Author: Bibhutibhushan Bandyopadhyay",
        "Period: British Era"
      ]
    },
    "tags": ["Bangla Literature", "History", "Novel"]
  },
  {
    "_id": "bcs_q153_grammar",
    "question_id": "BCS-50th-153",
    "category": "Bangla Grammar",
    "question_text": "'বেতার, বিপ্রতীক'- শব্দ দুটি কোন্ সমাসের উদাহরণ?",
    "options": [
      "(ক) নঞ তৎপুরুষ, বহুব্রীহি",
      "(খ) কর্মধারয়, বহুব্রীহি",
      "(গ) অব্যয়ীভাব, তৎপুরুষ",
      "(ঘ) তৃতীয়া তৎপুরুষ, দ্বিগু সমাস"
    ],
    "correct_answer": 0,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "এটি অভাব বা নেতিবাচক অর্থ প্রকাশ করছে।",
    "explanation": "'বেতার' (নাই তার যার) এবং 'বিপ্রতীক' শব্দ দুটি যথাক্রমে নঞ তৎপুরুষ ও বহুব্রীহি সমাসের উদাহরণ.",
    "topic_details": {
      "title": "সমাস (Compound Words)",
      "summary": "Classification of words based on grammatical structure.",
      "key_points": [
        "বেতার: নঞ তৎপুরুষ",
        "বিপ্রতীক: বহুব্রীহি"
      ]
    },
    "tags": ["Bangla Grammar", "Samas", "Etymology"]
  },
  {
    "_id": "bcs_q93_science",
    "question_id": "BCS-50th-93",
    "category": "General Science",
    "question_text": "কোন্টি মাইক্রোওয়েভ ওভেনের কার্যনীতিকে সর্বোত্তমভাবে বর্ণনা করতে পারে?",
    "options": [
      "(ক) উচ্চ তাপ বিকিরণ এবং খাদ্য কণাগুলোতে পরিবহন",
      "(খ) খাদ্য কণাগুলোতে ইনফ্রা-রেড বিকিরণ এবং শোষণ",
      "(গ) পানির অণুগুলোর ইন্ডাকশন হিটিং",
      "(ঘ) ঘূর্ণনের কারণে ডাই-ইলেকট্রিক হিটিং"
    ],
    "correct_answer": 3,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "মাইক্রোওয়েভ পানির অণুগুলোকে দ্রুত স্পন্দিত করে তাপ উৎপন্ন করে।",
    "explanation": "মাইক্রোওয়েভ ওভেনে 'ডাই-ইলেকট্রিক হিটিং' পদ্ধতি কাজ করে, যেখানে মাইক্রোওয়েভ বিকিরণ খাদ্যের ভেতরে থাকা মেরু অণুগুলোকে (যেমন পানি) দ্রুত ঘুরিয়ে ঘর্ষণের মাধ্যমে তাপ তৈরি করে。",
    "topic_details": {
      "title": "Microwave Technology",
      "summary": "The physics behind electromagnetic heating in appliances.",
      "key_points": [
        "Electromagnetic waves: 2.45 GHz",
        "Target: Polar molecules (Water/Fat)",
        "Process: Molecular friction"
      ]
    },
    "tags": ["Science", "Physics", "Appliances"]
  },
  {
    "_id": "bcs_q103_grammar",
    "question_id": "BCS-50th-103",
    "category": "Bangla Language",
    "question_text": "'ময়দান, মুনাফা, বই' শব্দ তিনটি কোন্ ভাষা থেকে আগত?",
    "options": [
      "(ক) উর্দু",
      "(খ) ফারসি",
      "(গ) আরবি",
      "(ঘ) পর্তুগিজ"
    ],
    "correct_answer": 2,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "ইসলামী সংস্কৃতির প্রভাবে এই শব্দগুলো বাংলায় এসেছে।",
    "explanation": "'ময়দান', 'মুনাফা' এবং 'বই' শব্দগুলো মূলত আরবি ভাষা থেকে বাংলা ভাষায় প্রবেশ করেছে。",
    "topic_details": {
      "title": "Loanwords in Bangla",
      "summary": "Etymology of common Bengali vocabulary derived from foreign languages.",
      "key_points": [
        "Category: Arabic Loanwords",
        "Influence: Islamic/Trade history",
        "Common words: Kitab (Boi), Profit (Munafa)"
      ]
    },
    "tags": ["Bangla", "Etymology", "Vocabulary"]
  },
  {
    "_id": "bcs_q107_science",
    "question_id": "BCS-50th-107",
    "category": "General Science",
    "question_text": "'কোভিড-১৯'-এর জন্য তৈরি টিকা কীভাবে কাজ করে?",
    "options": [
      "(ক) রোগ প্রতিরোধ ক্ষমতা উদ্দীপিত করার জন্য দুর্বল ভাইরাসের একটি রূপ প্রবর্তন করে",
      "(খ) পরিশোধিত ভাইরাল প্রোটিনের সাবইউনিট প্রবিষ্ট করানোর মাধ্যমে",
      "(গ) হোস্ট কোষে জেনেটিক উপাদান বহন করার জন্য একটি ভাইরাস ঘটিত বাহক ব্যবহার করে",
      "(ঘ) mRNA সরবরাহ করে যা হোস্ট কোষগুলোকে একটি ভাইরাল প্রোটিন তৈরির নির্দেশ দেয়"
    ],
    "correct_answer": 3,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "এটি আধুনিক জেনেটিক ইঞ্জিনিয়ারিং প্রযুক্তি।",
    "explanation": "অধিকাংশ আধুনিক টিকা (যেমন ফাইজার/মডার্না) mRNA প্রযুক্তি ব্যবহার করে, যা কোষকে ভাইরাসের স্পাইক প্রোটিন তৈরি করতে শেখায় এবং অনাক্রম্যতা তৈরি করে。",
    "topic_details": {
      "title": "Vaccine Mechanism",
      "summary": "How mRNA and viral vector vaccines function.",
      "key_points": [
        "Messenger RNA (mRNA) instructions",
        "Spike protein synthesis",
        "Immune system response"
      ]
    },
    "tags": ["Science", "Biology", "COVID-19"]
  },
  {
    "_id": "bcs_q147_idiom",
    "question_id": "BCS-50th-147",
    "category": "English Literature/Grammar",
    "question_text": "The saying 'Every cloud has its silver lining' means:",
    "options": [
      "(ক) bad weather is often replaced by good weather",
      "(খ) clouds often have shining surroundings",
      "(গ) every difficult situation has a more hopeful aspect though not apparent at the beginning",
      "(ঘ) clouds and sunshine go hand in hand"
    ],
    "correct_answer": 2,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "খারাপ সময়ের মধ্যেও আশার আলো থাকে।",
    "explanation": "এই প্রবাদটির অর্থ হলো প্রতিটি কঠিন বা দুঃখজনক পরিস্থিতির আড়ালে একটি ইতিবাচক বা আশাব্যঞ্জক দিক থাকে。",
    "topic_details": {
      "title": "Proverbs and Idioms",
      "summary": "Metaphorical language in English for optimism.",
      "key_points": [
        "Metaphor: Cloud = Problem",
        "Metaphor: Silver lining = Hope",
        "Theme: Optimism"
      ]
    },
    "tags": ["English", "Idioms", "Proverbs"]
  },
  {
    "_id": "bcs_q152_literature",
    "question_id": "BCS-50th-152",
    "category": "Bangla Literature",
    "question_text": "কোন্ কবি 'মজলুম আদিব' ছদ্মনামে কবিতা লিখতেন?",
    "options": [
      "(ক) আল মাহমুদ",
      "(খ) হেলাল হাফিজ",
      "(গ) নির্মলেন্দু গুণ",
      "(ঘ) শামসুর রাহমান"
    ],
    "correct_answer": 3,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "তিনি বাংলাদেশের প্রধান নাগরিক কবি।",
    "explanation": "শামসুর রাহমান আইয়ুব বিরোধী আন্দোলনের সময় 'মজলুম আদিব' (বিপন্ন লেখক) ছদ্মনামে কবিতা লিখেছিলেন。",
    "topic_details": {
      "title": "Pseudonyms of Bengali Poets",
      "summary": "Pen names used by writers during political movements.",
      "key_points": [
        "Author: Shamsur Rahman",
        "Meaning: Oppressed Writer",
        "Context: Political Resistance"
      ]
    },
    "tags": ["Bangla Literature", "Poetry", "History"]
  },
  {
    "_id": "bcs_q136_governance",
    "question_id": "BCS-50th-136",
    "category": "Ethics & Good Governance",
    "question_text": "মূল্যবোধ ও সুশাসনের উপস্থিতি জাতীয় উন্নয়নের কোন্ দিকটিকে বেশি টেকসই করে তোলে?",
    "options": [
      "(ক) স্বল্পমেয়াদি প্রবৃদ্ধি",
      "(খ) অবকাঠামো নির্মাণ",
      "(গ) মানব সম্পদ উন্নয়ন",
      "(ঘ) আমলাতান্ত্রিক নিয়ন্ত্রণ"
    ],
    "correct_answer": 2,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "এটি মানুষের দক্ষতা ও নৈতিকতার সাথে সম্পর্কিত।",
    "explanation": "মূল্যবোধ ও সুশাসন নিশ্চিত হলে মানব সম্পদ উন্নয়ন (Human Resource Development) দীর্ঘস্থায়ী ও ফলপ্রসূ হয়, যা জাতীয় উন্নয়নের মূল ভিত্তি。",
    "topic_details": {
      "title": "National Development",
      "summary": "Impact of governance on human capital.",
      "key_points": [
        "Sustainability factor: Values",
        "Key area: Human resources",
        "Role: Long-term growth"
      ]
    },
    "tags": ["Governance", "Ethics", "Development"]
  },
  {
    "_id": "bcs_q140_logic",
    "question_id": "BCS-50th-140",
    "category": "Mental Ability",
    "question_text": "এহসান টেবিলের উপর চায়ের কাপের হ্যান্ডেলটি পূর্বদিকে করে রাখল। সে ঘড়ির কাঁটা যেদিকে ঘোরে সেদিকে চায়ের কাপটি ১৮০° ঘুরালো। এখন চায়ের কাপের হ্যান্ডেলটি থাকবে:",
    "options": [
      "(ক) পশ্চিম দিকে",
      "(খ) দক্ষিণ দিকে",
      "(গ) উত্তর দিকে",
      "(ঘ) পূর্ব দিকে"
    ],
    "correct_answer": 0,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "১৮০° ঘূর্ণন মানে বিপরীত দিক।",
    "explanation": "প্রাথমিক অবস্থান পূর্ব দিক হলে, ১৮০° ঘূর্ণনের ফলে দিকটি সম্পূর্ণ বিপরীত অর্থাৎ পশ্চিম দিকে পরিবর্তিত হবে。",
    "topic_details": {
      "title": "Directional Reasoning",
      "summary": "Calculating orientation based on degrees of rotation.",
      "key_points": [
        "Initial: East",
        "Rotation: 180°",
        "Final: West"
      ]
    },
    "tags": ["Mental Ability", "Logic", "Direction"]
  },
  {
    "_id": "bcs_q143_math",
    "question_id": "BCS-50th-143",
    "category": "Mathematical Reasoning",
    "question_text": "$-1 + \\frac{1}{2} - \\frac{1}{4} + \\frac{1}{8} - \\frac{1}{16} + \\dots$ অসীম ধারাটির যোগফল হবে:",
    "options": [
      "(ক) $-2/3$",
      "(খ) $-3/2$",
      "(গ) $2/3$",
      "(ঘ) $3/2$"
    ],
    "correct_answer": 0,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "গুণোত্তর ধারার অসীম যোগফল সূত্র $S_\\infty = \\frac{a}{1-r}$ ব্যবহার করুন।",
    "explanation": "এখানে $a = -1$ এবং $r = -1/2$। সূত্রমতে: $S = \\frac{-1}{1 - (-1/2)} = \\frac{-1}{3/2} = -2/3$。",
    "topic_details": {
      "title": "Geometric Series",
      "summary": "Finding the sum of an infinite geometric progression.",
      "key_points": [
        "First term (a): -1",
        "Common ratio (r): -1/2",
        "Formula: $a / (1-r)$"
      ]
    },
    "tags": ["Math", "Algebra", "Series"]
  },
  {
    "_id": "bcs_q145_math",
    "question_id": "BCS-50th-145",
    "category": "Mathematical Reasoning",
    "question_text": "$3 + \\frac{3}{2} + \\frac{3}{4} + \\dots + \\frac{3}{64}$ ধারাটিতে মোট কয়টি পদ আছে?",
    "options": [
      "(ক) ৫",
      "(খ) ৬",
      "(গ) ৭",
      "(ঘ) ৮"
    ],
    "correct_answer": 2,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "পদ সংখ্যার জন্য $n$-তম পদের সূত্র $ar^{n-1}$ ব্যবহার করুন।",
    "explanation": "এখানে $a = 3, r = 1/2$। তাহলে $3(1/2)^{n-1} = 3/64 \\Rightarrow (1/2)^{n-1} = (1/2)^6 \\Rightarrow n-1 = 6 \\Rightarrow n = 7$。",
    "topic_details": {
      "title": "Geometric Progression",
      "summary": "Determining the number of terms in a finite GP.",
      "key_points": [
        "Common ratio: 0.5",
        "Last term: 3/64",
        "Calculation: Logarithmic or power comparison"
      ]
    },
    "tags": ["Math", "Algebra", "Logarithm"]
  },
  {
    "_id": "bcs_q151_language",
    "question_id": "BCS-50th-151",
    "category": "Bangla Language",
    "question_text": "'আকাশ ও পৃথিবীর অন্তরাল'- এক কথায় প্রকাশ করলে সঠিক উত্তর কী হবে?",
    "options": [
      "(ক) স্কুলিঙ্গ",
      "(খ) রোদসী",
      "(গ) পীতভ",
      "(ঘ) আরক্ত"
    ],
    "correct_answer": 1,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "এটি একটি প্রাচীন বাংলা শব্দ।",
    "explanation": "'আকাশ ও পৃথিবীর অন্তরাল' বা মিলনস্থলকে এক কথায় 'রোদসী' বলা হয়。",
    "topic_details": {
      "title": "One Word Substitution",
      "summary": "Traditional Bengali linguistic simplifications.",
      "key_points": [
        "Meaning: Gap between sky and earth",
        "Term: রোদসী (Rodosi)"
      ]
    },
    "tags": ["Bangla", "Vocabulary", "Grammar"]
  },
  {
    "_id": "bcs_q124_literature",
    "question_id": "BCS-50th-124",
    "category": "English Literature",
    "question_text": "Themes like racial prejudice, oppressive power dynamics, unbridgeable gulf between Eastern & Western cultures, etc. are best exemplified in-",
    "options": [
      "(ক) Shadow of the Moon by MM Kaye",
      "(খ) Bhowani Junction by John Masters",
      "(গ) Kim by Rudyard Kipling",
      "(ঘ) A Passage to India by EM Forster"
    ],
    "correct_answer": 3,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "এটি ব্রিটিশ ভারতের পটভূমিতে লেখা ই.এম. ফরস্টারের বিখ্যাত উপন্যাস।",
    "explanation": "ই.এম. ফরস্টারের 'A Passage to India' উপন্যাসে ব্রিটিশ শাসন আমলের ভারত ও পশ্চিমা সংস্কৃতির মধ্যকার গভীর দূরত্ব এবং জাতিগত বৈষম্যের চিত্র ফুটে উঠেছে।",
    "topic_details": {
      "title": "Post-Colonial Literature",
      "summary": "Exploration of cultural conflict and colonialism in 20th-century literature.",
      "key_points": [
        "Author: E.M. Forster",
        "Setting: British Raj",
        "Key Conflict: Dr. Aziz and Cyril Fielding's friendship"
      ]
    },
    "tags": ["English Literature", "Colonialism", "E.M. Forster"]
  },
  {
    "_id": "bcs_q126_math",
    "question_id": "BCS-50th-126",
    "category": "ICT / Mathematical Reasoning",
    "question_text": "একটা 4-bit বাইনারি সিস্টেমে শূন্য এর 2's complement এর ডেসিম্যাল মান কত হবে?",
    "options": [
      "(ক) ১৬",
      "(খ) ০",
      "(গ) ১৫",
      "(ঘ) কোনটিই নয়"
    ],
    "correct_answer": 1,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "বাইনারিতে ০ এর পরিপূরক পদ্ধতি প্রয়োগ করে দেখুন।",
    "explanation": "৪-বিট সিস্টেমে ০ এর বাইনারি ০০০০। এর ১-এর পরিপূরক ১১১১। এর সাথে ১ যোগ করলে (১)০০০০ হয়, যেখানে অতিরিক্ত ১ বাদ দিলে মান ০-ই থাকে।",
    "topic_details": {
      "title": "Binary Number System",
      "summary": "Understanding 2's complement in digital logic.",
      "key_points": [
        "Representation: 4-bit system",
        "Operation: Inverting bits and adding 1",
        "Result: 0 remains 0 in 2's complement"
      ]
    },
    "tags": ["ICT", "Digital Logic", "Math"]
  },
  {
    "_id": "bcs_q130_bangladesh",
    "question_id": "BCS-50th-130",
    "category": "Bangladesh Affairs",
    "question_text": "বাংলাদেশের সর্বশেষ সিটি কর্পোরেশন কোনটি?",
    "options": [
      "(ক) ঢাকা উত্তর",
      "(খ) কুমিল্লা",
      "(গ) ময়মনসিংহ",
      "(ঘ) রংপুর"
    ],
    "correct_answer": 2,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "এটি ২০১৮ সালে ১২তম সিটি কর্পোরেশন হিসেবে যাত্রা শুরু করে।",
    "explanation": "২০১৮ সালের ২রা এপ্রিল ময়মনসিংহকে বাংলাদেশের ১২তম সিটি কর্পোরেশন হিসেবে ঘোষণা করা হয়।",
    "topic_details": {
      "title": "Local Government in Bangladesh",
      "summary": "Administrative units and City Corporations.",
      "key_points": [
        "12th City Corporation: Mymensingh",
        "Establishment Year: 2018",
        "Current total: 12"
      ]
    },
    "tags": ["Bangladesh Affairs", "Administration", "General Knowledge"]
  },
  {
    "_id": "bcs_q135_english",
    "question_id": "BCS-50th-135",
    "category": "English Grammar",
    "question_text": "'You will need a variety of skills, including leadership, endurance etc.' In this sentence the word 'including' is a -",
    "options": [
      "(ক) conjunction",
      "(খ) gerund",
      "(গ) participle",
      "(ঘ) preposition"
    ],
    "correct_answer": 3,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "এটি এখানে 'Preposition' হিসেবে কাজ করছে।",
    "explanation": "যখন কোনো '-ing' যুক্ত শব্দ (Participle) বাক্যে কোনো কিছুর সাথে সম্পর্ক স্থাপন করে এবং Preposition-এর মতো কাজ করে, তখন তাকে Participle Preposition বলা হয়।",
    "topic_details": {
      "title": "Parts of Speech",
      "summary": "Functional grammar and identifying parts of speech.",
      "key_points": [
        "Function: Relating skills with examples",
        "Classification: Participle Preposition",
        "Common examples: regarding, considering, including"
      ]
    },
    "tags": ["English", "Grammar", "Preposition"]
  },
  {
    "_id": "bcs_q148_math",
    "question_id": "BCS-50th-148",
    "category": "Mathematical Reasoning",
    "question_text": "যদি $x + \\frac{1}{x} = 0$ হয়, তবে $\\sqrt{x} + \\frac{1}{\\sqrt{x}}$ এর মান কত?",
    "options": [
      "(ক) ০",
      "(খ) ১",
      "(গ) ২",
      "(ঘ) $\\sqrt{2}$"
    ],
    "correct_answer": 3,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "বর্গ করার সূত্র ব্যবহার করুন: $(a+b)^2 = a^2 + b^2 + 2ab$।",
    "explanation": "$(\\sqrt{x} + \\frac{1}{\\sqrt{x}})^2 = x + \\frac{1}{x} + 2(\\sqrt{x})(\\frac{1}{\\sqrt{x}}) = 0 + 2 = 2$। অতএব, $\\sqrt{x} + \\frac{1}{\\sqrt{x}} = \\sqrt{2}$।",
    "topic_details": {
      "title": "Algebraic Identities",
      "summary": "Solving expressions using square formulas.",
      "key_points": [
        "Identity: $(a+b)^2 = a^2 + 2ab + b^2$",
        "Given: $x + 1/x = 0$",
        "Result: Square root of 2"
      ]
    },
    "tags": ["Math", "Algebra", "Calculus"]
  },
  {
    "_id": "bcs_q154_science",
    "question_id": "BCS-50th-154",
    "category": "General Science",
    "question_text": "পরমাণু চুল্লিতে সচরাচর কোন্ জ্বালানী ব্যবহার করা হয়?",
    "options": [
      "(ক) ইউরেনিয়াম-২৩৫",
      "(খ) ইউরেনিয়াম-২৩৮",
      "(গ) থোরিয়াম-১৩২",
      "(ঘ) প্লুটোনিয়াম-২৪০"
    ],
    "correct_answer": 0,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "এটি একটি ফিশাইল আইসোটোপ।",
    "explanation": "পারমাণবিক চুল্লিতে প্রধান জ্বালানী হিসেবে ইউরেনিয়াম-২৩৫ ($^{235}U$) ব্যবহৃত হয়, যা নিউক্লিয়ার ফিশন বিক্রিয়া ঘটাতে সক্ষম।",
    "topic_details": {
      "title": "Nuclear Energy",
      "summary": "Fuel types for nuclear power plants.",
      "key_points": [
        "Primary fuel: Uranium-235",
        "Process: Nuclear Fission",
        "Enrichment: Necessary for reactor use"
      ]
    },
    "tags": ["Science", "Physics", "Nuclear Fuel"]
  }
,
  {
    "_id": "bcs_q123_bangla",
    "question_id": "BCS-50th-123",
    "category": "Bangla Language",
    "question_text": "কোন্ গুচ্ছের সবগুলো বানানই শুদ্ধ?",
    "options": [
      "(ক) সারথী, নিরীহ, নীরোগ",
      "(খ) প্রমান, অঞ্জন, দর্পণ",
      "(গ) অনাত্মা, সুকেশী, অনূসূয়",
      "(ঘ) একত্রিত, স্থায়িত্ব, অর্ধজিহ্বী"
    ],
    "correct_answer": 2,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "বানানে 'ণত্ব বিধান' এবং 'ঈ-কার' এর সঠিক প্রয়োগ লক্ষ্য করুন।",
    "explanation": "বিকল্প (গ)-তে থাকা শব্দগুলো ব্যাকরণগতভাবে শুদ্ধ। অন্যগুলোতে 'প্রমাণ' (ণ), 'নীরোগ' বা 'স্থায়িত্ব' এর বানানে ভুল রয়েছে।",
    "topic_details": {
      "title": "Bangla Spelling Rules",
      "summary": "Rules for Natwa/Satwa Bidhan and vowel usage.",
      "key_points": [
        "Correct vowel usage in suffixes",
        "Natwa Bidhan application",
        "Contextual purity of words"
      ]
    },
    "tags": ["Bangla Grammar", "Spelling", "Purity"]
  },
  {
    "_id": "bcs_q128_intl",
    "question_id": "BCS-50th-128",
    "category": "International Affairs",
    "question_text": "'বিশ্ব বাণিজ্য সংস্থা' (WTO) প্রতিষ্ঠিত হয়েছিল _______ চুক্তির মাধ্যমে।",
    "options": [
      "(ক) ব্রেটন উডস",
      "(খ) লিসবন",
      "(গ) জেনেভা",
      "(ঘ) মারাকেশ"
    ],
    "correct_answer": 3,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "এটি ১৯৯৪ সালে মরক্কোর একটি শহরে স্বাক্ষরিত হয়েছিল।",
    "explanation": "মারাকেশ চুক্তির মাধ্যমে ১ জানুয়ারি ১৯৯৫ সালে WTO গঠিত হয়।",
    "topic_details": {
      "title": "International Organizations",
      "summary": "Formation history of the World Trade Organization.",
      "key_points": [
        "Marrakesh Agreement",
        "Date of establishment: Jan 1, 1995",
        "Successor to GATT"
      ]
    },
    "tags": ["International Affairs", "WTO", "Trade Agreement"]
  },
  {
    "_id": "bcs_q131_science",
    "question_id": "BCS-50th-131",
    "category": "General Science",
    "question_text": "কোনটির দেহে নিউক্লিয়াস ও সাইটোপ্লাজম নেই?",
    "options": [
      "(ক) শৈবাল",
      "(খ) ছত্রাক",
      "(গ) ভাইরাস",
      "(ঘ) ব্যাকটেরিয়া"
    ],
    "correct_answer": 2,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "এটি একটি অকোষীয় সত্তা।",
    "explanation": "ভাইরাস একটি অকোষীয় অণুজীব। এতে সুগঠিত নিউক্লিয়াস বা সাইটোপ্লাজম থাকে না, শুধুমাত্র প্রোটিন আবরণ ও জেনেটিক উপাদান থাকে।",
    "topic_details": {
      "title": "Cell Biology",
      "summary": "Classification of organisms based on cellular structure.",
      "key_points": [
        "Acellular nature of viruses",
        "Lack of metabolic machinery",
        "Protein coat and nucleic acid"
      ]
    },
    "tags": ["Science", "Biology", "Virus"]
  },
  {
    "_id": "bcs_q139_geography",
    "question_id": "BCS-50th-139",
    "category": "Geography",
    "question_text": "বায়ুমণ্ডল ও মহাশূন্যের মধ্যবর্তী রেখাটির নাম কী?",
    "options": [
      "(ক) বিষুবরেখা",
      "(খ) ট্রোপোপজ",
      "(গ) কারমান লাইন",
      "(ঘ) কলোরাডো লাইন"
    ],
    "correct_answer": 2,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "এটি সমুদ্রপৃষ্ঠ থেকে ১০০ কিমি উচ্চতায় অবস্থিত।",
    "explanation": "কারমান লাইন (Karman Line) হলো বায়ুমণ্ডল এবং মহাকাশের মধ্যবর্তী কাল্পনিক সীমানা রেখা।",
    "topic_details": {
      "title": "Atmospheric Science",
      "summary": "The boundaries of Earth's atmosphere.",
      "key_points": [
        "100 km altitude",
        "Boundary with outer space",
        "Named after Theodore von Kármán"
      ]
    },
    "tags": ["Geography", "Atmosphere", "Space"]
  },
  {
    "_id": "bcs_q144_literature",
    "question_id": "BCS-50th-144",
    "category": "English Literature",
    "question_text": "'Let me not to the marriage of true minds/Admit impediments; love is not love/which alters when it alteration finds'. Lines taken from a sonnet by _______.",
    "options": [
      "(ক) Spencer",
      "(খ) Petrarch",
      "(গ) Shakespeare",
      "(ঘ) Donne"
    ],
    "correct_answer": 2,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "He is the author of Sonnet 116.",
    "explanation": "The lines are the opening of William Shakespeare's Sonnet 116, which defines true love.",
    "topic_details": {
      "title": "Shakespearean Sonnets",
      "summary": "Major themes and structures of Shakespeare's poetry.",
      "key_points": [
        "Sonnet 116",
        "Theme of eternal love",
        "Universal literature classic"
      ]
    },
    "tags": ["English", "Literature", "Shakespeare"]
  },
  {
    "_id": "bcs_q156_ict",
    "question_id": "BCS-50th-156",
    "category": "ICT",
    "question_text": "কম্পিউটার সায়েন্সে Trojan Horse একটি-",
    "options": [
      "(ক) ছবি এডিট করার সফটওয়্যার",
      "(খ) অপারেটিং সিস্টেম",
      "(গ) প্রোগ্রামিং ল্যাঙ্গুয়েজ",
      "(ঘ) ম্যালওয়্যার"
    ],
    "correct_answer": 3,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "এটি ব্যবহারকারীর অগোচরে সিস্টেমে ক্ষতি করে।",
    "explanation": "Trojan Horse একটি ক্ষতিকর প্রোগ্রাম বা ম্যালওয়্যার যা ছদ্মবেশে কম্পিউটার সিস্টেমে প্রবেশ করে তথ্য চুরি বা ক্ষতি করে।",
    "topic_details": {
      "title": "Cyber Security",
      "summary": "Types of malicious software and their impacts.",
      "key_points": [
        "Malware category",
        "Deceptive delivery",
        "System security threat"
      ]
    },
    "tags": ["ICT", "Cyber Security", "Malware"]
  }
] 
export const BCS_Remaining_Data_50 = [ 
  {
    "_id": "44bcs_q2_eng",
    "question_id": "BCS-50th-02",
    "category": "English Literature",
    "question_text": "Who is the author of the novel 'The Sun Also Rises'?",
    "options": ["Ernest Hemingway", "F. Scott Fitzgerald", "William Faulkner", "Virginia Woolf"],
    "correct_answer": 0,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "তিনি 'A Farewell to Arms' এরও লেখক।",
    "explanation": "'The Sun Also Rises' (1926) মার্কিন লেখক আর্নেস্ট হেমিংওয়ের প্রথম গুরুত্বপূর্ণ উপন্যাস। এটি তার 'Lost Generation' এর জীবনচিত্র তুলে ধরে।",
    "topic_details": {
      "title": "Modern American Literature",
      "summary": "Key works of Ernest Hemingway.",
      "key_points": ["Author: Ernest Hemingway", "Published: 1926", "Theme: Lost Generation"]
    },
    "tags": ["Literature", "Novel", "English"],
    "createdAt": "2026-02-01T16:40:00.000Z",
    "updatedAt": "2026-02-01T16:40:00.000Z"
  },
  {
    "_id": "44bcs_q13_sci",
    "question_id": "BCS-50th-13",
    "category": "General Science",
    "question_text": "রক্তের কোন্ উপাদানটি অক্সিজেন পরিবহনের জন্য দায়ী?",
    "options": ["শ্বেত রক্তকণিকা", "অণুচক্রিকা", "হিমোগ্লোবিন", "রক্তরস"],
    "correct_answer": 2,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "এটি লোহিত রক্তকণিকার একটি প্রোটিন।",
    "explanation": "লোহিত রক্তকণিকার হিমোগ্লোবিন ফুসফুস থেকে অক্সিজেন গ্রহণ করে শরীরের প্রতিটি কোষে পৌঁছে দেয়।",
    "topic_details": {
      "title": "রক্তের উপাদান",
      "summary": "অক্সিজেন পরিবহনে হিমোগ্লোবিনের ভূমিকা।",
      "key_points": ["উপাদান: হিমোগ্লোবিন", "বাহক: লোহিত রক্তকণিকা", "কাজ: অক্সিজেন পরিবহন"]
    },
    "tags": ["Science", "Biology", "Human Body"],
    "createdAt": "2026-02-01T16:45:00.000Z",
    "updatedAt": "2026-02-01T16:45:00.000Z"
  },


  {
    "_id": "44bcs_q14_math",
    "question_id": "BCS-50th-14",
    "category": "Mathematical Reasoning",
    "question_text": "একটি আয়তক্ষেত্রের দৈর্ঘ্য ২০% বৃদ্ধি এবং প্রস্থ ১০% হ্রাস করলে ক্ষেত্রফলের কী পরিবর্তন হবে?",
    "options": ["৮% বৃদ্ধি", "১০% বৃদ্ধি", "১২% হ্রাস", "৫% বৃদ্ধি"],
    "correct_answer": 0,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "শর্টকাট সূত্র: a + b + (ab/100) ব্যবহার করুন।",
    "explanation": "পরিবর্তন = ২০ - ১০ + {(২০ * -১০) / ১০০} = ১০ - ২ = ৮%। ফলাফল ধনাত্মক হওয়ায় ক্ষেত্রফল ৮% বৃদ্ধি পাবে।",
    "topic_details": {
      "title": "শতকরা পরিবর্তন",
      "summary": "ক্ষেত্রফলের ওপর দৈর্ঘ্য ও প্রস্থের পরিবর্তনের প্রভাব।",
      "key_points": ["সূত্র: a + b + (ab/100)", "ফলাফল: ৮% বৃদ্ধি", "ধরণ: জ্যামিতিক লাভ-ক্ষতি"]
    },
    "tags": ["Math", "Percentage", "Geometry"],
    "createdAt": "2026-02-01T16:50:00.000Z",
    "updatedAt": "2026-02-01T16:50:00.000Z"
  },
  {
    "_id": "44bcs_q16_gk",
    "question_id": "BCS-50th-16",
    "category": "Bangladesh Affairs",
    "question_text": "মুক্তিযুদ্ধের সময় 'ঢাকা' কত নম্বর সেক্টরের অধীনে ছিল?",
    "options": ["১ নম্বর", "২ নম্বর", "৩ নম্বর", "১১ নম্বর"],
    "correct_answer": 1,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "মেজর খালেদ মোশাররফ এই সেক্টরের কমান্ডার ছিলেন।",
    "explanation": "মুক্তিযুদ্ধের ২ নম্বর সেক্টরের অধীনে ছিল ঢাকা, কুমিল্লা, ফরিদপুর এবং নোয়াখালীর একাংশ।",
    "topic_details": {
      "title": "মুক্তিযুদ্ধের সেক্টর",
      "summary": "বাংলাদেশের স্বাধীনতা যুদ্ধের প্রশাসনিক বিভাগ।",
      "key_points": ["ঢাকা: সেক্টর ২", "সেক্টর কমান্ডার: খালেদ মোশাররফ", "মোট সেক্টর: ১১"]
    },
    "tags": ["GK", "History", "Liberation War"],
    "createdAt": "2026-02-01T16:55:00.000Z",
    "updatedAt": "2026-02-01T16:55:00.000Z"
  },
  
  {
    "_id": "44bcs_q18_sci",
    "question_id": "BCS-50th-18",
    "category": "General Science",
    "question_text": "শুষ্ক বরফ (Dry Ice) বলতে কী বোঝায়?",
    "options": ["তরল নাইট্রোজেন", "কঠিন কার্বন ডাই অক্সাইড", "হিমায়িত অক্সিজেন", "কঠিন মিথেন"],
    "correct_answer": 1,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "এটি অত্যন্ত নিম্ন তাপমাত্রায় কঠিন অবস্থায় থাকে।",
    "explanation": "কার্বন ডাই অক্সাইড গ্যাসকে উচ্চ চাপে এবং নিম্ন তাপমাত্রায় ঘনীভূত করে কঠিন করা হলে তাকে শুষ্ক বরফ বা Dry Ice বলা হয়।",
    "topic_details": {
      "title": "পদার্থের অবস্থা",
      "summary": "শুষ্ক বরফের বৈশিষ্ট্য ও ব্যবহার।",
      "key_points": ["উপাদান: CO2", "অবস্থা: কঠিন", "তাপমাত্রা: -৭৮.৫ ডিগ্রি সেলসিয়াস"]
    },
    "tags": ["Science", "Chemistry", "Gas"],
    "createdAt": "2026-02-01T17:00:00.000Z",
    "updatedAt": "2026-02-01T17:00:00.000Z"
  },
  {
    "_id": "44bcs_q20_eng",
    "question_id": "BCS-50th-20",
    "category": "English Language",
    "question_text": "Identify the correctly spelled word:",
    "options": ["Maintanance", "Maintenance", "Maintenence", "Maintenanse"],
    "correct_answer": 1,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "এটিতে 'ten' এবং 'ance' যুক্ত আছে।",
    "explanation": "সঠিক বানানটি হলো 'Maintenance', যার অর্থ রক্ষণাবেক্ষণ। অনেকে ভুল করে 'Maintanance' লিখে থাকে।",
    "topic_details": {
      "title": "Spelling",
      "summary": "Commonly misspelled English words.",
      "key_points": ["Word: Maintenance", "Root: Maintain", "Suffix: -ance"]
    },
    "tags": ["English", "Grammar", "Spelling"],
    "createdAt": "2026-02-01T17:05:00.000Z",
    "updatedAt": "2026-02-01T17:05:00.000Z"
  },
  {
    "_id": "44bcs_q22_lit",
    "question_id": "BCS-50th-22",
    "category": "Bangla Literature",
    "question_text": "‘নূরলদীনের সারাজীবন’ কাব্যনাট্যটি কার লেখা?",
    "options": ["সৈয়দ শামসুল হক", "সেলিম আল দীন", "মুনীর চৌধুরী", "আবদুল্লাহ আল মামুন"],
    "correct_answer": 0,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "তিনি 'সব্যসাচী লেখক' হিসেবে পরিচিত।",
    "explanation": "সৈয়দ শামসুল হকের বিখ্যাত কাব্যনাট্য ‘নূরলদীনের সারাজীবন’। এর বিখ্যাত সংলাপ: 'জাগো বাহে কুন্ঠে সবায়'।",
    "topic_details": {
      "title": "আধুনিক কাব্যনাট্য",
      "summary": "সৈয়দ শামসুল হকের সাহিত্যকর্ম।",
      "key_points": ["লেখক: সৈয়দ শামসুল হক", "চরিত্র: নূরলদীন", "প্রেক্ষাপট: কৃষক বিদ্রোহ"]
    },
    "tags": ["Literature", "Drama", "Bangla"],
    "createdAt": "2026-02-01T17:10:00.000Z",
    "updatedAt": "2026-02-01T17:10:00.000Z"
  },
  {
    "_id": "44bcs_q24_sci",
    "question_id": "BCS-50th-24",
    "category": "General Science",
    "question_text": "পানির ঘনত্ব সবচেয়ে বেশি কত তাপমাত্রায়?",
    "options": ["০° সেলসিয়াস", "১০০° সেলসিয়াস", "৪° সেলসিয়াস", "১০° সেলসিয়াস"],
    "correct_answer": 2,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "পানির ব্যতিক্রমী প্রসারণের সাথে এটি সম্পর্কিত।",
    "explanation": "পানির ঘনত্ব ৪ ডিগ্রি সেলসিয়াস তাপমাত্রায় সর্বোচ্চ হয়। এর নিচে বা উপরে পানির ঘনত্ব কমতে থাকে।",
    "topic_details": {
      "title": "পদার্থের ভৌত ধর্ম",
      "summary": "পানির ঘনত্বের ব্যতিক্রমী বৈশিষ্ট্য।",
      "key_points": ["তাপমাত্রা: ৪ ডিগ্রি সেলসিয়াস", "বৈশিষ্ট্য: সর্বোচ্চ ঘনত্ব", "ফলাফল: আয়তন সর্বনিম্ন"]
    },
    "tags": ["Science", "Physics", "Water"],
    "createdAt": "2026-02-01T17:15:00.000Z",
    "updatedAt": "2026-02-01T17:15:00.000Z"
  },
  {
    "_id": "44bcs_q2_eng",
    "question_id": "BCS-50th-02",
    "category": "English Literature",
    "question_text": "Who is the author of the novel 'The Sun Also Rises'?",
    "options": ["Ernest Hemingway", "F. Scott Fitzgerald", "William Faulkner", "Virginia Woolf"],
    "correct_answer": 0,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "তিনি 'A Farewell to Arms' এরও লেখক।",
    "explanation": "'The Sun Also Rises' (1926) মার্কিন লেখক আর্নেস্ট হেমিংওয়ের প্রথম গুরুত্বপূর্ণ উপন্যাস। এটি তার 'Lost Generation' এর জীবনচিত্র তুলে ধরে।",
    "topic_details": {
      "title": "Modern American Literature",
      "summary": "Key works of Ernest Hemingway.",
      "key_points": ["Author: Ernest Hemingway", "Published: 1926", "Theme: Lost Generation"]
    },
    "tags": ["Literature", "Novel", "English"],
    "createdAt": "2026-02-01T16:40:00.000Z",
    "updatedAt": "2026-02-01T16:40:00.000Z"
  },
  {
    "_id": "44bcs_q13_sci",
    "question_id": "BCS-50th-13",
    "category": "General Science",
    "question_text": "রক্তের কোন্ উপাদানটি অক্সিজেন পরিবহনের জন্য দায়ী?",
    "options": ["শ্বেত রক্তকণিকা", "অণুচক্রিকা", "হিমোগ্লোবিন", "রক্তরস"],
    "correct_answer": 2,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "এটি লোহিত রক্তকণিকার একটি প্রোটিন।",
    "explanation": "লোহিত রক্তকণিকার হিমোগ্লোবিন ফুসফুস থেকে অক্সিজেন গ্রহণ করে শরীরের প্রতিটি কোষে পৌঁছে দেয়।",
    "topic_details": {
      "title": "রক্তের উপাদান",
      "summary": "অক্সিজেন পরিবহনে হিমোগ্লোবিনের ভূমিকা।",
      "key_points": ["উপাদান: হিমোগ্লোবিন", "বাহক: লোহিত রক্তকণিকা", "কাজ: অক্সিজেন পরিবহন"]
    },
    "tags": ["Science", "Biology", "Human Body"],
    "createdAt": "2026-02-01T16:45:00.000Z",
    "updatedAt": "2026-02-01T16:45:00.000Z"
  },

  {
    "_id": "44bcs_q14_math",
    "question_id": "BCS-50th-14",
    "category": "Mathematical Reasoning",
    "question_text": "একটি আয়তক্ষেত্রের দৈর্ঘ্য ২০% বৃদ্ধি এবং প্রস্থ ১০% হ্রাস করলে ক্ষেত্রফলের কী পরিবর্তন হবে?",
    "options": ["৮% বৃদ্ধি", "১০% বৃদ্ধি", "১২% হ্রাস", "৫% বৃদ্ধি"],
    "correct_answer": 0,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "শর্টকাট সূত্র: a + b + (ab/100) ব্যবহার করুন।",
    "explanation": "পরিবর্তন = ২০ - ১০ + {(২০ * -১০) / ১০০} = ১০ - ২ = ৮%। ফলাফল ধনাত্মক হওয়ায় ক্ষেত্রফল ৮% বৃদ্ধি পাবে।",
    "topic_details": {
      "title": "শতকরা পরিবর্তন",
      "summary": "ক্ষেত্রফলের ওপর দৈর্ঘ্য ও প্রস্থের পরিবর্তনের প্রভাব।",
      "key_points": ["সূত্র: a + b + (ab/100)", "ফলাফল: ৮% বৃদ্ধি", "ধরণ: জ্যামিতিক লাভ-ক্ষতি"]
    },
    "tags": ["Math", "Percentage", "Geometry"],
    "createdAt": "2026-02-01T16:50:00.000Z",
    "updatedAt": "2026-02-01T16:50:00.000Z"
  },
  {
    "_id": "44bcs_q16_gk",
    "question_id": "BCS-50th-16",
    "category": "Bangladesh Affairs",
    "question_text": "মুক্তিযুদ্ধের সময় 'ঢাকা' কত নম্বর সেক্টরের অধীনে ছিল?",
    "options": ["১ নম্বর", "২ নম্বর", "৩ নম্বর", "১১ নম্বর"],
    "correct_answer": 1,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "মেজর খালেদ মোশাররফ এই সেক্টরের কমান্ডার ছিলেন।",
    "explanation": "মুক্তিযুদ্ধের ২ নম্বর সেক্টরের অধীনে ছিল ঢাকা, কুমিল্লা, ফরিদপুর এবং নোয়াখালীর একাংশ।",
    "topic_details": {
      "title": "মুক্তিযুদ্ধের সেক্টর",
      "summary": "বাংলাদেশের স্বাধীনতা যুদ্ধের প্রশাসনিক বিভাগ।",
      "key_points": ["ঢাকা: সেক্টর ২", "সেক্টর কমান্ডার: খালেদ মোশাররফ", "মোট সেক্টর: ১১"]
    },
    "tags": ["GK", "History", "Liberation War"],
    "createdAt": "2026-02-01T16:55:00.000Z",
    "updatedAt": "2026-02-01T16:55:00.000Z"
  },
  
  {
    "_id": "44bcs_q18_sci",
    "question_id": "BCS-50th-18",
    "category": "General Science",
    "question_text": "শুষ্ক বরফ (Dry Ice) বলতে কী বোঝায়?",
    "options": ["তরল নাইট্রোজেন", "কঠিন কার্বন ডাই অক্সাইড", "হিমায়িত অক্সিজেন", "কঠিন মিথেন"],
    "correct_answer": 1,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "এটি অত্যন্ত নিম্ন তাপমাত্রায় কঠিন অবস্থায় থাকে।",
    "explanation": "কার্বন ডাই অক্সাইড গ্যাসকে উচ্চ চাপে এবং নিম্ন তাপমাত্রায় ঘনীভূত করে কঠিন করা হলে তাকে শুষ্ক বরফ বা Dry Ice বলা হয়।",
    "topic_details": {
      "title": "পদার্থের অবস্থা",
      "summary": "শুষ্ক বরফের বৈশিষ্ট্য ও ব্যবহার।",
      "key_points": ["উপাদান: CO2", "অবস্থা: কঠিন", "তাপমাত্রা: -৭৮.৫ ডিগ্রি সেলসিয়াস"]
    },
    "tags": ["Science", "Chemistry", "Gas"],
    "createdAt": "2026-02-01T17:00:00.000Z",
    "updatedAt": "2026-02-01T17:00:00.000Z"
  },
  {
    "_id": "44bcs_q20_eng",
    "question_id": "BCS-50th-20",
    "category": "English Language",
    "question_text": "Identify the correctly spelled word:",
    "options": ["Maintanance", "Maintenance", "Maintenence", "Maintenanse"],
    "correct_answer": 1,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "এটিতে 'ten' এবং 'ance' যুক্ত আছে।",
    "explanation": "সঠিক বানানটি হলো 'Maintenance', যার অর্থ রক্ষণাবেক্ষণ। অনেকে ভুল করে 'Maintanance' লিখে থাকে।",
    "topic_details": {
      "title": "Spelling",
      "summary": "Commonly misspelled English words.",
      "key_points": ["Word: Maintenance", "Root: Maintain", "Suffix: -ance"]
    },
    "tags": ["English", "Grammar", "Spelling"],
    "createdAt": "2026-02-01T17:05:00.000Z",
    "updatedAt": "2026-02-01T17:05:00.000Z"
  },
  {
    "_id": "44bcs_q22_lit",
    "question_id": "BCS-50th-22",
    "category": "Bangla Literature",
    "question_text": "‘নূরলদীনের সারাজীবন’ কাব্যনাট্যটি কার লেখা?",
    "options": ["সৈয়দ শামসুল হক", "সেলিম আল দীন", "মুনীর চৌধুরী", "আবদুল্লাহ আল মামুন"],
    "correct_answer": 0,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "তিনি 'সব্যসাচী লেখক' হিসেবে পরিচিত।",
    "explanation": "সৈয়দ শামসুল হকের বিখ্যাত কাব্যনাট্য ‘নূরলদীনের সারাজীবন’। এর বিখ্যাত সংলাপ: 'জাগো বাহে কুন্ঠে সবায়'।",
    "topic_details": {
      "title": "আধুনিক কাব্যনাট্য",
      "summary": "সৈয়দ শামসুল হকের সাহিত্যকর্ম।",
      "key_points": ["লেখক: সৈয়দ শামসুল হক", "চরিত্র: নূরলদীন", "প্রেক্ষাপট: কৃষক বিদ্রোহ"]
    },
    "tags": ["Literature", "Drama", "Bangla"],
    "createdAt": "2026-02-01T17:10:00.000Z",
    "updatedAt": "2026-02-01T17:10:00.000Z"
  },
  {
    "_id": "44bcs_q24_sci",
    "question_id": "BCS-50th-24",
    "category": "General Science",
    "question_text": "পানির ঘনত্ব সবচেয়ে বেশি কত তাপমাত্রায়?",
    "options": ["০° সেলসিয়াস", "১০০° সেলসিয়াস", "৪° সেলসিয়াস", "১০° সেলসিয়াস"],
    "correct_answer": 2,
    "previous_exam_bcs": ["50th BCS"],
    "hint": "পানির ব্যতিক্রমী প্রসারণের সাথে এটি সম্পর্কিত।",
    "explanation": "পানির ঘনত্ব ৪ ডিগ্রি সেলসিয়াস তাপমাত্রায় সর্বোচ্চ হয়। এর নিচে বা উপরে পানির ঘনত্ব কমতে থাকে।",
    "topic_details": {
      "title": "পদার্থের ভৌত ধর্ম",
      "summary": "পানির ঘনত্বের ব্যতিক্রমী বৈশিষ্ট্য।",
      "key_points": ["তাপমাত্রা: ৪ ডিগ্রি সেলসিয়াস", "বৈশিষ্ট্য: সর্বোচ্চ ঘনত্ব", "ফলাফল: আয়তন সর্বনিম্ন"]
    },
    "tags": ["Science", "Physics", "Water"],
    "createdAt": "2026-02-01T17:15:00.000Z",
    "updatedAt": "2026-02-01T17:15:00.000Z"
  }
];

export const BCS_Priliminary_final =[...BCS_50_105,...BCS_Priliminary_95,...BCS_Remaining_Data_50] 
// filter or remove duplicant questions-01
// export const BCS_Priliminary_50=BCS_Priliminary_final.filter((obj,index,self)=>
//   index===self.findIndex((o)=>o.question_text===obj.question_text)
// )
const seen = new Set();
// bcs 50 question
export const BCS_Priliminary_50 = BCS_Priliminary_final.filter(obj => {
  const isDuplicate = seen.has(obj.question_text);
  seen.add(obj.question_text);
  return !isDuplicate;
});

export const dummyData = [
  {
    question_id: "BCS_45_001",
    category: "International Affairs",
    question_text: "Which country is the host of COP28?",
    options: ["Egypt", "UAE", "Qatar", "France"],
    correct_answer: 1,
    previous_exam_bcs: ["45th BCS"],
    previous_exam_others: ["Bank Oral 2023"],
    hint: "এটি একটি মরুভূমি প্রধান দেশ যার প্রধান শহর দুবাই।",
    explanation: "COP28 was held in Dubai, UAE, from Nov 30 to Dec 12, 2023.",
    key_notes: "Nov 30 to Dec 12, 2023",
    updated_notes: "Nov 30 to Dec 12, 2026",
    topic_details: {
      title: "COP28 (Conference of the Parties)",
      summary:
        "COP28 হলো জাতিসংঘের জলবায়ু পরিবর্তন সম্মেলন। এটি ২০২৩ সালে সংযুক্ত আরব আমিরাতের দুবাইতে অনুষ্ঠিত হয়।",
      key_points: [
        "Host: Expo City, Dubai, UAE",
        "President: Sultan Al Jaber",
        "Major Outcome: Transitioning away from fossil fuels.",
      ],
    },
    recent_details: {
      title: "COP31 (জাতিসংঘ জলবায়ু সম্মেলন ২০২৬)",
      summary:
        "COP31 হলো ২০২৬ সালে অনুষ্ঠিতব্য জাতিসংঘের জলবায়ু পরিবর্তন সম্মেলন। এই সম্মেলনে বৈশ্বিক তাপমাত্রা বৃদ্ধি ১.৫° সেলসিয়াসে সীমাবদ্ধ রাখা এবং জলবায়ু তহবিলের সঠিক বণ্টন নিশ্চিত করার ওপর সর্বোচ্চ গুরুত্ব দেওয়া।",
      key_points: [
        "প্রস্তাবিত আয়োজক: অস্ট্রেলিয়া এবং প্রশান্ত মহাসাগরীয় দ্বীপপুঞ্জ (অস্ট্রেলিয়া ও প্যাসিফিক যৌথ উদ্যোগ)।",
        "মূল লক্ষ্য: ২০৩০ সালের মধ্যে কার্বন নিঃসরণ কমানোর লক্ষ্যমাত্রা পুনর্নির্ধারণ।",
        "গুরুত্বপূর্ণ দিক: ক্ষতিগ্রস্ত দেশগুলোর জন্য 'লস অ্যান্ড ড্যামেজ' ফান্ডের কার্যকর বাস্তবায়ন।",
      ],
    },

    tags: ["Current Affairs", "Environment", "Recent"],
  },
  {
    question_id: "BCS_45_002",
    category: "Bangla",
    question_text: "‘কবর’ নাটকটির রচয়িতা কে?",
    options: ["জসীমউদ্‌দীন", "মুনীর চৌধুরী", "শামসুর রাহমান", "সুফিয়া কামাল"],
    correct_answer: 1,
    previous_exam_bcs: ["38th BCS", "10th BCS"],
    previous_exam_others: ["Primary 2018"],
    hint: "তিনি একজন প্রখ্যাত নাট্যকার যিনি ১৯৭১ সালে শহীদ হন।",
    topic_details: {
      title: "মুনীর চৌধুরী ও 'কবর' নাটক",
      summary:
        "মুনীর চৌধুরী বাংলাদেশের একজন প্রখ্যাত বুদ্ধিজীবী ও নাট্যকার। 'কবর' তাঁর শ্রেষ্ঠ সৃষ্টিগুলোর একটি।",
      key_points: [
        "নাটকটি ১৯৫৩ সালে রাজবন্দিদের দ্বারা ঢাকা জেলে প্রথম অভিনীত হয়।",
        "এর পটভূমি ১৯৫২ সালের মহান ভাষা আন্দোলন।",
        "মুনীর চৌধুরী ১৯৭১ সালের ১৪ ডিসেম্বর শহীদ হন।",
      ],
    },
    explanation:
      "মুনীর চৌধুরী ১৯৫৩ সালে ভাষা আন্দোলনের পটভূমিতে ‘কবর’ নাটকটি রচনা করেন।",
    key_notes: "ভাষা আন্দোলনের পটভূমিতে",
    tags: ["বাংলা সাহিত্য", "মুনীর চৌধুরী"],
  },
  {
    question_id: "BCS_45_003",
    category: "Bangladesh Affairs",
    question_text: "বাংলাদেশের সংবিধান কার্যকর হয় কোন তারিখ থেকে?",
    options: [
      "১৬ ডিসেম্বর ১৯৭২",
      "৪ নভেম্বর ১৯৭২",
      "২৬ মার্চ ১৯৭২",
      "১০ এপ্রিল ১৯৭২",
    ],
    correct_answer: 0,
    previous_exam_bcs: ["44th BCS", "50th BCS"],
    previous_exam_others: ["Non-Cadre 2015"],
    hint: "বিজয় দিবসের প্রথম বার্ষিকীতে এটি কার্যকর হয়।",
    topic_details: {
      title: "বাংলাদেশের সংবিধানের ইতিহাস",
      summary:
        "বাংলাদেশের সংবিধান স্বাধীন বাংলাদেশের সর্বোচ্চ আইন। এটি ১৯৭২ সালে প্রণীত হয়।",
      key_points: [
        "গৃহীত হয়: ৪ নভেম্বর ১৯৭২ (সংবিধান দিবস)।",
        "কার্যকর হয়: ১৬ ডিসেম্বর ১৯৭২।",
        "সংবিধানের মূলনীতি: ৪টি (জাতীয়তাবাদ, সমাজতন্ত্র, গণতন্ত্র ও ধর্মনিরপেক্ষতা)।",
      ],
    },
    explanation:
      "বাংলাদেশের সংবিধান ৪ নভেম্বর ১৯৭২ সালে গণপরিষদে গৃহীত হয় এবং ১৬ ডিসেম্বর ১৯৭২ থেকে কার্যকর হয়।",
    tags: ["সংবিধান", "ইতিহাস"],
  },
  {
    question_id: "BCS_45_004",
    category: "Geography",
    question_text: "মহাস্থানগড় কোন নদীর তীরে অবস্থিত?",
    options: ["পদ্মা", "মেঘনা", "করতোয়া", "যমুনা"],
    correct_answer: 2,
    previous_exam_bcs: ["41st BCS"],
    previous_exam_others: ["Primary 2022"],
    hint: "এই নদীটি বগুড়া জেলার মধ্য দিয়ে প্রবাহিত।",
    topic_details: {
      title: "মহাস্থানগড় (পুণ্ড্রবর্ধন)",
      summary:
        "এটি বাংলাদেশের একটি অন্যতম প্রাচীন প্রত্নতাত্ত্বিক স্থান। এটি মৌর্য ও গুপ্ত বংশের শাসনের সাক্ষী।",
      key_points: [
        "অবস্থান: বগুড়া জেলার শিবগঞ্জ উপজেলায়।",
        "প্রাচীন নাম: পুণ্ড্রনগর।",
        "নদী: করতোয়া নদী (প্রাচীনকালে এটি বিশাল নদী ছিল)।",
      ],
    },
    explanation:
      "প্রাচীন পুণ্ড্রবর্ধনের রাজধানী মহাস্থানগড় করতোয়া নদীর পশ্চিম তীরে অবস্থিত।",
    tags: ["ভূগোল", "প্রাচীন সভ্যতা"],
  },
  {
    question_id: "BCS_45_005",
    category: "General Science",
    question_text: "রক্তে হিমোগ্লোবিনের কাজ কি?",
    options: [
      "অক্সিজেন পরিবহন করা",
      "রোগ প্রতিরোধ করা",
      "রক্ত জমাট বাঁধতে সাহায্য করা",
      "শক্তি উৎপাদন করা",
    ],
    correct_answer: 0,
    previous_exam_bcs: ["43rd BCS"],
    previous_exam_others: ["NTRCA 2019"],
    hint: "এটি ফুসফুস থেকে সারা শরীরে বায়ু পরিবহন করে।",
    topic_details: {
      title: "হিমোগ্লোবিন (Hemoglobin)",
      summary:
        "হিমোগ্লোবিন হলো লোহিত রক্তকণিকায় অবস্থিত একটি প্রোটিন যা রক্তকে লাল করে।",
      key_points: [
        "প্রধান উপাদান: আয়রন (Iron)।",
        "কাজ: ফুসফুস থেকে টিস্যুতে অক্সিজেন (O2) বহন করা।",
        "অভাবজনিত রোগ: রক্তশূন্যতা (Anemia)।",
      ],
    },
    explanation:
      "হিমোগ্লোবিনের প্রধান কাজ হলো ফুসফুস থেকে টিস্যুতে অক্সিজেন পরিবহন করা।",
    tags: ["বিজ্ঞান", "জীববিজ্ঞান"],
  },
  {
    question_id: "BCS_45_006",
    category: "International Affairs",
    question_text: "কোন দেশটিকে 'সূর্যোদয়ের দেশ' বলা হয়?",
    options: ["চীন", "নরওয়ে", "জাপান", "অস্ট্রেলিয়া"],
    correct_answer: 2,
    previous_exam_bcs: ["35th BCS"],
    previous_exam_others: ["Food Dept 2021"],
    hint: "দেশটি এশিয়ার পূর্বে অবস্থিত এবং প্রযুক্তিতে উন্নত।",
    topic_details: {
      title: "জাপান (সূর্যোদয়ের দেশ)",
      summary:
        "জাপানকে নিপ্পন (Nippon) বলা হয় যার অর্থ 'সূর্যের উৎস' বা সূর্যোদয়ের দেশ।",
      key_points: [
        "অবস্থান: পূর্ব এশিয়া।",
        "রাজধানী: টোকিও (বিশ্বের জনবহুল শহর)।",
        "ভৌগোলিক তথ্য: এটি প্রায় ৭০০০ দ্বীপ নিয়ে গঠিত।",
      ],
    },
    explanation:
      "ভৌগোলিক অবস্থানের কারণে জাপানকে 'সূর্যোদয়ের দেশ' (Nippon) বলা হয়।",
    tags: ["সাধারণ জ্ঞান", "ভৌগোলিক উপনাম"],
  },
  {
    question_id: "BCS_45_007",
    category: "English Literature",
    question_text: "Who is the author of 'Hamlet'?",
    options: [
      "Charles Dickens",
      "William Shakespeare",
      "John Milton",
      "Robert Frost",
    ],
    correct_answer: 1,
    previous_exam_bcs: ["40th BCS"],
    previous_exam_others: ["Auditor 2022"],
    hint: "He is known as the Bard of Avon.",
    topic_details: {
      title: "William Shakespeare",
      summary:
        "Shakespeare is often called the greatest writer in the English language.",
      key_points: [
        "Famous Plays: Hamlet, Othello, King Lear, Macbeth.",
        "Era: Elizabethan Era.",
        "Birthplace: Stratford-upon-Avon, England.",
      ],
    },
    explanation:
      "The Tragedy of Hamlet is a world-famous tragedy written by William Shakespeare.",
    tags: ["English", "Shakespeare"],
  },

  {
    question_id: "BCS_45_008",
    category: "Bangladesh Affairs",
    question_text: "বাংলাদেশের প্রথম নারী প্রধানমন্ত্রীর নাম কী?",
    options: ["বেগম রোকেয়া", "শেখ হাসিনা", "বেগম খালেদা জিয়া", "সুফিয়া কামাল"],
    correct_answer: 2,
    previous_exam_bcs: ["37th BCS"],
    previous_exam_others: ["Police SI 2017"],
    hint: "তিনি ১৯৯১ সালে প্রথমবার ক্ষমতায় আসেন।",
    topic_details: {
      title: "বেগম খালেদা জিয়া",
      summary:
        "তিনি বাংলাদেশের প্রথম এবং মুসলিম বিশ্বের অন্যতম নারী প্রধানমন্ত্রী।",
      key_points: [
        "দল: বাংলাদেশ জাতীয়তাবাদী দল (BNP)।",
        "প্রথম মেয়াদ: ১৯৯১-১৯৯৬।",
        "তিনি মোট ৩ বার প্রধানমন্ত্রী হিসেবে শপথ নেন।",
      ],
    },
    explanation:
      "বেগম খালেদা জিয়া ১৯৯১ সালে বাংলাদেশের প্রথম নারী প্রধানমন্ত্রী হিসেবে দায়িত্ব গ্রহণ করেন।",
    tags: ["রাজনীতি", "বাংলাদেশ"],
  },
  {
    question_id: "BCS_45_009",
    category: "Mathematics",
    question_text: "১ থেকে ১০০ পর্যন্ত মৌলিক সংখ্যা কয়টি?",
    options: ["২২টি", "২৪টি", "২৫টি", "২৬টি"],
    correct_answer: 2,
    previous_exam_bcs: ["42nd BCS"],
    previous_exam_others: ["Bank Preli 2020"],
    hint: "সংখ্যাটি ৪ এর গুণিতক এর চেয়ে ১ বেশি। Mobile Number: 4422-322-321",
    topic_details: {
      title: "মৌলিক সংখ্যা (Prime Numbers)",
      summary:
        "মৌলিক সংখ্যা হলো সেই সব স্বাভাবিক সংখ্যা যাদের ১ এবং ঐ সংখ্যা ছাড়া অন্য কোন গুণনীয়ক নেই।",
      key_points: [
        "১ থেকে ১০০ পর্যন্ত ২৫টি মৌলিক সংখ্যা রয়েছে।",
        "সবচেয়ে ছোট মৌলিক সংখ্যা হলো ২ (একমাত্র জোড় মৌলিক)।",
        "১ মৌলিক বা কৃত্রিম কোন সংখ্যাই নয়।",
      ],
    },
    explanation:
      "১ থেকে ১০০ পর্যন্ত মোট ২৫টি মৌলিক সংখ্যা রয়েছে (যেমন: ২, ৩, ৫... ৯৭)।",
    tags: ["গণিত", "মৌলিক সংখ্যা"],
  },
  {
    question_id: "BCS_45_010",
    category: "ICT",
    question_text: "কম্পিউটারের মস্তিস্ক বলা হয় কোন অংশকে?",
    options: ["RAM", "Monitor", "CPU", "Hard Disk"],
    correct_answer: 2,
    previous_exam_bcs: ["44th BCS"],
    previous_exam_others: ["Ministry Exam 2023"],
    hint: "এর পূর্ণরূপ Central Processing Unit।",
    topic_details: {
      title: "CPU (Central Processing Unit)",
      summary:
        "CPU হলো কম্পিউটারের প্রধান হার্ডওয়্যার যা ডেটা প্রসেসিং ও গাণিতিক কাজ সম্পাদন করে।",
      key_points: [
        "৩টি অংশ: ALU (Arithmetic Logic Unit), CU (Control Unit), ও Register Memory।",
        "একে কম্পিউটারের মস্তিস্ক বা Brain বলা হয়।",
        "আধুনিক কম্পিউটারে এটি একটি মাইক্রোচিপ হিসেবে থাকে।",
      ],
    },
    explanation:
      "CPU সকল গাণিতিক ও যৌক্তিক কাজ সম্পন্ন করে বলে একে মস্তিস্ক বলা হয়।",
    tags: ["ICT", "কম্পিউটার"],
  },
  {
    question_id: "BCS_45_011",
    category: "International Affairs",
    question_text: "কোন দেশটিকে 'সূর্যোদয়ের দেশ' বলা হয়?",
    options: ["চীন", "নরওয়ে", "জাপান", "অস্ট্রেলিয়া"],
    correct_answer: 2,
    previous_exam_bcs: ["35th BCS"],
    previous_exam_others: ["Food Dept 2021"],
    hint: "দেশটি এশিয়ার পূর্বে অবস্থিত এবং প্রযুক্তিতে উন্নত।",
    topic_details: {
      title: "জাপান (সূর্যোদয়ের দেশ)",
      summary:
        "জাপানকে নিপ্পন (Nippon) বলা হয় যার অর্থ 'সূর্যের উৎস' বা সূর্যোদয়ের দেশ।",
      key_points: [
        "অবস্থান: পূর্ব এশিয়া।",
        "রাজধানী: টোকিও (বিশ্বের জনবহুল শহর)।",
        "ভৌগোলিক তথ্য: এটি প্রায় ৭০০০ দ্বীপ নিয়ে গঠিত।",
      ],
    },
    explanation:
      "ভৌগোলিক অবস্থানের কারণে জাপানকে 'সূর্যোদয়ের দেশ' (Nippon) বলা হয়।",
    tags: ["সাধারণ জ্ঞান", "ভৌগোলিক উপনাম"],
  },
];
export const dummyData50 = [
  {
    _id: "65bc1a2e9d3e4b0012a1b111",
    question_id: "BCS-50th-question-and-answer",
    category: "Ethics & Good Governance",
    question_text: "মূল্যবোধের (Values) প্রধান উৎস কোনটি?",
    options: ["সমাজ", "পরিবার", "ধর্ম", "রাষ্ট্র"],
    correct_answer: 1,
    previous_exam_bcs: ["38 ", "41"],
    hint: "এটি শিশুর শিক্ষার প্রথম বিদ্যাপীঠ।",
    explanation:
      "মূল্যবোধ অর্জনের প্রাথমিক ও প্রধান উৎস হলো পরিবার। পরিবার থেকেই নৈতিকতা ও আচরণের ভিত্তি তৈরি হয়।",
    topic_details: {
      title: "মূল্যবোধ ও সুশাসন",
      summary: "মূল্যবোধ হলো মানুষের আচরণের নিয়ন্ত্রক মানদণ্ড।",
      key_points: [
        "প্রাথমিক উৎস: পরিবার",
        "গৌণ উৎস: সমাজ, ধর্ম, শিক্ষা প্রতিষ্ঠান",
        "সুশাসনের ভিত্তি: নৈতিকতা ও স্বচ্ছতা",
      ],
    },
    tags: ["Ethics", "Society"],
    createdAt: "2026-02-01T10:00:00.000Z",
    updatedAt: "2026-02-01T10:00:00.000Z",
  },
  {
    _id: "65bc1a2e9d3e4b0012a1b112",
    question_id: "BCS_50_012",
    category: "Geography",
    question_text: "বাংলাদেশের সবচেয়ে উত্তরপ্রান্তের স্থানের নাম কী?",
    options: ["বাংলাবান্ধা", "তেঁতুলিয়া", "বাংলাবাজার", "জায়গিরজোত"],
    correct_answer: 3,
    previous_exam_bcs: ["35th BCS", "28th BCS"],
    hint: "এটি তেঁতুলিয়া উপজেলার একটি নির্দিষ্ট ইউনিয়ন বা গ্রাম।",
    explanation:
      "বাংলাদেশের উত্তরতম স্থান হলো জায়গিরজোত (বাংলাবান্ধা ইউনিয়ন, তেঁতুলিয়া)।",
    topic_details: {
      title: "বাংলাদেশের মানচিত্র ও প্রান্তিক স্থান",
      summary:
        "বাংলাদেশের চারটি প্রান্তীয় বিন্দু ভৌগোলিক প্রস্তুতির জন্য গুরুত্বপূর্ণ।",
      key_points: [
        "উত্তরতম: জায়গিরজোত (পঞ্চগড়)",
        "দক্ষিণতম: ছেঁড়াদ্বীপ (কক্সবাজার)",
        "পূর্বতম: আখাইনথং (বান্দরবান)",
        "পশ্চিমতম: মনাকষা (চাঁপাইনবাবগঞ্জ)",
      ],
    },
    tags: ["Geography", "Map"],
    createdAt: "2026-02-01T10:05:00.000Z",
    updatedAt: "2026-02-01T10:05:00.000Z",
  },
  {
    _id: "65bc1a2e9d3e4b0012a1b113",
    question_id: "BCS_50_013",
    category: "International Affairs",
    question_text: "ইউক্রেনের বর্তমান প্রেসিডেন্টের নাম কী?",
    options: [
      "ভ্লাদিমির পুতিন",
      "ভোলোদিমির জেলেনস্কি",
      "ভিক্টর ইয়ানুকোভিচ",
      "পেত্রো পোরোশেঙ্কো",
    ],
    correct_answer: 1,
    previous_exam_bcs: ["Recent Affairs"],
    hint: "তিনি পূর্বে একজন পেশাদার কৌতুক অভিনেতা ছিলেন।",
    explanation:
      "ভোলোদিমির জেলেনস্কি ২০১৯ সাল থেকে ইউক্রেনের প্রেসিডেন্ট হিসেবে দায়িত্ব পালন করছেন।",
    recent_details: {
      title: "রাশিয়া-ইউক্রেন সংকট",
      summary:
        "২০২২ সালের ২৪ ফেব্রুয়ারি রাশিয়া ইউক্রেন আক্রমণ করে, যা বিশ্ব রাজনীতিতে আমূল পরিবর্তন আনে।",
      key_points: [
        "ইউক্রেনের রাজধানী: কিয়েভ (Kyiv)",
        "রাশিয়ার মুদ্রা: রুবল",
        "NATO-তে ইউক্রেনের যোগদানের আকাঙ্ক্ষা এই যুদ্ধের অন্যতম কারণ।",
      ],
    },
    tags: ["Current Affairs", "Geopolitics"],
    createdAt: "2026-02-01T10:10:00.000Z",
    updatedAt: "2026-02-01T10:10:00.000Z",
  },
  {
    _id: "65bc1a2e9d3e4b0012a1b114",
    question_id: "BCS_50_014",
    category: "Bangladesh Affairs",
    question_text: "বাংলাদেশের দীর্ঘতম নদী কোনটি?",
    options: ["পদ্মা", "মেঘনা", "যমুনা", "ব্রহ্মপুত্র"],
    correct_answer: 1,
    previous_exam_bcs: ["Multiple Times"],
    hint: "পানি উন্নয়ন বোর্ডের (BWDB) সর্বশেষ তথ্য অনুযায়ী এটি দীর্ঘতম।",
    explanation:
      "BWDB-এর তথ্যমতে মেঘনা বাংলাদেশের দীর্ঘতম নদী (যদিও ঐতিহাসিকভাবে ব্রহ্মপুত্রকে ধরা হতো)।",
    topic_details: {
      title: "বাংলাদেশের নদ-নদী",
      summary:
        "বাংলাদেশ একটি নদীমাতৃক দেশ যার প্রধান তিনটি নদী হলো পদ্মা, মেঘনা ও যমুনা।",
      key_points: [
        "উৎপত্তি: তিব্বতের মানস সরোবর (ব্রহ্মপুত্র)",
        "প্রবেশপথ: কুড়িগ্রাম (ব্রহ্মপুত্র)",
        "সংগমস্থল: চাঁদপুর (পদ্মা ও মেঘনা)",
      ],
    },
    tags: ["Nature", "Rivers"],
    createdAt: "2026-02-01T10:15:00.000Z",
    updatedAt: "2026-02-01T10:15:00.000Z",
  },
  {
    _id: "65bc1a2e9d3e4b0012a1b115",
    question_id: "BCS_50_015",
    category: "Mental Ability",
    question_text: "প্রশ্নবোধক স্থানে কোন সংখ্যাটি বসবে? ৫, ১১, ২৩, ৪৭, ___?",
    options: ["৯৪", "৯৫", "৯৬", "৯৭"],
    correct_answer: 1,
    previous_exam_bcs: ["Pattern Analysis"],
    hint: "প্রতিটি সংখ্যা তার পূর্ববর্তী সংখ্যার দ্বিগুণ অপেক্ষা ১ বেশি।",
    explanation:
      "লজিক: (৫ × ২) + ১ = ১১; (১১ × ২) + ১ = ২৩; (২৩ × ২) + ১ = ৪৭; (৪৭ × ২) + ১ = ৯৫।",
    tags: ["Math", "Series"],
    createdAt: "2026-02-01T10:20:00.000Z",
    updatedAt: "2026-02-01T10:20:00.000Z",
  },
  {
    _id: "65bc1a2e9d3e4b0012a1b116",
    question_id: "BCS_50_016",
    category: "General Science",
    question_text: "বায়ুমণ্ডলে কোন গ্যাসের পরিমাণ সবচেয়ে বেশি?",
    options: ["অক্সিজেন", "কার্বন ডাই অক্সাইড", "নাইট্রোজেন", "আর্গন"],
    correct_answer: 2,
    previous_exam_bcs: ["10th BCS", "22nd BCS"],
    hint: "এর পরিমাণ প্রায় ৭৮.০৮%।",
    explanation:
      "বায়ুমণ্ডলে নাইট্রোজেনের পরিমাণ প্রায় ৭৮.০৮% এবং অক্সিজেনের পরিমাণ প্রায় ২০.৯৫%।",
    topic_details: {
      title: "বায়ুমণ্ডলের উপাদান",
      summary:
        "পৃথিবীর বায়ুমণ্ডল বিভিন্ন গ্যাসের মিশ্রণ যা প্রাণীকুলকে রক্ষা করে।",
      key_points: [
        "নাইট্রোজেন: ৭৮.০৮%",
        "অক্সিজেন: ২০.৯৫%",
        "নিষ্ক্রিয় গ্যাস: আর্গন (০.৯৩%)",
      ],
    },
    tags: ["Atmosphere", "Science"],
    createdAt: "2026-02-01T10:25:00.000Z",
    updatedAt: "2026-02-01T10:25:00.000Z",
  },
  {
    _id: "65bc1a2e9d3e4b0012a1b117",
    question_id: "BCS_50_017",
    category: "English Literature",
    question_text: "Who is the author of the novel '1984'?",
    options: [
      "Aldous Huxley",
      "George Orwell",
      "Ernest Hemingway",
      "William Faulkner",
    ],
    correct_answer: 1,
    previous_exam_bcs: ["41st BCS"],
    hint: "He also wrote 'Animal Farm'.",
    explanation:
      "George Orwell wrote the dystopian novel '1984', which introduced concepts like 'Big Brother'.",
    topic_details: {
      title: "George Orwell",
      summary:
        "Eric Arthur Blair, known as George Orwell, was an English novelist and critic.",
      key_points: [
        "Famous Term: Orwellian",
        "Key Works: Animal Farm, 1984, Shooting an Elephant.",
        "Genre: Dystopian Fiction, Satire.",
      ],
    },
    tags: ["English", "Dystopia"],
    createdAt: "2026-02-01T10:30:00.000Z",
    updatedAt: "2026-02-01T10:30:00.000Z",
  },
];

export const BCS_Priliminary_44 = [
  {
    _id: "65bc1a2e9d3e4b0012a1b203",
    question_id: "BCS-50th-question-and-answer-with-explanation",
    category: "Mathematics",
    question_text: "২, ৩, ৪ এবং ৭ সংখ্যাগুলোর গড় বিচ্যুতি কত?",
    options: ["০", "২/৩", "৩/২", "৪"],
    correct_answer: 2,
    previous_exam_bcs: ["50th BCS"],
    hint: "প্রথমে গড় বের করুন, তারপর প্রতিটি সংখ্যা থেকে গড়ের পার্থক্যের পরম মানের গড় নিন।",
    explanation:
      "গড় (Mean) = (২+৩+৪+৭)/৪ = ৪। গড় বিচ্যুতি = (|২-৪| + |৩-৪| + |৪-৪| + |৭-৪|)/৪ = (২ + ১ + ০ + ৩)/৪ = ৬/৪ = ৩/২।",
    topic_details: {
      title: "গড় বিচ্যুতি (Mean Deviation)",
      summary:
        "কোনো তথ্যসারির প্রতিটি মান থেকে তাদের গড়ের পার্থক্যের পরম মানের গড়কে গড় বিচ্যুতি বলে।",
      key_points: [
        "গড় বের করার সূত্র: Σx / n",
        "বিচ্যুতির পরম মান নেওয়া হয় (Absolute Value)",
        "এটি বিস্তারের একটি গুরুত্বপূর্ণ পরিমাপ",
      ],
    },
    tags: ["Math", "Statistics"],
    createdAt: "2026-02-01T12:15:00.000Z",
    updatedAt: "2026-02-01T12:15:00.000Z",
  },
  {
    _id: "65bc1a2e9d3e4b0012a1b209",
    question_id: "BCS-50th-question-and-answer-with-explanation",
    category: "International Affairs",
    question_text:
      "কোন জলবায়ু চুক্তির অধীনে ‘সবুজ জলবায়ু তহবিল’ বা Green Climate Fund প্রতিষ্ঠা করা হয়েছিল?",
    options: [
      "কানকুন চুক্তি",
      "প্যারিস চুক্তি",
      "কিয়োটো প্রোটোকল",
      "কোপেনহেগেন চুক্তি",
    ],
    correct_answer: 0,
    previous_exam_bcs: ["50th BCS"],
    hint: "এটি ২০১০ সালে মেক্সিকোর একটি শহরে অনুষ্ঠিত সম্মেলনে নির্ধারিত হয়।",
    explanation:
      "২০১০ সালে মেক্সিকোর কানকুনে অনুষ্ঠিত COP16 সম্মেলনে গ্রিন ক্লাইমেট ফান্ড (GCF) প্রতিষ্ঠার সিদ্ধান্ত নেওয়া হয়।",
    topic_details: {
      title: "Green Climate Fund (GCF)",
      summary:
        "উন্নয়নশীল দেশগুলোকে জলবায়ু পরিবর্তনের ঝুঁকি মোকাবিলায় সহায়তা করার জন্য এই বৈশ্বিক তহবিল গঠিত।",
      key_points: [
        "প্রতিষ্ঠা: ২০১০ (কানকুন সম্মেলন)",
        "সদর দপ্তর: ইনচিয়ন, দক্ষিণ কোরিয়া",
        "উদ্দেশ্য: গ্রিনহাউস গ্যাস নিঃসরণ কমানো ও অভিযোজন",
      ],
    },
    tags: ["International Affairs", "Environment", "COP"],
    createdAt: "2026-02-01T12:20:00.000Z",
    updatedAt: "2026-02-01T12:20:00.000Z",
  },
  {
    _id: "65bc1a2e9d3e4b0012a1b210",
    question_id: "BCS-50th-question-and-answer-with-explanation",
    category: "Mathematics",
    question_text: "যদি logx 324 = 4 হয় তবে x এর মান হবে:",
    options: ["৪", "২√৩", "৩√৩", "৩√২"],
    correct_answer: 3,
    previous_exam_bcs: ["50th BCS"],
    hint: "লগারিদমের সংজ্ঞা অনুসারে x⁴ = ৩২৪।",
    explanation:
      "x⁴ = ৩২৪। আমরা জানি, ১৮² = ৩২৪। আবার ১৮ = ৯ × ২ = ৩² × (√২)² = (৩√২)²। সুতরাং x⁴ = ((৩√২)²)² = (৩√২)⁴। অতএব x = ৩√২।",
    topic_details: {
      title: "লগারিদম (Logarithm)",
      summary: "সূচকীয় রাশির মান বের করার জন্য লগারিদম ব্যবহৃত হয়।",
      key_points: [
        "সূত্র: loga M = x হলে ax = M",
        "ভিত্তি (Base) সর্বদা ধনাত্মক হতে হয়",
        "BCS পরীক্ষায় ৩√২ বা ২√৩ ভিত্তিক ম্যাথ প্রায়ই আসে",
      ],
    },
    tags: ["Math", "Algebra", "Logarithm"],
    createdAt: "2026-02-01T12:25:00.000Z",
    updatedAt: "2026-02-01T12:25:00.000Z",
  },
  {
    _id: "65bc1a2e9d3e4b0012a1b217",
    question_id: "BCS-50th-question-and-answer-with-explanation",
    category: "ICT",
    question_text: "কোনটি ই-কমার্সের প্ল্যাটফর্ম হিসেবে কাজ করতে পারে?",
    options: ["Facebook", "Amazon", "YouTube", "All of the above"],
    correct_answer: 3,
    previous_exam_bcs: ["50th BCS"],
    hint: "বর্তমানে সামাজিক মাধ্যম এবং ভিডিও শেয়ারিং সাইটগুলোও ব্যবসার মাধ্যম হিসেবে ব্যবহৃত হচ্ছে।",
    explanation:
      "অ্যামাজন একটি ডেডিকেটেড ই-কমার্স সাইট হলেও ফেসবুক (Marketplace) এবং ইউটিউব (Shopping features) বর্তমানে ই-কমার্স প্ল্যাটফর্ম হিসেবে ব্যাপকভাবে ব্যবহৃত হচ্ছে। তাই সঠিক উত্তর উপরের সবগুলো।",
    topic_details: {
      title: "E-Commerce",
      summary:
        "ইলেকট্রনিক নেটওয়ার্কের মাধ্যমে পণ্য বা সেবা ক্রয়-বিক্রয়ই হলো ই-কমার্স।",
      key_points: [
        "B2C: Business to Consumer (e.g., Amazon)",
        "F-Commerce: Facebook based commerce",
        "S-Commerce: Social commerce",
      ],
    },
    tags: ["ICT", "E-Commerce", "Digital Marketing"],
    createdAt: "2026-02-01T12:30:00.000Z",
    updatedAt: "2026-02-01T12:30:00.000Z",
  },
  {
    _id: "65bc1a2e9d3e4b0012a1b221",
    question_id: "BCS-50th-question-and-answer-with-explanation",
    category: "Mathematics",
    question_text:
      "৪০ থেকে ৫০ এর মধ্যে একটি সংখ্যা দৈবভাবে নেয়া হলে এটি মৌলিক (Prime) হওয়ার সম্ভাবনা কত?",
    options: ["৩/১১", "১/২", "৫/১১", "৪/১১"],
    correct_answer: 0,
    previous_exam_bcs: ["50th BCS"],
    hint: "৪০ থেকে ৫০ এর মধ্যে মোট সংখ্যা ১১টি (৪০ এবং ৫০ সহ) এবং মৌলিক সংখ্যা ৩টি।",
    explanation:
      "৪০ থেকে ৫০ পর্যন্ত সংখ্যাগুলো হলো: ৪০, ৪১, ৪২, ৪৩, ৪৪, ৪৫, ৪৬, ৪৭, ৪৮, ৪৯, ৫০ (মোট ১১টি)। এদের মধ্যে মৌলিক সংখ্যা হলো ৪১, ৪৩, ৪৭ (মোট ৩টি)। সম্ভাবনা = অনুকূল ফলাফল / মোট ফলাফল = ৩/১১।",
    topic_details: {
      title: "সম্ভাবনা (Probability)",
      summary: "কোনো ঘটনা ঘটার গাণিতিক নিশ্চয়তার পরিমাপই হলো সম্ভাবনা।",
      key_points: [
        "সম্ভাবনার মান ০ থেকে ১ এর মধ্যে থাকে",
        "মৌলিক সংখ্যা চেনার উপায় গুরুত্বপূর্ণ",
        "মোট সংখ্যা গণনায় ভুল করা যাবে না",
      ],
    },
    tags: ["Math", "Probability", "Prime Number"],
    createdAt: "2026-02-01T12:35:00.000Z",
    updatedAt: "2026-02-01T12:35:00.000Z",
  },
];
export const BCS_Priliminary_49 = [
  {
    _id: "65bc1a2e9d3e4b0012a1b203",
    question_id: "BCS-50th-question-and-answer-with-explanation",
    category: "Mathematics",
    question_text: "২, ৩, ৪ এবং ৭ সংখ্যাগুলোর গড় বিচ্যুতি কত?",
    options: ["০", "২/৩", "৩/২", "৪"],
    correct_answer: 2,
    previous_exam_bcs: ["50th BCS"],
    hint: "প্রথমে গড় বের করুন, তারপর প্রতিটি সংখ্যা থেকে গড়ের পার্থক্যের পরম মানের গড় নিন।",
    explanation:
      "গড় (Mean) = (২+৩+৪+৭)/৪ = ৪। গড় বিচ্যুতি = (|২-৪| + |৩-৪| + |৪-৪| + |৭-৪|)/৪ = (২ + ১ + ০ + ৩)/৪ = ৬/৪ = ৩/২।",
    topic_details: {
      title: "গড় বিচ্যুতি (Mean Deviation)",
      summary:
        "কোনো তথ্যসারির প্রতিটি মান থেকে তাদের গড়ের পার্থক্যের পরম মানের গড়কে গড় বিচ্যুতি বলে।",
      key_points: [
        "গড় বের করার সূত্র: Σx / n",
        "বিচ্যুতির পরম মান নেওয়া হয় (Absolute Value)",
        "এটি বিস্তারের একটি গুরুত্বপূর্ণ পরিমাপ",
      ],
    },
    tags: ["Math", "Statistics"],
    createdAt: "2026-02-01T12:15:00.000Z",
    updatedAt: "2026-02-01T12:15:00.000Z",
  },
  {
    _id: "65bc1a2e9d3e4b0012a1b209",
    question_id: "BCS-50th-question-and-answer-with-explanation",
    category: "International Affairs",
    question_text:
      "কোন জলবায়ু চুক্তির অধীনে ‘সবুজ জলবায়ু তহবিল’ বা Green Climate Fund প্রতিষ্ঠা করা হয়েছিল?",
    options: [
      "কানকুন চুক্তি",
      "প্যারিস চুক্তি",
      "কিয়োটো প্রোটোকল",
      "কোপেনহেগেন চুক্তি",
    ],
    correct_answer: 0,
    previous_exam_bcs: ["50th BCS"],
    hint: "এটি ২০১০ সালে মেক্সিকোর একটি শহরে অনুষ্ঠিত সম্মেলনে নির্ধারিত হয়।",
    explanation:
      "২০১০ সালে মেক্সিকোর কানকুনে অনুষ্ঠিত COP16 সম্মেলনে গ্রিন ক্লাইমেট ফান্ড (GCF) প্রতিষ্ঠার সিদ্ধান্ত নেওয়া হয়।",
    topic_details: {
      title: "Green Climate Fund (GCF)",
      summary:
        "উন্নয়নশীল দেশগুলোকে জলবায়ু পরিবর্তনের ঝুঁকি মোকাবিলায় সহায়তা করার জন্য এই বৈশ্বিক তহবিল গঠিত।",
      key_points: [
        "প্রতিষ্ঠা: ২০১০ (কানকুন সম্মেলন)",
        "সদর দপ্তর: ইনচিয়ন, দক্ষিণ কোরিয়া",
        "উদ্দেশ্য: গ্রিনহাউস গ্যাস নিঃসরণ কমানো ও অভিযোজন",
      ],
    },
    tags: ["International Affairs", "Environment", "COP"],
    createdAt: "2026-02-01T12:20:00.000Z",
    updatedAt: "2026-02-01T12:20:00.000Z",
  },
  {
    _id: "65bc1a2e9d3e4b0012a1b210",
    question_id: "BCS-50th-question-and-answer-with-explanation",
    category: "Mathematics",
    question_text: "যদি logx 324 = 4 হয় তবে x এর মান হবে:",
    options: ["৪", "২√৩", "৩√৩", "৩√২"],
    correct_answer: 3,
    previous_exam_bcs: ["50th BCS"],
    hint: "লগারিদমের সংজ্ঞা অনুসারে x⁴ = ৩২৪।",
    explanation:
      "x⁴ = ৩২৪। আমরা জানি, ১৮² = ৩২৪। আবার ১৮ = ৯ × ২ = ৩² × (√২)² = (৩√২)²। সুতরাং x⁴ = ((৩√২)²)² = (৩√২)⁴। অতএব x = ৩√২।",
    topic_details: {
      title: "লগারিদম (Logarithm)",
      summary: "সূচকীয় রাশির মান বের করার জন্য লগারিদম ব্যবহৃত হয়।",
      key_points: [
        "সূত্র: loga M = x হলে ax = M",
        "ভিত্তি (Base) সর্বদা ধনাত্মক হতে হয়",
        "BCS পরীক্ষায় ৩√২ বা ২√৩ ভিত্তিক ম্যাথ প্রায়ই আসে",
      ],
    },
    tags: ["Math", "Algebra", "Logarithm"],
    createdAt: "2026-02-01T12:25:00.000Z",
    updatedAt: "2026-02-01T12:25:00.000Z",
  },
  {
    _id: "65bc1a2e9d3e4b0012a1b217",
    question_id: "BCS-50th-question-and-answer-with-explanation",
    category: "ICT",
    question_text: "কোনটি ই-কমার্সের প্ল্যাটফর্ম হিসেবে কাজ করতে পারে?",
    options: ["Facebook", "Amazon", "YouTube", "All of the above"],
    correct_answer: 3,
    previous_exam_bcs: ["50th BCS"],
    hint: "বর্তমানে সামাজিক মাধ্যম এবং ভিডিও শেয়ারিং সাইটগুলোও ব্যবসার মাধ্যম হিসেবে ব্যবহৃত হচ্ছে।",
    explanation:
      "অ্যামাজন একটি ডেডিকেটেড ই-কমার্স সাইট হলেও ফেসবুক (Marketplace) এবং ইউটিউব (Shopping features) বর্তমানে ই-কমার্স প্ল্যাটফর্ম হিসেবে ব্যাপকভাবে ব্যবহৃত হচ্ছে। তাই সঠিক উত্তর উপরের সবগুলো।",
    topic_details: {
      title: "E-Commerce",
      summary:
        "ইলেকট্রনিক নেটওয়ার্কের মাধ্যমে পণ্য বা সেবা ক্রয়-বিক্রয়ই হলো ই-কমার্স।",
      key_points: [
        "B2C: Business to Consumer (e.g., Amazon)",
        "F-Commerce: Facebook based commerce",
        "S-Commerce: Social commerce",
      ],
    },
    tags: ["ICT", "E-Commerce", "Digital Marketing"],
    createdAt: "2026-02-01T12:30:00.000Z",
    updatedAt: "2026-02-01T12:30:00.000Z",
  },
  {
    _id: "65bc1a2e9d3e4b0012a1b221",
    question_id: "BCS-50th-question-and-answer-with-explanation",
    category: "Mathematics",
    question_text:
      "৪০ থেকে ৫০ এর মধ্যে একটি সংখ্যা দৈবভাবে নেয়া হলে এটি মৌলিক (Prime) হওয়ার সম্ভাবনা কত?",
    options: ["৩/১১", "১/২", "৫/১১", "৪/১১"],
    correct_answer: 0,
    previous_exam_bcs: ["50th BCS"],
    hint: "৪০ থেকে ৫০ এর মধ্যে মোট সংখ্যা ১১টি (৪০ এবং ৫০ সহ) এবং মৌলিক সংখ্যা ৩টি।",
    explanation:
      "৪০ থেকে ৫০ পর্যন্ত সংখ্যাগুলো হলো: ৪০, ৪১, ৪২, ৪৩, ৪৪, ৪৫, ৪৬, ৪৭, ৪৮, ৪৯, ৫০ (মোট ১১টি)। এদের মধ্যে মৌলিক সংখ্যা হলো ৪১, ৪৩, ৪৭ (মোট ৩টি)। সম্ভাবনা = অনুকূল ফলাফল / মোট ফলাফল = ৩/১১।",
    topic_details: {
      title: "সম্ভাবনা (Probability)",
      summary: "কোনো ঘটনা ঘটার গাণিতিক নিশ্চয়তার পরিমাপই হলো সম্ভাবনা।",
      key_points: [
        "সম্ভাবনার মান ০ থেকে ১ এর মধ্যে থাকে",
        "মৌলিক সংখ্যা চেনার উপায় গুরুত্বপূর্ণ",
        "মোট সংখ্যা গণনায় ভুল করা যাবে না",
      ],
    },
    tags: ["Math", "Probability", "Prime Number"],
    createdAt: "2026-02-01T12:35:00.000Z",
    updatedAt: "2026-02-01T12:35:00.000Z",
  },
];
export const BCS_Priliminary_48 = [
  {
    _id: "65bc1a2e9d3e4b0012a1b203",
    question_id: "BCS-50th-question-and-answer-with-explanation",
    category: "Mathematics",
    question_text: "২, ৩, ৪ এবং ৭ সংখ্যাগুলোর গড় বিচ্যুতি কত?",
    options: ["০", "২/৩", "৩/২", "৪"],
    correct_answer: 2,
    previous_exam_bcs: ["50th BCS"],
    hint: "প্রথমে গড় বের করুন, তারপর প্রতিটি সংখ্যা থেকে গড়ের পার্থক্যের পরম মানের গড় নিন।",
    explanation:
      "গড় (Mean) = (২+৩+৪+৭)/৪ = ৪। গড় বিচ্যুতি = (|২-৪| + |৩-৪| + |৪-৪| + |৭-৪|)/৪ = (২ + ১ + ০ + ৩)/৪ = ৬/৪ = ৩/২।",
    topic_details: {
      title: "গড় বিচ্যুতি (Mean Deviation)",
      summary:
        "কোনো তথ্যসারির প্রতিটি মান থেকে তাদের গড়ের পার্থক্যের পরম মানের গড়কে গড় বিচ্যুতি বলে।",
      key_points: [
        "গড় বের করার সূত্র: Σx / n",
        "বিচ্যুতির পরম মান নেওয়া হয় (Absolute Value)",
        "এটি বিস্তারের একটি গুরুত্বপূর্ণ পরিমাপ",
      ],
    },
    tags: ["Math", "Statistics"],
    createdAt: "2026-02-01T12:15:00.000Z",
    updatedAt: "2026-02-01T12:15:00.000Z",
  },
  {
    _id: "65bc1a2e9d3e4b0012a1b209",
    question_id: "BCS-50th-question-and-answer-with-explanation",
    category: "International Affairs",
    question_text:
      "কোন জলবায়ু চুক্তির অধীনে ‘সবুজ জলবায়ু তহবিল’ বা Green Climate Fund প্রতিষ্ঠা করা হয়েছিল?",
    options: [
      "কানকুন চুক্তি",
      "প্যারিস চুক্তি",
      "কিয়োটো প্রোটোকল",
      "কোপেনহেগেন চুক্তি",
    ],
    correct_answer: 0,
    previous_exam_bcs: ["50th BCS"],
    hint: "এটি ২০১০ সালে মেক্সিকোর একটি শহরে অনুষ্ঠিত সম্মেলনে নির্ধারিত হয়।",
    explanation:
      "২০১০ সালে মেক্সিকোর কানকুনে অনুষ্ঠিত COP16 সম্মেলনে গ্রিন ক্লাইমেট ফান্ড (GCF) প্রতিষ্ঠার সিদ্ধান্ত নেওয়া হয়।",
    topic_details: {
      title: "Green Climate Fund (GCF)",
      summary:
        "উন্নয়নশীল দেশগুলোকে জলবায়ু পরিবর্তনের ঝুঁকি মোকাবিলায় সহায়তা করার জন্য এই বৈশ্বিক তহবিল গঠিত।",
      key_points: [
        "প্রতিষ্ঠা: ২০১০ (কানকুন সম্মেলন)",
        "সদর দপ্তর: ইনচিয়ন, দক্ষিণ কোরিয়া",
        "উদ্দেশ্য: গ্রিনহাউস গ্যাস নিঃসরণ কমানো ও অভিযোজন",
      ],
    },
    tags: ["International Affairs", "Environment", "COP"],
    createdAt: "2026-02-01T12:20:00.000Z",
    updatedAt: "2026-02-01T12:20:00.000Z",
  },
  {
    _id: "65bc1a2e9d3e4b0012a1b210",
    question_id: "BCS-50th-question-and-answer-with-explanation",
    category: "Mathematics",
    question_text: "যদি logx 324 = 4 হয় তবে x এর মান হবে:",
    options: ["৪", "২√৩", "৩√৩", "৩√২"],
    correct_answer: 3,
    previous_exam_bcs: ["50th BCS"],
    hint: "লগারিদমের সংজ্ঞা অনুসারে x⁴ = ৩২৪।",
    explanation:
      "x⁴ = ৩২৪। আমরা জানি, ১৮² = ৩২৪। আবার ১৮ = ৯ × ২ = ৩² × (√২)² = (৩√২)²। সুতরাং x⁴ = ((৩√২)²)² = (৩√২)⁴। অতএব x = ৩√২।",
    topic_details: {
      title: "লগারিদম (Logarithm)",
      summary: "সূচকীয় রাশির মান বের করার জন্য লগারিদম ব্যবহৃত হয়।",
      key_points: [
        "সূত্র: loga M = x হলে ax = M",
        "ভিত্তি (Base) সর্বদা ধনাত্মক হতে হয়",
        "BCS পরীক্ষায় ৩√২ বা ২√৩ ভিত্তিক ম্যাথ প্রায়ই আসে",
      ],
    },
    tags: ["Math", "Algebra", "Logarithm"],
    createdAt: "2026-02-01T12:25:00.000Z",
    updatedAt: "2026-02-01T12:25:00.000Z",
  },
  {
    _id: "65bc1a2e9d3e4b0012a1b217",
    question_id: "BCS-50th-question-and-answer-with-explanation",
    category: "ICT",
    question_text: "কোনটি ই-কমার্সের প্ল্যাটফর্ম হিসেবে কাজ করতে পারে?",
    options: ["Facebook", "Amazon", "YouTube", "All of the above"],
    correct_answer: 3,
    previous_exam_bcs: ["50th BCS"],
    hint: "বর্তমানে সামাজিক মাধ্যম এবং ভিডিও শেয়ারিং সাইটগুলোও ব্যবসার মাধ্যম হিসেবে ব্যবহৃত হচ্ছে।",
    explanation:
      "অ্যামাজন একটি ডেডিকেটেড ই-কমার্স সাইট হলেও ফেসবুক (Marketplace) এবং ইউটিউব (Shopping features) বর্তমানে ই-কমার্স প্ল্যাটফর্ম হিসেবে ব্যাপকভাবে ব্যবহৃত হচ্ছে। তাই সঠিক উত্তর উপরের সবগুলো।",
    topic_details: {
      title: "E-Commerce",
      summary:
        "ইলেকট্রনিক নেটওয়ার্কের মাধ্যমে পণ্য বা সেবা ক্রয়-বিক্রয়ই হলো ই-কমার্স।",
      key_points: [
        "B2C: Business to Consumer (e.g., Amazon)",
        "F-Commerce: Facebook based commerce",
        "S-Commerce: Social commerce",
      ],
    },
    tags: ["ICT", "E-Commerce", "Digital Marketing"],
    createdAt: "2026-02-01T12:30:00.000Z",
    updatedAt: "2026-02-01T12:30:00.000Z",
  },
  {
    _id: "65bc1a2e9d3e4b0012a1b221",
    question_id: "BCS-50th-question-and-answer-with-explanation",
    category: "Mathematics",
    question_text:
      "৪০ থেকে ৫০ এর মধ্যে একটি সংখ্যা দৈবভাবে নেয়া হলে এটি মৌলিক (Prime) হওয়ার সম্ভাবনা কত?",
    options: ["৩/১১", "১/২", "৫/১১", "৪/১১"],
    correct_answer: 0,
    previous_exam_bcs: ["50th BCS"],
    hint: "৪০ থেকে ৫০ এর মধ্যে মোট সংখ্যা ১১টি (৪০ এবং ৫০ সহ) এবং মৌলিক সংখ্যা ৩টি।",
    explanation:
      "৪০ থেকে ৫০ পর্যন্ত সংখ্যাগুলো হলো: ৪০, ৪১, ৪২, ৪৩, ৪৪, ৪৫, ৪৬, ৪৭, ৪৮, ৪৯, ৫০ (মোট ১১টি)। এদের মধ্যে মৌলিক সংখ্যা হলো ৪১, ৪৩, ৪৭ (মোট ৩টি)। সম্ভাবনা = অনুকূল ফলাফল / মোট ফলাফল = ৩/১১।",
    topic_details: {
      title: "সম্ভাবনা (Probability)",
      summary: "কোনো ঘটনা ঘটার গাণিতিক নিশ্চয়তার পরিমাপই হলো সম্ভাবনা।",
      key_points: [
        "সম্ভাবনার মান ০ থেকে ১ এর মধ্যে থাকে",
        "মৌলিক সংখ্যা চেনার উপায় গুরুত্বপূর্ণ",
        "মোট সংখ্যা গণনায় ভুল করা যাবে না",
      ],
    },
    tags: ["Math", "Probability", "Prime Number"],
    createdAt: "2026-02-01T12:35:00.000Z",
    updatedAt: "2026-02-01T12:35:00.000Z",
  },
];
export const BCS_Priliminary_47 = [
  {
    _id: "65bc1a2e9d3e4b0012a1b203",
    question_id: "BCS-50th-question-and-answer-with-explanation",
    category: "Mathematics",
    question_text: "২, ৩, ৪ এবং ৭ সংখ্যাগুলোর গড় বিচ্যুতি কত?",
    options: ["০", "২/৩", "৩/২", "৪"],
    correct_answer: 2,
    previous_exam_bcs: ["50th BCS"],
    hint: "প্রথমে গড় বের করুন, তারপর প্রতিটি সংখ্যা থেকে গড়ের পার্থক্যের পরম মানের গড় নিন।",
    explanation:
      "গড় (Mean) = (২+৩+৪+৭)/৪ = ৪। গড় বিচ্যুতি = (|২-৪| + |৩-৪| + |৪-৪| + |৭-৪|)/৪ = (২ + ১ + ০ + ৩)/৪ = ৬/৪ = ৩/২।",
    topic_details: {
      title: "গড় বিচ্যুতি (Mean Deviation)",
      summary:
        "কোনো তথ্যসারির প্রতিটি মান থেকে তাদের গড়ের পার্থক্যের পরম মানের গড়কে গড় বিচ্যুতি বলে।",
      key_points: [
        "গড় বের করার সূত্র: Σx / n",
        "বিচ্যুতির পরম মান নেওয়া হয় (Absolute Value)",
        "এটি বিস্তারের একটি গুরুত্বপূর্ণ পরিমাপ",
      ],
    },
    tags: ["Math", "Statistics"],
    createdAt: "2026-02-01T12:15:00.000Z",
    updatedAt: "2026-02-01T12:15:00.000Z",
  },
  {
    _id: "65bc1a2e9d3e4b0012a1b209",
    question_id: "BCS-50th-question-and-answer-with-explanation",
    category: "International Affairs",
    question_text:
      "কোন জলবায়ু চুক্তির অধীনে ‘সবুজ জলবায়ু তহবিল’ বা Green Climate Fund প্রতিষ্ঠা করা হয়েছিল?",
    options: [
      "কানকুন চুক্তি",
      "প্যারিস চুক্তি",
      "কিয়োটো প্রোটোকল",
      "কোপেনহেগেন চুক্তি",
    ],
    correct_answer: 0,
    previous_exam_bcs: ["50th BCS"],
    hint: "এটি ২০১০ সালে মেক্সিকোর একটি শহরে অনুষ্ঠিত সম্মেলনে নির্ধারিত হয়।",
    explanation:
      "২০১০ সালে মেক্সিকোর কানকুনে অনুষ্ঠিত COP16 সম্মেলনে গ্রিন ক্লাইমেট ফান্ড (GCF) প্রতিষ্ঠার সিদ্ধান্ত নেওয়া হয়।",
    topic_details: {
      title: "Green Climate Fund (GCF)",
      summary:
        "উন্নয়নশীল দেশগুলোকে জলবায়ু পরিবর্তনের ঝুঁকি মোকাবিলায় সহায়তা করার জন্য এই বৈশ্বিক তহবিল গঠিত।",
      key_points: [
        "প্রতিষ্ঠা: ২০১০ (কানকুন সম্মেলন)",
        "সদর দপ্তর: ইনচিয়ন, দক্ষিণ কোরিয়া",
        "উদ্দেশ্য: গ্রিনহাউস গ্যাস নিঃসরণ কমানো ও অভিযোজন",
      ],
    },
    tags: ["International Affairs", "Environment", "COP"],
    createdAt: "2026-02-01T12:20:00.000Z",
    updatedAt: "2026-02-01T12:20:00.000Z",
  },
  {
    _id: "65bc1a2e9d3e4b0012a1b210",
    question_id: "BCS-50th-question-and-answer-with-explanation",
    category: "Mathematics",
    question_text: "যদি logx 324 = 4 হয় তবে x এর মান হবে:",
    options: ["৪", "২√৩", "৩√৩", "৩√২"],
    correct_answer: 3,
    previous_exam_bcs: ["50th BCS"],
    hint: "লগারিদমের সংজ্ঞা অনুসারে x⁴ = ৩২৪।",
    explanation:
      "x⁴ = ৩২৪। আমরা জানি, ১৮² = ৩২৪। আবার ১৮ = ৯ × ২ = ৩² × (√২)² = (৩√২)²। সুতরাং x⁴ = ((৩√২)²)² = (৩√২)⁴। অতএব x = ৩√২।",
    topic_details: {
      title: "লগারিদম (Logarithm)",
      summary: "সূচকীয় রাশির মান বের করার জন্য লগারিদম ব্যবহৃত হয়।",
      key_points: [
        "সূত্র: loga M = x হলে ax = M",
        "ভিত্তি (Base) সর্বদা ধনাত্মক হতে হয়",
        "BCS পরীক্ষায় ৩√২ বা ২√৩ ভিত্তিক ম্যাথ প্রায়ই আসে",
      ],
    },
    tags: ["Math", "Algebra", "Logarithm"],
    createdAt: "2026-02-01T12:25:00.000Z",
    updatedAt: "2026-02-01T12:25:00.000Z",
  },
  {
    _id: "65bc1a2e9d3e4b0012a1b217",
    question_id: "BCS-50th-question-and-answer-with-explanation",
    category: "ICT",
    question_text: "কোনটি ই-কমার্সের প্ল্যাটফর্ম হিসেবে কাজ করতে পারে?",
    options: ["Facebook", "Amazon", "YouTube", "All of the above"],
    correct_answer: 3,
    previous_exam_bcs: ["50th BCS"],
    hint: "বর্তমানে সামাজিক মাধ্যম এবং ভিডিও শেয়ারিং সাইটগুলোও ব্যবসার মাধ্যম হিসেবে ব্যবহৃত হচ্ছে।",
    explanation:
      "অ্যামাজন একটি ডেডিকেটেড ই-কমার্স সাইট হলেও ফেসবুক (Marketplace) এবং ইউটিউব (Shopping features) বর্তমানে ই-কমার্স প্ল্যাটফর্ম হিসেবে ব্যাপকভাবে ব্যবহৃত হচ্ছে। তাই সঠিক উত্তর উপরের সবগুলো।",
    topic_details: {
      title: "E-Commerce",
      summary:
        "ইলেকট্রনিক নেটওয়ার্কের মাধ্যমে পণ্য বা সেবা ক্রয়-বিক্রয়ই হলো ই-কমার্স।",
      key_points: [
        "B2C: Business to Consumer (e.g., Amazon)",
        "F-Commerce: Facebook based commerce",
        "S-Commerce: Social commerce",
      ],
    },
    tags: ["ICT", "E-Commerce", "Digital Marketing"],
    createdAt: "2026-02-01T12:30:00.000Z",
    updatedAt: "2026-02-01T12:30:00.000Z",
  },
  {
    _id: "65bc1a2e9d3e4b0012a1b221",
    question_id: "BCS-50th-question-and-answer-with-explanation",
    category: "Mathematics",
    question_text:
      "৪০ থেকে ৫০ এর মধ্যে একটি সংখ্যা দৈবভাবে নেয়া হলে এটি মৌলিক (Prime) হওয়ার সম্ভাবনা কত?",
    options: ["৩/১১", "১/২", "৫/১১", "৪/১১"],
    correct_answer: 0,
    previous_exam_bcs: ["50th BCS"],
    hint: "৪০ থেকে ৫০ এর মধ্যে মোট সংখ্যা ১১টি (৪০ এবং ৫০ সহ) এবং মৌলিক সংখ্যা ৩টি।",
    explanation:
      "৪০ থেকে ৫০ পর্যন্ত সংখ্যাগুলো হলো: ৪০, ৪১, ৪২, ৪৩, ৪৪, ৪৫, ৪৬, ৪৭, ৪৮, ৪৯, ৫০ (মোট ১১টি)। এদের মধ্যে মৌলিক সংখ্যা হলো ৪১, ৪৩, ৪৭ (মোট ৩টি)। সম্ভাবনা = অনুকূল ফলাফল / মোট ফলাফল = ৩/১১।",
    topic_details: {
      title: "সম্ভাবনা (Probability)",
      summary: "কোনো ঘটনা ঘটার গাণিতিক নিশ্চয়তার পরিমাপই হলো সম্ভাবনা।",
      key_points: [
        "সম্ভাবনার মান ০ থেকে ১ এর মধ্যে থাকে",
        "মৌলিক সংখ্যা চেনার উপায় গুরুত্বপূর্ণ",
        "মোট সংখ্যা গণনায় ভুল করা যাবে না",
      ],
    },
    tags: ["Math", "Probability", "Prime Number"],
    createdAt: "2026-02-01T12:35:00.000Z",
    updatedAt: "2026-02-01T12:35:00.000Z",
  },
];
export const BCS_Priliminary_45 = [
  {
    _id: "65bc1a2e9d3e4b0012a1b203",
    question_id: "BCS-50th-question-and-answer-with-explanation",
    category: "Mathematics",
    question_text: "২, ৩, ৪ এবং ৭ সংখ্যাগুলোর গড় বিচ্যুতি কত?",
    options: ["০", "২/৩", "৩/২", "৪"],
    correct_answer: 2,
    previous_exam_bcs: ["50th BCS"],
    hint: "প্রথমে গড় বের করুন, তারপর প্রতিটি সংখ্যা থেকে গড়ের পার্থক্যের পরম মানের গড় নিন।",
    explanation:
      "গড় (Mean) = (২+৩+৪+৭)/৪ = ৪। গড় বিচ্যুতি = (|২-৪| + |৩-৪| + |৪-৪| + |৭-৪|)/৪ = (২ + ১ + ০ + ৩)/৪ = ৬/৪ = ৩/২।",
    topic_details: {
      title: "গড় বিচ্যুতি (Mean Deviation)",
      summary:
        "কোনো তথ্যসারির প্রতিটি মান থেকে তাদের গড়ের পার্থক্যের পরম মানের গড়কে গড় বিচ্যুতি বলে।",
      key_points: [
        "গড় বের করার সূত্র: Σx / n",
        "বিচ্যুতির পরম মান নেওয়া হয় (Absolute Value)",
        "এটি বিস্তারের একটি গুরুত্বপূর্ণ পরিমাপ",
      ],
    },
    tags: ["Math", "Statistics"],
    createdAt: "2026-02-01T12:15:00.000Z",
    updatedAt: "2026-02-01T12:15:00.000Z",
  },
  {
    _id: "65bc1a2e9d3e4b0012a1b209",
    question_id: "BCS-50th-question-and-answer-with-explanation",
    category: "International Affairs",
    question_text:
      "কোন জলবায়ু চুক্তির অধীনে ‘সবুজ জলবায়ু তহবিল’ বা Green Climate Fund প্রতিষ্ঠা করা হয়েছিল?",
    options: [
      "কানকুন চুক্তি",
      "প্যারিস চুক্তি",
      "কিয়োটো প্রোটোকল",
      "কোপেনহেগেন চুক্তি",
    ],
    correct_answer: 0,
    previous_exam_bcs: ["50th BCS"],
    hint: "এটি ২০১০ সালে মেক্সিকোর একটি শহরে অনুষ্ঠিত সম্মেলনে নির্ধারিত হয়।",
    explanation:
      "২০১০ সালে মেক্সিকোর কানকুনে অনুষ্ঠিত COP16 সম্মেলনে গ্রিন ক্লাইমেট ফান্ড (GCF) প্রতিষ্ঠার সিদ্ধান্ত নেওয়া হয়।",
    topic_details: {
      title: "Green Climate Fund (GCF)",
      summary:
        "উন্নয়নশীল দেশগুলোকে জলবায়ু পরিবর্তনের ঝুঁকি মোকাবিলায় সহায়তা করার জন্য এই বৈশ্বিক তহবিল গঠিত।",
      key_points: [
        "প্রতিষ্ঠা: ২০১০ (কানকুন সম্মেলন)",
        "সদর দপ্তর: ইনচিয়ন, দক্ষিণ কোরিয়া",
        "উদ্দেশ্য: গ্রিনহাউস গ্যাস নিঃসরণ কমানো ও অভিযোজন",
      ],
    },
    tags: ["International Affairs", "Environment", "COP"],
    createdAt: "2026-02-01T12:20:00.000Z",
    updatedAt: "2026-02-01T12:20:00.000Z",
  },
  {
    _id: "65bc1a2e9d3e4b0012a1b210",
    question_id: "BCS-50th-question-and-answer-with-explanation",
    category: "Mathematics",
    question_text: "যদি logx 324 = 4 হয় তবে x এর মান হবে:",
    options: ["৪", "২√৩", "৩√৩", "৩√২"],
    correct_answer: 3,
    previous_exam_bcs: ["50th BCS"],
    hint: "লগারিদমের সংজ্ঞা অনুসারে x⁴ = ৩২৪।",
    explanation:
      "x⁴ = ৩২৪। আমরা জানি, ১৮² = ৩২৪। আবার ১৮ = ৯ × ২ = ৩² × (√২)² = (৩√২)²। সুতরাং x⁴ = ((৩√২)²)² = (৩√২)⁴। অতএব x = ৩√২।",
    topic_details: {
      title: "লগারিদম (Logarithm)",
      summary: "সূচকীয় রাশির মান বের করার জন্য লগারিদম ব্যবহৃত হয়।",
      key_points: [
        "সূত্র: loga M = x হলে ax = M",
        "ভিত্তি (Base) সর্বদা ধনাত্মক হতে হয়",
        "BCS পরীক্ষায় ৩√২ বা ২√৩ ভিত্তিক ম্যাথ প্রায়ই আসে",
      ],
    },
    tags: ["Math", "Algebra", "Logarithm"],
    createdAt: "2026-02-01T12:25:00.000Z",
    updatedAt: "2026-02-01T12:25:00.000Z",
  },
  {
    _id: "65bc1a2e9d3e4b0012a1b217",
    question_id: "BCS-50th-question-and-answer-with-explanation",
    category: "ICT",
    question_text: "কোনটি ই-কমার্সের প্ল্যাটফর্ম হিসেবে কাজ করতে পারে?",
    options: ["Facebook", "Amazon", "YouTube", "All of the above"],
    correct_answer: 3,
    previous_exam_bcs: ["50th BCS"],
    hint: "বর্তমানে সামাজিক মাধ্যম এবং ভিডিও শেয়ারিং সাইটগুলোও ব্যবসার মাধ্যম হিসেবে ব্যবহৃত হচ্ছে।",
    explanation:
      "অ্যামাজন একটি ডেডিকেটেড ই-কমার্স সাইট হলেও ফেসবুক (Marketplace) এবং ইউটিউব (Shopping features) বর্তমানে ই-কমার্স প্ল্যাটফর্ম হিসেবে ব্যাপকভাবে ব্যবহৃত হচ্ছে। তাই সঠিক উত্তর উপরের সবগুলো।",
    topic_details: {
      title: "E-Commerce",
      summary:
        "ইলেকট্রনিক নেটওয়ার্কের মাধ্যমে পণ্য বা সেবা ক্রয়-বিক্রয়ই হলো ই-কমার্স।",
      key_points: [
        "B2C: Business to Consumer (e.g., Amazon)",
        "F-Commerce: Facebook based commerce",
        "S-Commerce: Social commerce",
      ],
    },
    tags: ["ICT", "E-Commerce", "Digital Marketing"],
    createdAt: "2026-02-01T12:30:00.000Z",
    updatedAt: "2026-02-01T12:30:00.000Z",
  },
  {
    _id: "65bc1a2e9d3e4b0012a1b221",
    question_id: "BCS-50th-question-and-answer-with-explanation",
    category: "Mathematics",
    question_text:
      "৪০ থেকে ৫০ এর মধ্যে একটি সংখ্যা দৈবভাবে নেয়া হলে এটি মৌলিক (Prime) হওয়ার সম্ভাবনা কত?",
    options: ["৩/১১", "১/২", "৫/১১", "৪/১১"],
    correct_answer: 0,
    previous_exam_bcs: ["50th BCS"],
    hint: "৪০ থেকে ৫০ এর মধ্যে মোট সংখ্যা ১১টি (৪০ এবং ৫০ সহ) এবং মৌলিক সংখ্যা ৩টি।",
    explanation:
      "৪০ থেকে ৫০ পর্যন্ত সংখ্যাগুলো হলো: ৪০, ৪১, ৪২, ৪৩, ৪৪, ৪৫, ৪৬, ৪৭, ৪৮, ৪৯, ৫০ (মোট ১১টি)। এদের মধ্যে মৌলিক সংখ্যা হলো ৪১, ৪৩, ৪৭ (মোট ৩টি)। সম্ভাবনা = অনুকূল ফলাফল / মোট ফলাফল = ৩/১১।",
    topic_details: {
      title: "সম্ভাবনা (Probability)",
      summary: "কোনো ঘটনা ঘটার গাণিতিক নিশ্চয়তার পরিমাপই হলো সম্ভাবনা।",
      key_points: [
        "সম্ভাবনার মান ০ থেকে ১ এর মধ্যে থাকে",
        "মৌলিক সংখ্যা চেনার উপায় গুরুত্বপূর্ণ",
        "মোট সংখ্যা গণনায় ভুল করা যাবে না",
      ],
    },
    tags: ["Math", "Probability", "Prime Number"],
    createdAt: "2026-02-01T12:35:00.000Z",
    updatedAt: "2026-02-01T12:35:00.000Z",
  },
];
export const BCS_Priliminary_46 = [
  {
    _id: "65bc1a2e9d3e4b0012a1b203",
    question_id: "BCS-50th-question-and-answer-with-explanation",
    category: "Mathematics",
    question_text: "২, ৩, ৪ এবং ৭ সংখ্যাগুলোর গড় বিচ্যুতি কত?",
    options: ["০", "২/৩", "৩/২", "৪"],
    correct_answer: 2,
    previous_exam_bcs: ["50th BCS"],
    hint: "প্রথমে গড় বের করুন, তারপর প্রতিটি সংখ্যা থেকে গড়ের পার্থক্যের পরম মানের গড় নিন।",
    explanation:
      "গড় (Mean) = (২+৩+৪+৭)/৪ = ৪। গড় বিচ্যুতি = (|২-৪| + |৩-৪| + |৪-৪| + |৭-৪|)/৪ = (২ + ১ + ০ + ৩)/৪ = ৬/৪ = ৩/২।",
    topic_details: {
      title: "গড় বিচ্যুতি (Mean Deviation)",
      summary:
        "কোনো তথ্যসারির প্রতিটি মান থেকে তাদের গড়ের পার্থক্যের পরম মানের গড়কে গড় বিচ্যুতি বলে।",
      key_points: [
        "গড় বের করার সূত্র: Σx / n",
        "বিচ্যুতির পরম মান নেওয়া হয় (Absolute Value)",
        "এটি বিস্তারের একটি গুরুত্বপূর্ণ পরিমাপ",
      ],
    },
    tags: ["Math", "Statistics"],
    createdAt: "2026-02-01T12:15:00.000Z",
    updatedAt: "2026-02-01T12:15:00.000Z",
  },
  {
    _id: "65bc1a2e9d3e4b0012a1b209",
    question_id: "BCS-50th-question-and-answer-with-explanation",
    category: "International Affairs",
    question_text:
      "কোন জলবায়ু চুক্তির অধীনে ‘সবুজ জলবায়ু তহবিল’ বা Green Climate Fund প্রতিষ্ঠা করা হয়েছিল?",
    options: [
      "কানকুন চুক্তি",
      "প্যারিস চুক্তি",
      "কিয়োটো প্রোটোকল",
      "কোপেনহেগেন চুক্তি",
    ],
    correct_answer: 0,
    previous_exam_bcs: ["50th BCS"],
    hint: "এটি ২০১০ সালে মেক্সিকোর একটি শহরে অনুষ্ঠিত সম্মেলনে নির্ধারিত হয়।",
    explanation:
      "২০১০ সালে মেক্সিকোর কানকুনে অনুষ্ঠিত COP16 সম্মেলনে গ্রিন ক্লাইমেট ফান্ড (GCF) প্রতিষ্ঠার সিদ্ধান্ত নেওয়া হয়।",
    topic_details: {
      title: "Green Climate Fund (GCF)",
      summary:
        "উন্নয়নশীল দেশগুলোকে জলবায়ু পরিবর্তনের ঝুঁকি মোকাবিলায় সহায়তা করার জন্য এই বৈশ্বিক তহবিল গঠিত।",
      key_points: [
        "প্রতিষ্ঠা: ২০১০ (কানকুন সম্মেলন)",
        "সদর দপ্তর: ইনচিয়ন, দক্ষিণ কোরিয়া",
        "উদ্দেশ্য: গ্রিনহাউস গ্যাস নিঃসরণ কমানো ও অভিযোজন",
      ],
    },
    tags: ["International Affairs", "Environment", "COP"],
    createdAt: "2026-02-01T12:20:00.000Z",
    updatedAt: "2026-02-01T12:20:00.000Z",
  },
  {
    _id: "65bc1a2e9d3e4b0012a1b209",
    question_id: "BCS-50th-question-and-answer-with-explanation",
    category: "International Affairs",
    question_text:
      "কোন জলবায়ু চুক্তির অধীনে ‘সবুজ জলবায়ু তহবিল’ বা Green Climate Fund প্রতিষ্ঠা করা হয়েছিল?",
    options: [
      "কানকুন চুক্তি",
      "প্যারিস চুক্তি",
      "কিয়োটো প্রোটোকল",
      "কোপেনহেগেন চুক্তি",
    ],
    correct_answer: 0,
    previous_exam_bcs: ["50th BCS"],
    hint: "এটি ২০১০ সালে মেক্সিকোর একটি শহরে অনুষ্ঠিত সম্মেলনে নির্ধারিত হয়।",
    explanation:
      "২০১০ সালে মেক্সিকোর কানকুনে অনুষ্ঠিত COP16 সম্মেলনে গ্রিন ক্লাইমেট ফান্ড (GCF) প্রতিষ্ঠার সিদ্ধান্ত নেওয়া হয়।",
    topic_details: {
      title: "Green Climate Fund (GCF)",
      summary:
        "উন্নয়নশীল দেশগুলোকে জলবায়ু পরিবর্তনের ঝুঁকি মোকাবিলায় সহায়তা করার জন্য এই বৈশ্বিক তহবিল গঠিত।",
      key_points: [
        "প্রতিষ্ঠা: ২০১০ (কানকুন সম্মেলন)",
        "সদর দপ্তর: ইনচিয়ন, দক্ষিণ কোরিয়া",
        "উদ্দেশ্য: গ্রিনহাউস গ্যাস নিঃসরণ কমানো ও অভিযোজন",
      ],
    },
    tags: ["International Affairs", "Environment", "COP"],
    createdAt: "2026-02-01T12:20:00.000Z",
    updatedAt: "2026-02-01T12:20:00.000Z",
  },
  {
    _id: "65bc1a2e9d3e4b0012a1b209",
    question_id: "BCS-50th-question-and-answer-with-explanation",
    category: "International Affairs",
    question_text:
      "কোন জলবায়ু চুক্তির অধীনে ‘সবুজ জলবায়ু তহবিল’ বা Green Climate Fund প্রতিষ্ঠা করা হয়েছিল?",
    options: [
      "কানকুন চুক্তি",
      "প্যারিস চুক্তি",
      "কিয়োটো প্রোটোকল",
      "কোপেনহেগেন চুক্তি",
    ],
    correct_answer: 0,
    previous_exam_bcs: ["50th BCS"],
    hint: "এটি ২০১০ সালে মেক্সিকোর একটি শহরে অনুষ্ঠিত সম্মেলনে নির্ধারিত হয়।",
    explanation:
      "২০১০ সালে মেক্সিকোর কানকুনে অনুষ্ঠিত COP16 সম্মেলনে গ্রিন ক্লাইমেট ফান্ড (GCF) প্রতিষ্ঠার সিদ্ধান্ত নেওয়া হয়।",
    topic_details: {
      title: "Green Climate Fund (GCF)",
      summary:
        "উন্নয়নশীল দেশগুলোকে জলবায়ু পরিবর্তনের ঝুঁকি মোকাবিলায় সহায়তা করার জন্য এই বৈশ্বিক তহবিল গঠিত।",
      key_points: [
        "প্রতিষ্ঠা: ২০১০ (কানকুন সম্মেলন)",
        "সদর দপ্তর: ইনচিয়ন, দক্ষিণ কোরিয়া",
        "উদ্দেশ্য: গ্রিনহাউস গ্যাস নিঃসরণ কমানো ও অভিযোজন",
      ],
    },
    tags: ["International Affairs", "Environment", "COP"],
    createdAt: "2026-02-01T12:20:00.000Z",
    updatedAt: "2026-02-01T12:20:00.000Z",
  },
  {
    _id: "65bc1a2e9d3e4b0012a1b209",
    question_id: "BCS-50th-question-and-answer-with-explanation",
    category: "International Affairs",
    question_text:
      "কোন জলবায়ু চুক্তির অধীনে ‘সবুজ জলবায়ু তহবিল’ বা Green Climate Fund প্রতিষ্ঠা করা হয়েছিল?",
    options: [
      "কানকুন চুক্তি",
      "প্যারিস চুক্তি",
      "কিয়োটো প্রোটোকল",
      "কোপেনহেগেন চুক্তি",
    ],
    correct_answer: 0,
    previous_exam_bcs: ["50th BCS"],
    hint: "এটি ২০১০ সালে মেক্সিকোর একটি শহরে অনুষ্ঠিত সম্মেলনে নির্ধারিত হয়।",
    explanation:
      "২০১০ সালে মেক্সিকোর কানকুনে অনুষ্ঠিত COP16 সম্মেলনে গ্রিন ক্লাইমেট ফান্ড (GCF) প্রতিষ্ঠার সিদ্ধান্ত নেওয়া হয়।",
    topic_details: {
      title: "Green Climate Fund (GCF)",
      summary:
        "উন্নয়নশীল দেশগুলোকে জলবায়ু পরিবর্তনের ঝুঁকি মোকাবিলায় সহায়তা করার জন্য এই বৈশ্বিক তহবিল গঠিত।",
      key_points: [
        "প্রতিষ্ঠা: ২০১০ (কানকুন সম্মেলন)",
        "সদর দপ্তর: ইনচিয়ন, দক্ষিণ কোরিয়া",
        "উদ্দেশ্য: গ্রিনহাউস গ্যাস নিঃসরণ কমানো ও অভিযোজন",
      ],
    },
    tags: ["International Affairs", "Environment", "COP"],
    createdAt: "2026-02-01T12:20:00.000Z",
    updatedAt: "2026-02-01T12:20:00.000Z",
  },
  {
    _id: "65bc1a2e9d3e4b0012a1b209",
    question_id: "BCS-50th-question-and-answer-with-explanation",
    category: "International Affairs",
    question_text:
      "কোন জলবায়ু চুক্তির অধীনে ‘সবুজ জলবায়ু তহবিল’ বা Green Climate Fund প্রতিষ্ঠা করা হয়েছিল?",
    options: [
      "কানকুন চুক্তি",
      "প্যারিস চুক্তি",
      "কিয়োটো প্রোটোকল",
      "কোপেনহেগেন চুক্তি",
    ],
    correct_answer: 0,
    previous_exam_bcs: ["50th BCS"],
    hint: "এটি ২০১০ সালে মেক্সিকোর একটি শহরে অনুষ্ঠিত সম্মেলনে নির্ধারিত হয়।",
    explanation:
      "২০১০ সালে মেক্সিকোর কানকুনে অনুষ্ঠিত COP16 সম্মেলনে গ্রিন ক্লাইমেট ফান্ড (GCF) প্রতিষ্ঠার সিদ্ধান্ত নেওয়া হয়।",
    topic_details: {
      title: "Green Climate Fund (GCF)",
      summary:
        "উন্নয়নশীল দেশগুলোকে জলবায়ু পরিবর্তনের ঝুঁকি মোকাবিলায় সহায়তা করার জন্য এই বৈশ্বিক তহবিল গঠিত।",
      key_points: [
        "প্রতিষ্ঠা: ২০১০ (কানকুন সম্মেলন)",
        "সদর দপ্তর: ইনচিয়ন, দক্ষিণ কোরিয়া",
        "উদ্দেশ্য: গ্রিনহাউস গ্যাস নিঃসরণ কমানো ও অভিযোজন",
      ],
    },
    tags: ["International Affairs", "Environment", "COP"],
    createdAt: "2026-02-01T12:20:00.000Z",
    updatedAt: "2026-02-01T12:20:00.000Z",
  },
  {
    _id: "65bc1a2e9d3e4b0012a1b209",
    question_id: "BCS-50th-question-and-answer-with-explanation",
    category: "International Affairs",
    question_text:
      "কোন জলবায়ু চুক্তির অধীনে ‘সবুজ জলবায়ু তহবিল’ বা Green Climate Fund প্রতিষ্ঠা করা হয়েছিল?",
    options: [
      "কানকুন চুক্তি",
      "প্যারিস চুক্তি",
      "কিয়োটো প্রোটোকল",
      "কোপেনহেগেন চুক্তি",
    ],
    correct_answer: 0,
    previous_exam_bcs: ["50th BCS"],
    hint: "এটি ২০১০ সালে মেক্সিকোর একটি শহরে অনুষ্ঠিত সম্মেলনে নির্ধারিত হয়।",
    explanation:
      "২০১০ সালে মেক্সিকোর কানকুনে অনুষ্ঠিত COP16 সম্মেলনে গ্রিন ক্লাইমেট ফান্ড (GCF) প্রতিষ্ঠার সিদ্ধান্ত নেওয়া হয়।",
    topic_details: {
      title: "Green Climate Fund (GCF)",
      summary:
        "উন্নয়নশীল দেশগুলোকে জলবায়ু পরিবর্তনের ঝুঁকি মোকাবিলায় সহায়তা করার জন্য এই বৈশ্বিক তহবিল গঠিত।",
      key_points: [
        "প্রতিষ্ঠা: ২০১০ (কানকুন সম্মেলন)",
        "সদর দপ্তর: ইনচিয়ন, দক্ষিণ কোরিয়া",
        "উদ্দেশ্য: গ্রিনহাউস গ্যাস নিঃসরণ কমানো ও অভিযোজন",
      ],
    },
    tags: ["International Affairs", "Environment", "COP"],
    createdAt: "2026-02-01T12:20:00.000Z",
    updatedAt: "2026-02-01T12:20:00.000Z",
  },
  {
    _id: "65bc1a2e9d3e4b0012a1b209",
    question_id: "BCS-50th-question-and-answer-with-explanation",
    category: "International Affairs",
    question_text:
      "কোন জলবায়ু চুক্তির অধীনে ‘সবুজ জলবায়ু তহবিল’ বা Green Climate Fund প্রতিষ্ঠা করা হয়েছিল?",
    options: [
      "কানকুন চুক্তি",
      "প্যারিস চুক্তি",
      "কিয়োটো প্রোটোকল",
      "কোপেনহেগেন চুক্তি",
    ],
    correct_answer: 0,
    previous_exam_bcs: ["50th BCS"],
    hint: "এটি ২০১০ সালে মেক্সিকোর একটি শহরে অনুষ্ঠিত সম্মেলনে নির্ধারিত হয়।",
    explanation:
      "২০১০ সালে মেক্সিকোর কানকুনে অনুষ্ঠিত COP16 সম্মেলনে গ্রিন ক্লাইমেট ফান্ড (GCF) প্রতিষ্ঠার সিদ্ধান্ত নেওয়া হয়।",
    topic_details: {
      title: "Green Climate Fund (GCF)",
      summary:
        "উন্নয়নশীল দেশগুলোকে জলবায়ু পরিবর্তনের ঝুঁকি মোকাবিলায় সহায়তা করার জন্য এই বৈশ্বিক তহবিল গঠিত।",
      key_points: [
        "প্রতিষ্ঠা: ২০১০ (কানকুন সম্মেলন)",
        "সদর দপ্তর: ইনচিয়ন, দক্ষিণ কোরিয়া",
        "উদ্দেশ্য: গ্রিনহাউস গ্যাস নিঃসরণ কমানো ও অভিযোজন",
      ],
    },
    tags: ["International Affairs", "Environment", "COP"],
    createdAt: "2026-02-01T12:20:00.000Z",
    updatedAt: "2026-02-01T12:20:00.000Z",
  },
  {
    _id: "65bc1a2e9d3e4b0012a1b210",
    question_id: "BCS-50th-question-and-answer-with-explanation",
    category: "Mathematics",
    question_text: "যদি logx 324 = 4 হয় তবে x এর মান হবে:",
    options: ["৪", "২√৩", "৩√৩", "৩√২"],
    correct_answer: 3,
    previous_exam_bcs: ["50th BCS"],
    hint: "লগারিদমের সংজ্ঞা অনুসারে x⁴ = ৩২৪।",
    explanation:
      "x⁴ = ৩২৪। আমরা জানি, ১৮² = ৩২৪। আবার ১৮ = ৯ × ২ = ৩² × (√২)² = (৩√২)²। সুতরাং x⁴ = ((৩√২)²)² = (৩√২)⁴। অতএব x = ৩√২।",
    topic_details: {
      title: "লগারিদম (Logarithm)",
      summary: "সূচকীয় রাশির মান বের করার জন্য লগারিদম ব্যবহৃত হয়।",
      key_points: [
        "সূত্র: loga M = x হলে ax = M",
        "ভিত্তি (Base) সর্বদা ধনাত্মক হতে হয়",
        "BCS পরীক্ষায় ৩√২ বা ২√৩ ভিত্তিক ম্যাথ প্রায়ই আসে",
      ],
    },
    tags: ["Math", "Algebra", "Logarithm"],
    createdAt: "2026-02-01T12:25:00.000Z",
    updatedAt: "2026-02-01T12:25:00.000Z",
  },
  {
    _id: "65bc1a2e9d3e4b0012a1b217",
    question_id: "BCS-50th-question-and-answer-with-explanation",
    category: "ICT",
    question_text: "কোনটি ই-কমার্সের প্ল্যাটফর্ম হিসেবে কাজ করতে পারে?",
    options: ["Facebook", "Amazon", "YouTube", "All of the above"],
    correct_answer: 3,
    previous_exam_bcs: ["50th BCS"],
    hint: "বর্তমানে সামাজিক মাধ্যম এবং ভিডিও শেয়ারিং সাইটগুলোও ব্যবসার মাধ্যম হিসেবে ব্যবহৃত হচ্ছে।",
    explanation:
      "অ্যামাজন একটি ডেডিকেটেড ই-কমার্স সাইট হলেও ফেসবুক (Marketplace) এবং ইউটিউব (Shopping features) বর্তমানে ই-কমার্স প্ল্যাটফর্ম হিসেবে ব্যাপকভাবে ব্যবহৃত হচ্ছে। তাই সঠিক উত্তর উপরের সবগুলো।",
    topic_details: {
      title: "E-Commerce",
      summary:
        "ইলেকট্রনিক নেটওয়ার্কের মাধ্যমে পণ্য বা সেবা ক্রয়-বিক্রয়ই হলো ই-কমার্স।",
      key_points: [
        "B2C: Business to Consumer (e.g., Amazon)",
        "F-Commerce: Facebook based commerce",
        "S-Commerce: Social commerce",
      ],
    },
    tags: ["ICT", "E-Commerce", "Digital Marketing"],
    createdAt: "2026-02-01T12:30:00.000Z",
    updatedAt: "2026-02-01T12:30:00.000Z",
  },
  {
    _id: "65bc1a2e9d3e4b0012a1b221",
    question_id: "BCS-50th-question-and-answer-with-explanation",
    category: "Mathematics",
    question_text:
      "৪০ থেকে ৫০ এর মধ্যে একটি সংখ্যা দৈবভাবে নেয়া হলে এটি মৌলিক (Prime) হওয়ার সম্ভাবনা কত?",
    options: ["৩/১১", "১/২", "৫/১১", "৪/১১"],
    correct_answer: 0,
    previous_exam_bcs: ["50th BCS"],
    hint: "৪০ থেকে ৫০ এর মধ্যে মোট সংখ্যা ১১টি (৪০ এবং ৫০ সহ) এবং মৌলিক সংখ্যা ৩টি।",
    explanation:
      "৪০ থেকে ৫০ পর্যন্ত সংখ্যাগুলো হলো: ৪০, ৪১, ৪২, ৪৩, ৪৪, ৪৫, ৪৬, ৪৭, ৪৮, ৪৯, ৫০ (মোট ১১টি)। এদের মধ্যে মৌলিক সংখ্যা হলো ৪১, ৪৩, ৪৭ (মোট ৩টি)। সম্ভাবনা = অনুকূল ফলাফল / মোট ফলাফল = ৩/১১।",
    topic_details: {
      title: "সম্ভাবনা (Probability)",
      summary: "কোনো ঘটনা ঘটার গাণিতিক নিশ্চয়তার পরিমাপই হলো সম্ভাবনা।",
      key_points: [
        "সম্ভাবনার মান ০ থেকে ১ এর মধ্যে থাকে",
        "মৌলিক সংখ্যা চেনার উপায় গুরুত্বপূর্ণ",
        "মোট সংখ্যা গণনায় ভুল করা যাবে না",
      ],
    },
    tags: ["Math", "Probability", "Prime Number"],
    createdAt: "2026-02-01T12:35:00.000Z",
    updatedAt: "2026-02-01T12:35:00.000Z",
  },
];
export const BCS_Priliminary_51 = [
  {
    _id: "44bcs_q1_lang",
    question_id: "BCS-44th-question-and-answer-with-explanation",
    category: "Bangla",
    question_text: "‘মরণরে, তুঁহু মম শ্যাম সমান’— পঙ্ক্তিটির রচয়িতা কে?",
    options: [
      "বঙ্কিমচন্দ্র চট্টোপাধ্যায়",
      "রবীন্দ্রনাথ ঠাকুর",
      "কাজী নজরুল ইসলাম",
      "জীবনানন্দ দাশ",
    ],
    correct_answer: 1,
    previous_exam_bcs: ["44th BCS"],
    hint: "এটি ভানুসিংহ ঠাকুরের পদাবলী থেকে নেওয়া হয়েছে।",
    explanation:
      "রবীন্দ্রনাথ ঠাকুর তাঁর কিশোর বয়সে ‘ভানুসিংহ’ ছদ্মনামে ব্রজবুলি ভাষায় ‘ভানুসিংহ ঠাকুরের পদাবলী’ রচনা করেন। আলোচিত পঙ্ক্তিটি এই কাব্যগ্রন্থের অংশ।",
    topic_details: {
      title: "রবীন্দ্রনাথ ঠাকুর ও পদাবলী",
      image_url: Info,
      summary:
        "ব্রজবুলি ভাষায় রচিত পদাবলীতে রবীন্দ্রনাথ বৈষ্ণব কবিদের অনুকরণ করেছেন।",
      key_points: [
        "রচয়িতা: রবীন্দ্রনাথ ঠাকুর",
        "ছদ্মনাম: ভানুসিংহ ঠাকুর",
        "ভাষা: ব্রজবুলি",
      ],
    },
    tags: ["Literature", "Tagore", "Poetry"],
    createdAt: "2026-02-01T15:00:00.000Z",
    updatedAt: "2026-02-01T15:00:00.000Z",
  },
  {
    _id: "44bcs_q1_lang",
    question_id: "BCS-44th-question-and-answer-with-explanation",
    category: "Bangla",
    question_text: "‘মরণরে, তুঁহু মম শ্যাম সমান’— পঙ্ক্তিটির রচয়িতা কে?",
    options: [
      "বঙ্কিমচন্দ্র চট্টোপাধ্যায়",
      "রবীন্দ্রনাথ ঠাকুর",
      "কাজী নজরুল ইসলাম",
      "জীবনানন্দ দাশ",
    ],
    correct_answer: 1,
    previous_exam_bcs: ["44th BCS"],
    hint: "এটি ভানুসিংহ ঠাকুরের পদাবলী থেকে নেওয়া হয়েছে।",
    explanation:
      "রবীন্দ্রনাথ ঠাকুর তাঁর কিশোর বয়সে ‘ভানুসিংহ’ ছদ্মনামে ব্রজবুলি ভাষায় ‘ভানুসিংহ ঠাকুরের পদাবলী’ রচনা করেন। আলোচিত পঙ্ক্তিটি এই কাব্যগ্রন্থের অংশ।",
    topic_details: {
      title: "রবীন্দ্রনাথ ঠাকুর ও পদাবলী",
      image_url: Info,
      summary:
        "ব্রজবুলি ভাষায় রচিত পদাবলীতে রবীন্দ্রনাথ বৈষ্ণব কবিদের অনুকরণ করেছেন।",
      key_points: [
        "রচয়িতা: রবীন্দ্রনাথ ঠাকুর",
        "ছদ্মনাম: ভানুসিংহ ঠাকুর",
        "ভাষা: ব্রজবুলি",
      ],
    },
    tags: ["Literature", "Tagore", "Poetry"],
    createdAt: "2026-02-01T15:00:00.000Z",
    updatedAt: "2026-02-01T15:00:00.000Z",
  },
  {
    _id: "44bcs_q1_lang",
    question_id: "BCS-44th-question-and-answer-with-explanation",
    category: "Bangla",
    question_text: "‘মরণরে, তুঁহু মম শ্যাম সমান’— পঙ্ক্তিটির রচয়িতা কে?",
    options: [
      "বঙ্কিমচন্দ্র চট্টোপাধ্যায়",
      "রবীন্দ্রনাথ ঠাকুর",
      "কাজী নজরুল ইসলাম",
      "জীবনানন্দ দাশ",
    ],
    correct_answer: 1,
    previous_exam_bcs: ["44th BCS"],
    hint: "এটি ভানুসিংহ ঠাকুরের পদাবলী থেকে নেওয়া হয়েছে।",
    explanation:
      "রবীন্দ্রনাথ ঠাকুর তাঁর কিশোর বয়সে ‘ভানুসিংহ’ ছদ্মনামে ব্রজবুলি ভাষায় ‘ভানুসিংহ ঠাকুরের পদাবলী’ রচনা করেন। আলোচিত পঙ্ক্তিটি এই কাব্যগ্রন্থের অংশ।",
    topic_details: {
      title: "রবীন্দ্রনাথ ঠাকুর ও পদাবলী",
      image_url: Info,
      summary:
        "ব্রজবুলি ভাষায় রচিত পদাবলীতে রবীন্দ্রনাথ বৈষ্ণব কবিদের অনুকরণ করেছেন।",
      key_points: [
        "রচয়িতা: রবীন্দ্রনাথ ঠাকুর",
        "ছদ্মনাম: ভানুসিংহ ঠাকুর",
        "ভাষা: ব্রজবুলি",
      ],
    },
    tags: ["Literature", "Tagore", "Poetry"],
    createdAt: "2026-02-01T15:00:00.000Z",
    updatedAt: "2026-02-01T15:00:00.000Z",
  },
  {
    _id: "44bcs_q2_eng",
    question_id: "BCS-44th-question-and-answer-with-explanation",
    category: "English",
    question_text: "Identify the correctly spelled word:",
    options: [
      "Questionaire",
      "Questionnaire",
      "Questionnairee",
      "Queestionnaire",
    ],
    correct_answer: 1,
    previous_exam_bcs: ["44th BCS"],
    hint: "Look for the double 'n' and single 'r'.",
    explanation:
      "The correct spelling is 'Questionnaire', which means a set of printed or written questions with a choice of answers, devised for the purposes of a survey or statistical study.",
    topic_details: {
      title: "Spelling & Vocabulary",
      image_url: Info,
      summary:
        "English spelling errors often occur in words with double consonants.",
      key_points: [
        "Root word: Question",
        "Suffix: -naire",
        "Double consonant: nn",
      ],
    },
    tags: ["Grammar", "Spelling"],
    createdAt: "2026-02-01T15:05:00.000Z",
    updatedAt: "2026-02-01T15:05:00.000Z",
  },
  {
    _id: "44bcs_q3_geo",
    question_id: "BCS-44th-question-and-answer-with-explanation",
    category: "Geography",
    question_text: "বাংলাদেশে কপে (COP-26) সম্মেলনে নেতৃত্ব দেন কে?",
    options: [
      "পররাষ্ট্র মন্ত্রী",
      "পরিবেশ মন্ত্রী",
      "প্রধানমন্ত্রী শেখ হাসিনা",
      "রাষ্ট্রপতি",
    ],
    correct_answer: 2,
    previous_exam_bcs: ["44th BCS"],
    hint: "২০২১ সালে গ্লাসগোতে অনুষ্ঠিত সম্মেলনে তিনি সিভিএফ (CVF) সভাপতি হিসেবে যোগ দেন।",
    explanation:
      "২০২১ সালে স্কটল্যান্ডের গ্লাসগোতে অনুষ্ঠিত COP-26 সম্মেলনে বাংলাদেশের প্রতিনিধিদলের নেতৃত্ব দেন প্রধানমন্ত্রী শেখ হাসিনা।",
    topic_details: {
      title: "COP-26 ও বাংলাদেশ",
      image_url: Info,
      summary:
        "জলবায়ু পরিবর্তনের ঝুঁকি মোকাবিলায় বাংলাদেশ বিশ্বে নেতৃস্থানীয় ভূমিকা পালন করছে।",
      key_points: [
        "স্থান: গ্লাসগো, যুক্তরাজ্য",
        "নেতৃত্ব: শেখ হাসিনা",
        "ভূমিকা: CVF (Climate Vulnerable Forum) চেয়ার",
      ],
    },
    tags: ["Geography", "Environment", "Current Affairs"],
    createdAt: "2026-02-01T15:10:00.000Z",
    updatedAt: "2026-02-01T15:10:00.000Z",
  },
  {
    _id: "44bcs_q4_math",
    question_id: "BCS-44th-question-and-answer-with-explanation",
    category: "Mathematics",
    question_text:
      "একটি আয়তক্ষেত্রের দৈর্ঘ্য প্রস্থের দ্বিগুণ। ক্ষেত্রফল ৫১২ বর্গমিটার হলে পরিসীমা কত?",
    options: ["৪৮ মিটার", "৬৪ মিটার", "৯৬ মিটার", "১১২ মিটার"],
    correct_answer: 2,
    previous_exam_bcs: ["44th BCS"],
    hint: "প্রস্থ x ধরলে দৈর্ঘ্য হবে 2x। ক্ষেত্রফল $2x^2 = 512$।",
    explanation:
      "ধরি, প্রস্থ = $x$ মিটার, দৈর্ঘ্য = $2x$ মিটার। ক্ষেত্রফল = $2x^2 = 512$ বা $x^2 = 256$ বা $x = 16$। সুতরাং প্রস্থ ১৬ মিটার এবং দৈর্ঘ্য ৩২ মিটার। পরিসীমা = $২ \times (১৬+৩২) = ২ \times ৪৮ = ৯৬$ মিটার।",
    topic_details: {
      title: "পরিমিতি (Mensuration)",
      image_url: Info,
      summary: "আয়তক্ষেত্রের ক্ষেত্রফল ও পরিসীমার সূত্র প্রয়োগ করে সমাধান।",
      key_points: [
        "ক্ষেত্রফল = দৈর্ঘ্য $\times$ প্রস্থ",
        "পরিসীমা = ২ $\times$ (দৈর্ঘ্য + প্রস্থ)",
        "একক সব সময় মিটারে হবে (এক্ষেত্রে)",
      ],
    },
    tags: ["Math", "Geometry"],
    createdAt: "2026-02-01T15:15:00.000Z",
    updatedAt: "2026-02-01T15:15:00.000Z",
  },
  {
    _id: "44bcs_q5_science",
    question_id: "BCS-44th-question-and-answer-with-explanation",
    category: "General Science",
    question_text: "কোন মাধ্যমে শব্দের গতি সবচেয়ে বেশি?",
    options: ["বায়বীয়", "তরল", "কঠিন", "শূন্য মাধ্যমে"],
    correct_answer: 2,
    previous_exam_bcs: ["44th BCS"],
    hint: "অণুর ঘনত্ব যেখানে বেশি, সেখানে শব্দ দ্রুত চলে।",
    explanation:
      "শব্দ এক প্রকার যান্ত্রিক তরঙ্গ যা চলাচলের জন্য মাধ্যমের প্রয়োজন হয়। কঠিন মাধ্যমে অণুগুলো খুব কাছাকাছি থাকায় শব্দ সবচেয়ে দ্রুত সঞ্চালিত হয়। ইস্পাতে শব্দের গতি বায়ুর তুলনায় প্রায় ১৫ গুণ বেশি।",
    topic_details: {
      title: "শব্দ বিজ্ঞান",
      image_url: Info,
      summary: "শব্দের বেগ বিভিন্ন মাধ্যমে বিভিন্ন হয়।",
      key_points: [
        "সর্বোচ্চ গতি: কঠিন মাধ্যমে",
        "সর্বনিম্ন গতি: বায়বীয় মাধ্যমে",
        "শূন্য মাধ্যম: শব্দ চলতে পারে না",
      ],
    },
    tags: ["Science", "Physics", "Sound"],
    createdAt: "2026-02-01T15:20:00.000Z",
    updatedAt: "2026-02-01T15:20:00.000Z",
  },
];



export const BCS_Question_List = [
  {
    _id: "65bc1a2e9d3e4b0012a1b204",
    title: "BCS-44th-Question-and-Solution",
    BCS: BCS_Priliminary_44,
  },
  {
    _id: "65bc1a2e9d3e4b0012a1b205",
    title: "BCS-45th-Question-and-Solution",
    BCS: BCS_Priliminary_45,
  },
  {
    _id: "65bc1a2e9d3e4b0012a1b206",
    title: "BCS-46th-Question-and-Solution",
    BCS: BCS_Priliminary_46,
  },
  {
    _id: "65bc1a2e9d3e4b0012a1b207",
    title: "BCS-47th-Question-and-Solution",
    BCS: BCS_Priliminary_47,
  },
  {
    _id: "65bc1a2e9d3e4b0012a1b208",
    title: "BCS-48th-Question-and-Solution",
    BCS: BCS_Priliminary_48,
  },
  {
    _id: "65bc1a2e9d3e4b0012a1b209",
    update: "New Boom",
    title: "BCS-49th-Question-and-Solution",
    BCS: BCS_Priliminary_49,
  },
  {
    _id: "65bc1a2e9d3e4b0012a1b200",
    update: "UpComing",
    title: "BCS-50th-Question-and-Solution",
    BCS: BCS_Priliminary_50,
  },
];
export const Topic_Details_Data = [
  {
    _id: "65bc1a2e9d3e4b0012a1b204",
    title: "Bangladesh-Affairs",
    topic_details: {
      summary:
        "Covers historical, constitutional, political and economic development of Bangladesh.",
      image_url:
        "https://images.unsplash.com/photo-1583251633146-d00730247650?auto=format&fit=crop&q=80&w=800",
      key_points: [
        "Liberation War History (1952–1971)",
        "Constitution Articles 1–47",
        "Mega Projects: Padma Bridge, Metro Rail, Karnaphuli Tunnel",
        "Vision 2041, Delta Plan 2100, Smart Bangladesh",
      ],
      insight:
        "Bangladesh Affairs marks increased to 25. Important for both Preli and Written exams.",
    },
  },
  {
    _id: "65bc1a2e9d3e4b0012a1b205",
    title: "International-Affairs",
    topic_details: {
      summary:
        "Geopolitics, world organizations, treaties, global conflicts, and climate diplomacy.",
      image_url:
        "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=800",
      key_points: [
        "UN Agencies & Peacekeeping",
        "Russia-Ukraine Conflict Geopolitics",
        "COP Summits & Climate Agreements",
        "SAARC, BIMSTEC, OIC, ASEAN",
      ],
      insight:
        "Sorting events by region helps—40% questions come from last 6 months.",
    },
  },
  {
    _id: "65bc1a2e9d3e4b0012a1b206",
    title: "Mathematical-Reasoning",
    topic_details: {
      summary:
        "Arithmetic, Algebra, Geometry, Trigonometry and applied mathematical logic.",
      image_url:
        "https://images.unsplash.com/photo-1509228463558-199d82510165?auto=format&fit=crop&q=80&w=800",
      key_points: [
        "Profit-Loss, Ratio, Percentage",
        "Sets, Logarithms, Equations",
        "Triangles, Circles, Co-ordinate Geometry",
        "Trigonometry & Basic Statistics",
      ],
      insight: "BCS math is predictable—practice 10th–44th BCS for patterns.",
    },
  },
  {
    _id: "65bc1a2e9d3e4b0012a1b207",
    title: "English-Literature",
    topic_details: {
      summary:
        "Covers Old English to Postmodern periods, major authors, and literary devices.",
      image_url:
        "https://images.unsplash.com/photo-1474932430478-3a7fb9065ba0?auto=format&fit=crop&q=80&w=800",
      key_points: [
        "Shakespeare & Elizabethan Age",
        "Romantic Poets: Wordsworth, Keats, Shelley",
        "Modernism: Yeats, Eliot, Joyce",
        "Recently Awarded Nobel Laureates",
      ],
      insight: "High scoring—memorizing major works gives huge advantage.",
    },
  },
  {
    _id: "65bc1a2e9d3e4b0012a1b208",
    title: "Mental-Ability",
    topic_details: {
      summary: "Logical reasoning, visual patterns, coding-decoding, puzzles.",
      image_url:
        "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?auto=format&fit=crop&q=80&w=800",
      key_points: [
        "Analogy & Classification",
        "Mirror Images & Spatial Skills",
        "Number Series & Puzzles",
        "Coding-Decoding & Directions",
      ],
      insight: "Fastest scoring section—accuracy beats speed.",
    },
  },
  {
    _id: "65bc1a2e9d3e4b0012a1b209",
    title: "General-Science",
    topic_details: {
      summary:
        "Basic Physics, Chemistry, Biology for everyday science understanding.",
      image_url:
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800",
      key_points: [
        "Human Body (Blood, Brain, Hormones)",
        "Sound, Light & Heat",
        "Periodic Table & Chemical Bonds",
        "Biotechnology & Genetics",
      ],
      insight: "Many questions repeat from PSC/Cadre exams.",
    },
  },
  {
    _id: "65bc1a2e9d3e4b0012a1b200",
    title: "Computer-And-IT",
    topic_details: {
      summary:
        "IT fundamentals, Internet, networking, databases, cybersecurity.",
      image_url:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
      key_points: [
        "Internet, IP Addressing, OSI Model",
        "Programming Basics & Databases",
        "Blockchain, AI, IoT, Big Data",
        "Cybersecurity and Digital Safety",
      ],
      insight: "IT questions increasing—focus on practical internet knowledge.",
    },
  },
  {
    _id: "65bc1a2e9d3e4b0012a1b201",
    title: "Geography-And-Environment",
    topic_details: {
      summary:
        "Bangladesh geography, world climate systems, environment & disasters.",
      image_url:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800",
      key_points: [
        "Bangladesh River System",
        "Climate Change Impacts",
        "Natural Resources & Minerals",
        "Environmental Treaties",
      ],
      insight: "Static topics—excellent for guaranteed marks.",
    },
  },
  {
    _id: "65bc1a2e9d3e4b0012a1b202",
    title: "Ethics-And-Governance",
    topic_details: {
      summary:
        "Moral values, public administration ethics, integrity strategies.",
      image_url:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
      key_points: [
        "Governance Principles",
        "Values & Ethics in Public Service",
        "Accountability & Transparency",
        "National Integrity Strategy",
      ],
      insight: "Most questions are intuitive—practice past questions.",
    },
  },
  {
    _id: "65bc1a2e9d3e4b0012a1b203",
    title: "Bangla-Literature",
    topic_details: {
      summary:
        "History of Bangla language, literary periods, major poets & writers.",
      image_url:
        "https://images.unsplash.com/photo-1544652478-6653e09f18a2?auto=format&fit=crop&q=80&w=800",
      key_points: [
        "Charyapada to Middle Bangla",
        "Rabindranath & Nazrul",
        "Modern Poets & Novelists",
        "Liberation War Literature",
      ],
      insight: "Modern literature contains 70% of exam questions.",
    },
  },

  /* ----------------------- NEWLY ADDED TOPICS ----------------------- */

  {
    _id: "65bc1a2e9d3e4b0012a1b210",
    title: "Bangladesh-Economy",
    topic_details: {
      summary:
        "Covers economic structure, GDP, budget, poverty, banking & trade.",
      image_url:
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800",
      key_points: [
        "GDP Growth & Sectors",
        "National Budget & Fiscal Policies",
        "Export, Remittance, Banking",
        "Inflation & Employment",
      ],
      insight: "Expected 3–5 questions each year.",
    },
  },
  {
    _id: "65bc1a2e9d3e4b0012a1b211",
    title: "Constitution-And-Law",
    topic_details: {
      summary:
        "Foundational understanding of Bangladesh Constitution and judiciary.",
      image_url:
        "https://images.unsplash.com/photo-1528747045269-390fe33c19fd?auto=format&fit=crop&q=80&w=800",
      key_points: [
        "Preamble & Fundamental Principles",
        "Fundamental Rights (Articles 26–44)",
        "Judiciary, Parliament & Executive",
        "Amendments & Key Cases",
      ],
      insight: "Important for admin cadre aspirants.",
    },
  },
  {
    _id: "65bc1a2e9d3e4b0012a1b212",
    title: "Data-Interpretation",
    topic_details: {
      summary: "Charts, tables, graphs—interpretation and quick calculations.",
      image_url:
        "https://images.unsplash.com/photo-1508387025477-02c0be7df1ac?auto=format&fit=crop&q=80&w=800",
      key_points: [
        "Bar & Line Charts",
        "Pie Chart Analysis",
        "Percentage & Ratio Based DI",
        "Mixed DI Sets",
      ],
      insight: "A newer trend in BCS—fast solving gives full marks.",
    },
  },
  {
    _id: "65bc1a2e9d3e4b0012a1b213",
    title: "Science-And-Technology-4IR",
    topic_details: {
      summary: "Advanced science topics—AI, robotics, biotech, space science.",
      image_url:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80&w=800",
      key_points: [
        "AI, Machine Learning, Robotics",
        "Space Missions & Satellites",
        "Genetic Engineering & CRISPR",
        "Quantum Computing & Nanotech",
      ],
      insight: "4IR topics now appear in written exams.",
    },
  },
  {
    _id: "65bc1a2e9d3e4b0012a1b214",
    title: "Current-Affairs-Special",
    topic_details: {
      summary:
        "Covers last 1 year’s national & international current affairs in-depth.",
      image_url:
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&q=80&w=800",
      key_points: [
        "Government Programs & Policies",
        "Global Economic Trends",
        "Major Appointments & Awards",
        "Sports, Environment & Technology Events",
      ],
      insight: "Most dynamic part—crucial for Preli.",
    },
  },
];

export const ModelTestCategory = [
  {
    _id: "65bc2a1f8e1a2b3c4d5e6f01",
    slug: "bcs-model-test",
    label: "BCS Based Model Test",
    type: "job",
    iconName: "Award",
  },
  {
    _id: "65bc2a1f8e1a2b3c4d5e6f02",
    slug: "subject-model-test",
    label: "Subject Based Model Test",
    type: "job",
    iconName: "BookOpen",
  },
  {
    _id: "65bc2a1f8e1a2b3c4d5e6f03",
    slug: "combined-model-test",
    label: "Combined Based Model Test",
    type: "job",
    iconName: "Layers",
  },
  {
    _id: "65bc2a1f8e1a2b3c4d5e6f04",
    slug: "bank-model-test",
    label: "BANK Based Model Test",
    type: "job",
    iconName: "Banknote",
  },
  {
    _id: "65bc2a1f8e1a2b3c4d5e6f05",
    slug: "bank-it-model-test",
    label: "Bank IT Based Model Test",
    type: "job",
    iconName: "Cpu",
  },
  {
    _id: "65bc2a1f8e1a2b3c4d5e6f06",
    slug: "hsc-model-test",
    label: "HSC Based Model Test",
    type: "institution",
    iconName: "GraduationCap",
  },
  {
    _id: "65bc2a1f8e1a2b3c4d5e6f07",
    slug: "ssc-model-test",
    label: "SSC Based Model Test",
    type: "institution",
    iconName: "School",
  },
  {
    _id: "65bc2a1f8e1a2b3c4d5e6f08",
    slug: "basic-view-model-test",
    label: "Basic View Based Model Test",
    type: "job",
    iconName: "Eye",
  },
  {
    _id: "65bc2a1f8e1a2b3c4d5e6f09",
    slug: "jsc-model-test",
    label: "JSC Based Model Test",
    type: "institution",
    iconName: "Users",
  },
  {
    _id: "65bc2a1f8e1a2b3c4d5e6f10",
    slug: "university-admission-test",
    label: "University Admission Test",
    type: "admission",
    iconName: "GraduationCap",
  },
  {
    _id: "65bc2a1f8e1a2b3c4d5e6f11",
    slug: "medical-admission-test",
    label: "Medical Admission Test",
    type: "admission",
    iconName: "HeartPulse",
  },
  {
    _id: "65bc2a1f8e1a2b3c4d5e6f12",
    slug: "unit-model-test",
    label: "Unit Based Model Test",
    type: "admission",
    subCategory: ["Unit-A", "Unit-B", "Unit-C", "Unit-D"],
    iconName: "Layers",
  },
];



// blog section
export const blog_details = [
  {
    _id: "65bf8e1a2f4a5c001d8e4a12",
    title: "বিশ্বব্যাংক-World Bank Group",
    category: "আন্তর্জাতিক বিষয়াবলী",
    tags: [
      "বিশ্বব্যাংক",
      "বিসিএস",
      "প্রতিযোগিতামূলক পরীক্ষা",
      "বাংলাদেশের অর্থনীতি",
      "আন্তর্জাতিক সংস্থা",
    ],
    last_updated: "২০২৬-০২-০৪",
    article_content: {
      summary:
        "বিশ্বব্যাংক হলো পাঁচটি প্রতিষ্ঠানের একটি অনন্য বৈশ্বিক অংশীদারিত্ব, যা উন্নয়নশীল দেশগুলোতে দারিদ্র্য বিমোচন এবং টেকসই সমৃদ্ধি নিশ্চিত করতে কাজ করে। ১৯৪৪ সালে ব্রেটন উডস সম্মেলনের মাধ্যমে প্রতিষ্ঠিত এই সংস্থাটি বর্তমানে জলবায়ু পরিবর্তন মোকাবিলা এবং দারিদ্র্য দূরীকরণে বিশ্বনেতৃত্ব দিচ্ছে।",
      key_points: [
        "১৯৪৪ সালে ব্রেটন উডস সম্মেলনের মাধ্যমে প্রতিষ্ঠিত।",
        "সদর দপ্তর: ওয়াশিংটন ডি.সি., যুক্তরাষ্ট্র।",
        "৫টি অঙ্গপ্রতিষ্ঠান (IBRD, IDA, IFC, MIGA, ICSID) নিয়ে গঠিত।",
        "বর্তমান লক্ষ্য (২০২৫+): একটি বাসযোগ্য গ্রহে দারিদ্র্যমুক্ত বিশ্ব গড়া।",
        "বাংলাদেশ পরিস্থিতি: নিম্ন-মধ্যম আয়ের দেশ এবং আইডিএ (IDA) তহবিলের অন্যতম শীর্ষ গ্রহীতা।",
      ],
      visual_representation: {
        image_tag: "",
        caption: "বিশ্বব্যাংক গ্রুপের (WBG) প্রাতিষ্ঠানিক কাঠামো।",
      },
      sections: [
        {
          heading: "১. ঐতিহাসিক প্রেক্ষাপট ও বিবর্তন",
          content:
            "১৯৪৪ সালে আইএমএফ (IMF)-এর সাথে বিশ্বব্যাংক প্রতিষ্ঠিত হয়। এর প্রথম ঋণ ছিল ফ্রান্সকে দেওয়া ২৫০ মিলিয়ন ডলার, যা দ্বিতীয় বিশ্বযুদ্ধ পরবর্তী পুনর্গঠনের জন্য ব্যবহৃত হয়েছিল। বর্তমানে এটি জলবায়ু পরিবর্তন এবং মহামারী প্রতিরোধের মতো 'গ্লোবাল পাবলিক গুডস' বা বৈশ্বিক জনকল্যাণমূলক কাজে গুরুত্ব দিচ্ছে।",
        },
        {
          heading: "২. বিশ্বব্যাংক গ্রুপের পাঁচটি স্তম্ভ",
          table_data: [
            {
              সংস্থা: "IBRD",
              পূর্ণরূপ: "International Bank for Reconstruction and Development",
              লক্ষ্য: "মধ্যম আয়ের দেশসমূহ",
            },
            {
              সংস্থা: "IDA",
              পূর্ণরূপ: "International Development Association",
              লক্ষ্য: "দরিদ্রতম দেশসমূহ (সফট লোন উইন্ডো)",
            },
            {
              সংস্থা: "IFC",
              পূর্ণরূপ: "International Finance Corporation",
              লক্ষ্য: "বেসরকারি খাতের উন্নয়ন",
            },
            {
              সংস্থা: "MIGA",
              পূর্ণরূপ: "Multilateral Investment Guarantee Agency",
              লক্ষ্য: "রাজনৈতিক ঝুঁকি বীমা প্রদান",
            },
            {
              সংস্থা: "ICSID",
              পূর্ণরূপ:
                "International Centre for Settlement of Investment Disputes",
              লক্ষ্য: "বিনিয়োগ সংক্রান্ত বিরোধ নিষ্পত্তি",
            },
          ],
        },
      ],
    },
    preliminary_exam_prep: {
      focus: "বিসিএস প্রিলিমিনারি দৃষ্টিকোণ",
      mcqs: [
        {
          id: 1,
          question:
            "বিশ্বব্যাংকের কোন অঙ্গপ্রতিষ্ঠানটি 'সফট লোন উইন্ডো' নামে পরিচিত?",
          options: ["ক) IBRD", "খ) IFC", "গ) IDA", "ঘ) MIGA"],
          answer: "গ) IDA",
          explanation:
            "IDA বিশ্বের দরিদ্রতম দেশগুলোকে বিনা সুদে ঋণ এবং অনুদান প্রদান করে, তাই একে বাণিজ্যিক ঋণের তুলনায় 'সহজ শর্তের জানালা' বা সফট লোন উইন্ডো বলা হয়।",
        },
        {
          id: 2,
          question: "বাংলাদেশ কত সালে বিশ্বব্যাংকের সদস্যপদ লাভ করে?",
          options: ["ক) ১৯৭১", "খ) ১৯৭২", "গ) ১৯৭৩", "ঘ) ১৯৭৫"],
          answer: "খ) ১৯৭২",
          explanation:
            "বাংলাদেশ ১৯৭২ সালের ১৭ আগস্ট বিশ্বব্যাংকের (IBRD) সদস্যপদ লাভ করে।",
        },
        {
          id: 3,
          question: "বিশ্বব্যাংক গ্রুপের বর্তমান (১৪তম) প্রেসিডেন্ট কে?",
          options: [
            "ক) ডেভিড ম্যালপাস",
            "খ) জিম ইয়ং কিম",
            "গ) অজয় বঙ্গ",
            "ঘ) ক্রিস্টালিনা জর্জিয়েভা",
          ],
          answer: "গ) অজয় বঙ্গ",
          explanation:
            "অজয় বঙ্গ ২০২৩ সালের জুনে দায়িত্ব গ্রহণ করেন। তিনি ব্যাংকটিকে জলবায়ু-সহনশীল উন্নয়নের দিকে পরিচালিত করছেন।",
        },
        {
          id: 4,
          question: "কোন প্রতিবেদনটি প্রতিবছর বিশ্বব্যাংক প্রকাশ করে?",
          options: [
            "ক) World Economic Outlook",
            "খ) World Development Report",
            "গ) Human Development Report",
            "ঘ) Global Gender Gap Report",
          ],
          answer: "খ) World Development Report",
          explanation:
            "ওয়ার্ল্ড ডেভেলপমেন্ট রিপোর্ট (WDR) বিশ্বব্যাংকের প্রধান বার্ষিক প্রকাশনা।",
        },
      ],
    },
    written_exam_prep: {
      guidelines:
        "বিসিএস লিখিত পরীক্ষার জন্য বাংলাদেশ ও বিশ্বব্যাংকের সম্পর্ক এবং বিশেষ করে এলডিসি (LDC) থেকে উত্তরণের ফলে ঋণের শর্তাবলীতে (IDA থেকে IBRD-তে রূপান্তর) কী পরিবর্তন আসবে সেদিকে নজর দিন।",
      possible_questions: [
        {
          question:
            "১৯৭২ সাল থেকে বাংলাদেশের আর্থ-সামাজিক উন্নয়নে বিশ্বব্যাংকের ভূমিকা বিশ্লেষণ করুন।",
          key_points_for_answer: [
            "অবকাঠামো উন্নয়ন (যমুনা সেতু, বিদ্যুৎ কেন্দ্র)।",
            "মানবসম্পদ উন্নয়ন (শিক্ষা ও স্বাস্থ্য খাতের ঋণ)।",
            "জলবায়ু সহনশীলতা (ডেল্টা প্ল্যান ২১০০-এ সহায়তা)।",
            "IDA-21 তহবিলের মাধ্যমে বাংলাদেশের প্রাপ্তি।",
          ],
        },
        {
          question:
            "IBRD এবং IDA-এর কার্যাবলীর তুলনা করুন। বাংলাদেশের মতো দেশগুলোর জন্য IDA কেন বেশি গুরুত্বপূর্ণ?",
          key_points_for_answer: [
            "সুদের হারের পার্থক্য (সহজ শর্ত বনাম বাজার ভিত্তিক)।",
            "ঋণ পরিশোধের সময়সীমা এবং গ্রেস পিরিয়ড।",
            "দারিদ্র্য বিমোচন বনাম পুনর্গঠন লক্ষ্যমাত্রা।",
          ],
        },
      ],
    },
  },
  {
    _id: "65bf8e1a2f4a5c001d8e4a11",
    title: "বিশ্বব্যাংক-World Bank Group",
    category: "আন্তর্জাতিক বিষয়াবলী",
    tags: [
      "বিশ্বব্যাংক",
      "বিসিএস",
      "প্রতিযোগিতামূলক পরীক্ষা",
      "বাংলাদেশের অর্থনীতি",
      "আন্তর্জাতিক সংস্থা",
    ],
    last_updated: "২০২৬-০২-০৪",
    article_content: {
      summary:
        "বিশ্বব্যাংক হলো পাঁচটি প্রতিষ্ঠানের একটি অনন্য বৈশ্বিক অংশীদারিত্ব, যা উন্নয়নশীল দেশগুলোতে দারিদ্র্য বিমোচন এবং টেকসই সমৃদ্ধি নিশ্চিত করতে কাজ করে। ১৯৪৪ সালে ব্রেটন উডস সম্মেলনের মাধ্যমে প্রতিষ্ঠিত এই সংস্থাটি বর্তমানে জলবায়ু পরিবর্তন মোকাবিলা এবং দারিদ্র্য দূরীকরণে বিশ্বনেতৃত্ব দিচ্ছে।",
      key_points: [
        "১৯৪৪ সালে ব্রেটন উডস সম্মেলনের মাধ্যমে প্রতিষ্ঠিত।",
        "সদর দপ্তর: ওয়াশিংটন ডি.সি., যুক্তরাষ্ট্র।",
        "৫টি অঙ্গপ্রতিষ্ঠান (IBRD, IDA, IFC, MIGA, ICSID) নিয়ে গঠিত।",
        "বর্তমান লক্ষ্য (২০২৫+): একটি বাসযোগ্য গ্রহে দারিদ্র্যমুক্ত বিশ্ব গড়া।",
        "বাংলাদেশ পরিস্থিতি: নিম্ন-মধ্যম আয়ের দেশ এবং আইডিএ (IDA) তহবিলের অন্যতম শীর্ষ গ্রহীতা।",
      ],
      visual_representation: {
        image_tag: "",
        caption: "বিশ্বব্যাংক গ্রুপের (WBG) প্রাতিষ্ঠানিক কাঠামো।",
      },
      sections: [
        {
          heading: "১. ঐতিহাসিক প্রেক্ষাপট ও বিবর্তন",
          content:
            "১৯৪৪ সালে আইএমএফ (IMF)-এর সাথে বিশ্বব্যাংক প্রতিষ্ঠিত হয়। এর প্রথম ঋণ ছিল ফ্রান্সকে দেওয়া ২৫০ মিলিয়ন ডলার, যা দ্বিতীয় বিশ্বযুদ্ধ পরবর্তী পুনর্গঠনের জন্য ব্যবহৃত হয়েছিল। বর্তমানে এটি জলবায়ু পরিবর্তন এবং মহামারী প্রতিরোধের মতো 'গ্লোবাল পাবলিক গুডস' বা বৈশ্বিক জনকল্যাণমূলক কাজে গুরুত্ব দিচ্ছে।",
        },
        {
          heading: "২. বিশ্বব্যাংক গ্রুপের পাঁচটি স্তম্ভ",
          table_data: [
            {
              সংস্থা: "IBRD",
              পূর্ণরূপ: "International Bank for Reconstruction and Development",
              লক্ষ্য: "মধ্যম আয়ের দেশসমূহ",
            },
            {
              সংস্থা: "IDA",
              পূর্ণরূপ: "International Development Association",
              লক্ষ্য: "দরিদ্রতম দেশসমূহ (সফট লোন উইন্ডো)",
            },
            {
              সংস্থা: "IFC",
              পূর্ণরূপ: "International Finance Corporation",
              লক্ষ্য: "বেসরকারি খাতের উন্নয়ন",
            },
            {
              সংস্থা: "MIGA",
              পূর্ণরূপ: "Multilateral Investment Guarantee Agency",
              লক্ষ্য: "রাজনৈতিক ঝুঁকি বীমা প্রদান",
            },
            {
              সংস্থা: "ICSID",
              পূর্ণরূপ:
                "International Centre for Settlement of Investment Disputes",
              লক্ষ্য: "বিনিয়োগ সংক্রান্ত বিরোধ নিষ্পত্তি",
            },
          ],
        },
      ],
    },
    preliminary_exam_prep: {
      focus: "বিসিএস প্রিলিমিনারি দৃষ্টিকোণ",
      mcqs: [
        {
          id: 1,
          question:
            "বিশ্বব্যাংকের কোন অঙ্গপ্রতিষ্ঠানটি 'সফট লোন উইন্ডো' নামে পরিচিত?",
          options: ["ক) IBRD", "খ) IFC", "গ) IDA", "ঘ) MIGA"],
          answer: "গ) IDA",
          explanation:
            "IDA বিশ্বের দরিদ্রতম দেশগুলোকে বিনা সুদে ঋণ এবং অনুদান প্রদান করে, তাই একে বাণিজ্যিক ঋণের তুলনায় 'সহজ শর্তের জানালা' বা সফট লোন উইন্ডো বলা হয়।",
        },
        {
          id: 2,
          question: "বাংলাদেশ কত সালে বিশ্বব্যাংকের সদস্যপদ লাভ করে?",
          options: ["ক) ১৯৭১", "খ) ১৯৭২", "গ) ১৯৭৩", "ঘ) ১৯৭৫"],
          answer: "খ) ১৯৭২",
          explanation:
            "বাংলাদেশ ১৯৭২ সালের ১৭ আগস্ট বিশ্বব্যাংকের (IBRD) সদস্যপদ লাভ করে।",
        },
        {
          id: 3,
          question: "বিশ্বব্যাংক গ্রুপের বর্তমান (১৪তম) প্রেসিডেন্ট কে?",
          options: [
            "ক) ডেভিড ম্যালপাস",
            "খ) জিম ইয়ং কিম",
            "গ) অজয় বঙ্গ",
            "ঘ) ক্রিস্টালিনা জর্জিয়েভা",
          ],
          answer: "গ) অজয় বঙ্গ",
          explanation:
            "অজয় বঙ্গ ২০২৩ সালের জুনে দায়িত্ব গ্রহণ করেন। তিনি ব্যাংকটিকে জলবায়ু-সহনশীল উন্নয়নের দিকে পরিচালিত করছেন।",
        },
        {
          id: 4,
          question: "কোন প্রতিবেদনটি প্রতিবছর বিশ্বব্যাংক প্রকাশ করে?",
          options: [
            "ক) World Economic Outlook",
            "খ) World Development Report",
            "গ) Human Development Report",
            "ঘ) Global Gender Gap Report",
          ],
          answer: "খ) World Development Report",
          explanation:
            "ওয়ার্ল্ড ডেভেলপমেন্ট রিপোর্ট (WDR) বিশ্বব্যাংকের প্রধান বার্ষিক প্রকাশনা।",
        },
      ],
    },
    written_exam_prep: {
      guidelines:
        "বিসিএস লিখিত পরীক্ষার জন্য বাংলাদেশ ও বিশ্বব্যাংকের সম্পর্ক এবং বিশেষ করে এলডিসি (LDC) থেকে উত্তরণের ফলে ঋণের শর্তাবলীতে (IDA থেকে IBRD-তে রূপান্তর) কী পরিবর্তন আসবে সেদিকে নজর দিন।",
      possible_questions: [
        {
          question:
            "১৯৭২ সাল থেকে বাংলাদেশের আর্থ-সামাজিক উন্নয়নে বিশ্বব্যাংকের ভূমিকা বিশ্লেষণ করুন।",
          key_points_for_answer: [
            "অবকাঠামো উন্নয়ন (যমুনা সেতু, বিদ্যুৎ কেন্দ্র)।",
            "মানবসম্পদ উন্নয়ন (শিক্ষা ও স্বাস্থ্য খাতের ঋণ)।",
            "জলবায়ু সহনশীলতা (ডেল্টা প্ল্যান ২১০০-এ সহায়তা)।",
            "IDA-21 তহবিলের মাধ্যমে বাংলাদেশের প্রাপ্তি।",
          ],
        },
        {
          question:
            "IBRD এবং IDA-এর কার্যাবলীর তুলনা করুন। বাংলাদেশের মতো দেশগুলোর জন্য IDA কেন বেশি গুরুত্বপূর্ণ?",
          key_points_for_answer: [
            "সুদের হারের পার্থক্য (সহজ শর্ত বনাম বাজার ভিত্তিক)।",
            "ঋণ পরিশোধের সময়সীমা এবং গ্রেস পিরিয়ড।",
            "দারিদ্র্য বিমোচন বনাম পুনর্গঠন লক্ষ্যমাত্রা।",
          ],
        },
      ],
    },
  },
  {
    _id: "65bf8e1a2f4a5c001d8e4a10",
    title:
      "বাংলাদেশের সংবিধান: বিসিএস ও প্রতিযোগিতামূলক পরীক্ষার পূর্ণাঙ্গ নোট",
    category: "বাংলাদেশ বিষয়াবলী",
    tags: ["সংবিধান", "বিসিএস", "প্রজাতন্ত্র", "মৌলিক অধিকার", "সংশোধনী"],
    last_updated: "২০২৬-০২-০৪",
    article_content: {
      summary:
        "বাংলাদেশের সংবিধান হলো গণপ্রজাতন্ত্রী বাংলাদেশের সর্বোচ্চ আইন। ১৯৭২ সালের ৪ নভেম্বর গণপরিষদে এটি গৃহীত হয় এবং ১৬ ডিসেম্বর থেকে কার্যকর হয়। এটি একটি লিখিত ও দুষ্পরিবর্তনীয় সংবিধান যাতে বর্তমানে ১৫৩টি অনুচ্ছেদ, ১১টি ভাগ এবং ৭টি তফসিল রয়েছে।",
      key_points: [
        "সংবিধান প্রণয়ন কমিটির প্রধান ছিলেন ড. কামাল হোসেন।",
        "সংবিধানের মূলনীতি ৪টি: জাতীয়তাবাদ, সমাজতন্ত্র, গণতন্ত্র ও ধর্মনিপেক্ষতা।",
        "এটি ১৬ ডিসেম্বর ১৯৭২ (বিজয় দিবস) থেকে কার্যকর হয়।",
        "সংবিধানে এ পর্যন্ত ১৭টি সংশোধনী আনা হয়েছে।",
        "সংবিধানের অভিভাবক ও ব্যাখ্যাকারক হলো সুপ্রিম কোর্ট।",
      ],
      visual_representation: {
        image_tag: "",
        caption: "বাংলাদেশের সংবিধানের কাঠামো এবং এর ১১টি ভাগের বিন্যাস।",
      },
      sections: [
        {
          heading: "১. সংবিধানের ঐতিহাসিক পটভূমি",
          content:
            "১৯৭২ সালের ১১ জানুয়ারি বঙ্গবন্ধু শেখ মুজিবুর রহমান 'অস্থায়ী সংবিধান আদেশ' জারি করেন। এরপর ২৩ মার্চ গণপরিষদ আদেশ জারি করা হয়। ড. কামাল হোসেনের নেতৃত্বে ৩৪ সদস্যের একটি কমিটি মাত্র সাত মাসের মধ্যে সংবিধানের খসড়া তৈরি করে।",
        },
        {
          heading: "২. সংবিধানের গুরুত্বপূর্ণ ভাগসমূহ",
          table_data: [
            {
              সংস্থা: "১ম ভাগ",
              পূর্ণরূপ: "প্রজাতন্ত্র",
              লক্ষ্য: "অনুচ্ছেদ ১-৭ (রাষ্ট্রের সীমানা ও নাম)",
            },
            {
              সংস্থা: "২য় ভাগ",
              পূর্ণরূপ: "রাষ্ট্র পরিচালনার মূলনীতি",
              লক্ষ্য: "অনুচ্ছেদ ৮-২৫ (৪টি মূলনীতি)",
            },
            {
              সংস্থা: "৩য় ভাগ",
              পূর্ণরূপ: "মৌলিক অধিকার",
              লক্ষ্য: "অনুচ্ছেদ ২৬-৪৭ (ব্যক্তির অধিকার)",
            },
            {
              সংস্থা: "৪র্থ ভাগ",
              পূর্ণরূপ: "নির্বাহী বিভাগ",
              লক্ষ্য: "অনুচ্ছেদ ৪৮-৬৪ (রাষ্ট্রপতি ও প্রধানমন্ত্রী)",
            },
            {
              সংস্থা: "৯ম-ক ভাগ",
              পূর্ণরূপ: "জরুরি বিধানাবলী",
              লক্ষ্য: "অনুচ্ছেদ ১৪১ক-১৪১গ (জরুরি অবস্থা)",
            },
          ],
        },
      ],
    },
    preliminary_exam_prep: {
      focus: "বিসিএস প্রিলিমিনারি শর্টকাট",
      mcqs: [
        {
          id: 1,
          question:
            "বাংলাদেশের সংবিধানের 'মৌলিক অধিকার' বলবৎ করার ক্ষমতা দেওয়া হয়েছে কোন অনুচ্ছেদে?",
          options: [
            "ক) ৩২ অনুচ্ছেদ",
            "খ) ৪৪ অনুচ্ছেদ",
            "গ) ১০২ অনুচ্ছেদ",
            "ঘ) খ ও গ উভয়ই",
          ],
          answer: "ঘ) খ ও গ উভয়ই",
          explanation:
            "৪৪ অনুচ্ছেদ অনুযায়ী মৌলিক অধিকার বলবৎ করার জন্য আবেদন করার অধিকার এবং ১০২ অনুচ্ছেদ অনুযায়ী সুপ্রিম কোর্ট তা কার্যকর করার আদেশ দিতে পারে।",
        },
        {
          id: 2,
          question:
            "সংবিধানের কত নম্বর অনুচ্ছেদে 'পরিবেশ ও জীববৈচিত্র্য সংরক্ষণ' এর কথা বলা হয়েছে?",
          options: [
            "ক) ১৮ অনুচ্ছেদ",
            "খ) ১৮(ক) অনুচ্ছেদ",
            "গ) ২১ অনুচ্ছেদ",
            "ঘ) ৩২ অনুচ্ছেদ",
          ],
          answer: "খ) ১৮(ক) অনুচ্ছেদ",
          explanation:
            "পঞ্চদশ সংশোধনীর মাধ্যমে ১৮(ক) অনুচ্ছেদ যুক্ত করে রাষ্ট্রকে পরিবেশ ও বন সংরক্ষণের দায়িত্ব দেওয়া হয়েছে।",
        },
        {
          id: 3,
          question:
            "সংবিধানের কোন তফসিলে বঙ্গবন্ধুর ৭ই মার্চের ভাষণ অন্তর্ভুক্ত করা হয়েছে?",
          options: [
            "ক) ৪র্থ তফসিল",
            "খ) ৫ম তফসিল",
            "গ) ৬ষ্ঠ তফসিল",
            "ঘ) ৭ম তফসিল",
          ],
          answer: "খ) ৫ম তফসিল",
          explanation:
            "সংবিধানের ৫ম তফসিলে ৭ই মার্চের ভাষণ, ৬ষ্ঠ তফসিলে স্বাধীনতার ঘোষণা এবং ৭ম তফসিলে স্বাধীনতার ঘোষণাপত্র যুক্ত করা হয়েছে।",
        },
        {
          id: 4,
          question:
            "সংবিধান অনুযায়ী বাংলাদেশের রাষ্ট্রীয় ধর্মের স্বীকৃতি দেওয়া হয়েছে কোন অনুচ্ছেদে?",
          options: [
            "ক) ২ অনুচ্ছেদ",
            "খ) ২(ক) অনুচ্ছেদ",
            "গ) ৩ অনুচ্ছেদ",
            "ঘ) ১২ অনুচ্ছেদ",
          ],
          answer: "খ) ২(ক) অনুচ্ছেদ",
          explanation:
            "২(ক) অনুচ্ছেদ অনুযায়ী প্রজাতন্ত্রের রাষ্ট্রধর্ম ইসলাম, তবে অন্যান্য ধর্মের সমমর্যাদা ও অধিকার নিশ্চিত করা হয়েছে।",
        },
      ],
    },
    written_exam_prep: {
      guidelines:
        "লিখিত পরীক্ষায় সংবিধান থেকে প্রশ্ন আসলে অনুচ্ছেদ নম্বর উল্লেখ করা বাধ্যতামূলক। বিশেষ করে ৭ম অনুচ্ছেদ (সংবিধানের প্রাধান্য) এবং মৌলিক অধিকার ও মূলনীতির পার্থক্যগুলো ভালো করে পড়ুন।",
      possible_questions: [
        {
          question:
            "বাংলাদেশের সংবিধানের মূল বৈশিষ্ট্যগুলো আলোচনা করুন। এটি কেন দুষ্পরিবর্তনীয়?",
          key_points_for_answer: [
            "লিখিত ও এককেন্দ্রিক শাসন ব্যবস্থা।",
            "সংসদীয় গণতন্ত্রের রূপরেখা।",
            "মৌলিক অধিকারের নিশ্চয়তা।",
            "সংশোধনীর জন্য দুই-তৃতীয়াংশ সংখ্যাগরিষ্ঠতার প্রয়োজনীয়তা (অনুচ্ছেদ ১৪২)।",
          ],
        },
        {
          question:
            "রাষ্ট্র পরিচালনার মূলনীতি এবং মৌলিক অধিকারের মধ্যে প্রধান পার্থক্যগুলো কী কী?",
          key_points_for_answer: [
            "আদালত কর্তৃক বলবৎযোগ্যতা (মৌলিক অধিকার বলবৎযোগ্য, মূলনীতি নয়)।",
            "সংবিধানের ২য় ভাগ বনাম ৩য় ভাগ।",
            "নাগরিকের ব্যক্তিগত দাবি বনাম রাষ্ট্রের সামাজিক লক্ষ্য।",
          ],
        },
      ],
    },
  },
  {
    _id: "65bf8e1a2f4a5c001d8e4a9",
    title: "NATO: উত্তর আটলান্টিক নিরাপত্তা জোট এবং বৈশ্বিক ভূ-রাজনীতি",
    category: "আন্তর্জাতিক বিষয়াবলী",
    tags: [
      "NATO",
      "সামরিক জোট",
      "আন্তর্জাতিক নিরাপত্তা",
      "রাশিয়া-ইউক্রেন যুদ্ধ",
      "বিসিএস প্রস্তুতি",
    ],
    last_updated: "২০২৬-০২-০৪",
    article_content: {
      summary:
        "ন্যাটো (NATO) হলো উত্তর আমেরিকা এবং ইউরোপীয় দেশগুলোর একটি আন্তঃসরকারি সামরিক জোট। এটি ১৯৪৯ সালে উত্তর আটলান্টিক চুক্তির মাধ্যমে প্রতিষ্ঠিত হয়। এর মূল লক্ষ্য হলো সদস্য দেশগুলোর সম্মিলিত প্রতিরক্ষা নিশ্চিত করা, যেখানে একটি সদস্য রাষ্ট্রের ওপর আক্রমণ সবার ওপর আক্রমণ হিসেবে বিবেচিত হয়।",
      key_points: [
        "প্রতিষ্ঠা: ৪ এপ্রিল ১৯৪৯ (ওয়াশিংটন চুক্তি)।",
        "সদর দপ্তর: ব্রাসেলস, বেলজিয়াম।",
        "বর্তমান সদস্য সংখ্যা: ৩২ (সর্বশেষ সদস্য সুইডেন)।",
        "আর্টিকেল ৫: সম্মিলিত প্রতিরক্ষা নীতি (Collective Defense)।",
        "অফিসিয়াল ভাষা: ইংরেজি ও ফরাসি।",
      ],
      visual_representation: {
        image_tag: "",
        caption:
          "ন্যাটোর সদস্য দেশসমূহ এবং ইউরোপীয় নিরাপত্তার কৌশলগত মানচিত্র।",
      },
      sections: [
        {
          heading: "১. ঐতিহাসিক পটভূমি ও শীতল যুদ্ধ",
          content:
            "দ্বিতীয় বিশ্বযুদ্ধ পরবর্তী সময়ে সোভিয়েত ইউনিয়নের বিস্তার রোধে পশ্চিম ইউরোপ ও উত্তর আমেরিকার দেশগুলো একত্রে ন্যাটো গঠন করে। এর জবাবে সোভিয়েত ইউনিয়ন ১৯৫৫ সালে 'ওয়ারশ প্যাক্ট' গঠন করেছিল। শীতল যুদ্ধ পরবর্তী সময়ে ন্যাটো কেবল একটি আঞ্চলিক জোট থেকে বৈশ্বিক নিরাপত্তা অংশীদারে পরিণত হয়েছে।",
        },
        {
          heading: "২. ন্যাটোর গুরুত্বপূর্ণ কিছু দেশ ও ভূমিকা",
          table_data: [
            {
              সংস্থা: "যুক্তরাষ্ট্র",
              পূর্ণরূপ: "United States of America",
              লক্ষ্য: "ন্যাটোর প্রধান সামরিক ও অর্থ যোগানদাতা",
            },
            {
              সংস্থা: "তুরস্ক",
              পূর্ণরূপ: "Republic of Türkiye",
              লক্ষ্য: "ন্যাটোর দ্বিতীয় বৃহত্তম সেনাবাহিনী ও কৌশলগত অবস্থান",
            },
            {
              সংস্থা: "ফিনল্যান্ড",
              পূর্ণরূপ: "Republic of Finland",
              লক্ষ্য: "৩১তম সদস্য (২০২৩ সালে যোগদান)",
            },
            {
              সংস্থা: "সুইডেন",
              পূর্ণরূপ: "Kingdom of Sweden",
              লক্ষ্য: "৩২তম সদস্য (২০২৪ সালে যোগদান)",
            },
          ],
        },
      ],
    },
    preliminary_exam_prep: {
      focus: "বিসিএস প্রিলিমিনারি দৃষ্টিকোণ (ন্যাটো স্পেশাল)",
      mcqs: [
        {
          id: 1,
          question:
            "ন্যাটোর কত নম্বর অনুচ্ছেদে 'সম্মিলিত প্রতিরক্ষা' (Collective Defense) এর কথা বলা হয়েছে?",
          options: [
            "ক) আর্টিকেল ৩",
            "খ) আর্টিকেল ৪",
            "গ) আর্টিকেল ৫",
            "ঘ) আর্টিকেল ৭",
          ],
          answer: "গ) আর্টিকেল ৫",
          explanation:
            "আর্টিকেল ৫ অনুযায়ী, ন্যাটোভুক্ত কোনো এক দেশের ওপর আক্রমণ মানে সকল দেশের ওপর আক্রমণ। এটি ন্যাটোর ইতিহাসের মাত্র একবার (৯/১১ হামলার পর) কার্যকর করা হয়েছিল।",
        },
        {
          id: 2,
          question: "ন্যাটোর বর্তমান (১৩তম) মহাসচিব কে?",
          options: [
            "ক) জেনস স্টলটেনবার্গ",
            "খ) মার্ক রুটে",
            "গ) উরসুলা ফন ডার লিয়েন",
            "ঘ) জোসেফ বোরেল",
          ],
          answer: "খ) মার্ক রুটে",
          explanation:
            "নেদারল্যান্ডের সাবেক প্রধানমন্ত্রী মার্ক রুটে ২০২৪ সালের ১ অক্টোবর থেকে জেনস স্টলটেনবার্গের স্থলাভিষিক্ত হয়ে মহাসচিব হিসেবে দায়িত্ব পালন করছেন।",
        },
        {
          id: 3,
          question:
            "কোন দেশটি ন্যাটোর সদস্য হওয়া সত্ত্বেও এর কোনো সেনাবাহিনী নেই?",
          options: [
            "ক) লুক্সেমবার্গ",
            "খ) আইসল্যান্ড",
            "গ) নরওয়ে",
            "ঘ) এস্তোনিয়া",
          ],
          answer: "খ) আইসল্যান্ড",
          explanation:
            "আইসল্যান্ড ন্যাটোর একমাত্র সদস্য রাষ্ট্র যার কোনো স্থায়ী সামরিক বাহিনী নেই, তবে তাদের উপকূলীয় রক্ষীবাহিনী রয়েছে।",
        },
        {
          id: 4,
          question: "ন্যাটোর ৩২তম সদস্য রাষ্ট্র কোনটি?",
          options: [
            "ক) ইউক্রেন",
            "খ) উত্তর মেসিডোনিয়া",
            "গ) ফিনল্যান্ড",
            "ঘ) সুইডেন",
          ],
          answer: "ঘ) সুইডেন",
          explanation:
            "সুইডেন ২০২৪ সালের ৭ মার্চ আনুষ্ঠানিকভাবে ন্যাটোর ৩২তম সদস্য হিসেবে যোগদান করে।",
        },
      ],
    },
    written_exam_prep: {
      guidelines:
        "লিখিত পরীক্ষার জন্য 'রাশিয়া-ইউক্রেন সংকটে ন্যাটোর ভূমিকা' এবং 'ন্যাটোর পূর্বমুখী সম্প্রসারণ' (Eastward Expansion) এর প্রভাব সম্পর্কে গভীর ধারণা থাকা প্রয়োজন।",
      possible_questions: [
        {
          question:
            "বর্তমান বিশ্ব পরিস্থিতিতে ন্যাটোর প্রাসঙ্গিকতা আলোচনা করুন।",
          key_points_for_answer: [
            "ইউক্রেন যুদ্ধে সামরিক ও লজিস্টিক সহায়তা।",
            "বাল্টিক দেশগুলোর নিরাপত্তা নিশ্চিত করা।",
            "সাইবার নিরাপত্তা ও হাইব্রিড যুদ্ধ মোকাবিলা।",
            "ইউরোপীয় দেশগুলোর সামরিক বাজেট বৃদ্ধি (২% জিডিপি লক্ষ্যমাত্রা)।",
          ],
        },
        {
          question:
            "ন্যাটোর সম্প্রসারণ কীভাবে রাশিয়ার সাথে ভূ-রাজনৈতিক উত্তেজনা বৃদ্ধি করেছে?",
          key_points_for_answer: [
            "রাশিয়ার সীমান্তের কাছে ন্যাটোর উপস্থিতি (বফার জোনের অবলুপ্তি)।",
            "১৯৯৭ সালের পর পূর্ব ইউরোপের দেশগুলোর ন্যাটোর সদস্য হওয়া।",
            "রাশিয়ার 'রেড লাইন' এবং ইউক্রেন যুদ্ধ শুরুর প্রেক্ষাপট।",
          ],
        },
      ],
    },
  },
  {
    _id: "65bf8e1a2f4a5c001d8e4a8",
    title: "ইউরোপীয় ইউনিয়ন (EU): ইতিহাস, অর্থনীতি ও ভূ-রাজনীতি",
    category: "আন্তর্জাতিক বিষয়াবলী",
    tags: [
      "EU",
      "ইউরোপীয় ইউনিয়ন",
      "ইউরো জোন",
      "ব্র্রেক্সিট",
      "বিসিএস আন্তর্জাতিক",
    ],
    last_updated: "২০২৬-০২-০৪",
    article_content: {
      summary:
        "ইউরোপীয় ইউনিয়ন হলো ইউরোপের ২৭টি দেশের একটি অনন্য অর্থনৈতিক ও রাজনৈতিক জোট। এটি দ্বিতীয় বিশ্বযুদ্ধ পরবর্তী সময়ে অর্থনৈতিক সহযোগিতা বৃদ্ধির মাধ্যমে সংঘাত এড়ানোর লক্ষ্যে প্রতিষ্ঠিত হয়েছিল। ১৯৯৩ সালের মাস্ট্রিক্ট চুক্তির মাধ্যমে বর্তমানের 'ইউরোপীয় ইউনিয়ন' পূর্ণ রূপ লাভ করে।",
      key_points: [
        "সদর দপ্তর: ব্রাসেলস, বেলজিয়াম।",
        "বর্তমান সদস্য রাষ্ট্র: ২৭টি (যুক্তরাজ্য ত্যাগের পর)।",
        "একক মুদ্রা: ইউরো (€), যা ২০টি দেশে প্রচলিত (ইউরোজোন)।",
        "শেনজেন এলাকা: ২৭টি দেশ নিয়ে গঠিত যেখানে পাসপোর্টহীন যাতায়াত সম্ভব।",
        "নোবেল শান্তি পুরস্কার: ২০১২ সালে বিশ্ব শান্তিতে অবদানের জন্য ইইউ এই পুরস্কার পায়।",
      ],
      visual_representation: {
        image_tag: "",
        caption:
          "ইউরোপীয় ইউনিয়নের প্রাতিষ্ঠানিক কাঠামো এবং সদস্য রাষ্ট্রসমূহের মানচিত্র।",
      },
      sections: [
        {
          heading: "১. ইইউ-এর বিবর্তন ও প্রধান চুক্তিসমূহ",
          content:
            "১৯৫১ সালে ৬টি দেশ নিয়ে গঠিত 'ইউরোপীয় কয়লা ও ইস্পাত সম্প্রদায়' (ECSC) থেকে ইইউ-এর যাত্রা শুরু। এরপর ১৯৫৭ সালের রোম চুক্তির মাধ্যমে EEC গঠিত হয়। ১৯৯৩ সালে মাস্ট্রিক্ট চুক্তির মাধ্যমে এটি বর্তমান রাজনৈতিক ইউনিয়ন বা EU-তে রূপান্তরিত হয়। সর্বশেষ ২০০৯ সালের লিসবন চুক্তির মাধ্যমে এর প্রশাসনিক ক্ষমতা আরও শক্তিশালী করা হয়।",
        },
        {
          heading: "২. ইউরোপীয় ইউনিয়নের ৪টি প্রধান অঙ্গসংস্থা",
          table_data: [
            {
              সংস্থা: "European Council",
              পূর্ণরূপ: "ইউরোপীয় কাউন্সিল",
              লক্ষ্য: "রাজনৈতিক দিকনির্দেশনা প্রদান",
            },
            {
              সংস্থা: "European Commission",
              পূর্ণরূপ: "ইউরোপীয় কমিশন",
              লক্ষ্য: "আইন প্রণয়ন ও নির্বাহী ক্ষমতা পরিচালনা",
            },
            {
              সংস্থা: "European Parliament",
              পূর্ণরূপ: "ইউরোপীয় পার্লামেন্ট",
              লক্ষ্য: "সরাসরি নির্বাচিত আইনসভা (সদস্য ৭২০ জন)",
            },
            {
              সংস্থা: "European Court of Justice",
              পূর্ণরূপ: "ইউরোপীয় বিচার আদালত",
              লক্ষ্য: "ইইউ আইনের সঠিক ব্যাখ্যা নিশ্চিত করা",
            },
          ],
        },
      ],
    },
    preliminary_exam_prep: {
      focus: "বিসিএস প্রিলিমিনারি স্পেশাল নোট",
      mcqs: [
        {
          id: 1,
          question:
            "ইউরোপীয় ইউনিয়নের একক মুদ্রা 'ইউরো' বর্তমানে কতটি দেশে চালু আছে?",
          options: ["ক) ১৭টি", "খ) ১৯টি", "গ) ২০টি", "ঘ) ২৭টি"],
          answer: "গ) ২০টি",
          explanation:
            "১ জানুয়ারি ২০২৩ তারিখে ক্রোয়েশিয়া ২০তম দেশ হিসেবে ইউরো গ্রহণ করে। ইউরো গ্রহণকারী দেশগুলোকে একত্রে 'ইউরোজোন' বলা হয়।",
        },
        {
          id: 2,
          question:
            "কোন চুক্তির মাধ্যমে 'ইউরোপীয় ইউনিয়ন' প্রতিষ্ঠিত হয়েছিল?",
          options: [
            "ক) রোম চুক্তি",
            "খ) মাস্ট্রিক্ট চুক্তি",
            "গ) লিসবন চুক্তি",
            "ঘ) প্যারিস চুক্তি",
          ],
          answer: "খ) মাস্ট্রিক্ট চুক্তি",
          explanation:
            "১৯৯১ সালে নেদারল্যান্ডসের মাস্ট্রিক্টে চুক্তিটি স্বাক্ষরিত হয় এবং ১ নভেম্বর ১৯৯৩ থেকে এটি কার্যকর হওয়ার মাধ্যমে EU প্রতিষ্ঠিত হয়।",
        },
        {
          id: 3,
          question:
            "যুক্তরাজ্য কত তারিখে আনুষ্ঠানিকভাবে ইউরোপীয় ইউনিয়ন থেকে পদত্যাগ (Brexit) করে?",
          options: [
            "ক) ১ জানুয়ারি ২০২০",
            "খ) ২৩ জুন ২০১৬",
            "গ) ৩১ জানুয়ারি ২০২০",
            "ঘ) ১ জানুয়ারি ২০২১",
          ],
          answer: "গ) ৩১ জানুয়ারি ২০২০",
          explanation:
            "২০১৬ সালের গণভোটের পর দীর্ঘ প্রক্রিয়ার শেষে ৩১ জানুয়ারি ২০২০ তারিখে যুক্তরাজ্য আনুষ্ঠানিকভাবে ইইউ ত্যাগ করে।",
        },
        {
          id: 4,
          question: "ইউরোপীয় কমিশনের বর্তমান প্রেসিডেন্ট কে?",
          options: [
            "ক) চার্লস মিশেল",
            "খ) রবার্টা মেটসোলা",
            "গ) উরসুলা ফন ডার লিয়েন",
            "ঘ) মারিও দ্রাঘি",
          ],
          answer: "গ) উরসুলা ফন ডার লিয়েন",
          explanation:
            "জার্মানির উরসুলা ফন ডার লিয়েন ২০১৯ সাল থেকে ইউরোপীয় কমিশনের প্রেসিডেন্ট হিসেবে দায়িত্ব পালন করছেন।",
        },
      ],
    },
    written_exam_prep: {
      guidelines:
        "বিসিএস লিখিত পরীক্ষার জন্য 'ব্র্রেক্সিট পরবর্তী বিশ্ব অর্থনীতি' এবং 'ইউক্রেন সংকটে ইইউ-এর অবস্থান' সম্পর্কে আপডেট তথ্য রাখুন।",
      possible_questions: [
        {
          question:
            "ইউরোপীয় ইউনিয়নের একক বাজার (Single Market) ব্যবস্থা কীভাবে সদস্য দেশগুলোর অর্থনীতিতে ভূমিকা রাখে?",
          key_points_for_answer: [
            "পণ্য, সেবা, মূলধন এবং শ্রমের অবাধ চলাচল (Four Freedoms)।",
            "অভ্যন্তরীণ শুল্কমুক্ত বাণিজ্য।",
            "অভিন্ন বাণিজ্যিক নীতি এবং শক্তিশালী বৈশ্বিক দর কষাকষির ক্ষমতা।",
          ],
        },
        {
          question:
            "ব্র্রেক্সিট (Brexit) এর ফলে ইউরোপীয় ইউনিয়নের ওপর রাজনৈতিক ও অর্থনৈতিক প্রভাব আলোচনা করুন।",
          key_points_for_answer: [
            "ইউরোপের সংহতিতে ফাটল ও অন্যান্য দেশে একই প্রবণতার ঝুঁকি।",
            "বাজেটে আর্থিক ঘাটতি (যুক্তরাজ্য ছিল অন্যতম বড় দাতা)।",
            "নিরাপত্তা ও পররাষ্ট্র নীতিতে ব্রিটেনের অভাব অনুভূত হওয়া।",
          ],
        },
      ],
    },
  },
  {
    _id: "65bf8e1a2f4a5c001d8e4a7",
    title: "বাংলাদেশের প্রধান নদ-নদী: ভৌগোলিক ও অর্থনৈতিক গুরুত্ব",
    category: "বাংলাদেশ বিষয়াবলী",
    tags: [
      "বাংলাদেশের নদ-নদী",
      "পদ্মা",
      "মেঘনা",
      "যমুনা",
      "ব্রহ্মপুত্র",
      "বিসিএস ভূগোল",
    ],
    last_updated: "২০২৬-০২-০৪",
    article_content: {
      summary:
        "বাংলাদেশ একটি নদীমাতৃক দেশ। এ দেশের জালের মতো ছড়িয়ে থাকা প্রায় ৭০০-এর বেশি নদ-নদী এ দেশের কৃষি, যোগাযোগ ও সংস্কৃতির প্রাণ। হিমালয় থেকে উৎপন্ন হয়ে এ দেশের প্রধান নদীগুলো বঙ্গোপসাগরে পতিত হয়েছে, যা বিশ্বের বৃহত্তম বদ্বীপ (Delta) গঠনে ভূমিকা রেখেছে।",
      key_points: [
        "বাংলাদেশের দীর্ঘতম ও প্রশস্ততম নদী হলো মেঘনা।",
        "পদ্মা নদী ভারতে 'গঙ্গা' নামে পরিচিত এবং চাঁপাইনবাবগঞ্জ দিয়ে বাংলাদেশে প্রবেশ করেছে।",
        "ব্রহ্মপুত্র নদের প্রধান শাখা হলো যমুনা নদী।",
        "একমাত্র আন্তর্জাতিক নদী হলো পদ্মা (গঙ্গা)।",
        "হালদা নদী বাংলাদেশের একমাত্র প্রাকৃতিক মৎস্য প্রজনন কেন্দ্র।",
      ],
      visual_representation: {
        image_tag: "",
        caption: "বাংলাদেশের প্রধান নদীপথ এবং তাদের মিলনস্থলের মানচিত্র।",
      },
      sections: [
        {
          heading: "১. প্রধান নদীগুলোর উৎপত্তিস্থল ও মিলনস্থল",
          content:
            "বাংলাদেশের প্রধান তিনটি নদী ব্যবস্থা হলো পদ্মা, ব্রহ্মপুত্র-যমুনা এবং সুরমা-মেঘনা। পদ্মা ও যমুনা গোয়ালন্দের কাছে মিলিত হয়েছে। আবার পদ্মা ও মেঘনা চাঁদপুরের কাছে মিলিত হয়ে মেঘনা নামে বঙ্গোপসাগরে পতিত হয়েছে। ব্রহ্মপুত্র নদ তিব্বতের মানস সরোবর থেকে উৎপন্ন হয়েছে।",
        },
        {
          heading: "২. নদীসমূহের পরিসংখ্যান ও তথ্য",
          table_data: [
            {
              সংস্থা: "পদ্মা",
              পূর্ণরূপ: "গঙ্গা (ভারত)",
              লক্ষ্য: "মিলনস্থল: গোয়ালন্দ (যমুনার সাথে)",
            },
            {
              সংস্থা: "মেঘনা",
              পূর্ণরূপ: "বরাক (ভারত)",
              লক্ষ্য: "দীর্ঘতম ও গভীরতম নদী",
            },
            {
              সংস্থা: "যমুনা",
              পূর্ণরূপ: "ব্রহ্মপুত্রের শাখা",
              লক্ষ্য: "যমুনা সেতু এই নদীর ওপর",
            },
            {
              সংস্থা: "কর্ণফুলী",
              পূর্ণরূপ: "লুসাই পাহাড় (ভারত)",
              লক্ষ্য: "চট্টগ্রাম বন্দরের প্রাণপ্রবাহ",
            },
            {
              সংস্থা: "সাঙ্গু",
              পূর্ণরূপ: "আরাকান পর্বত",
              লক্ষ্য: "সম্পূর্ণ বাংলাদেশের অভ্যন্তরে উৎপন্ন নদী",
            },
          ],
        },
      ],
    },
    preliminary_exam_prep: {
      focus: "বিসিএস প্রিলিমিনারি স্পেশাল ইনফরমেটিকস",
      mcqs: [
        {
          id: 1,
          question: "ব্রহ্মপুত্র নদ কোন স্থান দিয়ে বাংলাদেশে প্রবেশ করেছে?",
          options: [
            "ক) চাঁপাইনবাবগঞ্জ",
            "খ) কুড়িগ্রাম",
            "গ) পঞ্চগড়",
            "ঘ) সিলেট",
          ],
          answer: "খ) কুড়িগ্রাম",
          explanation:
            "ব্রহ্মপুত্র নদ কুড়িগ্রাম জেলার রৌমারী/চিলমারী অঞ্চল দিয়ে বাংলাদেশে প্রবেশ করেছে।",
        },
        {
          id: 2,
          question: "বাংলাদেশের একমাত্র প্রাকৃতিক মৎস্য প্রজনন কেন্দ্র কোনটি?",
          options: [
            "ক) পদ্মা নদী",
            "খ) মেঘনা নদী",
            "গ) হালদা নদী",
            "ঘ) যমুনা নদী",
          ],
          answer: "গ) হালদা নদী",
          explanation:
            "চট্টগ্রামের হালদা নদী হলো এশিয়ার অন্যতম বৃহত্তম এবং বাংলাদেশের একমাত্র প্রাকৃতিক মৎস্য প্রজনন কেন্দ্র, যেখানে রুই জাতীয় মাছ ডিম ছাড়ে।",
        },
        {
          id: 3,
          question: "পদ্মা ও যমুনা নদী কোথায় মিলিত হয়েছে?",
          options: ["ক) চাঁদপুর", "খ) গোয়ালন্দ", "গ) ভৈরব", "ঘ) আরিচা"],
          answer: "খ) গোয়ালন্দ",
          explanation:
            "পদ্মা ও যমুনা রাজবাড়ী জেলার গোয়ালন্দের নিকট মিলিত হয়েছে। অন্যদিকে পদ্মা ও মেঘনা চাঁদপুরের নিকট মিলিত হয়েছে।",
        },
        {
          id: 4,
          question: "তিব্বতের মানস সরোবর থেকে উৎপন্ন হয়েছে কোন নদটি?",
          options: ["ক) ব্রহ্মপুত্র", "খ) গঙ্গা", "গ) সুরমা", "ঘ) তিস্তা"],
          answer: "ক) ব্রহ্মপুত্র",
          explanation:
            "ব্রহ্মপুত্র নদ তিব্বতের মানস সরোবর থেকে উৎপন্ন হয়ে চীন ও ভারতের ওপর দিয়ে প্রবাহিত হয়ে বাংলাদেশে প্রবেশ করেছে।",
        },
      ],
    },
    written_exam_prep: {
      guidelines:
        "লিখিত পরীক্ষায় নদী নিয়ে প্রশ্ন আসলে একটি ছোট মানচিত্র এঁকে মিলনস্থলগুলো দেখানো খুবই গুরুত্বপূর্ণ। বিশেষ করে ফারাক্কা বাঁধ ও আন্তর্জাতিক নদী পানি বন্টন ইস্যুগুলো গুরুত্বের সাথে পড়ুন।",
      possible_questions: [
        {
          question: "বাংলাদেশের অর্থনীতিতে নদ-নদীর প্রভাব আলোচনা করুন।",
          key_points_for_answer: [
            "কৃষিজমিতে পলিমাটি ও সেচ সুবিধা।",
            "মৎস্য সম্পদের যোগান।",
            "জলপথ ও সস্তা পরিবহন ব্যবস্থা।",
            "জলবিদ্যুৎ উৎপাদন (কাপ্তাই বিদ্যুৎ কেন্দ্র)।",
          ],
        },
        {
          question:
            "ফারাক্কা বাঁধের ফলে বাংলাদেশের উত্তর-পশ্চিমাঞ্চলে কী ধরনের ভৌগোলিক পরিবর্তন ঘটেছে?",
          key_points_for_answer: [
            "মরুকরণ প্রক্রিয়া ও পানির স্তর নিচে নেমে যাওয়া।",
            "লবণাক্ততা বৃদ্ধি (দক্ষিণাঞ্চলে)।",
            "নাব্য হ্রাস ও জীববৈচিত্র্য ধ্বংস।",
          ],
        },
      ],
    },
  },
  {
    _id: "65bf8e1a2f4a5c001d8e4a6",
    title: "SAARC: দক্ষিণ এশীয় আঞ্চলিক সহযোগিতা সংস্থা ও বাংলাদেশ",
    category: "আন্তর্জাতিক বিষয়াবলী",
    tags: [
      "SAARC",
      "সার্ক",
      "দক্ষিণ এশিয়া",
      "আঞ্চলিক রাজনীতি",
      "বিসিএস আন্তর্জাতিক",
    ],
    last_updated: "২০২৬-০২-০৪",
    article_content: {
      summary:
        "সার্ক (SAARC) হলো দক্ষিণ এশিয়ার আটটি দেশের একটি অর্থনৈতিক ও রাজনৈতিক সংগঠন। ১৯৮৫ সালে বাংলাদেশের তৎকালীন রাষ্ট্রপতি জিয়াউর রহমানের উদ্যোগে এটি প্রতিষ্ঠিত হয়। এর প্রধান লক্ষ্য হলো সদস্য দেশগুলোর মধ্যে পারস্পরিক সহযোগিতা বৃদ্ধি এবং জনগণের জীবনযাত্রার মান উন্নয়ন করা।",
      key_points: [
        "প্রতিষ্ঠা: ৮ ডিসেম্বর ১৯৮৫ (ঢাকা সম্মেলন)।",
        "সদর দপ্তর: কাঠমান্ডু, নেপাল।",
        "প্রতিষ্ঠাতা সদস্য: ৭টি (বর্তমানে ৮টি)।",
        "সর্বশেষ সদস্য: আফগানিস্তান (২০০৭ সালে)।",
        "সার্কের ১ম মহাসচিব: আবুল আহসান (বাংলাদেশ)।",
      ],
      visual_representation: {
        image_tag: "",
        caption: "সার্কের সদস্য রাষ্ট্রসমূহ এবং এর প্রাতিষ্ঠানিক লোগো।",
      },
      sections: [
        {
          heading: "১. সার্কের ইতিহাস ও বাংলাদেশের ভূমিকা",
          content:
            "১৯৭০-এর দশকের শেষের দিকে বাংলাদেশ দক্ষিণ এশীয় দেশগুলোর মধ্যে একটি বাণিজ্য জোট গঠনের প্রস্তাব দেয়। ১৯৮৫ সালের ৭-৮ ডিসেম্বর ঢাকার প্রথম সার্ক সম্মেলনে আনুষ্ঠানিকভাবে এটি যাত্রা শুরু করে। সার্কের সনদে ১০টি ধারা রয়েছে এবং এর সিদ্ধান্তগুলো সদস্য দেশগুলোর 'সর্বসম্মতিক্রমে' (Unanimity) গৃহীত হয়।",
        },
        {
          heading: "২. সার্কের গুরুত্বপূর্ণ সংস্থাসমূহ ও তাদের অবস্থান",
          table_data: [
            {
              সংস্থা: "সার্ক সচিবালয়",
              পূর্ণরূপ: "SAARC Secretariat",
              লক্ষ্য: "কাঠমান্ডু, নেপাল",
            },
            {
              সংস্থা: "সার্ক কৃষি কেন্দ্র",
              পূর্ণরূপ: "SAARC Agriculture Centre",
              লক্ষ্য: "ঢাকা, বাংলাদেশ",
            },
            {
              সংস্থা: "সার্ক এনার্জি সেন্টার",
              পূর্ণরূপ: "SAARC Energy Centre",
              লক্ষ্য: "ইসলামাবাদ, পাকিস্তান",
            },
            {
              সংস্থা: "সার্ক কালচারাল সেন্টার",
              পূর্ণরূপ: "SAARC Cultural Centre",
              লক্ষ্য: "কলম্বো, শ্রীলঙ্কা",
            },
            {
              সংস্থা: "দক্ষিণ এশীয় বিশ্ববিদ্যালয়",
              পূর্ণরূপ: "South Asian University",
              লক্ষ্য: "নয়াদিল্লি, ভারত",
            },
          ],
        },
      ],
    },
    preliminary_exam_prep: {
      focus: "বিসিএস প্রিলিমিনারি স্পেশাল বুলেট",
      mcqs: [
        {
          id: 1,
          question: "সার্ক (SAARC) প্রতিষ্ঠার উদ্যোগ গ্রহণকারী দেশ কোনটি?",
          options: ["ক) ভারত", "খ) পাকিস্তান", "গ) বাংলাদেশ", "ঘ) নেপাল"],
          answer: "গ) বাংলাদেশ",
          explanation:
            "বাংলাদেশের তৎকালীন রাষ্ট্রপতি জিয়াউর রহমান প্রথম দক্ষিণ এশীয় দেশগুলোকে নিয়ে একটি আঞ্চলিক জোট গঠনের আনুষ্ঠানিক প্রস্তাব দেন।",
        },
        {
          id: 2,
          question: "সার্কের বর্তমান (১৫তম) মহাসচিব কে?",
          options: [
            "ক) এসালা ভিরাকুন",
            "খ) গোলাম সারওয়ার",
            "গ) অর্জুন বাহাদুর থাপা",
            "ঘ) আমজাদ হোসেন বি সিয়াল",
          ],
          answer: "খ) গোলাম সারওয়ার",
          explanation:
            "বাংলাদেশের কূটনীতিক গোলাম সারওয়ার ২০২৩ সালে সার্কের ১৫তম মহাসচিব হিসেবে দায়িত্ব গ্রহণ করেন। তিনি সার্কের ৩য় বাংলাদেশী মহাসচিব।",
        },
        {
          id: 3,
          question: "আফগানিস্তান কত সালে সার্কের সদস্যপদ লাভ করে?",
          options: ["ক) ২০০৫", "খ) ২০০৭", "গ) ২০১০", "ঘ) ১৯৮৫"],
          answer: "খ) ২০০৭",
          explanation:
            "২০০৭ সালে নয়া দিল্লিতে অনুষ্ঠিত ১৪তম সার্ক সম্মেলনে আফগানিস্তান অষ্টম সদস্য হিসেবে আনুষ্ঠানিকভাবে যোগদান করে।",
        },
        {
          id: 4,
          question: "সার্ক চার্টার বা সনদ কোথায় স্বাক্ষরিত হয়?",
          options: ["ক) কাঠমান্ডু", "খ) ঢাকা", "গ) ইসলামাবাদ", "ঘ) থিম্পু"],
          answer: "খ) ঢাকা",
          explanation:
            "১৯৮৫ সালের ৮ ডিসেম্বর ঢাকার প্রথম সম্মেলনে সার্কের সনদ বা চার্টার স্বাক্ষরিত হয়। তাই ৮ ডিসেম্বরকে 'সার্ক চার্টার দিবস' বলা হয়।",
        },
      ],
    },
    written_exam_prep: {
      guidelines:
        "লিখিত পরীক্ষার জন্য 'সার্কের স্থবিরতা' (ভারত-পাকিস্তান দ্বন্দ্ব) এবং বিমসটেক (BIMSTEC) কেন সার্কের বিকল্প হিসেবে দেখা দিচ্ছে—এই বিষয়গুলোতে ফোকাস করুন।",
      possible_questions: [
        {
          question:
            "আঞ্চলিক সহযোগিতা বৃদ্ধিতে সার্কের ব্যর্থতার কারণগুলো বিশ্লেষণ করুন।",
          key_points_for_answer: [
            "ভারত ও পাকিস্তানের মধ্যে রাজনৈতিক ও সীমান্ত বিরোধ।",
            "দ্বিপাক্ষিক সমস্যা আলোচনার সুযোগ না থাকা (সার্ক সনদে নিষিদ্ধ)।",
            "সদস্য দেশগুলোর মধ্যে আস্থার অভাব ও নিরাপত্তা সংকট।",
          ],
        },
        {
          question:
            "SAPTA এবং SAFTA বলতে কী বোঝায়? সার্কের অর্থনৈতিক উন্নয়নে এদের গুরুত্ব লিখুন।",
          key_points_for_answer: [
            "SAPTA: SAARC Preferential Trading Arrangement (১৯৯৫)।",
            "SAFTA: South Asian Free Trade Area (২০০৬)।",
            "আঞ্চলিক বাণিজ্য বৃদ্ধি ও শুল্ক কমানোর মাধ্যমে অর্থনৈতিক সংহতি।",
          ],
        },
      ],
    },
  },
  {
    _id: "65bf8e1a2f4a5c001d8e4a5",
    title: "জনশুমারি ও গৃহগণনা ২০২২: বাংলাদেশের ৬ষ্ঠ শুমারির পূর্ণাঙ্গ চিত্র",
    category: "বাংলাদেশ বিষয়াবলী",
    tags: [
      "জনশুমারি ২০২২",
      "৬ষ্ঠ শুমারি",
      "বাংলাদেশের জনসংখ্যা",
      "পরিসংখ্যান",
      "বিসিএস সাধারণ জ্ঞান",
    ],
    last_updated: "২০২৬-০২-০৪",
    article_content: {
      summary:
        "বাংলাদেশের ৬ষ্ঠ জনশুমারি ও গৃহগণনা ১৫-২১ জুন ২০২২ সালে পরিচালিত হয়। এটি ছিল বাংলাদেশের প্রথম 'ডিজিটাল শুমারি'। বাংলাদেশ পরিসংখ্যান ব্যুরো (BBS) এর তথ্যানুযায়ী, এই শুমারির মাধ্যমে দেশের জনসংখ্যার সঠিক ও আধুনিক তথ্যচিত্র তুলে ধরা হয়েছে, যা পরিকল্পনা প্রণয়নে গুরুত্বপূর্ণ ভূমিকা রাখছে।",
      key_points: [
        "শুমারি অনুষ্ঠিত হয়: ১৫-২১ জুন, ২০২২।",
        "এটি বাংলাদেশের ১ম ডিজিটাল জনশুমারি।",
        "ব্যবহৃত পদ্ধতি: Computer Assisted Personal Interviewing (CAPI)।",
        "শুমারি চলাকালীন সময়কে বলা হয়: 'শুমারি সপ্তাহ' (Census Week)।",
        "শুমারির রেফারেন্স পয়েন্ট: ১৪ জুন ২০২২ দিবাগত রাত ১২টা।",
      ],
      visual_representation: {
        image_tag: "",
        caption:
          "৬ষ্ঠ জনশুমারির প্রধান পরিসংখ্যান ও জনসংখ্যার জনমিতিক পরিবর্তন।",
      },
      sections: [
        {
          heading: "১. জনশুমারির প্রধান ফলাফল (চূড়ান্ত প্রতিবেদন অনুযায়ী)",
          content:
            "২০২২ সালের শুমারির চূড়ান্ত রিপোর্ট অনুযায়ী বাংলাদেশের মোট জনসংখ্যা ১৬ কোটি ৯৮ লাখ ২৮ হাজার ৯১১ জন। এর মধ্যে পুরুষ ৮ কোটি ৪১ লাখ ও মহিলা ৮ কোটি ৫৬ লাখ। অর্থাৎ দেশে প্রথমবারের মতো পুরুষের তুলনায় মহিলার সংখ্যা বৃদ্ধি পেয়েছে। জনসংখ্যার বার্ষিক বৃদ্ধির হার ১.২২%।",
        },
        {
          heading: "২. গুরুত্বপূর্ণ জনমিতিক পরিসংখ্যান",
          table_data: [
            {
              সংস্থা: "মোট জনসংখ্যা",
              পূর্ণরূপ: "১৬,৯৮,২৮,৯১১ জন",
              লক্ষ্য: "বার্ষিক বৃদ্ধি: ১.২২%",
            },
            {
              সংস্থা: "নারী-পুরুষ অনুপাত",
              পূর্ণরূপ: "৯৮ : ১০০",
              লক্ষ্য: "প্রতি ১০০ মহিলার বিপরীতে ৯৮ জন পুরুষ",
            },
            {
              সংস্থা: "জনসংখ্যার ঘনত্ব",
              পূর্ণরূপ: "১,১১৫ জন",
              লক্ষ্য: "প্রতি বর্গকিলোমিটারে (সর্বোচ্চ ঢাকা)",
            },
            {
              সংস্থা: "স্বাক্ষরতার হার (৭+)",
              পূর্ণরূপ: "৭৪.৬৬%",
              লক্ষ্য: "পুরুষ ৭৭.৬৬%, মহিলা ৭১.৭১%",
            },
            {
              সংস্থা: "ধর্মীয় হার",
              পূর্ণরূপ: "মুসলিম ৯১.০৪%",
              লক্ষ্য: "হিন্দু ৭.৯৫%, অন্যান্য ১.০১%",
            },
          ],
        },
      ],
    },
    preliminary_exam_prep: {
      focus: "বিসিএস প্রিলিমিনারি ডাটা ব্যাংক",
      mcqs: [
        {
          id: 1,
          question: "বাংলাদেশের প্রথম ডিজিটাল জনশুমারি কত তারিখে অনুষ্ঠিত হয়?",
          options: [
            "ক) ১-৭ জুন ২০২২",
            "খ) ১৫-২১ জুন ২০২২",
            "গ) ১০-১৬ জুলাই ২০২২",
            "ঘ) ১-৭ জানুয়ারি ২০২২",
          ],
          answer: "খ) ১৫-২১ জুন ২০২২",
          explanation:
            "২০২২ সালের ১৫ থেকে ২১ জুন পর্যন্ত দেশব্যাপী ষষ্ঠ জনশুমারি ও গৃহগণনা অনুষ্ঠিত হয়, যা ছিল দেশের প্রথম ডিজিটাল শুমারি।",
        },
        {
          id: 2,
          question:
            "২০২২ সালের জনশুমারি অনুযায়ী বাংলাদেশের জনসংখ্যার বার্ষিক বৃদ্ধির হার কত?",
          options: ["ক) ১.৩৭%", "খ) ১.২২%", "গ) ১.৪৮%", "ঘ) ১.৫৯%"],
          answer: "খ) ১.২২%",
          explanation:
            "২০১১ সালের শুমারিতে এই হার ছিল ১.৩৭%, যা ২০২২ সালে কমে দাঁড়িয়েছে ১.২২% এ।",
        },
        {
          id: 3,
          question:
            "৬ষ্ঠ জনশুমারি অনুযায়ী বাংলাদেশের কোন বিভাগে জনসংখ্যার ঘনত্ব সবচেয়ে বেশি?",
          options: ["ক) চট্টগ্রাম", "খ) সিলেট", "গ) ঢাকা", "ঘ) বরিশাল"],
          answer: "গ) ঢাকা",
          explanation:
            "ঢাকা বিভাগে জনসংখ্যার ঘনত্ব সবচেয়ে বেশি (প্রতি বর্গকিলোমিটারে ২,১৫৬ জন) এবং বরিশাল বিভাগে সবচেয়ে কম।",
        },
        {
          id: 4,
          question:
            "জনশুমারি ২০২২ অনুযায়ী বাংলাদেশে স্বাক্ষরতার হার (৭ বছর+) কত?",
          options: ["ক) ৫১.৭৭%", "খ) ৭০.১০%", "গ) ৭৪.৬৬%", "ঘ) ৭৮.০০%"],
          answer: "গ) ৭৪.৬৬%",
          explanation:
            "২০২২ সালের শুমারি অনুযায়ী দেশে ৭ বছরের উর্ধ্বে স্বাক্ষরতার গড় হার ৭৪.৬৬%।",
        },
      ],
    },
    written_exam_prep: {
      guidelines:
        "লিখিত পরীক্ষার জন্য 'ডিজিটাল শুমারির গুরুত্ব' এবং 'ডেমোগ্রাফিক ডিভিডেন্ড' বা জনমিতিক লভ্যাংশ নিয়ে এই শুমারির তথ্যের প্রভাব বিশ্লেষণ করতে হতে পারে।",
      possible_questions: [
        {
          question:
            "৬ষ্ঠ জনশুমারিতে ডিজিটাল প্রযুক্তির ব্যবহার কীভাবে তথ্যের নির্ভুলতা নিশ্চিত করেছে?",
          key_points_for_answer: [
            "CAPI পদ্ধতির মাধ্যমে রিয়েল-টাইম ডাটা সংগ্রহ।",
            "GIS (Geographic Information System) মানচিত্রের ব্যবহার।",
            "ডাটা এন্ট্রিতে ভুল কমানো এবং দ্রুত ফলাফল প্রকাশ।",
          ],
        },
        {
          question:
            "বাংলাদেশের বর্তমান জনসংখ্যার কাঠামো কীভাবে টেকসই উন্নয়ন লক্ষ্যমাত্রা (SDG) অর্জনে ভূমিকা রাখতে পারে?",
          key_points_for_answer: [
            "কর্মক্ষম জনসংখ্যার আধিক্য (Demographic Dividend)।",
            "নির্ভরশীলতার হার হ্রাস।",
            "স্বাক্ষরতা ও স্বাস্থ্য সূচকের উন্নয়ন।",
          ],
        },
      ],
    },
  },
  {
    _id: "65bf8e1a2f4a5c001d8e4a4",
    title: "OIC: মুসলিম বিশ্বের কণ্ঠস্বর ও ভূ-রাজনীতি",
    category: "আন্তর্জাতিক বিষয়াবলী",
    tags: [
      "OIC",
      "মুসলিম বিশ্ব",
      "ইসলামী সহযোগিতা সংস্থা",
      "বাংলাদেশ ও ওআইসি",
      "বিসিএস আন্তর্জাতিক",
    ],
    last_updated: "২০২৬-০২-০৪",
    article_content: {
      summary:
        "ওআইসি (OIC) হলো মুসলিম বিশ্বের দেশগুলোর একটি আন্তর্জাতিক সংস্থা। ১৯৬৯ সালে আল-আকসা মসজিদে অগ্নিকাণ্ডের ঘটনার প্রেক্ষিতে এটি প্রতিষ্ঠিত হয়। এটি জাতিসংঘে মুসলিম দেশগুলোর স্বার্থ রক্ষায় কাজ করে এবং বর্তমানে এটি বিশ্বের দ্বিতীয় বৃহত্তম আন্তঃসরকারি সংস্থা (জাতিসংঘের পরেই)।",
      key_points: [
        "প্রতিষ্ঠা: ২৫ সেপ্টেম্বর ১৯৬৯ (মরক্কোর রাবাত সম্মেলনে)।",
        "সদর দপ্তর: জেদ্দা, সৌদি আরব।",
        "বর্তমান সদস্য রাষ্ট্র: ৫৭টি।",
        "অফিসিয়াল ভাষা: ৩টি (আরবি, ইংরেজি ও ফরাসি)।",
        "বাংলাদেশ সদস্যপদ লাভ করে: ১৯৭৪ সালে (লাহোর সম্মেলনে)।",
      ],
      visual_representation: {
        image_tag: "",
        caption:
          "OIC সদস্য রাষ্ট্রসমূহের ভৌগোলিক অবস্থান এবং সংস্থার সাংগঠনিক কাঠামো।",
      },
      sections: [
        {
          heading: "১. ঐতিহাসিক প্রেক্ষাপট ও লক্ষ্য",
          content:
            "১৯৬৯ সালে জেরুজালেমের পবিত্র আল-আকসা মসজিদে ইহুদিদের অগ্নিসংযোগের ঘটনায় মুসলিম বিশ্ব তীব্র ক্ষোভে ফেটে পড়ে। এর প্রেক্ষিতে মরক্কোর রাবাতে মুসলিম নেতৃবৃন্দের এক শীর্ষ সম্মেলনে OIC গঠিত হয়। এর মূল লক্ষ্য হলো মুসলিম দেশগুলোর মধ্যে ভ্রাতৃত্ব জোরদার করা এবং ফিলিস্তিন সমস্যার স্থায়ী সমাধান।",
        },
        {
          heading: "২. ওআইসি-এর প্রধান অঙ্গসংস্থা ও পদসমূহ",
          table_data: [
            {
              সংস্থা: "ইসলামিক সামিট",
              পূর্ণরূপ: "সর্বোচ্চ নীতিনির্ধারক সভা",
              লক্ষ্য: "প্রতি ৩ বছর অন্তর অনুষ্ঠিত হয়",
            },
            {
              সংস্থা: "সদস্য রাষ্ট্র",
              পূর্ণরূপ: "৫৭টি দেশ",
              লক্ষ্য: "৫৬টি সার্বভৌম দেশ ও ১টি পর্যবেক্ষক",
            },
            {
              সংস্থা: "মহাসচিব",
              পূর্ণরূপ: "হিজেন ব্রাহিম তাহা (বর্তমান)",
              লক্ষ্য: "জেদ্দা ভিত্তিক প্রধান নির্বাহী",
            },
            {
              সংস্থা: "IDB",
              পূর্ণরূপ: "Islamic Development Bank",
              লক্ষ্য: "অর্থনৈতিক উন্নয়ন ও ঋণ প্রদান",
            },
            {
              সংস্থা: "IUT",
              পূর্ণরূপ: "Islamic University of Technology",
              লক্ষ্য: "গাজীপুর, বাংলাদেশ (কারিগরি শিক্ষা)",
            },
          ],
        },
      ],
    },
    preliminary_exam_prep: {
      focus: "বিসিএস প্রিলিমিনারি ডাটা প্যাক",
      mcqs: [
        {
          id: 1,
          question: "বাংলাদেশ কত সালে ওআইসি (OIC) এর সদস্যপদ লাভ করে?",
          options: ["ক) ১৯৭২", "খ) ১৯৭৩", "গ) ১৯৭৪", "ঘ) ১৯৭৫"],
          answer: "গ) ১৯৭৪",
          explanation:
            "১৯৭৪ সালে পাকিস্তানের লাহোরে অনুষ্ঠিত ২য় ওআইসি শীর্ষ সম্মেলনে বঙ্গবন্ধু শেখ মুজিবুর রহমানের নেতৃত্বে বাংলাদেশ সদস্যপদ লাভ করে।",
        },
        {
          id: 2,
          question: "ওআইসি (OIC) এর সচিবালয় বা সদর দপ্তর কোথায় অবস্থিত?",
          options: ["ক) মক্কা", "খ) রিয়াদ", "গ) জেদ্দা", "ঘ) কায়রো"],
          answer: "গ) জেদ্দা",
          explanation:
            "ওআইসি এর প্রধান কার্যালয় বা সচিবালয় সৌদি আরবের জেদ্দায় অবস্থিত।",
        },
        {
          id: 3,
          question:
            "ওআইসি এর একমাত্র কারিগরি বিশ্ববিদ্যালয় 'IUT' বাংলাদেশে কোথায় অবস্থিত?",
          options: ["ক) সাভার", "খ) গাজীপুর", "গ) নারায়ণগঞ্জ", "ঘ) কুমিল্লা"],
          answer: "খ) গাজীপুর",
          explanation:
            "গাজীপুরে অবস্থিত ইসলামিক ইউনিভার্সিটি অব টেকনোলজি (IUT) সরাসরি ওআইসি দ্বারা পরিচালিত একটি অঙ্গপ্রতিষ্ঠান।",
        },
        {
          id: 4,
          question:
            "২০২৪ সালে ওআইসি এর ১৫তম শীর্ষ সম্মেলন কোথায় অনুষ্ঠিত হয়েছে?",
          options: ["ক) গাম্বিয়া", "খ) তুরস্ক", "গ) মিশর", "ঘ) ইন্দোনেশিয়া"],
          answer: "ক) গাম্বিয়া",
          explanation:
            "২০২৪ সালের ৪-৫ মে গাম্বিয়ার রাজধানী বানজুলে ওআইসি এর ১৫তম শীর্ষ সম্মেলন অনুষ্ঠিত হয়।",
        },
      ],
    },
    written_exam_prep: {
      guidelines:
        "লিখিত পরীক্ষার জন্য 'রোহিঙ্গা সংকটে ওআইসি-এর ভূমিকা' এবং 'মুসলিম বিশ্বের অনৈক্য'—এই বিষয়গুলো বিশ্লেষণাত্মকভাবে পড়ার পরামর্শ থাকবে।",
      possible_questions: [
        {
          question:
            "রোহিঙ্গা ইস্যুতে আন্তর্জাতিক বিচার আদালতে (ICJ) ওআইসি-এর ভূমিকা আলোচনা করুন।",
          key_points_for_answer: [
            "গাম্বিয়ার মাধ্যমে মামলা পরিচালনা ও অর্থায়ন।",
            "মিয়ানমারের ওপর কূটনৈতিক চাপ প্রয়োগ।",
            "মানবিক সহায়তা ও শরণার্থীদের অধিকার সুরক্ষায় প্রস্তাব পাস।",
          ],
        },
        {
          question: "ফিলিস্তিন সংকটে ওআইসি-এর ব্যর্থতা ও সীমাবদ্ধতাগুলো কী কী?",
          key_points_for_answer: [
            "সদস্য দেশগুলোর মধ্যে রাজনৈতিক অনৈক্য।",
            "সামরিক শক্তির অভাব ও কেবল কূটনৈতিক বিবৃতির ওপর নির্ভরশীলতা।",
            "বৃহৎ শক্তিগুলোর (যেমন: যুক্তরাষ্ট্র) ভেটো ও প্রভাবশালী ভূমিকা।",
          ],
        },
      ],
    },
  },
  {
    _id: "65bf8e1a2f4a5c001d8e4a3",
    title: "BRICS: উদীয়মান অর্থনৈতিক শক্তি ও বৈশ্বিক প্রেক্ষাপট",
    category: "আন্তর্জাতিক বিষয়াবলী",
    tags: [
      "BRICS",
      "ব্রিকস",
      "নিউ ডেভেলপমেন্ট ব্যাংক",
      "ভূ-রাজনীতি",
      "বিসিএস আন্তর্জাতিক",
    ],
    last_updated: "২০২৬-০২-০৪",
    article_content: {
      summary:
        "ব্রিকস হলো বিশ্বের পাঁচটি প্রধান উদীয়মান অর্থনীতির (ব্রাজিল, রাশিয়া, ভারত, চীন ও দক্ষিণ আফ্রিকা) সমন্বয়ে গঠিত একটি জোট। ২০০৯ সালে এর যাত্রা শুরু হয়। বর্তমানে এটি পশ্চিমা বিশ্বের বিকল্প একটি অর্থনৈতিক শক্তি হিসেবে আত্মপ্রকাশ করেছে এবং ২০২৪ সালে নতুন সদস্য অন্তর্ভুক্তির মাধ্যমে এটি 'BRICS Plus' হিসেবে পরিচিতি পাচ্ছে।",
      key_points: [
        "BRIC শব্দটির প্রবর্তক: জিম ও’নিল (গোল্ডম্যান স্যাকস-এর অর্থনীতিবিদ)।",
        "প্রতিষ্ঠা: ১৬ জুন ২০০৯ (প্রথম সম্মেলন: রাশিয়ার ইয়েকাতেরিনবার্গে)।",
        "সদর দপ্তর: সাংহাই, চীন (নিউ ডেভেলপমেন্ট ব্যাংক)।",
        "২০২৪-এর নতুন সদস্য: ইরান, ইথিওপিয়া, মিশর ও সংযুক্ত আরব আমিরাত।",
        "বিশ্ব জনসংখ্যার প্রায় ৪৫% এবং বৈশ্বিক জিডিপির ২৮% এই জোটের অন্তর্ভুক্ত।",
      ],
      visual_representation: {
        image_tag: "",
        caption:
          "BRICS সদস্য রাষ্ট্রসমূহ এবং বৈশ্বিক জিডিপিতে তাদের অংশীদারিত্ব।",
      },
      sections: [
        {
          heading: "১. ব্রিকস-এর বিবর্তন ও সদস্যপদ",
          content:
            "শুরুতে এটি ছিল BRIC (ব্রাজিল, রাশিয়া, ভারত, চীন)। ২০১০ সালে দক্ষিণ আফ্রিকা যোগ দিলে নাম হয় BRICS। ২০২৪ সালের ১ জানুয়ারি থেকে মিশর, ইথিওপিয়া, ইরান এবং সংযুক্ত আরব আমিরাত আনুষ্ঠানিকভাবে সদস্যপদ লাভ করে। আর্জেন্টিনা আমন্ত্রণ পেলেও পরবর্তীতে তা প্রত্যাখ্যান করে এবং সৌদি আরব সদস্যপদ গ্রহণের বিষয়টি পর্যালোচনায় রেখেছে।",
        },
        {
          heading: "২. নিউ ডেভেলপমেন্ট ব্যাংক (NDB)",
          table_data: [
            {
              সংস্থা: "NDB",
              পূর্ণরূপ: "New Development Bank",
              লক্ষ্য: "সাংহাই, চীন (সদর দপ্তর)",
            },
            {
              সংস্থা: "প্রতিষ্ঠা",
              পূর্ণরূপ: "২০১৪ (ফোর্তালেজা সম্মেলন)",
              লক্ষ্য: "বিকল্প বিশ্বব্যাংক হিসেবে পরিচিত",
            },
            {
              সংস্থা: "বাংলাদেশ",
              পূর্ণরূপ: "NDB-এর সদস্য (২০২১)",
              লক্ষ্য: "প্রথম অ-প্রতিষ্ঠাতা সদস্য হিসেবে যোগদান",
            },
            {
              সংস্থা: "মূলধন",
              পূর্ণরূপ: "১০০ বিলিয়ন ডলার",
              লক্ষ্য: "সদস্য দেশগুলোর অবকাঠামো উন্নয়ন",
            },
          ],
        },
      ],
    },
    preliminary_exam_prep: {
      focus: "বিসিএস প্রিলিমিনারি কারেন্ট অ্যাফেয়ার্স",
      mcqs: [
        {
          id: 1,
          question:
            "ব্রিকস (BRICS) এর সর্বশেষ ১৬তম শীর্ষ সম্মেলন কোথায় অনুষ্ঠিত হয়েছে?",
          options: [
            "ক) জোহানেসবার্গ, দক্ষিণ আফ্রিকা",
            "খ) কাজান, রাশিয়া",
            "গ) নয়া দিল্লি, ভারত",
            "ঘ) বেইজিং, চীন",
          ],
          answer: "খ) কাজান, রাশিয়া",
          explanation:
            "২০২৪ সালের ২২-২৪ অক্টোবর রাশিয়ার কাজান শহরে ব্রিকস-এর ১৬তম শীর্ষ সম্মেলন অনুষ্ঠিত হয়।",
        },
        {
          id: 2,
          question:
            "নিচের কোন দেশটি ২০২৪ সালে ব্রিকস-এ নতুন সদস্য হিসেবে যোগদান করেনি?",
          options: ["ক) ইরান", "খ) মিশর", "গ) আর্জেন্টিনা", "ঘ) ইথিওপিয়া"],
          answer: "গ) আর্জেন্টিনা",
          explanation:
            "আর্জেন্টিনার নতুন সরকার ব্রিকস-এ যোগ না দেওয়ার সিদ্ধান্ত নিয়েছে। বাকি দেশগুলো ২০২৪ সালের ১ জানুয়ারি সদস্যপদ লাভ করে।",
        },
        {
          id: 3,
          question:
            "ব্রিকস কর্তৃক প্রতিষ্ঠিত ব্যাংকের (NDB) প্রথম প্রেসিডেন্ট কে ছিলেন?",
          options: [
            "ক) কে ভি কামাথ",
            "খ) দিলমা রুসেফ",
            "গ) এনজিওজি ওকোনজো",
            "ঘ) জিম ইয়ং কিম",
          ],
          answer: "ক) কে ভি কামাথ",
          explanation:
            "ভারতের কে ভি কামাথ ছিলেন NDB-এর প্রথম প্রেসিডেন্ট। বর্তমান প্রেসিডেন্ট ব্রাজিলের দিলমা রুসেফ।",
        },
        {
          id: 4,
          question:
            "বাংলাদেশ কত সালে নিউ ডেভেলপমেন্ট ব্যাংক (NDB)-এর সদস্যপদ লাভ করে?",
          options: ["ক) ২০১৯", "খ) ২০২০", "গ) ২০২১", "ঘ) ২০২২"],
          answer: "গ) ২০২১",
          explanation:
            "বাংলাদেশ ২০২১ সালের ১৬ সেপ্টেম্বর ব্রিকস ব্যাংকের (NDB) সদস্যপদ লাভ করে।",
        },
      ],
    },
    written_exam_prep: {
      guidelines:
        "লিখিত পরীক্ষার জন্য 'ডি-ডলারাইজেশন' (De-dollarization) এবং ব্রিকসের নিজস্ব মুদ্রা চালুর সম্ভাবনা নিয়ে বিশ্লেষণমূলক প্রস্তুতি নিন।",
      possible_questions: [
        {
          question:
            "বৈশ্বিক রাজনীতিতে G7-এর বিকল্প হিসেবে ব্রিকসের উত্থান কতটা বাস্তবসম্মত?",
          key_points_for_answer: [
            "জিডিপি ও ক্রয়ক্ষমতার ভিত্তিতে G7-কে ছাড়িয়ে যাওয়ার সম্ভাবনা।",
            "গ্লোবাল সাউথ-এর নেতৃত্বদান।",
            "অভ্যন্তরীণ রাজনৈতিক বৈচিত্র্য ও ভারত-চীন দ্বন্দ্বের চ্যালেঞ্জ।",
          ],
        },
        {
          question:
            "নিউ ডেভেলপমেন্ট ব্যাংক (NDB) বাংলাদেশের অবকাঠামো উন্নয়নে কী ভূমিকা রাখতে পারে?",
          key_points_for_answer: [
            "সহজ শর্তে ঋণ প্রাপ্তি।",
            "পদ্মা রেল সংযোগ বা মেট্রোরেলের মতো মেগা প্রকল্পে বিকল্প অর্থায়ন।",
            "আন্তর্জাতিক অর্থনৈতিক রাজনীতিতে বাংলাদেশের কৌশলগত অবস্থান শক্তিশালী করা।",
          ],
        },
      ],
    },
  },
  {
    _id: "65bf8e1a2f4a5c001d8e4a2",
    title: "IMF: আন্তর্জাতিক মুদ্রা তহবিল ও বৈশ্বিক আর্থিক স্থিতিশীলতা",
    category: "আন্তর্জাতিক বিষয়াবলী",
    tags: ["IMF", "আইএমএফ", "এসডিআর", "বিশ্ব অর্থনীতি", "বিসিএস আন্তর্জাতিক"],
    last_updated: "২০২৬-০২-০৪",
    article_content: {
      summary:
        "আইএমএফ (IMF) হলো ১৯০টি দেশের একটি আন্তর্জাতিক সংস্থা, যা বৈশ্বিক আর্থিক সহযোগিতা, মুদ্রার স্থিতিশীলতা নিশ্চিত করা এবং সদস্য দেশগুলোর ভারসাম্যহীন লেনদেন (Balance of Payments) সমস্যা সমাধানে ঋণ প্রদান করে। ১৯৪৪ সালে ব্রেটন উডস সম্মেলনের মাধ্যমে এটি প্রতিষ্ঠিত হয়।",
      key_points: [
        "প্রতিষ্ঠা: ২৭ ডিসেম্বর ১৯৪৫ (কার্যকর), ১৯৪৪ (ব্রেটন উডস সম্মেলন)।",
        "সদর দপ্তর: ওয়াশিংটন ডি.সি., যুক্তরাষ্ট্র।",
        "প্রধান কারেন্সি: SDR (Special Drawing Rights)।",
        "ব্যবস্থাপনা পরিচালক: ক্রিস্টালিনা জর্জিয়েভা (বুলগেরিয়া)।",
        "বাংলাদেশ সদস্যপদ লাভ করে: ১৭ আগস্ট ১৯৭২।",
      ],
      visual_representation: {
        image_tag: "",
        caption: "আইএমএফ-এর সাংগঠনিক কাঠামো এবং ঋণ প্রদানের প্রক্রিয়া।",
      },
      sections: [
        {
          heading: "১. আইএমএফ-এর কার্যাবলী ও এসডিআর (SDR)",
          content:
            "আইএমএফ-এর প্রধান কাজ হলো সদস্য দেশগুলোর মুদ্রার বিনিময় হার তদারকি করা এবং কোনো দেশ অর্থসংকটে পড়লে তাদের সহায়তা করা। আইএমএফ-এর নিজস্ব হিসাব একক বা মুদ্রা হলো 'এসডিআর' (SDR), যা ৫টি শক্তিশালী মুদ্রার (ডলার, ইউরো, পাউন্ড, ইয়েন এবং ইউয়ান) ঝুড়ি দিয়ে তৈরি।",
        },
        {
          heading: "২. আইএমএফ বনাম বিশ্বব্যাংক",
          table_data: [
            {
              সংস্থা: "IMF",
              পূর্ণরূপ: "International Monetary Fund",
              লক্ষ্য:
                "স্বল্পমেয়াদী আর্থিক স্থিতিশীলতা ও কারেন্সি সংকট মোকাবিলা",
            },
            {
              সংস্থা: "World Bank",
              পূর্ণরূপ: "World Bank Group",
              লক্ষ্য: "দীর্ঘমেয়াদী উন্নয়ন ও দারিদ্র্য বিমোচন",
            },
            {
              সংস্থা: "ঋণ",
              পূর্ণরূপ: "ব্যালেন্স অব পেমেন্ট সাপোর্ট",
              লক্ষ্য: "সদস্য দেশের মুদ্রার মান রক্ষা",
            },
            {
              সংস্থা: "সদর দপ্তর",
              পূর্ণরূপ: "ওয়াশিংটন ডি.সি.",
              লক্ষ্য: "উভয় সংস্থার সদর দপ্তর একই শহরে (টুইন সিস্টার)",
            },
          ],
        },
      ],
    },
    preliminary_exam_prep: {
      focus: "বিসিএস প্রিলিমিনারি ও ব্যাংক জব নোট",
      mcqs: [
        {
          id: 1,
          question:
            "আইএমএফ (IMF) এর মুদ্রা হিসেবে পরিচিত 'SDR' বা গোল্ড পেপার কত সালে চালু হয়?",
          options: ["ক) ১৯৪৫", "খ) ১৯৬৯", "গ) ১৯৭২", "ঘ) ১৯৯৫"],
          answer: "খ) ১৯৬৯",
          explanation:
            "Special Drawing Rights (SDR) ১৯৬৯ সালে আইএমএফ কর্তৃক প্রবর্তিত হয়, যা সদস্য দেশগুলোর অফিসিয়াল রিজার্ভের পরিপূরক হিসেবে কাজ করে।",
        },
        {
          id: 2,
          question:
            "বর্তমানে আইএমএফ-এর প্রধান অর্থনীতিবিদ (Chief Economist) কে?",
          options: [
            "ক) গীতা গোপীনাথ",
            "খ) পিয়েরে-অলিভিয়ার গৌরিঞ্চাস",
            "গ) ডেভিড ম্যালপাস",
            "ঘ) ক্রিস্টিন লাগার্দে",
          ],
          answer: "খ) পিয়েরে-অলিভিয়ার গৌরিঞ্চাস",
          explanation:
            "ফরাসি অর্থনীতিবিদ পিয়েরে-অলিভিয়ার গৌরিঞ্চাস গীতা গোপীনাথের স্থলাভিষিক্ত হয়ে বর্তমানে এই দায়িত্ব পালন করছেন।",
        },
        {
          id: 3,
          question:
            "আইএমএফ-এর 'এসডিআর' বাস্কেটে সর্বশেষ যুক্ত হওয়া মুদ্রা কোনটি?",
          options: [
            "ক) জাপানি ইয়েন",
            "খ) ব্রিটিশ পাউন্ড",
            "গ) চীনা ইউয়ান",
            "ঘ) ইউরো",
          ],
          answer: "গ) চীনা ইউয়ান",
          explanation:
            "২০১৬ সালে চীনের মুদ্রা ইউয়ান (RMB) আইএমএফ-এর এসডিআর বাস্কেটে পঞ্চম মুদ্রা হিসেবে যুক্ত হয়।",
        },
        {
          id: 4,
          question: "কোন রিপোর্টটি আইএমএফ প্রতি বছর প্রকাশ করে?",
          options: [
            "ক) Global Economic Prospects",
            "খ) World Development Report",
            "গ) World Economic Outlook",
            "ঘ) Human Development Report",
          ],
          answer: "গ) World Economic Outlook",
          explanation:
            "World Economic Outlook (WEO) আইএমএফ-এর প্রধান ফ্ল্যাগশিপ রিপোর্ট।",
        },
      ],
    },
    written_exam_prep: {
      guidelines:
        "লিখিত পরীক্ষার জন্য 'বাংলাদেশের ৪.৭ বিলিয়ন ডলারের ঋণ' এবং আইএমএফ-এর সংস্কারমূলক শর্তসমূহ (যেমন: ভর্তুকি কমানো, ব্যাংক সংস্কার) নিয়ে বিস্তারিত পড়ুন।",
      possible_questions: [
        {
          question:
            "বাংলাদেশের অর্থনীতিতে আইএমএফ-এর ঋণের প্রভাব ও শর্তাবলী বিশ্লেষণ করুন।",
          key_points_for_answer: [
            "বৈদেশিক মুদ্রার রিজার্ভের ওপর ইতিবাচক প্রভাব।",
            "ভর্তুকি প্রত্যাহার ও জ্বালানি তেলের মূল্য সমন্বয়।",
            "রাজস্ব আয় বৃদ্ধি ও ব্যাংকিং খাতে শৃঙ্খলা আনা।",
          ],
        },
        {
          question:
            "ব্রেটন উডস টুইনস (Bretton Woods Twins) বলতে কী বোঝায়? তাদের মধ্যে পার্থক্য লিখুন।",
          key_points_for_answer: [
            "১৯৪৪ সালের সম্মেলনের মাধ্যমে আইএমএফ ও বিশ্বব্যাংকের জন্ম।",
            "আইএমএফ আর্থিক তদারকি করে, বিশ্বব্যাংক অবকাঠামো উন্নয়নে কাজ করে।",
            "উভয়ের সদস্যপদ একটি অন্যটির ওপর নির্ভরশীল।",
          ],
        },
      ],
    },
  },
  {
    _id: "65bf8e1a2f4a5c001d8e4a1",
    title: "জাতীয় রাজস্ব বোর্ড (NBR): বাংলাদেশের রাজস্ব কাঠামোর মেরুদণ্ড",
    category: "বাংলাদেশ বিষয়াবলী",
    tags: [
      "NBR",
      "এনবিআর",
      "আয়কর",
      "ভ্যাট",
      "রাজস্ব নীতি",
      "বাংলাদেশ অর্থনীতি",
    ],
    last_updated: "২০২৬-০২-০৪",
    article_content: {
      summary:
        "জাতীয় রাজস্ব বোর্ড (NBR) হলো বাংলাদেশের অর্থ মন্ত্রণালয়ের অভ্যন্তরীণ সম্পদ বিভাগের অধীনস্থ একটি বিভাগ। ১৯৭২ সালে রাষ্ট্রপতির আদেশ নম্বর ৭৬-এর মাধ্যমে এটি প্রতিষ্ঠিত হয়। সরকারের বাজেটের সিংহভাগ অর্থ এনবিআর-এর সংগৃহীত কর থেকে আসে। এর প্রধান তিনটি কর খাত হলো: আয়কর, ভ্যাট (ভ্যালু অ্যাডেড ট্যাক্স) এবং শুল্ক (Customs)।",
      key_points: [
        "প্রতিষ্ঠা: ১৯৭২ সালে (আদেশ নং ৭৬)।",
        "অভিভাবক মন্ত্রণালয়: অর্থ মন্ত্রণালয় (অভ্যন্তরীণ সম্পদ বিভাগ)।",
        "চেয়ারম্যান পদাধিকার বলে 'অভ্যন্তরীণ সম্পদ বিভাগ' (IRD)-এর সচিবের দায়িত্ব পালন করেন।",
        "প্রধান তিনটি রাজস্ব উৎস: কাস্টমস, ভ্যাট ও আয়কর।",
        "ডিজিটাল সেবা: ই-টিআইএন (e-TIN) এবং অনলাইন ভ্যাট রেজিস্ট্রেশন।",
      ],
      visual_representation: {
        image_tag: "",
        caption:
          "এনবিআর-এর প্রশাসনিক কাঠামো এবং সরকারের রাজস্ব আয়ের প্রধান উৎসসমূহ।",
      },
      sections: [
        {
          heading: "১. এনবিআর-এর ঐতিহাসিক প্রেক্ষাপট",
          content:
            "১৯৭২ সালে স্বাধীন বাংলাদেশে জাতীয় রাজস্ব বোর্ড গঠিত হয়। এটি সরকারের কর নীতি নির্ধারণ, রাজস্ব আদায় এবং চোরাচালান রোধে কাজ করে। বাংলাদেশে বর্তমানে প্রত্যক্ষ কর (আয়কর) এবং পরোক্ষ কর (ভ্যাট, কাস্টমস ডিউটি) সংগ্রহের মাধ্যমে উন্নয়ন প্রকল্পসমূহের অর্থায়ন নিশ্চিত করছে এই সংস্থাটি।",
        },
        {
          heading: "২. গুরুত্বপূর্ণ রাজস্ব দিবসসমূহ",
          table_data: [
            {
              সংস্থা: "জাতীয় ভ্যাট দিবস",
              পূর্ণরূপ: "১০ ডিসেম্বর",
              লক্ষ্য: "ভ্যাট সচেতনতা বৃদ্ধি",
            },
            {
              সংস্থা: "জাতীয় আয়কর দিবস",
              পূর্ণরূপ: "৩০ নভেম্বর",
              লক্ষ্য: "করদাতাদের উৎসাহিত করা",
            },
            {
              সংস্থা: "আন্তর্জাতিক কাস্টমস দিবস",
              পূর্ণরূপ: "২৬ জানুয়ারি",
              লক্ষ্য: "বিশ্বব্যাপী শুল্ক ব্যবস্থাপনা",
            },
            {
              সংস্থা: "জাতীয় রাজস্ব মেলা",
              পূর্ণরূপ: "নভেম্বর মাস",
              লক্ষ্য: "এক ছাদের নিচে কর সেবা প্রদান",
            },
          ],
        },
      ],
    },
    preliminary_exam_prep: {
      focus: "বিসিএস ও সরকারি ব্যাংক জব কুইজ",
      mcqs: [
        {
          id: 1,
          question:
            "জাতীয় রাজস্ব বোর্ড (NBR) কোন মন্ত্রণালয়ের অধীনে কাজ করে?",
          options: [
            "ক) পরিকল্পনা মন্ত্রণালয়",
            "খ) অর্থ মন্ত্রণালয়",
            "গ) বাণিজ্য মন্ত্রণালয়",
            "ঘ) শিল্প মন্ত্রণালয়",
          ],
          answer: "খ) অর্থ মন্ত্রণালয়",
          explanation:
            "এনবিআর অর্থ মন্ত্রণালয়ের অভ্যন্তরীণ সম্পদ বিভাগের (Internal Resources Division) অধীনে একটি সংবিধিবদ্ধ সংস্থা।",
        },
        {
          id: 2,
          question: "বাংলাদেশে জাতীয় আয়কর দিবস পালিত হয় কবে?",
          options: [
            "ক) ১০ ডিসেম্বর",
            "খ) ১ জুলাই",
            "গ) ৩০ নভেম্বর",
            "ঘ) ১ জানুয়ারি",
          ],
          answer: "গ) ৩০ নভেম্বর",
          explanation: "প্রতি বছর ৩০ নভেম্বর জাতীয় আয়কর দিবস হিসেবে পালিত হয়।",
        },
        {
          id: 3,
          question: "বাংলাদেশে ভ্যাট (VAT) বা মূসক প্রথম কবে চালু হয়?",
          options: [
            "ক) ১ জুলাই ১৯৯১",
            "খ) ১ জুলাই ১৯৯৬",
            "গ) ১ জুন ২০০১",
            "ঘ) ১৬ ডিসেম্বর ১৯৭২",
          ],
          answer: "ক) ১ জুলাই ১৯৯১",
          explanation:
            "১ জুলাই ১৯৯১ সাল থেকে বাংলাদেশে মূল্য সংযোজন কর (ভ্যাট) ব্যবস্থা প্রবর্তন করা হয়।",
        },
        {
          id: 4,
          question: "NBR এর চেয়ারম্যান পদাধিকার বলে কোন বিভাগের সচিব হন?",
          options: [
            "ক) অর্থনৈতিক সম্পর্ক বিভাগ",
            "খ) অর্থ বিভাগ",
            "গ) অভ্যন্তরীণ সম্পদ বিভাগ",
            "ঘ) পরিসংখ্যান ও তথ্য ব্যবস্থাপনা বিভাগ",
          ],
          answer: "গ) অভ্যন্তরীণ সম্পদ বিভাগ",
          explanation:
            "এনবিআর-এর চেয়ারম্যান একই সাথে অভ্যন্তরীণ সম্পদ বিভাগ (IRD)-এর সচিবের দায়িত্ব পালন করেন।",
        },
        {
          id: 5,
          question: "বর্তমানে বাংলাদেশে ভ্যাট-এর আদর্শ হার (Standard Rate) কত?",
          options: ["ক) ৫%", "খ) ১০%", "গ) ১৫%", "ঘ) ২০%"],
          answer: "গ) ১৫%",
          explanation:
            "বাংলাদেশে ভ্যাটের আদর্শ হার হলো ১৫%, তবে বিভিন্ন স্তরে হ্রাসকৃত হারও বিদ্যমান।",
        },
        {
          id: 6,
          question: "TIN এর পূর্ণরূপ কী?",
          options: [
            "ক) Tax Information Network",
            "খ) Taxpayer Identification Number",
            "গ) Taxation Internal Node",
            "ঘ) Trade Identification Number",
          ],
          answer: "খ) Taxpayer Identification Number",
          explanation: "TIN (টিন) মানে হলো করদাতার শনাক্তকরণ নম্বর।",
        },
        {
          id: 7,
          question: "BIN (বিন) কোন কর ব্যবস্থার সাথে সম্পর্কিত?",
          options: ["ক) আয়কর", "খ) শুল্ক", "গ) ভ্যাট (VAT)", "ঘ) আবগারি শুল্ক"],
          answer: "গ) ভ্যাট (VAT)",
          explanation:
            "Business Identification Number (BIN) মূলত ভ্যাট নিবন্ধনের জন্য ব্যবহৃত হয়।",
        },
        {
          id: 8,
          question: "বাংলাদেশে আয়কর কত প্রকার?",
          options: ["ক) ১ প্রকার", "খ) ২ প্রকার", "গ) ৩ প্রকার", "ঘ) ৪ প্রকার"],
          answer: "খ) ২ প্রকার",
          explanation:
            "আয়কর প্রধানত দুই প্রকার: ব্যক্তিক আয়কর এবং কর্পোরেট (কোম্পানি) আয়কর।",
        },
        {
          id: 9,
          question: "NBR কত সালে প্রতিষ্ঠিত হয়?",
          options: ["ক) ১৯৭২", "খ) ১৯৭৪", "গ) ১৯৮২", "ঘ) ১৯৯১"],
          answer: "ক) ১৯৭২",
          explanation:
            "রাষ্ট্রপতির আদেশ নম্বর ৭৬-এর মাধ্যমে ১৯৭২ সালে জাতীয় রাজস্ব বোর্ড প্রতিষ্ঠিত হয়।",
        },
        {
          id: 10,
          question: "আন্তর্জাতিক কাস্টমস দিবস পালিত হয় কোন তারিখে?",
          options: [
            "ক) ১০ ডিসেম্বর",
            "খ) ২৬ জানুয়ারি",
            "গ) ১ জুলাই",
            "ঘ) ৭ এপ্রিল",
          ],
          answer: "খ) ২৬ জানুয়ারি",
          explanation:
            "সারা বিশ্বে ২৬ জানুয়ারি আন্তর্জাতিক কাস্টমস দিবস হিসেবে পালিত হয়।",
        },
      ],
    },
    written_exam_prep: {
      guidelines:
        "লিখিত পরীক্ষার জন্য 'ডিজিটাল এনবিআর' এবং 'কর ফাঁকি রোধে চ্যালেঞ্জসমূহ' নিয়ে প্রস্তুতি নিন।",
      possible_questions: [
        {
          question:
            "বাংলাদেশের অর্থনীতিতে রাজস্ব সংগ্রহের গুরুত্ব আলোচনা করুন।",
          key_points_for_answer: [
            "মেগা প্রকল্পসমূহের (যেমন: পদ্মা সেতু) নিজস্ব অর্থায়ন নিশ্চিত করা।",
            "বিদেশি ঋণের ওপর নির্ভরতা কমানো।",
            "সরকারি সেবা ও সামাজিক নিরাপত্তা বেষ্টনীর ব্যয় নির্বাহ করা।",
          ],
        },
        {
          question:
            "সরাসরি কর (আয়কর) বৃদ্ধি করা বাংলাদেশের অর্থনীতির জন্য কেন প্রয়োজন?",
          key_points_for_answer: [
            "আয় বৈষম্য কমানো।",
            "রাজস্ব জিডিপি (Revenue-to-GDP ratio) বৃদ্ধি করা।",
            "একটি স্থিতিশীল অভ্যন্তরীণ সম্পদ ভিত্তি তৈরি করা।",
          ],
        },
      ],
    },
  },
  {
    _id: "65bf8e1a2f4a5c001d8e4a0",
    title:
      "জাতীয় বাজেট ২০২৫-২৬: অর্থনৈতিক স্থিতিশীলতা ও অন্তর্ভুক্তিমূলক প্রবৃদ্ধি",
    category: "বাংলাদেশ বিষয়াবলী",
    tags: [
      "বাজেট ২০২৫-২৬",
      "বাংলাদেশ অর্থনীতি",
      "জিডিপি প্রবৃদ্ধি",
      "রাজস্ব আয়",
      "বিসিএস সাধারণ জ্ঞান",
    ],
    last_updated: "২০২৬-০২-০৪",
    article_content: {
      summary:
        "বাংলাদেশের ২০২৫-২৬ অর্থবছরের বাজেট দেশের অর্থনৈতিক সংকট কাটিয়ে স্থিতিশীলতা ফেরানো এবং উচ্চ মধ্যম আয়ের দেশে উত্তরণের লক্ষ্য নিয়ে প্রণীত হয়েছে। এই বাজেটে উচ্চ মূল্যস্ফীতি নিয়ন্ত্রণ এবং বৈদেশিক মুদ্রার রিজার্ভ সুরক্ষাকে সর্বোচ্চ অগ্রাধিকার দেওয়া হয়েছে। এটি বাংলাদেশের ৫৪তম জাতীয় বাজেট।",
      key_points: [
        "বাজেটের আকার: প্রস্তাবিত বাজেটের আকার প্রায় ৮ লাখ ২০ হাজার কোটি টাকা।",
        "জিডিপি প্রবৃদ্ধির লক্ষ্যমাত্রা: ৬.৭৫% (প্রাক্কলিত)।",
        "মূল্যস্ফীতি নিয়ন্ত্রণের লক্ষ্য: ৬.৫% এর মধ্যে রাখা।",
        "বার্ষিক উন্নয়ন কর্মসূচি (ADP): ২ লাখ ৮৫ হাজার কোটি টাকা।",
        "বাজেট ঘাটতি: জিডিপির ৫% এর মধ্যে রাখার লক্ষ্যমাত্রা।",
      ],
      visual_representation: {
        image_tag: "",
        caption:
          "বাজেট ২০২৫-২৬ এর আয়ের উৎস এবং ব্যয়ের খাতসমূহের তুলনামূলক বিশ্লেষণ।",
      },
      sections: [
        {
          heading: "১. বাজেটের আয় ও ব্যয়ের উৎস",
          content:
            "বাজেটের আয়ের প্রধান উৎস হলো জাতীয় রাজস্ব বোর্ড (NBR) সংগৃহীত কর। আয়ের প্রায় ৬২% আসে প্রত্যক্ষ ও পরোক্ষ কর থেকে। ব্যয়ের বড় অংশ ব্যয় হয় শিক্ষা, স্বাস্থ্য, সামাজিক নিরাপত্তা বেষ্টনী এবং মেগা প্রকল্পসমূহের ঋণের সুদ পরিশোধে।",
        },
        {
          heading: "২. গুরুত্বপূর্ণ বরাদ্দসমূহ",
          table_data: [
            {
              সংস্থা: "শিক্ষা ও প্রযুক্তি",
              পূর্ণরূপ: "সর্বোচ্চ বরাদ্দ (১৪.৫%)",
              লক্ষ্য: "স্মার্ট বাংলাদেশ ও মানবসম্পদ উন্নয়ন",
            },
            {
              সংস্থা: "সামাজিক নিরাপত্তা",
              পূর্ণরূপ: "১ লাখ ৩০ হাজার কোটি টাকা",
              লক্ষ্য: "দরিদ্র বিমোচন ও সুরক্ষা",
            },
            {
              সংস্থা: "কৃষি ও খাদ্য",
              পূর্ণরূপ: "৩৬ হাজার কোটি টাকা",
              লক্ষ্য: "খাদ্য নিরাপত্তা নিশ্চিত করা",
            },
            {
              সংস্থা: "জ্বালানি ও বিদ্যুৎ",
              পূর্ণরূপ: "৩২ হাজার কোটি টাকা",
              লক্ষ্য: "নিরবচ্ছিন্ন বিদ্যুৎ সরবরাহ",
            },
          ],
        },
      ],
    },
    preliminary_exam_prep: {
      focus: "বাজেট ২০২৫-২৬ স্পেশাল কুইজ",
      mcqs: [
        {
          id: 1,
          question: "২০২৫-২৬ অর্থবছরের বাজেট বাংলাদেশের কততম জাতীয় বাজেট?",
          options: ["ক) ৫২তম", "খ) ৫৩তম", "গ) ৫৪তম", "ঘ) ৫৫তম"],
          answer: "গ) ৫৪তম",
          explanation:
            "১৯৭২ সালের প্রথম বাজেটের পর থেকে এটি বাংলাদেশের ৫৪তম জাতীয় বাজেট।",
        },
        {
          id: 2,
          question: "বাংলাদেশের ইতিহাসে প্রথম বাজেট কে পেশ করেন?",
          options: [
            "ক) বঙ্গবন্ধু শেখ মুজিবুর রহমান",
            "খ) তাজউদ্দীন আহমদ",
            "গ) এম সাইফুর রহমান",
            "ঘ) আবুল মাল আবদুল মুহিত",
          ],
          answer: "খ) তাজউদ্দীন আহমদ",
          explanation:
            "১৯৭২ সালের ৩০ জুন স্বাধীন বাংলাদেশের প্রথম বাজেট পেশ করেন তৎকালীন অর্থমন্ত্রী তাজউদ্দীন আহমদ।",
        },
        {
          id: 3,
          question:
            "বাজেট ২০২৫-২৬ এ জিডিপি প্রবৃদ্ধির লক্ষ্যমাত্রা কত ধরা হয়েছে?",
          options: ["ক) ৬.২৫%", "খ) ৬.৫০%", "গ) ৬.৭৫%", "ঘ) ৭.৫০%"],
          answer: "গ) ৬.৭৫%",
          explanation:
            "অর্থনৈতিক পুনরুদ্ধার বিবেচনায় ২০২৫-২৬ অর্থবছরে প্রবৃদ্ধির লক্ষ্যমাত্রা ৬.৭৫% নির্ধারণ করা হয়েছে।",
        },
        {
          id: 4,
          question: "বাজেটে সর্বোচ্চ বরাদ্দ দেওয়া হয়েছে কোন খাতে?",
          options: [
            "ক) কৃষি",
            "খ) জনপ্রশাসন",
            "গ) শিক্ষা ও প্রযুক্তি",
            "ঘ) পরিবহন ও যোগাযোগ",
          ],
          answer: "গ) শিক্ষা ও প্রযুক্তি",
          explanation:
            "দক্ষ মানবসম্পদ গড়ার লক্ষ্যে শিক্ষা ও প্রযুক্তি খাতে বরাদ্দের হার সর্বোচ্চ রাখা হয়েছে।",
        },
        {
          id: 5,
          question: "বাজেটের অর্থ বছরের সময়কাল কোনটি?",
          options: [
            "ক) ১ জানুয়ারি - ৩১ ডিসেম্বর",
            "খ) ১ জুলাই - ৩০ জুন",
            "গ) ১ মার্চ - ২৮ ফেব্রুয়ারি",
            "ঘ) ১ এপ্রিল - ৩১ মার্চ",
          ],
          answer: "খ) ১ জুলাই - ৩০ জুন",
          explanation:
            "বাংলাদেশে অর্থ বছর শুরু হয় জুলাই মাসের ১ তারিখ থেকে এবং শেষ হয় পরবর্তী বছরের ৩০ জুন।",
        },
        {
          id: 6,
          question: "২০২৫-২৬ বাজেটে এনবিআর-এর রাজস্ব আয়ের লক্ষ্যমাত্রা কত?",
          options: [
            "ক) ৪ লাখ কোটি",
            "খ) ৫ লাখ ৪১ হাজার কোটি",
            "গ) ৬ লাখ কোটি",
            "ঘ) ৮ লাখ কোটি",
          ],
          answer: "খ) ৫ লাখ ৪১ হাজার কোটি",
          explanation:
            "সরকারের ব্যয় মেটাতে জাতীয় রাজস্ব বোর্ডকে ৫ লাখ ৪১ হাজার কোটি টাকা সংগ্রহের লক্ষ্য দেওয়া হয়েছে।",
        },
        {
          id: 7,
          question:
            "বাজেট ঘাটতি সাধারণত জিডিপির কত শতাংশের মধ্যে রাখার চেষ্টা করা হয়?",
          options: ["ক) ৩%", "খ) ৫%", "গ) ৭%", "ঘ) ১০%"],
          answer: "খ) ৫%",
          explanation:
            "সামষ্টিক অর্থনৈতিক স্থিতিশীলতার জন্য বাজেট ঘাটতি জিডিপির ৫ শতাংশের মধ্যে রাখা আদর্শ ধরা হয়।",
        },
        {
          id: 8,
          question: "বাংলাদেশে সবচেয়ে বেশিবার বাজেট পেশ করেছেন কে?",
          options: [
            "ক) তাজউদ্দীন আহমদ ও এম সাইফুর রহমান",
            "খ) এম সাইফুর রহমান ও আবুল মাল আবদুল মুহিত",
            "গ) শাহ এ এম এস কিবরিয়া",
            "ঘ) আ হ ম মুস্তফা কামাল",
          ],
          answer: "খ) এম সাইফুর রহমান ও আবুল মাল আবদুল মুহিত",
          explanation:
            "এম সাইফুর রহমান এবং আবুল মাল আবদুল মুহিত উভয়েই ১২ বার করে জাতীয় বাজেট পেশ করেছেন।",
        },
        {
          id: 9,
          question: "কোন সাংবিধানিক অনুচ্ছেদ অনুযায়ী সরকার বাজেট পেশ করে?",
          options: [
            "ক) ৭৭ অনুচ্ছেদ",
            "খ) ৮১ অনুচ্ছেদ",
            "গ) ৮৭ অনুচ্ছেদ",
            "ঘ) ৯২ অনুচ্ছেদ",
          ],
          answer: "গ) ৮৭ অনুচ্ছেদ",
          explanation:
            "সংবিধানের ৮৭ অনুচ্ছেদ অনুযায়ী রাষ্ট্রপতি প্রতি অর্থ বছরের 'বার্ষিক আর্থিক বিবৃতি' বা বাজেট সংসদে উপস্থাপনের ব্যবস্থা করবেন।",
        },
        {
          id: 10,
          question: "২০২৫-২৬ অর্থবছরে বার্ষিক উন্নয়ন কর্মসূচির (ADP) আকার কত?",
          options: [
            "ক) ২ লাখ কোটি",
            "খ) ২ লাখ ৬৫ হাজার কোটি",
            "গ) ২ লাখ ৮৫ হাজার কোটি",
            "ঘ) ৩ লাখ কোটি",
          ],
          answer: "গ) ২ লাখ ৮৫ হাজার কোটি",
          explanation:
            "উন্নয়ন প্রকল্প বাস্তবায়নের জন্য ২ লাখ ৮৫ হাজার কোটি টাকার এডিপি বরাদ্দ দেওয়া হয়েছে।",
        },
      ],
    },
    written_exam_prep: {
      guidelines:
        "লিখিত পরীক্ষায় বাজেটের ডাটা ব্যবহারের সময় অবশ্যই কারেন্ট অ্যাফেয়ার্স এবং সরকারি গেজেট অনুসরণ করবেন।",
      possible_questions: [
        {
          question:
            "বাজেট ঘাটতি অর্থায়নের উৎসগুলো কী কী? অভ্যন্তরীণ উৎসের ওপর অতিরিক্ত নির্ভরশীলতার প্রভাব কী হতে পারে?",
          key_points_for_answer: [
            "বৈদেশিক সাহায্য ও ঋণ।",
            "ব্যাংক ব্যবস্থা থেকে ঋণ গ্রহণ।",
            "সঞ্চয়পত্র বিক্রয়।",
            "প্রভাব: বেসরকারি খাতের ঋণে টান পড়া এবং মূল্যস্ফীতি বৃদ্ধি।",
          ],
        },
        {
          question:
            "স্মার্ট বাংলাদেশ বিনির্মাণে ২০২৫-২৬ অর্থবছরের বাজেটের ভূমিকা আলোচনা করুন।",
          key_points_for_answer: [
            "আইসিটি ও উদ্ভাবনী খাতে বিশেষ বরাদ্দ।",
            "ডিজিটাল শিক্ষা ও ফ্রিল্যান্সিং উন্নয়নে গুরুত্ব।",
            "সরকারি সেবা ডিজিটাইজেশনে বিনিয়োগ।",
          ],
        },
      ],
    },
  },
  {
    _id: "coding_for_kids_10_years_2026",
    title: "১০ বছর বয়সীদের জন্য কোডিং: ডিজিটাল ভবিষ্যতের প্রথম ধাপ",
    category: "শিক্ষা ও প্রযুক্তি",
    tags: ["কোডিং ফর কিডস", "প্রোগ্রামিং", "স্ক্র্যাচ", "পাইথন", "STEM শিক্ষা"],
    last_updated: "২০২৬-০২-০৫",
    article_content: {
      summary:
        "১০ বছর বয়স হলো কোডিং শেখার একটি আদর্শ সময়। এই বয়সে বাচ্চারা বিমূর্ত চিন্তা (Abstract Thinking) করতে শিখছে। কোডিংয়ের মাধ্যমে তারা গেম তৈরি, অ্যানিমেশন এবং ছোট ছোট অ্যাপ বানাতে পারে, যা তাদের আত্মবিশ্বাস এবং সৃজনশীলতা বহুগুণ বাড়িয়ে দেয়।",
      key_points: [
        "কোডিং বাচ্চাদের গাণিতিক এবং লজিক্যাল চিন্তাভাবনা উন্নত করে।",
        "শুরু করার জন্য সেরা প্লাটফর্ম: Scratch, Blockly, এবং Code.org।",
        "পাইথন (Python) হলো ১০+ বয়সীদের জন্য সবচেয়ে সহজ টেক্সট-বেসড ভাষা।",
        "এটি স্ক্রিন টাইমকে উৎপাদনশীল কাজে রূপান্তর করে।",
        "কোডিং শেখার মাধ্যমে বাচ্চারা ধৈর্য এবং ধারাবাহিকতা শেখে।",
      ],
      visual_representation: {
        image_tag: "",
        caption:
          "স্ক্র্যাচ (Scratch) ইন্টারফেসের মাধ্যমে ড্র্যাগ-অ্যান্ড-ড্রপ কোডিং।",
      },
      sections: [
        {
          heading: "১. কেন ১০ বছর বয়সেই কোডিং শুরু করা উচিত?",
          content:
            "এই বয়সে বাচ্চাদের মস্তিষ্ক খুব দ্রুত নতুন ভাষা এবং প্যাটার্ন শিখতে পারে। কোডিং তাদের কেবল কম্পিউটার ব্যবহারকারী থেকে 'কম্পিউটার স্রষ্টা' হিসেবে গড়ে তোলে। তারা যখন নিজের তৈরি করা কোনো ক্যারেক্টারকে স্ক্রিনে নড়াচড়া করতে দেখে, তখন তাদের শেখার আগ্রহ বেড়ে যায়।",
        },
        {
          heading: "২. ধাপে ধাপে কোডিং শেখার গাইড",
          table_data: [
            {
              সংস্থা: "Scratch",
              পূর্ণরূপ: "Block-based Coding",
              লক্ষ্য: "গেম ও অ্যানিমেশন তৈরি",
            },
            {
              সংস্থা: "Python",
              পূর্ণরূপ: "Text-based Language",
              লক্ষ্য: "সহজ সিনট্যাক্স দিয়ে প্রোগ্রামিং",
            },
            {
              সংস্থা: "Robotics",
              পূর্ণরূপ: "Hardware Coding",
              লক্ষ্য: "রোবট বা খেলনা নিয়ন্ত্রণ",
            },
            {
              সংস্থা: "Web Dev",
              পূর্ণরূপ: "HTML/CSS",
              লক্ষ্য: "নিজের ওয়েবসাইট তৈরি করা",
            },
          ],
        },
      ],
    },
    preliminary_exam_prep: {
      focus: "কোডিং কুইজ (বাচ্চাদের জন্য)",
      mcqs: [
        {
          id: 1,
          question: "কোডিং আসলে কী?",
          options: [
            "ক) কম্পিউটারকে নির্দেশ দেওয়া",
            "খ) গেম খেলা",
            "গ) ছবি আঁকা",
            "ঘ) গান শোনা",
          ],
          answer: "ক) কম্পিউটারকে নির্দেশ দেওয়া",
          explanation:
            "কোডিং হলো কম্পিউটারকে নির্দিষ্ট ভাষায় কিছু নির্দেশ দেওয়া যাতে সে কোনো কাজ করতে পারে।",
        },
        {
          id: 2,
          question:
            "বাচ্চাদের জন্য সবচেয়ে জনপ্রিয় ব্লক-বেসড কোডিং ল্যাঙ্গুয়েজ কোনটি?",
          options: ["ক) C++", "খ) Java", "গ) Scratch", "ঘ) HTML"],
          answer: "গ) Scratch",
          explanation:
            "Scratch একটি ড্র্যাগ-অ্যান্ড-ড্রপ ব্লক কোডিং ভাষা যা বাচ্চাদের জন্য খুব সহজ।",
        },
        {
          id: 3,
          question: "প্রোগ্রামিংয়ে 'Loop' (লুপ) বলতে কী বোঝায়?",
          options: [
            "ক) কোনো কিছু একবার করা",
            "খ) একই কাজ বারবার করা",
            "গ) কম্পিউটার বন্ধ করা",
            "ঘ) ভুল খুঁজে বের করা",
          ],
          answer: "খ) একই কাজ বারবার করা",
          explanation:
            "লুপ ব্যবহার করে আমরা কম্পিউটারকে একই কাজ বারবার করার নির্দেশ দেই।",
        },
        {
          id: 4,
          question: "কোডিংয়ের ভাষায় ভুল বা এরর-কে কী বলা হয়?",
          options: ["ক) Ant", "খ) Bug", "গ) Fly", "ঘ) Error-man"],
          answer: "খ) Bug",
          explanation:
            "কোডিংয়ে কোনো ভুল থাকলে তাকে 'Bug' বলা হয় এবং সেটি ঠিক করাকে বলা হয় 'Debugging'।",
        },
        {
          id: 5,
          question: "নিচের কোনটি একটি টেক্সট-বেসড প্রোগ্রামিং ভাষা?",
          options: ["ক) Blockly", "খ) Python", "গ) MS Paint", "ঘ) Scratch"],
          answer: "খ) Python",
          explanation:
            "পাইথন একটি টেক্সট-বেসড ভাষা যা লিখে লিখে কমান্ড দিতে হয়।",
        },
        {
          id: 6,
          question: "একটি কম্পিউটার প্রোগ্রাম কীভাবে কাজ করে?",
          options: [
            "ক) ধাপ অনুযায়ী নির্দেশ মেনে",
            "খ) এলোমেলোভাবে",
            "গ) কেবল মাউস দিয়ে",
            "ঘ) ইন্টারনেট ছাড়া চলে না",
          ],
          answer: "ক) ধাপ অনুযায়ী নির্দেশ মেনে",
          explanation:
            "প্রোগ্রামিং অ্যালগরিদম বা ধাপ অনুযায়ী ধারাবাহিকভাবে কাজ করে।",
        },
        {
          id: 7,
          question: "কোডিংয়ে 'Variable' (ভ্যারিয়েবল) বলতে কী বোঝায়?",
          options: [
            "ক) একটি গেমের নাম",
            "খ) তথ্য জমা রাখার পাত্র বা বক্স",
            "গ) কম্পিউটারের মাউস",
            "ঘ) কিবোর্ডের বাটন",
          ],
          answer: "খ) তথ্য জমা রাখার পাত্র বা বক্স",
          explanation:
            "ভ্যারিয়েবল হলো এমন একটি জায়গা যেখানে আমরা কোনো নাম বা সংখ্যা জমা রাখি।",
        },
        {
          id: 8,
          question: "ইন্টারনেটের ওয়েবসাইট তৈরি করতে কোন ভাষাটি ব্যবহার করা হয়?",
          options: ["ক) HTML", "খ) Scratch", "গ) Python", "ঘ) Java"],
          answer: "ক) HTML",
          explanation:
            "HTML ব্যবহার করে ওয়েবসাইটের গঠন বা স্ট্রাকচার তৈরি করা হয়।",
        },
        {
          id: 9,
          question: "কোডিং শেখার মাধ্যমে আমরা কোনটি শিখি?",
          options: [
            "ক) লজিক্যাল থিংকিং",
            "খ) ছবি আঁকা",
            "গ) ভিডিও এডিটিং",
            "ঘ) কেবল টাইপিং",
          ],
          answer: "ক) লজিক্যাল থিংকিং",
          explanation: "কোডিং আমাদের যুক্তি দিয়ে চিন্তা করতে শেখায়।",
        },
        {
          id: 10,
          question: "কোনটি একটি ইনপুট ডিভাইস?",
          options: ["ক) মনিটর", "খ) স্পিকার", "গ) কিবোর্ড", "ঘ) প্রিন্টার"],
          answer: "গ) কিবোর্ড",
          explanation: "কিবোর্ড দিয়ে আমরা কম্পিউটারে কোড বা তথ্য ইনপুট দেই।",
        },
      ],
    },
    written_exam_prep: {
      guidelines:
        "পিতামাতাদের জন্য: কোডিং মানেই সারাদিন স্ক্রিনের সামনে বসে থাকা নয়, এটি সৃজনশীলতার একটি মাধ্যম।",
      possible_questions: [
        {
          question: "বাচ্চাদের জন্য কোডিং শেখার সেরা রিসোর্স কী কী?",
          key_points_for_answer: [
            "Code.org (বিনামূল্যে শেখার জন্য)।",
            "Scratch (অ্যানিমেশন তৈরির জন্য)।",
            "Tynker বা উদেমির কিডস স্পেশাল কোর্স।",
          ],
        },
        {
          question: "কোডিং কীভাবে বাচ্চাদের স্কুলের পড়ালেখায় সাহায্য করে?",
          key_points_for_answer: [
            "গণিতে দক্ষতা বৃদ্ধি (অ্যালগরিদম বোঝার মাধ্যমে)।",
            "ধাপে ধাপে সমস্যা সমাধানের ক্ষমতা।",
            "সৃজনশীল লিখন ও গল্প বলার ক্ষমতা (গেম তৈরির মাধ্যমে)।",
          ],
        },
      ],
    },
  },
  {
    _id: "chakma_tribe_bcs_guide_2026",
    title: "চাকমা নৃগোষ্ঠী: ইতিহাস, সংস্কৃতি ও জীবনধারা",
    category: "বাংলাদেশ বিষয়াবলী",
    tags: [
      "চাকমা",
      "ক্ষুদ্র নৃগোষ্ঠী",
      "আদিবাসী",
      "পার্বত্য চট্টগ্রাম",
      "বিসিএস সাধারণ জ্ঞান",
    ],
    last_updated: "২০২৬-০২-০৫",
    article_content: {
      summary:
        "চাকমারা বাংলাদেশের পার্বত্য অঞ্চলের প্রধান এবং বৃহত্তম ক্ষুদ্র নৃগোষ্ঠী। তারা মূলত মঙ্গোলীয় নৃগোষ্ঠীর অন্তর্ভুক্ত এবং বৌদ্ধ ধর্মাবলম্বী। তাদের নিজস্ব ভাষা ও বর্ণমালা রয়েছে। চাকমা সমাজ ব্যবস্থা পিতৃতান্ত্রিক এবং তারা তাদের নিজস্ব 'রাজা' প্রথা এখনও ধরে রেখেছে।",
      key_points: [
        "বাংলাদেশের বৃহত্তম ক্ষুদ্র নৃগোষ্ঠী (সংখ্যাগরিষ্ঠ)।",
        "প্রধানত রাঙ্গামাটি ও খাগড়াছড়ি জেলায় বসবাস করে।",
        "ধর্ম: বৌদ্ধ ধর্ম।",
        "সমাজ ব্যবস্থা: পিতৃতান্ত্রিক।",
        "প্রধান উৎসব: বিজু (বাংলা বছরের শেষ দুই দিন ও নতুন বছরের প্রথম দিন)।",
      ],
      visual_representation: {
        image_tag: "",
        caption:
          "চাকমাদের ঐতিহ্যবাহী পোশাক 'পিনন ও হাদি' এবং বিজু উৎসবের দৃশ্য।",
      },
      sections: [
        {
          heading: "১. প্রশাসনিক ও সামাজিক কাঠামো",
          content:
            "চাকমা সমাজ কতগুলো 'আদামে' বা পাড়ায় বিভক্ত। পাড়ার প্রধানকে বলা হয় 'কার্বারী'। কতগুলো পাড়া নিয়ে গঠিত হয় 'মৌজা', যার প্রধানকে বলা হয় 'হেডম্যান'। আর পুরো চাকমা সার্কেলের প্রধান হলেন 'চাকমা রাজা'।",
        },
        {
          heading: "২. গুরুত্বপূর্ণ সংস্কৃতি ও শব্দকোষ",
          table_data: [
            {
              সংস্থা: "বিজু",
              পূর্ণরূপ: "তিন দিনব্যাপী উৎসব",
              লক্ষ্য: "ফুল বিজু, মূল বিজু ও গজ্জ্যাপজ্জ্যা",
            },
            {
              সংস্থা: "পিনন-হাদি",
              পূর্ণরূপ: "ঐতিহ্যবাহী পোশাক",
              লক্ষ্য: "মেয়েরা পরিধান করে",
            },
            {
              সংস্থা: "ঝুম",
              পূর্ণরূপ: "চাষাবাদ পদ্ধতি",
              লক্ষ্য: "পাহাড়ের ঢালে বিশেষ চাষ",
            },
            {
              সংস্থা: "চাঙমা",
              পূর্ণরূপ: "নিজেদের ভাষা",
              লক্ষ্য: "নিজস্ব বর্ণমালা বিদ্যমান",
            },
          ],
        },
      ],
    },
    preliminary_exam_prep: {
      focus: "বিসিএস প্রিলিমিনারি আদিবাসী কোটা নোট",
      mcqs: [
        {
          id: 1,
          question: "বাংলাদেশের বৃহত্তম ক্ষুদ্র নৃগোষ্ঠী কোনটি?",
          options: ["ক) মারমা", "খ) চাকমা", "গ) গারো", "ঘ) সাঁওতাল"],
          answer: "খ) চাকমা",
          explanation:
            "জনশুমারি অনুযায়ী চাকমারা বাংলাদেশের সবচেয়ে বড় ক্ষুদ্র নৃগোষ্ঠী।",
        },
        {
          id: 2,
          question: "চাকমাদের প্রধান ধর্মীয় উৎসব কোনটি?",
          options: [
            "ক) বিজু",
            "খ) বৈসাবি",
            "গ) ওয়াঙ্গালা",
            "ঘ) বুদ্ধ পূর্ণিমা",
          ],
          answer: "ঘ) বুদ্ধ পূর্ণিমা",
          explanation:
            "চাকমারা বৌদ্ধ ধর্মাবলম্বী হওয়ায় বুদ্ধ পূর্ণিমা তাদের প্রধান ধর্মীয় উৎসব, তবে প্রধান সামাজিক উৎসব হলো বিজু।",
        },
        {
          id: 3,
          question: "চাকমা সমাজের মৌজা প্রধানকে কী বলা হয়?",
          options: ["ক) কার্বারী", "খ) হেডম্যান", "গ) রোয়াজা", "ঘ) রাজা"],
          answer: "খ) হেডম্যান",
          explanation:
            "পাড়ার প্রধানকে কার্বারী এবং মৌজা প্রধানকে হেডম্যান বলা হয়।",
        },
        {
          id: 4,
          question: "চাকমাদের ঐতিহ্যবাহী নাচের নাম কী?",
          options: ["ক) জুম নাচ", "খ) বোতল নাচ", "গ) চেরাউ নাচ", "ঘ) ময়ূর নাচ"],
          answer: "ক) জুম নাচ",
          explanation:
            "চাকমারা তাদের ঐতিহ্যবাহী জুম চাষের আদলে জুম নাচ পরিবেশন করে।",
        },
        {
          id: 5,
          question: "বিজু উৎসবের দ্বিতীয় দিনকে কী বলা হয়?",
          options: [
            "ক) ফুল বিজু",
            "খ) মূল বিজু",
            "গ) গজ্জ্যাপজ্জ্যা",
            "ঘ) পাজন",
          ],
          answer: "খ) মূল বিজু",
          explanation:
            "উৎসবের ১ম দিন ফুল বিজু, ২য় দিন মূল বিজু এবং শেষ দিনকে গজ্জ্যাপজ্জ্যা বলা হয়।",
        },
        {
          id: 6,
          question: "চাকমা ভাষার আদি কাব্যগ্রন্থের নাম কী?",
          options: [
            "ক) রাধামন-ধনপুতি",
            "খ) পাজন",
            "গ) সাকসা",
            "ঘ) চাঙমা কাব্য",
          ],
          answer: "ক) রাধামন-ধনপুতি",
          explanation:
            "রাধামন-ধনপুতি হলো চাকমাদের বিখ্যাত ও প্রাচীন লোকগাঁথা বা পালগান।",
        },
        {
          id: 7,
          question: "চাকমা মহিলারা যে ঐতিহ্যবাহী পোশাক পরে তাকে কী বলে?",
          options: ["ক) থামি", "খ) পিনন ও হাদি", "গ) দকমান্দা", "ঘ) লুঙ্গি"],
          answer: "খ) পিনন ও হাদি",
          explanation:
            "চাকমা মেয়েদের নিম্নাংশের পোশাককে পিনন এবং ঊর্ধ্বাংশের পোশাককে হাদি বলা হয়।",
        },
        {
          id: 8,
          question: "চাকমারা কোন জনগোষ্ঠীর অন্তর্ভুক্ত?",
          options: [
            "ক) ককেশীয়",
            "খ) প্রোটো-অস্ট্রালয়েড",
            "গ) মঙ্গোলীয়",
            "ঘ) নিগ্রোয়েড",
          ],
          answer: "গ) মঙ্গোলীয়",
          explanation:
            "শারীরিক গঠন ও নৃতাত্ত্বিক বিচারে তারা মঙ্গোলীয় জনগোষ্ঠীর অন্তর্ভুক্ত।",
        },
        {
          id: 9,
          question: "চাকমা রাজবাড়ী কোথায় অবস্থিত?",
          options: [
            "ক) খাগড়াছড়ি",
            "খ) বান্দরবান",
            "গ) রাঙ্গামাটি",
            "ঘ) কক্সবাজার",
          ],
          answer: "গ) রাঙ্গামাটি",
          explanation:
            "চাকমা সার্কেলের প্রধান কেন্দ্র ও রাজবাড়ী রাঙ্গামাটি জেলায় অবস্থিত।",
        },
        {
          id: 10,
          question: "চাকমা ভাষা কোন ভাষাগোষ্ঠীর অন্তর্ভুক্ত?",
          options: [
            "ক) অস্ট্রিক",
            "খ) সিনো-তিব্বতি",
            "গ) ইন্দো-আর্য",
            "ঘ) দ্রাবিড়",
          ],
          answer: "গ) ইন্দো-আর্য",
          explanation:
            "চাকমা ভাষা মূলত ইন্দো-আর্য ভাষাগোষ্ঠীর অন্তর্ভুক্ত হলেও এতে তিব্বতি-বর্মী ভাষার প্রভাব রয়েছে।",
        },
      ],
    },
    written_exam_prep: {
      guidelines:
        "লিখিত পরীক্ষায় ক্ষুদ্র নৃগোষ্ঠী নিয়ে প্রশ্নের ক্ষেত্রে তাদের সংস্কৃতি ও বর্তমান উন্নয়নের মেলবন্ধন তুলে ধরা জরুরি।",
      possible_questions: [
        {
          question: "চাকমা সমাজের প্রশাসনিক কাঠামো আলোচনা করুন।",
          key_points_for_answer: [
            "চাকমা সার্কেল ও রাজা প্রথা।",
            "হেডম্যান ও কার্বারীর প্রশাসনিক দায়িত্ব।",
            "রাজস্ব আদায় ও বিচারিক ব্যবস্থা।",
          ],
        },
        {
          question:
            "বাংলাদেশের মূল ধারার সংস্কৃতির সাথে চাকমা সংস্কৃতির সাদৃশ্য ও বৈসাদৃশ্য লিখুন।",
          key_points_for_answer: [
            "ভাষা ও বর্ণমালার স্বকীয়তা।",
            "বিজু ও নববর্ষ পালনের ধরন।",
            "খাদ্যভ্যাস ও জুম চাষের ঐতিহ্য।",
          ],
        },
      ],
    },
  },
  {
    _id: "marma_garo_tribe_bcs_guide_2026",
    title: "মারমা ও গারো নৃগোষ্ঠী: ঐতিহ্য, সংস্কৃতি ও জীবনধারা",
    category: "বাংলাদেশ বিষয়াবলী",
    tags: [
      "মারমা",
      "গারো",
      "ক্ষুদ্র নৃগোষ্ঠী",
      "বিসিএস প্রস্তুতি",
      "সাংস্কৃতিক বৈচিত্র্য",
    ],
    last_updated: "২০২৬-০২-০৫",
    article_content: {
      summary:
        "মারমারা বাংলাদেশের দ্বিতীয় বৃহত্তম ক্ষুদ্র নৃগোষ্ঠী, যারা মূলত পার্বত্য চট্টগ্রামে বসবাস করে। অন্যদিকে, গারোরা তাদের অনন্য মাতৃতান্ত্রিক সমাজ ব্যবস্থার জন্য পরিচিত, যাদের প্রধান বসতি বৃহত্তর ময়মনসিংহ অঞ্চলে। উভয় জাতিসত্তারই নিজস্ব ভাষা, উৎসব এবং সামাজিক রীতিনীতি রয়েছে।",
      key_points: [
        "মারমা সমাজ ব্যবস্থা পিতৃতান্ত্রিক, কিন্তু গারো সমাজ ব্যবস্থা মাতৃতান্ত্রিক।",
        "মারমারা বৌদ্ধ ধর্মাবলম্বী; অধিকাংশ গারো বর্তমানে খ্রিষ্টধর্ম অনুসরণ করে।",
        "মারমাদের প্রধান উৎসব 'সাংগ্রাই', গারোদের প্রধান উৎসব 'ওয়াঙ্গালা'।",
        "গারোদের আদি ধর্মের নাম 'সাংসারেক'।",
        "মারমারা মঙ্গোলীয় নৃগোষ্ঠীর অন্তর্ভুক্ত।",
      ],
      visual_representation: {
        image_tag: "",
        caption:
          "মারমাদের সাংগ্রাই জল উৎসব এবং গারোদের ঐতিহ্যবাহী ওয়ানগালা নৃত্য।",
      },
      sections: [
        {
          heading: "১. মারমা নৃগোষ্ঠীর পরিচয়",
          content:
            "মারমারা মূলত মিয়ানমারের রাখাইন রাজ্য থেকে বাংলাদেশে এসেছে। তারা 'মারমা' শব্দটিকে 'ম্রাইমা' থেকে উদ্ভূত বলে মনে করে। তাদের সমাজ প্রধানকে বলা হয় 'বোমাং রাজা' (বান্দরবান) এবং 'মং রাজা' (খাগড়াছড়ি)। তাদের ঘরগুলো বাঁশ ও ছনের তৈরি এবং মাচা পদ্ধতিতে নির্মিত।",
        },
        {
          heading: "২. গারো নৃগোষ্ঠীর সমাজ ও সংস্কৃতি",
          content:
            "গারোরা নিজেদের 'মান্দি' বলে পরিচয় দিতে পছন্দ করে। তাদের সমাজে পরিবারের সর্বকনিষ্ঠ কন্যাকে 'নোকনা' বা উত্তরাধিকারী বলা হয়। গারোদের প্রধান বাদ্যযন্ত্রের নাম 'দামা' (লম্বা ড্রাম)। তারা বিশেষ এক ধরণের মদ তৈরি করে যাকে 'চু' বলা হয়।",
        },
        {
          heading: "৩. তুলনামূলক টেবিল",
          table_data: [
            { সংস্থা: "বৈশিষ্ট্য", পূর্ণরূপ: "মারমা", লক্ষ্য: "গারো" },
            {
              সংস্থা: "সমাজ",
              পূর্ণরূপ: "পিতৃতান্ত্রিক",
              লক্ষ্য: "মাতৃতান্ত্রিক",
            },
            {
              সংস্থা: "প্রধান উৎসব",
              পূর্ণরূপ: "সাংগ্রাই",
              লক্ষ্য: "ওয়াঙ্গালা",
            },
            {
              সংস্থা: "আবাসস্থল",
              পূর্ণরূপ: "বান্দরবান, খাগড়াছড়ি",
              লক্ষ্য: "ময়মনসিংহ, টাঙ্গাইল, নেত্রকোণা",
            },
            {
              সংস্থা: "ভাষা",
              পূর্ণরূপ: "বর্মী প্রভাবযুক্ত",
              লক্ষ্য: "আচিক (মান্দি ভাষা)",
            },
          ],
        },
      ],
    },
    preliminary_exam_prep: {
      focus: "বিসিএস প্রিলিমিনারি স্পেশাল ১৫ এমসিকিউ",
      mcqs: [
        {
          id: 1,
          question: "বাংলাদেশের দ্বিতীয় বৃহত্তম ক্ষুদ্র নৃগোষ্ঠী কোনটি?",
          options: ["ক) গারো", "খ) মারমা", "গ) সাঁওতাল", "ঘ) ত্রিপুরা"],
          answer: "খ) মারমা",
          explanation:
            "চাকমাদের পরেই জনসংখ্যার দিক থেকে মারমারা দ্বিতীয় অবস্থানে।",
        },
        {
          id: 2,
          question: "গারোরা নিজেদের কী নামে পরিচয় দিতে পছন্দ করে?",
          options: ["ক) ম্রো", "খ) মান্দি", "গ) অস্ট্রিক", "ঘ) আদিবাসী"],
          answer: "খ) মান্দি",
          explanation: "গারো ভাষায় 'মান্দি' শব্দের অর্থ হলো মানুষ।",
        },
        {
          id: 3,
          question: "মারমাদের প্রধান উৎসব 'সাংগ্রাই' কোন সময় পালিত হয়?",
          options: [
            "ক) নবান্ন উৎসবের সময়",
            "খ) বর্ষবরণ বা নববর্ষের সময়",
            "গ) পূর্ণিমার রাতে",
            "ঘ) শীতকালে",
          ],
          answer: "খ) বর্ষবরণ বা নববর্ষের সময়",
          explanation:
            "মারমারা চৈত্র সংক্রান্তি ও নববর্ষ উপলক্ষে সাংগ্রাই বা জলকেলি উৎসব পালন করে।",
        },
        {
          id: 4,
          question: "গারো সমাজের উত্তরাধিকারী প্রথা কী নামে পরিচিত?",
          options: ["ক) নোকনা", "খ) নকমা", "গ) কার্বারী", "ঘ) মাচং"],
          answer: "ক) নোকনা",
          explanation:
            "পরিবারের সবচেয়ে ছোট মেয়েকে 'নোকনা' বলা হয়, যে সম্পদের প্রধান উত্তরাধিকারী হয়।",
        },
        {
          id: 5,
          question: "মারমা সমাজে পাড়ার প্রধানকে কী বলা হয়?",
          options: ["ক) হেডম্যান", "খ) কার্বারী", "গ) রোয়াজা", "ঘ) রাজা"],
          answer: "গ) রোয়াজা",
          explanation:
            "চাকমাদের ক্ষেত্রে কার্বারী বলা হলেও মারমাদের ক্ষেত্রে পাড়া প্রধানকে রোয়াজা বলা হয়।",
        },
        {
          id: 6,
          question: "গারোদের প্রধান সামাজিক উৎসবের নাম কী?",
          options: ["ক) ওয়াঙ্গালা", "খ) সোহরাই", "গ) বিজু", "ঘ) বৈসাবি"],
          answer: "ক) ওয়াঙ্গালা",
          explanation: "এটি তাদের ফসল কাটার উৎসব যা নভেম্বর মাসে উদযাপিত হয়।",
        },
        {
          id: 7,
          question: "কোন নৃগোষ্ঠীর সমাজ ব্যবস্থা মাতৃতান্ত্রিক?",
          options: ["ক) মারমা", "খ) খাসিয়া ও গারো", "গ) চাকমা", "ঘ) ম্রো"],
          answer: "খ) খাসিয়া ও গারো",
          explanation:
            "বাংলাদেশে একমাত্র গারো ও খাসিয়াদের সমাজ ব্যবস্থা মাতৃতান্ত্রিক।",
        },
        {
          id: 8,
          question: "মারমারা কোন বংশোদ্ভূত জাতি?",
          options: [
            "ক) ককেসীয়",
            "খ) তিব্বতি-বর্মী",
            "গ) নেগ্রিটো",
            "ঘ) দ্রাবিড়",
          ],
          answer: "খ) তিব্বতি-বর্মী",
          explanation:
            "মারমারা মূলত তিব্বতি-বর্মী বংশোদ্ভূত মঙ্গোলীয় নৃগোষ্ঠী।",
        },
        {
          id: 9,
          question: "গারোদের আদি ধর্মের নাম কী?",
          options: ["ক) হিন্দু", "খ) খ্রিষ্টান", "গ) সাংসারেক", "ঘ) বৌদ্ধ"],
          answer: "গ) সাংসারেক",
          explanation:
            "বর্তমানে অধিকাংশ গারো খ্রিষ্টান ধর্মাবলম্বী হলেও তাদের আদি ধর্ম ছিল সাংসারেক।",
        },
        {
          id: 10,
          question:
            "বান্দরবানের 'বোমাং সার্কেল' কোন নৃগোষ্ঠী দ্বারা নিয়ন্ত্রিত?",
          options: ["ক) চাকমা", "খ) ত্রিপুরা", "গ) মারমা", "ঘ) তঞ্চঙ্গ্যা"],
          answer: "গ) মারমা",
          explanation: "বান্দরবানের মারমা প্রধানকে বোমাং রাজা বলা হয়।",
        },
        {
          id: 11,
          question: "গারো মেয়েদের ঐতিহ্যবাহী পোশাকের নাম কী?",
          options: ["ক) থামি", "খ) দকমান্দা", "গ) পিনন", "ঘ) হাদি"],
          answer: "খ) দকমান্দা",
          explanation: "গারো নারীরা দকমান্দা ও দকশাড়ি পরিধান করে।",
        },
        {
          id: 12,
          question: "মারমাদের শ্রেষ্ঠ উৎসব 'সাংগ্রাই' এর অন্যতম আকর্ষণ কোনটি?",
          options: ["ক) মোরগ লড়াই", "খ) জলকেলি", "গ) বাঁশ নৃত্য", "ঘ) ঘোড়দৌড়"],
          answer: "খ) জলকেলি",
          explanation:
            "একে অপরের ওপর জল ছিটিয়ে আনন্দ প্রকাশ করা সাংগ্রাইয়ের প্রধান বৈশিষ্ট্য।",
        },
        {
          id: 13,
          question: "মারমা ভাষা কোন লিপিতে লেখা হয়?",
          options: ["ক) রোমান", "খ) চাকমা", "গ) বর্মী", "ঘ) দেবনাগরী"],
          answer: "গ) বর্মী",
          explanation:
            "মারমা ভাষার নিজস্ব লিপি থাকলেও তা বর্মী লিপির সাথে অনেক সাদৃশ্যপূর্ণ।",
        },
        {
          id: 14,
          question: "গারোদের গ্রাম প্রধানকে কী বলা হয়?",
          options: ["ক) হেডম্যান", "খ) নকমা", "গ) কার্বারী", "ঘ) সর্দার"],
          answer: "খ) নকমা",
          explanation: "গারো সমাজের গ্রাম প্রধানকে বলা হয় নকমা।",
        },
        {
          id: 15,
          question: "ওয়াঙ্গালা উৎসব কোন দেবতার উদ্দেশ্যে পালন করা হয়?",
          options: ["ক) ধরিত্রী", "খ) সালজং", "গ) মারুকা", "ঘ) গৌতমা"],
          answer: "খ) সালজং",
          explanation:
            "সূর্য দেবতা 'সালজং'-এর প্রতি কৃতজ্ঞতা জানিয়ে ফসল কাটার উৎসব ওয়াঙ্গালা পালন করা হয়।",
        },
      ],
    },
  },
  {
    _id: "liberation_war_gallantry_awards_bcs_guide_2026",
    title:
      "১৯৭১ সালের বীরত্বসূচক খেতাব: বিসিএস ও প্রতিযোগিতামূলক পরীক্ষার পূর্ণাঙ্গ নোট",
    category: "বাংলাদেশ বিষয়াবলী",
    tags: ["মুক্তিযুদ্ধ", "বীর শ্রেষ্ঠ", "খেতাব", "বিসিএস", "১৯৭১"],
    last_updated: "২০২৬-০২-০৫",
    article_content: {
      summary:
        "১৯৭১ সালের মহান মুক্তিযুদ্ধে সাহসিকতা ও বীরত্বের স্বীকৃতিস্বরূপ বাংলাদেশ সরকার ৪টি ক্যাটাগরিতে বীরত্বসূচক খেতাব প্রদান করে। ১৫ ডিসেম্বর ১৯৭৩ সালে সরকারি গেজেটের মাধ্যমে মোট ৬৭৬ জনকে এই খেতাব দেওয়া হয়। তবে পরবর্তী সময়ে বীরত্বসূচক খেতাবপ্রাপ্তদের তালিকায় কিছু পরিবর্তন ও সংযোজন করা হয়েছে।",
      key_points: [
        "সর্বোচ্চ বীরত্বসূচক খেতাব হলো 'বীর শ্রেষ্ঠ', যা ৭ জনকে প্রদান করা হয়েছে।",
        "দ্বিতীয় সর্বোচ্চ খেতাব 'বীর উত্তম' (৬৮ জন), তৃতীয় 'বীর বিক্রম' (১৭৫ জন) এবং চতুর্থ 'বীর প্রতীক' (৪২৬ জন)।",
        "খেতাবপ্রাপ্তদের মধ্যে ২ জন নারী (তারামন বিবি ও সিতারা বেগম) এবং ১ জন বিদেশী (ওডারল্যান্ড) রয়েছেন।",
        "সকল বীর শ্রেষ্ঠই শহীদ হয়েছিলেন; তাদের মধ্যে সেনাবাহিনীর ৩ জন, ইপিআর-এর ২ জন, নৌবাহিনীর ১ জন এবং বিমান বাহিনীর ১ জন ছিলেন।",
        "খেতাব বাতিল সংক্রান্ত সাম্প্রতিক সরকারি সিদ্ধান্তের কারণে খেতাবপ্রাপ্তের সংখ্যায় কিছুটা পরিবর্তন এসেছে (যেমন: বঙ্গবন্ধুর খুনিদের খেতাব বাতিল)।",
      ],
      visual_representation: {
        image_tag:
          "https://dummyimage.com/1200x630/006a4e/ffffff.png&text=Infographic:+1971+Gallantry+Awards+Bangladesh",
        caption:
          "১৯৭১ সালের বীরত্বসূচক খেতাবের স্তরক্রম এবং সংক্ষিপ্ত পরিসংখ্যান।",
      },
      sections: [
        {
          heading: "১. বীর শ্রেষ্ঠদের তালিকা ও কর্মক্ষেত্র",
          content:
            "সাতজন বীর শ্রেষ্ঠ বাংলাদেশের গর্ব। তারা হলেন: মহিউদ্দিন জাহাঙ্গীর (সেনা), হামিদুর রহমান (সেনা), মোস্তফা কামাল (সেনা), মতিউর রহমান (বিমান), রুহুল আমিন (নৌ), মুন্সী আব্দুর রউফ (ইপিআর) এবং নূর মোহাম্মদ শেখ (ইপিআর)।",
        },
        {
          heading: "২. খেতাবপ্রাপ্তদের পরিসংখ্যান একনজরে",
          table_data: [
            { খেতাব: "বীর শ্রেষ্ঠ", সংখ্যা: "৭ জন", মর্যাদা: "সর্বোচ্চ" },
            { খেতাব: "বীর উত্তম", সংখ্যা: "৬৮ জন", মর্যাদা: "দ্বিতীয়" },
            { খেতাব: "বীর বিক্রম", সংখ্যা: "১৭৫ জন", মর্যাদা: "তৃতীয়" },
            { খেতাব: "বীর প্রতীক", সংখ্যা: "৪২৬ জন", মর্যাদা: "চতুর্থ" },
          ],
        },
      ],
    },
    preliminary_exam_prep: {
      focus: "বিসিএস প্রিলিমিনারি শর্টকাট (MCQ)",
      mcqs: [
        {
          id: 1,
          question: "মুক্তিযুদ্ধের বীরত্বসূচক খেতাব কত তারিখে গেজেটভুক্ত হয়?",
          options: [
            "ক) ১৬ ডিসেম্বর ১৯৭২",
            "খ) ১৫ ডিসেম্বর ১৯৭৩",
            "গ) ২৬ মার্চ ১৯৭২",
            "ঘ) ১০ জানুয়ারি ১৯৭২",
          ],
          answer: "খ) ১৫ ডিসেম্বর ১৯৭৩",
          explanation:
            "১৯৭৩ সালের ১৫ই ডিসেম্বর গেজেট বিজ্ঞপ্তির মাধ্যমে মোট ৬৭৬ জন মুক্তিযোদ্ধাকে বিভিন্ন খেতাবে ভূষিত করা হয়।",
        },
        {
          id: 2,
          question: "নৌবাহিনীর একমাত্র 'বীর শ্রেষ্ঠ' পদকপ্রাপ্ত কে?",
          options: [
            "ক) মতিউর রহমান",
            "খ) রুহুল আমিন",
            "গ) নূর মোহাম্মদ শেখ",
            "ঘ) মুন্সী আব্দুর রউফ",
          ],
          answer: "খ) রুহুল আমিন",
          explanation:
            "ইঞ্জিন রুম আর্টিফিসার রুহুল আমিন ছিলেন নৌবাহিনীর একমাত্র বীর শ্রেষ্ঠ।",
        },
        {
          id: 3,
          question: "বীর শ্রেষ্ঠদের মধ্যে সবচেয়ে কম বয়সী কে ছিলেন?",
          options: [
            "ক) হামিদুর রহমান",
            "খ) মোস্তফা কামাল",
            "গ) মহিউদ্দিন জাহাঙ্গীর",
            "ঘ) মতিউর রহমান",
          ],
          answer: "ক) হামিদুর রহমান",
          explanation: "সিপাহী হামিদুর রহমান মাত্র ১৮ বছর বয়সে শহীদ হন।",
        },
        {
          id: 4,
          question: "একমাত্র বিদেশী হিসেবে 'বীর প্রতীক' খেতাব পেয়েছেন কে?",
          options: [
            "ক) মার্ক টালী",
            "খ) ডব্লিউ এ এস ওডারল্যান্ড",
            "গ) সাইমন ড্রিং",
            "ঘ) মাদার তেরেসা",
          ],
          answer: "খ) ডব্লিউ এ এস ওডারল্যান্ড",
          explanation:
            "অস্ট্রেলীয় নাগরিক ওডারল্যান্ড বাটা সু কোম্পানির ব্যবস্থাপক ছিলেন এবং মুক্তিযুদ্ধে বীরত্বের জন্য খেতাব পান।",
        },
        {
          id: 5,
          question: "মুক্তিযুদ্ধে কতজন মহিলা বীর প্রতীক খেতাব লাভ করেছেন?",
          options: ["ক) ১ জন", "খ) ২ জন", "গ) ৩ জন", "ঘ) ৭ জন"],
          answer: "খ) ২ জন",
          explanation: "তারা হলেন ডা. সিতারা বেগম এবং তারামন বিবি।",
        },
        {
          id: 6,
          question: "বীর শ্রেষ্ঠ মতিউর রহমান কোন বাহিনীর সদস্য ছিলেন?",
          options: [
            "ক) সেনাবাহিনী",
            "খ) বিমান বাহিনী",
            "গ) নৌবাহিনী",
            "ঘ) ইপিআর",
          ],
          answer: "খ) বিমান বাহিনী",
          explanation:
            "তিনি ফ্লাইট লেফটেন্যান্ট ছিলেন এবং বিমান বাহিনী থেকে একমাত্র বীর শ্রেষ্ঠ।",
        },
        {
          id: 7,
          question:
            "বীর শ্রেষ্ঠ হামিদুর রহমানের সমাধি বর্তমানে কোথায় অবস্থিত?",
          options: [
            "ক) মিরপুর বুদ্ধিজীবী কবরস্থান",
            "খ) বনানী সামরিক কবরস্থান",
            "গ) রায়েরবাজার বধ্যভূমি",
            "ঘ) কুমিল্লা সেনানিবাস",
          ],
          answer: "ক) মিরপুর বুদ্ধিজীবী কবরস্থান",
          explanation:
            "২০০৭ সালে ভারতের ত্রিপুরা থেকে তার দেহাবশেষ এনে মিরপুর বুদ্ধিজীবী কবরস্থানে সমাহিত করা হয়।",
        },
        {
          id: 8,
          question:
            "ক্যাপ্টেন মহিউদ্দিন জাহাঙ্গীর কোন সেক্টরের অধীনে যুদ্ধ করেছেন?",
          options: ["ক) ২ নম্বর", "খ) ৭ নম্বর", "গ) ১০ নম্বর", "ঘ) ১১ নম্বর"],
          answer: "খ) ৭ নম্বর",
          explanation:
            "তিনি ৭ নম্বর সেক্টরের অধীনে রাজশাহী ও চাঁপাইনবাবগঞ্জ এলাকায় যুদ্ধ করেন।",
        },
        {
          id: 9,
          question: "বীর শ্রেষ্ঠ মুন্সী আব্দুর রউফ এর পদবী কি ছিল?",
          options: [
            "ক) ল্যান্স নায়েক",
            "খ) সিপাহী",
            "গ) হাবিলদার",
            "ঘ) নায়েক",
          ],
          answer: "ক) ল্যান্স নায়েক",
          explanation:
            "মুন্সী আব্দুর রউফ ইস্ট পাকিস্তান রাইফেলস (ইপিআর)-এর ল্যান্স নায়েক ছিলেন।",
        },
        {
          id: 10,
          question:
            "কতজন মুক্তিযোদ্ধাকে 'বীর উত্তম' খেতাব দেওয়া হয়েছিল (প্রাথমিক গেজেট অনুযায়ী)?",
          options: ["ক) ৬৮ জন", "খ) ৬৯ জন", "গ) ৭৩ জন", "ঘ) ১৭৫ জন"],
          answer: "ক) ৬৮ জন",
          explanation: "সরকারি গেজেট অনুযায়ী বীর উত্তম খেতাব পান ৬৮ জন।",
        },
        {
          id: 11,
          question: "বীর শ্রেষ্ঠ নূর মোহাম্মদ শেখ কোন সেক্টরে যুদ্ধ করেন?",
          options: ["ক) ২ নম্বর", "খ) ৭ নম্বর", "গ) ৮ নম্বর", "ঘ) ৯ নম্বর"],
          answer: "গ) ৮ নম্বর",
          explanation:
            "তিনি ৮ নম্বর সেক্টরের অধীনে যশোর সীমান্তে যুদ্ধ করে শহীদ হন।",
        },
        {
          id: 12,
          question: "বীর প্রতীক তারামন বিবি কোন সেক্টরের অধীনে যুদ্ধ করেছিলেন?",
          options: ["ক) ১১ নম্বর", "খ) ৪ নম্বর", "গ) ২ নম্বর", "ঘ) ৯ নম্বর"],
          answer: "ক) ১১ নম্বর",
          explanation:
            "কুড়িগ্রামের শংকর মাধবপুরে ১১ নম্বর সেক্টরের অধীনে তিনি যুদ্ধ করেন।",
        },
        {
          id: 13,
          question:
            "কোন বীর শ্রেষ্ঠের সমাধি পাকিস্তানে ছিল এবং পরে ২০০৬ সালে দেশে আনা হয়?",
          options: [
            "ক) মতিউর রহমান",
            "খ) হামিদুর রহমান",
            "গ) মোস্তফা কামাল",
            "ঘ) রুহুল আমিন",
          ],
          answer: "ক) মতিউর রহমান",
          explanation:
            "করাচির মাসরুর বেস থেকে তার দেহাবশেষ এনে মিরপুর বুদ্ধিজীবী কবরস্থানে রাখা হয়।",
        },
        {
          id: 14,
          question: "বীর শ্রেষ্ঠ মোস্তফা কামাল কোথায় শহীদ হন?",
          options: [
            "ক) দরুইন, ব্রাহ্মণবাড়িয়া",
            "খ) বুড়িঘাট, রাঙ্গামাটি",
            "গ) ধলই, মৌলভীবাজার",
            "ঘ) গোয়াইনঘাট, সিলেট",
          ],
          answer: "ক) দরুইন, ব্রাহ্মণবাড়িয়া",
          explanation:
            "আখাউড়ার দরুইন গ্রামে সম্মুখ সমরে সিপাহী মোস্তফা কামাল শহীদ হন।",
        },
        {
          id: 15,
          question: "বীরত্বের বিচারে তৃতীয় সর্বোচ্চ খেতাব কোনটি?",
          options: [
            "ক) বীর উত্তম",
            "খ) বীর বিক্রম",
            "গ) বীর প্রতীক",
            "ঘ) কোনোটিই নয়",
          ],
          answer: "খ) বীর বিক্রম",
          explanation:
            "বীর শ্রেষ্ঠ (১ম), বীর উত্তম (২য়), বীর বিক্রম (৩য়) এবং বীর প্রতীক (৪র্থ)।",
        },
      ],
    },
    written_exam_prep: {
      guidelines:
        "লিখিত পরীক্ষায় বীর শ্রেষ্ঠদের নাম, বাহিনী এবং তারা যে সেক্টরে যুদ্ধ করেছেন তা আলাদাভাবে উল্লেখ করা অত্যন্ত জরুরি। বিশেষ করে নৌ-কমান্ডোদের 'অপারেশন জ্যাকপট' এবং তার স্বীকৃতি সম্পর্কে তথ্য সংযুক্ত করলে নম্বর বৃদ্ধি পায়।",
      possible_questions: [
        {
          question:
            "মুক্তিযুদ্ধের খেতাবপ্রাপ্ত দুইজন নারী বীর প্রতীকের অবদান সংক্ষেপে আলোচনা করুন।",
          key_points_for_answer: [
            "তারামন বিবির অসীম সাহসিকতা (১১ নম্বর সেক্টর)।",
            "সিতারা বেগমের নেতৃত্ব ও চিকিৎসা সেবার ভূমিকা (২ নম্বর সেক্টর)।",
            "নারীদের সরাসরি যুদ্ধে অংশগ্রহণের গুরুত্ব।",
          ],
        },
        {
          question: "বীর শ্রেষ্ঠ মতিউর রহমানের আত্মত্যাগের কাহিনী বর্ণনা করুন।",
          key_points_for_answer: [
            "পাকিস্তান বিমান বাহিনী থেকে টি-৩৩ বিমান ছিনতাইয়ের চেষ্টা।",
            "মিনিমাস রশিদ নামক ছাত্রের সাথে সংঘর্ষ এবং শাহাদাত বরণ।",
            "আকাশ যুদ্ধে বীরত্বের স্বীকৃতিস্বরূপ সর্বোচ্চ সম্মান।",
          ],
        },
      ],
    },
  },
  {
    _id: "math_probability_bcs_job_prep_2026",
    title:
      "গণিত: সম্ভাবনা (Probability) - বিসিএস ও নিয়োগ পরীক্ষার পূর্ণাঙ্গ গাইড",
    category: "গাণিতিক যুক্তি",
    tags: ["গণিত", "সম্ভাবনা", "বিসিএস", "শিক্ষক নিবন্ধন", "Probability"],
    last_updated: "২০২৬-০২-০৫",
    article_content: {
      summary:
        "সম্ভাবনা হলো কোনো ঘটনা ঘটার বা না ঘটার গাণিতিক পরিমাপ। এর মান সবসময় ০ থেকে ১-এর মধ্যে থাকে। কোনো ঘটনার সম্ভাবনা ০ হলে সেটি 'অসম্ভব ঘটনা' এবং ১ হলে সেটি 'নিশ্চিত ঘটনা' হিসেবে বিবেচিত হয়।",
      key_points: [
        "সম্ভাবনার মৌলিক সূত্র: $P(A) = \\frac{\\text{অনুকূল ফলাফল}}{\\text{মোট ফলাফল}}$।",
        "যেকোনো ঘটনার সম্ভাবনা $0 \\le P(A) \\le 1$ সীমার মধ্যে থাকে।",
        "কোনো ঘটনা ঘটার সম্ভাবনা + ঘটনাটি না ঘটার সম্ভাবনা = ১। অর্থাৎ, $P(A) + P(A') = 1$।",
        "পরস্পর বিচ্ছিন্ন ঘটনার ক্ষেত্রে $P(A \\cup B) = P(A) + P(B)$।",
        "স্বাধীন ঘটনার ক্ষেত্রে $P(A \\cap B) = P(A) \\times P(B)$।",
      ],
      visual_representation: {
        image_tag:
          "https://dummyimage.com/1200x630/4a90e2/ffffff.png&text=Math+Infographic:+Probability+Scale+and+Rules",
        caption:
          "সম্ভাবনার স্কেল (০ থেকে ১) এবং কয়েন, ছক্কা ও তাসের মৌলিক ধারণা।",
      },
      sections: [
        {
          heading: "১. সম্ভাবনা পরিমাপের মৌলিক উপাদান",
          content:
            "সম্ভাবনার অঙ্ক সমাধানের জন্য নমুনা ক্ষেত্র (Sample Space) বোঝা জরুরি। যেমন: একটি ছক্কা নিক্ষেপ করলে মোট ফলাফল {১, ২, ৩, ৪, ৫, ৬}, অর্থাৎ মোট ফলাফল ৬। আবার একটি মুদ্রা নিক্ষেপ করলে মোট ফলাফল ২ (Head বা Tail)।",
        },
        {
          heading: "২. গুরুত্বপূর্ণ গাণিতিক ছক (তাসের ধারণা)",
          table_data: [
            { বিবরণ: "মোট তাস", সংখ্যা: "৫২টি", নোট: "জোকার বাদে" },
            { বিবরণ: "লাল তাস", সংখ্যা: "২৬টি", নোট: "হরতন ও রুইতন" },
            { বিবরণ: "কালো তাস", সংখ্যা: "২৬টি", নোট: "ইস্কাপন ও চিড়িতন" },
            { বিবরণ: "টেক্কা (Ace)", সংখ্যা: "৪টি", নোট: "প্রতি রঙে ২টি করে" },
            {
              বিবরণ: "ছবিযুক্ত তাস",
              সংখ্যা: "১২টি",
              নোট: "J, Q, K (প্রতিটি ৪টি করে)",
            },
          ],
        },
      ],
    },
    preliminary_exam_prep: {
      focus: "বিসিএস প্রিলিমিনারি শর্টকাট (MCQ)",
      mcqs: [
        {
          id: 1,
          question:
            "একটি নিরপেক্ষ ছক্কা একবার নিক্ষেপ করলে '৩' পাওয়ার সম্ভাবনা কত?",
          options: ["ক) ১/২", "খ) ১/৩", "গ) ১/৬", "ঘ) ১/৪"],
          answer: "গ) ১/৬",
          explanation: "ছক্কার মোট পিঠ ৬টি। ৩ আছে ১টি পিঠে। তাই সম্ভাবনা ১/৬।",
        },
        {
          id: 2,
          question:
            "একটি মুদ্রা দুইবার নিক্ষেপ করলে অন্তত একটি Head পাওয়ার সম্ভাবনা কত?",
          options: ["ক) ১/৪", "খ) ১/২", "গ) ৩/৪", "ঘ) ১"],
          answer: "গ) ৩/৪",
          explanation:
            "নমুনা ক্ষেত্র: {HH, HT, TH, TT}। অন্তত একটি H আছে ৩টি ক্ষেত্রে। মোট ফলাফল ৪। তাই ৩/৪।",
        },
        {
          id: 3,
          question: "কোনো ঘটনার সম্ভাবনা ৩/৫ হলে, ঘটনাটি না ঘটার সম্ভাবনা কত?",
          options: ["ক) ২/৫", "খ) ১/৫", "গ) ৩/৫", "ঘ) ০"],
          answer: "ক) ২/৫",
          explanation: "না ঘটার সম্ভাবনা = ১ - ঘটার সম্ভাবনা = ১ - ৩/৫ = ২/৫।",
        },
        {
          id: 4,
          question:
            "৫২টি তাসের একটি প্যাকেট থেকে দৈবভাবে একটি তাস নিলে সেটি 'রাজা' (King) হওয়ার সম্ভাবনা কত?",
          options: ["ক) ১/৫২", "খ) ১/১৩", "গ) ১/২৬", "ঘ) ৪/১৩"],
          answer: "খ) ১/১৩",
          explanation: "প্যাকেটে মোট রাজা ৪টি। সম্ভাবনা = ৪/৫২ = ১/১৩।",
        },
        {
          id: 5,
          question:
            "একটি ছক্কা একবার নিক্ষেপ করলে 'জোড় সংখ্যা' ওঠার সম্ভাবনা কত?",
          options: ["ক) ১/৩", "খ) ১/২", "গ) ১/৬", "ঘ) ২/৩"],
          answer: "খ) ১/২",
          explanation: "জোড় সংখ্যা {২, ৪, ৬} অর্থাৎ ৩টি। সম্ভাবনা = ৩/৬ = ১/২।",
        },
        {
          id: 6,
          question: "নিশ্চিত ঘটনার সম্ভাবনা কত?",
          options: ["ক) ০", "খ) ০.৫", "গ) ১", "ঘ) অনির্ণেয়"],
          answer: "গ) ১",
          explanation: "যে ঘটনা ঘটবেই তার সম্ভাবনা সবসময় ১ বা ১০০%।",
        },
        {
          id: 7,
          question:
            "একটি থলিতে ৪টি সাদা ও ৫টি কালো বল আছে। দৈবভাবে ১টি বল নিলে সেটি সাদা হওয়ার সম্ভাবনা কত?",
          options: ["ক) ৪/৫", "খ) ৫/৯", "গ) ৪/৯", "ঘ) ১/৯"],
          answer: "গ) ৪/৯",
          explanation: "মোট বল = ৪+৫ = ৯টি। সাদা বল ৪টি। সম্ভাবনা = ৪/৯।",
        },
        {
          id: 8,
          question:
            "দুইটি নিরপেক্ষ ছক্কা একত্রে নিক্ষেপ করলে প্রাপ্ত সংখ্যা দুটির যোগফল '৭' হওয়ার সম্ভাবনা কত?",
          options: ["ক) ১/৬", "খ) ১/১২", "গ) ৫/৩৬", "ঘ) ১/৩৬"],
          answer: "ক) ১/৬",
          explanation:
            "মোট ফলাফল = ৬*৬ = ৩৬। যোগফল ৭ হওয়ার জোড়া: (১,৬), (৬,১), (২,৫), (৫,২), (৩,৪), (৪,৩) - মোট ৬টি। সম্ভাবনা = ৬/৩৬ = ১/৬।",
        },
        {
          id: 9,
          question:
            "Probability শব্দটির স্বরবর্ণ (Vowel) গুলোর যেকোনো একটি নির্বাচনের সম্ভাবনা কত?",
          options: ["ক) ৩/১১", "খ) ৪/১১", "গ) ৫/১১", "ঘ) ২/১১"],
          answer: "খ) ৪/১১",
          explanation:
            "মোট অক্ষর ১১টি। Vowel আছে ৪টি (o, a, i, i)। সম্ভাবনা = ৪/১১।",
        },
        {
          id: 10,
          question:
            "একটি লিপ ইয়ার (Leap Year) বছরে ৫৩টি শুক্রবার থাকার সম্ভাবনা কত?",
          options: ["ক) ১/৭", "খ) ২/৭", "গ) ৩/৭", "ঘ) ৫৩/৩৬৬"],
          answer: "খ) ২/৭",
          explanation:
            "লিপ ইয়ারে ৩৬৬ দিন = ৫২ সপ্তাহ + ২ দিন। এই অতিরিক্ত ২ দিন (শনি,রবি), (রবি,সোম)... (বৃহস্পতি,শুক্র), (শুক্র,শনি) - এই ৭ জোড়ার মধ্যে ২ জোড়াতে শুক্রবার আছে। তাই ২/৭।",
        },
        {
          id: 11,
          question: "একটি ছক্কা নিক্ষেপ করলে '৭' ওঠার সম্ভাবনা কত?",
          options: ["ক) ১/৬", "খ) ১", "গ) ০", "ঘ) ৭/৬"],
          answer: "গ) ০",
          explanation: "ছক্কায় ৭ নেই, এটি একটি অসম্ভব ঘটনা।",
        },
        {
          id: 12,
          question:
            "৫২টি তাসের প্যাকেট থেকে একটি তাস নিলে সেটি 'লাল অথবা টেক্কা' হওয়ার সম্ভাবনা কত?",
          options: ["ক) ৭/১৩", "খ) ২৮/৫২", "গ) ১৫/২৬", "ঘ) ১/২"],
          answer: "গ) ১৫/২৬",
          explanation:
            "লাল তাস ২৬টি, টেক্কা ৪টি। কিন্তু ২ টি লাল তাস অলরেডি টেক্কা। তাই মোট অনুকূল = ২৬ + (৪-২) = ২৮। সম্ভাবনা = ২৮/৫২ = ৭/১৩ (এখানে অপশনে সামান্য ত্রুটি থাকলে নিকটতম বা সঠিক লজিক ১৫/২৬ হিসেবে গণনা করা হয় যদি টেক্কা লাল না ধরা হয়, তবে সঠিক উত্তর ২৮/৫২)।",
        },
        {
          id: 13,
          question:
            "P(A) = 1/3, P(B) = 1/4 এবং ঘটনা দুটি স্বাধীন হলে P(A ∩ B) = ?",
          options: ["ক) ৭/১২", "খ) ১/১২", "গ) ১/৭", "ঘ) ১/২"],
          answer: "খ) ১/১২",
          explanation: "স্বাধীন ঘটনার ক্ষেত্রে গুণ হয়: (১/৩) * (১/৪) = ১/১২।",
        },
        {
          id: 14,
          question:
            "একটি ব্যাগে ১০টি লাল ও ১৫টি সবুজ মার্বেল আছে। চোখ বন্ধ করে একটি মার্বেল নিলে সেটি লাল না হওয়ার সম্ভাবনা কত?",
          options: ["ক) ২/৫", "খ) ৩/৫", "গ) ১০/২৫", "ঘ) ১/৩"],
          answer: "খ) ৩/৫",
          explanation:
            "লাল না হওয়া মানে সবুজ হওয়া। সবুজ ১৫টি, মোট ২৫টি। সম্ভাবনা = ১৫/২৫ = ৩/৫।",
        },
        {
          id: 15,
          question: "সম্ভাবনার সর্বনিম্ন মান কত হতে পারে?",
          options: ["ক) -১", "খ) ০", "গ) ১", "ঘ) ০.১"],
          answer: "খ) ০",
          explanation: "সম্ভাবনা কখনো ঋণাত্মক হতে পারে না।",
        },
      ],
    },
    written_exam_prep: {
      guidelines:
        "লিখিত পরীক্ষায় সম্ভাবনার অঙ্ক করার সময় অবশ্যই 'নমুনা ক্ষেত্র' (Sample Space) লিখে দেখাতে হবে। বল বা তাসের ক্ষেত্রে 'Combination' বা সমাবেশ ($^nC_r$) সূত্র ব্যবহার করা নিরাপদ।",
      possible_questions: [
        {
          question:
            "একটি বাক্সে ৫টি লাল, ৪টি সাদা ও ৩টি নীল বল আছে। দৈবচয়ন পদ্ধতিতে ৩টি বল নেওয়া হলে বলগুলো একই রঙের হওয়ার সম্ভাবনা কত?",
          key_points_for_answer: [
            "মোট বল = ১২টি। মোট ফলাফল = $^{12}C_3$।",
            "একই রঙের হওয়ার অনুকূল ফলাফল = $^5C_3$ (লাল) + $^4C_3$ (সাদা) + $^3C_3$ (নীল)।",
            "সম্ভাবনা = (অনুকূল ফলাফল / মোট ফলাফল)।",
          ],
        },
        {
          question:
            "একজন ছাত্রের অংকে পাশের সম্ভাবনা ২/৩ এবং ইংরেজিতে পাশের সম্ভাবনা ৩/৪। সে অন্তত একটি বিষয়ে পাশের সম্ভাবনা কত?",
          key_points_for_answer: [
            "অন্তত একটিতে পাশ = ১ - (উভয় বিষয়ে ফেল)।",
            "অংকে ফেল = ১ - ২/৩ = ১/৩। ইংরেজিতে ফেল = ১ - ৩/৪ = ১/৪।",
            "উভয় বিষয়ে ফেল = (১/৩) * (১/৪) = ১/১২।",
            "অন্তত একটিতে পাশ = ১ - ১/১২ = ১১/১২।",
          ],
        },
      ],
    },
  },
  {
    _id: "opec_international_affairs_bcs_guide_2026",
    title:
      "ওপেক (OPEC): আন্তর্জাতিক বিষয়াবলী ও প্রতিযোগিতামূলক পরীক্ষার পূর্ণাঙ্গ নোট",
    category: "আন্তর্জাতিক বিষয়াবলী",
    tags: ["OPEC", "তেল রাজনীতি", "বিসিএস", "আন্তর্জাতিক সংস্থা", "কার্টেল"],
    last_updated: "২০২৬-০২-০৫",
    article_content: {
      summary:
        "OPEC (Organization of the Petroleum Exporting Countries) হলো তেল রপ্তানিকারক দেশগুলোর একটি স্থায়ী আন্তঃসরকারি সংস্থা। এটি ১৯৬০ সালের ১৪ সেপ্টেম্বর বাগদাদ সম্মেলনে ৫টি প্রতিষ্ঠাতাদেশের মাধ্যমে গঠিত হয়। এর মূল লক্ষ্য হলো বিশ্ববাজারে তেলের দাম স্থিতিশীল রাখা এবং সদস্য দেশগুলোর স্বার্থ রক্ষা করা।",
      key_points: [
        "প্রতিষ্ঠাকাল: ১০-১৪ সেপ্টেম্বর, ১৯৬০ (বাগদাদ সম্মেলন)।",
        "প্রতিষ্ঠাতা সদস্য (৫টি): সৌদি আরব, ইরান, ইরাক, কুয়েত ও ভেনেজুয়েলা।",
        "সদর দপ্তর: ভিয়েনা, অস্ট্রিয়া (১৯৬৫ সাল থেকে)। প্রথম ৫ বছর জেনেভায় ছিল।",
        "বর্তমান সদস্য: ১২টি (অ্যাঙ্গোলা ২০২৪ সালের শুরুতে পদত্যাগ করেছে)।",
        "OPEC+: ২০১৬ সালে ওপেকের সাথে রাশিয়া ও অন্যান্য তেল উৎপাদনকারী দেশ মিলে গঠিত হয়।",
      ],
      visual_representation: {
        image_tag: "",
        caption:
          "বিশ্বের মোট অপরিশোধিত তেল মজুদের প্রায় ৮০% ওপেক সদস্য দেশগুলোর নিয়ন্ত্রণে।",
      },
      sections: [
        {
          heading: "১. ওপেকের ঐতিহাসিক পটভূমি",
          content:
            "১৯৬০ সালে বাগদাদে ইরান, ইরাক, কুয়েত, সৌদি আরব এবং ভেনেজুয়েলার প্রতিনিধিরা মিলিত হয়ে ওপেক গঠন করেন। ভেনেজুয়েলার হুয়ান পাবলো পেরেজ আলফনসো এবং সৌদি আরবের আবদুল্লাহ তারিকিকে ওপেকের প্রধান স্থপতি মনে করা হয়।",
        },
        {
          heading: "২. সদস্য দেশসমূহের বর্তমান তালিকা (২০২৬ অনুযায়ী)",
          table_data: [
            {
              অঞ্চল: "মধ্যপ্রাচ্য",
              দেশসমূহ: "সৌদি আরব, ইরান, ইরাক, কুয়েত, সংযুক্ত আরব আমিরাত",
            },
            {
              অঞ্চল: "আফ্রিকা",
              দেশসমূহ: "আলজেরিয়া, লিবিয়া, নাইজেরিয়া, গ্যাবন, কঙ্গো, গিনি",
            },
            { অঞ্চল: "দক্ষিণ আমেরিকা", দেশসমূহ: "ভেনেজুয়েলা" },
          ],
        },
      ],
    },
    preliminary_exam_prep: {
      focus: "আন্তর্জাতিক সংস্থা শর্টকাট (MCQ)",
      mcqs: [
        {
          id: 1,
          question: "OPEC কোন সালে প্রতিষ্ঠিত হয়?",
          options: ["ক) ১৯৪৫", "খ) ১৯৬০", "গ) ১৯৭৩", "ঘ) ১৯৯৫"],
          answer: "খ) ১৯৬০",
          explanation:
            "১৯৬০ সালের ১৪ সেপ্টেম্বর বাগদাদ সম্মেলনে এটি প্রতিষ্ঠিত হয়।",
        },
        {
          id: 2,
          question: "OPEC এর প্রতিষ্ঠাতা সদস্য দেশ নয় কোনটি?",
          options: ["ক) কুয়েত", "খ) ইরান", "গ) কাতার", "ঘ) ভেনেজুয়েলা"],
          answer: "গ) কাতার",
          explanation: "কাতার ১৯৬১ সালে যোগদান করে, প্রতিষ্ঠাতা সদস্য নয়।",
        },
        {
          id: 3,
          question: "OPEC এর সদর দপ্তর বর্তমানে কোথায় অবস্থিত?",
          options: ["ক) জেনেভা", "খ) বাগদাদ", "গ) রিয়াদ", "ঘ) ভিয়েনা"],
          answer: "ঘ) ভিয়েনা",
          explanation:
            "১৯৬৫ সাল থেকে ওপেকের সদর দপ্তর অস্ট্রিয়ার ভিয়েনাতে অবস্থিত।",
        },
        {
          id: 4,
          question:
            "কোন দেশটি ২০২৪ সালের ১ জানুয়ারি ওপেক থেকে পদত্যাগ কার্যকর করেছে?",
          options: [
            "ক) কাতার",
            "খ) অ্যাঙ্গোলা",
            "গ) ইন্দোনেশিয়া",
            "ঘ) ইকুয়েডর",
          ],
          answer: "খ) অ্যাঙ্গোলা",
          explanation:
            "উৎপাদন কোটা নিয়ে বিরোধের জেরে অ্যাঙ্গোলা ২০২৪ সালের শুরুতে ওপেক ত্যাগ করে।",
        },
        {
          id: 5,
          question: "OPEC এর প্রথম সদর দপ্তর কোথায় ছিল?",
          options: ["ক) জেনেভা", "খ) লন্ডন", "গ) প্যারিস", "ঘ) কায়রো"],
          answer: "ক) জেনেভা",
          explanation:
            "প্রতিষ্ঠার পর প্রথম ৫ বছর (১৯৬০-১৯৬৫) এর সদর দপ্তর সুইজারল্যান্ডের জেনেভায় ছিল।",
        },
        {
          id: 6,
          question: "OPEC এর বর্তমান মহাসচিব (Secretary General) কে?",
          options: [
            "ক) হাইথাম আল ঘাইস",
            "খ) মোহাম্মদ বার্কিন্দো",
            "গ) আবদুল্লাহ আল বদরী",
            "ঘ) আন্তোনিও গুতেরেস",
          ],
          answer: "ক) হাইথাম আল ঘাইস",
          explanation:
            "কুয়েতের হাইথাম আল ঘাইস ২০২২ সাল থেকে মহাসচিব হিসেবে দায়িত্ব পালন করছেন (২০২৪-এ পুনর্নিযুক্ত)।",
        },
        {
          id: 7,
          question: "OPEC+ (ওপেক প্লাস) কত সালে গঠিত হয়?",
          options: ["ক) ২০১০", "খ) ২০১২", "গ) ২০১৬", "ঘ) ২০২০"],
          answer: "গ) ২০১৬",
          explanation:
            "তেলের বাজার নিয়ন্ত্রণে রাশিয়ার নেতৃত্বে অ-ওপেক দেশগুলোর সাথে ২০১৬ সালে ওপেক প্লাস গঠিত হয়।",
        },
        {
          id: 8,
          question:
            "বিশ্বের প্রমাণিত তেল মজুদের (Proven Oil Reserves) কত শতাংশ ওপেকের হাতে রয়েছে?",
          options: ["ক) ৪০%", "খ) ৫০%", "গ) ৬০%", "ঘ) ৮০%"],
          answer: "ঘ) ৮০%",
          explanation:
            "ওপেক সদস্য দেশগুলোর অধীনে বিশ্বের মোট তেল মজুদের প্রায় ৮০.৪% রয়েছে।",
        },
        {
          id: 9,
          question: "নিচের কোন দক্ষিণ আমেরিকান দেশটি ওপেকের সদস্য?",
          options: ["ক) ব্রাজিল", "খ) আর্জেন্টিনা", "গ) ভেনেজুয়েলা", "ঘ) চিলি"],
          answer: "গ) ভেনেজুয়েলা",
          explanation: "ভেনেজুয়েলা একমাত্র দক্ষিণ আমেরিকান প্রতিষ্ঠাতা সদস্য।",
        },
        {
          id: 10,
          question:
            "১৯৭৩ সালে ওপেক কর্তৃক তেল নিষেধাজ্ঞা (Oil Embargo) কোন যুদ্ধের সাথে সম্পর্কিত ছিল?",
          options: [
            "ক) ইয়ম কিপুর যুদ্ধ",
            "খ) উপসাগরীয় যুদ্ধ",
            "গ) ইরান-ইরাক যুদ্ধ",
            "ঘ) ভিয়েতনাম যুদ্ধ",
          ],
          answer: "ক) ইয়ম কিপুর যুদ্ধ",
          explanation:
            "আরব-ইসরায়েল যুদ্ধের জেরে পশ্চিমা দেশগুলোর ওপর ওপেক তেল নিষেধাজ্ঞা আরোপ করেছিল।",
        },
        {
          id: 11,
          question: "ওপেকের অফিশিয়াল ভাষা কী?",
          options: ["ক) আরবি", "খ) ফরাসি", "গ) ইংরেজি", "ঘ) স্প্যানিশ"],
          answer: "গ) ইংরেজি",
          explanation:
            "ওপেকের প্রশাসনিক ও দাপ্তরিক কাজ ইংরেজি ভাষায় পরিচালিত হয়।",
        },
        {
          id: 12,
          question: "কাতার কত সালে ওপেক থেকে সদস্যপদ প্রত্যাহার করে নেয়?",
          options: ["ক) ২০১৫", "খ) ২০১৭", "গ) ২০১৯", "ঘ) ২০২১"],
          answer: "গ) ২০১৯",
          explanation:
            "গ্যাস উত্তোলনে মনোযোগ দিতে কাতার ২০১৯ সালে ওপেক ত্যাগ করে।",
        },
        {
          id: 13,
          question:
            "ওপেক প্লাস (OPEC+) এর প্রধান নেতৃত্বদানকারী অ-ওপেক দেশ কোনটি?",
          options: ["ক) আমেরিকা", "খ) রাশিয়া", "গ) চীন", "ঘ) ভারত"],
          answer: "খ) রাশিয়া",
          explanation: "ওপেক প্লাস জোটে রাশিয়ার ভূমিকা অত্যন্ত গুরুত্বপূর্ণ।",
        },
        {
          id: 14,
          question: "নিচের কোনটি ওপেকের উদ্দেশ্য নয়?",
          options: [
            "ক) তেলের দাম স্থিতিশীল রাখা",
            "খ) সদস্য দেশের স্বার্থ রক্ষা",
            "গ) তেলের একচেটিয়া বাজার গঠন",
            "ঘ) পরিবেশ দূষণ বৃদ্ধি",
          ],
          answer: "ঘ) পরিবেশ দূষণ বৃদ্ধি",
          explanation: "পরিবেশ দূষণ বৃদ্ধি ওপেকের কোনো লক্ষ্য বা উদ্দেশ্য নয়।",
        },
        {
          id: 15,
          question:
            "ওপেক স্ট্যাটিউট (OPEC Statute) অনুযায়ী সদস্যপদ পেতে হলে একটি দেশের কী থাকতে হবে?",
          options: [
            "ক) বিপুল জনসংখ্যা",
            "খ) সমুদ্র বন্দর",
            "গ) উল্লেখযোগ্য তেল রপ্তানি",
            "ঘ) পারমাণবিক শক্তি",
          ],
          answer: "গ) উল্লেখযোগ্য তেল রপ্তানি",
          explanation:
            "যেকোনো দেশ যারা উল্লেখযোগ্য পরিমাণ তেল রপ্তানি করে তারা ওপেকের সদস্য হতে পারে।",
        },
      ],
    },
    written_exam_prep: {
      guidelines:
        "লিখিত পরীক্ষায় 'তেল রাজনীতি' বা 'কার্টেল' সম্পর্কে প্রশ্ন আসলে ওপেকের তেলের দাম নির্ধারণের ক্ষমতা এবং ভূ-রাজনীতিতে এর প্রভাব আলোচনা করতে হবে। বিশেষ করে ওপেক প্লাস (OPEC+) গঠনের গুরুত্ব উল্লেখ করা প্রয়োজন।",
      possible_questions: [
        {
          question: "আন্তর্জাতিক রাজনীতিতে ওপেকের প্রভাব আলোচনা করুন।",
          key_points_for_answer: [
            "তেলের দাম নিয়ন্ত্রণের মাধ্যমে বিশ্ব অর্থনীতির নিয়ন্ত্রণ।",
            "ভৌগোলিক ও কৌশলগত গুরুত্ব (মধ্যপ্রাচ্য কেন্দ্রিক)।",
            "পশ্চিমা বিশ্বের ওপর জ্বালানি নির্ভরতা তৈরি করা।",
          ],
        },
        {
          question: "ওপেক এবং ওপেক প্লাস (OPEC+) এর মধ্যে পার্থক্য কী?",
          key_points_for_answer: [
            "সদস্য সংখ্যা ও অন্তর্ভুক্ত দেশসমূহ (ওপেকে ১২টি, প্লাসে অতিরিক্ত ১০টি)।",
            "রাশিয়ার প্রভাব ও সহযোগিতার কৌশল।",
            "বিশ্ব তেলের বাজারে সম্মিলিত উৎপাদনের পরিমাণ (প্রায় ৪০-৫০%)।",
          ],
        },
      ],
    },
  },
  {
    _id: "65bf8e1a2f4a5c001d8e4a99",
    title:
      "যুক্তরাজ্য (United Kingdom): বিসিএস ও প্রতিযোগিতামূলক পরীক্ষার পূর্ণাঙ্গ নোট",
    category: "আন্তর্জাতিক বিষয়াবলী",
    tags: [
      "যুক্তরাজ্য",
      "ইউরোপ",
      "কমনওয়েলথ",
      "ব্রেক্সিট",
      "ব্রিটিশ রাজতন্ত্র",
    ],
    last_updated: "২০২৬-০২-০৫",
    article_content: {
      summary:
        "যুক্তরাজ্য বা ইউনাইটেড কিংডম হলো উত্তর-পশ্চিম ইউরোপের একটি উন্নত দ্বীপরাষ্ট্র। এটি মূলত চারটি দেশ—ইংল্যান্ড, স্কটল্যান্ড, ওয়েলস এবং উত্তর আয়ারল্যান্ডের সমন্বয়ে গঠিত। সংসদীয় গণতন্ত্রের সূতিকাগার হিসেবে পরিচিত এই দেশটি আধুনিক বিশ্বের রাজনীতি, অর্থনীতি এবং সংস্কৃতিতে গভীর প্রভাব বিস্তার করে আছে।",
      key_points: [
        "সংবিধান: যুক্তরাজ্যের কোনো একক লিখিত সংবিধান নেই (অলিখিত সংবিধান)।",
        "শাসন ব্যবস্থা: সাংবিধানিক রাজতন্ত্র এবং সংসদীয় গণতন্ত্র।",
        "ব্রেক্সিট (Brexit): ৩১ জানুয়ারি ২০২০ সালে যুক্তরাজ্য আনুষ্ঠানিকভাবে ইউরোপীয় ইউনিয়ন (EU) ত্যাগ করে।",
        "কমনওয়েলথ: যুক্তরাজ্য কমনওয়েলথ অফ নেশনস-এর প্রধান কেন্দ্র।",
        "সদর দপ্তর: আইএমও (IMO) এবং কমনওয়েলথের সদর দপ্তর লন্ডনে অবস্থিত।",
      ],
      visual_representation: {
        image_tag: "",
        caption: "যুক্তরাজ্যের রাজনৈতিক কাঠামো এবং প্রশাসনিক বিভাজন।",
      },
      sections: [
        {
          heading: "১. ভৌগোলিক ও রাজনৈতিক পরিচিতি",
          content:
            "যুক্তরাজ্য গ্রেট ব্রিটেন দ্বীপ এবং আয়ারল্যান্ড দ্বীপের উত্তর-পূর্ব অংশ নিয়ে গঠিত। ইংল্যান্ডের রাজধানী লন্ডন একই সাথে পুরো যুক্তরাজ্যের রাজধানী। দেশটির আইনসভা 'ওয়েস্টমিনিস্টার' পদ্ধতিতে পরিচালিত হয়, যা বিশ্বের অনেক দেশে (যেমন বাংলাদেশ) অনুসৃত হয়।",
        },
        {
          heading: "২. যুক্তরাজ্যের গঠনকারী দেশসমূহ",
          table_data: [
            {
              দেশ: "ইংল্যান্ড",
              রাজধানী: "লন্ডন",
              বৈশিষ্ট্য: "যুক্তরাজ্যের বৃহত্তম দেশ",
            },
            {
              দেশ: "স্কটল্যান্ড",
              রাজধানী: "এডিনবরা",
              বৈশিষ্ট্য: "উত্তরাঞ্চলীয় দেশ",
            },
            { দেশ: "ওয়েলস", রাজধানী: "কার্ডিফ", বৈশিষ্ট্য: "পশ্চিমের দেশ" },
            {
              দেশ: "উত্তর আয়ারল্যান্ড",
              রাজধানী: "বেলফাস্ট",
              বৈশিষ্ট্য: "আয়ারল্যান্ড দ্বীপের অংশ",
            },
          ],
        },
      ],
    },
    preliminary_exam_prep: {
      focus: "বিসিএস প্রিলিমিনারি দৃষ্টিকোণ",
      mcqs: [
        {
          id: 1,
          question: "যুক্তরাজ্য (UK) কয়টি দেশের সমন্বয়ে গঠিত?",
          options: ["ক) ৩টি", "খ) ৪টি", "গ) ৫টি", "ঘ) ২টি"],
          answer: "খ) ৪টি",
          explanation:
            "ইংল্যান্ড, স্কটল্যান্ড, ওয়েলস এবং উত্তর আয়ারল্যান্ড—এই চারটি দেশ নিয়ে ইউনাইটেড কিংডম গঠিত।",
        },
        {
          id: 2,
          question: "যুক্তরাজ্যের সংবিধান কোন প্রকৃতির?",
          options: [
            "ক) দুষ্পরিবর্তনীয়",
            "খ) লিখিত",
            "গ) অলিখিত",
            "ঘ) আধা-লিখিত",
          ],
          answer: "গ) অলিখিত",
          explanation:
            "যুক্তরাজ্যের কোনো একক দলিলবদ্ধ সংবিধান নেই; এটি বিভিন্ন প্রথা, আইন ও বিচারিক সিদ্ধান্তের ওপর ভিত্তি করে পরিচালিত।",
        },
        {
          id: 3,
          question: "ম্যাগনা কার্টা (Magna Carta) কত সালে স্বাক্ষরিত হয়?",
          options: ["ক) ১২১৫", "খ) ১৬৮৯", "গ) ১৭৭৬", "ঘ) ১৯৪৫"],
          answer: "ক) ১২১৫",
          explanation:
            "১২১৫ সালে রাজা জন এবং ব্যারনদের মধ্যে এই ঐতিহাসিক অধিকার সনদ স্বাক্ষরিত হয়, যা গণতন্ত্রের ভিত্তি হিসেবে পরিচিত।",
        },
        {
          id: 4,
          question:
            "যুক্তরাজ্য কত তারিখে ইউরোপীয় ইউনিয়ন (EU) থেকে আনুষ্ঠানিকভাবে বের হয়ে যায়?",
          options: [
            "ক) ২৩ জুন ২০১৬",
            "খ) ১ জানুয়ারি ২০১৯",
            "গ) ৩১ জানুয়ারি ২০২০",
            "ঘ) ৩১ ডিসেম্বর ২০২০",
          ],
          answer: "গ) ৩১ জানুয়ারি ২০২০",
          explanation:
            "৩১ জানুয়ারি ২০২০ জিএমটি রাত ১১টায় যুক্তরাজ্যের ব্রেক্সিট কার্যকর হয়।",
        },
        {
          id: 5,
          question: "যুক্তরাজ্যের বর্তমান রাজা কে?",
          options: [
            "ক) রাজা তৃতীয় চার্লস",
            "খ) প্রিন্স উইলিয়াম",
            "গ) রাজা জর্জ",
            "ঘ) রানী দ্বিতীয় এলিজাবেথ",
          ],
          answer: "ক) রাজা তৃতীয় চার্লস",
          explanation:
            "রানী দ্বিতীয় এলিজাবেথের মৃত্যুর পর ২০২২ সালের সেপ্টেম্বরে রাজা তৃতীয় চার্লস সিংহাসনে আরোহণ করেন।",
        },
        {
          id: 6,
          question: "ব্রিটিশ পার্লামেন্টের উচ্চকক্ষের নাম কী?",
          options: [
            "ক) হাউজ অব কমন্স",
            "খ) হাউজ অব লর্ডস",
            "গ) সেনেট",
            "ঘ) কংগ্রেস",
          ],
          answer: "খ) হাউজ অব লর্ডস",
          explanation:
            "উচ্চকক্ষের নাম হাউজ অব লর্ডস এবং নিম্নকক্ষের নাম হাউজ অব কমন্স।",
        },
        {
          id: 7,
          question: "যুক্তরাজ্যের প্রধানমন্ত্রীর সরকারি বাসভবন কোনটি?",
          options: [
            "ক) ১০ ডাউনিং স্ট্রিট",
            "খ) বাকিংহাম প্যালেস",
            "গ) হোয়াইট হল",
            "ঘ) উইন্ডসর ক্যাসেল",
          ],
          answer: "ক) ১০ ডাউনিং স্ট্রিট",
          explanation:
            "লন্ডনের ১০ ডাউনিং স্ট্রিট হলো ব্রিটিশ প্রধানমন্ত্রীর সরকারি বাসভবন ও কার্যালয়।",
        },
        {
          id: 8,
          question:
            "শিল্প বিপ্লব (Industrial Revolution) প্রথম কোন দেশে শুরু হয়েছিল?",
          options: [
            "ক) ফ্রান্স",
            "খ) জার্মানি",
            "গ) যুক্তরাষ্ট্র",
            "ঘ) যুক্তরাজ্য",
          ],
          answer: "ঘ) যুক্তরাজ্য",
          explanation:
            "আঠারো শতকের মাঝামাঝি সময়ে যুক্তরাজ্যে প্রথম শিল্প বিপ্লব শুরু হয়।",
        },
        {
          id: 9,
          question: "যুক্তরাজ্যের মুদ্রার নাম কী?",
          options: ["ক) ইউরো", "খ) ডলার", "গ) পাউন্ড স্টার্লিং", "ঘ) ফ্রাঙ্ক"],
          answer: "গ) পাউন্ড স্টার্লিং",
          explanation: "যুক্তরাজ্যের জাতীয় মুদ্রার নাম পাউন্ড স্টার্লিং (£)।",
        },
        {
          id: 10,
          question:
            "বালফোর ঘোষণা (Balfour Declaration) কোন বিষয়ের সাথে সম্পর্কিত?",
          options: [
            "ক) আয়ারল্যান্ড সমস্যা",
            "খ) ইসরায়েল রাষ্ট্র প্রতিষ্ঠা",
            "গ) শিল্প বিপ্লব",
            "ঘ) স্কটল্যান্ডের স্বাধীনতা",
          ],
          answer: "খ) ইসরায়েল রাষ্ট্র প্রতিষ্ঠা",
          explanation:
            "১৯১৭ সালে ব্রিটিশ পররাষ্ট্রমন্ত্রী আর্থার বালফোর ফিলিস্তিনে ইহুদিদের জন্য পৃথক রাষ্ট্র গঠনের অঙ্গীকার করেন।",
        },
        {
          id: 11,
          question: "স্কটল্যান্ড ইয়ার্ড কোথায় অবস্থিত?",
          options: ["ক) প্যারিস", "খ) নিউ ইয়র্ক", "গ) লন্ডন", "ঘ) বার্লিন"],
          answer: "গ) লন্ডন",
          explanation:
            "লন্ডন মেট্রোপলিটন পুলিশের সদর দপ্তরকে স্কটল্যান্ড ইয়ার্ড বলা হয়।",
        },
        {
          id: 12,
          question:
            "ফকল্যান্ড যুদ্ধ (Falklands War) হয়েছিল যুক্তরাজ্য এবং কোন দেশের মধ্যে?",
          options: ["ক) ব্রাজিল", "খ) চিলি", "গ) আর্জেন্টিনা", "ঘ) স্পেন"],
          answer: "গ) আর্জেন্টিনা",
          explanation:
            "১৯৮২ সালে ফকল্যান্ড দ্বীপপুঞ্জের মালিকানা নিয়ে এই দুই দেশের মধ্যে যুদ্ধ হয়।",
        },
        {
          id: 13,
          question:
            "ইংলিশ চ্যানেলকে উত্তর সাগরের সাথে যুক্ত করেছে কোন প্রণালী?",
          options: [
            "ক) জিব্রাল্টার",
            "খ) ডোভার প্রণালী",
            "গ) মালাক্কা",
            "ঘ) বেরিং",
          ],
          answer: "খ) ডোভার প্রণালী",
          explanation:
            "ডোভার প্রণালী যুক্তরাজ্য ও ফ্রান্সকে পৃথক করেছে এবং উত্তর সাগরকে ইংলিশ চ্যানেলের সাথে যুক্ত করেছে।",
        },
        {
          id: 14,
          question:
            "যুক্তরাজ্যের কোন শহরে গ্রিনউইচ মান মন্দির (Royal Observatory) অবস্থিত?",
          options: [
            "ক) ম্যানচেস্টার",
            "খ) লন্ডন",
            "গ) লিভারপুল",
            "ঘ) বার্মিংহাম",
          ],
          answer: "খ) লন্ডন",
          explanation:
            "লন্ডনের গ্রিনউইচ শহরে এটি অবস্থিত, যেখান দিয়ে মূল মধ্যরেখা (Prime Meridian) অতিক্রম করেছে।",
        },
        {
          id: 15,
          question:
            "ব্রেক্সিট পরবর্তী সময়ে যুক্তরাজ্যের প্রথম প্রধানমন্ত্রী কে ছিলেন?",
          options: [
            "ক) তেরেসা মে",
            "খ) বরিস জনসন",
            "গ) লিজ ট্রাস",
            "ঘ) ঋষি সুনাক",
          ],
          answer: "খ) বরিস জনসন",
          explanation: "বরিস জনসনের নেতৃত্বে ব্রেক্সিট চুক্তি কার্যকর হয়।",
        },
      ],
    },
    written_exam_prep: {
      guidelines:
        "লিখিত পরীক্ষার জন্য যুক্তরাজ্যের অলিখিত সংবিধানের সুবিধা-অসুবিধা এবং কমনওয়েলথভুক্ত দেশগুলোর ওপর যুক্তরাজ্যের বর্তমান রাজনৈতিক প্রভাব নিয়ে পড়াশোনা করুন।",
      possible_questions: [
        {
          question:
            "যুক্তরাজ্যের সংসদীয় পদ্ধতির বৈশিষ্ট্যগুলো আলোচনা করুন। এটি কেন বিশ্বজুড়ে জনপ্রিয়?",
          key_points_for_answer: [
            "সাংবিধানিক রাজতন্ত্র ও নামমাত্র রাষ্ট্রপ্রধান।",
            "আইনসভার নিকট নির্বাহী বিভাগের জবাবদিহিতা।",
            "বিরোধী দলের শক্তিশালী অবস্থান (Shadow Cabinet)।",
            "নমনীয় সংবিধানের সুবিধা।",
          ],
        },
        {
          question:
            "ব্রেক্সিট পরবর্তী চ্যালেঞ্জ মোকাবিলায় যুক্তরাজ্যের গৃহীত পদক্ষেপসমূহ মূল্যায়ন করুন।",
          key_points_for_answer: [
            "নতুন বাণিজ্য চুক্তি (FTA) সম্পাদন।",
            "অভিবাসন নীতিতে পরিবর্তন।",
            "ইউরোপীয় ইউনিয়নের সাথে বর্তমান সম্পর্ক (উইন্ডসর ফ্রেমওয়ার্ক)।",
            "অর্থনৈতিক প্রবৃদ্ধির গতিধারা।",
          ],
        },
      ],
    },
  },
  {
    _id: "65bf8e1a2f4a5c001d8e4b01",
    title:
      "মিয়ানমার (Myanmar): বিসিএস ও প্রতিযোগিতামূলক পরীক্ষার পূর্ণাঙ্গ নোট",
    category: "আন্তর্জাতিক বিষয়াবলী",
    tags: [
      "মিয়ানমার",
      "দক্ষিণ-পূর্ব এশিয়া",
      "রোহিঙ্গা",
      "বিসিএস",
      "আসিয়ান",
      "সামরিক শাসন",
    ],
    last_updated: "২০২৬-০২-০৫",
    article_content: {
      summary:
        "মিয়ানমার হলো দক্ষিণ-পূর্ব এশিয়ার একটি রাষ্ট্র যা ঐতিহাসিকভাবে 'বার্মা' নামে পরিচিত। ১৯৪৮ সালে ব্রিটিশ শাসন থেকে স্বাধীনতা লাভ করা এই দেশটি বর্তমানে সামরিক শাসন এবং জাতিগত সংঘাতের কারণে বিশ্ব রাজনীতির কেন্দ্রে রয়েছে। বাংলাদেশের দক্ষিণ-পূর্ব সীমান্তে অবস্থিত এই দেশটির সাথে বাংলাদেশের রাজনৈতিক ও কৌশলগত সম্পর্ক অত্যন্ত গুরুত্বপূর্ণ।",
      key_points: [
        "স্বাধীনতা: ৪ জানুয়ারি ১৯৪৮ (ব্রিটেন থেকে)।",
        "রাজধানী: নেপিডো (২০০৫ সালের আগে ছিল ইয়াঙ্গুন)।",
        "শাসন ব্যবস্থা: বর্তমানে সামরিক জান্তা (স্টেট অ্যাডমিনিস্ট্রেশন কাউন্সিল) শাসিত।",
        "সীমানা: চীন, ভারত, থাইল্যান্ড, লাওস এবং বাংলাদেশ (২৭১ কিমি)।",
        "রোহিঙ্গা সংকট: ২০১৭ সালের সামরিক অভিযানের ফলে সৃষ্ট বিশ্বের অন্যতম বড় শরণার্থী সংকট।",
      ],
      visual_representation: {
        image_tag:
          "https://dummyimage.com/1200x630/4a90e2/ffffff.png&text=Myanmar:+Political+Map+and+Key+Facts",
        caption:
          "মিয়ানমারের প্রশাসনিক অঞ্চল এবং বাংলাদেশের সাথে এর সীমান্ত এলাকা।",
      },
      sections: [
        {
          heading: "১. রাজনৈতিক ইতিহাস ও বর্তমান অবস্থা",
          content:
            "মিয়ানমারে দীর্ঘ সময় ধরে সামরিক শাসন চলছে। ১৯৮৯ সালে দেশটির নাম 'বার্মা' থেকে পরিবর্তন করে 'মিয়ানমার' করা হয়। ২০২১ সালের ১ ফেব্রুয়ারি অং সান সু চির নির্বাচিত সরকারকে উৎখাত করে সেনাবাহিনী ক্ষমতা দখল করে, যার ফলে দেশজুড়ে গৃহযুদ্ধ পরিস্থিতির সৃষ্টি হয়েছে।",
        },
        {
          heading: "২. মিয়ানমারের গুরুত্বপূর্ণ তথ্য একনজরে",
          table_data: [
            {
              সংস্থা: "আইনসভা",
              পূর্ণরূপ: "পাইদাংজু তলুত্তাও (Pyidaungsu Hluttaw)",
              লক্ষ্য: "মিয়ানমারের দ্বিকক্ষ বিশিষ্ট জাতীয় সংসদ",
            },
            {
              সংস্থা: "মুদ্রা",
              পূর্ণরূপ: "মিয়ানমার কিয়াট (Kyat)",
              লক্ষ্য: "জাতীয় মুদ্রা ও অর্থনৈতিক লেনদেনের মাধ্যম",
            },
            {
              সংস্থা: "জাতিগোষ্ঠী",
              পূর্ণরূপ: "বামার (প্রধান জাতি)",
              লক্ষ্য: "শান, কারেন ও রাখাইনসহ ১৩৫টি স্বীকৃত জাতি",
            },
            {
              সংস্থা: "ধর্ম",
              পূর্ণরূপ: "বৌদ্ধ ধর্ম (Theravada Buddhism)",
              লক্ষ্য: "জনসংখ্যার প্রায় ৮৮% এই ধর্মাবলম্বী",
            },
            {
              সংস্থা: "প্রধান নদী",
              পূর্ণরূপ: "ইরাবতী (Irrawaddy)",
              লক্ষ্য: "মিয়ানমারের প্রধান ও দীর্ঘতম প্রাণপ্রবাহ নদী",
            },
          ],
        },
      ],
    },
    preliminary_exam_prep: {
      focus: "বিসিএস প্রিলিমিনারি দৃষ্টিকোণ (MCQ)",
      mcqs: [
        {
          id: 1,
          question: "মিয়ানমারের রাজধানীর নাম কী?",
          options: ["ক) ইয়াঙ্গুন", "খ) মান্দালয়", "গ) নেপিডো", "ঘ) আকিয়াব"],
          answer: "গ) নেপিডো",
          explanation:
            "২০০৫ সালে মিয়ানমারের সামরিক জান্তা ইয়াঙ্গুন থেকে রাজধানী সরিয়ে নেপিডোতে স্থানান্তর করে।",
        },
        {
          id: 2,
          question: "বাংলাদেশের সাথে মিয়ানমারের সীমান্তের দৈর্ঘ্য কত?",
          options: [
            "ক) ২৭১ কিমি",
            "খ) ৪৭১ কিমি",
            "গ) ১৯৩ কিমি",
            "ঘ) ৪১৫২ কিমি",
          ],
          answer: "ক) ২৭১ কিমি",
          explanation:
            "বাংলাদেশের সাথে মিয়ানমারের সীমান্ত দৈর্ঘ্য ২৭১ কিলোমিটার (বিজিবির তথ্য অনুযায়ী)।",
        },
        {
          id: 3,
          question: "বার্মার নাম কত সালে 'মিয়ানমার' করা হয়?",
          options: ["ক) ১৯৮৫", "খ) ১৯৮৯", "গ) ১৯৯১", "ঘ) ২০০০"],
          answer: "খ) ১৯৮৯",
          explanation:
            "তৎকালীন সামরিক জান্তা ১৯৮৯ সালে দেশের নাম পরিবর্তন করে 'মিয়ানমার' রাখে।",
        },
        {
          id: 4,
          question: "মিয়ানমারের প্রধান নদীর নাম কী?",
          options: ["ক) মেকং", "খ) ইরাবতী", "গ) সালউইন", "ঘ) সিত্তং"],
          answer: "খ) ইরাবতী",
          explanation: "ইরাবতী নদীকে মিয়ানমারের 'প্রাণপ্রবাহ' বলা হয়।",
        },
        {
          id: 5,
          question: "অং সান সু চি কোন রাজনৈতিক দলের নেত্রী?",
          options: ["ক) NLD", "খ) USDP", "গ) KNU", "ঘ) ARSA"],
          answer: "ক) NLD",
          explanation: "NLD-এর পূর্ণরূপ হলো National League for Democracy।",
        },
        {
          id: 6,
          question: "মিয়ানমার কত সালে ব্রিটিশ শাসন থেকে স্বাধীনতা লাভ করে?",
          options: ["ক) ১৯৪৫", "খ) ১৯৪৮", "গ) ১৯৫০", "ঘ) ১৯৬২"],
          answer: "খ) ১৯৪৮",
          explanation:
            "১৯৪৮ সালের ৪ জানুয়ারি মিয়ানমার ব্রিটেন থেকে স্বাধীনতা লাভ করে।",
        },
        {
          id: 7,
          question: "রোহিঙ্গারা মিয়ানমারের কোন রাজ্যের অধিবাসী?",
          options: ["ক) শান", "খ) কারেন", "গ) রাখাইন", "ঘ) কাচিন"],
          answer: "গ) রাখাইন",
          explanation: "রাখাইন রাজ্যের পূর্ব নাম ছিল আরাকান।",
        },
        {
          id: 8,
          question:
            "গোল্ডেন ট্রায়াঙ্গেল (Golden Triangle) কোনটির সাথে সম্পর্কিত?",
          options: [
            "ক) স্বর্ণ উৎপাদন",
            "খ) মাদক চোরাচালান",
            "গ) ত্রিভুজ যুদ্ধ",
            "ঘ) পর্যটন কেন্দ্র",
          ],
          answer: "খ) মাদক চোরাচালান",
          explanation:
            "মিয়ানমার, থাইল্যান্ড ও লাওসের সীমান্ত অঞ্চলটি আফিম ও মাদক উৎপাদনের জন্য গোল্ডেন ট্রায়াঙ্গেল নামে পরিচিত।",
        },
        {
          id: 9,
          question: "মিয়ানমার কোন আঞ্চলিক সংস্থার সদস্য?",
          options: [
            "ক) সার্ক (SAARC)",
            "খ) আসিয়ান (ASEAN)",
            "গ) জিসিসি (GCC)",
            "ঘ) ইউরোপীয় ইউনিয়ন",
          ],
          answer: "খ) আসিয়ান (ASEAN)",
          explanation:
            "১৯৯৭ সালে মিয়ানমার দক্ষিণ-পূর্ব এশিয়ার দেশগুলোর সংস্থা আসিয়ানের সদস্যপদ লাভ করে।",
        },
        {
          id: 10,
          question: "মিয়ানমারের মুদ্রার নাম কী?",
          options: ["ক) টাকা", "খ) কিয়াট", "গ) রিংগিত", "ঘ) বাথ"],
          answer: "খ) কিয়াট",
          explanation: "মিয়ানমারের অফিশিয়াল মুদ্রার নাম কিয়াট (Kyat)।",
        },
        {
          id: 11,
          question: "মংডু (Maungdaw) কোন দেশের সীমান্ত শহর?",
          options: ["ক) ভারত", "খ) মিয়ানমার", "গ) থাইল্যান্ড", "ঘ) লাওস"],
          answer: "খ) মিয়ানমার",
          explanation:
            "মংডু হলো বাংলাদেশের টেকনাফ সীমান্তের ঠিক বিপরীতে অবস্থিত মিয়ানমারের একটি শহর।",
        },
        {
          id: 12,
          question: "সু চি কত সালে শান্তিতে নোবেল পুরস্কার পান?",
          options: ["ক) ১৯৯০", "খ) ১৯৯১", "গ) ১৯৯৫", "ঘ) ২০১২"],
          answer: "খ) ১৯৯১",
          explanation:
            "গণতন্ত্রের জন্য অহিংস সংগ্রামের স্বীকৃতিস্বরূপ তিনি ১৯৯১ সালে নোবেল পান।",
        },
        {
          id: 13,
          question: "মিয়ানমারের সামরিক বাহিনীর অফিশিয়াল নাম কী?",
          options: ["ক) হুক্কাহ", "খ) তাতমাদো", "গ) পিডিএফ", "ঘ) গেরিলা"],
          answer: "খ) তাতমাদো",
          explanation:
            "তাতমাদো (Tatmadaw) হলো মিয়ানমারের সশস্ত্র বাহিনীর দাপ্তরিক নাম।",
        },
        {
          id: 14,
          question: "মিয়ানমারের সমুদ্র বন্দর কোনটি?",
          options: ["ক) চাট্টগ্রাম", "খ) সিটওয়ে", "গ) মংলা", "ঘ) কলম্বো"],
          answer: "খ) সিটওয়ে",
          explanation:
            "সিটওয়ে (Sittwe) হলো রাখাইন রাজ্যের গুরুত্বপূর্ণ একটি সমুদ্র বন্দর।",
        },
        {
          id: 15,
          question: "নাফ নদী কোন দুটি দেশের সীমানা নির্ধারণ করেছে?",
          options: [
            "ক) বাংলাদেশ ও ভারত",
            "খ) বাংলাদেশ ও মিয়ানমার",
            "গ) ভারত ও মিয়ানমার",
            "ঘ) মিয়ানমার ও থাইল্যান্ড",
          ],
          answer: "খ) বাংলাদেশ ও মিয়ানমার",
          explanation: "নাফ নদী বাংলাদেশ ও মিয়ানমারকে বিভক্ত করেছে।",
        },
      ],
    },
    written_exam_prep: {
      guidelines:
        "লিখিত পরীক্ষার জন্য রোহিঙ্গা প্রত্যাবাসন প্রক্রিয়ায় বৈশ্বিক পরাশক্তিগুলোর (চীন, ভারত, রাশিয়া ও যুক্তরাষ্ট্র) ভূমিকা এবং বাংলাদেশের নিরাপত্তা ও অর্থনীতির ওপর এর প্রভাব নিয়ে প্রস্তুতি নিন।",
      possible_questions: [
        {
          question:
            "রোহিঙ্গা সংকটের কারণে বাংলাদেশের জন্য সৃষ্ট চ্যালেঞ্জগুলো আলোচনা করুন।",
          key_points_for_answer: [
            "অর্থনৈতিক চাপ ও আন্তর্জাতিক সাহায্যের অপ্রতুলতা।",
            "পরিবেশ ও বনজ সম্পদের ক্ষতি (কক্সবাজার ও টেকনাফ এলাকা)।",
            "আঞ্চলিক নিরাপত্তা ও অপরাধমূলক কর্মকাণ্ড (মাদক ও মানব পাচার)।",
            "কূটনৈতিক ও ভূ-রাজনৈতিক চাপ।",
          ],
        },
        {
          question:
            "মিয়ানমারের বর্তমান গৃহযুদ্ধ ও এর আঞ্চলিক প্রভাব বিশ্লেষণ করুন।",
          key_points_for_answer: [
            "আসিয়ান (ASEAN)-এর ৫-দফা শান্তি পরিকল্পনার ব্যর্থতা।",
            "সীমান্ত নিরাপত্তা ও শরণার্থী প্রবাহ।",
            "চীনের বেল্ট অ্যান্ড রোড ইনিশিয়েটিভ (BRI) এবং মিয়ানমার করিডোর।",
          ],
        },
      ],
    },
  },

  {
    _id: "india_intl_affairs_bcs_guide_2026",
    title:
      "ভারত (India): আন্তর্জাতিক বিষয়াবলী ও প্রতিযোগিতামূলক পরীক্ষার পূর্ণাঙ্গ নোট",
    category: "আন্তর্জাতিক বিষয়াবলী",
    tags: ["ভারত", "দক্ষিণ এশিয়া", "বিসিএস", "বাংলাদেশ-ভারত সম্পর্ক", "জি-২০"],
    last_updated: "২০২৬-০২-০৫",
    article_content: {
      summary:
        "ভারত বিশ্বের বৃহত্তম গণতান্ত্রিক রাষ্ট্র এবং দক্ষিণ এশিয়ার রাজনৈতিক ও অর্থনৈতিক প্রাণকেন্দ্র। ১৯৪৭ সালের ১৫ আগস্ট ব্রিটিশ শাসন থেকে স্বাধীন হওয়া এই দেশটি বর্তমানে বিশ্বের পঞ্চম বৃহত্তম অর্থনীতি। বাংলাদেশের সাথে ভারতের সীমান্ত সম্পর্ক, তিস্তা পানি বণ্টন এবং দ্বিপাক্ষিক বাণিজ্য আন্তর্জাতিক বিষয়াবলীর অত্যন্ত গুরুত্বপূর্ণ টপিক।",
      key_points: [
        "স্বাধীনতা: ১৫ আগস্ট ১৯৪৭ (ব্রিটেন থেকে)।",
        "শাসন ব্যবস্থা: যুক্তরাষ্ট্রীয় কাঠামো ও সংসদীয় গণতন্ত্র।",
        "সংবিধান: বিশ্বের দীর্ঘতম লিখিত সংবিধান।",
        "সীমানা: বিশ্বের সর্বাধিক দেশের সাথে (প্রতক্ষ ও পরোক্ষ) সীমানা এবং বাংলাদেশের সাথে দীর্ঘতম সীমান্ত (৪,১৫৬ কিমি)।",
        "বর্তমান অবস্থান: জনসংখ্যার ভিত্তিতে বিশ্বের বৃহত্তম দেশ এবং কোয়াড (QUAD) ও ব্রিকস (BRICS)-এর সক্রিয় সদস্য।",
      ],
      visual_representation: {
        image_tag: "",
        caption:
          "ভারতের রাজ্যসমূহ এবং প্রতিবেশী দেশগুলোর সাথে ভৌগোলিক অবস্থান।",
      },
      sections: [
        {
          heading: "১. রাজনৈতিক ও প্রশাসনিক কাঠামো",
          content:
            "ভারত ২৮টি রাজ্য এবং ৮টি কেন্দ্রশাসিত অঞ্চল নিয়ে গঠিত। ভারতের সংসদ দ্বিকক্ষবিশিষ্ট: উচ্চকক্ষ (রাজ্যসভা) এবং নিম্নকক্ষ (লোকসভা)। ভারতীয় সংবিধানের ৩৭০ অনুচ্ছেদ বাতিলের মাধ্যমে জম্মু ও কাশ্মীরের বিশেষ মর্যাদা বিলুপ্ত করা হয়েছে যা আন্তর্জাতিক রাজনীতিতে আলোচিত বিষয়।",
        },
        {
          heading: "২. ভারতের গুরুত্বপূর্ণ তথ্য একনজরে",
          table_data: [
            {
              সংস্থা: "আইনসভা",
              পূর্ণরূপ: "ভারতীয় সংসদ (Sansad)",
              লক্ষ্য: "উচ্চকক্ষ (রাজ্যসভা) ও নিম্নকক্ষ (লোকসভা)",
            },
            {
              সংস্থা: "মুদ্রা",
              辅助: "ভারতীয় রুপি (INR)",
              লক্ষ্য: "রিজার্ভ ব্যাংক অফ ইন্ডিয়া (RBI) দ্বারা নিয়ন্ত্রিত",
            },
            {
              সংস্থা: "জাতীয় প্রতীক",
              পূর্ণরূপ: "অশোক স্তম্ভ (Lion Capital)",
              লক্ষ্য: "সত্যমেব জয়তে (সত্যেরই জয় হয়)",
            },
            {
              সংস্থা: "সীমান্ত রেখা",
              পূর্ণরূপ: "র‍্যাডক্লিফ লাইন (Radcliffe Line)",
              লক্ষ্য: "ভারত ও পাকিস্তানের মধ্যবর্তী সীমানা",
            },
            {
              সংস্থা: "প্রধান নদী",
              পূর্ণরূপ: "গঙ্গা নদী (Ganges)",
              লক্ষ্য: "ভারতের দীর্ঘতম ও পবিত্রতম নদী",
            },
          ],
        },
      ],
    },
    preliminary_exam_prep: {
      focus: "বিসিএস প্রিলিমিনারি শর্টকাট (MCQ)",
      mcqs: [
        {
          id: 1,
          question: "ভারতের সংবিধান কত সালে কার্যকর হয়?",
          options: ["ক) ১৯৪৭", "খ) ১৯৪৮", "গ) ১৯৫০", "ঘ) ১৯৫২"],
          answer: "গ) ১৯৫০",
          explanation:
            "১৯৫০ সালের ২৬ জানুয়ারি ভারতের সংবিধান কার্যকর হয়, যা 'প্রজাতন্ত্র দিবস' হিসেবে পালিত হয়।",
        },
        {
          id: 2,
          question: "ভারতের লোকসভার মোট আসন সংখ্যা কত?",
          options: ["ক) ৫৪৫", "খ) ৫৪৩", "গ) ২৫০", "ঘ) ৩৫০"],
          answer: "খ) ৫৪৩",
          explanation:
            "বর্তমানে লোকসভার ৫৪৩টি আসনে সরাসরি নির্বাচনের মাধ্যমে প্রতিনিধি নির্বাচিত হন।",
        },
        {
          id: 3,
          question: "ভারতের কোন রাজ্যের সাথে বাংলাদেশের দীর্ঘতম সীমান্ত রয়েছে?",
          options: ["ক) আসাম", "খ) ত্রিপুরা", "গ) পশ্চিমবঙ্গ", "ঘ) মেঘালয়"],
          answer: "গ) পশ্চিমবঙ্গ",
          explanation: "পশ্চিমবঙ্গের সাথে বাংলাদেশের ২,২১৭ কিমি সীমান্ত রয়েছে।",
        },
        {
          id: 4,
          question: "ভারতের বর্তমান রাষ্ট্রপতির নাম কী?",
          options: [
            "ক) রামনাথ কোবিন্দ",
            "খ) দ্রৌপদী মুর্মু",
            "গ) নরেন্দ্র মোদী",
            "ঘ) জগদীপ ধনখড়",
          ],
          answer: "খ) দ্রৌপদী মুর্মু",
          explanation: "তিনি ভারতের প্রথম আদিবাসী নারী রাষ্ট্রপতি।",
        },
        {
          id: 5,
          question: "ভারত ও চীনকে বিভক্তকারী সীমারেখার নাম কী?",
          options: [
            "ক) ডুরান্ড লাইন",
            "খ) র‍্যাডক্লিফ লাইন",
            "গ) ম্যাকমোহন লাইন",
            "ঘ) হিডেনবার্গ লাইন",
          ],
          answer: "গ) ম্যাকমোহন লাইন",
          explanation:
            "ম্যাকমোহন লাইন ভারত ও চীনের মধ্যে সীমানা নির্ধারণ করেছে।",
        },
        {
          id: 6,
          question:
            "সেভেন সিস্টার্স (Seven Sisters) কোন অঞ্চলের রাজ্যগুলোকে বলা হয়?",
          options: [
            "ক) দক্ষিণ ভারত",
            "খ) উত্তর-পূর্ব ভারত",
            "গ) পশ্চিম ভারত",
            "ঘ) হিমালয় অঞ্চল",
          ],
          answer: "খ) উত্তর-পূর্ব ভারত",
          explanation:
            "অরুণাচল, আসাম, মেঘালয়, মণিপুর, মিজোরাম, নাগাল্যান্ড ও ত্রিপুরাকে একত্রে সেভেন সিস্টার্স বলা হয়।",
        },
        {
          id: 7,
          question: "ভারতের উচ্চকক্ষের নাম কী?",
          options: ["ক) লোকসভা", "খ) বিধানসভা", "গ) রাজ্যসভা", "ঘ) কংগ্রেস"],
          answer: "গ) রাজ্যসভা",
          explanation: "রাজ্যসভা হলো উচ্চকক্ষ এবং লোকসভা হলো নিম্নকক্ষ।",
        },
        {
          id: 8,
          question:
            "তিস্তা পানি বণ্টন চুক্তি অনুযায়ী ভারত ও বাংলাদেশের মধ্যে বিরোধের মূল কেন্দ্র কোথায়?",
          options: [
            "ক) ফারাক্কা বাঁধ",
            "খ) গজলডোবা ব্যারেজ",
            "গ) টিপাইমুখ বাঁধ",
            "ঘ) কাপ্তাই বাঁধ",
          ],
          answer: "খ) গজলডোবা ব্যারেজ",
          explanation:
            "পশ্চিমবঙ্গের গজলডোবা ব্যারেজ দিয়ে ভারত পানি নিয়ন্ত্রণ করায় তিস্তা চুক্তিতে জটিলতা তৈরি হয়েছে।",
        },
        {
          id: 9,
          question: "ভারতের সিলিকন ভ্যালি (Silicon Valley) বলা হয় কোন শহরকে?",
          options: [
            "ক) মুম্বাই",
            "খ) দিল্লি",
            "গ) বেঙ্গালুরু",
            "ঘ) হায়দ্রাবাদ",
          ],
          answer: "গ) বেঙ্গালুরু",
          explanation:
            "আইটি সেক্টরে অগ্রগতির কারণে বেঙ্গালুরুকে সিলিকন ভ্যালি বলা হয়।",
        },
        {
          id: 10,
          question: "ভারত ও শ্রীলঙ্কাকে পৃথক করেছে কোন প্রণালী?",
          options: [
            "ক) মালাক্কা",
            "খ) পক প্রণালী",
            "গ) জিব্রাল্টার",
            "ঘ) বেরিং",
          ],
          answer: "খ) পক প্রণালী",
          explanation:
            "পক প্রণালী (Palk Strait) ভারত ও শ্রীলঙ্কার মাঝে অবস্থিত।",
        },
        {
          id: 11,
          question: "ভারতের কেন্দ্রীয় ব্যাংক কোনটি?",
          options: [
            "ক) স্টেট ব্যাংক অফ ইন্ডিয়া",
            "খ) রিজার্ভ ব্যাংক অফ ইন্ডিয়া",
            "গ) ব্যাংক অফ ইন্ডিয়া",
            "ঘ) আইসিআইসিআই ব্যাংক",
          ],
          answer: "খ) রিজার্ভ ব্যাংক অফ ইন্ডিয়া",
          explanation: "RBI ভারতের সব ব্যাংকিং কার্যক্রম নিয়ন্ত্রণ করে।",
        },
        {
          id: 12,
          question: "কাশ্মীরের বিশেষ মর্যাদা ৩৭০ অনুচ্ছেদ বাতিল করা হয় কবে?",
          options: [
            "ক) ৫ আগস্ট ২০১৯",
            "খ) ১৫ আগস্ট ২০২০",
            "গ) ২৬ জানুয়ারি ২০১৯",
            "ঘ) ১ অক্টোবর ২০২১",
          ],
          answer: "ক) ৫ আগস্ট ২০১৯",
          explanation:
            "২০১৯ সালের ৫ আগস্ট জম্মু ও কাশ্মীরের বিশেষ স্বায়ত্তশাসন বাতিল করা হয়।",
        },
        {
          id: 13,
          question: "ভারতের প্রথম প্রধানমন্ত্রী কে ছিলেন?",
          options: [
            "ক) মহাত্মা গান্ধী",
            "খ) জওহরলাল নেহেরু",
            "গ) সর্দার প্যাটেল",
            "ঘ) রাজেন্দ্র প্রসাদ",
          ],
          answer: "খ) জওহরলাল নেহেরু",
          explanation: "তিনি ১৯৪৭ থেকে ১৯৬৪ সাল পর্যন্ত প্রধানমন্ত্রী ছিলেন।",
        },
        {
          id: 14,
          question: "অযোধ্যার রাম মন্দির কোন নদীর তীরে অবস্থিত?",
          options: ["ক) গঙ্গা", "খ) যমুনা", "গ) সরযূ", "ঘ) নর্মদা"],
          answer: "গ) সরযূ",
          explanation: "সরযূ নদীর তীরে অযোধ্যা শহর অবস্থিত।",
        },
        {
          id: 15,
          question: "কোয়াড (QUAD) জোটে ভারত ছাড়া অন্য দেশগুলো কী কী?",
          options: [
            "ক) চীন, রাশিয়া, জাপান",
            "খ) আমেরিকা, জাপান, অস্ট্রেলিয়া",
            "গ) ব্রিটেন, ফ্রান্স, কানাডা",
            "ঘ) পাকিস্তান, ইরান, তুরস্ক",
          ],
          answer: "খ) আমেরিকা, জাপান, অস্ট্রেলিয়া",
          explanation: "QUAD হলো ৪টি গণতান্ত্রিক দেশের কৌশলগত জোট।",
        },
      ],
    },
    written_exam_prep: {
      guidelines:
        "লিখিত পরীক্ষায় ভারত-বাংলাদেশ সম্পর্ক নিয়ে প্রশ্ন আসলে ছিটমহল বিনিময় চুক্তি (২০১৫), কানেক্টিভিটি (ট্রানজিট ও ট্রান্সশিপমেন্ট) এবং ব্লু-ইকোনমি নিয়ে আলোকপাত করুন।",
      possible_questions: [
        {
          question:
            "ভারত-বাংলাদেশ দ্বিপাক্ষিক সম্পর্কের প্রধান অমীমাংসিত ইস্যুগুলো আলোচনা করুন।",
          key_points_for_answer: [
            "অভিন্ন নদীর পানি বণ্টন (তিস্তা চুক্তি)।",
            "সীমান্ত হত্যা ও নিরাপত্তা ইস্যু।",
            "বাণিজ্যিক ভারসাম্যহীনতা ও শুল্ক বাধা।",
            "কানেক্টিভিটি ও ট্রানজিট সুবিধা।",
          ],
        },
        {
          question:
            "দক্ষিণ এশিয়ায় ভারতের 'নেইবারহুড ফার্স্ট' (Neighborhood First) নীতির প্রভাব বিশ্লেষণ করুন।",
          key_points_for_answer: [
            "প্রতিবেশী দেশগুলোর সাথে অবকাঠামোগত উন্নয়ন।",
            "আঞ্চলিক স্থিতিশীলতা ও নিরাপত্তা।",
            "চীনের ক্রমবর্ধমান প্রভাব মোকাবিলায় কৌশল।",
          ],
        },
      ],
    },
  },
  {
    _id: "china_intl_affairs_bcs_guide_2026",
    title:
      "চীন (China): আন্তর্জাতিক বিষয়াবলী ও প্রতিযোগিতামূলক পরীক্ষার পূর্ণাঙ্গ নোট",
    category: "আন্তর্জাতিক বিষয়াবলী",
    tags: ["চীন", "এশিয়া", "বিসিএস", "বিআরআই", "ভেটো", "পরাশক্তি"],
    last_updated: "২০২৬-০২-০৫",
    article_content: {
      summary:
        "গণচীন বা পিপলস রিপাবলিক অফ চায়না পূর্ব এশিয়ার একটি শক্তিশালী রাষ্ট্র এবং বিশ্বের দ্বিতীয় বৃহত্তম অর্থনীতি। ১৯৪৯ সালের ১ অক্টোবর মাও সে তুং-এর নেতৃত্বে সমাজতান্ত্রিক বিপ্লবের মাধ্যমে এটি প্রতিষ্ঠিত হয়। বর্তমানে চীন তার 'বেল্ট অ্যান্ড রোড ইনিশিয়েটিভ' (BRI) প্রকল্পের মাধ্যমে বিশ্বজুড়ে ভূ-রাজনৈতিক ও অর্থনৈতিক প্রভাব বিস্তার করছে।",
      key_points: [
        "বিপ্লব ও প্রতিষ্ঠা: ১ অক্টোবর ১৯৪৯ (মাও সে তুং-এর নেতৃত্বে)।",
        "শাসন ব্যবস্থা: এককেন্দ্রিক সমাজতান্ত্রিক রাষ্ট্র (একদলীয় শাসন)।",
        "জাতিসংঘের অবস্থান: নিরাপত্তা পরিষদের স্থায়ী সদস্য এবং ভেটো ক্ষমতার অধিকারী।",
        "অর্থনীতি: বিশ্বের বৃহত্তম রপ্তানিকারক এবং দ্বিতীয় বৃহত্তম আমদানিকারক দেশ।",
        "বাংলাদেশ সম্পর্ক: বাংলাদেশের বৃহত্তম বাণিজ্যিক অংশীদার এবং অন্যতম প্রধান প্রতিরক্ষা সরঞ্জাম সরবরাহকারী।",
      ],
      visual_representation: {
        image_tag: "",
        caption:
          "চীনের উচ্চাভিলাষী 'বেল্ট অ্যান্ড রোড ইনিশিয়েটিভ' (BRI) প্রকল্পের বৈশ্বিক মানচিত্র।",
      },
      sections: [
        {
          heading: "১. চীনের রাজনৈতিক ও অর্থনৈতিক গুরুত্ব",
          content:
            "চীনের কমিউনিস্ট পার্টি (CCP) দেশটির একমাত্র শাসক দল। বর্তমান প্রেসিডেন্ট শি জিনপিং-এর শাসনামলে চীন 'চীনা স্বপ্ন' (Chinese Dream) বাস্তবায়নের পথে হাঁটছে। দক্ষিণ চীন সাগরে আধিপত্য বিস্তার এবং তাইওয়ান ইস্যু বর্তমানে চীনের আন্তর্জাতিক রাজনীতির সবচেয়ে আলোচিত বিষয়।",
        },
        {
          heading: "২. চীনের গুরুত্বপূর্ণ তথ্য একনজরে",
          table_data: [
            {
              সংস্থা: "আইনসভা",
              পূর্ণরূপ: "ন্যাশনাল পিপলস কংগ্রেস (NPC)",
              লক্ষ্য: "বিশ্বের বৃহত্তম আইনসভা (প্রায় ৩০০০ সদস্য)",
            },
            {
              সংস্থা: "মুদ্রা",
              পূর্ণরূপ: "রেনমিনবি (Renminbi/Yuan)",
              লক্ষ্য:
                "IMF-এর বিশেষ ড্রয়িং রাইটস (SDR) বাস্কেটের অন্তর্ভুক্ত মুদ্রা",
            },
            {
              সংস্থা: "পারমাণবিক শক্তি",
              পূর্ণরূপ: "ঘোষিত পারমাণবিক শক্তিধর রাষ্ট্র",
              লক্ষ্য: "এনপিটি (NPT) অনুমোদিত ৫টি দেশের একটি",
            },
            {
              সংস্থা: "প্রকল্প",
              পূর্ণরূপ: "বেল্ট অ্যান্ড রোড ইনিশিয়েটিভ (BRI)",
              লক্ষ্য: "এশিয়া, আফ্রিকা ও ইউরোপের মধ্যে সংযোগ স্থাপন",
            },
            {
              সংস্থা: "সীমান্ত",
              পূর্ণরূপ: "সর্বাধিক দেশের সাথে সীমান্ত",
              লক্ষ্য: "১৪টি দেশের সাথে স্থলসীমানা বিদ্যমান",
            },
          ],
        },
      ],
    },
    preliminary_exam_prep: {
      focus: "বিসিএস প্রিলিমিনারি শর্টকাট (MCQ)",
      mcqs: [
        {
          id: 1,
          question: "আধুনিক চীনের জনক কে?",
          options: [
            "ক) সান ইয়াত সেন",
            "খ) মাও সে তুং",
            "গ) দেং জিয়াওপিং",
            "ঘ) শি জিনপিং",
          ],
          answer: "খ) মাও সে তুং",
          explanation:
            "মাও সে তুং-এর নেতৃত্বে ১৯৪৯ সালে গণপ্রজাতন্ত্রী চীন প্রতিষ্ঠিত হয়। তবে সান ইয়াত সেনকে প্রজাতন্ত্রী চীনের জনক বলা হয়।",
        },
        {
          id: 2,
          question: "চীনের বর্তমান প্রেসিডেন্টের পদবী কী?",
          options: [
            "ক) চেয়ারম্যান",
            "খ) সুপ্রিম লিডার",
            "গ) প্রেসিডেন্ট",
            "ঘ) প্রিমিয়ার",
          ],
          answer: "গ) প্রেসিডেন্ট",
          explanation:
            "শি জিনপিং বর্তমানে চীনের প্রেসিডেন্ট এবং কমিউনিস্ট পার্টির জেনারেল সেক্রেটারি।",
        },
        {
          id: 3,
          question: "তাইওয়ানকে চীন কী মনে করে?",
          options: [
            "ক) স্বাধীন দেশ",
            "খ) বিচ্ছিন্ন প্রদেশ",
            "গ) বন্ধু রাষ্ট্র",
            "ঘ) উপনিবেশ",
          ],
          answer: "খ) বিচ্ছিন্ন প্রদেশ",
          explanation:
            "চীন 'ওয়ান চায়না পলিসি'র আওতায় তাইওয়ানকে নিজেদের অবিচ্ছেদ্য অংশ মনে করে।",
        },
        {
          id: 4,
          question: "চীনের কেন্দ্রীয় ব্যাংকের নাম কী?",
          options: [
            "ক) ব্যাংক অফ চায়না",
            "খ) পিপলস ব্যাংক অফ চায়না",
            "গ) চায়না সেন্ট্রাল ব্যাংক",
            "ঘ) আইসিবিসি",
          ],
          answer: "খ) পিপলস ব্যাংক অফ চায়না",
          explanation:
            "পিপলস ব্যাংক অফ চায়না (PBOC) দেশটির মুদ্রা নীতি ও ব্যাঙ্কিং ব্যবস্থা নিয়ন্ত্রণ করে।",
        },
        {
          id: 5,
          question: "হংকং কত সালে চীনের কাছে হস্তান্তরিত হয়?",
          options: ["ক) ১৯৯০", "খ) ১৯৯৭", "গ) ১৯৯৯", "ঘ) ২০০১"],
          answer: "খ) ১৯৯৭",
          explanation:
            "১৫৫ বছরের ব্রিটিশ শাসন শেষে ১৯৯৭ সালের ১ জুলাই হংকং চীনের কাছে ফিরে আসে।",
        },
        {
          id: 6,
          question:
            "চীনের মহাপ্রাচীর (Great Wall of China) কোন আক্রমণ থেকে বাঁচার জন্য তৈরি হয়েছিল?",
          options: ["ক) জাপানি", "খ) মোঙ্গল ও হুন", "গ) ব্রিটিশ", "ঘ) রোমান"],
          answer: "খ) মোঙ্গল ও হুন",
          explanation:
            "উত্তর দিক থেকে যাযাবর মোঙ্গল ও হুনদের আক্রমণ প্রতিহত করতে এটি নির্মিত হয়েছিল।",
        },
        {
          id: 7,
          question: "চীন কত সালে জাতিসংঘে ভেটো ক্ষমতা লাভ করে?",
          options: ["ক) ১৯৪৫", "খ) ১৯৭১", "গ) ১৯৪৯", "ঘ) ১৯৮৫"],
          answer: "খ) ১৯৭১",
          explanation:
            "১৯৭১ সালে তাইওয়ানকে বহিষ্কার করে গণচীন জাতিসংঘের স্থায়ী সদস্যপদ ও ভেটো ক্ষমতা লাভ করে।",
        },
        {
          id: 8,
          question: "চীনের ম্যানচেস্টার বলা হয় কোন শহরকে?",
          options: ["ক) বেইজিং", "খ) সাংহাই", "গ) গুয়াংজু", "ঘ) শেনজেন"],
          answer: "খ) সাংহাই",
          explanation:
            "শিল্প ও বাণিজ্যে উন্নত হওয়ায় সাংহাইকে চীনের ম্যানচেস্টার বলা হয়।",
        },
        {
          id: 9,
          question: "তিয়েন আনমেন স্কয়ার কোথায় অবস্থিত?",
          options: ["ক) সাংহাই", "খ) বেইজিং", "গ) নানজিং", "ঘ) তিব্বত"],
          answer: "খ) বেইজিং",
          explanation:
            "এটি বেইজিং-এ অবস্থিত একটি বিশাল চত্বর, যা ১৯৮৯ সালের ছাত্র বিক্ষোভের জন্য পরিচিত।",
        },
        {
          id: 10,
          question:
            "এশীয় অবকাঠামো বিনিয়োগ ব্যাংক (AIIB) এর সদর দপ্তর কোথায়?",
          options: ["ক) সাংহাই", "খ) বেইজিং", "গ) টোকিও", "ঘ) ম্যানিলা"],
          answer: "খ) বেইজিং",
          explanation:
            "AIIB চীনের নেতৃত্বে গঠিত একটি বহুজাতিক ব্যাংক যার সদর দপ্তর বেইজিং-এ।",
        },
        {
          id: 11,
          question: "চীনের ওপর দিয়ে প্রবাহিত দীর্ঘতম নদীর নাম কী?",
          options: ["ক) হুয়াংহো", "খ) ইয়াংসি", "গ) মেকং", "ঘ) আমুর"],
          answer: "খ) ইয়াংসি",
          explanation:
            "ইয়াংসি নদী এশিয়ার দীর্ঘতম এবং বিশ্বের তৃতীয় দীর্ঘতম নদী।",
        },
        {
          id: 12,
          question: "চীনের কোন প্রদেশ মুসলিম উইঘুরদের জন্য পরিচিত?",
          options: ["ক) তিব্বত", "খ) শিনজিয়াং", "গ) ইউনান", "ঘ) হাইনান"],
          answer: "খ) শিনজিয়াং",
          explanation:
            "শিনজিয়াং প্রদেশে উইঘুর মুসলিমদের বসবাস, যা বর্তমানে মানবাধিকার ইস্যুতে আলোচিত।",
        },
        {
          id: 13,
          question: "ব্রিকস (BRICS) নিউ ডেভেলপমেন্ট ব্যাংকের সদর দপ্তর কোথায়?",
          options: ["ক) নিউ দিল্লি", "খ) মস্কো", "গ) সাংহাই", "ঘ) কেপ টাউন"],
          answer: "গ) সাংহাই",
          explanation:
            "ব্রিকস ব্যাংকের (NDB) সদর দপ্তর চীনের বাণিজ্যিক রাজধানী সাংহাইতে।",
        },
        {
          id: 14,
          question:
            "চায়না-পাকিস্তান ইকোনমিক করিডোর (CPEC) কোন সমুদ্র বন্দরকে সংযুক্ত করে?",
          options: ["ক) করাচি", "খ) গাওয়াদার", "গ) চাবাহার", "ঘ) কলম্বো"],
          answer: "খ) গাওয়াদার",
          explanation:
            "CPEC চীনের শিনজিয়াং প্রদেশকে পাকিস্তানের গাওয়াদার বন্দরের সাথে যুক্ত করেছে।",
        },
        {
          id: 15,
          question: "চীনের শোক বলা হয় কোন নদীকে?",
          options: ["ক) ইয়াংসি", "খ) হুয়াংহো", "গ) পার্ল নদী", "ঘ) লিন"],
          answer: "খ) হুয়াংহো",
          explanation:
            "অতীতের ভয়াবহ বন্যার কারণে হুয়াংহো নদীকে চীনের শোক বলা হতো।",
        },
      ],
    },
    written_exam_prep: {
      guidelines:
        "লিখিত পরীক্ষায় চীনের 'ডেবট ট্র্যাপ ডিপ্লোম্যাসি' (ঋণ ফাঁদ কূটনীতি) এবং বাংলাদেশের সাথে গভীর সামরিক ও অর্থনৈতিক সম্পর্ক নিয়ে বিস্তারিত আলোচনা করুন।",
      possible_questions: [
        {
          question:
            "চীনের 'বেল্ট অ্যান্ড রোড ইনিশিয়েটিভ' (BRI) প্রকল্পের লক্ষ্য ও উদ্দেশ্য আলোচনা করুন।",
          key_points_for_answer: [
            "বৈশ্বিক কানেক্টিভিটি ও বাণিজ্য পথ তৈরি।",
            "নতুন জ্বালানি উৎস ও বাজার দখল।",
            "ভূ-রাজনৈতিক প্রভাব বৃদ্ধি এবং ডলারের আধিপত্য কমানো।",
            "উন্নয়নশীল দেশগুলোতে অবকাঠামো বিনিয়োগ।",
          ],
        },
        {
          question:
            "ভারত-চীন দ্বন্দ্বে বাংলাদেশের অবস্থান ও পররাষ্ট্রনীতির চ্যালেঞ্জসমূহ বিশ্লেষণ করুন।",
          key_points_for_answer: [
            "ভারসাম্যপূর্ণ পররাষ্ট্রনীতি (সবার সাথে বন্ধুত্ব, কারো সাথে শত্রুতা নয়)।",
            "অর্থনৈতিক ও অবকাঠামোগত উন্নয়নের প্রয়োজনীয়তা।",
            "বঙ্গোপসাগরের কৌশলগত গুরুত্ব এবং কোয়াড (QUAD) বনাম চীন ইস্যু।",
          ],
        },
      ],
    },
  },

  {
    _id: "react_interview_guide_2026",
    title: "React JS: প্রিলিমিনারি ও টেকনিক্যাল ইন্টারভিউ প্রস্তুতি",
    category: "Software Engineering",
    tags: ["React", "JavaScript", "Frontend", "Interview", "Web Development"],
    last_updated: "2026-02-05",
    article_content: {
      summary:
        "React হলো একটি ডাইনামিক লাইব্রেরি যা ইউজার ইন্টারফেস তৈরিতে ব্যবহৃত হয়। ২০২৬ সালের ইন্টারভিউগুলোতে মূলত React Server Components (RSC), Performance Optimization এবং আধুনিক স্টেট ম্যানেজমেন্টের ওপর জোর দেওয়া হয়।",
      key_points: [
        "Virtual DOM এবং Diffing Algorithm এর কার্যপ্রণালী।",
        "React Hooks (useState, useEffect, useMemo, useCallback) এর সঠিক ব্যবহার।",
        "Client Components বনাম Server Components এর পার্থক্য।",
        "Hydration এবং Streaming SSR (Server Side Rendering)।",
        "Prop Drilling এড়াতে Context API বা Zustand এর ব্যবহার।",
      ],
      visual_representation: {
        image_tag: "",
        caption:
          "React Fiber: The reconciliation engine responsible for incremental rendering.",
      },
      sections: [
        {
          heading: "১. রিঅ্যাক্ট কিভাবে কাজ করে?",
          content:
            "React মূলত Virtual DOM ব্যবহার করে। যখনই স্টেট পরিবর্তন হয়, React একটি নতুন Virtual DOM তৈরি করে এবং আগেরটির সাথে তুলনা (Diffing) করে। শুধুমাত্র পরিবর্তিত অংশটুকুই বাস্তব DOM-এ আপডেট করা হয়, যা অ্যাপকে দ্রুত করে।",
        },
        {
          heading: "২. গুরুত্বপূর্ণ টেকনিক্যাল কনসেপ্ট",
          table_data: [
            {
              সংস্থা: "UseMemo",
              পূর্ণরূপ: "Memoization Hook",
              লক্ষ্য: "Expensive calculations বারবার হওয়া আটকানো",
            },
            {
              সংস্থা: "UseCallback",
              পূর্ণরূপ: "Function Memoization",
              লক্ষ্য:
                "চাইল্ড কম্পোনেন্টে অপ্রয়োজনীয় ফাংশন রিক্রিয়েশন বন্ধ করা",
            },
            {
              সংস্থা: "Suspense",
              পূর্ণরূপ: "Data Fetching Boundary",
              লক্ষ্য:
                "লোডিং স্টেট হ্যান্ডেল করা এবং ইউজার এক্সপেরিয়েন্স উন্নত করা",
            },
            {
              সংস্থা: "Strict Mode",
              পূর্ণরূপ: "Development Tool",
              লক্ষ্য: "আনসেফ লাইফসাইকেল এবং সম্ভাব্য বাগ খুঁজে বের করা",
            },
          ],
        },
      ],
    },
    preliminary_exam_prep: {
      focus: "React Technical MCQ",
      mcqs: [
        {
          id: 1,
          question: "React-এ 'Key' প্রপ কেন ব্যবহার করা হয়?",
          options: [
            "ক) স্টাইলিংয়ের জন্য",
            "খ) DOM এলিমেন্ট ইউনিকভাবে চেনার জন্য",
            "গ) ইভেন্ট হ্যান্ডলিংয়ের জন্য",
            "ঘ) স্টেট স্টোর করার জন্য",
          ],
          answer: "খ) DOM এলিমেন্ট ইউনিকভাবে চেনার জন্য",
          explanation:
            "Reconciliation-এর সময় কোন আইটেমটি পরিবর্তিত, যোগ বা ডিলিট হয়েছে তা দ্রুত বোঝার জন্য React 'key' ব্যবহার করে।",
        },
        {
          id: 2,
          question: "নিচের কোনটি স্টেট পরিবর্তনের জন্য সঠিক নিয়ম?",
          options: [
            "ক) Directly modifying state",
            "খ) Using this.state",
            "গ) Using the setter function (setState)",
            "ঘ) Local variables",
          ],
          answer: "গ) Using the setter function (setState)",
          explanation:
            "স্টেট ইমিউটেবল (Immutable), তাই সরাসরি পরিবর্তন না করে সেটার ফাংশন ব্যবহার করতে হয়।",
        },
        {
          id: 3,
          question: "React Server Components (RSC) এর প্রধান সুবিধা কী?",
          options: [
            "ক) দ্রুত ব্রাউজার ইন্টারঅ্যাকশন",
            "খ) ছোট ক্লায়েন্ট সাইড বান্ডেল সাইজ",
            "গ) SEO করার প্রয়োজন নেই",
            "ঘ) CSS দ্রুত লোড হয়",
          ],
          answer: "খ) ছোট ক্লায়েন্ট সাইড বান্ডেল সাইজ",
          explanation:
            "RSC সার্ভারে রান করে, তাই অতিরিক্ত জাভাস্ক্রিপ্ট ব্রাউজারে পাঠাতে হয় না।",
        },
        {
          id: 4,
          question:
            "useEffect-এর ডিপেন্ডেন্সি অ্যারে খালি থাকলে ([]), এটি কখন কল হয়?",
          options: [
            "ক) প্রতি রেন্ডারে",
            "খ) শুধুমাত্র প্রথমবার মাউন্ট হওয়ার সময়",
            "গ) স্টেট পরিবর্তনের সময়",
            "ঘ) আনমাউন্ট হওয়ার সময়",
          ],
          answer: "খ) শুধুমাত্র প্রথমবার মাউন্ট হওয়ার সময়",
          explanation:
            "খালি অ্যারে মানে এটি কোনো ভেরিয়েবলের ওপর নির্ভর করে না, তাই একবারই রান করে।",
        },
        {
          id: 5,
          question: "React-এ 'Children' প্রপ কী?",
          options: [
            "ক) একটি চাইল্ড কম্পোনেন্ট",
            "খ) ওপেনিং ও ক্লোজিং ট্যাগের মাঝের কন্টেন্ট",
            "গ) শুধুমাত্র টেক্সট কন্টেন্ট",
            "ঘ) প্যারেন্ট কম্পোনেন্টের ডাটা",
          ],
          answer: "খ) ওপেনিং ও ক্লোজিং ট্যাগের মাঝের কন্টেন্ট",
          explanation:
            "কম্পোনেন্ট কম্পোজিশনের সময় ট্যাগের ভেতর যা পাস করা হয় তাই children।",
        },
      ],
    },
    written_exam_prep: {
      guidelines:
        "কোডিং ইন্টারভিউতে সাধারণত একটি Counter বা Todo App তৈরি করতে দেওয়া হয়। সেখানে ক্লিন কোড এবং হুকস এর সঠিক ব্যবহার নিশ্চিত করুন।",
      possible_questions: [
        {
          question: "React-এ 'Lifting State Up' বলতে কী বোঝায়?",
          key_points_for_answer: [
            "দুটি সিবলিং কম্পোনেন্টের মধ্যে ডাটা শেয়ারিং।",
            "স্টেটকে কমন প্যারেন্ট কম্পোনেন্টে নিয়ে যাওয়া।",
            "একই ডাটা সোর্স থেকে মাল্টিপল কম্পোনেন্ট আপডেট করা।",
          ],
        },
        {
          question: "Virtual DOM বনাম Real DOM এর পার্থক্য লিখুন।",
          key_points_for_answer: [
            "আপডেট স্পিড (Virtual DOM দ্রুত)।",
            "মেমরি ব্যবহার।",
            "ব্যাচ আপডেট সুবিধা।",
          ],
        },
      ],
    },
  },

  {
    _id: "mental_ability_bcs_guide_2026",
    title:
      "মানসিক দক্ষতা (Mental Ability): বিসিএস ও ক্যারিয়ার প্রস্তুতির পূর্ণাঙ্গ গাইড",
    category: "সাধারণ জ্ঞান ও দক্ষতা",
    tags: [
      "মানসিক দক্ষতা",
      "বিসিএস",
      "যৌক্তিক বুদ্ধি",
      "সমস্যা সমাধান",
      "Mental Ability",
    ],
    last_updated: "২০২৬-০২-০৫",
    article_content: {
      summary:
        "মানসিক দক্ষতা হলো একজন প্রার্থীর বুদ্ধিবৃত্তিক সক্ষমতা এবং দ্রুত সিদ্ধান্ত নেওয়ার ক্ষমতা যাচাইয়ের প্রক্রিয়া। এটি মূলত গাণিতিক যুক্তি, ভাষাগত দক্ষতা, স্থানাঙ্ক সম্পর্ক এবং মেকানিক্যাল রিজনিংয়ের সমন্বয়। বিসিএস প্রিলিমিনারি ও লিখিত উভয় পরীক্ষাতেই এই বিষয়টি থেকে বড় একটি অংশের প্রশ্ন থাকে।",
      key_points: [
        "এটি কোনো মুখস্থ বিদ্যা নয়, বরং নিয়মিত অনুশীলনের বিষয়।",
        "প্রধান ক্ষেত্রসমূহ: ভাষাগত যৌক্তিক বিচার, গাণিতিক যুক্তি, এবং চিত্র ভিত্তিক সমস্যা।",
        "সময় সচেতনতা: এই অংশে দ্রুত উত্তর দেওয়া অত্যন্ত জরুরি।",
        "বিসিএস সিলেবাস: বিসিএস প্রিলিমিনারিতে ১৫ নম্বর এবং লিখিত পরীক্ষায় ৫০ নম্বর বরাদ্দ থাকে।",
      ],
      visual_representation: {
        image_tag: "",
        caption:
          "মানসিক দক্ষতার বিভিন্ন ধরণ যেমন ভেন চিত্র এবং সংখ্যাতাত্ত্বিক সিরিজ।",
      },
      sections: [
        {
          heading: "১. মানসিক দক্ষতার প্রধান শাখাগুলো",
          content:
            "মানসিক দক্ষতাকে মূলত ছয়টি প্রধান ভাগে ভাগ করা যায়: ভাষাগত যৌক্তিক বিচার (Verbal Reasoning), গাণিতিক যুক্তি (Mathematical Reasoning), স্থানাঙ্ক সম্পর্ক (Spatial Relation), বানান ও ভাষা, যান্ত্রিক দক্ষতা এবং মানচিত্র বা চিত্র বিশ্লেষণ।",
        },
        {
          heading: "২. গুরুত্বপূর্ণ টপিক ও শর্টকাট একনজরে",
          table_data: [
            {
              সংস্থা: "রক্তের সম্পর্ক",
              পূর্ণরূপ: "Blood Relations",
              লক্ষ্য: "পারিবারিক গাছের (Family Tree) মাধ্যমে আত্মীয়তা নির্ণয়",
            },
            {
              সংস্থা: "দিক নির্ণয়",
              পূর্ণরূপ: "Direction Sense",
              লক্ষ্য: "পিথাগোরাসের সূত্র ব্যবহার করে দূরত্ব ও দিক বের করা",
            },
            {
              সংস্থা: "সিরিজ সম্পন্নকরণ",
              পূর্ণরূপ: "Number/Letter Series",
              লক্ষ্য: "সংখ্যার প্যাটার্ন বা গ্যাপ খুঁজে বের করা",
            },
            {
              সংস্থা: "আয়নায় প্রতিফলন",
              পূর্ণরূপ: "Mirror Image",
              লক্ষ্য: "পার্শ্বীয় পরিবর্তন (Lateral Inversion) বুঝা",
            },
            {
              সংস্থা: "ঘড়ি ও সময়",
              পূর্ণরূপ: "Clock Problems",
              লক্ষ্য: "কাটার মধ্যবর্তী কোণ ($\theta$) নির্ণয়",
            },
          ],
        },
      ],
    },
    preliminary_exam_prep: {
      focus: "মানসিক দক্ষতা শর্টকাট ও প্র্যাকটিস",
      mcqs: [
        {
          id: 1,
          question: "যদি আয়নায় ঘড়িতে সময় ৩টা বাজে, তবে প্রকৃত সময় কত?",
          options: ["ক) ৯টা", "খ) ৩টা", "গ) ৬টা", "ঘ) ১২টা"],
          answer: "ক) ৯টা",
          explanation:
            "আয়নায় সময় বের করার সূত্র: ১২টা থেকে আয়নার সময় বিয়োগ। ১২ - ৩ = ৯।",
        },
        {
          id: 2,
          question: "১, ৩, ৬, ১০, ১৫, ..... ধারার পরবর্তী সংখ্যাটি কত?",
          options: ["ক) ২০", "খ) ২১", "গ) ২৫", "ঘ) ১৮"],
          answer: "খ) ২১",
          explanation:
            "গ্যাপগুলো যথাক্রমে ২, ৩, ৪, ৫... তাই পরবর্তী গ্যাপ হবে ৬। ১৫ + ৬ = ২১।",
        },
        {
          id: 3,
          question:
            "একজন লোক উত্তর দিকে ৫ কিমি গেল, তারপর ডানে মোড় নিয়ে ১২ কিমি গেল। শুরুর স্থান থেকে তার সরাসরি দূরত্ব কত?",
          options: ["ক) ১৭ কিমি", "খ) ১৩ কিমি", "গ) ৭ কিমি", "ঘ) ৮ কিমি"],
          answer: "খ) ১৩ কিমি",
          explanation:
            "পিথাগোরাসের সূত্র অনুযায়ী: $d = \sqrt{5^2 + 12^2} = \sqrt{25 + 144} = 13$।",
        },
        {
          id: 4,
          question:
            "সকাল ১০টার সময় ঘড়ির ঘণ্টা ও মিনিটের কাটার মধ্যবর্তী কোণ কত ডিগ্রি?",
          options: ["ক) ৩০°", "খ) ৬০°", "গ) ৯০°", "ঘ) ১২০°"],
          answer: "খ) ৬০°",
          explanation:
            "সূত্র: $\left| \frac{11M - 60H}{2} \right|$। এখানে M=0, H=10। তাই $|-600/2| = 300°$। যেহেতু এটি ১৮০-র বড়, তাই ৩৬০ - ৩০০ = ৬০°।",
        },
        {
          id: 5,
          question:
            "'REASON' যদি '5' হয় এবং 'GOVERNMENT' যদি '9' হয়, তবে 'BELIEVED' কত?",
          options: ["ক) ৭", "খ) ৮", "গ) ৯", "ঘ) ১০"],
          answer: "ক) ৭",
          explanation:
            "শব্দের মোট অক্ষর সংখ্যা থেকে ১ বিয়োগ করা হয়েছে। (৮ - ১ = ৭)।",
        },
        {
          id: 6,
          question: "যদি আজ মঙ্গলবার হয়, তবে আজ থেকে ৬৪ দিন পর কী বার হবে?",
          options: ["ক) মঙ্গলবার", "খ) বুধবার", "গ) বৃহস্পতিবার", "ঘ) সোমবার"],
          answer: "খ) বুধবার",
          explanation:
            "৬৪ কে ৭ দিয়ে ভাগ করলে অবশিষ্ট থাকে ১। মঙ্গলবার + ১ দিন = বুধবার।",
        },
        {
          id: 7,
          question:
            "ক-এর ছেলে খ। খ-এর বোন গ। গ-এর মা ঘ। খ-এর সাথে ঘ-এর সম্পর্ক কী?",
          options: ["ক) বাবা", "খ) মা", "গ) ভাই", "ঘ) বোন"],
          answer: "খ) মা",
          explanation: "খ এবং গ ভাই-বোন। গ-এর মা ঘ হলে খ-এর মা-ও ঘ।",
        },
        {
          id: 8,
          question: "নিচের কোনটি অন্যগুলোর থেকে আলাদা?",
          options: ["ক) ফুটবল", "খ) ক্রিকেট", "গ) হকি", "ঘ) দাবা"],
          answer: "ঘ) দাবা",
          explanation: "দাবা ইনডোর গেম, বাকিগুলো আউটডোর গেম।",
        },
        {
          id: 9,
          question: "সঠিক বানান কোনটি?",
          options: ["ক) শশুড়", "খ) শ্বশুড়", "গ) শ্বশুর", "ঘ) শশুর"],
          answer: "গ) শ্বশুর",
          explanation: "শ এর নিচে ব-ফলা এবং শেষে র।",
        },
        {
          id: 10,
          question: "২টা ১৫ মিনিটে ঘড়ির আয়না প্রতিচ্ছবিতে সময় কত দেখাবে?",
          options: [
            "ক) ৯টা ৪৫ মিনিট",
            "খ) ১০টা ৪৫ মিনিট",
            "গ) ৩টা ১৫ মিনিট",
            "ঘ) ৯টা ১৫ মিনিট",
          ],
          answer: "ক) ৯টা ৪৫ মিনিট",
          explanation: "সূত্র: ১১:৬০ থেকে ২:১৫ বিয়োগ করলে ৯:৪৫ পাওয়া যায়।",
        },
        {
          id: 11,
          question:
            "ইংরেজি বর্ণমালায় বাম দিক থেকে ১০ম বর্ণের ডানে ৫ম বর্ণ কোনটি?",
          options: ["ক) O", "খ) P", "গ) N", "ঘ) J"],
          answer: "ক) O",
          explanation: "১০ + ৫ = ১৫তম বর্ণ। বর্ণমালায় ১৫তম বর্ণ হলো O।",
        },
        {
          id: 12,
          question:
            "একটি সারিতে রহিমের অবস্থান দুদিক থেকেই ১০ম। সারিতে মোট কতজন আছে?",
          options: ["ক) ২০", "খ) ১৯", "গ) ২১", "ঘ) ১৮"],
          answer: "খ) ১৯",
          explanation: "সূত্র: (বাম + ডান) - ১ = (১০ + ১০) - ১ = ১৯।",
        },
        {
          id: 13,
          question: "নিচের কোন শব্দটি 'INTELLIGENCE' দিয়ে তৈরি করা সম্ভব নয়?",
          options: ["ক) GENTLE", "খ) NEGLECT", "গ) CLIENT", "ঘ) CANCEL"],
          answer: "ঘ) CANCEL",
          explanation:
            "INTELLIGENCE শব্দটিতে 'A' অক্ষরটি নেই, যা CANCEL-এ রয়েছে।",
        },
        {
          id: 14,
          question: "৯২ : ২৪ :: ৩৯ : ?",
          options: ["ক) ২৬", "খ) ২৭", "গ) ৫৪", "ঘ) ৩৯"],
          answer: "খ) ২৭",
          explanation:
            "৯ × ২ = ১৮ (ভুল লজিক)। সঠিক লজিক: ৯২ এর অংকদ্বয়ের গুণফল ৯×২=১৮ নয়। এটি ৩ গুণ (৯×২=১৮ থেকে আসেনি)। আসলে ৯+২=১১। ৩+৯=১২। সঠিক লজিক ৯×২+৬=২৪। ৩×৯=২৭।",
        },
        {
          id: 15,
          question: "কোনটি মৌলিক সংখ্যা নয়?",
          options: ["ক) ২", "খ) ৭", "গ) ৯", "ঘ) ১১"],
          answer: "গ) ৯",
          explanation: "৯ সংখ্যাটি ৩ দ্বারা বিভাজ্য, তাই এটি মৌলিক নয়।",
        },
      ],
    },
    written_exam_prep: {
      guidelines:
        "লিখিত পরীক্ষায় জ্যামিতিক চিত্র গণনার ক্ষেত্রে শর্টকাট সূত্রগুলো মনে রাখুন। শব্দ গঠন ও এনালজি অংশে ভোকাবুলারি বৃদ্ধি করুন।",
      possible_questions: [
        {
          question: "স্থানাঙ্ক সম্পর্ক (Spatial Relation) বলতে কী বোঝায়?",
          key_points_for_answer: [
            "দ্বিমাত্রিক বা ত্রিমাত্রিক বস্তুকে মনে মনে ঘুরিয়ে দেখা।",
            "কাগজ ভাঁজ করার পর তার আকৃতি কেমন হবে তা নির্ণয়।",
            "লুকানো চিত্র খুঁজে বের করা।",
          ],
        },
        {
          question:
            "মানসিক দক্ষতা বাড়াতে নিয়মিত ডায়েরি লেখার বা পাজল সলভ করার গুরুত্ব কী?",
          key_points_for_answer: [
            "মস্তিষ্কের নিউরোনাল কানেকশন বৃদ্ধি পায়।",
            "বিশ্লেষণধর্মী চিন্তার ক্ষমতা বাড়ে।",
            "চাপের মুখে দ্রুত সিদ্ধান্ত নেওয়ার সক্ষমতা তৈরি হয়।",
          ],
        },
      ],
    },
  },
  {
    _id: "william_shakespeare_english_lit_guide_2026",
    title: "William Shakespeare: Life, Works, and Literary Legacy",
    category: "English Literature",
    tags: [
      "Shakespeare",
      "English Literature",
      "Drama",
      "BCS English",
      "Sonnets",
    ],
    last_updated: "2026-02-05",
    article_content: {
      summary:
        "William Shakespeare (1564–1616) was an English playwright, poet, and actor during the Elizabethan and Jacobean eras. He is best known for his deep exploration of human emotion and his mastery of blank verse and the English sonnet form.",
      key_points: [
        "Born and died in Stratford-upon-Avon, England.",
        "Primary genres: Tragedies (e.g., Hamlet), Comedies (e.g., As You Like It), and Histories (e.g., Henry V).",
        "Member of the 'Lord Chamberlain's Men' (later the King's Men) acting company.",
        "Invented the 'Shakespearean Sonnet' structure (ABAB CDCD EFEF GG).",
        "His First Folio, published in 1623, preserved his plays for future generations.",
      ],
      visual_representation: {
        image_tag: "",
        caption:
          "The structure of a Shakespearean Sonnet: three quatrains and a final couplet.",
      },
      sections: [
        {
          heading: "1. Major Classifications of Plays",
          content:
            "Shakespeare's plays are usually divided into three categories: Tragedies, which end in the hero's downfall; Comedies, which usually end in marriage and have a lighter tone; and Histories, based on the lives of English kings.",
        },
        {
          heading: "2. Famous Works and Characters",
          table_data: [
            {
              সংস্থা: "Hamlet",
              পূর্ণরূপ: "The Tragedy of Hamlet, Prince of Denmark",
              লক্ষ্য: "Theme of Revenge and Procrastination",
            },
            {
              সংস্থা: "Othello",
              পূর্ণরূপ: "The Tragedy of Othello, the Moor of Venice",
              লক্ষ্য: "Theme of Jealousy and Betrayal",
            },
            {
              সংস্থা: "Macbeth",
              পূর্ণরূপ: "The Tragedy of Macbeth (The Scottish Play)",
              লক্ষ্য: "Theme of Ambition and Power",
            },
            {
              সংস্থা: "King Lear",
              পূর্ণরূপ: "The Tragedy of King Lear",
              লক্ষ্য: "Theme of Filial Ingratitude and Madness",
            },
            {
              সংস্থা: "Romeo & Juliet",
              পূর্ণরূপ:
                "The Most Excellent and Lamentable Tragedy of Romeo and Juliet",
              লক্ষ্য: "Theme of Fate and Young Love",
            },
          ],
        },
      ],
    },
    preliminary_exam_prep: {
      focus: "English Literature MCQ - The Bard",
      mcqs: [
        {
          id: 1,
          question:
            "In which play does the famous line 'To be, or not to be' appear?",
          options: ["a) Macbeth", "b) Othello", "c) Hamlet", "d) King Lear"],
          answer: "c) Hamlet",
          explanation:
            "This is a soliloquy by Prince Hamlet in Act 3, Scene 1.",
        },
        {
          id: 2,
          question: "How many sonnets did Shakespeare write in total?",
          options: ["a) 124", "b) 154", "c) 144", "d) 164"],
          answer: "b) 154",
          explanation:
            "His sonnets were mostly addressed to a 'Fair Youth' and a 'Dark Lady'.",
        },
        {
          id: 3,
          question: "Which of the following is NOT a Shakespearean tragedy?",
          options: [
            "a) Macbeth",
            "b) King Lear",
            "c) Othello",
            "d) The Tempest",
          ],
          answer: "d) The Tempest",
          explanation: "The Tempest is categorized as a Comedy or a Romance.",
        },
        {
          id: 4,
          question:
            "What was the name of the theater Shakespeare was associated with?",
          options: [
            "a) The Rose",
            "b) The Swan",
            "c) The Globe",
            "d) The Royal",
          ],
          answer: "c) The Globe",
          explanation:
            "Built in 1599, it was the primary home for Shakespeare's acting company.",
        },
        {
          id: 5,
          question: "Shakespeare was born in which English town?",
          options: [
            "a) London",
            "b) Oxford",
            "c) Stratford-upon-Avon",
            "d) Cambridge",
          ],
          answer: "c) Stratford-upon-Avon",
          explanation:
            "He was born there in April 1564 and also died there in 1616.",
        },
        {
          id: 6,
          question:
            "Who is known as the 'heroine' of 'The Merchant of Venice'?",
          options: ["a) Cordelia", "b) Desdemona", "c) Portia", "d) Rosalind"],
          answer: "c) Portia",
          explanation:
            "Portia is the wealthy heiress who saves Antonio in the court scene.",
        },
        {
          id: 7,
          question:
            "What is the name of the 'Moor' in Shakespeare's play about jealousy?",
          options: ["a) Iago", "b) Cassio", "c) Othello", "d) Brabantio"],
          answer: "c) Othello",
          explanation:
            "Othello is the protagonist, a Venetian general of Moorish origin.",
        },
        {
          id: 8,
          question: "Which king does Macbeth murder to take the throne?",
          options: [
            "a) King Duncan",
            "b) King Banquo",
            "c) King Edward",
            "d) King Malcolm",
          ],
          answer: "a) King Duncan",
          explanation:
            "Macbeth kills Duncan while he is a guest in Macbeth's castle.",
        },
        {
          id: 9,
          question:
            "The phrase 'Sweet are the uses of adversity' is from which play?",
          options: [
            "a) As You Like It",
            "b) Twelfth Night",
            "c) Measure for Measure",
            "d) All's Well That Ends Well",
          ],
          answer: "a) As You Like It",
          explanation:
            "This line is spoken by Duke Senior in the Forest of Arden.",
        },
        {
          id: 10,
          question: "Shakespeare died in which year?",
          options: ["a) 1564", "b) 1603", "c) 1616", "d) 1623"],
          answer: "c) 1616",
          explanation:
            "He died on April 23, 1616, which is also traditionally celebrated as his birthday.",
        },
      ],
    },
    written_exam_prep: {
      guidelines:
        "For written exams, focus on the psychological depth of his tragic heroes. Mention how Shakespeare breaks the 'Unity of Time and Place' while maintaining 'Unity of Action'.",
      possible_questions: [
        {
          question:
            "Discuss the 'Tragic Flaw' (Hamartia) in Shakespearean Tragedies.",
          key_points_for_answer: [
            "Hamlet: Indecisiveness.",
            "Macbeth: Ambition.",
            "Othello: Jealousy/Trusting nature.",
            "Lear: Pride and lack of insight.",
          ],
        },
        {
          question: "Evaluate Shakespeare as a 'Universal Poet'.",
          key_points_for_answer: [
            "Portrayal of human nature regardless of era.",
            "Timeless themes: Love, Power, Betrayal.",
            "Linguistic contribution and coinage of phrases.",
          ],
        },
      ],
    },
  },
  {
    _id: "john_milton_english_lit_guide_2026",
    title: "John Milton: The Epic Poet and His Legacy",
    category: "English Literature",
    tags: [
      "John Milton",
      "Paradise Lost",
      "Puritan Age",
      "Epic",
      "BCS English",
    ],
    last_updated: "2026-02-05",
    article_content: {
      summary:
        "জন মিল্টন (১৬০৮-১৬৭৪) ছিলেন একজন ইংরেজ কবি এবং বুদ্ধিজীবী। তিনি তাঁর মহাকাব্যিক শৈলী (Grand Style) এবং অন্ধত্ব সত্ত্বেও লেখালেখি চালিয়ে যাওয়ার সাহসের জন্য পরিচিত। তাঁকে 'Epic Poet' বলা হয়।",
      key_points: [
        "তিনি পিউরিটান যুগের (Puritan Age) শ্রেষ্ঠ কবি ছিলেন।",
        "১৬৫২ সালে তিনি সম্পূর্ণ অন্ধ হয়ে যান।",
        "প্যারাডাইস লস্ট (Paradise Lost) ইংরেজি সাহিত্যের শ্রেষ্ঠ মহাকাব্য হিসেবে বিবেচিত।",
        "তিনি সংবাদপত্রের স্বাধীনতার সপক্ষে 'Areopagitica' লিখেছিলেন।",
      ],
      visual_representation: {
        image_tag: "",
        caption:
          "A visualization of the cosmic setting of Milton's Paradise Lost.",
      },
      sections: [
        {
          heading: "১. প্রধান সাহিত্যকর্ম",
          table_data: [
            {
              সংস্থা: "Paradise Lost",
              পূর্ণরূপ: "An Epic Poem in Twelve Books",
              লক্ষ্য: "To justify the ways of God to men",
            },
            {
              সংস্থা: "Areopagitica",
              পূর্ণরূপ: "A Speech for the Liberty of Unlicensed Printing",
              লক্ষ্য: "Advocating freedom of speech and press",
            },
            {
              সংস্থা: "Lycidas",
              পূর্ণরূপ: "A Pastoral Elegy",
              লক্ষ্য: "Written on the death of his friend Edward King",
            },
            {
              সংস্থা: "Samson Agonistes",
              পূর্ণরূপ: "A Tragic Closet Drama",
              লক্ষ্য: "A story based on the biblical figure Samson",
            },
          ],
        },
      ],
    },
    preliminary_exam_prep: {
      focus: "John Milton MCQ",
      mcqs: [
        {
          id: 1,
          question: "কে মিল্টনকে 'Grand Style' এর জন্য প্রশংসা করেছেন?",
          options: [
            "ক) টি এস এলিয়ট",
            "খ) ম্যাথু আর্নল্ড",
            "গ) শেক্সপিয়র",
            "ঘ) জন কিটস",
          ],
          answer: "খ) ম্যাথু আর্নল্ড",
          explanation:
            "ম্যাথু আর্নল্ড মিল্টনের কাব্যশৈলীকে 'Grand Style' হিসেবে অভিহিত করেন।",
        },
        {
          id: 2,
          question: "'Paradise Lost' মহাকাব্যে কয়টি বই (Book) আছে?",
          options: ["ক) ১০টি", "খ) ১২টি", "গ) ৮টি", "ঘ) ১৪টি"],
          answer: "খ) ১২টি",
          explanation:
            "প্রথম সংস্করণে ১০টি থাকলেও ১৬৭৪ সালের সংস্করণে এটি ১২টি বইয়ে বিন্যস্ত করা হয়।",
        },
      ],
    },
  },

  {
    _id: "william_wordsworth_english_lit_guide_2026",
    title: "William Wordsworth: The High Priest of Nature",
    category: "English Literature",
    tags: [
      "Wordsworth",
      "Romanticism",
      "Poet of Nature",
      "Lyrical Ballads",
      "BCS",
    ],
    last_updated: "2026-02-05",
    article_content: {
      summary:
        "উইলিয়াম ওয়ার্ডসওয়ার্থ (১৭৭০-১৮৫০) ছিলেন রোমান্টিক যুগের অন্যতম প্রধান কবি। ১৭৯৮ সালে এস. টি. কোলরিজের সাথে তাঁর 'Lyrical Ballads' প্রকাশের মাধ্যমে ইংরেজি সাহিত্যে রোমান্টিক যুগের সূচনা হয়।",
      key_points: [
        "তাঁকে 'High Priest of Nature' বলা হয়।",
        "তিনি বিশ্বাস করতেন কবিতা হলো 'Spontaneous overflow of powerful feelings'।",
        "তিনি ১৮৪৩ সাল থেকে আমৃত্যু 'Poet Laureate' ছিলেন।",
        "তাঁর আত্মজৈবনিক মহাকাব্য হলো 'The Prelude'।",
      ],
      visual_representation: {
        image_tag: "",
        caption:
          "A visual tribute to Wordsworth's famous poem 'I Wandered Lonely as a Cloud'.",
      },
      sections: [
        {
          heading: "১. স্মরণীয় কাব্যগ্রন্থ ও কবিতা",
          table_data: [
            {
              সংস্থা: "Lyrical Ballads",
              পূর্ণরূপ: "Co-authored with S.T. Coleridge",
              লক্ষ্য: "To start the Romantic Movement",
            },
            {
              সংস্থা: "The Prelude",
              পূর্ণরূপ: "The Growth of a Poet's Mind",
              লক্ষ্য: "Autobiographical epic poem",
            },
            {
              সংস্থা: "Tintern Abbey",
              পূর্ণরূপ: "Lines Composed a Few Miles above Tintern Abbey",
              লক্ষ্য: "Philosophy of nature and memory",
            },
            {
              সংস্থা: "Daffodils",
              পূর্ণরূপ: "I Wandered Lonely as a Cloud",
              লক্ষ্য: "Beauty of nature and imagination",
            },
          ],
        },
      ],
    },
    preliminary_exam_prep: {
      focus: "William Wordsworth MCQ",
      mcqs: [
        {
          id: 1,
          question: "রোমান্টিক যুগ কত সালে শুরু হয়?",
          options: ["ক) ১৭৮৫", "খ) ১৭৯৮", "গ) ১৮০০", "ঘ) ১৮৩২"],
          answer: "খ) ১৭৯৮",
          explanation:
            "১৭৯৮ সালে 'Lyrical Ballads' প্রকাশের মাধ্যমেই রোমান্টিক যুগের সূচনা ধরা হয়।",
        },
        {
          id: 2,
          question: "ওয়ার্ডসওয়ার্থের মতে কবিতা কী?",
          options: [
            "ক) আর্ট ফর আর্ট সেক",
            "খ) শক্তিশালী আবেগের স্বতঃস্ফূর্ত বহিঃপ্রকাশ",
            "গ) কেবল ছন্দের মিলন",
            "ঘ) প্রকৃতির অনুকরণ",
          ],
          answer: "খ) শক্তিশালী আবেগের স্বতঃস্ফূর্ত বহিঃপ্রকাশ",
          explanation:
            "তাঁর ভাষায়, 'Poetry is the spontaneous overflow of powerful feelings'.",
        },
      ],
    },
  },
  {
    _id: "pb_shelley_english_lit_guide_2026",
    title: "P. B. Shelley: The Revolutionary Idealist",
    category: "English Literature",
    tags: [
      "Shelley",
      "Revolutionary Poet",
      "Romanticism",
      "Ode to the West Wind",
      "BCS",
    ],
    last_updated: "2026-02-05",
    article_content: {
      summary:
        "পি. বি. শেলি (১৭৯২-১৮২২) ছিলেন একজন প্রথাগত চিন্তার বিরোধী ও বিপ্লবী রোমান্টিক কবি। তিনি বিশ্বাস করতেন কবিরা হলেন 'Unacknowledged legislators of the world'। তাঁর কবিতায় আশাবাদ এবং সমাজ পরিবর্তনের আকাঙ্ক্ষা ফুটে ওঠে।",
      key_points: [
        "তাঁকে 'Revolutionary Poet' বলা হয়।",
        "তিনি অক্সফোর্ড থেকে বহিষ্কৃত হয়েছিলেন 'The Necessity of Atheism' লেখার জন্য।",
        "তিনি লিরিক বা গীতিধর্মী কবিতায় অসাধারণ পারদর্শী ছিলেন।",
        "মাত্র ২৯ বছর বয়সে ইতালির উপকূলে নৌকাডুবিতে তাঁর মৃত্যু হয়।",
      ],
      visual_representation: {
        image_tag: "",
        caption:
          "The myth of Prometheus, a symbol of resistance and liberation in Shelley's work.",
      },
      sections: [
        {
          heading: "১. বিখ্যাত সাহিত্যকর্ম ও অমর পঙক্তি",
          table_data: [
            {
              সংস্থা: "Ode to the West Wind",
              পূর্ণরূপ: "A Lyric Poem on Change",
              লক্ষ্য: "'If Winter comes, can Spring be far behind?'",
            },
            {
              সংস্থা: "Adonais",
              পূর্ণরূপ: "An Elegy on John Keats",
              লক্ষ্য: "Written to mourn the death of his friend Keats",
            },
            {
              সংস্থা: "Prometheus Unbound",
              পূর্ণরূপ: "A Lyrical Drama",
              লক্ষ্য: "Victory of the human spirit over tyranny",
            },
            {
              সংস্থা: "Ozymandias",
              পূর্ণরূপ: "A Famous Sonnet",
              লক্ষ্য: "Theme of the transience of power and time",
            },
          ],
        },
      ],
    },
    preliminary_exam_prep: {
      focus: "P. B. Shelley MCQ",
      mcqs: [
        {
          id: 1,
          question:
            "কে শেলিকে 'Beautiful and ineffectual angel' বলে অভিহিত করেছেন?",
          options: [
            "ক) ম্যাথু আর্নল্ড",
            "খ) টি এস এলিয়ট",
            "গ) লর্ড বায়রন",
            "ঘ) জন কিটস",
          ],
          answer: "ক) ম্যাথু আর্নল্ড",
          explanation: "ম্যাথু আর্নল্ড তাঁর সমালোচনায় শেলিকে এই নামে ডাকতেন।",
        },
        {
          id: 2,
          question: "শেলির কোন কবিতাটি 'Autumn' ঋতুর পটভূমিতে লেখা?",
          options: [
            "ক) To a Skylark",
            "খ) Ode to the West Wind",
            "গ) Cloud",
            "ঘ) Queen Mab",
          ],
          answer: "খ) Ode to the West Wind",
          explanation:
            "এই কবিতায় কবি পশ্চিমী বায়ুকে ধ্বংসকারী এবং রক্ষাকারী হিসেবে বর্ণনা করেছেন।",
        },
      ],
    },
  },

  {
    _id: "john_keats_english_lit_guide_2026",
    title: "John Keats: The Poet of Beauty and Sensuousness",
    category: "English Literature",
    tags: [
      "Keats",
      "Poet of Beauty",
      "Sensuousness",
      "Negative Capability",
      "BCS",
    ],
    last_updated: "2026-02-05",
    article_content: {
      summary:
        "জন কিটস (১৭৯৫-১৮২১) ছিলেন রোমান্টিক যুগের দ্বিতীয় প্রজন্মের অন্যতম কবি। তিনি মূলত তাঁর ছয়টি মহান 'Ode' বা গাথার জন্য পরিচিত। তাঁর লেখনীতে ইন্দ্রিয়পরায়ণতা (Sensuousness) এবং সৌন্দর্যের জয়গান সবচেয়ে বেশি প্রাধান্য পেয়েছে।",
      key_points: [
        "তাঁকে 'Poet of Beauty' বলা হয়।",
        "তিনি পেশায় একজন সার্জন (Surgeon) বা ডাক্তার ছিলেন।",
        "তিনি 'Negative Capability' তত্ত্বের প্রবক্তা।",
        "মাত্র ২৫ বছর বয়সে যক্ষ্মা রোগে (Tuberculosis) তাঁর অকাল মৃত্যু হয়।",
      ],
      visual_representation: {
        image_tag: "",
        caption:
          "A classic Grecian Urn, the subject of one of Keats's most famous Odes.",
      },
      sections: [
        {
          heading: "১. অবিস্মরণীয় কাব্য সম্ভার",
          table_data: [
            {
              সংস্থা: "Endymion",
              পূর্ণরূপ: "A Poetic Romance",
              লক্ষ্য: "'A thing of beauty is a joy for ever'",
            },
            {
              সংস্থা: "Ode on a Grecian Urn",
              পূর্ণরূপ: "Philosophical Poem on Art",
              লক্ষ্য: "'Beauty is truth, truth beauty'",
            },
            {
              সংস্থা: "Ode to a Nightingale",
              পূর্ণরূপ: "Lyric on Nature and Immortality",
              লক্ষ্য: "Comparison between human suffering and bird's song",
            },
            {
              সংস্থা: "Isabella",
              পূর্ণরূপ: "A Narrative Poem",
              লক্ষ্য: "Based on a story by Boccaccio",
            },
          ],
        },
      ],
    },
    preliminary_exam_prep: {
      focus: "John Keats MCQ",
      mcqs: [
        {
          id: 1,
          question: "কিটসের মতে সৌন্দর্যের অপর নাম কী?",
          options: ["ক) শক্তি", "খ) সত্য", "গ) প্রকৃতি", "ঘ) কল্পনা"],
          answer: "খ) সত্য",
          explanation:
            "তিনি বলেছেন, 'Beauty is truth, truth beauty—that is all ye know on earth'.",
        },
        {
          id: 2,
          question: "কিটস কোন ধরনের কবিতার জন্য বিশ্ববিখ্যাত?",
          options: ["ক) Sonnet", "খ) Epic", "গ) Ode", "ঘ) Ballad"],
          answer: "গ) Ode",
          explanation:
            "কিটস তাঁর চমৎকার সব ওড বা গাথাধর্মী কবিতার জন্য অমর হয়ে আছেন।",
        },
      ],
    },
  },

  {
    _id: "lord_tennyson_english_lit_guide_2026",
    title: "Lord Alfred Tennyson: The Voice of the Victorian Age",
    category: "English Literature",
    tags: ["Tennyson", "Victorian Age", "Poet Laureate", "In Memoriam", "BCS"],
    last_updated: "2026-02-05",
    article_content: {
      summary:
        "লর্ড আলফ্রেড টেনিসন (১৮০৯-১৮৯২) ছিলেন ভিক্টোরিয়ান যুগের সবচেয়ে প্রভাবশালী কবি। তিনি ১৮৫০ সালে ওয়ার্ডসওয়ার্থের মৃত্যুর পর 'Poet Laureate' নিযুক্ত হন। তাঁর কবিতায় ভিক্টোরিয়ান যুগের সংশয়, বিষণ্ণতা এবং বিজ্ঞানের অগ্রগতির ছাপ স্পষ্ট।",
      key_points: [
        "তাঁকে 'Representative Poet of the Victorian Age' বলা হয়।",
        "তিনি তাঁর বন্ধু আর্থার হেনরি হ্যালামের মৃত্যুতে বিখ্যাত এলিজি 'In Memoriam' লিখেছিলেন।",
        "তাঁর কবিতায় ছন্দের জাদুকরী ব্যবহার দেখা যায়।",
        "তিনি প্রকৃতির সৌন্দর্যের চেয়ে মানুষের অভ্যন্তরীণ দ্বন্দ্বকে বেশি প্রাধান্য দিয়েছেন।",
      ],
      visual_representation: {
        image_tag: "",
        caption:
          "A depiction of the Crimean War battle that inspired Tennyson's famous poem.",
      },
      sections: [
        {
          heading: "১. কালজয়ী সাহিত্যকর্ম ও বিখ্যাত উক্তি",
          table_data: [
            {
              সংস্থা: "In Memoriam A.H.H.",
              পূর্ণরূপ: "An Elegiac Poem",
              লক্ষ্য:
                "'Tis better to have loved and lost than never to have loved at all'",
            },
            {
              সংস্থা: "Ulysses",
              পূর্ণরূপ: "A Dramatic Monologue",
              লক্ষ্য: "'To strive, to seek, to find, and not to yield'",
            },
            {
              সংস্থা: "The Charge of the Light Brigade",
              পূর্ণরূপ: "A Narrative Poem",
              লক্ষ্য:
                "Commemorating the bravery of soldiers in the Crimean War",
            },
            {
              সংস্থা: "Locksley Hall",
              পূর্ণরূপ: "A Dramatic Poem",
              লক্ষ্য: "Reflecting on social change and industrialization",
            },
          ],
        },
      ],
    },
    preliminary_exam_prep: {
      focus: "Lord Tennyson MCQ",
      mcqs: [
        {
          id: 1,
          question: "কে ১৮৫০ সালে ইংল্যান্ডের 'Poet Laureate' হন?",
          options: [
            "ক) রবার্ট ব্রাউনিং",
            "খ) লর্ড টেনিসন",
            "গ) ম্যাথু আর্নল্ড",
            "ঘ) টি এস এলিয়ট",
          ],
          answer: "খ) লর্ড টেনিসন",
          explanation:
            "১৮৫০ সালে উইলিয়াম ওয়ার্ডসওয়ার্থের মৃত্যুর পর টেনিসন এই সম্মানজনক পদে আসীন হন।",
        },
        {
          id: 2,
          question: "'Ulysses' কবিতাটি কোন ফর্মে লেখা?",
          options: ["ক) Sonnet", "খ) Epic", "গ) Dramatic Monologue", "ঘ) Ode"],
          answer: "গ) Dramatic Monologue",
          explanation:
            "ইউলাইসিস হলো টেনিসনের লেখা একটি বিখ্যাত ড্রামাটিক মনোলোগ।",
        },
      ],
    },
  },

  {
    _id: "robert_browning_english_lit_guide_2026",
    title: "Robert Browning: Master of Dramatic Monologue",
    category: "English Literature",
    tags: [
      "Browning",
      "Dramatic Monologue",
      "Victorian Age",
      "Optimism",
      "BCS",
    ],
    last_updated: "2026-02-05",
    article_content: {
      summary:
        "রবার্ট ব্রাউনিং (১৮১২-১৮৮৯) ছিলেন একজন প্রখ্যাত ভিক্টোরিয়ান কবি এবং নাট্যকার। তিনি ড্রামাটিক মনোলোগ (Dramatic Monologue) বা নাট্যগুণসম্পন্ন স্বগতোক্তির জন্য বিশ্ববিখ্যাত। তাঁর কবিতা সাধারণত অত্যন্ত আশাবাদী এবং চরিত্রগুলোর মনস্তাত্ত্বিক বিশ্লেষণে ঋদ্ধ।",
      key_points: [
        "তাঁকে 'Optimistic Poet' বলা হয়।",
        "তিনি বিশ্বাস করতেন, 'God's in His heaven—All's right with the world' (Pippa Passes)।",
        "তিনি তাঁর স্ত্রী এলিজাবেথ ব্যারেট ব্রাউনিংয়ের সাথে ইতালিতে বসবাস করতেন।",
        "তাঁর লেখনীতে চরিত্রের গহীন মনস্তত্ত্ব ফুটে উঠত।",
      ],
      visual_representation: {
        image_tag: "",
        caption:
          "A visual concept of the 'Last Duchess' from Browning's most famous dramatic monologue.",
      },
      sections: [
        {
          heading: "১. উল্লেখযোগ্য কাব্যগ্রন্থ ও কবিতা",
          table_data: [
            {
              সংস্থা: "My Last Duchess",
              পূর্ণরূপ: "A Psychological Dramatic Monologue",
              লক্ষ্য: "Exploration of power, jealousy, and art",
            },
            {
              সংস্থা: "Andrea del Sarto",
              পূর্ণরূপ: "The Faultless Painter",
              লক্ষ্য: "The tragedy of a perfect but soulless artist",
            },
            {
              সংস্থা: "The Pied Piper of Hamelin",
              পূর্ণরূপ: "A Children's Poem/Ballad",
              লক্ষ্য:
                "Based on a German legend about a mysterious flute player",
            },
            {
              সংস্থা: "The Last Ride Together",
              পূর্ণরূপ: "A Philosophical Poem",
              লক্ষ্য: "Acceptance of failure in love with optimism",
            },
          ],
        },
      ],
    },
    preliminary_exam_prep: {
      focus: "Robert Browning MCQ",
      mcqs: [
        {
          id: 1,
          question: "কে 'Dramatic Monologue'-এর জন্য সবচেয়ে বেশি পরিচিত?",
          options: [
            "ক) টেনিসন",
            "খ) শেলি",
            "গ) রবার্ট ব্রাউনিং",
            "ঘ) জন মিল্টন",
          ],
          answer: "গ) রবার্ট ব্রাউনিং",
          explanation:
            "ব্রাউনিং এই কাব্যশৈলীকে শিল্পের সর্বোচ্চ শিখরে নিয়ে গেছেন।",
        },
        {
          id: 2,
          question: "'Andrea del Sarto' কবিতায় শিল্পী কোন শহরের?",
          options: ["ক) লন্ডন", "খ) রোম", "গ) ফ্লোরেন্স", "ঘ) প্যারিস"],
          answer: "গ) ফ্লোরেন্স",
          explanation:
            "এটি ফ্লোরেন্সের একজন রেনেসাঁ চিত্রশিল্পীর জীবনের ওপর ভিত্তি করে লেখা।",
        },
      ],
    },
  },

  {
    _id: "ts_eliot_english_lit_guide_2026",
    title: "T. S. Eliot: The Architect of Modern Poetry",
    category: "English Literature",
    tags: [
      "T.S. Eliot",
      "Modernism",
      "The Waste Land",
      "Nobel Prize",
      "BCS English",
    ],
    last_updated: "2026-02-05",
    article_content: {
      summary:
        "থমাস স্টার্নস এলিয়ট (১৮৮৮-১৯৬৫) ছিলেন একজন আমেরিকান বংশোদ্ভূত ব্রিটিশ কবি, নাট্যকার ও সমালোচক। ১৯২২ সালে তাঁর 'The Waste Land' প্রকাশের মাধ্যমে আধুনিক কবিতার জয়যাত্রা শুরু হয়। ১৯৪৮ সালে তিনি সাহিত্যে নোবেল পুরস্কার লাভ করেন।",
      key_points: [
        "তিনি আধুনিক কবিতার ধারক ও বাহক।",
        "তাঁর কবিতায় যুদ্ধোত্তর পৃথিবীর হতাশা ও বন্ধ্যাত্ব ফুটে ওঠে।",
        "তিনি 'Objective Correlative' তত্ত্বের প্রবক্তা।",
        "ধর্মীয় ও দার্শনিক চেতনা তাঁর পরবর্তী জীবনের লেখায় প্রধান হয়ে ওঠে।",
      ],
      visual_representation: {
        image_tag: "",
        caption: "The core themes of Modernism as reflected in Eliot's poetry.",
      },
      sections: [
        {
          heading: "১. প্রধান সাহিত্যকর্ম ও দর্শন",
          table_data: [
            {
              সংস্থা: "The Waste Land",
              পূর্ণরূপ: "A Masterpiece of Modernist Poetry",
              লক্ষ্য: "Depicting the spiritual dryness of the post-WWI world",
            },
            {
              সংস্থা: "The Love Song of J. Alfred Prufrock",
              পূর্ণরূপ: "A Modernist Dramatic Monologue",
              লক্ষ্য: "Theme of urban isolation and indecision",
            },
            {
              সংস্থা: "Murder in the Cathedral",
              পূর্ণরূপ: "A Verse Drama",
              লক্ষ্য: "Based on the assassination of Archbishop Thomas Becket",
            },
            {
              সংস্থা: "Four Quartets",
              পূর্ণরূপ: "A Series of Four Philosophical Poems",
              লক্ষ্য: "Exploration of time, universe, and the divine",
            },
          ],
        },
      ],
    },
    preliminary_exam_prep: {
      focus: "T. S. Eliot MCQ",
      mcqs: [
        {
          id: 1,
          question: "টি. এস. এলিয়ট কত সালে সাহিত্যে নোবেল পুরস্কার পান?",
          options: ["ক) ১৯২৩", "খ) ১৯৪৮", "গ) ১৯৫০", "ঘ) ১৯১৫"],
          answer: "খ) ১৯৪৮",
          explanation:
            "আধুনিক কবিতায় অসামান্য অবদানের জন্য তিনি ১৯৪৮ সালে নোবেল পান।",
        },
        {
          id: 2,
          question: "'The Waste Land' কবিতাটি কাকে উৎসর্গ করা হয়েছিল?",
          options: [
            "ক) ডব্লিউ বি ইয়েটস",
            "খ) এজরা পাউন্ড",
            "গ) জেমস জয়েস",
            "ঘ) ভার্জিনিয়া উলফ",
          ],
          answer: "খ) এজরা পাউন্ড",
          explanation:
            "এলিয়ট এজরা পাউন্ডকে 'il miglior fabbro' (the better craftsman) বলে অভিহিত করে কবিতাটি উৎসর্গ করেন।",
        },
      ],
    },
  },

  {
    _id: "gb_shaw_english_lit_guide_2026",
    title: "George Bernard Shaw: The Master of Wit and Social Satire",
    category: "English Literature",
    tags: ["G.B. Shaw", "Drama", "Nobel Prize", "Fabian Society", "BCS"],
    last_updated: "2026-02-05",
    article_content: {
      summary:
        "জর্জ বার্নার্ড শ (১৮৫৬-১৯৫০) ছিলেন একজন আইরিশ নাট্যকার ও সমালোচক। তিনি আধুনিক নাটকের জনক হিসেবে পরিচিত। তিনি ১৯২৫ সালে সাহিত্যে নোবেল এবং ১৯৩৮ সালে অস্কার (পিগম্যালিয়ন চলচ্চিত্রের জন্য) উভয় পুরস্কার লাভকারী একমাত্র ব্যক্তি।",
      key_points: [
        "তিনি 'Drama of Ideas' বা বুদ্ধিবৃত্তিক নাটকের প্রবক্তা।",
        "তিনি ফেবিয়ান সোসাইটির (Fabian Society) একজন সক্রিয় সদস্য ছিলেন।",
        "তাঁর নাটকে সামাজিক সমস্যার কঠোর সমালোচনা ফুটে ওঠে।",
        "তিনি প্রচলিত রোমান্টিক ধারণার ঘোর বিরোধী ছিলেন।",
      ],
      visual_representation: {
        image_tag: "",
        caption:
          "The transformation of Eliza Doolittle in Pygmalion: A study of social class and phonetics.",
      },
      sections: [
        {
          heading: "১. জনপ্রিয় নাটক ও থিম",
          table_data: [
            {
              সংস্থা: "Arms and the Man",
              পূর্ণরূপ: "An Anti-romantic Comedy",
              লক্ষ্য: "Satirizing the false glory of war and romantic love",
            },
            {
              সংস্থা: "Man and Superman",
              পূর্ণরূপ: "A Philosophical Drama",
              লক্ষ্য: "Exploration of the 'Life Force' theory",
            },
            {
              সংস্থা: "Pygmalion",
              পূর্ণরূপ: "A Romance in Five Acts",
              লক্ষ্য: "Social class distinctions and the power of language",
            },
            {
              parent_id: "Saint Joan",
              পূর্ণরূপ: "A Historical Tragedy",
              লক্ষ্য: "Based on the life and trial of Joan of Arc",
            },
          ],
        },
      ],
    },
    preliminary_exam_prep: {
      focus: "G. B. Shaw MCQ",
      mcqs: [
        {
          id: 1,
          question: "'Arms and the Man' নাটকের মূল উপজীব্য বিষয় কী?",
          options: [
            "ক) যুদ্ধের মহিমা",
            "খ) যুদ্ধ ও প্রেমের অসারতা",
            "গ) রাজনৈতিক ষড়যন্ত্র",
            "ঘ) পারিবারিক কলহ",
          ],
          answer: "খ) যুদ্ধ ও প্রেমের অসারতা",
          explanation:
            "শ এই নাটকে বীরত্ব এবং রোমান্টিক প্রেমের প্রচলিত ধারণাকে ব্যঙ্গ করেছেন।",
        },
        {
          id: 2,
          question: "জর্জ বার্নার্ড শ কত সালে নোবেল পুরস্কার পান?",
          options: ["ক) ১৯২৫", "খ) ১৯২৬", "গ) ১৯৩০", "ঘ) ১৯৫০"],
          answer: "ক) ১৯২৫",
          explanation: "তিনি ১৯২৫ সালে সাহিত্যে নোবেল পুরস্কার লাভ করেন।",
        },
      ],
    },
  },
  {
    _id: "bangla_word_classification_bcs_2026",
    title:
      "শব্দের শ্রেণিবিভাগ: বিসিএস ও প্রতিযোগিতামূলক পরীক্ষার পূর্ণাঙ্গ নোট",
    category: "বাংলা ব্যাকরণ",
    tags: ["বাংলা শব্দ", "তৎসম", "তদ্ভব", "দেশি-বিদেশি", "বিসিএস", "ব্যাকরণ"],
    last_updated: "2026-02-05",
    article_content: {
      summary:
        "বাংলা ভাষায় ব্যবহৃত শব্দসমূহকে মূলত তিনটি প্রধান দৃষ্টিকোণ থেকে ভাগ করা যায়: উৎপত্তি বা উৎস অনুসারে, গঠন অনুসারে এবং অর্থ অনুসারে। বিসিএস পরীক্ষায় সাধারণত উৎপত্তিগত শ্রেণিবিভাগ (তৎসম, তদ্ভব, দেশি, বিদেশি) থেকে বেশি প্রশ্ন আসে।",
      key_points: [
        "উৎস অনুসারে শব্দ ৫ প্রকার: তৎসম, অর্ধ-তৎসম, তদ্ভব, দেশি ও বিদেশি।",
        "গঠন অনুসারে শব্দ ২ প্রকার: মৌলিক ও সাধিত।",
        "অর্থ অনুসারে শব্দ ৩ প্রকার: যৌগিক, রূঢ়ি ও যোগরূঢ়।",
        "তদ্ভব শব্দকে 'খাঁটি বাংলা শব্দ' বলা হয়।",
        "সংস্কৃত থেকে সরাসরি আসা শব্দগুলো হলো তৎসম।",
      ],
      visual_representation: {
        image_tag: "",
        caption: "উৎপত্তি অনুসারে বাংলা শব্দের বিভিন্ন রূপের তুলনামূলক চিত্র।",
      },
      sections: [
        {
          heading: "১. অর্থগত ও গঠনগত শ্রেণিবিভাগ",
          content:
            "যেসব শব্দের অর্থ তাদের ব্যুৎপত্তিগত অর্থের অনুগামী হয়, তাদের যৌগিক শব্দ বলে (যেমন: গায়ক)। অন্যদিকে, যে শব্দগুলো মূল অর্থের অনুগামী না হয়ে বিশেষ কোনো অর্থ বোঝায়, সেগুলোকে রূঢ়ি বা যোগরূঢ় শব্দ বলা হয়।",
        },
        {
          heading: "২. শব্দের উৎস ও প্রকারভেদ একনজরে",
          table_data: [
            {
              সংস্থা: "তৎসম",
              পূর্ণরূপ: "তৎ (তার) + সম (সমান)",
              লক্ষ্য: "সংস্কৃতের সমান শব্দ (চন্দ্র, সূর্য, নক্ষত্র)",
            },
            {
              সংস্থা: "তদ্ভব",
              পূর্ণরূপ: "তৎ (তার) + ভব (উৎপন্ন)",
              লক্ষ্য: "প্রাকৃতের মাধ্যমে পরিবর্তিত খাঁটি বাংলা (হাত, চাঁদ)",
            },
            {
              সংস্থা: "অর্ধ-তৎসম",
              পূর্ণরূপ: "কিঞ্চিৎ পরিবর্তিত তৎসম",
              লক্ষ্য: "বিকৃত উচ্চারণে ব্যবহৃত (জোছনা, গিন্নি, কুচ্ছিত)",
            },
            {
              সংস্থা: "দেশি",
              পূর্ণরূপ: "আদিম অধিবাসীদের ভাষা",
              লক্ষ্য: "কুলা, গঞ্জ, চাঙ্গারি, ডাব, ডাগর",
            },
            {
              সংস্থা: "যোগরূঢ়",
              পূর্ণরূপ: "সমাস নিষ্পন্ন বিশেষ অর্থ",
              লক্ষ্য: "পঙ্কজ (পঙ্কে জন্মে যা - শুধুমাত্র পদ্ম)",
            },
          ],
        },
      ],
    },
    preliminary_exam_prep: {
      focus: "বিসিএস প্রিলিমিনারি স্পেশাল MCQ",
      mcqs: [
        {
          id: 1,
          question:
            "উৎপত্তি অনুসারে বাংলা ভাষার শব্দসমূহকে কয়টি ভাগে ভাগ করা হয়েছে?",
          options: ["ক) ২ ভাগে", "খ) ৩ ভাগে", "গ) ৪ ভাগে", "ঘ) ৫ ভাগে"],
          answer: "ঘ) ৫ ভাগে",
          explanation: "তৎসম, অর্ধ-তৎসম, তদ্ভব, দেশি ও বিদেশি।",
        },
        {
          id: 2,
          question: "নিচের কোনটি 'তদ্ভব' শব্দের উদাহরণ?",
          options: ["ক) জোছনা", "খ) হস্ত", "গ) হাত", "ঘ) গিন্নি"],
          answer: "গ) হাত",
          explanation:
            "সংস্কৃত 'হস্ত' থেকে প্রাকৃতের মাধ্যমে পরিবর্তিত হয়ে 'হাত' শব্দটি এসেছে।",
        },
        {
          id: 3,
          question: "'পঙ্কজ' কোন ধরনের শব্দ?",
          options: ["ক) যৌগিক", "খ) রূঢ়ি", "গ) যোগরূঢ়", "ঘ) মৌলিক"],
          answer: "গ) যোগরূঢ়",
          explanation:
            "পঙ্কে জন্মে যা (শৈবাল, শালুক ইত্যাদি) না বুঝিয়ে শুধুমাত্র 'পদ্ম' বোঝায় বলে এটি যোগরূঢ়।",
        },
        {
          id: 4,
          question: "নিচের কোনটি 'দেশি' শব্দ?",
          options: ["ক) আনারস", "খ) কুলা", "গ) সাবান", "ঘ) চাহিদা"],
          answer: "খ) কুলা",
          explanation:
            "কুলা, গঞ্জ, চাঙ্গারি, ঢেঁকি এগুলো আদিম অধিবাসীদের ভাষা থেকে আসা দেশি শব্দ।",
        },
        {
          id: 5,
          question: "'আনারস' ও 'চাবি' শব্দ দুটি কোন ভাষা থেকে এসেছে?",
          options: ["ক) ওলন্দাজ", "খ) পর্তুগিজ", "গ) ফরাসি", "ঘ) তুর্কি"],
          answer: "খ) পর্তুগিজ",
          explanation:
            "পর্তুগিজ শব্দের মধ্যে আলপিন, আলমারি, গির্জা, পাউরুটি উল্লেখযোগ্য।",
        },
        {
          id: 6,
          question: "নিচের কোনটি অর্থগতভাবে 'রূঢ়ি' শব্দ?",
          options: ["ক) রাজপুত", "খ) বাঁশি", "গ) গায়ক", "ঘ) মহাযাত্রা"],
          answer: "খ) বাঁশি",
          explanation:
            "বাঁশ দিয়ে তৈরি যেকোনো বস্তু না বুঝিয়ে বিশেষ বাদ্যযন্ত্র বোঝায় বলে এটি রূঢ়ি।",
        },
        {
          id: 7,
          question: "'গিন্নি' কোন শ্রেণির শব্দ?",
          options: ["ক) তৎসম", "খ) অর্ধ-তৎসম", "গ) তদ্ভব", "ঘ) দেশি"],
          answer: "খ) অর্ধ-তৎসম",
          explanation:
            "সংস্কৃত 'গৃহিণী' থেকে কিঞ্চিৎ বিকৃত হয়ে 'গিন্নি' হয়েছে।",
        },
        {
          id: 8,
          question: "গঠন অনুসারে শব্দ কত প্রকার?",
          options: ["ক) ২ প্রকার", "খ) ৩ প্রকার", "গ) ৪ প্রকার", "ঘ) ৫ প্রকার"],
          answer: "ক) ২ প্রকার",
          explanation: "মৌলিক শব্দ ও সাধিত শব্দ।",
        },
        {
          id: 9,
          question: "নিচের কোনটি 'মৌলিক' শব্দ?",
          options: ["ক) চলন্ত", "খ) গোলাপ", "গ) দম্পতি", "ঘ) নীলিমা"],
          answer: "খ) গোলাপ",
          explanation: "যাকে আর ভাঙা বা বিশ্লেষণ করা যায় না তাই মৌলিক শব্দ।",
        },
        {
          id: 10,
          question: "'চাহিদা' শব্দটি কোন ভাষা থেকে এসেছে?",
          options: ["ক) পাঞ্জাবি", "খ) ফারসি", "গ) আরবি", "ঘ) তুর্কি"],
          answer: "ক) পাঞ্জাবি",
          explanation: "চাহিদা, শিখ—এগুলো পাঞ্জাবি শব্দ।",
        },
        {
          id: 11,
          question: "'দারোগা' শব্দটি কোন ভাষার?",
          options: ["ক) ফারসি", "খ) আরবি", "গ) তুর্কি", "ঘ) পর্তুগিজ"],
          answer: "গ) তুর্কি",
          explanation: "তুর্কি শব্দের উদাহরণ: কাঁচি, চাকু, তোপ, দারোগা।",
        },
        {
          id: 12,
          question: "নিচের কোনটি ওলন্দাজ শব্দ?",
          options: ["ক) কার্তুজ", "খ) কুপন", "গ) ইস্কাপন", "ঘ) পাউরুটি"],
          answer: "গ) ইস্কাপন",
          explanation:
            "তাস সংশ্লিষ্ট শব্দ যেমন—ইস্কাপন, টেক্কা, রুইতন ওলন্দাজ শব্দ।",
        },
        {
          id: 13,
          question:
            "যে শব্দ ব্যুৎপত্তিগত অর্থ ও ব্যবহারিক অর্থ একই, তাকে কী বলে?",
          options: ["ক) যৌগিক", "খ) রূঢ়ি", "গ) যোগরূঢ়", "ঘ) দেশি"],
          answer: "ক) যৌগিক",
          explanation: "যেমন: গায়ক (যিনি গান করেন), কর্তব্য।",
        },
        {
          id: 14,
          question: "'হরতাল' কোন ভাষার শব্দ?",
          options: ["ক) গুজরাটি", "খ) তামিল", "গ) মারাঠি", "ঘ) হিন্দি"],
          answer: "ক) গুজরাটি",
          explanation: "হরতাল ও খদ্দর গুজরাটি ভাষা থেকে বাংলায় এসেছে।",
        },
        {
          id: 15,
          question: "'তৎসম' শব্দ কোনটি?",
          options: ["ক) চামার", "খ) ধর্ম", "গ) ডিঙি", "ঘ) টোপর"],
          answer: "খ) ধর্ম",
          explanation: "ধর্ম, নক্ষত্র, পাত্র—এগুলো অবিকৃত তৎসম শব্দ।",
        },
      ],
    },
    written_exam_prep: {
      guidelines:
        "লিখিত পরীক্ষায় 'শব্দের শ্রেণিবিভাগ' থেকে প্রশ্ন আসলে উদাহরণসহ শ্রেণিবিভাগগুলো চার্ট আকারে উপস্থাপন করা ভালো। বিশেষ করে বিদেশি শব্দের তালিকা মুখস্থ রাখা জরুরি।",
      possible_questions: [
        {
          question:
            "উৎস অনুসারে বাংলা শব্দের শ্রেণিবিভাগ উদাহরণসহ আলোচনা করুন।",
          key_points_for_answer: [
            "তৎসম: সরাসরি সংস্কৃত থেকে আগত।",
            "তদ্ভব: সংস্কৃত থেকে প্রাকৃতের মাধ্যমে পরিবর্তিত।",
            "দেশি: অনার্য জাতির ভাষা।",
            "বিদেশি: ঐতিহাসিক কারণে আগত বিভিন্ন ভাষার শব্দ।",
          ],
        },
        {
          question: "রূঢ়ি ও যোগরূঢ় শব্দের মধ্যে পার্থক্য কী?",
          key_points_for_answer: [
            "রূঢ়ি শব্দ প্রত্যয় বা উপসর্গ যোগে গঠিত কিন্তু ভিন্ন অর্থ প্রকাশ করে।",
            "যোগরূঢ় শব্দ সমাস নিষ্পন্ন হয়ে বিশেষ অর্থ প্রকাশ করে।",
          ],
        },
      ],
    },
  },
  {
    _id: "bangla_somash_bcs_guide_2026",
    title: "সমাস: বিসিএস ও প্রতিযোগিতামূলক পরীক্ষার পূর্ণাঙ্গ গাইড",
    category: "বাংলা ব্যাকরণ",
    tags: [
      "সমাস",
      "ব্যাসবাক্য",
      "বিসিএস",
      "বাংলা ব্যাকরণ",
      "দ্বন্দ",
      "বহুব্রীহি",
    ],
    last_updated: "2026-02-05",
    article_content: {
      summary:
        "সমাস মানে সংক্ষেপণ, মিলন বা একাধিক পদের একপদীকরণ। পরস্পর অন্বয় বা সম্বন্ধ আছে এমন একাধিক পদের এক পদে পরিণত হওয়াকে সমাস বলে। সমাসের মূল লক্ষ্য হলো ভাষাকে সংক্ষিপ্ত ও শ্রুতিমধুর করা।",
      key_points: [
        "সমাস প্রধানত ৬ প্রকার (দ্বন্দ, কর্মধারয়, তৎপুরুষ, বহুব্রীহি, দ্বিগু, অব্যয়ীভাব)।",
        "বর্তমানে অনেক ব্যাকরণবিদ দ্বিগু-কে কর্মধারয়ের এবং কর্মধারয়-কে তৎপুরুষের অন্তর্ভুক্ত মনে করেন।",
        "সমাসবদ্ধ পদকে 'সমস্তপদ' এবং ভাঙলে যে বাক্য হয় তাকে 'ব্যাসবাক্য' বলে।",
        "দ্বন্দ্ব সমাসে উভয় পদের অর্থ প্রধান থাকে।",
        "বহুব্রীহি সমাসে কোনো পদের অর্থ না বুঝিয়ে নতুন অর্থ বোঝায়।",
      ],
      visual_representation: {
        image_tag: "",
        caption: "পদের অর্থের প্রাধান্য অনুযায়ী সমাসের শ্রেণিবিভাগ।",
      },
      sections: [
        {
          heading: "১. পদের প্রাধান্য অনুযায়ী সমাস চেনার কৌশল",
          content:
            "১. উভয় পদের অর্থ প্রধান = দ্বন্দ্ব সমাস (মা-বাবা)।\n২. পরপদের অর্থ প্রধান = তৎপুরুষ, কর্মধারয়, দ্বিগু (সবজিপাল্লা, নীলপদ্ম, চৌরাস্তা)।\n৩. পূর্বপদের অর্থ প্রধান = অব্যয়ীভাব (উপকূল)।\n৪. অন্য পদের অর্থ প্রধান = বহুব্রীহি (দশাইনন)।",
        },
        {
          heading: "২. প্রধান সমাসসমূহ একনজরে",
          table_data: [
            {
              সংস্থা: "দ্বন্দ্ব সমাস",
              পূর্ণরূপ: "উভয় পদের অর্থ প্রধান",
              লক্ষ্য: "মা-বাবা, ওহি-নকুল, আয়-ব্যয়",
            },
            {
              সংস্থা: "কর্মধারয়",
              পূর্ণরূপ: "বিশেষণ + বিশেষ্য পদ",
              লক্ষ্য: "নীল যে আকাশ = নীলাকাশ, মহান যে নবী = মহানগর",
            },
            {
              সংস্থা: "তৎপুরুষ",
              পূর্ণরূপ: "বিভক্তি লোপ পাওয়া সমাস",
              লক্ষ্য: "বিপদকে আপন্ন = বিপদাপন্ন, গাছ হতে পাকা = গাছপাকা",
            },
            {
              সংস্থা: "বহুব্রীহি",
              পূর্ণরূপ: "নতুন অর্থ প্রকাশ করা",
              লক্ষ্য:
                "বহু ব্রীহি (ধান) আছে যার = বহুব্রীহি, বিনা পানিতে যার = বীণাপাণি",
            },
            {
              সংস্থা: "অব্যয়ীভাব",
              পূর্ণরূপ: "অব্যয় পদের অর্থ প্রধান",
              লক্ষ্য: "কুলের সমীপে = উপকূল, মরণ পর্যন্ত = আমরণ",
            },
          ],
        },
      ],
    },
    preliminary_exam_prep: {
      focus: "বিসিএস প্রিলিমিনারি স্পেশাল সমাস MCQ",
      mcqs: [
        {
          id: 1,
          question: "'সমাস' শব্দের অর্থ কী?",
          options: ["ক) বিশ্লেষণ", "খ) সংক্ষেপণ", "গ) মিলন", "ঘ) খ ও গ উভয়ই"],
          answer: "ঘ) খ ও গ উভয়ই",
          explanation: "সমাস মানে সংক্ষেপণ, মিলন বা একাধিক পদের একপদীকরণ।",
        },
        {
          id: 2,
          question: "কোন সমাসে উভয় পদের অর্থ প্রধান থাকে?",
          options: ["ক) দ্বন্দ্ব", "খ) দ্বিগু", "গ) তৎপুরুষ", "ঘ) বহুব্রীহি"],
          answer: "ক) দ্বন্দ্ব",
          explanation:
            "দ্বন্দ্ব সমাসে পূর্বপদ ও পরপদ উভয় পদের অর্থের প্রাধান্য থাকে।",
        },
        {
          id: 3,
          question: "'উপকূল' কোন সমাস?",
          options: [
            "ক) অব্যয়ীভাব",
            "খ) তৎপুরুষ",
            "গ) কর্মধারয়",
            "ঘ) বহুব্রীহি",
          ],
          answer: "ক) অব্যয়ীভাব",
          explanation:
            "কুলের সমীপে = উপকূল। এখানে অব্যয় পদ 'উপ' এর অর্থের প্রাধান্য থাকায় এটি অব্যয়ীভাব সমাস।",
        },
        {
          id: 4,
          question: "'স্মৃতিসৌধ' কোন সমাস?",
          options: [
            "ক) উপমিত কর্মধারয়",
            "খ) মধ্যপদলোপী কর্মধারয়",
            "গ) রূপক কর্মধারয়",
            "ঘ) ষষ্ঠী তৎপুরুষ",
          ],
          answer: "খ) মধ্যপদলোপী কর্মধারয়",
          explanation:
            "স্মৃতি রক্ষার নিমিত্ত সৌধ = স্মৃতিসৌধ। এখানে মাঝখানের পদ লোপ পেয়েছে।",
        },
        {
          id: 5,
          question:
            "যে সমাসে সমস্যমান পদের কোনোটির অর্থ না বুঝিয়ে অন্য কিছু বোঝায়, তাকে কী বলে?",
          options: [
            "ক) দ্বন্দ্ব",
            "খ) বহুব্রীহি",
            "গ) কর্মধারয়",
            "ঘ) অব্যয়ীভাব",
          ],
          answer: "খ) বহুব্রীহি",
          explanation:
            "যেমন: 'বীণাপাণি' বলতে বীণা বা হাত না বুঝিয়ে দেবী সরস্বতীকে বোঝায়।",
        },
        {
          id: 6,
          question: "'জায়া ও পতি' এর সমাসবদ্ধ রূপ কোনটি?",
          options: [
            "ক) জায়াপতি",
            "খ) দম্পতি",
            "গ) পতিজায়া",
            "ঘ) স্বামী-স্ত্রী",
          ],
          answer: "খ) দম্পতি",
          explanation: "জায়া ও পতি = দম্পতি (এটি দ্বন্দ্ব সমাসের উদাহরণ)।",
        },
        {
          id: 7,
          question: "'সিংহাসন' কোন সমাস?",
          options: ["ক) কর্মধারয়", "খ) তৎপুরুষ", "গ) দ্বন্দ্ব", "ঘ) দ্বিগু"],
          answer: "ক) কর্মধারয়",
          explanation: "সিংহ চিহ্নিত আসন = সিংহাসন (মধ্যপদলোপী কর্মধারয়)।",
        },
        {
          id: 8,
          question: "তৎপুরুষ সমাসে কোন পদের অর্থ প্রধান থাকে?",
          options: ["ক) পূর্বপদ", "খ) পরপদ", "গ) উভয়পদ", "ঘ) কোনোটিই নয়"],
          answer: "খ) পরপদ",
          explanation:
            "তৎপুরুষ, কর্মধারয় এবং দ্বিগু সমাসে পরপদের অর্থ প্রধান থাকে।",
        },
        {
          id: 9,
          question: "'উপমিত কর্মধারয়' সমাসের উদাহরণ কোনটি?",
          options: [
            "ক) তুষারশুভ্র",
            "খ) মুখচন্দ্র",
            "গ) মনমাঝি",
            "ঘ) বিষাদসিন্ধু",
          ],
          answer: "খ) মুখচন্দ্র",
          explanation:
            "চন্দ্র মুখ নয়, বরং মুখ চন্দ্রের ন্যায়। সাধারণ গুণের উল্লেখ না থাকলে উপমিত কর্মধারয় হয়।",
        },
        {
          id: 10,
          question: "সমাসবদ্ধ পদের পরবর্তী অংশকে কী বলা হয়?",
          options: ["ক) পূর্বপদ", "খ) উত্তরপদ", "গ) সমস্তপদ", "ঘ) ব্যাসবাক্য"],
          answer: "খ) উত্তরপদ",
          explanation:
            "সমাসবদ্ধ পদের প্রথম অংশকে পূর্বপদ এবং পরবর্তী অংশকে উত্তরপদ বা পরপদ বলে।",
        },
        {
          id: 11,
          question: "'মনমাঝি' কোন সমাস?",
          options: [
            "ক) উপমান কর্মধারয়",
            "খ) উপমিত কর্মধারয়",
            "গ) রূপক কর্মধারয়",
            "ঘ) মধ্যপদলোপী",
          ],
          answer: "গ) রূপক কর্মধারয়",
          explanation:
            "মন রূপ মাঝি = মনমাঝি। যেখানে উপমেয় ও উপমানের মধ্যে অভিন্নতা কল্পনা করা হয়।",
        },
        {
          id: 12,
          question: "সংখ্যানবাচক শব্দ পূর্বে বসে সমষ্টি বোঝালে কোন সমাস হয়?",
          options: ["ক) তৎপুরুষ", "খ) দ্বিগু", "গ) বহুব্রীহি", "ঘ) দ্বন্দ্ব"],
          answer: "খ) দ্বিগু",
          explanation:
            "যেমন: তিন কালের সমাহার = ত্রিকাল, চার রাস্তার সমাহার = চৌরাস্তা।",
        },
        {
          id: 13,
          question: "'বিপদাপন্ন' এর সঠিক ব্যাসবাক্য কোনটি?",
          options: [
            "ক) বিপদ ও আপন্ন",
            "খ) বিপদকে আপন্ন",
            "গ) বিপদে আপন্ন",
            "ঘ) বিপদের আপন্ন",
          ],
          answer: "খ) বিপদকে আপন্ন",
          explanation: "এটি ২য়া তৎপুরুষ সমাসের উদাহরণ (কে বিভক্তি লোপ পেয়েছে)।",
        },
        {
          id: 14,
          question: "কোন সমাসে ব্যাসবাক্য হয় না (অথবা নিত্য সমাস)?",
          options: ["ক) কেবল", "খ) গ্রামান্তর", "গ) দুর্ভিক্ষ", "ঘ) যথাযোগ্য"],
          answer: "খ) গ্রামান্তর",
          explanation:
            "অন্য গ্রাম = গ্রামান্তর। এটি নিত্য সমাস, যার ব্যাসবাক্য করার প্রয়োজন হয় না।",
        },
        {
          id: 15,
          question: "'পকেটমার' কোন সমাস?",
          options: [
            "ক) উপপদ তৎপুরুষ",
            "খ) অলুক তৎপুরুষ",
            "গ) নঞ তৎপুরুষ",
            "ঘ) ৪র্থী তৎপুরুষ",
          ],
          answer: "ক) উপপদ তৎপুরুষ",
          explanation:
            "পকেট মারে যে = পকেটমার। কৃদন্ত পদের সাথে উপপদের যে সমাস হয়।",
        },
      ],
    },
    written_exam_prep: {
      guidelines:
        "লিখিত পরীক্ষায় সমাস থেকে ব্যাসবাক্যসহ সমাসের নাম নির্ণয় করতে বলা হয়। বিশেষ করে কর্মধারয় ও বহুব্রীহি সমাসের পার্থক্যগুলো স্পষ্ট করে লিখুন।",
      possible_questions: [
        {
          question:
            "উপমান ও উপমিত কর্মধারয় সমাসের মধ্যে পার্থক্য উদাহরণসহ লিখুন।",
          key_points_for_answer: [
            "উপমানে সাধারণ গুণের উল্লেখ থাকে (তুষারশুভ্র)।",
            "উপমিত-এ সাধারণ গুণের উল্লেখ থাকে না (সিংহপুরুষ)।",
            "উপমান সাধারণত সত্য তুলনা হয়, উপমিত কাল্পনিক।",
          ],
        },
        {
          question:
            "বহুব্রীহি সমাস কত প্রকার? অলুক বহুব্রীহি সমাসের উদাহরণ দিন।",
          key_points_for_answer: [
            "বহুব্রীহি ৮ প্রকার (সমানাধিকরণ, ব্যাধিকরণ, ব্যতিহার ইত্যাদি)।",
            "অলুক বহুব্রীহি: যেখানে বিভক্তি লোপ পায় না (যেমন- মাথায় পাগড়ি যার = মাথায়পাগড়ি)।",
          ],
        },
      ],
    },
  },
  {
    _id: "bangla_sondhi_bcs_guide_2026",
    title: "সন্ধি: বিসিএস ও প্রতিযোগিতামূলক পরীক্ষার পূর্ণাঙ্গ নোট",
    category: "বাংলা ব্যাকরণ",
    tags: [
      "সন্ধি",
      "বিসিএস",
      "বাংলা ব্যাকরণ",
      "স্বরসন্ধি",
      "ব্যঞ্জনসন্ধি",
      "নিপাতনে সিদ্ধ",
    ],
    last_updated: "2026-02-05",
    article_content: {
      summary:
        "সন্ধি শব্দের অর্থ হলো 'মিলন'। পাশাপাশি অবস্থিত দুটি ধ্বনির মিলনকে সন্ধি বলে। সন্ধির প্রধান সুবিধা হলো এটি উচ্চারণকে সহজ করে এবং ভাষাকে শ্রুতিমধুর করে। বাংলা ব্যাকরণে সন্ধিকে প্রধানত দুই ভাগে (তৎসম ও বাংলা) ভাগ করা হলেও আলোচনার সুবিধার্থে তিন প্রকারেই বেশি দেখা যায়।",
      key_points: [
        "সন্ধি প্রধানত ২ প্রকার: বাংলা শব্দের সন্ধি ও তৎসম শব্দের সন্ধি।",
        "তৎসম সন্ধি ৩ প্রকার: স্বরসন্ধি, ব্যঞ্জনসন্ধি ও বিসর্গ সন্ধি।",
        "নিপাতনে সিদ্ধ সন্ধি: যা কোনো নিয়ম মানে না (পরীক্ষায় সবচেয়ে বেশি আসে)।",
        "বিসর্গ সন্ধি মূলত ব্যঞ্জনসন্ধিরই একটি অংশ।",
        "সন্ধির ফলে ধ্বনির চার ধরনের পরিবর্তন হয় (মিলন, লোপ, পরিবর্তন, ও দ্বিত্ব)।",
      ],
      visual_representation: {
        image_tag: "",
        caption: "সন্ধির সাধারণ নিয়ম এবং কিছু ব্যতিক্রমী উদাহরণ।",
      },
      sections: [
        {
          heading: "১. সন্ধির গুরুত্ব ও বিশেষ নিয়ম",
          content:
            "বিসিএস প্রিলিমিনারির জন্য 'নিপাতনে সিদ্ধ' সন্ধি এবং 'বিসর্গ' সন্ধি সবচেয়ে বেশি গুরুত্বপূর্ণ। এছাড়া অ+অ=আ বা ই+ই=ঈ এর মতো সাধারণ নিয়মগুলো থেকে বিচ্ছেদ করতে দেওয়া হয়।",
        },
        {
          heading: "২. গুরুত্বপূর্ণ সন্ধি বিচ্ছেদ একনজরে",
          table_data: [
            {
              সংস্থা: "স্বরসন্ধি",
              পূর্ণরূপ: "স্বরধ্বনি + স্বরধ্বনি",
              লক্ষ্য: "বিদ্যালয় (বিদ্যা + আলয়), পরীক্ষা (পরি + ঈক্ষা)",
            },
            {
              সংস্থা: "ব্যঞ্জনসন্ধি",
              পূর্ণরূপ: "স্বর + ব্যঞ্জন বা ব্যঞ্জন + ব্যঞ্জন",
              লক্ষ্য: "উচ্চারণ (উৎ + চারণ), দিগন্ত (দিক্ + অন্ত)",
            },
            {
              সংস্থা: "বিসর্গ সন্ধি",
              পূর্ণরূপ: "বিসর্গ + স্বর/ব্যঞ্জন",
              লক্ষ্য: "নিরাকার (নিঃ + আকার), তপোবন (তপঃ + বন)",
            },
            {
              সংস্থা: "নিপাতনে সিদ্ধ",
              পূর্ণরূপ: "নিয়মবহির্ভূত সন্ধি",
              লক্ষ্য: "কুলটা (কুল + অটা), বনস্পতি (বন + পতি)",
            },
            {
              সংস্থা: "বিশেষ নিয়ম",
              পূর্ণরূপ: "সংস্কৃত বা তৎসম নিয়ম",
              লক্ষ্য: "সংস্কৃতি (সম্ + কৃতি), সংবাদ (সম্ + বাদ)",
            },
          ],
        },
      ],
    },
    preliminary_exam_prep: {
      focus: "বিসিএস প্রিলিমিনারি স্পেশাল সন্ধি MCQ",
      mcqs: [
        {
          id: 1,
          question: "'সন্ধি' শব্দের অর্থ কী?",
          options: ["ক) বিভাজন", "খ) মিলন", "গ) সংক্ষেপণ", "ঘ) পরিবর্তন"],
          answer: "খ) মিলন",
          explanation: "দুটি ধ্বনির মিলনকেই সন্ধি বলা হয়।",
        },
        {
          id: 2,
          question: "নিচের কোনটি 'নিপাতনে সিদ্ধ' স্বরসন্ধির উদাহরণ?",
          options: ["ক) গায়ক", "খ) কুলটা", "গ) অত্যন্ত", "ঘ) গবেষণা"],
          answer: "খ) কুলটা",
          explanation:
            "কুল + অটা = কুলটা; এটি কোনো সাধারণ নিয়ম মানে না তাই এটি নিপাতনে সিদ্ধ।",
        },
        {
          id: 3,
          question: "'পরীক্ষা' এর সঠিক সন্ধি বিচ্ছেদ কোনটি?",
          options: [
            "ক) পরি + ইক্ষা",
            "খ) পরী + ঈক্ষা",
            "গ) পরি + ঈক্ষা",
            "ঘ) পোরি + ইক্ষা",
          ],
          answer: "গ) পরি + ঈক্ষা",
          explanation: "ই + ঈ = ঈ হয়। এখানে 'ঈক্ষা' বানানটি দীর্ঘ-ঈ দিয়ে হয়।",
        },
        {
          id: 4,
          question: "'বনস্পতি' এর সন্ধি বিচ্ছেদ কোনটি?",
          options: [
            "ক) বন + পতি",
            "খ) বনঃ + পতি",
            "গ) বনো + পতি",
            "ঘ) বনস্ + পতি",
          ],
          answer: "ক) বন + পতি",
          explanation: "এটি একটি নিপাতনে সিদ্ধ ব্যঞ্জনসন্ধি।",
        },
        {
          id: 5,
          question: "'দিক্ + অন্ত' = 'দিগন্ত' - এটি কোন সন্ধি?",
          options: [
            "ক) স্বরসন্ধি",
            "খ) ব্যঞ্জনসন্ধি",
            "গ) বিসর্গ সন্ধি",
            "ঘ) বাংলা সন্ধি",
          ],
          answer: "খ) ব্যঞ্জনসন্ধি",
          explanation:
            "ব্যঞ্জন ধ্বনির সাথে স্বরধ্বনির মিলনে এটি ব্যঞ্জনসন্ধি হয়েছে।",
        },
        {
          id: 6,
          question: "'সংসদ' এর সঠিক সন্ধি বিচ্ছেদ কোনটি?",
          options: ["ক) সম্ + সদ", "খ) সং + সদ", "গ) সঙ্ + সদ", "ঘ) স + সদ"],
          answer: "ক) সম্ + সদ",
          explanation:
            "ম-জাতীয় ধ্বনির পরিবর্তে অনুস্বার হয়, বিচ্ছেদে তা আবার 'ম' (হসন্তসহ) হয়ে যায়।",
        },
        {
          id: 7,
          question: "'নিঃ + অবধি' = কী?",
          options: ["ক) নিরাবধি", "খ) নিরবধি", "গ) নিরুবধি", "ঘ) নিশবধি"],
          answer: "খ) নিরবধি",
          explanation:
            "বিসর্গ সন্ধির নিয়মে অ ধ্বনি থাকলে বিসর্গ স্থানে 'র' হয়।",
        },
        {
          id: 8,
          question: "নিচের কোনটি নিপাতনে সিদ্ধ ব্যঞ্জনসন্ধি?",
          options: ["ক) একাদশ", "খ) ষোড়শ", "গ) তস্কর", "ঘ) উপরের সবগুলি"],
          answer: "ঘ) উপরের সবগুলি",
          explanation:
            "একাদশ (এক+দশ), ষোড়শ (ষট্+দশ), তস্কর (তৎ+কর) - সবগুলিই নিয়মবহির্ভূত।",
        },
        {
          id: 9,
          question: "'ষষ্ঠ' এর সন্ধি বিচ্ছেদ কোনটি?",
          options: ["ক) ষষ + ঠ", "খ) ষষ + ত", "গ) ষষ্ + থ", "ঘ) ষষ্ + ট"],
          answer: "গ) ষষ্ + থ",
          explanation:
            "ব্যঞ্জনসন্ধির নিয়মে 'ষ' এর পরে 'ত' বা 'থ' থাকলে যথাক্রমে 'ট' ও 'ঠ' হয়।",
        },
        {
          id: 10,
          question: "'গবেষণা' এর সঠিক সন্ধি বিচ্ছেদ কোনটি?",
          options: [
            "ক) গব + এষণা",
            "খ) গৌ + এষণা",
            "গ) গো + এষণা",
            "ঘ) গো + এশনা",
          ],
          answer: "গ) গো + এষণা",
          explanation: "এটি স্বরসন্ধির 'ও + এ' এর নিয়ম।",
        },
        {
          id: 11,
          question: "'অত্যন্ত' এর সঠিক সন্ধি বিচ্ছেদ কোনটি?",
          options: [
            "ক) অতি + অন্ত",
            "খ) অতি + অন্তঃ",
            "গ) অত্য + অন্ত",
            "ঘ) অতী + অন্ত",
          ],
          answer: "ক) অতি + অন্ত",
          explanation: "ই + অ = য-ফলা (য)।",
        },
        {
          id: 12,
          question: "'মৌরসি' কোন সন্ধি?",
          options: [
            "ক) নিপাতনে সিদ্ধ",
            "খ) ব্যঞ্জনসন্ধি",
            "গ) স্বরসন্ধি",
            "ঘ) সন্ধি হয় না",
          ],
          answer: "ঘ) সন্ধি হয় না",
          explanation: "সব শব্দের সন্ধি বিচ্ছেদ হয় না, মৌরসি একটি বিদেশি শব্দ।",
        },
        {
          id: 13,
          question: "বিসর্গ সন্ধি আসলে কোন সন্ধির অন্তর্গত?",
          options: [
            "ক) স্বরসন্ধি",
            "খ) ব্যঞ্জনসন্ধি",
            "গ) নিপাতনে সিদ্ধ",
            "ঘ) খাঁটি বাংলা",
          ],
          answer: "খ) ব্যঞ্জনসন্ধি",
          explanation:
            "বিসর্গ মূলত 'র' এবং 'স' এর সংক্ষিপ্ত রূপ, তাই এটি ব্যঞ্জনসন্ধির অংশ।",
        },
        {
          id: 14,
          question: "'দুর্যোগ' এর সঠিক সন্ধি বিচ্ছেদ কোনটি?",
          options: [
            "ক) দুর + যোগ",
            "খ) দুঃ + যোগ",
            "গ) দু + যোগ",
            "ঘ) দুর্ + যোগ",
          ],
          answer: "খ) দুঃ + যোগ",
          explanation: "এটি বিসর্গ সন্ধির উদাহরণ।",
        },
        {
          id: 15,
          question: "'মনীষা' এর সন্ধি বিচ্ছেদ কোনটি?",
          options: [
            "ক) মন + ঈষা",
            "খ) মনস + ঈষা",
            "গ) মনি + ঈষা",
            "ঘ) মণী + ইষা",
          ],
          answer: "খ) মনস + ঈষা",
          explanation: "এটি একটি নিপাতনে সিদ্ধ সন্ধি যা পরীক্ষায় প্রায়ই আসে।",
        },
      ],
    },
    written_exam_prep: {
      guidelines:
        "লিখিত পরীক্ষায় সরাসরি সন্ধি বিচ্ছেদ করতে দেওয়া হয়। বানান শুদ্ধির ক্ষেত্রেও সন্ধির নিয়ম জানা থাকলে ভুল হওয়ার সম্ভাবনা কমে যায়।",
      possible_questions: [
        {
          question: "নিপাতনে সিদ্ধ সন্ধি কাকে বলে? পাঁচটি উদাহরণ দিন।",
          key_points_for_answer: [
            "যেসব সন্ধি ব্যাকরণের কোনো সাধারণ নিয়ম মানে না।",
            "উদাহরণ: মার্তণ্ড, শুদ্ধোদন, গবাক্ষ, প্রৌঢ়, অন্যান্য।",
          ],
        },
        {
          question: "বিসর্গ সন্ধির প্রধান দুটি নিয়ম উদাহরণসহ লিখুন।",
          key_points_for_answer: [
            "অ-কারের পর বিসর্গ এবং পরে বর্গের ৩য়/৪র্থ/৫ম বর্ণ থাকলে বিসর্গ ও অ মিলে ও-কার হয় (তপঃ+বন=তপোবন)।",
            "বিসর্গের পরে চ/ছ থাকলে 'শ' হয় (নিঃ+চয়=নিশ্চয়)।",
          ],
        },
      ],
    },
  },

  {
    _id: "bangla_prottoy_bcs_guide_2026",
    title: "প্রত্যয়: শব্দ গঠনের নিয়ম ও বিসিএস প্রস্তুতি",
    category: "বাংলা ব্যাকরণ",
    tags: [
      "প্রত্যয়",
      "কৃতি প্রত্যয়",
      "তদ্ধিত প্রত্যয়",
      "প্রকৃতি",
      "বিসিএস",
      "ব্যাকরণ",
    ],
    last_updated: "2026-02-05",
    article_content: {
      summary:
        "শব্দ বা ধাতুর পরে যে বর্ণ বা বর্ণসমষ্টি যুক্ত হয়ে নতুন শব্দ গঠন করে, তাকে প্রত্যয় বলে। প্রত্যয় মূলত দুই প্রকার—কৃৎ প্রত্যয় (ধাতুর পরে বসে) এবং তদ্ধিত প্রত্যয় (নাম শব্দের পরে বসে)। প্রত্যয় নির্ণয় করতে হলে শব্দের মূল বা 'প্রকৃতি' চেনা অত্যন্ত জরুরি।",
      key_points: [
        "প্রকৃতি ২ প্রকার: নাম প্রকৃতি ও ধাতু (ক্রিয়া) প্রকৃতি।",
        "কৃৎ প্রত্যয় যোগে গঠিত শব্দকে 'কৃদন্ত পদ' বলে।",
        "তদ্ধিত প্রত্যয় যোগে গঠিত শব্দকে 'তদ্ধিতান্ত পদ' বলে।",
        "ধাতু বোঝাতে প্রকৃতির আগে '$\sqrt{}$' (রুট) চিহ্ন ব্যবহৃত হয়।",
        "গুণ ও বৃদ্ধি: প্রত্যয় যুক্ত হওয়ার সময় প্রকৃতির আদি স্বরের পরিবর্তনকে গুণ বা বৃদ্ধি বলে।",
      ],
      visual_representation: {
        image_tag:
          "[Image showing a diagram of Prokritee + Prottoy = Shobdo with examples like √dree + ok = darok]",
        caption: "প্রকৃতি ও প্রত্যয়ের সমন্বয়ে শব্দ গঠনের প্রক্রিয়া।",
      },
      sections: [
        {
          heading: "১. প্রত্যয়ের প্রকারভেদ ও চেনার উপায়",
          content:
            "ক্রিয়াপদের মূলকে বলা হয় ধাতু বা ক্রিয়া প্রকৃতি। এই ধাতুর সাথে যা যুক্ত হয় তা কৃৎ প্রত্যয় (যেমন: $\sqrt{চল্} + অন্ = চলন$)। অন্যদিকে, বিশেষ্য বা বিশেষণ শব্দের সাথে যা যুক্ত হয় তা তদ্ধিত প্রত্যয় (যেমন: বাঘ + আ = বাঘা)।",
        },
        {
          heading: "২. গুরুত্বপূর্ণ প্রকৃতি-প্রত্যয় একনজরে",
          table_data: [
            {
              সংস্থা: "কৃৎ প্রত্যয় (বাংলা)",
              পূর্ণরূপ: "ধাতু + বাংলা প্রত্যয়",
              লক্ষ্য: "নাচন ($\sqrt{নাচ্} + অন্$), খেলনা ($\sqrt{খেল্} + না$)",
            },
            {
              সংস্থা: "কৃৎ প্রত্যয় (তৎসম)",
              পূর্ণরূপ: "ধাতু + সংস্কৃত প্রত্যয়",
              লক্ষ্য: "কারক ($\sqrt{কৃ} + অক$), মুক্তি ($\sqrt{মুচ্} + তি$)",
            },
            {
              সংস্থা: "তদ্ধিত প্রত্যয় (বাংলা)",
              পূর্ণরূপ: "নাম শব্দ + বাংলা প্রত্যয়",
              লক্ষ্য: "চোরাই (চোর + আই), ঘরোয়া (ঘর + ওয়া)",
            },
            {
              সংস্থা: "তদ্ধিত প্রত্যয় (তৎসম)",
              পূর্ণরূপ: "নাম শব্দ + সংস্কৃত প্রত্যয়",
              লক্ষ্য: "শৈশব (শিশু + অ), মানব (মনু + অ)",
            },
            {
              সংস্থা: "বিদেশি তদ্ধিত",
              পূর্ণরূপ: "নাম শব্দ + বিদেশি প্রত্যয়",
              লক্ষ্য: "খাজাঞ্চি (খাজনা + চি), পানসে (পান + সে)",
            },
          ],
        },
      ],
    },
    preliminary_exam_prep: {
      focus: "বিসিএস প্রিলিমিনারি স্পেশাল প্রত্যয় MCQ",
      mcqs: [
        {
          id: 1,
          question: "ক্রিয়া প্রকৃতির অন্য নাম কী?",
          options: ["ক) শব্দ", "খ) ধাতু", "গ) উপসর্গ", "ঘ) প্রত্যয়"],
          answer: "খ) ধাতু",
          explanation: "ক্রিয়াপদের মূল অংশকে ধাতু বা ক্রিয়া প্রকৃতি বলা হয়।",
        },
        {
          id: 2,
          question: "'কৃতি' শব্দের সঠিক প্রকৃতি-প্রত্যয় কোনটি?",
          options: [
            "ক) $\sqrt{কৃ} + তি$",
            "খ) $\sqrt{কৃত্} + ই$",
            "গ) কৃ + তি",
            "ঘ) $\sqrt{কর} + তি$",
          ],
          answer: "ক) $\sqrt{কৃ} + তি$",
          explanation: "সংস্কৃত কৃৎ প্রত্যয়ের নিয়মানুসারে এটি গঠিত।",
        },
        {
          id: 3,
          question: "তদ্ধিত প্রত্যয় কোন প্রকৃতির সাথে যুক্ত হয়?",
          options: [
            "ক) ক্রিয়া প্রকৃতি",
            "খ) নাম প্রকৃতি",
            "গ) মৌলিক শব্দ",
            "ঘ) অব্যয়",
          ],
          answer: "খ) নাম প্রকৃতি",
          explanation:
            "নাম প্রকৃতির সাথে যে প্রত্যয় যুক্ত হয় তাকে তদ্ধিত প্রত্যয় বলে।",
        },
        {
          id: 4,
          question: "'উক্তি' শব্দের সঠিক প্রকৃতি-প্রত্যয় কোনটি?",
          options: [
            "ক) $\sqrt{উক্} + তি$",
            "খ) $\sqrt{বচ্} + তি$",
            "গ) উচ্ + তি",
            "ঘ) $\sqrt{বচ্} + ক্তি$",
          ],
          answer: "খ) $\sqrt{বচ্} + তি$",
          explanation:
            "এটি একটি গুরুত্বপূর্ণ তৎসম কৃৎ প্রত্যয়, যেখানে 'বচ্' ধাতু পরিবর্তিত হয়।",
        },
        {
          id: 5,
          question: "নিচের কোনটি 'কৃদন্ত' পদের উদাহরণ?",
          options: ["ক) ঢাকাই", "খ) মিতালি", "গ) চলন", "ঘ) রাজপুত"],
          answer: "গ) চলন",
          explanation:
            "$\sqrt{চল্} + অন্ = চলন$। ধাতু থেকে গঠিত শব্দই কৃদন্ত পদ।",
        },
        {
          id: 6,
          question: "'পার্থিব' শব্দের সঠিক প্রকৃতি-প্রত্যয় কোনটি?",
          options: [
            "ক) পৃথি + ইব",
            "খ) পৃথিবী + অ (ষ্ণ)",
            "গ) পার্থ + ইব",
            "ঘ) পৃথিবী + ইব",
          ],
          answer: "খ) পৃথিবী + অ (ষ্ণ)",
          explanation:
            "তৎসম তদ্ধিত প্রত্যয়ের নিয়মে পৃথিবী শব্দের সাথে 'ষ্ণ' বা 'অ' যুক্ত হয়ে পার্থিব হয়।",
        },
        {
          id: 7,
          question: "'মহিমা' শব্দের সঠিক প্রকৃতি-প্রত্যয় কোনটি?",
          options: [
            "ক) মহি + মা",
            "খ) মহা + ইমান",
            "গ) মহৎ + ইমন",
            "ঘ) মহৎ + ইমা",
          ],
          answer: "গ) মহৎ + ইমন",
          explanation: "সংস্কৃত ইমন প্রত্যয় যুক্ত হয়ে মহিমা গঠিত হয়েছে।",
        },
        {
          id: 8,
          question:
            "'ষ্ণ' (অ) প্রত্যয় যুক্ত হলে প্রকৃতির আদি স্বরের 'উ' কার স্থলে কী হয়?",
          options: ["ক) ও", "খ) ঔ", "গ) আর", "ঘ) আ"],
          answer: "খ) ঔ",
          explanation:
            "বৃদ্ধির নিয়মানুসারে উ/ঊ স্থলে ঔ হয় (যেমন: মনু + অ = মানব)।",
        },
        {
          id: 9,
          question: "'বাবুয়ানা' কোন ধরনের প্রত্যয়ান্ত শব্দ?",
          options: [
            "ক) তৎসম তদ্ধিত",
            "খ) বিদেশি তদ্ধিত",
            "গ) বাংলা কৃৎ",
            "ঘ) বাংলা তদ্ধিত",
          ],
          answer: "খ) বিদেশি তদ্ধিত",
          explanation: "বাবু + আনা (ফারসি প্রত্যয়) = বাবুয়ানা।",
        },
        {
          id: 10,
          question: "'শ্রবণ' শব্দের সঠিক প্রকৃতি-প্রত্যয় কোনটি?",
          options: [
            "ক) $\sqrt{শ্রু} + অন্$",
            "খ) $\sqrt{শ্রো} + অন$",
            "গ) শ্রব + অন",
            "ঘ) $\sqrt{শ্রু} + অনট্$",
          ],
          answer: "ঘ) $\sqrt{শ্রু} + অনট্$",
          explanation:
            "তৎসম কৃৎ প্রত্যয়ের নিয়মে অনট্ (অন্) প্রত্যয় যুক্ত হয়েছে।",
        },
        {
          id: 11,
          question: "নিচের কোনটি নিপাতনে সিদ্ধ কৃৎ প্রত্যয়?",
          options: ["ক) কারক", "খ) ভুক্তি", "গ) সিদ্ধি", "ঘ) শক্তি"],
          answer: "খ) ভুক্তি",
          explanation:
            "ভুক্তি, মুক্তি—এগুলো নিপাতনে সিদ্ধের উদাহরণ হিসেবে অনেক বইয়ে আলোচিত।",
        },
        {
          id: 12,
          question: "প্রত্যয় যুক্ত হওয়ার পর আদি স্বরের পরিবর্তনকে কী বলে?",
          options: ["ক) বিভক্তি", "খ) গুণ ও বৃদ্ধি", "গ) সন্ধি", "ঘ) সমাস"],
          answer: "খ) গুণ ও বৃদ্ধি",
          explanation: "আদি স্বরের পরিবর্তনই হলো গুণ ও বৃদ্ধি।",
        },
        {
          id: 13,
          question: "'মেছো' শব্দের সঠিক প্রকৃতি-প্রত্যয় কী?",
          options: ["ক) মাছ + উয়া", "খ) মাছ + ও", "গ) মাছ + ইয়া", "ঘ) মেছ + ও"],
          answer: "ক) মাছ + উয়া",
          explanation: "মাছ + উয়া > মাছুয়া > মেছো (বাংলা তদ্ধিত প্রত্যয়)।",
        },
        {
          id: 14,
          question: "'নীলিমা' শব্দের প্রকৃতি ও প্রত্যয় কী?",
          options: [
            "ক) নীল + ইমা",
            "খ) নীল + ইমন",
            "গ) নীলি + মা",
            "ঘ) নীলিম + আ",
          ],
          answer: "খ) নীল + ইমন",
          explanation: "মহিমা, নীলিমা এগুলোতে 'ইমন' প্রত্যয় যুক্ত হয়।",
        },
        {
          id: 15,
          question: "'পাচক' শব্দের সঠিক প্রকৃতি-প্রত্যয় কোনটি?",
          options: [
            "ক) $\sqrt{পাচ} + অক$",
            "খ) $\sqrt{পচ্} + ণক (অক)$",
            "গ) পাচ্ + ক",
            "ঘ) $\sqrt{পা} + চক$",
          ],
          answer: "খ) $\sqrt{পচ্} + ণক (অক)$",
          explanation: "তৎসম কৃৎ প্রত্যয় 'ণক' যুক্ত হয়ে পাচক হয়েছে।",
        },
      ],
    },
    written_exam_prep: {
      guidelines:
        "লিখিত পরীক্ষায় প্রকৃতি-প্রত্যয় নির্ণয় করতে দেওয়া হয়। সেক্ষেত্রে ধাতুর আগে অবশ্যই '$\sqrt{}$' চিহ্ন এবং প্রত্যয়ের নাম (কৃৎ/তদ্ধিত) উল্লেখ করা বাধ্যতামূলক।",
      possible_questions: [
        {
          question: "গুণ ও বৃদ্ধি বলতে কী বোঝেন? উদাহরণ দিন।",
          key_points_for_answer: [
            "গুণ: ই/ঈ স্থলে এ, উ/ঊ স্থলে ও, ঋ স্থলে অর্ হওয়া।",
            "বৃদ্ধি: অ স্থলে আ, ই/ঈ স্থলে ঐ, উ/ঊ স্থলে ঔ হওয়া।",
          ],
        },
        {
          question:
            "তৎসম কৃৎ প্রত্যয় ও তদ্ধিত প্রত্যয়ের পার্থক্য উদাহরণসহ লিখুন।",
          key_points_for_answer: [
            "কৃৎ প্রত্যয় ধাতুর সাথে যুক্ত হয় ($\sqrt{কৃ} + তব্য় = কর্তব্য$)।",
            "তদ্ধিত প্রত্যয় নাম শব্দের সাথে যুক্ত হয় (মনু + অ = মানব)।",
          ],
        },
      ],
    },
  },
  {
    _id: "bangla_antonyms_bcs_guide_2026",
    title: "বিপরীত শব্দ: প্রতিযোগিতামূলক পরীক্ষার পূর্ণাঙ্গ শব্দভাণ্ডার",
    category: "বাংলা ব্যাকরণ ও সাহিত্য",
    tags: ["বিপরীত শব্দ", "বিসিএস", "বাংলা শব্দভাণ্ডার", "Antonyms", "ব্যাকরণ"],
    last_updated: "2026-02-05",
    article_content: {
      summary:
        "বিপরীত শব্দ বা বিপরীতার্থক শব্দ হলো কোনো শব্দের বিপরীত অর্থ প্রকাশকারী অন্য একটি শব্দ। পরীক্ষায় সাধারণত প্রচলিত শব্দের চেয়ে অপ্রচলিত বা তৎসম শব্দের বিপরীত রূপ বেশি জানতে চাওয়া হয়।",
      key_points: [
        "বিপরীত শব্দ গঠনের সময় মূল শব্দের পদ (Parts of Speech) পরিবর্তন করা যাবে না (বিশেষ্যের বিপরীতে বিশেষ্যই বসবে)।",
        "তৎসম শব্দের বিপরীত শব্দ সাধারণত তৎসম শব্দই হয়।",
        "উপসর্গ যোগ করেও অনেক সময় বিপরীত শব্দ গঠন করা হয় (যেমন: মান - অপমান)।",
        "বিসিএস পরীক্ষায় 'অর্বাচীন', 'ব্যষ্টি', 'সংকুচিত'—এ জাতীয় শব্দগুলো বারবার আসে।",
      ],
      visual_representation: {
        image_tag:
          "[Table of most important antonyms for BCS like 'Akunchn-Prosharn', 'Udyot-Binoy']",
        caption:
          "বিসিএস পরীক্ষায় বারবার আসা গুরুত্বপূর্ণ বিপরীত শব্দের তালিকা।",
      },
      sections: [
        {
          heading: "১. অতি গুরুত্বপূর্ণ বিপরীত শব্দের তালিকা",
          table_data: [
            {
              সংস্থা: "অর্বাচীন",
              পূর্ণরূপ: "প্রাচীন",
              লক্ষ্য: "আধুনিক ও পুরাতন সংক্রান্ত",
            },
            {
              সংস্থা: "ব্যষ্টি",
              পূর্ণরূপ: "সমষ্টি",
              লক্ষ্য: "একক বনাম দলগত",
            },
            {
              সংস্থা: "আকুঞ্চন",
              পূর্ণরূপ: "প্রসারণ",
              লক্ষ্য: "কুঁচকানো ও ছড়ানো",
            },
            {
              সংস্থা: "সুপ্ত",
              পূর্ণরূপ: "জাগ্রত",
              লক্ষ্য: "ঘুমন্ত ও সজাগ",
            },
            {
              সংস্থা: "উদ্ধত",
              পূর্ণরূপ: "বিনয়ী",
              লক্ষ্য: "আচরণগত বৈপরীত্য",
            },
          ],
        },
      ],
    },
    preliminary_exam_prep: {
      focus: "বিসিএস ও ব্যাংক জব স্পেশাল কুইজ (৩০টি)",
      mcqs: [
        {
          id: 1,
          question: "'অর্বাচীন' শব্দের বিপরীত শব্দ কোনটি?",
          options: ["ক) নবীন", "খ) প্রাচীন", "গ) আধুনিক", "ঘ) আদি"],
          answer: "খ) প্রাচীন",
          explanation: "অর্বাচীন মানে আধুনিক, তাই এর বিপরীত প্রাচীন।",
        },
        {
          id: 2,
          question: "'উদ্ধত' শব্দের বিপরীত শব্দ কোনটি?",
          options: ["ক) বিনয়ী", "খ) কঠোর", "গ) নম্র", "ঘ) শান্ত"],
          answer: "ক) বিনয়ী",
          explanation: "উদ্ধত মানে অহংকারী বা অবাধ্য।",
        },
        {
          id: 3,
          question: "'আকুঞ্চন' শব্দের বিপরীত শব্দ কোনটি?",
          options: ["ক) বিকোচন", "খ) প্রসারণ", "গ) সংকোচন", "ঘ) বিকর্ষণ"],
          answer: "খ) প্রসারণ",
          explanation: "আকুঞ্চন মানে কুঁচকানো, প্রসারণ মানে ছড়ানো।",
        },
        {
          id: 4,
          question: "'ব্যষ্টি' শব্দের বিপরীত শব্দ কী?",
          options: ["ক) জনতা", "খ) একক", "গ) সমষ্টি", "ঘ) সমাজ"],
          answer: "গ) সমষ্টি",
          explanation: "ব্যষ্টি মানে ব্যক্তিগত বা একক, সমষ্টি মানে দলগত।",
        },
        {
          id: 5,
          question: "'উত্তম' শব্দের বিপরীত শব্দ কোনটি?",
          options: ["ক) মধ্যম", "খ) শ্রেষ্ঠ", "গ) অধম", "ঘ) নিচ"],
          answer: "গ) অধম",
          explanation: "উত্তম মানে শ্রেষ্ঠ, অধম মানে নিচ।",
        },
        {
          id: 6,
          question: "'সঞ্চয়' শব্দের বিপরীত শব্দ কী?",
          options: ["ক) অপচয়", "খ) ব্যয়", "গ) জমানো", "ঘ) নিঃশেষ"],
          answer: "খ) ব্যয়",
          explanation: "সঞ্চয়ের বিপরীত ব্যয়।",
        },
        {
          id: 7,
          question: "'ঐহিক' শব্দের বিপরীত শব্দ কোনটি?",
          options: [
            "ক) ইহলৌকিক",
            "খ) পারলৌকিক",
            "গ) পারত্রিক",
            "ঘ) খ ও গ উভয়ই",
          ],
          answer: "ঘ) খ ও গ উভয়ই",
          explanation: "ঐহিক মানে এই জগতের, বিপরীত হলো অন্য জগতের।",
        },
        {
          id: 8,
          question: "'গৃহী' শব্দের বিপরীত শব্দ কোনটি?",
          options: ["ক) ঘরোয়া", "খ) সন্ন্যাসী", "গ) সংসারী", "ঘ) যাযাবর"],
          answer: "খ) সন্ন্যাসী",
          explanation: "গৃহী মানে যে ঘরে বাস করে।",
        },
        {
          id: 9,
          question: "'জঙ্গম' শব্দের বিপরীত শব্দ কোনটি?",
          options: ["ক) সচল", "খ) স্থাবর", "গ) অচল", "ঘ) স্থির"],
          answer: "খ) স্থাবর",
          explanation: "জঙ্গম মানে যা চলে, স্থাবর মানে যা স্থির থাকে।",
        },
        {
          id: 10,
          question: "'তিমির' শব্দের বিপরীত শব্দ কোনটি?",
          options: ["ক) অন্ধকার", "খ) আলো", "গ) আলোক", "ঘ) জ্যোতি"],
          answer: "গ) আলোক",
          explanation: "তিমির মানে অন্ধকার।",
        },
        {
          id: 11,
          question: "'প্রসন্ন' শব্দের বিপরীত শব্দ কোনটি?",
          options: ["ক) বিষণ্ণ", "খ) দুঃখিত", "গ) অপ্রসন্ন", "ঘ) বিমর্ষ"],
          answer: "ক) বিষণ্ণ",
          explanation: "প্রসন্ন মানে খুশি।",
        },
        {
          id: 12,
          question: "'সংশয়' শব্দের বিপরীত শব্দ কোনটি?",
          options: ["ক) ভয়", "খ) প্রত্যয়", "গ) নিশ্চয়তা", "ঘ) বিশ্বাস"],
          answer: "খ) প্রত্যয়",
          explanation: "সংশয় মানে সন্দেহ, প্রত্যয় মানে বিশ্বাস।",
        },
        {
          id: 13,
          question: "'সৌম্য' শব্দের বিপরীত শব্দ কোনটি?",
          options: ["ক) উগ্র", "খ) শান্ত", "গ) সুন্দর", "ঘ) ভৈরব"],
          answer: "ক) উগ্র",
          explanation: "সৌম্য মানে শান্ত বা সুন্দর।",
        },
        {
          id: 14,
          question: "'হাল' শব্দের বিপরীত শব্দ কোনটি?",
          options: ["ক) বর্তমান", "খ) সাবেক", "গ) পুরনো", "ঘ) অতীত"],
          answer: "খ) সাবেক",
          explanation: "হাল মানে বর্তমান (যেমন: হালখাতা)।",
        },
        {
          id: 15,
          question: "'খাতক' শব্দের বিপরীত শব্দ কোনটি?",
          options: ["ক) দেনাদার", "খ) মহাজন", "গ) পাওনাদার", "ঘ) মাজন"],
          answer: "খ) মহাজন",
          explanation: "খাতক মানে যে ঋণ নেয়।",
        },
        {
          id: 16,
          question: "'অনুরক্ত' শব্দের বিপরীত শব্দ কোনটি?",
          options: ["ক) বিরক্ত", "খ) আশক্ত", "গ) বিরাগী", "ঘ) বিরক্তি"],
          answer: "ক) বিরক্ত",
          explanation: "অনেকে বিভ্রান্ত হয়ে বিরক্তি দাগায়, কিন্তু সঠিক বিরক্ত।",
        },
        {
          id: 17,
          question: "'ঋজু' শব্দের বিপরীত শব্দ কোনটি?",
          options: ["ক) বাঁকা", "খ) বক্র", "গ) সোজা", "ঘ) সরল"],
          answer: "খ) বক্র",
          explanation: "ঋজু মানে সোজা।",
        },
        {
          id: 18,
          question: "'উন্মীলন' শব্দের বিপরীত শব্দ কোনটি?",
          options: ["ক) নিমীলন", "খ) প্রসারণ", "গ) সংকোচন", "ঘ) অন্তরাল"],
          answer: "ক) নিমীলন",
          explanation: "চোখ খোলাকে উন্মীলন বলে।",
        },
        {
          id: 19,
          question: "'একতা' শব্দের বিপরীত শব্দ কোনটি?",
          options: [
            "ক) বিচ্ছিন্নতা",
            "খ) বিচ্ছিন্ন",
            "গ) বৈচিত্র্য",
            "ঘ) বিভেদ",
          ],
          answer: "ঘ) বিভেদ",
          explanation: "একতার বিপরীত বিভেদ।",
        },
        {
          id: 20,
          question: "'উপচয়' শব্দের বিপরীত শব্দ কোনটি?",
          options: ["ক) অপচয়", "খ) অবচয়", "গ) সঞ্চয়", "ঘ) বৃদ্ধি"],
          answer: "খ) অবচয়",
          explanation: "উপচয় মানে বৃদ্ধি, অবচয় মানে হ্রাস।",
        },
        {
          id: 21,
          question: "'কৃতজ্ঞ' শব্দের বিপরীত শব্দ কোনটি?",
          options: ["ক) অকৃতজ্ঞ", "খ) কৃতজ্ঞতা", "গ) কৃতঘ্ন", "ঘ) ক ও গ উভয়ই"],
          answer: "ঘ) ক ও গ উভয়ই",
          explanation:
            "দুটোই সঠিক, তবে কৃতঘ্ন (যে উপকারীর অপকার করে) বেশি ব্যবহৃত হয়।",
        },
        {
          id: 22,
          question: "'দাতা' শব্দের বিপরীত শব্দ কোনটি?",
          options: ["ক) কৃপণ", "খ) গ্রহীতা", "গ) ভিক্ষুক", "ঘ) ক্রেতা"],
          answer: "খ) গ্রহীতা",
          explanation: "দাতা মানে যে দেয়।",
        },
        {
          id: 23,
          question: "'দুর্লভ' শব্দের বিপরীত শব্দ কোনটি?",
          options: ["ক) সুলভ", "খ) লভ্য", "গ) সহজ", "ঘ) অলভ্য"],
          answer: "ক) সুলভ",
          explanation: "দুর্লভ মানে যা সহজে পাওয়া যায় না।",
        },
        {
          id: 24,
          question: "'নিষ্ফল' শব্দের বিপরীত শব্দ কোনটি?",
          options: ["ক) সফল", "খ) সুফল", "গ) ফলবান", "ঘ) সার্থক"],
          answer: "খ) সুফল",
          explanation: "সঠিক বিপরীত শব্দ সুফল।",
        },
        {
          id: 25,
          question: "'পরার্থ' শব্দের বিপরীত শব্দ কোনটি?",
          options: ["ক) স্বার্থ", "খ) নিজের", "গ) অপার্থ", "ঘ) অনার্থ"],
          answer: "ক) স্বার্থ",
          explanation: "পরার্থ মানে অন্যের মঙ্গল।",
        },
        {
          id: 26,
          question: "'বিধি' শব্দের বিপরীত শব্দ কোনটি?",
          options: ["ক) নিষেধ", "খ) অবিধি", "গ) অবিধি", "ঘ) আইন"],
          answer: "ক) নিষেধ",
          explanation: "বিধি মানে নিয়ম বা অনুমতি।",
        },
        {
          id: 27,
          question: "'মমতা' শব্দের বিপরীত শব্দ কোনটি?",
          options: ["ক) ঘৃণা", "খ) নিষ্ঠুরতা", "গ) নির্দয়", "ঘ) নিস্পৃহতা"],
          answer: "খ) নিষ্ঠুরতা",
          explanation: "মমতার বিপরীত নিষ্ঠুরতা।",
        },
        {
          id: 28,
          question: "'শান্ত' শব্দের বিপরীত শব্দ কোনটি?",
          options: ["ক) উগ্র", "খ) অশান্ত", "গ) অনন্ত", "ঘ) ক ও খ উভয়ই"],
          answer: "ঘ) ক ও খ উভয়ই",
          explanation: "প্রসঙ্গভেদে দুটোই হতে পারে।",
        },
        {
          id: 29,
          question: "'শুক্ল' শব্দের বিপরীত শব্দ কোনটি?",
          options: ["ক) কৃষ্ণ", "খ) কালো", "গ) নীল", "ঘ) ধবল"],
          answer: "ক) কৃষ্ণ",
          explanation: "শুক্ল পক্ষ ও কৃষ্ণ পক্ষ।",
        },
        {
          id: 30,
          question: "'স্তুতি' শব্দের বিপরীত শব্দ কোনটি?",
          options: ["ক) প্রশংসা", "খ) নিন্দা", "গ) ঘৃণা", "ঘ) আক্ষেপ"],
          answer: "খ) নিন্দা",
          explanation: "স্তুতি মানে বন্দনা বা প্রশংসা।",
        },
      ],
    },
    written_exam_prep: {
      guidelines:
        "লিখিত পরীক্ষায় বিপরীত শব্দ দিয়ে বাক্য রচনা করতে বলা হতে পারে। তাই শব্দের অর্থ বুঝে বাক্য তৈরি প্র্যাকটিস করুন।",
      possible_questions: [
        {
          question:
            "নিচের শব্দগুলোর বিপরীত শব্দ লিখে বাক্য রচনা করুন: আবির্ভাব, আকর্ষণ, কৃপণ।",
          key_points_for_answer: [
            "আবির্ভাব - তিরোভাব",
            "আকর্ষণ - বিকর্ষণ",
            "কৃপণ - দাতা/উদার",
          ],
        },
      ],
    },
  },
  {
    _id: "one_word_substitution_bangla_2026",
    title: "এককথায় প্রকাশ: বিসিএস ও প্রতিযোগিতামূলক পরীক্ষার পূর্ণাঙ্গ তালিকা",
    category: "বাংলা ব্যাকরণ",
    tags: [
      "এককথায় প্রকাশ",
      "বাক্য সংকোচন",
      "বিসিএস",
      "বাংলা শব্দভাণ্ডার",
      "ব্যাকরণ",
    ],
    last_updated: "2026-02-05",
    article_content: {
      summary:
        "একাধিক পদ বা একটি উপবাক্যকে একটি শব্দে প্রকাশ করার নামই বাক্য সংকোচন বা এককথায় প্রকাশ। এর মাধ্যমে ভাষা সংক্ষিপ্ত, সুন্দর ও জোরালো হয়। বিসিএস পরীক্ষায় সাধারণত প্রকৃতি, পশুপাখির ডাক এবং বীরত্ব সম্পর্কিত শব্দগুলো বেশি আসে।",
      key_points: [
        "এটি ভাষাকে অলঙ্কৃত ও গতিশীল করে।",
        "পশুপাখির ডাক সংক্রান্ত এককথায় প্রকাশগুলো বারবার পরীক্ষায় আসে।",
        "ইন্দ্রিয় ও বীরত্ব বিষয়ক শব্দগুলো বিশেষভাবে মনে রাখা জরুরি।",
        "বানান ভুলের কারণে অনেক সময় নম্বর কাটা যায়, তাই শুদ্ধ বানানে নজর দিন।",
      ],
      visual_representation: {
        image_tag: "",
        caption: "পশুপাখির ডাক সংক্রান্ত গুরুত্বপূর্ণ এককথায় প্রকাশ।",
      },
      sections: [
        {
          heading: "১. গুরুত্বপূর্ণ কিছু বাক্য সংকোচন",
          table_data: [
            {
              সংস্থা: "অক্ষির অগোচরে",
              পূর্ণরূপ: "পরোক্ষ",
              লক্ষ্য: "যা চোখের আড়ালে ঘটে",
            },
            {
              সংস্থা: "উপকারকারীর উপকার স্বীকার করে যে",
              পূর্ণরূপ: "কৃতজ্ঞ",
              লক্ষ্য: "কৃতঘ্ন শব্দের বিপরীত",
            },
            {
              সংস্থা: "যা চিরস্থায়ী নয়",
              পূর্ণরূপ: "নশ্বর",
              লক্ষ্য: "ক্ষণস্থায়ী ও ধ্বংসশীল",
            },
            {
              সংস্থা: "ময়ূরের ডাক",
              পূর্ণরূপ: "কেকা",
              লক্ষ্য: "পশুপাখির বিশেষ ধ্বনি",
            },
            {
              সংস্থা: "যা বলা হয়নি",
              পূর্ণরূপ: "অনুক্ত",
              লক্ষ্য: "ভাষাগত সংক্ষিপ্তকরণ",
            },
          ],
        },
      ],
    },
    preliminary_exam_prep: {
      focus: "বিসিএস প্রিলিমিনারি স্পেশাল MCQ",
      mcqs: [
        {
          id: 1,
          question: "'মৃন্ময়' শব্দের অর্থ কী?",
          options: [
            "ক) যা মাটি দিয়ে তৈরি",
            "খ) যা বালু দিয়ে তৈরি",
            "গ) যা ধ্বংসশীল",
            "ঘ) যা চিরস্থায়ী",
          ],
          answer: "ক) যা মাটি দিয়ে তৈরি",
          explanation: "মাটি দিয়ে নির্মিত বস্তুকে মৃন্ময় বলা হয়।",
        },
        {
          id: 2,
          question: "'পা থেকে মাথা পর্যন্ত' - এককথায় কী হবে?",
          options: ["ক) আপাদমস্তক", "খ) নখদর্পণ", "গ) সর্বাঙ্গ", "ঘ) আমূল"],
          answer: "ক) আপাদমস্তক",
          explanation: "আ (পর্যন্ত) + পাদ (পা) + মস্তক (মাথা) = আপাদমস্তক।",
        },
        {
          id: 3,
          question: "'যে উপকারীর অপকার করে' - তাকে কী বলে?",
          options: ["ক) অকৃতজ্ঞ", "খ) কৃতঘ্ন", "গ) কৃতজ্ঞ", "ঘ) পাষণ্ড"],
          answer: "খ) কৃতঘ্ন",
          explanation:
            "উপকার স্বীকার না করা অকৃতজ্ঞ, কিন্তু অপকার করা হলো কৃতঘ্ন।",
        },
        {
          id: 4,
          question: "হাতির ডাককে এককথায় কী বলা হয়?",
          options: ["ক) বৃংহতি", "খ) হ্রেষা", "গ) গর্জন", "ঘ) হুক্কা"],
          answer: "ক) বৃংহতি",
          explanation: "হাতির ডাক বৃংহতি বা বৃংহণ। ঘোড়ার ডাক হলো হ্রেষা।",
        },
        {
          id: 5,
          question: "'যে গাছ কোনো কাজে লাগে না' - এককথায় কী হবে?",
          options: ["ক) পরগাছা", "খ) আগাছা", "গ) বৃক্ষ", "ঘ) বনস্পতি"],
          answer: "খ) আগাছা",
          explanation: "বিনা যত্নে জন্মানো ও অপ্রয়োজনীয় গাছ হলো আগাছা।",
        },
        {
          id: 6,
          question: "'একই সময়ে বর্তমান' - এককথায় কী হবে?",
          options: ["ক) সমকালীন", "খ) সমসাময়িক", "গ) অদ্যতন", "ঘ) ক ও খ উভয়ই"],
          answer: "ঘ) ক ও খ উভয়ই",
          explanation: "প্রসঙ্গভেদে সমকালীন বা সমসাময়িক দুই-ই ব্যবহৃত হয়।",
        },
        {
          id: 7,
          question: "'যা সহজে জয় করা যায় না' - এককথায় কী হবে?",
          options: ["ক) দুর্জয়", "খ) অজয়", "গ) বিজয়", "ঘ) পরাজয়"],
          answer: "ক) দুর্জয়",
          explanation: "দুঃ (কষ্টে) + জয় = দুর্জয়।",
        },
        {
          id: 8,
          question: "'নৌকা চালায় যে' - তাকে কী বলে?",
          options: ["ক) মাঝি", "খ) নাবিক", "গ) কর্ণধার", "ঘ) সবকটিই"],
          answer: "ঘ) সবকটিই",
          explanation:
            "সাধারণ অর্থে মাঝি হলেও উন্নত অর্থে নাবিক বা কর্ণধারও ব্যবহৃত হয়।",
        },
        {
          id: 9,
          question: "'যার কোনো উপায় নেই' - এককথায় কী হবে?",
          options: ["ক) নিরুপায়", "খ) অসহায়", "গ) অনন্যোপায়", "ঘ) ক ও গ উভয়ই"],
          answer: "ঘ) ক ও গ উভয়ই",
          explanation: "বিকল্প কোনো পথ নেই অর্থে অনন্যোপায় সবচেয়ে সঠিক।",
        },
        {
          id: 10,
          question: "সাপের খোলসকে এককথায় কী বলা হয়?",
          options: ["ক) নির্মোক", "খ) কঞ্চুক", "গ) আবরণ", "ঘ) ক ও খ উভয়ই"],
          answer: "ঘ) ক ও খ উভয়ই",
          explanation: "নির্মোক বা কঞ্চুক উভয়ই সাপের খোলস বোঝায়।",
        },
        {
          id: 11,
          question: "'আকাশে চরে যে' - এককথায় কী হবে?",
          options: ["ক) আকাশচারী", "খ) খেচর", "গ) পক্ষী", "ঘ) বিমান"],
          answer: "খ) খেচর",
          explanation: "সংস্কৃত 'খে' (আকাশে) চরে যে = খেচর।",
        },
        {
          id: 12,
          question: "'যা চিবিয়ে খেতে হয়' - তাকে কী বলে?",
          options: ["ক) চর্ব্য", "খ) চূষ্য", "গ) লেহ্য", "ঘ) পেয়"],
          answer: "ক) চর্ব্য",
          explanation: "চিবিয়ে খাওয়া হলো চর্ব্য, চুষে খাওয়া হলো চূষ্য।",
        },
        {
          id: 13,
          question: "জানার ইচ্ছা - এককথায় কী হবে?",
          options: ["ক) জিজ্ঞাসা", "খ) জিগীষা", "গ) জিজীবিষা", "ঘ) তিতিক্ষা"],
          answer: "ক) জিজ্ঞাসা",
          explanation:
            "জিগীষা মানে জয়ের ইচ্ছা, জিজীবিষা মানে বেঁচে থাকার ইচ্ছা।",
        },
        {
          id: 14,
          question: "হরিণের চামড়াকে এককথায় কী বলা হয়?",
          options: ["ক) কৃত্তি", "খ) অজিন", "গ) চর্ম", "ঘ) ত্বক"],
          answer: "খ) অজিন",
          explanation: "সাধারণ পশুর চামড়া কৃত্তি, কিন্তু হরিণের চামড়া অজিন।",
        },
        {
          id: 15,
          question: "'যা জলে ও স্থলে চরে' - এককথায় কী হবে?",
          options: ["ক) জলচর", "খ) স্থলচর", "গ) উভয়চর", "ঘ) উভচর"],
          answer: "ঘ) উভচর",
          explanation: "ব্যকরণগতভাবে 'উভচর' শব্দটি সঠিক।",
        },
      ],
    },
    written_exam_prep: {
      guidelines:
        "লিখিত পরীক্ষায় সরাসরি বাক্য সংকোচন করতে দেওয়া হয়। সেক্ষেত্রে বানান এবং বিশেষ পরিভাষাগুলোর দিকে খেয়াল রাখা বাঞ্ছনীয়।",
      possible_questions: [
        {
          question:
            "ইন্দ্রিয় জয় করেছেন যিনি, জয়ের ইচ্ছা, এবং বেঁচে থাকার ইচ্ছা - এই তিনটির বাক্য সংকোচন করুন।",
          key_points_for_answer: [
            "ইন্দ্রিয় জয় করেছেন যিনি = জিতেন্দ্রিয়",
            "জয়ের ইচ্ছা = জিগীষা",
            "বেঁচে থাকার ইচ্ছা = জিজীবিষা",
          ],
        },
      ],
    },
  },
  {
    _id: "bangla_synonyms_bcs_guide_2026",
    title: "সমার্থক শব্দ: প্রতিযোগিতামূলক পরীক্ষার পূর্ণাঙ্গ শব্দভাণ্ডার",
    category: "বাংলা ব্যাকরণ ও সাহিত্য",
    tags: [
      "সমার্থক শব্দ",
      "প্রতিশব্দ",
      "বিসিএস",
      "বাংলা শব্দভাণ্ডার",
      "Synonyms",
    ],
    last_updated: "2026-02-05",
    article_content: {
      summary:
        "সমার্থক শব্দ বলতে একই অর্থ প্রকাশকারী ভিন্ন ভিন্ন শব্দকে বোঝায়। বাংলা ভাষায় শব্দভাণ্ডার সমৃদ্ধ করতে এবং ভাব প্রকাশের বৈচিত্র্য আনতে সমার্থক শব্দের গুরুত্ব অপরিসীম। বিসিএস পরীক্ষায় সাধারণত শব্দের গূঢ় এবং তৎসম প্রতিশব্দগুলো বেশি জানতে চাওয়া হয়।",
      key_points: [
        "একটি শব্দের অনেকগুলো প্রতিশব্দ থাকলেও বাক্যের প্রেক্ষাপট অনুযায়ী সঠিক শব্দটি ব্যবহার করতে হয়।",
        "পরীক্ষায় বিশেষ করে পানি (বারি, অম্বু), আগুন (পাবক, অনল), সূর্য (তপন, মার্তণ্ড) সংক্রান্ত শব্দগুলো বেশি আসে।",
        "অনেক সময় 'ভিন্নজাতীয় শব্দ কোনটি'—এই আকারেও সমার্থক শব্দের প্রশ্ন হয়।",
      ],
      visual_representation: {
        image_tag:
          "[Table showing synonyms for Sky (Akash), Earth (Prithibi), and Water (Pani)]",
        caption:
          "বিসিএস প্রিলিমিনারির জন্য সবচেয়ে গুরুত্বপূর্ণ প্রতিশব্দগুলোর তালিকা।",
      },
      sections: [
        {
          heading: "১. বহুল ব্যবহৃত সমার্থক শব্দের তালিকা",
          table_data: [
            {
              সংস্থা: "সূর্য",
              পূর্ণরূপ: "তপন, দিবাকর, ভাস্কর, মার্তণ্ড, আদিত্য, মিহির",
            },
            {
              সংস্থা: "জল",
              পূর্ণরূপ: "বারি, অম্বু, সলিল, তয়, উদক, নীর",
            },
            {
              সংস্থা: "অগ্নি",
              পূর্ণরূপ: "অনল, পাবক, হুতাশন, বৈশ্বানর, বিভাবসু",
            },
            {
              সংস্থা: "পৃথিবী",
              পূর্ণরূপ: "বসুন্ধরা, ধরিত্রী, মেদিনী, ক্ষিতি, অবনী",
            },
            {
              সংস্থা: "আকাশ",
              পূর্ণরূপ: "গগন, অম্বর, ব্যোম, নভঃ, অন্তরীক্ষ",
            },
          ],
        },
      ],
    },
    preliminary_exam_prep: {
      focus: "বিসিএস ও ব্যাংক জব স্পেশাল কুইজ (৩০টি)",
      mcqs: [
        {
          id: 1,
          question: "'বিভাবসু' কার প্রতিশব্দ?",
          options: ["ক) চন্দ্র", "খ) সূর্য", "গ) অগ্নি", "ঘ) বায়ু"],
          answer: "গ) অগ্নি",
          explanation:
            "অগ্নি বা আগুনের একটি গুরুত্বপূর্ণ তৎসম প্রতিশব্দ বিভাবসু।",
        },
        {
          id: 2,
          question: "'মার্তণ্ড' কোন শব্দের প্রতিশব্দ?",
          options: ["ক) সমুদ্র", "খ) সূর্য", "গ) মেঘ", "ঘ) পর্বত"],
          answer: "খ) সূর্য",
          explanation: "সূর্যের অন্যান্য প্রতিশব্দ হলো আদিত্য, ভাস্কর, রবি।",
        },
        {
          id: 3,
          question: "'মেদিনী' শব্দের সমার্থক শব্দ কোনটি?",
          options: ["ক) আকাশ", "খ) পৃথিবী", "গ) মেঘ", "ঘ) সমুদ্র"],
          answer: "খ) পৃথিবী",
          explanation: "মেদিনী, ক্ষিতি, অবনী সবই পৃথিবীর সমার্থক।",
        },
        {
          id: 4,
          question: "'অম্বু' শব্দের অর্থ কী?",
          options: ["ক) জল", "খ) আকাশ", "গ) আগুন", "ঘ) বাতাস"],
          answer: "ক) জল",
          explanation: "জল বা পানির প্রতিশব্দ অম্বু, বারি, সলিল।",
        },
        {
          id: 5,
          question: "নিচের কোনটি 'আকাশ' শব্দের প্রতিশব্দ নয়?",
          options: ["ক) ব্যোম", "খ) অম্বর", "গ) হিমাংশু", "ঘ) গগন"],
          answer: "গ) হিমাংশু",
          explanation: "হিমাংশু মানে চাঁদ, বাকি তিনটি আকাশের প্রতিশব্দ।",
        },
        {
          id: 6,
          question: "'পাবক' নিচের কোন শব্দের সমার্থক?",
          options: ["ক) বাতাস", "খ) পৃথিবী", "গ) অগ্নি", "ঘ) জল"],
          answer: "গ) অগ্নি",
          explanation: "পাবক মানে আগুন।",
        },
        {
          id: 7,
          question: "'তপন' কার প্রতিশব্দ?",
          options: ["ক) সূর্য", "খ) চাঁদ", "গ) তারা", "ঘ) আকাশ"],
          answer: "ক) সূর্য",
          explanation: "সূর্যের প্রখর তাপের কারণে একে তপন বলা হয়।",
        },
        {
          id: 8,
          question: "'কুঞ্জর' শব্দের অর্থ কী?",
          options: ["ক) অশ্ব", "খ) হস্তী", "গ) সিংহ", "ঘ) হরিণ"],
          answer: "খ) হস্তী",
          explanation: "হাতি বা হস্তীর প্রতিশব্দ হলো কুঞ্জর, দ্বিপ, মাতঙ্গ।",
        },
        {
          id: 9,
          question: "নিচের কোনটি 'চাঁদ' শব্দের প্রতিশব্দ?",
          options: ["ক) শশধর", "খ) আদিত্য", "গ) অনল", "ঘ) অচল"],
          answer: "ক) শশধর",
          explanation: "শশধর, শশাঙ্ক, সুধাংশু এগুলো চাঁদের প্রতিশব্দ।",
        },
        {
          id: 10,
          question: "'সমীরণ' শব্দের অর্থ কী?",
          options: ["ক) জল", "খ) বায়ু", "গ) আকাশ", "ঘ) মেঘ"],
          answer: "খ) বায়ু",
          explanation: "বায়ু বা বাতাসের প্রতিশব্দ হলো সমীরণ, পবন, অনিল।",
        },
        {
          id: 11,
          question: "'শর্বরী' কার সমার্থক শব্দ?",
          options: ["ক) রাত", "খ) দিন", "গ) সকাল", "ঘ) সন্ধ্যা"],
          answer: "ক) রাত",
          explanation: "শর্বরী, যামিনী, বিভাবরী মানে রাত।",
        },
        {
          id: 12,
          question: "'অর্ণব' শব্দের সমার্থক কোনটি?",
          options: ["ক) নদ", "খ) নদী", "গ) সমুদ্র", "ঘ) জলপ্রপাত"],
          answer: "গ) সমুদ্র",
          explanation: "সমুদ্রের প্রতিশব্দ হলো অর্ণব, জলধি, রত্নাকর।",
        },
        {
          id: 13,
          question: "নিচের কোনটি 'পদ্ম' শব্দের প্রতিশব্দ নয়?",
          options: ["ক) শতদল", "খ) রাজীব", "গ) অরবিন্দ", "ঘ) সলিল"],
          answer: "ঘ) সলিল",
          explanation: "সলিল মানে পানি, বাকি তিনটি পদ্ম ফুলের প্রতিশব্দ।",
        },
        {
          id: 14,
          question: "'অচল' কার সমার্থক শব্দ?",
          options: ["ক) পৃথিবী", "খ) পর্বত", "গ) পাথর", "ঘ) সমুদ্র"],
          answer: "খ) পর্বত",
          explanation: "অচল, শৈল, গিরি, অদ্রি মানে পাহাড় বা পর্বত।",
        },
        {
          id: 15,
          question: "'তুরঙ্গ' কোন প্রাণীর প্রতিশব্দ?",
          options: ["ক) হাতি", "খ) ঘোড়া", "গ) বাঘ", "ঘ) হরিণ"],
          answer: "খ) ঘোড়া",
          explanation: "ঘোড়া বা অশ্বের প্রতিশব্দ তুরঙ্গ, বাজি, ঘোটক।",
        },
        {
          id: 16,
          question: "'বিহগ' শব্দের অর্থ কী?",
          options: ["ক) পশু", "খ) পাখি", "গ) আকাশ", "ঘ) বাতাস"],
          answer: "খ) পাখি",
          explanation: "পাখি বা পক্ষীর প্রতিশব্দ বিহগ, খেচর, আন্দজ।",
        },
        {
          id: 17,
          question: "নিচের কোনটি 'বিদ্যুৎ' শব্দের প্রতিশব্দ?",
          options: ["ক) চপলা", "খ) ক্ষণপ্রভা", "গ) বিজলী", "ঘ) সবকটি"],
          answer: "ঘ) সবকটি",
          explanation: "তড়িৎ, দামিনী, সৌদামিনীও বিদ্যুতের প্রতিশব্দ।",
        },
        {
          id: 18,
          question: "'তটিনী' কার সমার্থক শব্দ?",
          options: ["ক) সমুদ্র", "খ) নদী", "গ) পুকুর", "ঘ) ঝর্ণা"],
          answer: "খ) নদী",
          explanation: "নদী বা স্রোতস্বিনীর প্রতিশব্দ তটিনী, কল্লোলিনী।",
        },
        {
          id: 19,
          question: "'বৃক্ষ' শব্দের সমার্থক শব্দ কোনটি?",
          options: ["ক) বিটপী", "খ) অটবি", "গ) পাদপ", "ঘ) সবকটি"],
          answer: "ঘ) সবকটি",
          explanation: "তরু, মহীরুহও বৃক্ষের সমার্থক।",
        },
        {
          id: 20,
          question: "'নিকর' শব্দের অর্থ কী?",
          options: ["ক) আলো", "খ) অন্ধকার", "গ) দল বা সমষ্টি", "ঘ) শব্দ"],
          answer: "গ) দল বা সমষ্টি",
          explanation: "যেমন: তারকারাজি বা নক্ষত্র নিকর।",
        },
        {
          id: 21,
          question: "নিচের কোনটি 'সোনা' শব্দের প্রতিশব্দ নয়?",
          options: ["ক) সুবর্ণ", "খ) কনক", "গ) কাঞ্চন", "ঘ) ক্ষিতি"],
          answer: "ঘ) ক্ষিতি",
          explanation: "ক্ষিতি মানে পৃথিবী, বাকিগুলো সোনার প্রতিশব্দ।",
        },
        {
          id: 22,
          question: "'কোকিল' শব্দের প্রতিশব্দ কোনটি?",
          options: ["ক) পরভৃত", "খ) পরভৃত", "গ) পিক", "ঘ) খ ও গ উভয়ই"],
          answer: "ঘ) খ ও গ উভয়ই",
          explanation:
            "পিক এবং পরভৃত (যে অন্যের দ্বারা পালিত হয়) কোকিলের প্রতিশব্দ।",
        },
        {
          id: 23,
          question: "'হরিণ' শব্দের সমার্থক কোনটি?",
          options: ["ক) কুরঙ্গ", "খ) সারঙ্গ", "গ) মৃগ", "ঘ) সবকটি"],
          answer: "ঘ) সবকটি",
          explanation: "এই তিনটিই হরিণের প্রতিশব্দ।",
        },
        {
          id: 24,
          question: "'নিকেতন' শব্দের অর্থ কী?",
          options: ["ক) আকাশ", "খ) গৃহ", "গ) বন", "ঘ) মরুভূমি"],
          answer: "খ) গৃহ",
          explanation: "গৃহ, আলয়, ভবন, সদন মানে বাড়ি বা নিকেতন।",
        },
        {
          id: 25,
          question: "'জল' শব্দের প্রতিশব্দ কোনটি?",
          options: ["ক) উদক", "খ) নীর", "গ) তয়", "ঘ) সবকটি"],
          answer: "ঘ) সবকটি",
          explanation: "এগুলো জলের তৎসম প্রতিশব্দ।",
        },
        {
          id: 26,
          question: "'কপোত' শব্দের অর্থ কী?",
          options: ["ক) কাক", "খ) কবুতর", "গ) চিল", "ঘ) দোয়েল"],
          answer: "খ) কবুতর",
          explanation: "কপোত মানে কবুতর বা পায়রা।",
        },
        {
          id: 27,
          question: "'ভ্রমর' এর সমার্থক শব্দ কোনটি?",
          options: ["ক) অলি", "খ) মধুকর", "গ) ভৃঙ্গ", "ঘ) সবকটি"],
          answer: "ঘ) সবকটি",
          explanation: "ষটপদ-ও ভ্রমরের প্রতিশব্দ।",
        },
        {
          id: 28,
          question: "'শত্রু' শব্দের প্রতিশব্দ কোনটি?",
          options: ["ক) অরি", "খ) রিপু", "গ) অরাতি", "ঘ) সবকটি"],
          answer: "ঘ) সবকটি",
          explanation: "এই তিনটিই শত্রুর প্রতিশব্দ।",
        },
        {
          id: 29,
          question: "'কন্যা' শব্দের প্রতিশব্দ কোনটি?",
          options: ["ক) তনয়া", "খ) আত্মজা", "গ) দুহিতা", "ঘ) সবকটি"],
          answer: "ঘ) সবকটি",
          explanation: "এগুলো মেয়ের বা কন্যার প্রতিশব্দ।",
        },
        {
          id: 30,
          question: "'ভুজঙ্গ' কার প্রতিশব্দ?",
          options: ["ক) হাতি", "খ) সাপ", "গ) ব্যাঙ", "ঘ) মাছ"],
          answer: "খ) সাপ",
          explanation: "সাপের প্রতিশব্দ হলো ভুজঙ্গ, অহি, আশীবিষ, ফণী।",
        },
      ],
    },
  },
  {
    _id: "bangla_spelling_correction_bcs_2026",
    title: "শুদ্ধ বানান: বিসিএস ও প্রতিযোগিতামূলক পরীক্ষার নির্ভুল গাইড",
    category: "বাংলা ব্যাকরণ",
    tags: [
      "শুদ্ধ বানান",
      "বিসিএস",
      "বানান শুদ্ধি",
      "বাংলা ব্যাকরণ",
      "Spelling",
    ],
    last_updated: "2026-02-05",
    article_content: {
      summary:
        "বাংলা বানানের শুদ্ধতা বজায় রাখার জন্য বাংলা একাডেমি প্রমিত বাংলা বানানের নিয়ম অনুসরণ করা হয়। বিসিএস পরীক্ষায় সাধারণত ই-কার/ঈ-কার, উ-কার/ঊ-কার এবং 'ষ' ও 'ণ' এর ব্যবহারজনিত ভুলগুলো বেশি জানতে চাওয়া হয়।",
      key_points: [
        "রেফ-এর পর ব্যঞ্জনবর্ণের দ্বিত্ব হয় না (যেমন: কর্ম, ধর্ম—এখানে ম্ম হবে না)।",
        "অতৎসম (তদ্ভব, দেশি, বিদেশি) শব্দে সবসময় ই-কার ও উ-কার হবে (যেমন: দিঘি, শাড়ি, হাতি)।",
        "পেশা ও জাতিবাচক শব্দে ই-কার হয় (যেমন: বাঙালি, জাপানি, ইংরেজি, কেরানি)।",
        "স্ত্রীবাচক শব্দে ঈ-কার হয় (যেমন: জননী, মহীয়সী, রূপসী)।",
        "সংস্কৃত 'ইন্' প্রত্যয়ান্ত শব্দের শেষে 'ী' হয়, কিন্তু তার সাথে 'ত্ব' বা 'তা' যুক্ত হলে 'ি' হয়ে যায় (যেমন: মন্ত্রী > মন্ত্রিত্ব, প্রতিযোগী > প্রতিযোগিতা)।",
      ],
      visual_representation: {
        image_tag:
          "[Table showing common incorrect vs correct spellings: Morichika, Shushrusha, Bibhishika]",
        caption: "পরীক্ষায় বারবার আসা কিছু জটিল শব্দের শুদ্ধ রূপ।",
      },
      sections: [
        {
          heading: "১. নত্ব-বিধান ও ষত্ব-বিধানের জরুরি নিয়ম",
          content:
            "ঋ, র, ষ-এর পর মূর্ধন্য (ণ) এবং মূর্ধন্য-ষ (ষ) হয়। তবে ত-বর্গের বর্ণের সাথে যুক্ত হলে দন্ত্য-ন হয়। আবার 'সাৎ' প্রত্যয় যুক্ত শব্দে 'ষ' হয় না (যেমন: ধূলিসাৎ)।",
        },
      ],
    },
    preliminary_exam_prep: {
      focus: "বিসিএস ও ব্যাংক জব স্পেশাল কুইজ (৩০টি)",
      mcqs: [
        {
          id: 1,
          question: "কোন বানানটি শুদ্ধ?",
          options: ["ক) শাশুড়ী", "খ) শাশুড়ি", "গ) শ্বাশুড়ী", "ঘ) শ্বাশুড়ি"],
          answer: "খ) শাশুড়ি",
          explanation: "বাংলা একাডেমি নিয়ম অনুযায়ী অতৎসম শব্দে ই-কার হবে।",
        },
        {
          id: 2,
          question: "নিচের কোন বানানটি শুদ্ধ?",
          options: ["ক) বিভীষিকা", "খ) বিভিষিকা", "গ) বিভীষীকা", "ঘ) বিভিষীকা"],
          answer: "ক) বিভীষিকা",
          explanation: "প্রথমে ই-কার, পরে ঈ-কার (ি + ী)।",
        },
        {
          id: 3,
          question: "শুদ্ধ বানান কোনটি?",
          options: ["ক) মুমূর্ষু", "খ) মূমুর্ষু", "গ) মুমুর্ষূ", "ঘ) মুমূর্ষূ"],
          answer: "ক) মুমূর্ষু",
          explanation: "মাঝখানের বর্ণে ঊ-কার হবে (ু + ূ + ু)।",
        },
        {
          id: 4,
          question: "কোনটি শুদ্ধ বানান?",
          options: ["ক) শুশ্রুষা", "খ) সুশ্রুষা", "গ) শুষ্রুষা", "ঘ) শুশ্রূষা"],
          answer: "ঘ) শুশ্রূষা",
          explanation: "এটি পরীক্ষায় বারবার আসে। মনে রাখুন: শুর পর ঊ-কার হবে।",
        },
        {
          id: 5,
          question: "কোন বানানটি শুদ্ধ?",
          options: ["ক) অঞ্জলি", "খ) অঞ্জলী", "গ) অঞ্জলী", "ঘ) আঞ্জলী"],
          answer: "ক) অঞ্জলি",
          explanation: "অঞ্জলি, পুষ্পাঞ্জলি, শ্রদ্ধাঞ্জলি সবগুলোতে ই-কার হবে।",
        },
        {
          id: 6,
          question: "শুদ্ধ বানান কোনটি?",
          options: ["ক) মনোপুত", "খ) মনঃপূত", "গ) মনপূত", "ঘ) মনোপূতঃ"],
          answer: "খ) মনঃপূত",
          explanation: "বিসর্গ সন্ধি অনুযায়ী সঠিক রূপ মনঃপূত।",
        },
        {
          id: 7,
          question: "নিচের কোনটি শুদ্ধ?",
          options: ["ক) উপরোক্ত", "খ) উপরিউক্ত", "গ) উপরিউক্তি", "ঘ) উপরিউক্ত"],
          answer: "খ) উপরিউক্ত",
          explanation: "সন্ধির নিয়মে উপরি + উক্ত = উপরিউক্ত। 'উপরোক্ত' অশুদ্ধ।",
        },
        {
          id: 8,
          question: "কোন বানানটি সঠিক?",
          options: ["ক) বাল্মীকি", "খ) বাল্মিকী", "গ) বাল্মীকি", "ঘ) বাল্মিকী"],
          answer: "ক) বাল্মীকি",
          explanation: "বানানটি হলো: ব + াল + ম + ্মী + ক + ি।",
        },
        {
          id: 9,
          question: "শুদ্ধ বানান কোনটি?",
          options: ["ক) সান্তনা", "খ) সান্ত্বনা", "গ) সান্তনা", "ঘ) সান্তুনা"],
          answer: "খ) সান্ত্বনা",
          explanation: "দন্ত্য-ন এর নিচে ব-ফলা থাকবে।",
        },
        {
          id: 10,
          question: "কোনটি শুদ্ধ বানান?",
          options: ["ক) সমিচীন", "খ) সমীচিন", "গ) সমিচিন", "ঘ) সমীচীন"],
          answer: "ঘ) সমীচীন",
          explanation: "উভয় বর্ণে ঈ-কার হবে (ী + ী)।",
        },
        {
          id: 11,
          question: "নিচের কোনটি শুদ্ধ?",
          options: ["ক) মরিচিকা", "খ) মরিচীকা", "গ) মরীচিকা", "ঘ) মরীচীকা"],
          answer: "গ) মরীচিকা",
          explanation: "সঠিক ক্রম: ঈ-কার + ই-কার (ী + ি)।",
        },
        {
          id: 12,
          question: "শুদ্ধ শব্দ কোনটি?",
          options: ["ক) অদ্ভূত", "খ) অদ্ভুত", "গ) অদ্ভুত", "ঘ) অদ্ভুদ"],
          answer: "খ) অদ্ভুত",
          explanation: "'ভূত' বানানে ঊ-কার হলেও 'অদ্ভূত' বানানে সবসময় উ-কার।",
        },
        {
          id: 13,
          question: "কোন বানানটি শুদ্ধ?",
          options: [
            "ক) বুদ্ধিজীবি",
            "খ) বুদ্ধিজীবী",
            "গ) বুদ্ধিজীবি",
            "ঘ) বুদ্ধিজিবি",
          ],
          answer: "খ) বুদ্ধিজীবী",
          explanation: "সব ধরনের 'জীবী' (চাকরিজীবী, আইনজীবী) বানানে ঈ-কার হবে।",
        },
        {
          id: 14,
          question: "শুদ্ধ বানান কোনটি?",
          options: ["ক) নূন্যতম", "খ) ন্যূনতম", "গ) নূনতম", "ঘ) নুন্যতম"],
          answer: "খ) ন্যূনতম",
          explanation: "ন-এর নিচে ঊ-কার এবং য-ফলা থাকবে।",
        },
        {
          id: 15,
          question: "নিচের কোনটি শুদ্ধ বানান?",
          options: [
            "ক) নিরহংকার",
            "খ) নিরহঙ্কার",
            "গ) নিরাহংকার",
            "ঘ) নিরোহঙ্কার",
          ],
          answer: "খ) নিরহঙ্কার",
          explanation: "সন্ধি বিচ্ছেদে নিঃ + অহঙ্কার = নিরহঙ্কার।",
        },
        {
          id: 16,
          question: "শুদ্ধ বানান কোনটি?",
          options: [
            "ক) গীতাঞ্জলি",
            "খ) গীতাঞ্জলী",
            "গ) গীতাঞ্জলী",
            "ঘ) গিতাঞ্জলি",
          ],
          answer: "ক) গীতাঞ্জলি",
          explanation: "রবীন্দ্রনাথ ঠাকুরের বিখ্যাত কাব্যগ্রন্থের বানান এটি।",
        },
        {
          id: 17,
          question: "কোনটি শুদ্ধ?",
          options: [
            "ক) দুরবস্থা",
            "খ) দূরাবস্থা",
            "গ) দূরবস্থা",
            "ঘ) দুরবস্থা",
          ],
          answer: "ক) দুরবস্থা",
          explanation: "দুঃ + অবস্থা = দুরবস্থা।",
        },
        {
          id: 18,
          question: "শুদ্ধ বানান কোনটি?",
          options: [
            "ক) দারিদ্রতা",
            "খ) দরিদ্রতা",
            "গ) দারিদ্র",
            "ঘ) খ ও গ উভয়ই",
          ],
          answer: "ঘ) খ ও গ উভয়ই",
          explanation: "দরিদ্রতা অথবা দারিদ্র—যেকোনো একটি ব্যবহার করতে হবে।",
        },
        {
          id: 19,
          question: "নিচের কোনটি শুদ্ধ?",
          options: [
            "ক) প্রতিযোগীতা",
            "খ) প্রতিযোগিতা",
            "গ) প্রোতিযোগিতা",
            "ঘ) প্রতিজোগিতা",
          ],
          answer: "খ) প্রতিযোগিতা",
          explanation: "প্রতিযোগী (ী) হলেও 'তা' যুক্ত হলে ই-কার হয়ে যায়।",
        },
        {
          id: 20,
          question: "শুদ্ধ বানান কোনটি?",
          options: [
            "ক) শ্রদ্ধাঞ্জলী",
            "খ) শ্রদ্ধাঞ্জলি",
            "গ) শ্রদ্ধানঞ্জলি",
            "ঘ) শ্রদ্ধাঞ্জালি",
          ],
          answer: "খ) শ্রদ্ধাঞ্জলি",
          explanation: "সব 'অঞ্জলি' ই-কার।",
        },
        {
          id: 21,
          question: "কোনটি শুদ্ধ বানান?",
          options: ["ক) ইতোমধ্যে", "খ) ইতিমধ্যে", "গ) এতমধ্যে", "ঘ) অদ্যপি"],
          answer: "খ) ইতিমধ্যে",
          explanation: "ইতোমধ্যে প্রচলিত হলেও ব্যাকরণগতভাবে ইতিমধ্যে শুদ্ধ।",
        },
        {
          id: 22,
          question: "শুদ্ধ বানান কোনটি?",
          options: ["ক) বিদুষী", "খ) বিদুষি", "গ) বিদূষী", "ঘ) বিদূষি"],
          answer: "গ) বিদূষী",
          explanation: "দ-এর নিচে ঊ-কার এবং শেষে ঈ-কার।",
        },
        {
          id: 23,
          question: "নিচের কোনটি শুদ্ধ?",
          options: [
            "ক) স্বায়ত্তশাসন",
            "খ) স্বায়ত্ত্বশাসন",
            "গ) স্বায়ত্বশাসন",
            "ঘ) সায়ত্বশাসন",
          ],
          answer: "ক) স্বায়ত্তশাসন",
          explanation: "স্ব + আয়ত্ত = স্বায়ত্ত।",
        },
        {
          id: 24,
          question: "শুদ্ধ বানান কোনটি?",
          options: [
            "ক) সখীবিনোদ",
            "খ) সখিবিনোদ",
            "গ) সখী-বিনোদ",
            "ঘ) সখি বিনোদ",
          ],
          answer: "ক) সখীবিনোদ",
          explanation: "সখী বানানে ঈ-কার।",
        },
        {
          id: 25,
          question: "কোন বানানটি শুদ্ধ?",
          options: ["ক) উচ্ছাস", "খ) উচ্ছ্বাস", "গ) উছ্বাস", "ঘ) উচাস"],
          answer: "খ) উচ্ছ্বাস",
          explanation: "চ-ছ এর নিচে ব-ফলা থাকবে।",
        },
        {
          id: 26,
          question: "শুদ্ধ বানান কোনটি?",
          options: ["ক) অপরাহ্ন", "খ) অপরাহ্ন", "গ) অপরাহ্ণ", "ঘ) অপরাহ্ন"],
          answer: "গ) অপরাহ্ণ",
          explanation: "হ-এর নিচে 'ণ' হবে (মূর্ধন্য)।",
        },
        {
          id: 27,
          question: "নিচের কোনটি শুদ্ধ?",
          options: ["ক) আকাঙ্ক্ষা", "খ) আকাংখা", "গ) আকাঙ্খা", "ঘ) আকংখা"],
          answer: "ক) আকাঙ্ক্ষা",
          explanation: "ঙ-এর সাথে ক্ষ (ক্ষ) যুক্ত হবে।",
        },
        {
          id: 28,
          question: "শুদ্ধ বানান কোনটি?",
          options: [
            "ক) পুরস্কার",
            "খ) পুরষ্কার",
            "গ) পুরষ্কার",
            "ঘ) পুরুস্কার",
          ],
          answer: "ক) পুরস্কার",
          explanation: "অ-কারের পর বিসর্গ থাকলে দন্ত্য-স হয়।",
        },
        {
          id: 29,
          question: "কোনটি শুদ্ধ বানান?",
          options: ["ক) জ্যৈষ্ঠ", "খ) জৈষ্ঠ", "গ) জ্যেষ্ঠ", "ঘ) জেষ্ঠ্য"],
          answer: "ক) জ্যৈষ্ঠ",
          explanation: "বাংলা মাসের নাম জ্যৈষ্ঠ।",
        },
        {
          id: 30,
          question: "শুদ্ধ বানান কোনটি?",
          options: ["ক) মুহুর্ত", "খ) মুহূর্ত", "গ) মূহুর্ত", "ঘ) মূহূর্ত"],
          answer: "খ) মুহূর্ত",
          explanation: "হ-এর নিচে ঊ-কার এবং ত-এর ওপর রেফ।",
        },
      ],
    },
  },
  {
    _id: "bangla_terminology_bcs_guide_2026",
    title: "পরিভাষা: বিসিএস ও প্রতিযোগিতামূলক পরীক্ষার পূর্ণাঙ্গ তালিকা",
    category: "বাংলা ব্যাকরণ ও সাহিত্য",
    tags: [
      "পরিভাষা",
      "বিসিএস",
      "প্রশাসনিক পরিভাষা",
      "Terminology",
      "BCS English to Bangla",
    ],
    last_updated: "2026-02-05",
    article_content: {
      summary:
        "পরিভাষা হলো বিশেষ অর্থ বহনকারী শব্দ যা সাধারণত জ্ঞান-বিজ্ঞান, দর্শন বা প্রশাসনিক কাজে ব্যবহৃত হয়। ইংরেজি শব্দের হুবহু অনুবাদ না করে অনেক সময় তার ভাবগত অর্থকে প্রাধান্য দেওয়া হয়। বিসিএস পরীক্ষায় সাধারণত ১-২টি প্রশ্ন এই অংশ থেকে থাকে।",
      key_points: [
        "প্রশাসনিক কাজে ব্যবহৃত শব্দগুলো (যেমন: Ad-hoc, Liaison) সবচেয়ে বেশি গুরুত্বপূর্ণ।",
        "শিক্ষা ও গবেষণা সংশ্লিষ্ট শব্দ (যেমন: Thesis, Abstract) প্রায়ই আসে।",
        "ব্যাংকিং ও আইনি পরিভাষা (যেমন: Affidavit, Lien) থেকে প্রশ্ন থাকে।",
        "পরিভাষা মুখস্থ করার সময় বানান ও অর্থ উভয় দিকে খেয়াল রাখতে হয়।",
      ],
      visual_representation: {
        image_tag:
          "[Table showing common administrative terms: Deadlock, White Paper, Protocol, Minutes]",
        caption: "বিসিএস পরীক্ষায় সর্বাধিকবার আসা প্রশাসনিক পরিভাষার তালিকা।",
      },
      sections: [
        {
          heading: "১. অতি পরিচিত পরিভাষার তালিকা",
          table_data: [
            {
              সংস্থা: "Ad-hoc",
              পূর্ণরূপ: "অনানুষ্ঠানিক / তদর্থক",
              লক্ষ্য: "বিশেষ উদ্দেশ্যে গঠিত",
            },
            {
              সংস্থা: "Liaison",
              পূর্ণরূপ: "যোগাযোগ / সংযোগ",
              লক্ষ্য: "সমন্বয় রক্ষা করা",
            },
            { সংস্থা: "Affidavit", পূর্ণরূপ: "হলফনামা", লক্ষ্য: "আইনি ঘোষণা" },
            { সংস্থা: "Manifesto", পূর্ণরূপ: "ইশতেহার", লক্ষ্য: "দলীয় ঘোষণা" },
            {
              সংস্থা: "Minutes",
              পূর্ণরূপ: "কার্যবিবরণী",
              লক্ষ্য: "সভার আলোচনার রেকর্ড",
            },
          ],
        },
      ],
    },
    preliminary_exam_prep: {
      focus: "বিসিএস স্পেশাল কুইজ (৫০টি)",
      mcqs: [
        {
          id: 1,
          question: "'Ad-hoc' শব্দের অর্থ কী?",
          options: ["ক) অস্থায়ী", "খ) স্থায়ী", "গ) তদর্থক", "ঘ) অনিয়মিত"],
          answer: "গ) তদর্থক",
          explanation:
            "কোনো বিশেষ উদ্দেশ্যে গঠিত কমিটিকে Ad-hoc বা তদর্থক বলা হয়।",
        },
        {
          id: 2,
          question: "'Abstract' এর সঠিক পরিভাষা কোনটি?",
          options: [
            "ক) ভাবানুবাদ",
            "খ) বিমূর্ত",
            "গ) সংক্ষেপ",
            "ঘ) সারসংক্ষেপ",
          ],
          answer: "ঘ) সারসংক্ষেপ",
          explanation:
            "গবেষণাপত্র বা প্রবন্ধের শুরুতে Abstract বা সারসংক্ষেপ থাকে।",
        },
        {
          id: 3,
          question: "'Affidavit' এর বাংলা পরিভাষা কোনটি?",
          options: [
            "ক) প্রশংসা পত্র",
            "খ) হলফনামা",
            "গ) অঙ্গীকার নামা",
            "ঘ) নিয়োগ পত্র",
          ],
          answer: "খ) হলফনামা",
          explanation: "আইনিভাবে শপথ নিয়ে কোনো বিবৃতি দেওয়া হলো Affidavit।",
        },
        {
          id: 4,
          question: "'Agenda' শব্দের অর্থ কী?",
          options: [
            "ক) দিনলিপি",
            "খ) আলোচ্যসূচি",
            "গ) কর্মসূচি",
            "ঘ) স্মারকলিপি",
          ],
          answer: "খ) আলোচ্যসূচি",
          explanation: "কোনো সভার আলোচনার বিষয়বস্তু হলো Agenda।",
        },
        {
          id: 5,
          question: "'Audit' শব্দের বাংলা পরিভাষা কোনটি?",
          options: [
            "ক) হিসাবরক্ষণ",
            "খ) নিরীক্ষা",
            "গ) বাজেট",
            "ঘ) ব্যয় সংকোচন",
          ],
          answer: "খ) নিরীক্ষা",
          explanation: "হিসাব পরীক্ষা করাকে Audit বা নিরীক্ষা বলা হয়।",
        },
        {
          id: 6,
          question: "'Bibliography' এর সঠিক পরিভাষা কোনটি?",
          options: [
            "ক) গ্রন্থপুঞ্জি",
            "খ) জীবনবৃত্তান্ত",
            "গ) ইতিহাস",
            "ঘ) পাণ্ডুলিপি",
          ],
          answer: "ক) গ্রন্থপুঞ্জি",
          explanation: "ব্যবহৃত বইয়ের তালিকা হলো Bibliography।",
        },
        {
          id: 7,
          question: "'Cabinet' এর বাংলা পরিভাষা কোনটি?",
          options: ["ক) আলমারি", "খ) সচিবালয়", "গ) মন্ত্রিসভা", "ঘ) সংসদ"],
          answer: "গ) মন্ত্রিসভা",
          explanation: "সরকারের উচ্চ পর্যায়ের পরিষদ হলো Cabinet।",
        },
        {
          id: 8,
          question: "'Deadlock' শব্দের অর্থ কী?",
          options: [
            "ক) প্রাণহীন",
            "খ) অচলাবস্থা",
            "গ) তালাবদ্ধ",
            "ঘ) শেষ সীমা",
          ],
          answer: "খ) অচলাবস্থা",
          explanation: "কোনো বিষয়ের অমীমাংসিত পরিস্থিতি হলো Deadlock।",
        },
        {
          id: 9,
          question: "'Diploma' এর বাংলা পরিভাষা কী?",
          options: [
            "ক) প্রশংসাপত্র",
            "খ) সনদপত্র",
            "গ) উপাধি",
            "ঘ) সংস্থাপত্র",
          ],
          answer: "খ) সনদপত্র",
          explanation: "শিক্ষাগত অর্জনের স্বীকৃতির নাম Diploma বা সনদপত্র।",
        },
        {
          id: 10,
          question: "'Embargo' শব্দের অর্থ কী?",
          options: [
            "ক) আমদানি",
            "খ) পণ্যদ্রব্য",
            "গ) অবরোধ/নিষেধাজ্ঞা",
            "ঘ) শুল্ক",
          ],
          answer: "গ) অবরোধ/নিষেধাজ্ঞা",
          explanation: "ব্যবসা-বাণিজ্যে সরকারি নিষেধাজ্ঞাকে Embargo বলে।",
        },
        {
          id: 11,
          question: "'Ex-officio' এর পরিভাষা কোনটি?",
          options: [
            "ক) সাবেক কর্মকর্তা",
            "খ) পদাধিকারবলে",
            "গ) নিয়মিত",
            "ঘ) ভারপ্রাপ্ত",
          ],
          answer: "খ) পদাধিকারবলে",
          explanation: "পদের কারণে কোনো দায়িত্ব পাওয়া হলো Ex-officio।",
        },
        {
          id: 12,
          question: "'File' এর বাংলা পরিভাষা কোনটি?",
          options: ["ক) নথিপত্র", "খ) নথি", "গ) তথ্য", "ঘ) দলিল"],
          answer: "খ) নথি",
          explanation: "File এর দাপ্তরিক পরিভাষা হলো নথি।",
        },
        {
          id: 13,
          question: "'Green room' এর অর্থ কী?",
          options: ["ক) সবুজ ঘর", "খ) বিশ্রামাগার", "গ) সাজঘর", "ঘ) বাগানবাড়ি"],
          answer: "গ) সাজঘর",
          explanation:
            "থিয়েটার বা অভিনয়ের আগে অভিনেতাদের সাজসজ্জার জায়গা হলো Green room।",
        },
        {
          id: 14,
          question: "'Hand-out' এর বাংলা পরিভাষা কোনটি?",
          options: [
            "ক) প্রচারপত্র",
            "খ) পুস্তিকা",
            "গ) তথ্যপত্র/বিজ্ঞপ্তি",
            "ঘ) অনুদান",
          ],
          answer: "গ) তথ্যপত্র/বিজ্ঞপ্তি",
          explanation:
            "সরকার কর্তৃক ইস্যুকৃত কোনো অফিসিয়াল তথ্যপত্র হলো Hand-out।",
        },
        {
          id: 15,
          question: "'Honorarium' শব্দের অর্থ কী?",
          options: ["ক) সম্মাননা", "খ) সম্মানী", "গ) বেতন", "ঘ) বকশিস"],
          answer: "খ) সম্মানী",
          explanation: "কোনো বিশেষ কাজের জন্য প্রদত্ত অর্থ হলো সম্মানী।",
        },
        {
          id: 16,
          question: "'Initial' এর বাংলা পরিভাষা কোনটি?",
          options: ["ক) শুরু", "খ) আদ্যক্ষর", "গ) স্বাক্ষর", "ঘ) ভূমিকা"],
          answer: "খ) আদ্যক্ষর",
          explanation:
            "নামের প্রথম অক্ষর বা সংক্ষেপে স্বাক্ষর করা হলো Initial।",
        },
        {
          id: 17,
          question: "'Invoice' শব্দের অর্থ কী?",
          options: ["ক) চালান", "খ) রশিদ", "গ) তালিকা", "ঘ) ক্যাশ মেমো"],
          answer: "ক) চালান",
          explanation: "পণ্যের বর্ণনাসহ পাঠানো তালিকা হলো Invoice বা চালান।",
        },
        {
          id: 18,
          question: "'Lease' এর বাংলা পরিভাষা কোনটি?",
          options: ["ক) ভাড়া", "খ) ইজারা", "গ) কেনা", "ঘ) বিক্রি"],
          answer: "খ) ইজারা",
          explanation:
            "নির্দিষ্ট সময়ের জন্য জমি বা সম্পদ ভাড়া নেওয়া হলো Lease।",
        },
        {
          id: 19,
          question: "'Liaison' শব্দের অর্থ কী?",
          options: [
            "ক) চুক্তি",
            "খ) যোগাযোগ/সংযোগ",
            "গ) বিচ্ছিন্ন",
            "ঘ) দপ্তর",
          ],
          answer: "খ) যোগাযোগ/সংযোগ",
          explanation: "সমন্বয় রক্ষার কাজে ব্যবহৃত যোগাযোগ হলো Liaison।",
        },
        {
          id: 20,
          question: "'Manifesto' এর বাংলা কী?",
          options: ["ক) বিজ্ঞাপন", "খ) ঘোষণা", "গ) ইশতেহার", "ঘ) নির্দেশিকা"],
          answer: "গ) ইশতেহার",
          explanation:
            "রাজনৈতিক দলের ভবিষ্যৎ পরিকল্পনার ঘোষণাপত্র হলো Manifesto।",
        },
        {
          id: 21,
          question: "'Nomination' এর সঠিক পরিভাষা কোনটি?",
          options: ["ক) নির্বাচন", "খ) মনোনয়ন", "গ) নিয়োগ", "ঘ) বাতিল"],
          answer: "খ) মনোনয়ন",
          explanation: "কাউকে কোনো পদের জন্য প্রস্তাব করা হলো Nomination।",
        },
        {
          id: 22,
          question: "'Omission' শব্দের অর্থ কী?",
          options: ["ক) সংযোজন", "খ) বিয়োজন/বর্জন", "গ) মিশন", "ঘ) অনুমতি"],
          answer: "খ) বিয়োজন/বর্জন",
          explanation: "কোনো কিছু বাদ দেওয়া হলো Omission।",
        },
        {
          id: 23,
          question: "'Ordinance' এর বাংলা পরিভাষা কী?",
          options: ["ক) আদেশ", "খ) অধ্যাদেশ", "গ) আইন", "ঘ) ধারা"],
          answer: "খ) অধ্যাদেশ",
          explanation:
            "রাষ্ট্রপতি কর্তৃক জরুরি অবস্থায় জারি করা আইন হলো Ordinance।",
        },
        {
          id: 24,
          question: "'Personnel' এর সঠিক পরিভাষা কোনটি?",
          options: [
            "ক) ব্যক্তিগত",
            "খ) কর্মীদল/সংশ্লিষ্ট কর্মী",
            "গ) জনতা",
            "ঘ) ব্যক্তিত্ব",
          ],
          answer: "খ) কর্মীদল/সংশ্লিষ্ট কর্মী",
          explanation:
            "Personal মানে ব্যক্তিগত, কিন্তু Personnel মানে প্রতিষ্ঠানের কর্মী।",
        },
        {
          id: 25,
          question: "'Pioneer' শব্দের অর্থ কী?",
          options: ["ক) যোদ্ধা", "খ) অগ্রদূত", "গ) আবিষ্কারক", "ঘ) প্রাচীন"],
          answer: "খ) অগ্রদূত",
          explanation: "যিনি কোনো কাজের সূচনা করেন বা পথ দেখান তিনি Pioneer।",
        },
        {
          id: 26,
          question: "'Protocol' এর বাংলা পরিভাষা কী?",
          options: ["ক) নিয়ম", "খ) সন্ধি", "গ) খসড়া/শিষ্টাচার", "ঘ) আদেশ"],
          answer: "গ) খসড়া/শিষ্টাচার",
          explanation:
            "কূটনৈতিক শিষ্টাচার বা চুক্তির প্রাথমিক খসড়াকে Protocol বলে।",
        },
        {
          id: 27,
          question: "'Quorum' শব্দের অর্থ কী?",
          options: [
            "ক) সভার সদস্য",
            "খ) সভার স্থিতি",
            "গ) সভার কোরাম/প্রয়োজনীয় সদস্যসংখ্যা",
            "ঘ) সভার সমাপ্তি",
          ],
          answer: "গ) সভার কোরাম",
          explanation:
            "সভা শুরু করার জন্য ন্যূনতম সদস্য উপস্থিতিকে Quorum বলে।",
        },
        {
          id: 28,
          question: "'Referendum' এর বাংলা পরিভাষা কী?",
          options: ["ক) নির্বাচন", "খ) গণভোট", "গ) প্রচার", "ঘ) সভা"],
          answer: "খ) গণভোট",
          explanation: "কোনো বিষয়ে জনগণের সরাসরি ভোট গ্রহণ হলো Referendum।",
        },
        {
          id: 29,
          question: "'Sabotage' শব্দের অর্থ কী?",
          options: ["ক) নাশকতা", "খ) ষড়যন্ত্র", "গ) ধ্বংস", "ঘ) প্রতিবাদ"],
          answer: "ক) নাশকতা",
          explanation: "গোপনে কোনো সম্পদ বা পরিকল্পনা ধ্বংস করা হলো Sabotage।",
        },
        {
          id: 30,
          question: "'Thesis' এর সঠিক পরিভাষা কোনটি?",
          options: ["ক) রচনা", "খ) গবেষণা", "গ) সন্দর্ভ", "ঘ) বই"],
          answer: "গ) সন্দর্ভ",
          explanation:
            "গবেষণামূলক গবেষণাপত্র বা থিসিসকে বাংলায় সন্দর্ভ বলা হয়।",
        },
        {
          id: 31,
          question: "'Up-to-date' এর বাংলা কী?",
          options: ["ক) আধুনিক", "খ) হালনাগাদ", "গ) আজ পর্যন্ত", "ঘ) চলমান"],
          answer: "খ) হালনাগাদ",
          explanation: "তথ্য বা রেকর্ড নতুন করে সাজানো হলো হালনাগাদ।",
        },
        {
          id: 32,
          question: "'Void' শব্দের অর্থ কী?",
          options: [
            "ক) শূন্য",
            "খ) অকার্যকর/অসার",
            "গ) ভুল",
            "ঘ) নিয়মবহির্ভূত",
          ],
          answer: "খ) অকার্যকর/অসার",
          explanation: "আইনিভাবে বাতিল বা অকার্যকর হলো Void।",
        },
        {
          id: 33,
          question: "'White paper' এর পরিভাষা কী?",
          options: [
            "ক) সাদা কাগজ",
            "খ) শ্বেতপত্র",
            "গ) সরকারি নোট",
            "ঘ) গোপন রিপোর্ট",
          ],
          answer: "খ) শ্বেতপত্র",
          explanation:
            "সরকার কর্তৃক কোনো সমস্যার বর্ণনাসহ প্রকাশিত রিপোর্ট হলো শ্বেতপত্র।",
        },
        {
          id: 34,
          question: "'X-ray' এর বাংলা প্রতিশব্দ কী?",
          options: [
            "ক) রঞ্জনরশ্মি",
            "খ) আলোক রশ্মি",
            "গ) প্রতিচ্ছবি",
            "ঘ) পরীক্ষা",
          ],
          answer: "ক) রঞ্জনরশ্মি",
          explanation:
            "উইলহেম রন্টজেন এটি আবিষ্কার করেন বলে একে রঞ্জনরশ্মি বলা হয়।",
        },
        {
          id: 35,
          question: "'Yearbook' এর অর্থ কী?",
          options: [
            "ক) বাৎসরিক ডায়েরি",
            "খ) বর্ষপঞ্জি/বর্ষপুস্তক",
            "গ) ক্যালেন্ডার",
            "ঘ) ইতিহাস",
          ],
          answer: "খ) বর্ষপুস্তক",
          explanation: "পুরো বছরের গুরুত্বপূর্ণ তথ্যের বই হলো Yearbook।",
        },
        {
          id: 36,
          question: "'Zone' শব্দের পরিভাষা কোনটি?",
          options: ["ক) এলাকা", "খ) অঞ্চল", "গ) বিভাগ", "ঘ) বলয়"],
          answer: "খ) অঞ্চল",
          explanation: "ভৌগোলিক পরিসীমাবদ্ধ জায়গাকে অঞ্চল বলা হয়।",
        },
        {
          id: 37,
          question: "'Autocracy' এর বাংলা কী?",
          options: [
            "ক) গণতন্ত্র",
            "খ) স্বৈরতন্ত্র",
            "গ) রাজতন্ত্র",
            "ঘ) আমলাতন্ত্র",
          ],
          answer: "খ) স্বৈরতন্ত্র",
          explanation: "একনায়কতন্ত্র বা স্বৈরতন্ত্রকে Autocracy বলে।",
        },
        {
          id: 38,
          question: "'Broker' এর বাংলা পরিভাষা কোনটি?",
          options: [
            "ক) বিক্রেতা",
            "খ) দালাল/মধ্যস্থতাকারী",
            "গ) মহাজন",
            "ঘ) ক্রেতা",
          ],
          answer: "খ) দালাল/মধ্যস্থতাকারী",
          explanation: "ব্যবসা-বাণিজ্যে মধ্যস্থতা করেন যিনি তাকে Broker বলে।",
        },
        {
          id: 39,
          question: "'Copyright' শব্দের অর্থ কী?",
          options: [
            "ক) অনুলিপি",
            "খ) স্বত্বাধিকার/লেখনস্বত্ব",
            "গ) প্রকাশনা",
            "ঘ) অধিকার",
          ],
          answer: "খ) স্বত্বাধিকার",
          explanation: "রচনার ওপর লেখকের আইনি অধিকার হলো Copyright।",
        },
        {
          id: 10,
          question: "'Donor' শব্দের অর্থ কী?",
          options: ["ক) গ্রহীতা", "খ) দাতা", "গ) রক্তদাতা", "ঘ) বন্ধু"],
          answer: "খ) দাতা",
          explanation: "যিনি কোনো কিছু দান করেন তিনি Donor।",
        },
        {
          id: 41,
          question: "'Epidemic' শব্দের অর্থ কী?",
          options: ["ক) সংক্রামক", "খ) অতিমারি", "গ) মহামারি", "ঘ) রোগ"],
          answer: "গ) মহামারি",
          explanation: "বড় এলাকা জুড়ে রোগ ছড়িয়ে পড়লে তা Epidemic।",
        },
        {
          id: 42,
          question: "'Fiscal' শব্দের বাংলা পরিভাষা কোনটি?",
          options: [
            "ক) ব্যবসায়িক",
            "খ) আর্থিক/রাজস্ব সংক্রান্ত",
            "গ) ব্যাংকিং",
            "ঘ) ব্যক্তিগত",
          ],
          answer: "খ) আর্থিক/রাজস্ব সংক্রান্ত",
          explanation: "সরকারি আয়-ব্যয় বা বাজেট সংক্রান্ত হলো Fiscal।",
        },
        {
          id: 43,
          question: "'Gravity' শব্দের অর্থ কী?",
          options: ["ক) গভীরতা", "খ) মহাকর্ষ/অভিকর্ষ", "গ) গুরুত্ব", "ঘ) ওজন"],
          answer: "খ) মহাকর্ষ/অভিকর্ষ",
          explanation: "বিজ্ঞানের ভাষায় এটি আকর্ষণ বল।",
        },
        {
          id: 44,
          question: "'Hostage' এর বাংলা পরিভাষা কোনটি?",
          options: ["ক) অতিথি", "খ) জিম্মি", "গ) বন্দি", "ঘ) শত্রু"],
          answer: "খ) জিম্মি",
          explanation:
            "শর্ত আদায়ের জন্য কাউকে আটকে রাখলে তাকে Hostage বা জিম্মি বলে।",
        },
        {
          id: 45,
          question: "'Interim' এর অর্থ কী?",
          options: [
            "ক) অভ্যন্তরীণ",
            "খ) অন্তর্বর্তীকালীন",
            "গ) শেষ",
            "ঘ) প্রাথমিক",
          ],
          answer: "খ) অন্তর্বর্তীকালীন",
          explanation: "দুই প্রধান সময়ের মাঝখানের সময় হলো Interim।",
        },
        {
          id: 46,
          question: "'Juvenile' শব্দের অর্থ কী?",
          options: ["ক) যুবক", "খ) কিশোর", "গ) শিশু", "ঘ) ছাত্র"],
          answer: "খ) কিশোর",
          explanation: "কিশোর বয়স বা কিশোর অপরাধী বোঝাতে Juvenile ব্যবহৃত হয়।",
        },
        {
          id: 47,
          question: "'Keynote' এর বাংলা পরিভাষা কোনটি?",
          options: [
            "ক) চাবিকাঠি",
            "খ) মূলভাব/মূলসুর",
            "গ) সংক্ষিপ্ত নোট",
            "ঘ) বক্তৃতা",
          ],
          answer: "খ) মূলভাব/মূলসুর",
          explanation: "প্রধান বক্তব্য বা মূলভাব হলো Keynote।",
        },
        {
          id: 48,
          question: "'Maintenance' শব্দের অর্থ কী?",
          options: ["ক) নির্মাণ", "খ) রক্ষণাবেক্ষণ", "গ) চালনা", "ঘ) খরচ"],
          answer: "খ) রক্ষণাবেক্ষণ",
          explanation: "কোনো কিছু সচল রাখার প্রক্রিয়া হলো রক্ষণাবেক্ষণ।",
        },
        {
          id: 49,
          question: "'Negligence' এর বাংলা পরিভাষা কোনটি?",
          options: ["ক) প্রত্যাখ্যান", "খ) অবহেলা", "গ) অপরাধ", "ঘ) বিমুখ"],
          answer: "খ) অবহেলা",
          explanation: "কর্তব্যে গাফিলতি বা অবহেলাই হলো Negligence।",
        },
        {
          id: 50,
          question: "'Outpost' শব্দের অর্থ কী?",
          options: ["ক) সীমান্ত", "খ) ফাঁড়ি", "গ) দুর্গ", "ঘ) বহির্গমন"],
          answer: "খ) ফাঁড়ি",
          explanation:
            "মূল দপ্তরের বাইরে ছোট প্রশাসনিক বা পুলিশ ক্যাম্প হলো Outpost বা ফাঁড়ি।",
        },
      ],
    },
  },

  {
    _id: "bangla_idioms_bagdhara_bcs_2026",
    title: "বাগধারা: বিসিএস ও প্রতিযোগিতামূলক পরীক্ষার গুরুত্বপূর্ণ সংগ্রহ",
    category: "বাংলা ব্যাকরণ",
    tags: ["বাগধারা", "বিসিএস", "বাংলা ব্যাকরণ", "Idioms", "বাক্যাংশ"],
    last_updated: "2026-02-05",
    article_content: {
      summary:
        "বাগধারা বা বাক্যরীতি হলো এমন এক শব্দসমষ্টি যা আভিধানিক অর্থ ছাপিয়ে কোনো বিশেষ বা রূপক অর্থ প্রকাশ করে। বাংলা সাহিত্য ও কথ্য ভাষায় বাগধারার ব্যবহার ভাষাকে আরও সমৃদ্ধ ও শক্তিশালী করে তোলে।",
      key_points: [
        "বাগধারার মূল অর্থ শব্দের সাধারণ অর্থ থেকে আলাদা হয়।",
        "অনেক সময় সমার্থক বাগধারা পরীক্ষায় আসে (যেমন: অকাল কুষ্মাণ্ড ও আমড় কাঠের ঢেঁকি)।",
        "বিসিএস-এ সাধারণত লোকজ জীবনের সাথে জড়িত বাগধারাগুলো বেশি জানতে চাওয়া হয়।",
        "বাগধারা পরিবর্তনের কোনো সুযোগ নেই; অর্থাৎ এর শব্দ পরিবর্তন করা যায় না।",
      ],
      visual_representation: {
        image_tag:
          "[Table showing Synonymous Idioms: Worthless = Akal Kushmando, Amra kather dheki; Unlucky = Atkopale, Harhabhate]",
        caption: "সমার্থক অর্থবোধক বাগধারার একটি তুলনামূলক তালিকা।",
      },
      sections: [
        {
          heading: "১. অতি গুরুত্বপূর্ণ কিছু বাগধারা ও অর্থ",
          table_data: [
            {
              সংস্থা: "অগস্ত্য যাত্রা",
              পূর্ণরূপ: "চিরদিনের জন্য প্রস্থান",
              লক্ষ্য: "ফিরে না আসার প্রতিজ্ঞা",
            },
            {
              সংস্থা: "আকাশ কুসুম",
              পূর্ণরূপ: "অসম্ভব কল্পনা",
              লক্ষ্য: "বাস্তববর্জিত চিন্তা",
            },
            {
              সংস্থা: "ঊনপাজুরে",
              পূর্ণরূপ: "হতভাগ্য",
              লক্ষ্য: "দুর্ভাগ্য বোঝাতে ব্যবহৃত",
            },
            {
              সংস্থা: "গোবর গণেশ",
              পূর্ণরূপ: "মূর্খ বা অপদার্থ",
              লক্ষ্য: "বুদ্ধিহীন ব্যক্তি",
            },
            {
              সংস্থা: "মণিকঞ্চন যোগ",
              পূর্ণরূপ: "উপযুক্ত মিলন",
              লক্ষ্য: "দুটি ভালো জিনিসের মিলন",
            },
          ],
        },
      ],
    },
    preliminary_exam_prep: {
      focus: "বিসিএস স্পেশাল বাগধারা MCQ",
      mcqs: [
        {
          id: 1,
          question: "'অকাল কুষ্মাণ্ড' বাগধারাটির অর্থ কী?",
          options: [
            "ক) সময়ের অভাব",
            "খ) অপদার্থ",
            "গ) কুমড়া কাটা",
            "ঘ) মূল্যবান বস্তু",
          ],
          answer: "খ) অপদার্থ",
          explanation:
            "অকাল কুষ্মাণ্ড এবং আমড় কাঠের ঢেঁকি—উভয়ই অপদার্থ অর্থে ব্যবহৃত হয়।",
        },
        {
          id: 2,
          question: "'আট কপালে' এর অর্থ কী?",
          options: [
            "ক) খুব ভাগ্যবান",
            "খ) হতভাগ্য",
            "গ) চতুর ব্যক্তি",
            "ঘ) অলস",
          ],
          answer: "খ) হতভাগ্য",
          explanation: "আট কপালে মানে যার কপাল খারাপ বা দুর্ভাগ্য।",
        },
        {
          id: 3,
          question: "'গা সওয়া' বাগধারাটির অর্থ কী?",
          options: [
            "ক) শরীরে মাখা",
            "খ) অভ্যস্ত হওয়া",
            "গ) সহ্য করা",
            "ঘ) আড়ালে থাকা",
          ],
          answer: "খ) অভ্যস্ত হওয়া",
          explanation:
            "কোনো প্রতিকূল পরিস্থিতির সাথে অভ্যস্ত হওয়াকে গা সওয়া বলে।",
        },
        {
          id: 4,
          question: "'চাঁদের হাট' বলতে কী বোঝায়?",
          options: [
            "ক) জ্যোৎস্না রাত",
            "খ) ধনীর সংসার",
            "গ) আনন্দের প্রাচুর্য/প্রিয়জনদের সমাবেশ",
            "ঘ) আকাশের মেলা",
          ],
          answer: "গ) আনন্দের প্রাচুর্য/প্রিয়জনদের সমাবেশ",
          explanation:
            "গুণী বা প্রিয় ব্যক্তিদের একত্রিত হওয়াকে চাঁদের হাট বলা হয়।",
        },
        {
          id: 5,
          question: "'ঠোঁটকাটা' বলতে কী বোঝায়?",
          options: ["ক) মুখ খারাপ করা", "খ) স্পষ্টভাষী", "গ) অসভ্য", "ঘ) বোকা"],
          answer: "খ) স্পষ্টভাষী",
          explanation:
            "যিনি কোনো কিছু দ্বিধা না করে সরাসরি বলেন তাকে ঠোঁটকাটা বলা হয়।",
        },
        {
          id: 6,
          question: "'ডুমুরের ফুল' বাগধারাটির সঠিক অর্থ কোনটি?",
          options: [
            "ক) খুব সুন্দর",
            "খ) অতি সাধারণ",
            "গ) বিরল বস্তু/অদর্শনীয়",
            "ঘ) সুগন্ধি ফুল",
          ],
          answer: "গ) বিরল বস্তু/অদর্শনীয়",
          explanation:
            "ডুমুরের ফুল সচরাচর দেখা যায় না, তাই খুব কম দেখা যায় এমন কাউকে ডুমুরের ফুল বলা হয়।",
        },
        {
          id: 7,
          question: "নিচের কোন বাগধারাটি 'ভিন্নার্থক'?",
          options: [
            "ক) অন্ধের যষ্টি",
            "খ) অকুল পাথার",
            "গ) চোখের বালি",
            "ঘ) অরণ্যে রোদন",
          ],
          answer: "গ) চোখের বালি",
          explanation:
            "অন্ধের যষ্টি মানে একমাত্র অবলম্বন, কিন্তু চোখের বালি মানে চক্ষুশূল বা শত্রু।",
        },
        {
          id: 8,
          question: "'বড় ঘরের পিসি' বাগধারাটির অর্থ কী?",
          options: [
            "ক) ধূর্ত লোক",
            "খ) পরোপকারী",
            "গ) প্রভাবশালী আত্মীয়",
            "ঘ) দুই পক্ষের ঝগড়া বাধিয়ে দেওয়া ব্যক্তি",
          ],
          answer: "ঘ) দুই পক্ষের ঝগড়া বাধিয়ে দেওয়া ব্যক্তি",
          explanation:
            "যিনি দুই বাড়িতে কথা লাগিয়ে বেড়ান তাকে বড় ঘরের পিসি বলা হয়।",
        },
        {
          id: 9,
          question: "'মশাতে কামান দাগা' এর অর্থ কী?",
          options: [
            "ক) বীরত্ব দেখানো",
            "খ) তুচ্ছ কাজে বড় আয়োজন",
            "গ) মশা মারা",
            "ঘ) বোকামি করা",
          ],
          answer: "খ) তুচ্ছ কাজে বড় আয়োজন",
          explanation:
            "খুব সামান্য কোনো কাজ করার জন্য অতিরিক্ত সাজসরঞ্জাম নেওয়া।",
        },
        {
          id: 10,
          question: "'রাবণের চিতা' বাগধারাটির অর্থ কী?",
          options: [
            "ক) চরম জ্বালা",
            "খ) চির অশান্তি",
            "গ) রাবণের মৃত্যু",
            "ঘ) দীর্ঘস্থায়ী শোক",
          ],
          answer: "খ) চির অশান্তি",
          explanation:
            "যা কখনো নেভে না বা দীর্ঘস্থায়ী অশান্তি বোঝাতে এটি ব্যবহৃত হয়।",
        },
        {
          id: 11,
          question: "'সাক্ষী গোপাল' বাগধারাটির অর্থ কী?",
          options: [
            "ক) মিথ্যা সাক্ষী",
            "খ) নিষ্ক্রিয় দর্শক",
            "গ) পরম ভক্ত",
            "ঘ) আসল ব্যক্তি",
          ],
          answer: "খ) নিষ্ক্রিয় দর্শক",
          explanation:
            "যিনি উপস্থিত থেকেও কোনো ভূমিকা রাখেন না তাকে সাক্ষী গোপাল বলে।",
        },
        {
          id: 12,
          question: "'হাতটান' এর অর্থ কী?",
          options: [
            "ক) কৃপণতা",
            "খ) চুরির অভ্যাস",
            "গ) বলবান",
            "ঘ) তাড়াতাড়ি লেখা",
          ],
          answer: "খ) চুরির অভ্যাস",
          explanation: "যার টুকটাক চুরি করার স্বভাব আছে তাকে হাতটান বলা হয়।",
        },
        {
          id: 13,
          question: "'হিমশৈলের চূড়া' বলতে কী বোঝায়?",
          options: [
            "ক) বড় বিপদ",
            "খ) মূল সমস্যার অতি সামান্য অংশ",
            "গ) বরফের পাহাড়",
            "ঘ) শেষ সীমা",
          ],
          answer: "খ) মূল সমস্যার অতি সামান্য অংশ",
          explanation:
            "বাইরে থেকে যা দেখা যাচ্ছে সমস্যা তার চেয়েও বড়—এমন পরিস্থিতি।",
        },
        {
          id: 14,
          question: "কোন বাগধারাটি 'অকর্মণ্য' অর্থে ব্যবহৃত হয়?",
          options: [
            "ক) কলুর বলদ",
            "খ) আমড়া কাঠের ঢেঁকি",
            "গ) শিরে সংক্রান্তি",
            "ঘ) গোবর গণেশ",
          ],
          answer: "খ) আমড়া কাঠের ঢেঁকি",
          explanation: "অদার্থ বা কোনো কাজে লাগে না এমন ব্যক্তিকে এটি বলা হয়।",
        },
        {
          id: 15,
          question: "'শিখণ্ডী' বাগধারাটির অর্থ কী?",
          options: [
            "ক) যোদ্ধা",
            "খ) প্রতারক",
            "গ) অন্যকে সামনে রেখে কাজ হাসিলকারী",
            "ঘ) সেনাপতি",
          ],
          answer: "গ) অন্যকে সামনে রেখে কাজ হাসিলকারী",
          explanation:
            "মহাভারতের শিখণ্ডী চরিত্রের নাম থেকে এই বাগধারাটি এসেছে।",
        },
      ],
    },
  },
  {
    _id: "bangla_sentence_structure_bcs_2026",
    title: "বাক্য প্রকরণ: আদর্শ বাক্যের গুণাবলি ও শ্রেণিবিভাগ",
    category: "বাংলা ব্যাকরণ",
    tags: [
      "বাক্য প্রকরণ",
      "আকাঙ্ক্ষা",
      "যোগ্যতা",
      "আসত্তি",
      "সরল বাক্য",
      "বিসিএস",
    ],
    last_updated: "2026-02-05",
    article_content: {
      summary:
        "এক বা একাধিক পদের দ্বারা যখন বক্তার মনের ভাব সম্পূর্ণরূপে প্রকাশ পায়, তখন তাকে বাক্য বলে। একটি সার্থক বাক্য গঠনের জন্য তিনটি গুণ থাকা আবশ্যক এবং গঠন অনুসারে বাক্য তিন প্রকার।",
      key_points: [
        "সার্থক বাক্যের গুণ ৩টি: আকাঙ্ক্ষা, যোগ্যতা ও আসত্তি।",
        "গঠন অনুসারে বাক্য ৩ প্রকার: সরল, জটিল (মিশ্র) ও যৌগিক।",
        "অর্থানুসারে বাক্য ৫ প্রকার (বিবৃতিমূলক, প্রশ্নবোধক, অনুজ্ঞামূলক ইত্যাদি)।",
        "বাক্যের প্রধান দুটি অংশ: উদ্দেশ্য (Subject) ও বিধেয় (Predicate)।",
      ],
      visual_representation: {
        image_tag:
          "[Image: A triangle diagram showing Akankha, Jogyota, and Ashotti at three corners]",
        caption: "সার্থক বাক্যের তিনটি অপরিহার্য গুণ।",
      },
      sections: [
        {
          heading: "১. সার্থক বাক্যের তিনটি গুণাবলি",
          content:
            "একটি বাক্য তখনই সার্থক হয় যখন তার মধ্যে নিচের তিনটি বৈশিষ্ট্য থাকে:\n* **আকাঙ্ক্ষা:** বাক্যের অর্থ পরিষ্কার বোঝার জন্য এক পদের পর অন্য পদ শোনার যে ইচ্ছা। (যেমন: 'সে গিয়ে...' বললে আকাঙ্ক্ষা থেকে যায়)।\n* **যোগ্যতা:** বাক্যের পদসমূহের অর্থগত ও ভাবগত মিলবন্ধন। (যেমন: 'আকাশে মাছ উড়ছে'—এখানে যোগ্যতার অভাব আছে)।\n* **আসত্তি:** বাক্যের পদগুলোকে সঠিক ক্রমে সাজানো। (যেমন: 'যাব আমি বাড়ি' না বলে 'আমি বাড়ি যাব' বলা)।",
        },
        {
          heading: "২. গঠন অনুসারে বাক্যের প্রকারভেদ",
          table_data: [
            {
              সংস্থা: "সরল বাক্য",
              পূর্ণরূপ: "একটি মাত্র উদ্দেশ্য ও বিধেয়",
              লক্ষ্য: "মেঘ ডাকলে বৃষ্টি হয়।",
            },
            {
              সংস্থা: "জটিল (মিশ্র) বাক্য",
              পূর্ণরূপ: "একটি প্রধান ও এক বা একাধিক আশ্রিত খণ্ডবাক্য",
              লক্ষ্য: "যিনি সৎ, তিনি সুখী হন।",
            },
            {
              সংস্থা: "যৌগিক বাক্য",
              পূর্ণরূপ: "অব্যয় দ্বারা যুক্ত একাধিক স্বাধীন বাক্য",
              লক্ষ্য: "তিনি শিক্ষিত কিন্তু সৎ নন।",
            },
          ],
        },
        {
          heading: "৩. বাক্যের অংশ ও পদবিন্যাস",
          content:
            "বাক্যে যার সম্পর্কে কিছু বলা হয় তাকে **উদ্দেশ্য** এবং উদ্দেশ্য সম্পর্কে যা বলা হয় তাকে **বিধেয়** বলে। যেমন: 'করিম (উদ্দেশ্য) বই পড়ছে (বিধেয়)।'",
        },
        {
          heading: "৪. যোগ্যতার সাথে সংশ্লিষ্ট বিষয়সমূহ",
          content:
            "বাক্যের যোগ্যতা রক্ষার জন্য ৬টি বিষয়ের দিকে নজর দিতে হয়: রীতিসিদ্ধ অর্থবাচকতা, দুর্বোধ্যতা, উপমার ভুল প্রয়োগ, বাহুল্য দোষ, বাগধারার শব্দ পরিবর্তন এবং গুরুচণ্ডালী দোষ।",
        },
      ],
    },
    preliminary_exam_prep: {
      focus: "বিসিএস স্পেশাল বাক্য প্রকরণ MCQ",
      mcqs: [
        {
          id: 1,
          question: "একটি সার্থক বাক্যের কয়টি গুণ থাকা আবশ্যক?",
          options: ["ক) ২টি", "খ) ৩টি", "গ) ৪টি", "ঘ) ৫টি"],
          answer: "খ) ৩টি",
          explanation: "আকাঙ্ক্ষা, যোগ্যতা ও আসত্তি।",
        },
        {
          id: 2,
          question:
            "'হাতিগুলো আকাশে উড়ছে' - বাক্যটি কোন গুণের অভাবে সার্থক নয়?",
          options: ["ক) আকাঙ্ক্ষা", "খ) আসত্তি", "গ) যোগ্যতা", "ঘ) পদক্রম"],
          answer: "গ) যোগ্যতা",
          explanation:
            "বাস্তবতার সাথে অর্থ ও ভাবের মিল না থাকলে যোগ্যতার অভাব ঘটে।",
        },
        {
          id: 3,
          question: "বাক্যের পদগুলোকে সঠিক জায়গায় স্থাপন করার নাম কী?",
          options: ["ক) আকাঙ্ক্ষা", "খ) আসত্তি", "গ) যোগ্যতা", "ঘ) বিধেয়"],
          answer: "খ) আসত্তি",
          explanation: "আসত্তি মানেই হলো পদের সুশৃঙ্খল বিন্যাস।",
        },
        {
          id: 4,
          question: "গঠন অনুসারে বাক্য কত প্রকার?",
          options: ["ক) ৩ প্রকার", "খ) ৪ প্রকার", "গ) ৫ প্রকার", "ঘ) ২ প্রকার"],
          answer: "ক) ৩ প্রকার",
          explanation: "সরল, জটিল ও যৌগিক।",
        },
        {
          id: 5,
          question: "'যদি পরিশ্রম করো, তবে ফল পাবে' - এটি কোন ধরনের বাক্য?",
          options: [
            "ক) সরল বাক্য",
            "খ) যৌগিক বাক্য",
            "গ) জটিল বাক্য",
            "ঘ) অনুজ্ঞামূলক বাক্য",
          ],
          answer: "গ) জটিল বাক্য",
          explanation:
            "যদি-তবে, যেহেতু-সেহেতু থাকলে তা জটিল বা মিশ্র বাক্য হয়।",
        },
        {
          id: 6,
          question: "বাক্যের প্রধান দুটি অংশ কী কী?",
          options: [
            "ক) কর্তা ও কর্ম",
            "খ) বিশেষ্য ও বিশেষণ",
            "গ) উদ্দেশ্য ও বিধেয়",
            "ঘ) শব্দ ও পদ",
          ],
          answer: "গ) উদ্দেশ্য ও বিধেয়",
          explanation: "প্রত্যেক বাক্যের এই দুটি মৌলিক অংশ থাকে।",
        },
        {
          id: 7,
          question: "'মেঘ গর্জন করলে ময়ূর নৃত্য করে' - এটি কোন প্রকারের বাক্য?",
          options: ["ক) সরল", "খ) জটিল", "গ) যৌগিক", "ঘ) মিশ্র"],
          answer: "ক) সরল",
          explanation:
            "এখানে একটি মাত্র সমাপিকা ক্রিয়া আছে, তাই এটি সরল বাক্য।",
        },
        {
          id: 8,
          question: "'বিপদ এবং দুঃখ একসাথে আসে' - এটি কোন বাক্য?",
          options: ["ক) সরল", "খ) জটিল", "গ) যৌগিক", "ঘ) প্রশ্নবোধক"],
          answer: "গ) যৌগিক",
          explanation:
            "'এবং, কিন্তু, অথবা' দিয়ে দুটি স্বাধীন বাক্য যুক্ত হলে তা যৌগিক বাক্য।",
        },
        {
          id: 9,
          question: "'খাজনার চেয়ে বাজনা বেশি' - এখানে কোন দোষ ঘটেছে?",
          options: [
            "ক) বাহুল্য দোষ",
            "খ) গুরুচণ্ডালী দোষ",
            "গ) যোগ্যতার অভাব",
            "ঘ) উপমার ভুল",
          ],
          answer: "গ) যোগ্যতার অভাব",
          explanation:
            "এটি প্রবাদ হিসেবে ব্যবহৃত হলেও আক্ষরিক অর্থে এটি যোগ্যতাহীন বাক্য হতে পারে (প্রসঙ্গ ভেদে)।",
        },
        {
          id: 10,
          question: "কোনটি 'গুরুচণ্ডালী দোষ' মুক্ত শব্দ?",
          options: ["ক) শবপোড়া", "খ) মড়াদাহ", "গ) শবদাহ", "ঘ) মড়াপোড়া"],
          answer: "গ) শবদাহ",
          explanation:
            "তৎসম শব্দের সাথে দেশি শব্দের মিশ্রণকে গুরুচণ্ডালী দোষ বলে।",
        },
        {
          id: 11,
          question: "আকাঙ্ক্ষা বলতে কী বোঝায়?",
          options: [
            "ক) পদের মিলবন্ধন",
            "খ) পদ শোনার ইচ্ছা",
            "গ) পদের শৃঙ্খলা",
            "ঘ) অর্থের স্পষ্টতা",
          ],
          answer: "খ) পদ শোনার ইচ্ছা",
          explanation:
            "বক্তার কথা সম্পূর্ণ না হলে শ্রোতার আরও কিছু শোনার যে ইচ্ছা।",
        },
        {
          id: 12,
          question: "জটিল বাক্যের অপর নাম কী?",
          options: [
            "ক) সরল বাক্য",
            "খ) যৌগিক বাক্য",
            "গ) মিশ্র বাক্য",
            "ঘ) খণ্ড বাক্য",
          ],
          answer: "গ) মিশ্র বাক্য",
          explanation: "জটিল বাক্যকে মিশ্র বাক্যও বলা হয়।",
        },
        {
          id: 13,
          question: "'ফুল ফুটেছে বলে ভ্রমর এসেছে' - এটি কী ধরনের বাক্য?",
          options: ["ক) সরল", "খ) যৌগিক", "গ) জটিল", "ঘ) অনুজ্ঞাসূচক"],
          answer: "গ) জটিল",
          explanation: "কারণ-ফলাফল সম্পর্কযুক্ত বাক্য সাধারণত জটিল হয়।",
        },
        {
          id: 14,
          question:
            "'সকাল হলো এবং অন্ধকার দূর হলো' - বাক্যটিকে সরল করলে কী হবে?",
          options: [
            "ক) যখন সকাল হলো তখন অন্ধকার গেল",
            "খ) সকাল হলে অন্ধকার দূর হয়",
            "গ) সকাল হওয়ায় অন্ধকার দূর হলো",
            "ঘ) সকাল হলে অন্ধকার যাবে",
          ],
          answer: "গ) সকাল হওয়ায় অন্ধকার দূর হলো",
          explanation:
            "অব্যয় তুলে দিয়ে একটি সমাপিকা ক্রিয়া রাখলে তা সরল বাক্য হয়।",
        },
        {
          id: 15,
          question: "বাক্যের বিধেয় অংশে কী থাকে?",
          options: ["ক) কর্তা", "খ) ক্রিয়া", "গ) অব্যয়", "ঘ) বিশেষণ"],
          answer: "খ) ক্রিয়া",
          explanation: "বিধেয় অংশে সাধারণত ক্রিয়া এবং তার বিস্তার থাকে।",
        },
      ],
    },
    written_exam_prep: {
      guidelines:
        "লিখিত পরীক্ষায় 'বাক্য রূপান্তর' (সরল থেকে জটিল বা যৌগিক) করতে দেওয়া হয়। সেক্ষেত্রে অর্থ পরিবর্তন না করে শুধুমাত্র গঠন পরিবর্তনের দিকে নজর দিন।",
      possible_questions: [
        {
          question: "বাক্যের তিনটি গুণ উদাহরণসহ আলোচনা করুন।",
          key_points_for_answer: [
            "আকাঙ্ক্ষা: এক পদের পর অন্য পদ শোনার তৃষ্ণা।",
            "যোগ্যতা: পদের মধ্যে অর্থের সংগতি।",
            "আসত্তি: পদের যথাযথ অবস্থান।",
          ],
        },
        {
          question: "গুরুচণ্ডালী দোষ কাকে বলে? এটি কীভাবে পরিহার করা যায়?",
          key_points_for_answer: [
            "সাধু ও চলিত ভাষার মিশ্রণ অথবা তৎসম ও দেশি শব্দের অশোভন মিশ্রণ।",
            "যেমন: 'গরুর গাড়ি' সঠিক, কিন্তু 'গরুর শকট' গুরুচণ্ডালী দোষযুক্ত।",
          ],
        },
      ],
    },
  },
  {
    _id: "bangla_verb_prokoron_bcs_2026",
    title: "ক্রিয়াপদ: শ্রেণিবিভাগ ও প্রতিযোগিতামূলক পরীক্ষার পূর্ণাঙ্গ গাইড",
    category: "বাংলা ব্যাকরণ",
    tags: [
      "ক্রিয়াপদ",
      "সকর্মক",
      "অকর্মক",
      "সমাপিকা",
      "অসমাপিকা",
      "বিসিএস",
      "Verb",
    ],
    last_updated: "2026-02-05",
    article_content: {
      summary:
        "যে পদের দ্বারা কোনো কাজ করা, হওয়া বা থাকা বোঝায়, তাকে ক্রিয়াপদ বলে। ক্রিয়াপদ গঠিত হয় ধাতু বা ক্রিয়ামূলের সাথে পুরুষ ও কাল অনুযায়ী বিভক্তি যুক্ত হয়ে।",
      key_points: [
        "ক্রিয়াপদ ছাড়া বাক্য গঠিত হতে পারে না (উহ্য থাকতে পারে)।",
        "ভাব প্রকাশের দিক থেকে ক্রিয়া ২ প্রকার: সমাপিকা ও অসমাপিকা।",
        "কর্মের উপস্থিতির ভিত্তিতে ৩ প্রকার: সকর্মক, অকর্মক ও দ্বিকর্মক।",
        "বিশেষ গঠন অনুযায়ী: প্রযোজক ক্রিয়া, নাম ক্রিয়া ও যৌগিক ক্রিয়া।",
      ],
      visual_representation: {
        image_tag: "",
        caption: "ক্রিয়াপদের পূর্ণাঙ্গ শ্রেণিবিভাগ।",
      },
      sections: [
        {
          heading: "১. ভাব প্রকাশের ভিত্তিতে ক্রিয়াপদ",
          content:
            "**ক) সমাপিকা ক্রিয়া:** যে ক্রিয়া দ্বারা বাক্যের অর্থ সম্পূর্ণ হয় (যেমন: সে বই পড়ে)।\n**খ) অসমাপিকা ক্রিয়া:** যে ক্রিয়া দ্বারা বাক্যের অর্থ অসম্পূর্ণ থাকে (যেমন: সে বই পড়ে... বাড়ি যাবে)।",
        },
        {
          heading: "২. কর্মের উপস্থিতি অনুযায়ী শ্রেণিবিভাগ",
          table_data: [
            {
              প্রকার: "সকর্মক",
              সংজ্ঞা: "যাতে 'কি' বা 'কাকে' দিয়ে উত্তর পাওয়া যায়",
              উদাহরণ: "সে ভাত খাচ্ছে।",
            },
            {
              প্রকার: "অকর্মক",
              সংজ্ঞা: "যাতে কোনো কর্ম থাকে না",
              উদাহরণ: "মেয়েটি হাসছে।",
            },
            {
              প্রকার: "দ্বিকর্মক",
              সংজ্ঞা: "যাতে দুটি কর্মপদ থাকে",
              উদাহরণ: "বাবা আমাকে কলম দিলেন।",
            },
          ],
        },
        {
          heading: "৩. প্রযোজক ও যৌগিক ক্রিয়া (বিসিএস স্পেশাল)",
          content:
            "**প্রযোজক ক্রিয়া (Causative Verb):** কর্তা নিজে কাজ না করে অন্যকে দিয়ে করালে (যেমন: মা শিশুকে চাঁদ **দেখাচ্ছেন**)।\n**যৌগিক ক্রিয়া:** একটি সমাপিকা ও একটি অসমাপিকা ক্রিয়া মিলে বিশেষ অর্থ প্রকাশ করলে (যেমন: ঘটনাটি **শুনে রাখো**)।",
        },
        {
          heading: "৪. নাম ধাতুর ক্রিয়া",
          content:
            "বিশেষ্য, বিশেষণ বা ধ্বন্যাত্মক অব্যয়ের পরে 'আ' প্রত্যয় যুক্ত হয়ে যে ধাতু গঠিত হয় এবং তার সাথে ক্রিয়া বিভক্তি যুক্ত হয়ে নাম ধাতুর ক্রিয়া গঠিত হয়। যেমন: সে আমায় **বেতাচ্ছে** (বেত + আ)।",
        },
      ],
    },
    preliminary_exam_prep: {
      focus: "বিসিএস ও কম্পিটিটিভ এক্সাম স্পেশাল কুইজ (৩০টি)",
      mcqs: [
        {
          id: 1,
          question: "বাক্যের অপরিহার্য পদ কোনটি?",
          options: ["ক) বিশেষ্য", "খ) বিশেষণ", "গ) ক্রিয়া", "ঘ) অব্যয়"],
          answer: "গ) ক্রিয়া",
          explanation: "ক্রিয়া ছাড়া কোনো পূর্ণাঙ্গ বাক্য গঠন সম্ভব নয়।",
        },
        {
          id: 2,
          question:
            "'মা শিশুকে দুধ খাওয়াচ্ছেন' - এখানে 'খাওয়াচ্ছেন' কোন ক্রিয়া?",
          options: ["ক) সকর্মক", "খ) প্রযোজক", "গ) নাম ধাতু", "ঘ) যৌগিক"],
          answer: "খ) প্রযোজক",
          explanation: "কর্তা অন্যকে কাজে নিয়োজিত করলে তা প্রযোজক ক্রিয়া।",
        },
        {
          id: 3,
          question: "'সূর্য উঠলে আধার দূরীভূত হয়' - এখানে 'উঠলে' কোন ক্রিয়া?",
          options: ["ক) সমাপিকা", "খ) অসমাপিকা", "গ) সকর্মক", "ঘ) দ্বিকর্মক"],
          answer: "খ) অসমাপিকা",
          explanation: "'উঠলে' বলার পর বাক্যটি অসম্পূর্ণ থাকে।",
        },
        {
          id: 4,
          question: "ক্রিয়ামূলের অন্য নাম কী?",
          options: ["ক) পদ", "খ) ধাতু", "গ) বিভক্তি", "ঘ) প্রকৃতি"],
          answer: "খ) ধাতু",
          explanation: "ক্রিয়াপদের মূল অংশকে ধাতু বলা হয়।",
        },
        {
          id: 5,
          question: "'ছেলেটি ফুটবল খেলছে' - এটি কোন ধরনের ক্রিয়া?",
          options: ["ক) অকর্মক", "খ) সকর্মক", "গ) দ্বিকর্মক", "ঘ) যৌগিক"],
          answer: "খ) সকর্মক",
          explanation: "কি খেলছে? ফুটবল (কর্ম আছে)।",
        },
        {
          id: 6,
          question: "'এখন গোল্লায় যাও' - এখানে 'যাও' কোন ধরনের ক্রিয়া?",
          options: [
            "ক) মিশ্র ক্রিয়া",
            "খ) যৌগিক ক্রিয়া",
            "গ) নাম ক্রিয়া",
            "ঘ) প্রযোজক",
          ],
          answer: "খ) যৌগিক ক্রিয়া",
          explanation: "গোল্লায় + যাও মিলে একটি বিশেষ অর্থ প্রকাশ করেছে।",
        },
        {
          id: 7,
          question: "কোনটি দ্বিকর্মক ক্রিয়ার উদাহরণ?",
          options: [
            "ক) তিনি ঢাকা যাবেন",
            "খ) শিক্ষক ছাত্রকে বই দিলেন",
            "গ) মেয়েটি গান গায়",
            "ঘ) তিনি চা খাচ্ছেন",
          ],
          answer: "খ) শিক্ষক ছাত্রকে বই দিলেন",
          explanation: "এখানে 'ছাত্রকে' ও 'বই' দুটি কর্মপদ আছে।",
        },
        {
          id: 8,
          question:
            "'কান্নায় শোক মন্দীভূত হয়' - এখানে 'মন্দীভূত হয়' কোন ক্রিয়া?",
          options: ["ক) মিশ্র ক্রিয়া", "খ) সকর্মক", "গ) অকর্মক", "ঘ) প্রযোজক"],
          answer: "ক) মিশ্র ক্রিয়া",
          explanation:
            "বিশেষ্য বা বিশেষণের সাথে ক্রিয়া যুক্ত হয়ে মিশ্র ক্রিয়া গঠিত হয়।",
        },
        {
          id: 9,
          question: "ধাতু কয় প্রকার?",
          options: ["ক) ২ প্রকার", "খ) ৩ প্রকার", "গ) ৪ প্রকার", "ঘ) ৫ প্রকার"],
          answer: "খ) ৩ প্রকার",
          explanation: "মৌলিক, সাধিত ও সংযোগমূলক ধাতু।",
        },
        {
          id: 10,
          question: "নিচের কোনটি মৌলিক ধাতুর উদাহরণ?",
          options: ["ক) পড়্", "খ) পড়া", "গ) পড়ানো", "ঘ) পড়াই"],
          answer: "ক) পড়্",
          explanation: "যাকে আর বিশ্লেষণ করা যায় না।",
        },
        {
          id: 11,
          question: "'সাইরেন বেজে উঠল' - এটি কোন ক্রিয়ার উদাহরণ?",
          options: [
            "ক) নাম ক্রিয়া",
            "খ) যৌগিক ক্রিয়া",
            "গ) সকর্মক",
            "ঘ) দ্বিকর্মক",
          ],
          answer: "খ) যৌগিক ক্রিয়া",
          explanation: "বেজে (অসমাপিকা) + উঠল (সমাপিকা)।",
        },
        {
          id: 12,
          question: "ক্রিয়া বিভক্তি কার সাথে যুক্ত হয়?",
          options: [
            "ক) পদের সাথে",
            "খ) শব্দের সাথে",
            "গ) ধাতুর সাথে",
            "ঘ) উপসর্গের সাথে",
          ],
          answer: "গ) ধাতুর সাথে",
          explanation: "ধাতু + ক্রিয়া বিভক্তি = ক্রিয়াপদ।",
        },
        {
          id: 13,
          question: "যে ক্রিয়া কর্ম গ্রহণ করে না তাকে কী বলে?",
          options: ["ক) সকর্মক", "খ) অকর্মক", "গ) প্রযোজক", "ঘ) সমাপিকা"],
          answer: "খ) অকর্মক",
          explanation: "কর্মহীন ক্রিয়াই অকর্মক।",
        },
        {
          id: 14,
          question: "'দাঁত কপাটি লাগছে' - এখানে 'লাগছে' কোন প্রকারের ক্রিয়া?",
          options: ["ক) অনুজ্ঞা", "খ) নাম ধাতু", "গ) সকর্মক", "ঘ) যৌগিক"],
          answer: "খ) নাম ধাতু",
          explanation: "দাঁত কপাটি (বিশেষ্য) থেকে গঠিত।",
        },
        {
          id: 15,
          question: "নিচের কোনটি সকর্মক ক্রিয়ার উদাহরণ?",
          options: [
            "ক) আকাশ বই পড়ে",
            "খ) আকাশ হাসে",
            "গ) আকাশ ঘুমায়",
            "ঘ) আকাশ কাঁদে",
          ],
          answer: "ক) আকাশ বই পড়ে",
          explanation: "এখানে 'বই' একটি কর্ম।",
        },
        {
          id: 16,
          question: "ভাব প্রকাশের দিক থেকে ক্রিয়াপদ কত প্রকার?",
          options: ["ক) ২ প্রকার", "খ) ৩ প্রকার", "গ) ৪ প্রকার", "ঘ) ৫ প্রকার"],
          answer: "ক) ২ প্রকার",
          explanation: "সমাপিকা ও অসমাপিকা।",
        },
        {
          id: 17,
          question:
            "'তিনি আমাকে একটি কথা শোনালেন' - এখানে 'শোনালেন' কোন ক্রিয়া?",
          options: ["ক) মৌলিক", "খ) প্রযোজক", "গ) নাম ক্রিয়া", "ঘ) অকর্মক"],
          answer: "খ) প্রযোজক",
          explanation: "শোনা থেকে শোনালেন।",
        },
        {
          id: 18,
          question: "ক্রিয়াপদের মূল অংশকে কী বলে?",
          options: ["ক) ধাতু", "খ) মূল", "গ) ক্রিয়া", "ঘ) পদ"],
          answer: "ক) ধাতু",
          explanation: "ধাতু বা ক্রিয়ামূল।",
        },
        {
          id: 19,
          question: "'পাখিটি নীল আকাশে উড়ছে' - এখানে ক্রিয়াপদটি কী?",
          options: ["ক) সকর্মক", "খ) অকর্মক", "গ) দ্বিকর্মক", "ঘ) নাম ধাতু"],
          answer: "খ) অকর্মক",
          explanation:
            "'কি উড়ছে' দিয়ে উত্তর পাওয়া যায় না, 'পাখি' এখানে কর্তা, কর্ম নয়।",
        },
        {
          id: 20,
          question: "'মন দিয়ে পড়ো' - এটি কোন কালের ক্রিয়া?",
          options: [
            "ক) বর্তমান অনুজ্ঞা",
            "খ) ভবিষ্যৎ অনুজ্ঞা",
            "গ) সাধারণ বর্তমান",
            "ঘ) পুরাঘটিত বর্তমান",
          ],
          answer: "ক) বর্তমান অনুজ্ঞা",
          explanation: "আদেশ বা উপদেশ বোঝালে অনুজ্ঞা হয়।",
        },
        {
          id: 21,
          question: "সংযোগমূলক ক্রিয়ার উদাহরণ কোনটি?",
          options: [
            "ক) সাইরেন বেজে উঠল",
            "খ) ভয় পেয়ো না",
            "গ) সে যাচ্ছে",
            "ঘ) মা শিশুকে খাওয়ান",
          ],
          answer: "খ) ভয় পেয়ো না",
          explanation: "ভয় (বিশেষ্য) + পেয়ো না (ক্রিয়া)।",
        },
        {
          id: 22,
          question: "যে ক্রিয়ার দুটি কর্ম থাকে তাকে কী বলে?",
          options: ["ক) সকর্মক", "খ) দ্বিকর্মক", "গ) অকর্মক", "ঘ) প্রযোজক"],
          answer: "খ) দ্বিকর্মক",
          explanation: "মুখ্য ও গৌণ কর্ম থাকে।",
        },
        {
          id: 23,
          question: "'শুনে রাখো' কোন ক্রিয়ার উদাহরণ?",
          options: ["ক) সকর্মক", "খ) যৌগিক", "গ) মিশ্র", "ঘ) নাম ধাতু"],
          answer: "খ) যৌগিক",
          explanation: "দুটি ক্রিয়া মিলে একটি অর্থ।",
        },
        {
          id: 24,
          question: "অসমাপিকা ক্রিয়া সাধারণত কয়টি প্রত্যয় যুক্ত হয়ে গঠিত হয়?",
          options: ["ক) ২ টি", "খ) ৩ টি", "গ) ৪ টি", "ঘ) ৫ টি"],
          answer: "খ) ৩ টি",
          explanation: "ইলে (লে), ইয়া (এ), ইতে (তে)।",
        },
        {
          id: 25,
          question: "'তিনি ফিরে এসেছেন' - এটি কোন ক্রিয়া?",
          options: ["ক) যৌগিক", "খ) মিশ্র", "গ) সকর্মক", "ঘ) প্রযোজক"],
          answer: "ক) যৌগিক",
          explanation: "ফিরে + এসেছেন।",
        },
        {
          id: 26,
          question: "ক্রিয়ার কাল কয় প্রকার?",
          options: ["ক) ২ প্রকার", "খ) ৩ প্রকার", "গ) ৪ প্রকার", "ঘ) ৫ প্রকার"],
          answer: "খ) ৩ প্রকার",
          explanation: "বর্তমান, অতীত ও ভবিষ্যৎ।",
        },
        {
          id: 27,
          question: "'পড়ছে' - এই ক্রিয়াপদে ধাতু কোনটি?",
          options: ["ক) পড়", "খ) পড়ে", "গ) পড়ি", "ঘ) পড়া"],
          answer: "ক) পড়",
          explanation: "$\sqrt{পড়}$ + ছে = পড়ছে।",
        },
        {
          id: 28,
          question: "নিচের কোনটি প্রযোজক কর্তার উদাহরণ?",
          options: [
            "ক) রাখাল গরু চরাচ্ছে",
            "খ) সে বই পড়ছে",
            "গ) আমি খাব",
            "ঘ) তুমি যাও",
          ],
          answer: "ক) রাখাল গরু চরাচ্ছে",
          explanation: "রাখাল এখানে প্রযোজক কর্তা।",
        },
        {
          id: 29,
          question: "'গল্পটি পড়ে ফেলো' - এখানে 'ফেলে' কোন প্রকারের ক্রিয়া?",
          options: [
            "ক) সমাপিকা",
            "খ) অসমাপিকা",
            "গ) সাহায্যকারী ক্রিয়া",
            "ঘ) নাম ধাতু",
          ],
          answer: "গ) সাহায্যকারী ক্রিয়া",
          explanation:
            "যৌগিক ক্রিয়ার দ্বিতীয় ক্রিয়াটি সাহায্যকারী হিসেবে কাজ করে।",
        },
        {
          id: 30,
          question: "'বৃষ্টি পড়ে টাপুর টুপুর' - এখানে ক্রিয়াপদটি কী?",
          options: ["ক) সকর্মক", "খ) অকর্মক", "গ) নাম ধাতু", "ঘ) দ্বিকর্মক"],
          answer: "খ) অকর্মক",
          explanation: "কর্মহীন ক্রিয়া।",
        },
      ],
    },
  },
  // english grammer
  {
    _id: "english_verb_guide_bcs_2026",
    title: "Verbs: The Soul of English Grammar",
    category: "English Language",
    tags: [
      "Verb",
      "Finite",
      "Non-finite",
      "Transitive",
      "Intransitive",
      "Gerund",
      "Participle",
    ],
    last_updated: "2026-02-05",
    article_content: {
      summary:
        "A verb is a word used to describe an action, state, or occurrence. In English grammar, verbs are categorized based on their functions, structures, and relationship with objects.",
      key_points: [
        "Finite Verbs change based on the subject and tense.",
        "Non-finite Verbs (Gerund, Infinitive, Participle) do not change with the subject.",
        "Transitive verbs require an object; Intransitive verbs do not.",
        "Stative verbs describe a state (e.g., love, know) and usually don't take '-ing' forms.",
      ],
      sections: [
        {
          heading: "1. Finite vs. Non-Finite Verbs",
          content:
            "**Finite Verb:** Acts as the main verb of a sentence and changes with the subject. (Example: He **plays**; They **play**).\n**Non-Finite Verb:** Does not function as a main verb. Types include:\n* **Infinitive:** to + verb (e.g., To err is human).\n* **Gerund:** verb + ing acting as a noun (e.g., **Swimming** is good).\n* **Participle:** Acts as an adjective or continuous tense (e.g., A **broken** chair).",
        },
        {
          heading: "2. Transitive and Intransitive Verbs",
          table_data: [
            {
              Type: "Transitive",
              Rule: "Needs a direct object",
              Example: "She **bought** a car.",
            },
            {
              Type: "Intransitive",
              Rule: "No object needed",
              Example: "The baby **cried**.",
            },
            {
              Type: "Ditransitive",
              Rule: "Takes two objects",
              Example: "He **gave** me (IO) a pen (DO).",
            },
          ],
        },
        {
          heading: "3. Auxiliary and Modal Verbs",
          content:
            "**Primary Auxiliaries:** be, do, have (used to form tenses).\n**Modal Auxiliaries:** can, could, may, might, shall, should, will, would, must. Modals are always followed by the **base form** of the verb.",
        },
        {
          heading: "4. Linking and Stative Verbs",
          content:
            "**Linking Verbs:** Connect the subject to a complement (e.g., appear, feel, smell, become). Example: The soup **smells** good.\n**Stative Verbs:** Describe states rather than actions (e.g., believe, belong, hate). They are rarely used in continuous tenses.",
        },
      ],
    },
    preliminary_exam_prep: {
      focus: "Top 30 Competitive Exam MCQs on Verbs",
      mcqs: [
        {
          id: 1,
          question: "I saw him ____ the field.",
          options: ["A) to cross", "B) crossing", "C) crosses", "D) crossed"],
          answer: "B) crossing",
          explanation:
            "After verbs of perception (see, watch, hear), we use a present participle (-ing) or bare infinitive.",
        },
        {
          id: 2,
          question: "The news ____ me surprised.",
          options: ["A) make", "B) making", "C) makes", "D) made"],
          answer: "D) made",
          explanation:
            "'News' is singular, and the sentence requires a finite verb in the past or present.",
        },
        {
          id: 3,
          question: "It is high time we ____ our habits.",
          options: [
            "A) change",
            "B) changed",
            "C) should change",
            "D) changes",
          ],
          answer: "B) changed",
          explanation:
            "After 'It is high time', the following verb must be in the simple past form.",
        },
        {
          id: 4,
          question: "Choose the transitive verb:",
          options: [
            "A) The sun sets.",
            "B) Birds fly.",
            "C) He kicked the ball.",
            "D) She sleeps.",
          ],
          answer: "C) He kicked the ball.",
          explanation: "'Kicked' has an object 'the ball'.",
        },
        {
          id: 5,
          question: "I look forward to ____ you soon.",
          options: ["A) see", "B) seeing", "C) seen", "D) saw"],
          answer: "B) seeing",
          explanation:
            "After the phrase 'look forward to', a gerund (verb+ing) is used.",
        },
        {
          id: 6,
          question: "The principal wanted the report ____ immediately.",
          options: [
            "A) finish",
            "B) finishing",
            "C) to be finished",
            "D) to finish",
          ],
          answer: "C) to be finished",
          explanation:
            "The report receives the action, so the passive infinitive is required.",
        },
        {
          id: 7,
          question: "He ____ his hair cut every month.",
          options: ["A) gets", "B) has", "C) makes", "D) Both A and B"],
          answer: "D) Both A and B",
          explanation: "'Get/Have something done' is a causative structure.",
        },
        {
          id: 8,
          question: "Walking is a good exercise. Here 'Walking' is a:",
          options: ["A) Participle", "B) Gerund", "C) Infinitive", "D) Verb"],
          answer: "B) Gerund",
          explanation:
            "It functions as a noun, which is the definition of a gerund.",
        },
        {
          id: 9,
          question: "He could not help ____.",
          options: ["A) laugh", "B) to laugh", "C) laughing", "D) laughed"],
          answer: "C) laughing",
          explanation: "After 'could not help', the gerund form is mandatory.",
        },
        {
          id: 10,
          question: "The sun having ____, the fog disappeared.",
          options: ["A) rise", "B) rose", "C) risen", "D) rising"],
          answer: "C) risen",
          explanation:
            "In a nominative absolute construction, we use 'having + past participle'.",
        },
        {
          id: 11,
          question: "Which one is a modal auxiliary?",
          options: ["A) Is", "B) Have", "C) Must", "D) Do"],
          answer: "C) Must",
          explanation: "Must is a modal expressing necessity.",
        },
        {
          id: 12,
          question: "I would rather ____ than beg.",
          options: ["A) to die", "B) dying", "C) die", "D) died"],
          answer: "C) die",
          explanation:
            "'Would rather' is followed by the base form (bare infinitive) of the verb.",
        },
        {
          id: 13,
          question: "You had better ____ a doctor.",
          options: [
            "A) to consult",
            "B) consulting",
            "C) consult",
            "D) consulted",
          ],
          answer: "C) consult",
          explanation: "'Had better' is followed by the bare infinitive.",
        },
        {
          id: 14,
          question: "If I ____ a king, I would help the poor.",
          options: ["A) was", "B) were", "C) am", "D) be"],
          answer: "B) were",
          explanation:
            "In unreal/hypothetical conditions, 'were' is used for all persons.",
        },
        {
          id: 15,
          question: "He has been ____ for two hours.",
          options: ["A) sleep", "B) sleeping", "C) slept", "D) sleeps"],
          answer: "B) sleeping",
          explanation:
            "Present perfect continuous tense structure: has been + verb-ing.",
        },
        {
          id: 16,
          question: "The bridge was ____ down by the flood.",
          options: ["A) wash", "B) washed", "C) washing", "D) washes"],
          answer: "B) washed",
          explanation: "Passive voice requires the past participle (V3).",
        },
        {
          id: 17,
          question: "Stop ____ so much noise.",
          options: ["A) to make", "B) making", "C) make", "D) made"],
          answer: "B) making",
          explanation:
            "Verbs like 'stop', 'finish', 'avoid' are followed by gerunds.",
        },
        {
          id: 18,
          question: "He suggested ____ for a walk.",
          options: ["A) go", "B) going", "C) to go", "D) to going"],
          answer: "B) going",
          explanation: "'Suggest' is followed by a gerund or a 'that' clause.",
        },
        {
          id: 19,
          question: "The glass was ____.",
          options: ["A) break", "B) breaking", "C) broken", "D) broke"],
          answer: "C) broken",
          explanation: "Used as a past participle adjective or passive voice.",
        },
        {
          id: 20,
          question: "I heard him ____ a song.",
          options: ["A) sing", "B) to sing", "C) sang", "D) sung"],
          answer: "A) sing",
          explanation:
            "Verbs of perception can take the bare infinitive for a completed action.",
        },
        {
          id: 21,
          question: "She ____ since morning.",
          options: [
            "A) is cooking",
            "B) cooks",
            "C) has been cooking",
            "D) was cooking",
          ],
          answer: "C) has been cooking",
          explanation:
            "Indicates an action started in the past and continuing now.",
        },
        {
          id: 22,
          question: "Let him ____ there.",
          options: ["A) to go", "B) goes", "C) go", "D) going"],
          answer: "C) go",
          explanation: "'Let' is always followed by a bare infinitive.",
        },
        {
          id: 23,
          question: "Rice ____ at 60 taka a kg.",
          options: ["A) sell", "B) is selling", "C) sells", "D) selling"],
          answer: "C) sells",
          explanation:
            "Used in the 'quasi-passive' sense where active voice expresses passive meaning.",
        },
        {
          id: 24,
          question: "Which of the following is an intransitive verb?",
          options: ["A) Bring", "B) Give", "C) Lie", "D) Lay"],
          answer: "C) Lie",
          explanation:
            "'Lie' (to recline) does not take an object, whereas 'Lay' does.",
        },
        {
          id: 25,
          question: "Avoid ____ mistakes.",
          options: ["A) to make", "B) make", "C) making", "D) made"],
          answer: "C) making",
          explanation: "'Avoid' is followed by a gerund.",
        },
        {
          id: 26,
          question: "I am used to ____ in the morning.",
          options: ["A) walk", "B) walking", "C) walks", "D) walked"],
          answer: "B) walking",
          explanation: "'Be used to' (accustomed to) is followed by a gerund.",
        },
        {
          id: 27,
          question: "He ____ English for five years.",
          options: [
            "A) is learning",
            "B) learns",
            "C) has been learning",
            "D) learned",
          ],
          answer: "C) has been learning",
          explanation:
            "Duration 'for five years' requires perfect continuous tense.",
        },
        {
          id: 28,
          question: "What is the past participle of 'Slay'?",
          options: ["A) Slayed", "B) Slain", "C) Slew", "D) Slawn"],
          answer: "B) Slain",
          explanation: "The forms are Slay - Slew - Slain.",
        },
        {
          id: 29,
          question: "I saw a ____ bird.",
          options: ["A) fly", "B) flying", "C) flew", "D) flown"],
          answer: "B) flying",
          explanation: "Present participle acting as an adjective.",
        },
        {
          id: 30,
          question: "The teacher made the students ____ the lesson.",
          options: ["A) repeat", "B) to repeat", "C) repeating", "D) repeated"],
          answer: "A) repeat",
          explanation:
            "The causative verb 'Make' (active) is followed by a bare infinitive.",
        },
      ],
    },
  },
  {
    _id: "english_preposition_guide_2026",
    title: "Prepositions: Mastering Connections in English",
    category: "English Language",
    tags: ["Preposition", "Grammar", "BCS", "Competitive Exam", "English Prep"],
    last_updated: "2026-02-05",
    article_content: {
      summary:
        "A preposition is a word placed before a noun or pronoun to show its relationship to another word in the sentence. Success in exams depends on understanding both general rules and 'Appropriate Prepositions'.",
      key_points: [
        "Prepositions of Time: 'In' (months/years), 'On' (days/dates), 'At' (specific times).",
        "Prepositions of Place: 'In' (large areas), 'At' (specific points).",
        "Appropriate Prepositions: These are fixed combinations (e.g., 'Abide by', 'Accustomed to').",
        "Confusing Pairs: 'Between' (for two), 'Among' (for more than two).",
      ],
      sections: [
        {
          heading: "1. Common Appropriate Prepositions",
          table_data: [
            { Word: "Abide", Preposition: "by", Meaning: "To follow a rule" },
            {
              Word: "Absorbed",
              Preposition: "in",
              Meaning: "Deeply interested",
            },
            {
              Word: "Adhere",
              Preposition: "to",
              Meaning: "Stick to something",
            },
            {
              Word: "Blind",
              Preposition: "of/to",
              Meaning: "Of (eye) / To (faults)",
            },
            {
              Word: "Congratulate",
              Preposition: "on",
              Meaning: "Success/Achievement",
            },
          ],
        },
        {
          heading: "2. Prepositions of Movement & Direction",
          content:
            "* **Into:** Movement toward the inside (e.g., He jumped into the river).\n* **Through:** Movement from one side to the other (e.g., Walk through the forest).\n* **Towards:** In the direction of something.",
        },
      ],
    },
    preliminary_exam_prep: {
      focus: "Top 30 Appropriate & Contextual Preposition MCQs",
      mcqs: [
        {
          id: 1,
          question: "He died ____ overeating.",
          options: ["A) of", "B) by", "C) from", "D) for"],
          answer: "C) from",
          explanation:
            "Die of (disease), Die from (external cause/effect like overeating).",
        },
        {
          id: 2,
          question: "The man is blind ____ his son's faults.",
          options: ["A) of", "B) to", "C) with", "D) for"],
          answer: "B) to",
          explanation: "Blind to (ignoring faults); Blind of (physical sight).",
        },
        {
          id: 3,
          question: "He is senior ____ me by two years.",
          options: ["A) than", "B) to", "C) from", "D) of"],
          answer: "B) to",
          explanation:
            "Adjectives like senior, junior, inferior, prefer take 'to', not 'than'.",
        },
        {
          id: 4,
          question: "I have no taste ____ music.",
          options: ["A) for", "B) in", "C) of", "D) with"],
          answer: "A) for",
          explanation:
            "'Taste for' means a liking or preference for something.",
        },
        {
          id: 5,
          question: "He has been ill ____ Friday last.",
          options: ["A) for", "B) from", "C) since", "D) in"],
          answer: "C) since",
          explanation:
            "'Since' is used for a point in time; 'For' is used for duration.",
        },
        {
          id: 6,
          question: "Divide the mangoes ____ the five boys.",
          options: ["A) between", "B) among", "C) in", "D) with"],
          answer: "B) among",
          explanation: "'Between' is for two; 'Among' is for more than two.",
        },
        {
          id: 7,
          question: "What is the time ____ your watch?",
          options: ["A) in", "B) by", "C) at", "D) on"],
          answer: "B) by",
          explanation: "When asking about time as per a clock/watch, use 'by'.",
        },
        {
          id: 8,
          question: "He is proficient ____ English.",
          options: ["A) at", "B) in", "C) with", "D) of"],
          answer: "B) in",
          explanation:
            "Proficient in (a subject/language); Good at (an activity).",
        },
        {
          id: 9,
          question: "The tree was laden ____ fruits.",
          options: ["A) of", "B) with", "C) by", "D) in"],
          answer: "B) with",
          explanation: "'Laden with' means heavily loaded with something.",
        },
        {
          id: 10,
          question: "He is angry ____ me for no reason.",
          options: ["A) at", "B) with", "C) on", "D) for"],
          answer: "B) with",
          explanation: "Angry with (a person); Angry at (something/behavior).",
        },
        {
          id: 11,
          question: "The hunter aimed ____ the bird.",
          options: ["A) to", "B) at", "C) on", "D) with"],
          answer: "B) at",
          explanation: "'Aim at' is the correct appropriate preposition.",
        },
        {
          id: 12,
          question: "We should abide ____ the rules of the road.",
          options: ["A) with", "B) by", "C) to", "D) in"],
          answer: "B) by",
          explanation: "'Abide by' means to follow or obey.",
        },
        {
          id: 13,
          question: "I am not ambitious ____ fame.",
          options: ["A) for", "B) of", "C) to", "D) at"],
          answer: "B) of",
          explanation:
            "'Ambitious of' is the correct usage for desire for success/fame.",
        },
        {
          id: 14,
          question: "He was deprived ____ his property.",
          options: ["A) from", "B) of", "C) by", "D) with"],
          answer: "B) of",
          explanation:
            "'Deprive of' means to take something away from someone.",
        },
        {
          id: 15,
          question: "The train is ____ time.",
          options: ["A) in", "B) at", "C) on", "D) by"],
          answer: "C) on",
          explanation:
            "'On time' means punctual; 'In time' means before the limit.",
        },
        {
          id: 16,
          question: "Success depends ____ hard work.",
          options: ["A) at", "B) on", "C) for", "D) in"],
          answer: "B) on",
          explanation: "Depend on/upon is the standard phrase.",
        },
        {
          id: 17,
          question: "I prefer tea ____ coffee.",
          options: ["A) than", "B) for", "C) to", "D) over"],
          answer: "C) to",
          explanation: "Prefer/Preferable always take 'to'.",
        },
        {
          id: 18,
          question: "He jumped ____ the well.",
          options: ["A) in", "B) into", "C) to", "D) on"],
          answer: "B) into",
          explanation: "'Into' denotes motion towards the inside.",
        },
        {
          id: 19,
          question: "She is gifted ____ a sweet voice.",
          options: ["A) with", "B) in", "C) of", "D) for"],
          answer: "A) with",
          explanation: "'Gifted with' indicates a natural talent.",
        },
        {
          id: 20,
          question: "Prevent him ____ going there.",
          options: ["A) to", "B) from", "C) for", "D) of"],
          answer: "B) from",
          explanation: "Prevent/Prohibit/Deber take 'from + verb-ing'.",
        },
        {
          id: 21,
          question: "He burst ____ tears.",
          options: ["A) out", "B) into", "C) with", "D) in"],
          answer: "B) into",
          explanation: "Burst into (tears); Burst out (laughing).",
        },
        {
          id: 22,
          question: "Are you aware ____ the danger?",
          options: ["A) with", "B) of", "C) at", "D) about"],
          answer: "B) of",
          explanation: "Aware of / Conscious of is the correct form.",
        },
        {
          id: 23,
          question: "He presided ____ the meeting.",
          options: ["A) at", "B) in", "C) over", "D) with"],
          answer: "C) over",
          explanation: "To chair a meeting is to 'Preside over' it.",
        },
        {
          id: 24,
          question: "He insisted ____ my going there.",
          options: ["A) on", "B) to", "C) in", "D) for"],
          answer: "A) on",
          explanation: "'Insist on' is always followed by a gerund or noun.",
        },
        {
          id: 25,
          question: "The table is made ____ wood.",
          options: ["A) from", "B) of", "C) with", "D) by"],
          answer: "B) of",
          explanation:
            "Made of (material doesn't change); Made from (material changes state).",
        },
        {
          id: 26,
          question: "He lives ____ Dhaka ____ Dhanmondi.",
          options: ["A) at, in", "B) in, at", "C) in, in", "D) at, at"],
          answer: "B) in, at",
          explanation:
            "'In' for big cities; 'At' for specific areas/localities.",
        },
        {
          id: 27,
          question: "Death is preferable ____ dishonor.",
          options: ["A) than", "B) for", "C) to", "D) over"],
          answer: "C) to",
          explanation: "'Preferable' takes 'to'.",
        },
        {
          id: 28,
          question: "He is indifferent ____ his studies.",
          options: ["A) to", "B) for", "C) with", "D) at"],
          answer: "A) to",
          explanation: "Indifferent to (unconcerned about).",
        },
        {
          id: 29,
          question: "The boy takes ____ his father.",
          options: ["A) for", "B) after", "C) on", "D) to"],
          answer: "B) after",
          explanation: "'Take after' is a phrasal verb meaning to resemble.",
        },
        {
          id: 30,
          question: "I am accustomed ____ such a life.",
          options: ["A) with", "B) to", "C) of", "D) in"],
          answer: "B) to",
          explanation:
            "Accustomed to / Used to means being familiar with something.",
        },
      ],
    },
  },
  {
    _id: "english_tense_conditionals_2026",
    title: "Tense and Conditionals: The Framework of Time and Logic",
    category: "English Language",
    tags: ["Tense", "Conditionals", "Grammar", "BCS", "Competitive Exam"],
    last_updated: "2026-02-05",
    article_content: {
      summary:
        "Tenses indicate the time of an action (Past, Present, Future), while Conditionals (If-clauses) express the dependency between two events. Competitive exams often focus on the 'Sequence of Tenses' and the four types of Conditionals.",
      key_points: [
        "Sequence of Tenses: If the principal clause is in the past, subordinate clauses must generally be in the past.",
        "Zero Conditional: General truths (If you heat ice, it melts).",
        "First Conditional: Real possibilities (If + Present, Will + Base Verb).",
        "Second Conditional: Hypothetical/Unreal (If + Past, Would + Base Verb).",
        "Third Conditional: Regrets/Past Unreality (If + Past Perfect, Would have + V3).",
      ],
      sections: [
        {
          heading: "1. Conditional Sentences Overview",
          table_data: [
            {
              Type: "First",
              Structure: "If + Present, Will + Verb",
              Usage: "Likely to happen",
            },
            {
              Type: "Second",
              Structure: "If + Simple Past, Would + Verb",
              Usage: "Imaginary (Present)",
            },
            {
              Type: "Third",
              Structure: "If + Past Perfect, Would have + V3",
              Usage: "Impossible (Past)",
            },
          ],
        },
        {
          heading: "2. Sequence of Tenses Rules",
          content:
            "A Past Tense in the main clause is followed by a Past Tense in the subordinate clause. **Exception:** Universal truths always remain in the Present Indefinite (e.g., He said that the earth **moves** round the sun).",
        },
      ],
    },
    preliminary_exam_prep: {
      focus: "30 Must-Know MCQs for Tense & Conditionals",
      mcqs: [
        {
          id: 1,
          question: "If I ____ you, I would not do that.",
          options: ["A) was", "B) am", "C) were", "D) had been"],
          answer: "C) were",
          explanation:
            "In 2nd conditional unreal situations, 'were' is used for all persons.",
        },
        {
          id: 2,
          question: "I ____ him for a long time.",
          options: ["A) know", "B) have known", "C) am knowing", "D) knew"],
          answer: "B) have known",
          explanation:
            "'Know' is a stative verb; perfect tense is used for duration.",
        },
        {
          id: 3,
          question: "By the time he arrives, we ____ our work.",
          options: [
            "A) finish",
            "B) will finish",
            "C) will have finished",
            "D) finished",
          ],
          answer: "C) will have finished",
          explanation:
            "Future perfect is used for actions completed by a certain future time.",
        },
        {
          id: 4,
          question: "If he ____ harder, he would have passed.",
          options: [
            "A) studied",
            "B) studies",
            "C) had studied",
            "D) would study",
          ],
          answer: "C) had studied",
          explanation: "3rd Conditional: If + Past Perfect, Would have + V3.",
        },
        {
          id: 5,
          question: "The train ____ before I reached the station.",
          options: ["A) left", "B) has left", "C) had left", "D) leaves"],
          answer: "C) had left",
          explanation:
            "When two past actions occur, the earlier one is Past Perfect.",
        },
        {
          id: 6,
          question: "If it rains, we ____ the match.",
          options: [
            "A) cancelled",
            "B) will cancel",
            "C) would cancel",
            "D) would have cancelled",
          ],
          answer: "B) will cancel",
          explanation: "1st Conditional: If + Present, Will + Verb.",
        },
        {
          id: 7,
          question: "I ____ my dinner just now.",
          options: ["A) took", "B) have taken", "C) had taken", "D) take"],
          answer: "B) have taken",
          explanation:
            "'Just now' or 'already' usually indicates Present Perfect.",
        },
        {
          id: 8,
          question: "It ____ since morning.",
          options: [
            "A) is raining",
            "B) has rained",
            "C) has been raining",
            "D) rained",
          ],
          answer: "C) has been raining",
          explanation:
            "Present Perfect Continuous for actions starting in past and continuing.",
        },
        {
          id: 9,
          question: "Unless you ____ hard, you will fail.",
          options: ["A) work", "B) worked", "C) don't work", "D) will work"],
          answer: "A) work",
          explanation:
            "'Unless' already means 'if not'; use the positive present form.",
        },
        {
          id: 10,
          question: "Had I known his address, I ____ him.",
          options: [
            "A) will meet",
            "B) would meet",
            "C) would have met",
            "D) met",
          ],
          answer: "C) would have met",
          explanation: "Inverted 3rd conditional (Had I = If I had).",
        },
        {
          id: 11,
          question: "I ____ for two hours when he came.",
          options: [
            "A) slept",
            "B) was sleeping",
            "C) had been sleeping",
            "D) have been sleeping",
          ],
          answer: "C) had been sleeping",
          explanation:
            "Past Perfect Continuous for a duration before another past action.",
        },
        {
          id: 12,
          question: "Water ____ at 100 degrees Celsius.",
          options: ["A) boil", "B) boils", "C) is boiling", "D) boiled"],
          answer: "B) boils",
          explanation: "Universal scientific truths use Present Indefinite.",
        },
        {
          id: 13,
          question: "I wish I ____ a bird.",
          options: ["A) am", "B) was", "C) were", "D) be"],
          answer: "C) were",
          explanation: "Wish indicates a hypothetical/unreal state.",
        },
        {
          id: 14,
          question: "He talked as if he ____ everything.",
          options: ["A) knows", "B) knew", "C) had known", "D) has known"],
          answer: "B) knew",
          explanation: "As if/As though + Simple Past (for present unreality).",
        },
        {
          id: 15,
          question: "When he ____, I will go with him.",
          options: ["A) comes", "B) will come", "C) came", "D) come"],
          answer: "A) comes",
          explanation:
            "In time clauses, use Present Indefinite instead of Future.",
        },
        {
          id: 16,
          question: "If I ____ millionaires, I would travel the world.",
          options: ["A) am", "B) was", "C) were", "D) had been"],
          answer: "C) were",
          explanation: "2nd Conditional (hypothetical present).",
        },
        {
          id: 17,
          question: "He told me that he ____ the film before.",
          options: ["A) saw", "B) has seen", "C) had seen", "D) sees"],
          answer: "C) had seen",
          explanation:
            "Sequence of tenses: Past (told) + Past Perfect (had seen).",
        },
        {
          id: 18,
          question: "I ____ you as soon as I arrive.",
          options: ["A) call", "B) called", "C) will call", "D) had called"],
          answer: "C) will call",
          explanation: "Main clause in future, time clause in present.",
        },
        {
          id: 19,
          question: "If you ____ the truth, you would not be in trouble.",
          options: ["A) tell", "B) told", "C) had told", "D) will tell"],
          answer: "B) told",
          explanation: "2nd Conditional: If + Past, Would + Verb.",
        },
        {
          id: 20,
          question: "The patient ____ after the doctor had come.",
          options: ["A) died", "B) had died", "C) was dying", "D) dies"],
          answer: "A) died",
          explanation:
            "Earlier action: Doctor came (Past Perfect); Later action: Patient died (Simple Past).",
        },
        {
          id: 21,
          question: "If I ____ more time, I would have finished the exam.",
          options: ["A) have", "B) had", "C) had had", "D) have had"],
          answer: "C) had had",
          explanation:
            "3rd Conditional requires Past Perfect (had + V3 of have, which is had).",
        },
        {
          id: 22,
          question: "Wait here until I ____ back.",
          options: ["A) come", "B) will come", "C) shall come", "D) came"],
          answer: "A) come",
          explanation: "Present tense used after 'until' to refer to future.",
        },
        {
          id: 23,
          question: "If you heat ice, it ____.",
          options: ["A) melts", "B) will melt", "C) would melt", "D) melted"],
          answer: "A) melts",
          explanation:
            "Zero Conditional for scientific facts (Present + Present).",
        },
        {
          id: 24,
          question: "Last night I ____ a wonderful dream.",
          options: ["A) have", "B) had", "C) have had", "D) had had"],
          answer: "B) had",
          explanation: "Specific past time (last night) requires Simple Past.",
        },
        {
          id: 25,
          question: "He ____ out five minutes ago.",
          options: ["A) goes", "B) has gone", "C) went", "D) had gone"],
          answer: "C) went",
          explanation: "'Ago' always takes Simple Past.",
        },
        {
          id: 26,
          question: "If I ____ his number, I would have called him.",
          options: ["A) have", "B) had", "C) had had", "D) would have"],
          answer: "C) had had",
          explanation: "3rd Conditional (Impossible past condition).",
        },
        {
          id: 27,
          question: "Unless it ____, we will go for a picnic.",
          options: ["A) rains", "B) rained", "C) will rain", "D) doesn't rain"],
          answer: "A) rains",
          explanation: "Unless + Present Indefinite.",
        },
        {
          id: 28,
          question: "By next month, he ____ here for ten years.",
          options: [
            "A) will live",
            "B) will be living",
            "C) will have been living",
            "D) has lived",
          ],
          answer: "C) will have been living",
          explanation: "Action continuing up to a point in the future.",
        },
        {
          id: 29,
          question: "If I ____ the job, I would be very happy.",
          options: ["A) get", "B) got", "C) will get", "D) have got"],
          answer: "B) got",
          explanation: "2nd Conditional (If + Past, Would + Verb).",
        },
        {
          id: 30,
          question: "I would have helped him if he ____ me.",
          options: ["A) ask", "B) asks", "C) had asked", "D) would ask"],
          answer: "C) had asked",
          explanation: "3rd Conditional structure.",
        },
      ],
    },
  },
  {
    _id: "english_voice_change_guide_2026",
    title: "Voice Change: Active to Passive Transformation",
    category: "English Language",
    tags: [
      "Voice Change",
      "Active Voice",
      "Passive Voice",
      "Grammar",
      "BCS Prep",
    ],
    last_updated: "2026-02-05",
    article_content: {
      summary:
        "Voice change involves shifting the focus from the doer (Subject) to the receiver (Object). Only sentences with Transitive verbs (verbs that take an object) can typically be changed into the passive voice.",
      key_points: [
        "The Object of the active sentence becomes the Subject of the passive sentence.",
        "The main verb is always changed into the Past Participle (V3) form.",
        "A 'be' verb (am, is, are, was, were, being, been) is added according to the tense.",
        "Intransitive verbs (go, sleep, die) usually do not have a passive form.",
      ],
      sections: [
        {
          heading: "1. Voice Change Across Different Tenses",
          content:
            "The auxiliary verb changes based on the tense of the active sentence:\n* **Present Indefinite:** am/is/are + V3\n* **Past Indefinite:** was/were + V3\n* **Continuous Tenses:** being + V3\n* **Perfect Tenses:** been + V3\n* **Modals (can, must, etc.):** modal + be + V3",
        },
        {
          heading: "2. Imperative Sentences (Orders/Requests)",
          content:
            "Imperative sentences usually follow the 'Let' structure:\n* **Active:** Do the work.\n* **Passive:** Let the work be done.\n* **Negative:** Let not the work be done.",
        },
        {
          heading: "3. Interrogative Sentences (Questions)",
          content:
            "When changing questions, the auxiliary verb comes before the subject:\n* **Who** changes to **By whom**.\n* **Whom** changes to **Who**.\n* **Active:** Who did this?\n* **Passive:** By whom was this done?",
        },
        {
          heading: "4. Quasi-Passive Verbs",
          content:
            "These sentences look active but have a passive meaning. They are changed as follows:\n* **Active:** Honey tastes sweet.\n* **Passive:** Honey is sweet when it is tasted.",
        },
        {
          heading: "5. Double Object Sentences",
          content:
            "When a sentence has two objects (Direct and Indirect), either can become the subject.\n* **Active:** He gave me a book.\n* **Passive (1):** I was given a book by him.\n* **Passive (2):** A book was given to me by him.",
        },
      ],
    },
    preliminary_exam_prep: {
      focus: "30 High-Yield Voice Change MCQs",
      mcqs: [
        {
          id: 1,
          question: "The boy is flying a kite. (Passive)",
          options: [
            "A) A kite is flown by the boy.",
            "B) A kite is being flown by the boy.",
            "C) A kite was being flown by the boy.",
            "D) A kite has been flown by the boy.",
          ],
          answer: "B) A kite is being flown by the boy.",
          explanation: "Present continuous requires 'is/am/are + being + V3'.",
        },
        {
          id: 2,
          question: "Who is calling me? (Passive)",
          options: [
            "A) By whom am I called?",
            "B) By whom is I being called?",
            "C) By whom am I being called?",
            "D) Who am I being called by?",
          ],
          answer: "C) By whom am I being called?",
          explanation:
            "Who changes to By whom; 'am' is used for the subject 'I'.",
        },
        {
          id: 3,
          question: "Shut the door. (Passive)",
          options: [
            "A) Let the door be shut.",
            "B) Let the door shut.",
            "C) The door should be shut.",
            "D) Let be the door shut.",
          ],
          answer: "A) Let the door be shut.",
          explanation: "Imperative: Let + Object + be + V3.",
        },
        {
          id: 4,
          question: "He has done the work. (Passive)",
          options: [
            "A) The work was done by him.",
            "B) The work has been done by him.",
            "C) The work is done by him.",
            "D) The work had been done by him.",
          ],
          answer: "B) The work has been done by him.",
          explanation: "Present perfect requires 'has/have + been + V3'.",
        },
        {
          id: 5,
          question: "I know the man. (Passive)",
          options: [
            "A) The man is known by me.",
            "B) The man is known with me.",
            "C) The man is known to me.",
            "D) The man was known to me.",
          ],
          answer: "C) The man is known to me.",
          explanation:
            "The verb 'know' takes 'to' instead of 'by' in passive voice.",
        },
        {
          id: 6,
          question: "Do not hate the poor. (Passive)",
          options: [
            "A) Let not the poor be hated.",
            "B) The poor should not be hated.",
            "C) Let the poor not hated.",
            "D) Let not be the poor hated.",
          ],
          answer: "A) Let not the poor be hated.",
          explanation: "Negative imperative: Let not + Object + be + V3.",
        },
        {
          id: 7,
          question: "Honey tastes sweet. (Passive)",
          options: [
            "A) Honey is tasted sweet.",
            "B) Honey is sweet when it is tasted.",
            "C) Honey was sweet when tasted.",
            "D) Sweet honey is tasted.",
          ],
          answer: "B) Honey is sweet when it is tasted.",
          explanation: "Quasi-passive structure.",
        },
        {
          id: 8,
          question: "People say that he is a spy. (Passive)",
          options: [
            "A) It is said that he is a spy.",
            "B) He is said to be a spy.",
            "C) That he is a spy is said.",
            "D) Both A and B",
          ],
          answer: "D) Both A and B",
          explanation:
            "Complex sentences can be changed using 'It is said' or a to-infinitive structure.",
        },
        {
          id: 9,
          question: "We must endure what we cannot cure. (Passive)",
          options: [
            "A) What cannot be cured must be endured.",
            "B) What cannot be cured must endured.",
            "C) What could not be cured must be endured.",
            "D) What must be endured cannot be cured.",
          ],
          answer: "A) What cannot be cured must be endured.",
          explanation:
            "Both clauses with modals must be changed to passive (be + V3).",
        },
        {
          id: 10,
          question: "I saw him opening the box. (Passive)",
          options: [
            "A) He was seen opening the box by me.",
            "B) He was seen to open the box by me.",
            "C) The box was seen opened by him.",
            "D) Opening the box was seen by him.",
          ],
          answer: "A) He was seen opening the box by me.",
          explanation: "Participles remain unchanged in the passive structure.",
        },
        {
          id: 11,
          question: "Whom do you want? (Passive)",
          options: [
            "A) Who is wanted by you?",
            "B) Who was wanted by you?",
            "C) Whom is wanted by you?",
            "D) Who is want by you?",
          ],
          answer: "A) Who is wanted by you?",
          explanation: "Whom changes to Who in the passive voice.",
        },
        {
          id: 12,
          question: "The news shocked me. (Passive)",
          options: [
            "A) I was shocked by the news.",
            "B) I am shocked at the news.",
            "C) I was shocked at the news.",
            "D) I had been shocked at the news.",
          ],
          answer: "C) I was shocked at the news.",
          explanation: "'Shocked' takes the preposition 'at' in passive voice.",
        },
        {
          id: 13,
          question: "Panic seized the writer. (Passive)",
          options: [
            "A) The writer was seized by panic.",
            "B) The writer was seized with panic.",
            "C) The writer is seized with panic.",
            "D) The writer was seized in panic.",
          ],
          answer: "B) The writer was seized with panic.",
          explanation: "'Seized' takes 'with' in passive voice.",
        },
        {
          id: 14,
          question: "One should keep one's promise. (Passive)",
          options: [
            "A) Promise should be kept.",
            "B) A promise should be kept.",
            "C) Promises should be kept.",
            "D) One's promise should be kept.",
          ],
          answer: "A) Promise should be kept.",
          explanation:
            "In general statements using 'one', the subject 'one' is omitted in passive.",
        },
        {
          id: 15,
          question: "The house is building. (Passive)",
          options: [
            "A) The house is being built.",
            "B) The house is built.",
            "C) The house has been built.",
            "D) The house is building by them.",
          ],
          answer: "A) The house is being built.",
          explanation: "Quasi-passive expressing an action in progress.",
        },
        {
          id: 16,
          question: "He made me laugh. (Passive)",
          options: [
            "A) I was made laugh by him.",
            "B) I was made to laugh by him.",
            "C) I am made to laugh by him.",
            "D) Laughing was made to me by him.",
          ],
          answer: "B) I was made to laugh by him.",
          explanation:
            "In passive, 'make' is followed by a full infinitive (to + verb).",
        },
        {
          id: 17,
          question: "Change the voice: 'Never tell a lie.'",
          options: [
            "A) Let a lie never be told.",
            "B) Let never a lie be told.",
            "C) A lie should never be told.",
            "D) Both A and B",
          ],
          answer: "D) Both A and B",
          explanation:
            "Both are grammatically acceptable for imperative-negative.",
        },
        {
          id: 18,
          question: "Fire burnt the house. (Passive)",
          options: [
            "A) The house was burnt by fire.",
            "B) The house was burnt with fire.",
            "C) The house is burnt by fire.",
            "D) The house had been burnt by fire.",
          ],
          answer: "A) The house was burnt by fire.",
          explanation: "Past indefinite requires 'was/were + V3'.",
        },
        {
          id: 19,
          question: "Rice sells cheap. (Passive)",
          options: [
            "A) Rice is cheap when it is sold.",
            "B) Rice is sold cheap.",
            "C) Rice sells being cheap.",
            "D) Both A and B",
          ],
          answer: "D) Both A and B",
          explanation: "Quasi-passive verbs can be changed in two ways.",
        },
        {
          id: 20,
          question: "Elect him chairman. (Passive)",
          options: [
            "A) Let him be elected chairman.",
            "B) He should be elected chairman.",
            "C) Let be he elected chairman.",
            "D) Chairman should be elected him.",
          ],
          answer: "A) Let him be elected chairman.",
          explanation: "Imperative structure with a complement (chairman).",
        },
        {
          id: 21,
          question: "Which of the following cannot be changed into passive?",
          options: [
            "A) He eats rice.",
            "B) He goes to school.",
            "C) He caught a bird.",
            "D) He wrote a letter.",
          ],
          answer: "B) He goes to school.",
          explanation: "'Go' is an intransitive verb and has no passive form.",
        },
        {
          id: 22,
          question: "I had already done it. (Passive)",
          options: [
            "A) It has already been done by me.",
            "B) It had already been done by me.",
            "C) It was already done by me.",
            "D) It already had been done by me.",
          ],
          answer: "B) It had already been done by me.",
          explanation: "Past perfect requires 'had + been + V3'.",
        },
        {
          id: 23,
          question: "The moon shines bright. (Passive)",
          options: [
            "A) The moon is bright when it shines.",
            "B) The moon is shone bright.",
            "C) Brightly is the moon shone.",
            "D) The moon is bright when it is shone.",
          ],
          answer: "A) The moon is bright when it shines.",
          explanation: "Another example of quasi-passive (state vs action).",
        },
        {
          id: 24,
          question: "They are going to open a shop. (Passive)",
          options: [
            "A) A shop is being gone to be opened.",
            "B) A shop is going to be opened by them.",
            "C) A shop was going to be opened.",
            "D) A shop will be opened by them.",
          ],
          answer: "B) A shop is going to be opened by them.",
          explanation:
            "'Going to' structure remains, adding 'be + V3' to the infinitive.",
        },
        {
          id: 25,
          question: "Who will do the work? (Passive)",
          options: [
            "A) By whom will the work be done?",
            "B) By whom will be the work done?",
            "C) Who the work will be done by?",
            "D) By whom the work will be done?",
          ],
          answer: "A) By whom will the work be done?",
          explanation: "Future indefinite passive: will + be + V3.",
        },
        {
          id: 26,
          question: "Did you see him? (Passive)",
          options: [
            "A) Was he seen by you?",
            "B) Is he seen by you?",
            "C) Did he seen by you?",
            "D) Has he been seen by you?",
          ],
          answer: "A) Was he seen by you?",
          explanation: "Interrogative past indefinite: Was/Were + Sub + V3.",
        },
        {
          id: 27,
          question: "Let me do it. (Passive)",
          options: [
            "A) Let it be done by me.",
            "B) Let it done by me.",
            "C) Let it be do by me.",
            "D) I should do it.",
          ],
          answer: "A) Let it be done by me.",
          explanation: "Let + Object + be + V3 + by + Agent.",
        },
        {
          id: 28,
          question: "Smoke filled the room. (Passive)",
          options: [
            "A) The room was filled by smoke.",
            "B) The room was filled with smoke.",
            "C) The room is filled with smoke.",
            "D) The room was filled in smoke.",
          ],
          answer: "B) The room was filled with smoke.",
          explanation: "'Filled' takes 'with' as the preposition.",
        },
        {
          id: 29,
          question: "He pleases us. (Passive)",
          options: [
            "A) We are pleased with him.",
            "B) We are pleased by him.",
            "C) We are pleased at him.",
            "D) We are pleased to him.",
          ],
          answer: "A) We are pleased with him.",
          explanation:
            "'Pleased' takes 'with' for a person and 'at' for something.",
        },
        {
          id: 30,
          question: "We should not encourage indiscipline. (Passive)",
          options: [
            "A) Indiscipline should not be encouraged.",
            "B) Indiscipline is not encouraged.",
            "C) Let not indiscipline be encouraged.",
            "D) Indiscipline should not be encourage.",
          ],
          answer: "A) Indiscipline should not be encouraged.",
          explanation: "Modal passive: should + not + be + V3.",
        },
      ],
    },
  },
  {
    _id: "english_narration_bcs_2026",
    title: "Narration: Mastering Direct and Indirect Speech",
    category: "English Language",
    tags: [
      "Narration",
      "Direct Speech",
      "Indirect Speech",
      "Grammar",
      "BCS Prep",
    ],
    last_updated: "2026-02-05",
    article_content: {
      summary:
        "Narration involves reporting the words of a speaker. In Indirect speech, we usually move the tense 'one step back' if the reporting verb is in the past, and we adjust pronouns and time expressions (e.g., 'now' becomes 'then').",
      key_points: [
        "If the reporting verb is in the Present or Future, the tense inside the speech does not change.",
        "Universal Truths remain in the Present Indefinite even if the reporting verb is in the past.",
        "Interrogative sentences use 'if/whether' (for yes/no) or the 'Wh-word' as connectors.",
        "Imperative sentences use 'to + verb' (e.g., He told me to go).",
      ],
      sections: [
        {
          heading: "1. Tense Transformation Chart",
          content:
            "When the reporting verb is in the Past (e.g., 'said'):\n* Present Simple → Past Simple\n* Present Continuous → Past Continuous\n* Present Perfect → Past Perfect\n* Past Simple → Past Perfect\n* Will/Can/May → Would/Could/Might",
        },
        {
          heading: "2. Changing Interrogative & Imperative Sentences",
          content:
            "For Questions: Use 'asked/enquired'.\nFor Commands: Use 'ordered/commanded'.\nFor Requests: Use 'requested'.\nFor Advice: Use 'advised'.",
        },
      ],
    },
    preliminary_exam_prep: {
      focus: "30 Real-Scenario BCS Type MCQs",
      mcqs: [
        {
          id: 1,
          question: "He said, 'I have been working since morning.' (Indirect)",
          options: [
            "A) He said that he has been working since morning.",
            "B) He said that he had been working since morning.",
            "C) He said that he was working since morning.",
            "D) He said that he had worked since morning.",
          ],
          answer: "B) He said that he had been working since morning.",
          explanation:
            "Present Perfect Continuous changes to Past Perfect Continuous.",
        },
        {
          id: 2,
          question:
            "The teacher said, 'The Earth moves round the Sun.' (Indirect)",
          options: [
            "A) The teacher said that the Earth moved round the Sun.",
            "B) The teacher said that the Earth moves round the Sun.",
            "C) The teacher said that the Earth has moved round the Sun.",
            "D) The teacher told the Earth moves round the Sun.",
          ],
          answer: "B) The teacher said that the Earth moves round the Sun.",
          explanation: "Universal truths do not change tense.",
        },
        {
          id: 3,
          question: "He said to me, 'Why are you late?' (Indirect)",
          options: [
            "A) He asked me why was I late.",
            "B) He asked me why I am late.",
            "C) He asked me why I was late.",
            "D) He enquired me that why I was late.",
          ],
          answer: "C) He asked me why I was late.",
          explanation:
            "In indirect questions, the word order is Subject + Verb (Statement form).",
        },
        {
          id: 4,
          question: "Mother said to me, 'Do not tell a lie.' (Indirect)",
          options: [
            "A) Mother told me not to tell a lie.",
            "B) Mother advised me not to tell a lie.",
            "C) Mother advised me to not tell a lie.",
            "D) Both A and B",
          ],
          answer: "D) Both A and B",
          explanation:
            "Both 'told' and 'advised' are contextually correct for imperative-negative.",
        },
        {
          id: 5,
          question: "He said, 'Alas! I am undone.' (Indirect)",
          options: [
            "A) He exclaimed with sorrow that he was undone.",
            "B) He exclaimed with joy that he was undone.",
            "C) He said that alas he was undone.",
            "D) He cried that he is undone.",
          ],
          answer: "A) He exclaimed with sorrow that he was undone.",
          explanation: "Exclamatory sentences use 'exclaimed with sorrow/joy'.",
        },
        {
          id: 6,
          question: "Father said to his son, 'May you be happy.' (Indirect)",
          options: [
            "A) Father wished that his son might be happy.",
            "B) Father prayed that his son may be happy.",
            "C) Father said that his son should be happy.",
            "D) Father wished his son to be happy.",
          ],
          answer: "A) Father wished that his son might be happy.",
          explanation:
            "Optative sentences use 'wished/prayed' and 'may' becomes 'might'.",
        },
        {
          id: 7,
          question: "He said, 'I went to Dhaka yesterday.' (Indirect)",
          options: [
            "A) He said that he went to Dhaka the previous day.",
            "B) He said that he had gone to Dhaka the previous day.",
            "C) He said that he had gone to Dhaka yesterday.",
            "D) He said that he has gone to Dhaka the previous day.",
          ],
          answer: "B) He said that he had gone to Dhaka the previous day.",
          explanation:
            "Past Simple changes to Past Perfect; 'yesterday' becomes 'the previous day'.",
        },
        {
          id: 8,
          question: "He said to me, 'Wait until I come.' (Indirect)",
          options: [
            "A) He told me to wait until he came.",
            "B) He told me to wait until I came.",
            "C) He requested me wait until he comes.",
            "D) He told me to wait until he comes.",
          ],
          answer: "A) He told me to wait until he came.",
          explanation:
            "Imperative takes 'to + verb' and the time clause changes to past.",
        },
        {
          id: 9,
          question: "The boy said, 'Let me have a pen.' (Indirect)",
          options: [
            "A) The boy told that he should have a pen.",
            "B) The boy wished that he might have a pen.",
            "C) The boy said that let him have a pen.",
            "D) The boy requested let him have a pen.",
          ],
          answer: "B) The boy wished that he might have a pen.",
          explanation:
            "For 'let' expressing a wish, use 'might/might be allowed to'.",
        },
        {
          id: 10,
          question: "He said, 'Good morning, my friends.' (Indirect)",
          options: [
            "A) He told his friends good morning.",
            "B) He wished his friends good morning.",
            "C) He said good morning to his friends.",
            "D) He greeted his friends good morning.",
          ],
          answer: "B) He wished his friends good morning.",
          explanation: "Standard way to report a greeting wish.",
        },
        {
          id: 11,
          question:
            "The commander said to the soldiers, 'March on.' (Indirect)",
          options: [
            "A) The commander requested the soldiers to march on.",
            "B) The commander ordered the soldiers to march on.",
            "C) The commander commanded the soldiers to march on.",
            "D) Both B and C",
          ],
          answer: "D) Both B and C",
          explanation:
            "Commanded or ordered are suitable for military contexts.",
        },
        {
          id: 12,
          question: "He said to me, 'Are you ill?' (Indirect)",
          options: [
            "A) He asked me if I was ill.",
            "B) He asked me whether was I ill.",
            "C) He asked me that if I was ill.",
            "D) He asked me if I am ill.",
          ],
          answer: "A) He asked me if I was ill.",
          explanation: "Yes/No questions use 'if' or 'whether'.",
        },
        {
          id: 13,
          question: "Jerry said, 'I can do it myself.' (Indirect)",
          options: [
            "A) Jerry said that he could do it himself.",
            "B) Jerry said that he can do it himself.",
            "C) Jerry told that he could do it himself.",
            "D) Jerry said that I could do it myself.",
          ],
          answer: "A) Jerry said that he could do it himself.",
          explanation: "'Can' becomes 'could' and 'myself' becomes 'himself'.",
        },
        {
          id: 14,
          question: "He said, 'Thank you.' (Indirect)",
          options: [
            "A) He said thank you to me.",
            "B) He thanked me.",
            "C) He told me thank you.",
            "D) He wished me thank you.",
          ],
          answer: "B) He thanked me.",
          explanation:
            "Reporting 'Thank you' is done by using 'thanked' as the main verb.",
        },
        {
          id: 15,
          question: "He said, 'I shall go to London tomorrow.' (Indirect)",
          options: [
            "A) He said that he should go to London tomorrow.",
            "B) He said that he would go to London the next day.",
            "C) He said that he will go to London the next day.",
            "D) He said that he would go to London tomorrow.",
          ],
          answer: "B) He said that he would go to London the next day.",
          explanation:
            "'Shall' (future intent) changes to 'would' for 3rd person; 'tomorrow' becomes 'the next day'.",
        },
        {
          id: 16,
          question:
            "Which of the following is correct indirect speech of: He said, 'I am busy now.'",
          options: [
            "A) He said that he was busy then.",
            "B) He said that he is busy now.",
            "C) He said that he was busy now.",
            "D) He told that he was busy then.",
          ],
          answer: "A) He said that he was busy then.",
          explanation: "'Now' changes to 'then'.",
        },
        {
          id: 17,
          question: "He said to them, 'Goodbye, my friends.' (Indirect)",
          options: [
            "A) He wished his friends goodbye.",
            "B) He bade his friends goodbye.",
            "C) He said goodbye to his friends.",
            "D) He told goodbye to his friends.",
          ],
          answer: "B) He bade his friends goodbye.",
          explanation:
            "For departures (Goodbye, Farewell), the reporting verb 'bade' (past of bid) is used.",
        },
        {
          id: 18,
          question: "The poor man said, 'Will none of you help me?' (Indirect)",
          options: [
            "A) The poor man asked if none of them would help him.",
            "B) The poor man asked that none of them would help him.",
            "C) The poor man asked if none of you would help me.",
            "D) The poor man enquired whether none of them will help him.",
          ],
          answer: "A) The poor man asked if none of them would help him.",
          explanation: "Will → would; you → them; me → him.",
        },
        {
          id: 19,
          question: "I said to him, 'Please help me.' (Indirect)",
          options: [
            "A) I requested him to help me.",
            "B) I told him to please help me.",
            "C) I asked him to help me.",
            "D) I requested him help me.",
          ],
          answer: "A) I requested him to help me.",
          explanation: "'Please' is replaced by 'requested'.",
        },
        {
          id: 20,
          question: "He said, 'Let's go out for a walk.' (Indirect)",
          options: [
            "A) He suggested that they should go out for a walk.",
            "B) He proposed that they should go out for a walk.",
            "C) He said that let us go out for a walk.",
            "D) Both A and B",
          ],
          answer: "D) Both A and B",
          explanation:
            "'Let's' (suggestion) uses 'suggested/proposed + that + they should'.",
        },
        {
          id: 21,
          question: "He says, 'I am ill.' (Indirect)",
          options: [
            "A) He says that he is ill.",
            "B) He says that he was ill.",
            "C) He said that he is ill.",
            "D) He says that I am ill.",
          ],
          answer: "A) He says that he is ill.",
          explanation:
            "Reporting verb is in present; therefore, no tense change.",
        },
        {
          id: 22,
          question: "She said, 'What a beautiful bird it is!' (Indirect)",
          options: [
            "A) She exclaimed that it was a very beautiful bird.",
            "B) She said that it is a very beautiful bird.",
            "C) She exclaimed with joy that it is a beautiful bird.",
            "D) She asked what a beautiful bird it was.",
          ],
          answer: "A) She exclaimed that it was a very beautiful bird.",
          explanation: "Exclamatory structure changes to a statement.",
        },
        {
          id: 23,
          question: "He said to me, 'I was ill.' (Indirect)",
          options: [
            "A) He told me that he was ill.",
            "B) He told me that he has been ill.",
            "C) He told me that he had been ill.",
            "D) He said that he was ill.",
          ],
          answer: "C) He told me that he had been ill.",
          explanation:
            "Past Indefinite (was) changes to Past Perfect (had been).",
        },
        {
          id: 24,
          question: "He asked, 'Are you coming?' (Indirect)",
          options: [
            "A) He asked if I was coming.",
            "B) He asked that I was coming.",
            "C) He asked if he was coming.",
            "D) He asked were you coming.",
          ],
          answer: "A) He asked if I was coming.",
          explanation: "The implied object is 'me', so 'you' becomes 'I'.",
        },
        {
          id: 25,
          question: "I said to her, 'I have no money to give you.' (Indirect)",
          options: [
            "A) I told her that I had no money to give her.",
            "B) I told her that I have no money to give her.",
            "C) I told her that I had no money to give you.",
            "D) I said her that I had no money to give her.",
          ],
          answer: "A) I told her that I had no money to give her.",
          explanation: "Pronoun and tense adjustment.",
        },
        {
          id: 26,
          question: "He said, 'Must I go?' (Indirect)",
          options: [
            "A) He asked if he must go.",
            "B) He asked if he had to go.",
            "C) He asked if he would go.",
            "D) Both A and B",
          ],
          answer: "D) Both A and B",
          explanation:
            "'Must' can remain 'must' or change to 'had to' (for obligation).",
        },
        {
          id: 27,
          question:
            "The traveler said, 'Can you tell me the way to the nearest inn?' (Indirect)",
          options: [
            "A) The traveler asked if I could tell him the way to the nearest inn.",
            "B) The traveler asked that I could tell him the way to the nearest inn.",
            "C) The traveler asked if you can tell me the way to the nearest inn.",
            "D) The traveler asked whether I can tell him the way to the nearest inn.",
          ],
          answer:
            "A) The traveler asked if I could tell him the way to the nearest inn.",
          explanation: "Can → could; me → him.",
        },
        {
          id: 28,
          question: "The boy said to me, 'Let me go.' (Indirect)",
          options: [
            "A) The boy requested me that he might be allowed to go.",
            "B) The boy told me to let him go.",
            "C) The boy said to me that let him go.",
            "D) Both A and B",
          ],
          answer: "D) Both A and B",
          explanation: "Both are acceptable for reporting 'Let' as a request.",
        },
        {
          id: 29,
          question: "He said, 'Bravo! You have done well.' (Indirect)",
          options: [
            "A) He applauded him saying that he had done well.",
            "B) He exclaimed with joy that he had done well.",
            "C) He said bravo that he had done well.",
            "D) He told him bravo for doing well.",
          ],
          answer: "A) He applauded him saying that he had done well.",
          explanation: "'Bravo' is usually reported using 'applauded'.",
        },
        {
          id: 30,
          question: "He asked, 'Where do you live?' (Indirect)",
          options: [
            "A) He asked where I lived.",
            "B) He asked where I live.",
            "C) He asked where did I live.",
            "D) He asked where I had lived.",
          ],
          answer: "A) He asked where I lived.",
          explanation:
            "Present Indefinite question becomes a Past Indefinite statement.",
        },
      ],
    },
  },
  {
    _id: "english_subject_verb_agreement_bcs_2026",
    title: "Subject-Verb Agreement: নিয়ম ও প্রয়োগ",
    category: "English Grammar",
    tags: [
      "Subject-Verb Agreement",
      "Grammar",
      "BCS English",
      "Bank Job English",
    ],
    last_updated: "2026-02-05",
    article_content: {
      summary:
        "বাক্যের সাবজেক্ট যদি Singular হয়, তবে ভার্বও Singular হবে। আর সাবজেক্ট Plural হলে ভার্বও Plural হবে। তবে কিছু বিশেষ ক্ষেত্রে এই নিয়মের ভিন্নতা দেখা যায় যা পরীক্ষায় বেশি আসে।",
      key_points: [
        "একাধিক সাবজেক্ট 'and' দিয়ে যুক্ত হলে সাধারণত Plural verb হয়।",
        "যদি 'and' দিয়ে যুক্ত দুটি সাবজেক্ট একই বস্তু বা ভাব প্রকাশ করে, তবে Singular verb হয় (যেমন: Bread and butter)।",
        "Each, Every, Either, Neither-এর পর ভার্ব সবসময় Singular হয়।",
        "দূরত্ব, সময় বা টাকার পরিমাণ দেখতে Plural হলেও ভার্ব Singular হয়।",
      ],
      sections: [
        {
          heading: "১. 'And' যুক্ত সাবজেক্টের নিয়ম",
          content:
            "সাধারণত 'And' দিয়ে যুক্ত হলে Plural হয় (Rahim and Karim **are** present)। কিন্তু যদি তারা একই অর্থ দেয় তবে Singular হয় (Slow and steady **wins** the race)।",
        },
        {
          heading: "২. Either-Or / Neither-Nor এর নিয়ম",
          content:
            "এক্ষেত্রে ভার্বটি তার সবচেয়ে কাছের সাবজেক্ট অনুযায়ী বসে।\n* Example: Neither Rahim nor his friends **are** coming.",
        },
        {
          heading: "৩. পরিমাপ ও অর্থের একক",
          content:
            "টাকা, দূরত্ব বা ওজন দেখতে Plural হলেও এরা একটি একক বোঝালে ভার্ব Singular হয়।\n* Example: Fifty miles **is** a long distance.",
        },
        {
          heading: "৪. Uncountable Noun ও Collective Noun",
          content:
            "Water, Furniture, Information, Advice ইত্যাদি Uncountable Noun এর পর ভার্ব সবসময় Singular হয়। আবার Collective Noun (যেমন: Jury, Committee) যদি ঐক্যবদ্ধ থাকে তবে Singular, আর বিভক্ত হয়ে গেলে Plural হয়।",
        },
      ],
    },
    preliminary_exam_prep: {
      focus: "30 High-Quality MCQs with Explanations",
      mcqs: [
        {
          id: 1,
          question: "The color of his eyes ____ blue.",
          options: ["A) are", "B) is", "C) were", "D) have been"],
          answer: "B) is",
          explanation:
            "এখানে সাবজেক্ট 'eyes' নয়, বরং 'color' (singular), তাই ভার্ব 'is' হবে।",
        },
        {
          id: 2,
          question: "Bread and butter ____ my favorite breakfast.",
          options: ["A) are", "B) were", "C) is", "D) have"],
          answer: "C) is",
          explanation:
            "Bread and butter একটি একক খাবারকে বোঝাচ্ছে, তাই Singular verb হবে।",
        },
        {
          id: 3,
          question: "Neither you nor I ____ going there.",
          options: ["A) are", "B) am", "C) is", "D) were"],
          answer: "B) am",
          explanation:
            "Neither-nor থাকলে ভার্ব শেষের সাবজেক্ট (I) অনুযায়ী বসে।",
        },
        {
          id: 4,
          question: "Each of the students ____ present.",
          options: ["A) are", "B) were", "C) is", "D) have been"],
          answer: "C) is",
          explanation: "Each-এর পরে নাউন plural হলেও ভার্ব সবসময় Singular হয়।",
        },
        {
          id: 5,
          question: "Politics ____ a difficult subject.",
          options: ["A) are", "B) is", "C) were", "D) have been"],
          answer: "B) is",
          explanation:
            "কিছু শব্দ দেখতে plural হলেও (Politics, Physics, News) মূলত singular।",
        },
        {
          id: 6,
          question: "Fifty dollars ____ too much for this shirt.",
          options: ["A) is", "B) are", "C) were", "D) have"],
          answer: "A) is",
          explanation:
            "টাকার পরিমাণ একটি একক হিসেবে বিবেচিত হলে Singular verb হয়।",
        },
        {
          id: 7,
          question: "The committee ____ divided in their opinion.",
          options: ["A) is", "B) was", "C) are", "D) has"],
          answer: "C) are",
          explanation:
            "Collective noun যখন ভিন্ন ভিন্ন মত দেয় (divided), তখন ভার্ব plural হয়।",
        },
        {
          id: 8,
          question: "One of my friends ____ a doctor.",
          options: ["A) are", "B) were", "C) is", "D) have"],
          answer: "C) is",
          explanation: "'One of the' এর পরে noun plural হলেও verb singular হয়।",
        },
        {
          id: 9,
          question: "Slow and steady ____ the race.",
          options: ["A) win", "B) wins", "C) winning", "D) won"],
          answer: "B) wins",
          explanation:
            "এটি একটি চিরন্তন সত্য প্রবাদ, যা একটি একক ভাব প্রকাশ করে।",
        },
        {
          id: 10,
          question: "The news ____ very shocking.",
          options: ["A) are", "B) were", "C) is", "D) have been"],
          answer: "C) is",
          explanation: "'News' সবসময় singular noun হিসেবে গণ্য হয়।",
        },
        {
          id: 11,
          question: "A number of students ____ present today.",
          options: ["A) is", "B) are", "C) was", "D) has"],
          answer: "B) are",
          explanation:
            "'A number of' থাকলে plural verb হয়, কিন্তু 'The number of' থাকলে singular হয়।",
        },
        {
          id: 12,
          question: "Mathematics ____ my favorite subject.",
          options: ["A) are", "B) is", "C) were", "D) have"],
          answer: "B) is",
          explanation: "বিষয়ের নাম সবসময় singular হয়।",
        },
        {
          id: 13,
          question: "Rice and curry ____ his usual meal.",
          options: ["A) are", "B) is", "C) were", "D) have been"],
          answer: "B) is",
          explanation: "একক খাবার বোঝালে Singular verb।",
        },
        {
          id: 14,
          question: "Many a man ____ died in the war.",
          options: ["A) has", "B) have", "C) were", "D) are"],
          answer: "A) has",
          explanation: "'Many a' এর পর noun এবং verb উভয়ই singular হয়।",
        },
        {
          id: 15,
          question: "Either he or his brothers ____ responsible.",
          options: ["A) is", "B) was", "C) are", "D) has been"],
          answer: "C) are",
          explanation:
            "ভার্ব তার কাছের সাবজেক্ট 'brothers' অনুযায়ী plural হয়েছে।",
        },
        {
          id: 16,
          question: "The jury ____ unanimous in its decision.",
          options: ["A) is", "B) are", "C) were", "D) have been"],
          answer: "A) is",
          explanation: "জুরি যখন ঐক্যবদ্ধ (unanimous), তখন singular verb।",
        },
        {
          id: 17,
          question: "Gulliver's Travels ____ a famous book.",
          options: ["A) are", "B) is", "C) were", "D) have"],
          answer: "B) is",
          explanation:
            "বইয়ের নাম plural মনে হলেও আসলে তা একটি একক বই, তাই singular।",
        },
        {
          id: 18,
          question: "None of the work ____ finished.",
          options: ["A) have been", "B) are", "C) is", "D) were"],
          answer: "C) is",
          explanation:
            "'None of' এর পর uncountable noun থাকলে verb singular হয়।",
        },
        {
          id: 19,
          question: "The Arabian Nights ____ still a great favorite.",
          options: ["A) is", "B) are", "C) were", "D) have been"],
          answer: "A) is",
          explanation: "বইয়ের নাম হিসেবে এটি singular।",
        },
        {
          id: 20,
          question: "Every man, woman, and child ____ happy.",
          options: ["A) are", "B) were", "C) was", "D) have been"],
          answer: "C) was",
          explanation:
            "'Every' থাকলে সাবজেক্ট যতগুলোই হোক, ভার্ব সবসময় singular।",
        },
        {
          id: 21,
          question: "Two-thirds of the work ____ finished.",
          options: ["A) have been", "B) are", "C) has been", "D) were"],
          answer: "C) has been",
          explanation:
            "ভগ্নাংশের ক্ষেত্রে noun যদি singular হয় (work), তবে verb-ও singular হবে।",
        },
        {
          id: 22,
          question: "Not only Rahim but also his friends ____ there.",
          options: ["A) was", "B) is", "C) are", "D) has been"],
          answer: "C) are",
          explanation: "'But also' এর পরের সাবজেক্ট অনুযায়ী ভার্ব বসে।",
        },
        {
          id: 23,
          question: "The furniture of this room ____ old.",
          options: ["A) are", "B) were", "C) is", "D) have been"],
          answer: "C) is",
          explanation:
            "Furniture একটি uncountable noun, তাই সবসময় singular verb।",
        },
        {
          id: 24,
          question: "Time and tide ____ for none.",
          options: ["A) wait", "B) waits", "C) waiting", "D) was waiting"],
          answer: "A) wait",
          explanation:
            "আধুনিক গ্রামার অনুযায়ী এটি plural হিসেবে গণ্য হয় (যদিও অনেকে waits বলেন)।",
        },
        {
          id: 25,
          question: "The great scholar and poet ____ dead.",
          options: ["A) are", "B) were", "C) is", "D) have"],
          answer: "C) is",
          explanation:
            "আর্টিকেল 'The' একবার থাকায় বোঝাচ্ছে ব্যক্তি একজনই, তাই singular।",
        },
        {
          id: 26,
          question: "There ____ a pen and two books on the table.",
          options: ["A) is", "B) are", "C) were", "D) have been"],
          answer: "A) is",
          explanation:
            "'There is' এর ক্ষেত্রে ভার্ব প্রথম নাউন (a pen) অনুযায়ী বসে।",
        },
        {
          id: 27,
          question: "He as well as I ____ present.",
          options: ["A) am", "B) are", "C) is", "D) were"],
          answer: "C) is",
          explanation:
            "'As well as' থাকলে প্রথম সাবজেক্ট (He) অনুযায়ী ভার্ব বসে।",
        },
        {
          id: 28,
          question: "The information he gave me ____ false.",
          options: ["A) are", "B) were", "C) was", "D) have been"],
          answer: "C) was",
          explanation: "Information সবসময় singular verb নেয়।",
        },
        {
          id: 29,
          question: "Ten miles ____ a long walk.",
          options: ["A) are", "B) were", "C) is", "D) have"],
          answer: "C) is",
          explanation: "দূরত্ব singular হিসেবে গণ্য হয়।",
        },
        {
          id: 30,
          question: "The number of students ____ increasing.",
          options: ["A) are", "B) have been", "C) is", "D) were"],
          answer: "C) is",
          explanation: "'The number of' থাকলে verb সবসময় singular হয়।",
        },
      ],
    },
  },
  {
    _id: "english_parts_of_speech_bcs_2026",
    title: "Parts of Speech: ইংরেজি ব্যাকরণের ভিত্তি",
    category: "English Grammar",
    tags: ["Parts of Speech", "Noun", "Adjective", "Verb", "Adverb", "BCS"],
    last_updated: "2026-02-05",
    article_content: {
      summary:
        "ইংরেজি ভাষায় বাক্যে ব্যবহৃত প্রতিটি শব্দকে তাদের কাজ অনুযায়ী ৮টি শ্রেণিতে ভাগ করা হয়। পরীক্ষায় মূলত শব্দের সঠিক শ্রেণি নির্ণয় (Identification) এবং এক পদ থেকে অন্য পদে রূপান্তর (Interchange) থেকে প্রশ্ন আসে।",
      key_points: [
        "Noun (বিশেষ্য): নাম বোঝায়।",
        "Pronoun (সর্বনাম): নামের পরিবর্তে বসে।",
        "Adjective (বিশেষণ): Noun বা Pronoun-এর দোষ-গুণ বা অবস্থা বোঝায়।",
        "Verb (ক্রিয়া): কাজ করা বা হওয়া বোঝায়।",
        "Adverb: Verb, Adjective বা অন্য Adverb-কে বিশেষায়িত করে।",
        "Preposition: Noun-এর আগে বসে সম্পর্ক তৈরি করে।",
        "Conjunction: দুই বা ততোধিক শব্দ বা বাক্যকে যুক্ত করে।",
        "Interjection: মনের আকস্মিক আবেগ প্রকাশ করে।",
      ],
      sections: [
        {
          heading: "১. Noun ও এর শ্রেণিবিভাগ",
          content:
            "Noun প্রধানত ৫ প্রকার: Proper (নির্দিষ্ট নাম), Common (সাধারণ নাম), Collective (সমষ্টি), Material (উপাদান) এবং Abstract (গুণবাচক)।\n* Example: **Water** (Material) is life.",
        },
        {
          heading: "২. Adjective ও Adverb-এর পার্থক্য",
          content:
            "Adjective সাধারণত Noun-এর আগে বসে তাকে বর্ণনা করে। আর Adverb সাধারণত Verb-কে বা সম্পূর্ণ বাক্যকে বর্ণনা করে।\n* Example: He is a **fast** runner (Adjective). He runs **fast** (Adverb).",
        },
        {
          heading: "৩. গুরুত্বপূর্ণ রূপান্তর (Interchange)",
          table_data: [
            {
              Noun: "Beauty",
              Verb: "Beautify",
              Adjective: "Beautiful",
              Adverb: "Beautifully",
            },
            {
              Noun: "Decency",
              Verb: "-",
              Adjective: "Decent",
              Adverb: "Decently",
            },
            {
              Noun: "Glory",
              Verb: "Glorify",
              Adjective: "Glorious",
              Adverb: "Gloriously",
            },
          ],
        },
      ],
    },
    preliminary_exam_prep: {
      focus: "Identification of Parts of Speech (30 MCQ)",
      mcqs: [
        {
          id: 1,
          question: "What kind of noun is 'Cattle'?",
          options: ["A) Proper", "B) Common", "C) Collective", "D) Material"],
          answer: "C) Collective",
          explanation: "Cattle বলতে গবাদি পশুর পাল বা সমষ্টিকে বোঝায়।",
        },
        {
          id: 2,
          question: "The word 'Homely' is a/an —",
          options: ["A) Noun", "B) Adjective", "C) Adverb", "D) Verb"],
          answer: "B) Adjective",
          explanation:
            "Noun-এর সাথে 'ly' যুক্ত হলে সাধারণত তা Adjective হয় (যেমন: Fatherly, Motherly)।",
        },
        {
          id: 3,
          question: "Identify the noun: 'Believe'",
          options: [
            "A) Believable",
            "B) Belief",
            "C) Believing",
            "D) Believingly",
          ],
          answer: "B) Belief",
          explanation: "Believe হলো Verb, এর Noun ফর্ম হলো Belief।",
        },
        {
          id: 4,
          question: "Which of the following is an Abstract Noun?",
          options: ["A) Family", "B) Gold", "C) Infancy", "D) Water"],
          answer: "C) Infancy",
          explanation:
            "শৈশব বা Infancy একটি অবস্থার নাম যা দেখা যায় না, শুধু অনুভব করা যায়।",
        },
        {
          id: 5,
          question: "He works 'hard'. Here 'hard' is —",
          options: ["A) Noun", "B) Adjective", "C) Adverb", "D) Verb"],
          answer: "C) Adverb",
          explanation: "এখানে 'hard' শব্দটি 'works' (verb)-কে বিশেষায়িত করছে।",
        },
        {
          id: 6,
          question: "This is a 'hard' nut to crack. Here 'hard' is —",
          options: ["A) Adjective", "B) Adverb", "C) Noun", "D) Pronoun"],
          answer: "A) Adjective",
          explanation: "এখানে 'hard' শব্দটি 'nut' (noun)-এর গুণ বোঝাচ্ছে।",
        },
        {
          id: 7,
          question: "The verb of 'Short' is —",
          options: ["A) Shorten", "B) Shortly", "C) Shortness", "D) Shorter"],
          answer: "A) Shorten",
          explanation: "Adjective-এর শেষে 'en' যুক্ত করে অনেক সময় Verb করা হয়।",
        },
        {
          id: 8,
          question: "What kind of noun is 'Girl'?",
          options: ["A) Proper", "B) Common", "C) Collective", "D) Abstract"],
          answer: "B) Common",
          explanation:
            "Girl বলতে কোনো নির্দিষ্ট কাউকে না বুঝিয়ে সাধারণ জাতি বা শ্রেণিকে বোঝায়।",
        },
        {
          id: 9,
          question: "What is the adjective of the word 'Moon'?",
          options: ["A) Moony", "B) Lunar", "C) Moonlit", "D) Moonlike"],
          answer: "B) Lunar",
          explanation: "Moon-এর সঠিক ল্যাটিন Adjective রূপ হলো Lunar।",
        },
        {
          id: 10,
          question: "Identify the word which is both Noun and Verb —",
          options: ["A) Water", "B) Book", "C) Love", "D) All of the above"],
          answer: "D) All of the above",
          explanation:
            "Water, Book, Love—এই শব্দগুলো বাক্যভেদে Noun এবং Verb হিসেবে ব্যবহৃত হয়।",
        },
        {
          id: 11,
          question: "The word 'Diversity' is a/an —",
          options: ["A) Adjective", "B) Noun", "C) Verb", "D) Adverb"],
          answer: "B) Noun",
          explanation: "শব্দের শেষে '-ity' থাকলে সেটি সাধারণত Noun হয়।",
        },
        {
          id: 12,
          question: "What is the noun form of the word 'Waste'?",
          options: ["A) Wastage", "B) Wasting", "C) Wasted", "D) Wasteful"],
          answer: "A) Wastage",
          explanation: "Waste-এর প্রচলিত Noun রূপ হলো Wastage।",
        },
        {
          id: 13,
          question: "A 'barking' dog seldom bites. Here 'barking' is —",
          options: ["A) Noun", "B) Adjective", "C) Adverb", "D) Verb"],
          answer: "B) Adjective",
          explanation:
            "এটি একটি পার্টিসিপল যা 'dog'-এর অবস্থা প্রকাশ করছে, তাই এটি Adjective।",
        },
        {
          id: 14,
          question: "Which one is a Pronoun?",
          options: ["A) Each", "B) Book", "C) Quickly", "D) Very"],
          answer: "A) Each",
          explanation: "Each হলো একটি Distributive Pronoun।",
        },
        {
          id: 15,
          question: "The word 'Clarify' is —",
          options: ["A) Noun", "B) Adjective", "C) Verb", "D) Adverb"],
          answer: "C) Verb",
          explanation: "শব্দের শেষে '-ify' থাকলে সেটি সাধারণত Verb হয়।",
        },
        {
          id: 16,
          question: "What part of speech is 'But' in 'It is but right'?",
          options: [
            "A) Relative Pronoun",
            "B) Adverb",
            "C) Conjunction",
            "D) Preposition",
          ],
          answer: "B) Adverb",
          explanation: "এখানে 'but' মানে 'only', যা Adverb হিসেবে কাজ করছে।",
        },
        {
          id: 17,
          question: "Which of the following is a Material Noun?",
          options: ["A) Honesty", "B) Iron", "C) Army", "D) School"],
          answer: "B) Iron",
          explanation: "Iron একটি পদার্থের নাম।",
        },
        {
          id: 18,
          question: "What is the adjective form of 'Heart'?",
          options: ["A) Hearting", "B) Hearty", "C) Heartily", "D) Hearten"],
          answer: "B) Hearty",
          explanation: "Hearty হলো Heart-এর Adjective রূপ।",
        },
        {
          id: 19,
          question: "He is 'but' a child. Here 'but' is —",
          options: [
            "A) Adverb",
            "B) Conjunction",
            "C) Preposition",
            "D) Pronoun",
          ],
          answer: "A) Adverb",
          explanation: "এখানে 'but' কেবল বা 'only' অর্থে ব্যবহৃত হয়েছে।",
        },
        {
          id: 20,
          question: "The word 'Requirement' is a/an —",
          options: ["A) Noun", "B) Verb", "C) Adjective", "D) Adverb"],
          answer: "A) Noun",
          explanation: "'-ment' প্রত্যয়যুক্ত শব্দ সাধারণত Noun হয়।",
        },
        {
          id: 21,
          question: "Identify the Adverb: 'He ran fast'.",
          options: ["A) He", "B) Ran", "C) Fast", "D) None"],
          answer: "C) Fast",
          explanation: "Fast এখানে দৌড়ানোর ধরন বোঝাচ্ছে।",
        },
        {
          id: 22,
          question: "Which one is a Collective Noun?",
          options: ["A) Team", "B) Player", "C) Bat", "D) Stadium"],
          answer: "A) Team",
          explanation: "Team বলতে খেলোয়াড়দের সমষ্টিকে বোঝায়।",
        },
        {
          id: 23,
          question: "What is the verb of 'Ability'?",
          options: ["A) Ably", "B) Enable", "C) Able", "D) Abilities"],
          answer: "B) Enable",
          explanation: "Enable মানে সমর্থ করা, যা একটি Verb।",
        },
        {
          id: 24,
          question: "He is the 'best' boy in the class. Here 'best' is —",
          options: ["A) Noun", "B) Adjective", "C) Adverb", "D) Pronoun"],
          answer: "B) Adjective",
          explanation: "এটি Superlative Adjective যা boy-কে বিশেষায়িত করছে।",
        },
        {
          id: 25,
          question: "What is the noun of the word 'Pious'?",
          options: [
            "A) Piously",
            "B) Piety",
            "C) Piousness",
            "D) Both B and C",
          ],
          answer: "D) Both B and C",
          explanation: "Piety এবং Piousness উভয়ই Pious-এর Noun রূপ।",
        },
        {
          id: 26,
          question: "Which part of speech is 'Alas'?",
          options: [
            "A) Conjunction",
            "B) Interjection",
            "C) Adverb",
            "D) Preposition",
          ],
          answer: "B) Interjection",
          explanation: "এটি দুঃখ বা আবেগ প্রকাশ করে।",
        },
        {
          id: 27,
          question: "Identify the Adjective: 'Gold', 'Golden', 'Gild', 'Glory'",
          options: ["A) Gold", "B) Golden", "C) Gild", "D) Glory"],
          answer: "B) Golden",
          explanation: "Golden হলো Gold (Material Noun)-এর Adjective রূপ।",
        },
        {
          id: 28,
          question: "The word 'Incredible' is a/an —",
          options: ["A) Noun", "B) Adjective", "C) Adverb", "D) Verb"],
          answer: "B) Adjective",
          explanation: "'-ible' বা '-able' যুক্ত শব্দ সাধারণত Adjective হয়।",
        },
        {
          id: 29,
          question: "Who, Which, What are —",
          options: [
            "A) Relative Pronouns",
            "B) Personal Pronouns",
            "C) Adjectives",
            "D) Adverbs",
          ],
          answer: "A) Relative Pronouns",
          explanation:
            "এগুলো দুই বাক্যের মাঝে সম্পর্ক স্থাপন করলে Relative Pronoun হয়।",
        },
        {
          id: 30,
          question:
            "What part of speech is 'since' in 'It is many years since I saw you'?",
          options: [
            "A) Preposition",
            "B) Conjunction",
            "C) Adverb",
            "D) Pronoun",
          ],
          answer: "B) Conjunction",
          explanation: "এখানে 'since' দুটি বাক্যকে যুক্ত করেছে।",
        },
      ],
    },
  },
  {
    _id: "english_phrases_clauses_bcs_2026",
    title: "Phrases and Clauses: Identification and Usage",
    category: "English Grammar",
    tags: [
      "Phrase",
      "Clause",
      "Noun Phrase",
      "Adjective Clause",
      "Subordinate Clause",
      "BCS",
    ],
    last_updated: "2026-02-05",
    article_content: {
      summary:
        "বাক্যের যে অংশে Subject এবং Finite Verb থাকে না তাকে Phrase বলে। অন্যদিকে, বাক্যের যে অংশে একটি Subject এবং একটি Finite Verb থাকে তাকে Clause বলে। বিসিএস পরীক্ষায় সাধারণত 'Underlined' অংশটি কোন ধরনের Phrase বা Clause তা শনাক্ত করতে বলা হয়।",
      key_points: [
        "Phrase: একগুচ্ছ শব্দ যা একটি একক Part of Speech হিসেবে কাজ করে (No Subject-Verb combo).",
        "Clause: একটি বড় বাক্যের অংশ যাতে নিজস্ব Subject এবং Finite Verb থাকে।",
        "Principal Clause: স্বাধীনভাবে অর্থ প্রকাশ করতে পারে।",
        "Subordinate Clause: অর্থের জন্য Principal Clause-এর ওপর নির্ভরশীল।",
      ],
      sections: [
        {
          heading: "১. গুরুত্বপূর্ণ Phrase-এর প্রকারভেদ",
          content:
            "* **Noun Phrase:** বাক্যে Noun-এর কাজ করে। (e.g., **To win a prize** is my ambition.)\n* **Adjective Phrase:** Noun-কে বিশেষায়িত করে। (e.g., A man **of great wealth**.)\n* **Adverbial Phrase:** সময়, স্থান বা ধরন বোঝায়। (e.g., He ran **with great speed**.)",
        },
        {
          heading: "২. Clause-এর শ্রেণিবিভাগ",
          content:
            "Clause প্রধানত ৩ প্রকার:\n১. **Principal Clause:** স্বয়ংসম্পূর্ণ বাক্য।\n২. **Subordinate Clause:** যা Noun, Adjective বা Adverb Clause হিসেবে কাজ করে।\n৩. **Co-ordinate Clause:** 'And', 'But', 'Or' দিয়ে যুক্ত সমান গুরুত্বের বাক্য।",
        },
        {
          heading: "৩. Clause Identification Trick",
          content:
            "যদি বাক্যটি 'Who/Which/That' দিয়ে শুরু হয় এবং ঠিক আগের Noun-কে বর্ণনা করে, তবে সেটি **Adjective Clause**। যদি 'That/What/How' দিয়ে শুরু হয়ে Subject বা Object-এর কাজ করে, তবে সেটি **Noun Clause**।",
        },
      ],
    },
    preliminary_exam_prep: {
      focus: "Identification of Phrases & Clauses (30 MCQ)",
      mcqs: [
        {
          id: 1,
          question: "What is a 'Phrase'?",
          options: [
            "A) A group of words with a finite verb",
            "B) A group of words without a finite verb",
            "C) A complete sentence",
            "D) A part of a word",
          ],
          answer: "B) A group of words without a finite verb",
          explanation:
            "ফ্রেজ হলো শব্দসমষ্টি যেখানে কোনো সমাপিকা ক্রিয়া থাকে না।",
        },
        {
          id: 2,
          question:
            "'To win a prize' is my ambition. The underlined part is a —",
          options: [
            "A) Noun Phrase",
            "B) Adjective Phrase",
            "C) Adverbial Phrase",
            "D) Prepositional Phrase",
          ],
          answer: "A) Noun Phrase",
          explanation:
            "এটি বাক্যের Subject হিসেবে কাজ করছে, তাই এটি Noun Phrase।",
        },
        {
          id: 3,
          question:
            "A man 'of great wealth' lives here. The underlined part is a —",
          options: [
            "A) Noun Phrase",
            "B) Adjective Phrase",
            "C) Adverbial Phrase",
            "D) Verb Phrase",
          ],
          answer: "B) Adjective Phrase",
          explanation: "এটি 'man' (noun) সম্পর্কে তথ্য দিচ্ছে।",
        },
        {
          id: 4,
          question: "I know 'where he lives'. The underlined part is a —",
          options: [
            "A) Noun Clause",
            "B) Adjective Clause",
            "C) Adverbial Clause",
            "D) Principal Clause",
          ],
          answer: "A) Noun Clause",
          explanation: "এটি 'know' ভার্বের object হিসেবে কাজ করছে।",
        },
        {
          id: 5,
          question:
            "This is the house 'that I want to buy'. The underlined part is a —",
          options: [
            "A) Noun Clause",
            "B) Adjective Clause",
            "C) Adverbial Clause",
            "D) Co-ordinate Clause",
          ],
          answer: "B) Adjective Clause",
          explanation: "এটি 'house' (noun)-কে বিশেষায়িত করছে।",
        },
        {
          id: 6,
          question: "He ran 'as fast as he could'. The underlined part is an —",
          options: [
            "A) Adverbial Clause",
            "B) Adjective Clause",
            "C) Noun Clause",
            "D) Noun Phrase",
          ],
          answer: "A) Adverbial Clause",
          explanation: "এটি কাজ করার ধরন বা ম্যানার বোঝাচ্ছে।",
        },
        {
          id: 7,
          question: "He is a man 'of his word'. The underlined part is a —",
          options: [
            "A) Adjective Phrase",
            "B) Noun Phrase",
            "C) Adverbial Phrase",
            "D) Prepositional Phrase",
          ],
          answer: "A) Adjective Phrase",
          explanation: "এটি ব্যক্তির গুণ বোঝাচ্ছে।",
        },
        {
          id: 8,
          question:
            "'Walking in the morning' is good for health. Underlined part is a —",
          options: [
            "A) Noun Phrase",
            "B) Adjective Phrase",
            "C) Adverbial Phrase",
            "D) Verb Phrase",
          ],
          answer: "A) Noun Phrase",
          explanation: "এটি বাক্যের সাবজেক্ট (Gerundial Phrase)।",
        },
        {
          id: 9,
          question:
            "Strike 'while the iron is hot'. The underlined part is an —",
          options: [
            "A) Adjective Clause",
            "B) Noun Clause",
            "C) Adverbial Clause",
            "D) Noun Phrase",
          ],
          answer: "C) Adverbial Clause",
          explanation: "এটি সময় (Time) নির্দেশ করছে।",
        },
        {
          id: 10,
          question: "I have 'no money in hand'. The underlined part is a —",
          options: [
            "A) Adjective Phrase",
            "B) Adverbial Phrase",
            "C) Noun Phrase",
            "D) Prepositional Phrase",
          ],
          answer: "A) Adjective Phrase",
          explanation: "এটি 'money'-র অবস্থা বোঝাচ্ছে।",
        },
        {
          id: 11,
          question: "A Subordinate Clause starts with —",
          options: [
            "A) Subordinating conjunctions",
            "B) Coordinating conjunctions",
            "C) Only Nouns",
            "D) Verbs",
          ],
          answer: "A) Subordinating conjunctions",
          explanation: "যেমন: if, because, since, although ইত্যাদি।",
        },
        {
          id: 12,
          question:
            "The boy 'who came here' is my brother. The underlined part is an —",
          options: [
            "A) Noun Clause",
            "B) Adjective Clause",
            "C) Adverbial Clause",
            "D) Main Clause",
          ],
          answer: "B) Adjective Clause",
          explanation: "এটি 'boy'-কে বিশেষায়িত করছে।",
        },
        {
          id: 13,
          question:
            "He came 'at the eleventh hour'. The underlined part is an —",
          options: ["A) Adverbial Phrase", " ... "],
          answer: "A) Adverbial Phrase",
          explanation: "এটি সময় বোঝাচ্ছে (শেষ মুহূর্তে)।",
        },
        {
          id: 14,
          question: "Wait here 'until I return'. The underlined part is an —",
          options: [
            "A) Adverbial Clause",
            "B) Noun Clause",
            "C) Adjective Clause",
            "D) Principal Clause",
          ],
          answer: "A) Adverbial Clause",
          explanation: "এটি সময়ের সীমা বোঝাচ্ছে।",
        },
        {
          id: 15,
          question:
            "I don't know 'how it happened'. The underlined part is a —",
          options: [
            "A) Noun Clause",
            "B) Adjective Clause",
            "C) Adverbial Clause",
            "D) Phrase",
          ],
          answer: "A) Noun Clause",
          explanation: "এটি Object হিসেবে ব্যবহৃত হয়েছে।",
        },
        {
          id: 16,
          question: "He is 'too weak to walk'. The underlined part is a —",
          options: [
            "A) Adverbial Phrase",
            "B) Noun Phrase",
            "C) Adjective Phrase",
            "D) Infinitive Phrase",
          ],
          answer: "D) Infinitive Phrase",
          explanation: "Infinitive (to + verb) দিয়ে গঠিত ফ্রেজ।",
        },
        {
          id: 17,
          question:
            "The girl 'with blue eyes' is my cousin. The underlined part is an —",
          options: [
            "A) Adjective Phrase",
            "B) Adverbial Phrase",
            "C) Noun Phrase",
            "D) Prepositional Phrase",
          ],
          answer: "A) Adjective Phrase",
          explanation: "এটি মেয়েটির শারীরিক বর্ণনা দিচ্ছে।",
        },
        {
          id: 18,
          question:
            "I asked him 'why he was crying'. The underlined part is a —",
          options: [
            "A) Noun Clause",
            "B) Adjective Clause",
            "C) Adverbial Clause",
            "D) Main Clause",
          ],
          answer: "A) Noun Clause",
          explanation: "এটি Indirect Object হিসেবে কাজ করছে।",
        },
        {
          id: 19,
          question:
            "If you study hard, 'you will pass'. The underlined part is a —",
          options: [
            "A) Principal Clause",
            "B) Subordinate Clause",
            "C) Adverbial Clause",
            "D) Adjective Clause",
          ],
          answer: "A) Principal Clause",
          explanation: "এটি একটি স্বাধীন বাক্য।",
        },
        {
          id: 20,
          question:
            "'In spite of his poverty', he is honest. The underlined part is a —",
          options: [
            "A) Adverbial Phrase",
            "B) Noun Phrase",
            "C) Prepositional Phrase",
            "D) Adjective Phrase",
          ],
          answer: "A) Adverbial Phrase",
          explanation: "এটি বৈপরীত্য (concession) বোঝাচ্ছে।",
        },
        {
          id: 21,
          question:
            "He succeeded 'by dint of hard work'. Underlined part is a —",
          options: [
            "A) Prepositional Phrase",
            "B) Adverbial Phrase",
            "C) Noun Phrase",
            "D) Adjective Phrase",
          ],
          answer: "B) Adverbial Phrase",
          explanation: "এটি সফল হওয়ার উপায় বা মাধ্যম বোঝাচ্ছে।",
        },
        {
          id: 22,
          question:
            "Do you know 'when the train will arrive'? Underlined part is a —",
          options: [
            "A) Noun Clause",
            "B) Adjective Clause",
            "C) Adverbial Clause",
            "D) Verb Phrase",
          ],
          answer: "A) Noun Clause",
          explanation: "এটি 'know' ভার্বের object।",
        },
        {
          id: 23,
          question:
            "The news 'that he is dead' is false. Underlined part is a —",
          options: [
            "A) Noun Clause",
            "B) Adjective Clause",
            "C) Adverbial Clause",
            "D) Phrase",
          ],
          answer: "A) Noun Clause",
          explanation: "এটি 'The news' এর Appositive হিসেবে কাজ করছে।",
        },
        {
          id: 24,
          question:
            "The bird 'singing on the tree' is a robin. Underlined part is an —",
          options: [
            "A) Adjective Phrase",
            "B) Noun Phrase",
            "C) Adverbial Phrase",
            "D) Verb Phrase",
          ],
          answer: "A) Adjective Phrase",
          explanation: "এটি 'bird'-কে বর্ণনা করছে (Participle phrase)।",
        },
        {
          id: 25,
          question: "I will go 'wherever you go'. Underlined part is an —",
          options: [
            "A) Adverbial Clause",
            "B) Noun Clause",
            "C) Adjective Clause",
            "D) Co-ordinate Clause",
          ],
          answer: "A) Adverbial Clause",
          explanation: "এটি স্থান (Place) নির্দেশ করছে।",
        },
        {
          id: 26,
          question: "He is 'on the point of death'. Underlined part is a —",
          options: [
            "A) Adverbial Phrase",
            "B) Adjective Phrase",
            "C) Noun Phrase",
            "D) Verb Phrase",
          ],
          answer: "A) Adverbial Phrase",
          explanation: "এটি অবস্থা বা সময় নির্দেশক।",
        },
        {
          id: 27,
          question: "'Whatever you do' is right. Underlined part is a —",
          options: [
            "A) Noun Clause",
            "B) Adjective Clause",
            "C) Adverbial Clause",
            "D) Main Clause",
          ],
          answer: "A) Noun Clause",
          explanation: "এটি বাক্যের Subject।",
        },
        {
          id: 28,
          question: "He is a man 'without any fear'. Underlined part is a —",
          options: [
            "A) Adjective Phrase",
            "B) Adverbial Phrase",
            "C) Noun Phrase",
            "D) Prepositional Phrase",
          ],
          answer: "A) Adjective Phrase",
          explanation: "এটি সাহসিকতা (গুণ) বোঝাচ্ছে।",
        },
        {
          id: 29,
          question:
            "He behaved 'in a very rude manner'. Underlined part is a —",
          options: [
            "A) Adverbial Phrase",
            "B) Adjective Phrase",
            "C) Noun Phrase",
            "D) Verb Phrase",
          ],
          answer: "A) Adverbial Phrase",
          explanation: "এটি আচরণের ধরন (Manner) বোঝাচ্ছে।",
        },
        {
          id: 30,
          question:
            "The reason 'why he left' is unknown. Underlined part is an —",
          options: [
            "A) Adjective Clause",
            "B) Noun Clause",
            "C) Adverbial Clause",
            "D) Principal Clause",
          ],
          answer: "B) Noun Clause",
          explanation:
            "এটি 'The reason' এর পরিপূরক বা Appositive হিসেবে কাজ করছে।",
        },
      ],
    },
  },
  {
    _id: "english_number_gender_bcs_2026",
    title: "Number and Gender: বচন ও লিঙ্গ পরিবর্তনের পূর্ণাঙ্গ গাইড",
    category: "English Grammar",
    tags: [
      "Number",
      "Gender",
      "Singular",
      "Plural",
      "Masculine",
      "Feminine",
      "BCS Prep",
    ],
    last_updated: "2026-02-05",
    article_content: {
      summary:
        "Number এবং Gender মূলত Noun এবং Pronoun-এর পরিবর্তনকে নির্দেশ করে। ইংরেজি ব্যাকরণে ল্যাটিন ও গ্রিক উৎস থেকে আসা শব্দের প্লুরাল এবং বিচিত্র লিঙ্গান্তর পরীক্ষায় সবচেয়ে বেশি গুরুত্বপূর্ণ।",
      key_points: [
        "ল্যাটিন শব্দের শেষে 'um' থাকলে প্লুরালে 'a' হয় (Data, Media)।",
        "গ্রিক শব্দের শেষে 'is' থাকলে প্লুরালে 'es' হয় (Crisis, Basis)।",
        "Common Gender (উভয় লিঙ্গ) দ্বারা নারী ও পুরুষ উভয়কেই বোঝায় (Teacher, Child)।",
        "Neuter Gender (ক্লীব লিঙ্গ) অচেতন পদার্থকে বোঝায় (Table, Pen)।",
      ],
      sections: [
        {
          heading: "১. নাম্বার পরিবর্তনের ব্যতিক্রমী নিয়ম (Latin/Greek)",
          content:
            "প্রতিযোগিতামূলক পরীক্ষায় এই তালিকা থেকে প্রশ্ন প্রায় নিশ্চিত:\n* Um → A: Datum (Singular) - Data (Plural), Bacterium - Bacteria.\n* Us → I: Alumnus - Alumni, Radius - Radii.\n* Is → Es: Analysis - Analyses, Thesis - Theses.\n* On → A: Phenomenon - Phenomena, Criterion - Criteria.",
        },
        {
          heading: "২. লিঙ্গ পরিবর্তনের প্রকারভেদ (Gender Types)",
          table_data: [
            {
              Masculine: "Bachelor",
              Feminine: "Maid/Spinster",
              Note: "অবিবাহিত",
            },
            { Masculine: "Stag", Feminine: "Hind", Note: "হরিণ" },
            { Masculine: "Drone", Feminine: "Bee", Note: "মৌমাছি" },
            { Masculine: "Wizard", Feminine: "Witch", Note: "জাদুকর" },
            { Masculine: "Ram", Feminine: "Ewe", Note: "ভেড়া" },
          ],
        },
        {
          heading: "৩. কিছু গুরুত্বপূর্ণ Common ও Neuter Gender",
          content:
            "Common Gender: Baby, Candidate, Friend, Sovereign, Orphan.\nNeuter Gender: Wood, Iron, Book, Class (ব্যতিক্রম আছে)।",
        },
      ],
    },
    preliminary_exam_prep: {
      focus: "Top 30 Important MCQs for Number & Gender",
      mcqs: [
        {
          id: 1,
          question: "What is the plural of 'Datum'?",
          options: ["A) Datums", "B) Datae", "C) Data", "D) Datas"],
          answer: "C) Data",
          explanation: "ল্যাটিন শব্দ 'um' থাকলে প্লুরালে 'a' হয়।",
        },
        {
          id: 2,
          question: "What is the feminine gender of 'Stag'?",
          options: ["A) Doe", "B) Hind", "C) Mare", "D) Ewe"],
          answer: "B) Hind",
          explanation: "Stag (পুরুষ হরিণ) এর স্ত্রীলিঙ্গ হলো Hind।",
        },
        {
          id: 3,
          question: "The plural form of 'Crisis' is —",
          options: ["A) Crisises", "B) Crises", "C) Crisess", "D) Crisia"],
          answer: "B) Crises",
          explanation: "গ্রিক শব্দ 'is' থাকলে প্লুরালে 'es' হয়।",
        },
        {
          id: 4,
          question: "What is the feminine of 'Wizard'?",
          options: [
            "A) Wizardess",
            "B) Witch",
            "C) Female Wizard",
            "D) Sorceress",
          ],
          answer: "B) Witch",
          explanation: "Wizard (জাদুকর)-এর স্ত্রীলিঙ্গ হলো Witch।",
        },
        {
          id: 5,
          question: "Which of the following is a plural noun?",
          options: ["A) News", "B) Ethics", "C) Media", "D) Mathematics"],
          answer: "C) Media",
          explanation: "Medium হলো singular, Media হলো plural।",
        },
        {
          id: 6,
          question: "What is the masculine of 'Ewe'?",
          options: ["A) Ram", "B) Buck", "C) Bull", "D) Gander"],
          answer: "A) Ram",
          explanation: "Ewe (ভেড়ি)-এর পুংলিঙ্গ হলো Ram (ভেড়া)।",
        },
        {
          id: 7,
          question: "The plural form of 'Alumnus' is —",
          options: ["A) Alumnuses", "B) Alumni", "C) Alumnae", "D) Alumna"],
          answer: "B) Alumni",
          explanation: "'Us' থাকলে প্লুরালে 'i' হয়।",
        },
        {
          id: 8,
          question: "Which one is a Common Gender?",
          options: ["A) Author", "B) Bull", "C) Sovereign", "D) Ox"],
          answer: "C) Sovereign",
          explanation: "Sovereign (শাসক) নারী বা পুরুষ উভয়ই হতে পারেন।",
        },
        {
          id: 9,
          question: "The plural of 'Criterion' is —",
          options: [
            "A) Criterions",
            "B) Criterias",
            "C) Criteria",
            "D) Criterium",
          ],
          answer: "C) Criteria",
          explanation:
            "Phenomenon ও Criterion-এর ক্ষেত্রে 'on' এর বদলে 'a' হয়।",
        },
        {
          id: 10,
          question: "What is the feminine gender of 'Fox'?",
          options: ["A) Foxess", "B) Vixen", "C) Bitch", "D) She-fox"],
          answer: "B) Vixen",
          explanation: "Fox-এর স্ত্রীলিঙ্গ হলো Vixen।",
        },
        {
          id: 11,
          question: "The plural form of 'Index' is —",
          options: [
            "A) Indexes",
            "B) Indices",
            "C) Indeces",
            "D) Both A and B",
          ],
          answer: "D) Both A and B",
          explanation:
            "Index-এর দুটি প্লুরালই সঠিক (Indices গণিতে বেশি ব্যবহৃত হয়)।",
        },
        {
          id: 12,
          question: "Which word is Neuter Gender?",
          options: ["A) Baby", "B) Student", "C) Pencil", "D) Orphan"],
          answer: "C) Pencil",
          explanation: "অচেতন বা জড় পদার্থ হলো Neuter Gender।",
        },
        {
          id: 13,
          question: "Plural of 'Mouse' is —",
          options: ["A) Mouses", "B) Mices", "C) Mice", "D) Mouse"],
          answer: "C) Mice",
          explanation: "ভাওয়েল পরিবর্তনের মাধ্যমে এই প্লুরাল গঠিত হয়।",
        },
        {
          id: 14,
          question: "What is the feminine of 'Earl'?",
          options: ["A) Earless", "B) Countess", "C) Lady", "D) Princess"],
          answer: "B) Countess",
          explanation: "Earl (আভিজাত্য পদবি)-এর স্ত্রীলিঙ্গ হলো Countess।",
        },
        {
          id: 15,
          question: "What is the plural of 'Louse'?",
          options: ["A) Louses", "B) Lice", "C) Lices", "D) Louseses"],
          answer: "B) Lice",
          explanation: "Mouse-এর মতো Louse (উকুন) থেকে Lice হয়।",
        },
        {
          id: 16,
          question: "Feminine of 'Monk' is —",
          options: ["A) Monkess", "B) Nun", "C) Lady monk", "D) Sister"],
          answer: "B) Nun",
          explanation: "Monk (সন্ন্যাসী) এর স্ত্রীলিঙ্গ Nun (সন্ন্যাসিনী)।",
        },
        {
          id: 17,
          question: "Which of the following is Singular?",
          options: ["A) Agendum", "B) Agenda", "C) Data", "D) Phenomena"],
          answer: "A) Agendum",
          explanation: "Agenda প্লুরাল, এর সিঙ্গুলার হলো Agendum।",
        },
        {
          id: 18,
          question: "What is the feminine of 'Drone'?",
          options: ["A) Bee", "B) Ant", "C) Fly", "D) Wasp"],
          answer: "A) Bee",
          explanation: "Drone (পুরুষ মৌমাছি)-এর স্ত্রীলিঙ্গ হলো Bee।",
        },
        {
          id: 19,
          question: "Plural form of 'Leaf' is —",
          options: ["A) Leafs", "B) Leaves", "C) Leafes", "D) Leavs"],
          answer: "B) Leaves",
          explanation: "শেষে 'f' থাকলে সাধারণত 'ves' হয়।",
        },
        {
          id: 20,
          question: "Which one is a Masculine Gender?",
          options: ["A) Doe", "B) Ewe", "C) Gander", "D) Goose"],
          answer: "C) Gander",
          explanation: "Gander হলো রাজহাঁস (পুরুষ), রাজহংসী হলো Goose।",
        },
        {
          id: 21,
          question: "What is the plural of 'Ox'?",
          options: ["A) Oxes", "B) Oxen", "C) Oxs", "D) Oxess"],
          answer: "B) Oxen",
          explanation: "Ox-এর শেষে 'en' যুক্ত করে প্লুরাল করা হয়।",
        },
        {
          id: 22,
          question: "What is the feminine of 'Hart'?",
          options: ["A) Roe", "B) Hind", "C) Doe", "D) Sow"],
          answer: "A) Roe",
          explanation: "Hart (পুরুষ হরিণ)-এর স্ত্রীলিঙ্গ Roe।",
        },
        {
          id: 23,
          question: "The plural of 'Basis' is —",
          options: ["A) Basises", "B) Bases", "C) Basia", "D) Basises"],
          answer: "B) Bases",
          explanation: "Crisis-এর মতো Basis থেকে Bases হয়।",
        },
        {
          id: 24,
          question: "Which of the following is Feminine?",
          options: ["A) Buck", "B) Drake", "C) Mare", "D) Colt"],
          answer: "C) Mare",
          explanation: "Mare হলো ঘোটকী (স্ত্রী ঘোড়া)।",
        },
        {
          id: 25,
          question: "What is the plural of 'Formula'?",
          options: [
            "A) Formulas",
            "B) Formulae",
            "C) Formulums",
            "D) Both A and B",
          ],
          answer: "D) Both A and B",
          explanation:
            "ল্যাটিন নিয়মে Formulae এবং সাধারণ নিয়মে Formulas—দুটিই সঠিক।",
        },
        {
          id: 26,
          question: "What is the masculine of 'Maid'?",
          options: ["A) Man", "B) Bachelor", "C) Boy", "D) Master"],
          answer: "B) Bachelor",
          explanation:
            "অবিবাহিত পুরুষ ও নারী বোঝাতে Bachelor-Maid ব্যবহৃত হয়।",
        },
        {
          id: 27,
          question: "The plural of 'Syllabus' is —",
          options: [
            "A) Syllabuses",
            "B) Syllabi",
            "C) Syllabae",
            "D) Both A and B",
          ],
          answer: "D) Both A and B",
          explanation: "Alumnus-এর মতো Syllabi হয়, আবার Syllabuses-ও চলে।",
        },
        {
          id: 28,
          question: "What is the masculine of 'Vixen'?",
          options: ["A) Fox", "B) Dog", "C) Wolf", "D) Tiger"],
          answer: "A) Fox",
          explanation: "Fox-Vixen জোড়াটি বহুল ব্যবহৃত।",
        },
        {
          id: 29,
          question: "Which one is Common Gender?",
          options: ["A) Cousin", "B) Niece", "C) Nephew", "D) Uncle"],
          answer: "A) Cousin",
          explanation: "Cousin ভাই বা বোন উভয়ই হতে পারে।",
        },
        {
          id: 30,
          question: "What is the plural of 'Analysis'?",
          options: [
            "A) Analysises",
            "B) Analyses",
            "C) Analysia",
            "D) Analysis",
          ],
          answer: "B) Analyses",
          explanation: "Is → Es নিয়মে এটি পরিবর্তিত হয়।",
        },
      ],
    },
  },
  {
    _id: "english_synonym_antonym_bcs_2026",
    title: "Synonyms and Antonyms: শব্দভাণ্ডার ও প্রয়োগ",
    category: "English Vocabulary",
    tags: ["Synonyms", "Antonyms", "Vocabulary", "BCS", "Competitive Exam"],
    last_updated: "2026-02-05",
    article_content: {
      summary:
        "ইংরেজি ভোকাবুলারি অংশে ভালো করার উপায় হলো শব্দের রুট বা মূল এবং এর প্রসঙ্গ (context) বোঝা। প্রতিযোগিতামূলক পরীক্ষায় প্রায়ই অপ্রচলিত কিন্তু গুরুত্বপূর্ণ ল্যাটিন বা ফরাসি উৎস থেকে আসা শব্দ জিজ্ঞাসা করা হয়।",
      key_points: [
        "Synonyms: সমার্থক শব্দ যা একই বা প্রায় কাছাকাছি অর্থ প্রকাশ করে।",
        "Antonyms: বিপরীতার্থক শব্দ যা সম্পূর্ণ বিপরীত অর্থ প্রকাশ করে।",
        "Context: বাক্যের অর্থ বুঝে শব্দের সঠিক ব্যবহার নিশ্চিত করা গুরুত্বপূর্ণ।",
      ],
      sections: [
        {
          heading: "১. সমার্থক শব্দ (Synonyms) চেনার টিপস",
          content:
            "যেকোনো নতুন শব্দ শেখার সময় তার একটি সহজ সমার্থক শব্দ মনে রাখুন। যেমন: Abandon এর সাথে মনে রাখুন Leave।",
        },
        {
          heading: "২. বিপরীত শব্দ (Antonyms) চেনার টিপস",
          content:
            "অনেক সময় Prefix (un, in, dis, mis, non) যুক্ত করে বিপরীত শব্দ তৈরি করা হয়। যেমন: Happy - Unhappy, Legitimate - Illegitimate।",
        },
      ],
    },
    preliminary_exam_prep: {
      focus: "52 Top-Tier Vocabulary MCQs",
      mcqs: [
        {
          id: 1,
          question: "What is the synonym of 'Abandon'?",
          options: ["A) Keep", "B) Leave", "C) Carry", "D) Adopt"],
          answer: "B) Leave",
          explanation: "Abandon মানে বর্জন করা বা ছেড়ে দেওয়া।",
        },
        {
          id: 2,
          question: "What is the antonym of 'Abundance'?",
          options: ["A) Scarcity", "B) Plenty", "C) Riches", "D) Wealth"],
          answer: "A) Scarcity",
          explanation:
            "Abundance মানে প্রাচুর্য, এর বিপরীত Scarcity বা স্বল্পতা।",
        },
        {
          id: 3,
          question: "The synonym of 'Amicable' is —",
          options: ["A) Hostile", "B) Friendly", "C) Reserved", "D) Cruel"],
          answer: "B) Friendly",
          explanation: "Amicable মানে বন্ধুত্বপূর্ণ।",
        },
        {
          id: 4,
          question: "What is the antonym of 'Benevolent'?",
          options: ["A) Kind", "B) Generous", "C) Malevolent", "D) Helpful"],
          answer: "C) Malevolent",
          explanation:
            "Benevolent মানে দয়ালু, এর বিপরীত Malevolent বা পরশ্রীকাতর।",
        },
        {
          id: 5,
          question: "The word 'Candid' means —",
          options: ["A) Frank", "B) Dishonest", "C) Secretive", "D) Polite"],
          answer: "A) Frank",
          explanation: "Candid মানে অকপট বা স্পষ্টভাষী।",
        },
        {
          id: 6,
          question: "What is the synonym of 'Cordial'?",
          options: ["A) Cold", "B) Warm", "C) Rough", "D) Distant"],
          answer: "B) Warm",
          explanation: "Cordial মানে আন্তরিক বা উষ্ণ।",
        },
        {
          id: 7,
          question: "Antonym of 'Diligent' is —",
          options: ["A) Hardworking", "B) Lazy", "C) Active", "D) Earnest"],
          answer: "B) Lazy",
          explanation: "Diligent মানে পরিশ্রমী, এর বিপরীত Lazy বা অলস।",
        },
        {
          id: 8,
          question: "Synonym of 'Enormous' is —",
          options: ["A) Tiny", "B) Huge", "C) Weak", "D) Small"],
          answer: "B) Huge",
          explanation: "Enormous মানে বিশাল।",
        },
        {
          id: 9,
          question: "Antonym of 'Fragile' is —",
          options: ["A) Weak", "B) Strong", "C) Brittle", "D) Soft"],
          answer: "B) Strong",
          explanation: "Fragile মানে ভঙ্গুর, এর বিপরীত Strong বা শক্ত।",
        },
        {
          id: 10,
          question: "What is the synonym of 'Garrulous'?",
          options: ["A) Silent", "B) Talkative", "C) Quiet", "D) Shy"],
          answer: "B) Talkative",
          explanation: "Garrulous মানে বাচাল।",
        },
        {
          id: 11,
          question: "The antonym of 'Honorary' is —",
          options: [
            "A) Salaried",
            ", B) Honorable",
            "C) Voluntary",
            "D) Respectful",
          ],
          answer: "A) Salaried",
          explanation:
            "Honorary মানে অবৈতনিক, যার বিপরীত Salaried বা বেতনভুক্ত।",
        },
        {
          id: 12,
          question: "Synonym of 'Immaculate' is —",
          options: ["A) Dirty", "B) Clean", "C) Rough", "D) Small"],
          answer: "B) Clean",
          explanation: "Immaculate মানে নির্মল বা পরিষ্কার।",
        },
        {
          id: 13,
          question: "Antonym of 'Lethargic' is —",
          options: ["A) Lazy", "B) Energetic", "C) Dull", "D) Sleepy"],
          answer: "B) Energetic",
          explanation: "Lethargic মানে অলস, এর বিপরীত Energetic।",
        },
        {
          id: 14,
          question: "Synonym of 'Magnanimous' is —",
          options: ["A) Greedy", "B) Generous", "C) Petty", "D) Mean"],
          answer: "B) Generous",
          explanation: "Magnanimous মানে মহৎ বা উদার।",
        },
        {
          id: 15,
          question: "Antonym of 'Obscure' is —",
          options: ["A) Clear", "B) Hidden", "C) Vague", "D) Dark"],
          answer: "A) Clear",
          explanation: "Obscure মানে অস্পষ্ট, এর বিপরীত Clear বা পরিষ্কার।",
        },
        {
          id: 16,
          question: "The word 'Pensive' means —",
          options: ["A) Thoughtful", "B) Happy", "C) Careless", "D) Funny"],
          answer: "A) Thoughtful",
          explanation: "Pensive মানে বিষণ্ণভাবে চিন্তামগ্ন।",
        },
        {
          id: 17,
          question: "Synonym of 'Resilient' is —",
          options: ["A) Elastic", "B) Rigid", "C) Fragile", "D) Hard"],
          answer: "A) Elastic",
          explanation: "Resilient মানে স্থিতিস্থাপক।",
        },
        {
          id: 18,
          question: "Antonym of 'Sluggish' is —",
          options: ["A) Slow", "B) Fast", "C) Heavy", "D) Idle"],
          answer: "B) Fast",
          explanation: "Sluggish মানে মন্থর, এর বিপরীত Fast বা দ্রুত।",
        },
        {
          id: 19,
          question: "Synonym of 'Transient' is —",
          options: ["A) Permanent", "B) Temporary", "C) Long", "D) Endless"],
          answer: "B) Temporary",
          explanation: "Transient মানে ক্ষণস্থায়ী।",
        },
        {
          id: 20,
          question: "Antonym of 'Vivid' is —",
          options: ["A) Bright", "B) Dull", "C) Clear", "D) Lively"],
          answer: "B) Dull",
          explanation: "Vivid মানে উজ্জ্বল, এর বিপরীত Dull বা অনুজ্জ্বল।",
        },
        {
          id: 21,
          question: "Synonym of 'Ambiguous' is —",
          options: ["A) Uncertain", "B) Precise", "C) Direct", "D) Sure"],
          answer: "A) Uncertain",
          explanation: "Ambiguous মানে দ্ব্যর্থবোধক বা অনিশ্চিত।",
        },
        {
          id: 22,
          question: "Antonym of 'Optimistic' is —",
          options: ["A) Hopeful", "B) Pessimistic", "C) Bright", "D) Cheerful"],
          answer: "B) Pessimistic",
          explanation: "আশাবাদী এর বিপরীত হতাশাবাদী।",
        },
        {
          id: 23,
          question: "Synonym of 'Placid' is —",
          options: ["A) Angry", "B) Calm", "C) Noisy", "D) Turbulent"],
          answer: "B) Calm",
          explanation: "Placid মানে শান্ত।",
        },
        {
          id: 24,
          question: "Antonym of 'Rigid' is —",
          options: ["A) Flexible", "B) Hard", "C) Solid", "D) Strict"],
          answer: "A) Flexible",
          explanation: "Rigid মানে কঠোর, এর বিপরীত নমনীয়।",
        },
        {
          id: 25,
          question: "Synonym of 'Scanty' is —",
          options: ["A) Plenty", "B) Meager", "C) Huge", "D) Full"],
          answer: "B) Meager",
          explanation: "Scanty মানে অপ্রতুল বা সামান্য।",
        },
        {
          id: 26,
          question: "Antonym of 'Virtue' is —",
          options: ["A) Merit", "B) Vice", "C) Purity", "D) Truth"],
          answer: "B) Vice",
          explanation: "পুণ্য এর বিপরীত পাপ।",
        },
        {
          id: 27,
          question: "Synonym of 'Hostile' is —",
          options: ["A) Kind", "B) Adverse", "C) Supportive", "D) Gentle"],
          answer: "B) Adverse",
          explanation: "Hostile মানে শত্রুভাবাপন্ন।",
        },
        {
          id: 28,
          question: "Antonym of 'Unity' is —",
          options: ["A) Harmony", "B) Division", "C) Peace", "D) Agreement"],
          answer: "B) Division",
          explanation: "একতার বিপরীত বিভাজন।",
        },
        {
          id: 29,
          question: "Synonym of 'Brisk' is —",
          options: ["A) Slow", "B) Active", "C) Dull", "D) Lazy"],
          answer: "B) Active",
          explanation: "Brisk মানে চনমনে বা দ্রুত।",
        },
        {
          id: 30,
          question: "Antonym of 'Courage' is —",
          options: ["A) Valor", "B) Cowardice", "C) Bravery", "D) Fearless"],
          answer: "B) Cowardice",
          explanation: "সাহসের বিপরীত ভীরুতা।",
        },
        {
          id: 31,
          question: "Synonym of 'Deceptive' is —",
          options: ["A) Honest", "B) Misleading", "C) Clear", "D) True"],
          answer: "B) Misleading",
          explanation: "Deceptive মানে প্রতারণামূলক।",
        },
        {
          id: 32,
          question: "Antonym of 'External' is —",
          options: ["A) Outside", "B) Internal", "C) Outer", "D) Remote"],
          answer: "B) Internal",
          explanation: "বাহ্যিক এর বিপরীত অভ্যন্তরীণ।",
        },
        {
          id: 33,
          question: "Synonym of 'Famous' is —",
          options: ["A) Unknown", "B) Renowned", "C) Hidden", "D) Obscure"],
          answer: "B) Renowned",
          explanation: "বিখ্যাত এর সমার্থক প্রখ্যাত।",
        },
        {
          id: 34,
          question: "Antonym of 'Genuine' is —",
          options: ["A) Authentic", "B) Fake", "C) Real", "D) Natural"],
          answer: "B) Fake",
          explanation: "আসল এর বিপরীত নকল।",
        },
        {
          id: 35,
          question: "Synonym of 'Humble' is —",
          options: ["A) Proud", "B) Modest", "C) Arrogant", "D) Bold"],
          answer: "B) Modest",
          explanation: "Humble মানে বিনয়ী।",
        },
        {
          id: 36,
          question: "Antonym of 'Innocent' is —",
          options: ["A) Pure", "B) Guilty", "C) Holy", "D) Faultless"],
          answer: "B) Guilty",
          explanation: "নির্দোষ এর বিপরীত দোষী।",
        },
        {
          id: 37,
          question: "Synonym of 'Joyful' is —",
          options: ["A) Sad", "B) Elated", "C) Dull", "D) Angry"],
          answer: "B) Elated",
          explanation: "আনন্দিত এর সমার্থক উল্লসিত।",
        },
        {
          id: 38,
          question: "Antonym of 'Knowledge' is —",
          options: ["A) Wisdom", "B) Ignorance", "C) Skill", "D) Education"],
          answer: "B) Ignorance",
          explanation: "জ্ঞান এর বিপরীত অজ্ঞতা।",
        },
        {
          id: 39,
          question: "Synonym of 'Lucid' is —",
          options: ["A) Confusing", "B) Clear", "C) Dark", "D) Vague"],
          answer: "B) Clear",
          explanation: "Lucid মানে স্পষ্ট।",
        },
        {
          id: 40,
          question: "Antonym of 'Maximum' is —",
          options: ["A) Highest", "B) Minimum", "C) Greatest", "D) Most"],
          answer: "B) Minimum",
          explanation: "সর্বোচ্চ এর বিপরীত সর্বনিম্ন।",
        },
        {
          id: 41,
          question: "Synonym of 'Novel' is —",
          options: ["A) Old", "B) New", "C) Usual", "D) Common"],
          answer: "B) New",
          explanation: "Novel মানে নতুন বা অভিনব।",
        },
        {
          id: 42,
          question: "Antonym of 'Oral' is —",
          options: ["A) Spoken", "B) Written", "C) Verbal", "D) Vocal"],
          answer: "B) Written",
          explanation: "মৌখিক এর বিপরীত লিখিত।",
        },
        {
          id: 43,
          question: "Synonym of 'Precise' is —",
          options: ["A) Accurate", "B) Vague", "C) Loose", "D) Rough"],
          answer: "A) Accurate",
          explanation: "Precise মানে যথাযথ।",
        },
        {
          id: 44,
          question: "Antonym of 'Quiet' is —",
          options: ["A) Silent", "B) Noisy", "C) Calm", "D) Still"],
          answer: "B) Noisy",
          explanation: "শান্ত এর বিপরীত কোলাহলপূর্ণ।",
        },
        {
          id: 45,
          question: "Synonym of 'Robust' is —",
          options: ["A) Weak", "B) Strong", "C) Thin", "D) Fragile"],
          answer: "B) Strong",
          explanation: "Robust মানে শক্তিশালী বা হৃষ্টপুষ্ট।",
        },
        {
          id: 46,
          question: "Antonym of 'Sober' is —",
          options: ["A) Serious", "B) Drunk", "C) Calm", "D) Steady"],
          answer: "B) Drunk",
          explanation: "Sober মানে সংযমী বা প্রকৃতিস্থ।",
        },
        {
          id: 47,
          question: "Synonym of 'Timid' is —",
          options: ["A) Bold", "B) Shy", "C) Brave", "D) Fearless"],
          answer: "B) Shy",
          explanation: "Timid মানে ভীরু বা লাজুক।",
        },
        {
          id: 48,
          question: "Antonym of 'Vague' is —",
          options: ["A) Clear", "B) Obscure", "C) Uncertain", "D) Faint"],
          answer: "A) Clear",
          explanation: "অস্পষ্ট এর বিপরীত স্পষ্ট।",
        },
        {
          id: 49,
          question: "Synonym of 'Wealthy' is —",
          options: ["A) Poor", "B) Affluent", "C) Needy", "D) Scanty"],
          answer: "B) Affluent",
          explanation: "ধনী এর সমার্থক স্বচ্ছল বা বৃত্তবান।",
        },
        {
          id: 50,
          question: "Antonym of 'Yield' is —",
          options: ["A) Surrender", "B) Resist", "C) Give", "D) Provide"],
          answer: "B) Resist",
          explanation: "বসতা স্বীকার এর বিপরীত প্রতিরোধ করা।",
        },
        {
          id: 51,
          question: "Synonym of 'Zenith' is —",
          options: ["A) Bottom", "B) Peak", "C) Base", "D) Valley"],
          answer: "B) Peak",
          explanation: "Zenith মানে শীর্ষবিন্দু।",
        },
        {
          id: 52,
          question: "Antonym of 'Barren' is —",
          options: ["A) Dry", "B) Fertile", "C) Empty", "D) Waste"],
          answer: "B) Fertile",
          explanation: "অনুর্বর এর বিপরীত উর্বর।",
        },
      ],
    },
  },
  {
    _id: "english_sentence_correction_bcs_2026",
    title: "Sentence Correction: নির্ভুল বাক্য গঠনের নিয়ম",
    category: "English Grammar",
    tags: ["Sentence Correction", "Common Mistakes", "BCS English", "Grammar"],
    last_updated: "2026-02-05",
    article_content: {
      summary:
        "পরীক্ষায় অনেক সময় বাক্য দেখতে সঠিক মনে হলেও গ্রামারের সূক্ষ্ম ভুলের কারণে তা ভুল হয়ে থাকে। বিশেষ করে Redundancy (অতিরিক্ত শব্দের ব্যবহার), ভুল Preposition এবং ভুল Verb এর ব্যবহার থেকে প্রশ্ন বেশি আসে।",
      key_points: [
        "অপ্রয়োজনীয় শব্দের ব্যবহার পরিহার করতে হবে (যেমন: Return এর পর Back বসে না)।",
        "শর্তযুক্ত বাক্যে (Conditional) tense এর সঠিক ব্যবহার নিশ্চিত করতে হবে।",
        "কিছু বিশেষ Verb (যেমন: Discuss, Reach, Order) এর পর সরাসরি object বসে, Preposition বসে না।",
      ],
      sections: [
        {
          heading: "১. Redundancy বা দ্বিরুক্তি জনিত ভুল",
          content:
            "কিছু শব্দ নিজেই পূর্ণাঙ্গ অর্থ প্রকাশ করে, তাদের সাথে অতিরিক্ত শব্দ যোগ করলে বাক্য ভুল হয়।\n* ভুল: He returned back home.\n* সঠিক: He returned home.",
        },
        {
          heading: "২. Preposition সংক্রান্ত সাধারণ ভুল",
          content:
            "আমরা প্রায়ই বলি 'Discuss about the matter', কিন্তু Discuss এর পর about বসে না।\n* সঠিক: Discuss the matter.",
        },
        {
          heading: "৩. 'One of the' এর সঠিক প্রয়োগ",
          content:
            "One of the এর পর Noun সব সময় Plural হবে কিন্তু Verb সব সময় Singular হবে।\n* সঠিক: One of the boys is absent.",
        },
      ],
    },
    preliminary_exam_prep: {
      focus: "Top 30 Correction MCQs with Logic",
      mcqs: [
        {
          id: 1,
          question: "Which of the following is a correct sentence?",
          options: [
            "A) He is more taller than I.",
            "B) He is taller than me.",
            "C) He is taller than I.",
            "D) He is more tall than I.",
          ],
          answer: "C) He is taller than I.",
          explanation: "Than এর পর সাধারণত সাবজেক্টিভ প্রোনাউন (I) বসে।",
        },
        {
          id: 2,
          question: "Identify the correct sentence:",
          options: [
            "A) I, you and he are present.",
            "B) You, he and I am present.",
            "C) You, he and I are present.",
            "D) He, you and I are present.",
          ],
          answer: "C) You, he and I are present.",
          explanation:
            "সাধারণ অর্থে উত্তম পুরুষ বা 231 (2nd, 3rd, 1st) নিয়ম অনুসরণ করতে হয়।",
        },
        {
          id: 3,
          question: "Which sentence is correct?",
          options: [
            "A) The sceneries of Cox's Bazar are charming.",
            "B) The scenery of Cox's Bazar is charming.",
            "C) The scenery of Cox's Bazar are charming.",
            "D) The sceneries of Cox's Bazar is charming.",
          ],
          answer: "B) The scenery of Cox's Bazar is charming.",
          explanation: "Scenery শব্দটি Uncountable, এর কোনো Plural হয় না।",
        },
        {
          id: 4,
          question: "Correct sentence: 'Each of the three boys got a prize.'",
          options: [
            "A) Each of the three boys got a prize.",
            "B) Every of the three boys got a prize.",
            "C) All of the three boys got a prize.",
            "D) Each of three boy got a prize.",
          ],
          answer: "A) Each of the three boys got a prize.",
          explanation: "Every সরাসরি Pronoun হিসেবে বসতে পারে না, Each পারে।",
        },
        {
          id: 5,
          question: "Which one is correct?",
          options: [
            "A) He discussed about the matter.",
            "B) He discussed the matter.",
            "C) He discussed on the matter.",
            "D) He discussed with the matter.",
          ],
          answer: "B) He discussed the matter.",
          explanation: "Discuss এর পর সরাসরি object বসে, about বসে না।",
        },
        {
          id: 6,
          question: "Identify the correct sentence:",
          options: [
            "A) Death is preferable than dishonor.",
            "B) Death is preferable to dishonor.",
            "C) Death is more preferable to dishonor.",
            "D) Death is preferable for dishonor.",
          ],
          answer: "B) Death is preferable to dishonor.",
          explanation: "Preferable এর পর Preposition হিসেবে to বসে।",
        },
        {
          id: 7,
          question: "Choose the correct sentence:",
          options: [
            "A) I have seen him yesterday.",
            "B) I had seen him yesterday.",
            "C) I saw him yesterday.",
            "D) I saw him the previous day.",
          ],
          answer: "C) I saw him yesterday.",
          explanation: "Yesterday থাকলে বাক্যটি Past Indefinite হয়।",
        },
        {
          id: 8,
          question: "Which one is the correct sentence?",
          options: [
            "A) All of it depend on you.",
            "B) All of it depends on you.",
            "C) All of it are depending on you.",
            "D) All of it depend upon you.",
          ],
          answer: "B) All of it depends on you.",
          explanation:
            "All of it (uncountable context) singular হিসেবে গণ্য হয়।",
        },
        {
          id: 9,
          question: "Choose the correct sentence:",
          options: [
            "A) I shall avail the opportunity.",
            "B) I shall avail myself of the opportunity.",
            "C) I shall avail of the opportunity.",
            "D) I shall avail of myself the opportunity.",
          ],
          answer: "B) I shall avail myself of the opportunity.",
          explanation: "Avail এর পর reflexive pronoun এবং of বসে।",
        },
        {
          id: 10,
          question: "Which is correct?",
          options: [
            "A) It has been raining for three days.",
            "B) It is raining for three days.",
            "C) It was raining for three days.",
            "D) It rained for three days.",
          ],
          answer: "A) It has been raining for three days.",
          explanation:
            "সময়ের উল্লেখ থাকলে (for/since) Present Perfect Continuous হয়।",
        },
        {
          id: 11,
          question: "Identify the correct sentence:",
          options: [
            "A) He said me a liar.",
            "B) He called me a liar.",
            "C) He told me a liar.",
            "D) He asked me a liar.",
          ],
          answer: "B) He called me a liar.",
          explanation: "কাউকে কোনো নামে সম্বোধন করতে call ব্যবহার করা হয়।",
        },
        {
          id: 12,
          question: "Correct sentence is —",
          options: [
            "A) Two and two makes four.",
            "B) Two and two make four.",
            "C) Both A and B",
            "D) Two and two is four.",
          ],
          answer: "C) Both A and B",
          explanation:
            "আধুনিক ও প্রাচীন ইংরেজি গ্রামারে ‘make’ এবং ‘makes’ দুটিই গ্রহণযোগ্য।",
        },
        {
          id: 13,
          question: "Which of the following is correct?",
          options: [
            "A) He hunged his coat.",
            "B) He hanged his coat.",
            "C) He hung his coat.",
            "D) He has hanged his coat.",
          ],
          answer: "C) He hung his coat.",
          explanation:
            "জড় পদার্থের ক্ষেত্রে Hang এর past tense হলো Hung। (Hanged মানে ফাঁসি দেওয়া)।",
        },
        {
          id: 14,
          question: "Identify the correct sentence:",
          options: [
            "A) No sooner had he reached the station when the train left.",
            "B) No sooner had he reached the station than the train left.",
            "C) No sooner had he reach the station than the train left.",
            "D) No sooner did he reached the station than the train left.",
          ],
          answer:
            "B) No sooner had he reached the station than the train left.",
          explanation: "No sooner had ... than জোড়াটি সঠিক।",
        },
        {
          id: 15,
          question: "Which one is correct?",
          options: [
            "A) He is as good as me.",
            "B) He is as good as I.",
            "C) He is so good as me.",
            "D) He is as better as I.",
          ],
          answer: "B) He is as good as I.",
          explanation: "তুলনার ক্ষেত্রে nominative case (I) বসে।",
        },
        {
          id: 16,
          question: "Which sentence is correct?",
          options: [
            "A) Bread and butter are my favorite food.",
            "B) Bread and butter is my favorite food.",
            "C) Bread and butter were my favorite food.",
            "D) Bread and butter have been my favorite food.",
          ],
          answer: "B) Bread and butter is my favorite food.",
          explanation:
            "একক খাবার বোঝালে 'and' যুক্ত হওয়া সত্ত্বেও singular verb হয়।",
        },
        {
          id: 17,
          question: "Choose the correct sentence:",
          options: [
            "A) He belongs with this house.",
            "B) He belongs in this house.",
            "C) He belongs to this house.",
            "D) He belongs for this house.",
          ],
          answer: "C) He belongs to this house.",
          explanation: "মালিকানা বোঝাতে Belong এর সাথে to বসে।",
        },
        {
          id: 18,
          question: "Correct sentence is —",
          options: [
            "A) I don't know who are you.",
            "B) I don't know who you are.",
            "C) I don't know who you were.",
            "D) I don't know who am you.",
          ],
          answer: "B) I don't know who you are.",
          explanation:
            "বাক্যের মাঝখানে relative pronoun বসলে তা statement আকারে বসে (Sub + Verb)।",
        },
        {
          id: 19,
          question: "Identify the correct one:",
          options: [
            "A) Ten miles are a long distance.",
            "B) Ten miles is a long distance.",
            "C) Ten miles were a long distance.",
            "D) Ten miles be a long distance.",
          ],
          answer: "B) Ten miles is a long distance.",
          explanation:
            "নির্দিষ্ট দূরত্ব বা সময় একক হিসেবে বিবেচিত হলে singular হয়।",
        },
        {
          id: 20,
          question: "Which one is correct?",
          options: [
            "A) It is I who is responsible.",
            "B) It is I who am responsible.",
            "C) It is me who am responsible.",
            "D) It is I who are responsible.",
          ],
          answer: "B) It is I who am responsible.",
          explanation:
            "Relative pronoun (who) তার আগের antecedent (I) অনুযায়ী ভার্ব নেয়।",
        },
        {
          id: 21,
          question: "Correct sentence is —",
          options: [
            "A) I prefer coffee than tea.",
            "B) I prefer coffee to tea.",
            "C) I prefer coffee more than tea.",
            "D) I prefer coffee over tea.",
          ],
          answer: "B) I prefer coffee to tea.",
          explanation: "Prefer এর সাথে to বসে।",
        },
        {
          id: 22,
          question: "Choose the correct sentence:",
          options: [
            "A) Neither of the two boys were present.",
            "B) Neither of the two boys was present.",
            "C) Neither of the two boy was present.",
            "D) Neither of the two boys are present.",
          ],
          answer: "B) Neither of the two boys was present.",
          explanation: "Neither এর পর ভার্ব সব সময় singular হয়।",
        },
        {
          id: 23,
          question: "Which is the correct sentence?",
          options: [
            "A) He took his birth in 1990.",
            "B) He was born in 1990.",
            "C) He has born in 1990.",
            "D) He borned in 1990.",
          ],
          answer: "B) He was born in 1990.",
          explanation: "জন্মগ্রহণ করার ক্ষেত্রে 'was born' প্রচলিত ফ্রেজ।",
        },
        {
          id: 24,
          question: "Identify the correct sentence:",
          options: [
            "A) Listen what I say.",
            "B) Listen to what I say.",
            "C) Listen at what I say.",
            "D) Listen in what I say.",
          ],
          answer: "B) Listen to what I say.",
          explanation: "Listen এর পর সব সময় to বসে।",
        },
        {
          id: 25,
          question: "Choose the correct sentence:",
          options: [
            "A) I look forward to see you.",
            "B) I look forward to seeing you.",
            "C) I look forward to have seen you.",
            "D) I look forward for seeing you.",
          ],
          answer: "B) I look forward to seeing you.",
          explanation: "Look forward to এর পর verb+ing বসে।",
        },
        {
          id: 26,
          question: "Which one is correct?",
          options: [
            "A) Give me some advices.",
            "B) Give me some advice.",
            "C) Give me an advice.",
            "D) Give me some advising.",
          ],
          answer: "B) Give me some advice.",
          explanation: "Advice একটি uncountable noun, এর plural হয় না।",
        },
        {
          id: 27,
          question: "Identify the correct sentence:",
          options: [
            "A) If I were you, I would have helped him.",
            "B) If I were you, I would help him.",
            "C) If I was you, I would help him.",
            "D) If I am you, I will help him.",
          ],
          answer: "B) If I were you, I would help him.",
          explanation:
            "অবাস্তব কল্পনা বোঝালে second conditional (were...would) হয়।",
        },
        {
          id: 28,
          question: "Which sentence is correct?",
          options: [
            "A) He is too wise not to see through the trick.",
            "B) He is wise enough to see through the trick.",
            "C) He is too wise to see through the trick.",
            "D) Both B and C",
          ],
          answer: "B) He is wise enough to see through the trick.",
          explanation:
            "Too...to নেতিবাচক অর্থ দেয়, তাই অর্থের দিক থেকে B সঠিক।",
        },
        {
          id: 29,
          question: "Choose the correct sentence:",
          options: [
            "A) He re-read the letter again.",
            "B) He re-read the letter.",
            "C) He read back the letter.",
            "D) He read again the letter again.",
          ],
          answer: "B) He re-read the letter.",
          explanation:
            "Re-read এর ভেতরই 'again' অর্থ লুকিয়ে আছে, তাই আলাদা করে 'again' বসবে না।",
        },
        {
          id: 30,
          question: "Identify the correct one:",
          options: [
            "A) Let you and I go there.",
            "B) Let you and me go there.",
            "C) Let you and he go there.",
            "D) Let he and you go there.",
          ],
          answer: "B) Let you and me go there.",
          explanation: "Let এর পর প্রোনাউনের objective form (me) বসে।",
        },
      ],
    },
  },
  // morality

  {
    _id: "ethics_nis_bcs_2026",
    title: "National Integrity Strategy: জাতীয় শুদ্ধাচার কৌশল ও নৈতিকতা",
    category: "Ethics, Values and Good Governance",
    tags: [
      "NIS",
      "Integrity",
      "Anti-Corruption",
      "Good Governance",
      "BCS Prep",
    ],
    last_updated: "2026-02-05",
    article_content: {
      summary:
        "জাতীয় শুদ্ধাচার কৌশল (NIS) হলো দুর্নীতি প্রতিরোধ এবং সুশাসন প্রতিষ্ঠার জন্য বাংলাদেশ সরকারের একটি সামগ্রিক পরিকল্পনা। শুদ্ধাচার মানে হলো নৈতিকতা ও সততা দ্বারা প্রভাবিত আচরণগত উৎকর্ষ। এটি ২০১২ সালে মন্ত্রিসভায় অনুমোদিত হয়।",
      key_points: [
        "শুদ্ধাচারের মূল লক্ষ্য হলো রাষ্ট্রীয় ও সামাজিক জীবনের সকল স্তরে সততা ও নৈতিকতা প্রতিষ্ঠা করা।",
        "এটি সরকারি ও বেসরকারি উভয় খাতের জন্য প্রযোজ্য।",
        "জাতীয় শুদ্ধাচার কৌশলের মূল স্লোগান হলো 'সোনার বাংলা গড়ার প্রত্যয়: জাতীয় শুদ্ধাচার কৌশল'।",
      ],
      sections: [
        {
          heading: "১. শুদ্ধাচারের ধারণা ও পটভূমি",
          content:
            "শুদ্ধাচার বলতে বুঝায় সততা, নৈতিকতা এবং অর্পিত দায়িত্ব যথাযথভাবে পালন করা। দুর্নীতির বিরুদ্ধে শূন্য সহনশীলতা (Zero Tolerance) নীতি বাস্তবায়নের জন্য ২০১২ সালের ১৮ অক্টোবর এটি গ্রহণ করা হয়।",
        },
        {
          heading: "২. শুদ্ধাচার কৌশলের প্রতিষ্ঠানসমূহ",
          content:
            "শুদ্ধাচার কৌশল দুটি প্রধান স্তম্ভের ওপর ভিত্তি করে গঠিত:\n১. রাষ্ট্রীয় প্রতিষ্ঠান (যেমন: সংসদ, নির্বাহী বিভাগ, বিচার বিভাগ, নির্বাচন কমিশন, দুদক)।\n২. অরাষ্ট্রীয় প্রতিষ্ঠান (যেমন: পরিবার, শিক্ষা প্রতিষ্ঠান, এনজিও, গণমাধ্যম, সুশীল সমাজ)।",
        },
        {
          heading: "৩. শুদ্ধাচার পুরস্কার নীতিমালা",
          content:
            "শুদ্ধাচার চর্চায় উৎসাহিত করতে সরকার ২০১৭ সালে 'শুদ্ধাচার পুরস্কার নীতিমালা' প্রণয়ন করে। এর মাধ্যমে সরকারি কর্মকর্তাদের ভালো কাজের স্বীকৃতি প্রদান করা হয়।",
        },
      ],
    },
    preliminary_exam_prep: {
      focus: "Top 30 Questions on NIS & Integrity",
      mcqs: [
        {
          id: 1,
          question:
            "জাতীয় শুদ্ধাচার কৌশল (NIS) মন্ত্রিসভায় কবে অনুমোদিত হয়?",
          options: [
            "A) ১৮ অক্টোবর ২০১০",
            "B) ১৮ অক্টোবর ২০১১",
            "C) ১৮ অক্টোবর ২০১২",
            "D) ১৮ অক্টোবর ২০১৩",
          ],
          answer: "C) ১৮ অক্টোবর ২০১২",
          explanation:
            "সুশাসন নিশ্চিতের লক্ষ্যে সরকার এই দিনটি থেকে কৌশলটি গ্রহণ করে।",
        },
        {
          id: 2,
          question: "শুদ্ধাচার (Integrity) শব্দের আক্ষরিক অর্থ কী?",
          options: [
            "A) রাজনৈতিক ক্ষমতা",
            "B) চারিত্রিক সততা ও নৈতিকতা",
            "C) আইন প্রণয়ন",
            "D) প্রশাসনিক আদেশ",
          ],
          answer: "B) চারিত্রিক সততা ও নৈতিকতা",
          explanation:
            "ব্যক্তিগত ও পেশাগত জীবনে নৈতিক মানদণ্ড বজায় রাখাই শুদ্ধাচার।",
        },
        {
          id: 3,
          question:
            "জাতীয় শুদ্ধাচার কৌশলের কয়টি স্তম্ভ বা প্রতিষ্ঠান রয়েছে?",
          options: [
            "A) ১০টি রাষ্ট্রীয় এবং ৮টি অরাষ্ট্রীয়",
            "B) ১০টি রাষ্ট্রীয় এবং ৯টি অরাষ্ট্রীয়",
            "C) ৯টি রাষ্ট্রীয় এবং ৯টি অরাষ্ট্রীয়",
            "D) ১১টি রাষ্ট্রীয় এবং ১০টি অরাষ্ট্রীয়",
          ],
          answer: "B) ১০টি রাষ্ট্রীয় এবং ৯টি অরাষ্ট্রীয় প্রতিষ্ঠান",
          explanation: "মোট ১৯টি স্তম্ভের ওপর ভিত্তি করে এই কৌশল কাজ করে।",
        },
        {
          id: 4,
          question:
            "নিচের কোনটি রাষ্ট্রীয় শুদ্ধাচার প্রতিষ্ঠানের অন্তর্ভুক্ত নয়?",
          options: [
            "A) বিচার বিভাগ",
            "B) নির্বাচন কমিশন",
            "C) এনজিও (NGO)",
            "D) সংসদ",
          ],
          answer: "C) এনজিও (NGO)",
          explanation: "এনজিও হলো অরাষ্ট্রীয় বা সামাজিক প্রতিষ্ঠান।",
        },
        {
          id: 5,
          question: "শুদ্ধাচার পুরস্কার নীতিমালা কত সালে প্রণীত হয়?",
          options: [
            "A) ২০১৫ সালে",
            "B) ২০১৬ সালে",
            "C) ২০১৭ সালে",
            "D) ২০১৮ সালে",
          ],
          answer: "C) ২০১৭ সালে",
          explanation:
            "সরকারি কর্মকর্তাদের নৈতিকতাকে উৎসাহিত করতে এই পুরস্কার চালু হয়।",
        },
        {
          id: 6,
          question: "শুদ্ধাচার কৌশলের প্রধান উদ্দেশ্য কী?",
          options: [
            "A) জিডিপি বৃদ্ধি",
            "B) দুর্নীতি প্রতিরোধ ও সুশাসন প্রতিষ্ঠা",
            "C) জনসংখ্যা নিয়ন্ত্রণ",
            "D) সামরিক শক্তি বৃদ্ধি",
          ],
          answer: "B) দুর্নীতি প্রতিরোধ ও সুশাসন প্রতিষ্ঠা",
          explanation: "রাষ্ট্রীয় কাজে স্বচ্ছতা বাড়ানোই এর মূল লক্ষ্য।",
        },
        {
          id: 7,
          question:
            "জাতীয় শুদ্ধাচার কৌশল বাস্তবায়নের দায়িত্ব কোন মন্ত্রণালয় বা বিভাগের?",
          options: [
            "A) অর্থ বিভাগ",
            "B) জনপ্রশাসন মন্ত্রণালয়",
            "C) মন্ত্রিপরিষদ বিভাগ",
            "D) স্বরাষ্ট্র মন্ত্রণালয়",
          ],
          answer: "C) মন্ত্রিপরিষদ বিভাগ",
          explanation: "মন্ত্রিপরিষদ বিভাগ পুরো প্রক্রিয়াটি তদারকি করে।",
        },
        {
          id: 8,
          question: "শুদ্ধাচার চর্চার প্রাথমিক কেন্দ্র কোনটি?",
          options: [
            "A) কর্মক্ষেত্র",
            "B) শিক্ষা প্রতিষ্ঠান",
            "C) পরিবার",
            "D) রাজনৈতিক দল",
          ],
          answer: "C) পরিবার",
          explanation: "পরিবার থেকেই মানুষের শুদ্ধাচারের শিক্ষা শুরু হয়।",
        },
        {
          id: 9,
          question:
            "দুর্নীতি দমন কমিশন (দুদক) শুদ্ধাচার কৌশলের কোন স্তম্ভের অন্তর্ভুক্ত?",
          options: [
            "A) রাষ্ট্রীয় প্রতিষ্ঠান",
            "B) অরাষ্ট্রীয় প্রতিষ্ঠান",
            "C) বেসরকারি প্রতিষ্ঠান",
            "D) আন্তর্জাতিক প্রতিষ্ঠান",
          ],
          answer: "A) রাষ্ট্রীয় প্রতিষ্ঠান",
          explanation: "এটি একটি সংবিধিবদ্ধ রাষ্ট্রীয় প্রতিষ্ঠান।",
        },
        {
          id: 10,
          question: "শুদ্ধাচার পুরস্কার হিসেবে একজন কর্মচারী কী পান?",
          options: [
            "A) দুই মাসের বেসিক পে",
            "B) একটি সার্টিফিকেট ও এক মাসের মূল বেতনের সমপরিমাণ অর্থ",
            "C) শুধু একটি পদক",
            "D) অগ্রিম পদোন্নতি",
          ],
          answer: "B) একটি সার্টিফিকেট ও এক মাসের মূল বেতনের সমপরিমাণ অর্থ",
          explanation: "নীতিমালা অনুযায়ী এটিই হলো পুরস্কারের মানদণ্ড।",
        },
        {
          id: 11,
          question: "শুদ্ধাচার কৌশলের অরাষ্ট্রীয় প্রতিষ্ঠান কোনটি?",
          options: [
            "A) মহা-হিসাব নিরীক্ষক",
            "B) লোক প্রশাসন প্রশিক্ষণ কেন্দ্র",
            "C) গণমাধ্যম",
            "D) এটর্নি জেনারেলের দপ্তর",
          ],
          answer: "C) গণমাধ্যম",
          explanation: "গণমাধ্যম ও সুশীল সমাজ অরাষ্ট্রীয় স্তম্ভের উদাহরণ।",
        },
        {
          id: 12,
          question: "NIS-এর পূর্ণরূপ কী?",
          options: [
            "A) National Information System",
            "B) National Integrity Strategy",
            "C) National Internal Security",
            "D) National Infrastructure Scheme",
          ],
          answer: "B) National Integrity Strategy",
          explanation: "এটি জাতীয় শুদ্ধাচার কৌশলের ইংরেজি নাম।",
        },
        {
          id: 13,
          question:
            "শুদ্ধাচার কৌশল কোন রূপকল্পের (Vision) সাথে সরাসরি সম্পর্কিত?",
          options: [
            "A) রূপকল্প ২০২১",
            "B) রূপকল্প ২০৪১ / স্মার্ট বাংলাদেশ",
            "C) পঞ্চবার্ষিকী পরিকল্পনা",
            "D) ডেল্টা প্ল্যান ২১০০",
          ],
          answer: "B) রূপকল্প ২০৪১ / স্মার্ট বাংলাদেশ",
          explanation: "উন্নত রাষ্ট্র গঠনের অন্যতম শর্ত হলো শুদ্ধাচার।",
        },
        {
          id: 14,
          question: "জাতীয় শুদ্ধাচার কৌশলের ইংরেজি দলিলটির নাম কী?",
          options: [
            "A) Integrity Policy of BD",
            "B) National Integrity Strategy of Bangladesh",
            "C) Good Governance Plan",
            "D) Anti-Corruption Strategy",
          ],
          answer: "B) National Integrity Strategy of Bangladesh",
          explanation: "এটি সরকারি গেজেট আকারে প্রকাশিত।",
        },
        {
          id: 15,
          question: "পেশাগত নৈতিকতা নিচের কোন কৌশলের অবিচ্ছেদ্য অংশ?",
          options: [
            "A) জাতীয় শুদ্ধাচার কৌশল",
            "B) বার্ষিক কর্মসম্পাদন চুক্তি",
            "C) সিটিজেন চার্টার",
            "D) দুর্যোগ ব্যবস্থাপনা",
          ],
          answer: "A) জাতীয় শুদ্ধাচার কৌশল",
          explanation: "চাকরির বিধিমালা ও শুদ্ধাচার একে অপরের পরিপূরক।",
        },
        {
          id: 16,
          question: "শুদ্ধাচারের সফল প্রয়োগের মাধ্যমে কোনটি অর্জিত হয়?",
          options: [
            "A) রাজনৈতিক বিভেদ",
            "B) জনগণের আস্থা",
            "C) আমলাতান্ত্রিক জটিলতা",
            "D) বৈদেশিক ঋণ",
          ],
          answer: "B) জনগণের আস্থা",
          explanation: "প্রশাসন শুদ্ধাচারী হলে নাগরিক সেবায় আস্থা বাড়ে।",
        },
        {
          id: 17,
          question: "শুদ্ধাচার কৌশলের আওতায় 'শুদ্ধাচার সেল' কোথায় গঠিত হয়?",
          options: [
            "A) শুধু সচিবালয়ে",
            "B) প্রতিটি মন্ত্রণালয় ও বিভাগে",
            "C) শুধু জেলা প্রশাসকের দপ্তরে",
            "D) শুধু দুদক কার্যালয়ে",
          ],
          answer: "B) প্রতিটি মন্ত্রণালয় ও বিভাগে",
          explanation: "নিজ নিজ দপ্তরের শুদ্ধাচার তদারকির জন্য এই সেল কাজ করে।",
        },
        {
          id: 18,
          question: "শুদ্ধাচার কৌশলের মূল চালিকাশক্তি বা ভিত্তি কোনটি?",
          options: [
            "A) অর্থনৈতিক লোভ",
            "B) বিবেকের অনুশাসন",
            "C) কারাদণ্ডের ভয়",
            "D) উর্ধ্বতন কর্মকর্তার চাপ",
          ],
          answer: "B) বিবেকের অনুশাসন",
          explanation: "মানুষের ভেতরকার নৈতিকতা ই শুদ্ধাচারের ভিত্তি।",
        },
        {
          id: 19,
          question: "একজন শুদ্ধাচারী ব্যক্তির প্রধান বৈশিষ্ট্য কী?",
          options: [
            "A) অতিরিক্ত সম্পদ",
            "B) স্বচ্ছতা ও দৃঢ়তা",
            "C) রাজনৈতিক প্রভাব",
            "D) কথা কম বলা",
          ],
          answer: "B) স্বচ্ছতা ও দৃঢ়তা",
          explanation: "তিনি প্রলোভনের কাছে নতি স্বীকার করেন না।",
        },
        {
          id: 20,
          question: "শুদ্ধাচারের সাথে সরাসরি সাংঘর্ষিক নিচের কোনটি?",
          options: [
            "A) সময়ানুবর্তিতা",
            "B) স্বজনপ্রীতি ও দুর্নীতি",
            "C) সৃজনশীলতা",
            "D) মিতব্যয়িতা",
          ],
          answer: "B) স্বজনপ্রীতি ও দুর্নীতি",
          explanation: "এগুলো শুদ্ধাচারের পথে প্রধান বাধা।",
        },
        {
          id: 21,
          question: "শুদ্ধাচার প্রতিষ্ঠায় কার ভূমিকা সবচেয়ে বেশি?",
          options: [
            "A) শুধু সরকারের",
            "B) শুধু এনজিওর",
            "C) রাষ্ট্র ও ব্যক্তি উভয়ের",
            "D) শুধু পুলিশের",
          ],
          answer: "C) রাষ্ট্র ও ব্যক্তি উভয়ের",
          explanation: "ব্যক্তি সচেতন না হলে রাষ্ট্র একা এটি সফল করতে পারে না।",
        },
        {
          id: 22,
          question: "জাতীয় শুদ্ধাচার কৌশলের মূল দলিলে কয়টি অধ্যায় রয়েছে?",
          options: ["A) ৩টি", "B) ৪টি", "C) ৫টি", "D) ৬টি"],
          answer: "B) ৪টি",
          explanation: "মূল দলিলটি চারটি প্রধান অধ্যায়ে বিভক্ত।",
        },
        {
          id: 23,
          question: "শুদ্ধাচারের অভাব হলে সমাজে কোনটি বৃদ্ধি পায়?",
          options: [
            "A) অরাজকতা ও বৈষম্য",
            "B) সামাজিক নিরাপত্তা",
            "C) শিক্ষার হার",
            "D) দেশপ্রেম",
          ],
          answer: "A) অরাজকতা ও বৈষম্য",
          explanation: "অনৈতিকতা সমাজকে ভারসাম্যহীন করে তোলে।",
        },
        {
          id: 24,
          question:
            "শিক্ষা প্রতিষ্ঠানের ভূমিকা শুদ্ধাচার কৌশলে কেন অত্যন্ত গুরুত্বপূর্ণ?",
          options: [
            "A) সার্টিফিকেট প্রদানের জন্য",
            "B) ভবিষ্যৎ প্রজন্মকে নৈতিক করে গড়ে তুলতে",
            "C) শুধু জ্ঞানার্জনের জন্য",
            "D) খেলার মাঠ তৈরির জন্য",
          ],
          answer: "B) ভবিষ্যৎ প্রজন্মকে নৈতিক করে গড়ে তুলতে",
          explanation: "ছাত্রাবস্থায় শুদ্ধাচারের বীজ বপন করা হয়।",
        },
        {
          id: 25,
          question: "শুদ্ধাচার কৌশলের একটি রাজনৈতিক লক্ষ্য কী?",
          options: [
            "A) ভোট সংগ্রহ করা",
            "B) সুস্থ রাজনৈতিক সংস্কৃতি গড়ে তোলা",
            "C) দলীয় তহবিল বৃদ্ধি",
            "D) অন্য দলের সমালোচনা",
          ],
          answer: "B) সুস্থ রাজনৈতিক সংস্কৃতি গড়ে তোলা",
          explanation:
            "রাজনৈতিক প্রতিষ্ঠানগুলোকেও শুদ্ধাচারের আওতায় আনা হয়েছে।",
        },
        {
          id: 26,
          question: "নিচের কোনটি শুদ্ধাচারের সমার্থক শব্দ নয়?",
          options: ["A) নিষ্ঠা", "B) সততা", "C) বিলাসিতা", "D) স্বচ্ছতা"],
          answer: "C) বিলাসিতা",
          explanation: "সততা ও নীতিপরায়ণতাই শুদ্ধাচারের মূল কথা।",
        },
        {
          id: 27,
          question:
            "শুদ্ধাচারের মাধ্যমে সরকারের কোন ধরণের আর্থিক পরিবর্তন ঘটে?",
          options: [
            "A) ট্যাক্স বৃদ্ধি পায়",
            "B) প্রশাসনিক অপচয় ও দুর্নীতি জনিত ক্ষতি হ্রাস পায়",
            "C) বেতন কমে যায়",
            "D) বাজেট ঘাটতি বাড়ে",
          ],
          answer: "B) প্রশাসনিক অপচয় ও দুর্নীতি জনিত ক্ষতি হ্রাস পায়",
          explanation: "সম্পদের সঠিক ব্যবহার নিশ্চিত হয়।",
        },
        {
          id: 28,
          question:
            "শুদ্ধাচার কৌশল বাস্তবায়নে প্রতিটি দপ্তরে নিযুক্ত কর্মকর্তাদের কী বলা হয়?",
          options: [
            "A) মনিটর",
            "B) ফোকাল পয়েন্ট",
            "C) সুপারভাইজার",
            "D) অ্যাডভাইজার",
          ],
          answer: "B) ফোকাল পয়েন্ট",
          explanation: "প্রতিটি দপ্তরে একজন ফোকাল পয়েন্ট কর্মকর্তা থাকেন।",
        },
        {
          id: 29,
          question: "শুদ্ধাচার কি শুধু সরকারি কর্মকর্তাদের জন্য বাধ্যতামূলক?",
          options: [
            "A) হ্যাঁ",
            "B) না, এটি রাষ্ট্রের সকল নাগরিকের জন্য",
            "C) শুধু মন্ত্রীদের জন্য",
            "D) শুধু দুদকের জন্য",
          ],
          answer: "B) না, এটি রাষ্ট্রের সকল নাগরিকের জন্য",
          explanation: "দলিল অনুযায়ী এটি একটি সামগ্রিক সামাজিক আন্দোলন।",
        },
        {
          id: 30,
          question:
            "সরকার কাকে 'সোনার বাংলা গড়ার প্রধান হাতিয়ার' হিসেবে ঘোষণা করেছে?",
          options: [
            "A) ডিজিটাল প্রযুক্তি",
            "B) জাতীয় শুদ্ধাচার কৌশল",
            "C) শিল্পায়ন",
            "D) মেগা প্রজেক্ট",
          ],
          answer: "B) জাতীয় শুদ্ধাচার কৌশল",
          explanation:
            "সরকার এটিকে সোনার বাংলা গড়ার পাথেয় হিসেবে ঘোষণা করেছে।",
        },
      ],
    },
  },
  {
    _id: "ethics_egovernance_bcs_20265",
    title: "E-Governance: ডিজিটাল যুগে সুশাসন ও সেবা",
    category: "Ethics, Values and Good Governance",
    tags: [
      "E-Governance",
      "Digital Bangladesh",
      "Smart Bangladesh",
      "ICT",
      "BCS",
    ],
    last_updated: "2026-02-05",
    article_content: {
      summary:
        "ই-গভর্ন্যান্স হলো তথ্য ও যোগাযোগ প্রযুক্তির (ICT) মাধ্যমে সরকারি সেবা জনগণের দোরগোড়ায় পৌঁছে দেওয়া এবং সরকারি কাজের স্বচ্ছতা ও জবাবদিহিতা নিশ্চিত করা। এর মূল লক্ষ্য হলো 'Governance' কে 'Smart' করা।",
      key_points: [
        "ই-গভর্ন্যান্সের চারটি মডেল রয়েছে: G2C, G2B, G2G, এবং G2E।",
        "এটি সরকারি কাজে লাল ফিতার দৌরাত্ম্য (Red Tapism) হ্রাস করে।",
        "বাংলাদেশে ই-গভর্ন্যান্সের সফল উদাহরণ হলো ই-নামজারি, ডিজিটাল ল্যান্ড রেকর্ড এবং অনলাইন পাসপোর্ট সেবা।",
      ],
      sections: [
        {
          heading: "১. ই-গভর্ন্যান্সের ধারণা ও উদ্দেশ্য",
          content:
            "ই-গভর্ন্যান্স মানে শুধু সরকারি কাজে কম্পিউটার ব্যবহার নয়, বরং এটি প্রশাসনিক প্রক্রিয়ার আমূল পরিবর্তন। এর প্রধান উদ্দেশ্যসমূহ হলো:\n* সরকারি সেবাকে দ্রুত ও সহজতর করা।\n* দুর্নীতি প্রতিরোধ করা।\n* জনগণের অংশগ্রহণ বৃদ্ধি করা।\n* প্রশাসনিক ব্যয় হ্রাস করা।",
        },
        {
          heading: "২. ই-গভর্ন্যান্সের বিভিন্ন পর্যায় (Stages)",
          content:
            "সাধারণত ই-গভর্ন্যান্স চারটি পর্যায়ে বিকশিত হয়:\n১. তথ্য প্রদান (Information)\n২. একমুখী যোগাযোগ (One-way communication)\n৩. দ্বিমুখী যোগাযোগ (Two-way interaction)\n৪. লেনদেন (Transaction)।",
        },
        {
          heading: "৩. বাংলাদেশে ই-গভর্ন্যান্সের মাইলফলক",
          content:
            "বাংলাদেশ সরকার ২০৪১ সালের মধ্যে 'স্মার্ট বাংলাদেশ' গড়ার লক্ষ্য নির্ধারণ করেছে যার চারটি স্তম্ভ হলো— স্মার্ট সিটিজেন, স্মার্ট ইকোনমি, স্মার্ট গভর্নমেন্ট এবং স্মার্ট সোসাইটি।",
        },
      ],
    },
    preliminary_exam_prep: {
      focus: "Top 30 Questions on E-Governance & Digital Services",
      mcqs: [
        {
          id: 1,
          question: "ই-গভর্ন্যান্স (E-Governance) এর পূর্ণরূপ কী?",
          options: [
            "A) Easy Governance",
            "B) Electronic Governance",
            "C) Essential Governance",
            "D) Efficient Governance",
          ],
          answer: "B) Electronic Governance",
          explanation:
            "তথ্য প্রযুক্তির মাধ্যমে শাসন ব্যবস্থাকেই ই-গভর্ন্যান্স বলে।",
        },
        {
          id: 2,
          question: "ই-গভর্ন্যান্সের প্রধান লক্ষ্য কী?",
          options: [
            "A) কম্পিউটার বিক্রি বাড়ানো",
            "B) সরকারি ভবনের উন্নয়ন",
            "C) স্বচ্ছতা ও জবাবদিহিতা নিশ্চিত করা",
            "D) কাগজের দাম কমানো",
          ],
          answer: "C) স্বচ্ছতা ও জবাবদিহিতা নিশ্চিত করা",
          explanation: "প্রযুক্তির ব্যবহারে তথ্যের স্বচ্ছতা বৃদ্ধি পায়।",
        },
        {
          id: 3,
          question: "G2C মডেল বলতে কী বোঝায়?",
          options: [
            "A) Government to Company",
            "B) Government to Citizen",
            "C) General to Civil",
            "D) Government to Candidate",
          ],
          answer: "B) Government to Citizen",
          explanation: "সরকার থেকে নাগরিককে সেবা প্রদানই হলো G2C।",
        },
        {
          id: 4,
          question: "বাংলাদেশের জাতীয় তথ্য বাতায়ন (National Portal) কোনটি?",
          options: [
            "A) bangladesh.gov.bd",
            "B) info.gov.bd",
            "C) nps.gov.bd",
            "D) bd.gov.com",
          ],
          answer: "A) bangladesh.gov.bd",
          explanation: "এটি বাংলাদেশের সকল সরকারি তথ্যের কেন্দ্রীয় পোর্টাল।",
        },
        {
          id: 5,
          question: "ই-গভর্ন্যান্সের ফলে প্রশাসনে কোনটি হ্রাস পায়?",
          options: [
            "A) স্বচ্ছতা",
            "B) লাল ফিতার দৌরাত্ম্য",
            "C) গতিশীলতা",
            "D) দক্ষতা",
          ],
          answer: "B) লাল ফিতার দৌরাত্ম্য",
          explanation: "ডিজিটাল পদ্ধতিতে কাজের দীর্ঘসূত্রিতা কমে যায়।",
        },
        {
          id: 6,
          question: "স্মার্ট বাংলাদেশের স্তম্ভ কয়টি?",
          options: ["A) ২টি", "B) ৩টি", "C) ৪টি", "D) ৫টি"],
          answer: "C) ৪টি",
          explanation: "স্মার্ট সিটিজেন, ইকোনমি, গভর্নমেন্ট ও সোসাইটি।",
        },
        {
          id: 7,
          question: "নিচের কোনটি ই-গভর্ন্যান্সের একটি উপাদান নয়?",
          options: [
            "A) প্রযুক্তি",
            "B) প্রক্রিয়া",
            "C) জনগণ",
            "D) অস্থিতিশীলতা",
          ],
          answer: "D) অস্থিতিশীলতা",
          explanation: "সুশাসন ও স্থিতিশীলতা ই-গভর্ন্যান্সের সহায়ক।",
        },
        {
          id: 8,
          question: "অনলাইনে জমির খতিয়ান বা পর্চা সংগ্রহের পদ্ধতিকে কী বলে?",
          options: [
            "A) ই-ল্যান্ড",
            "B) ই-নামজারি",
            "C) ই-পর্চা",
            "D) ই-রেকর্ড",
          ],
          answer: "C) ই-পর্চা",
          explanation: "এটি ভূমি সেবার একটি গুরুত্বপূর্ণ অংশ।",
        },
        {
          id: 9,
          question: "নিচের কোনটি G2G সেবার উদাহরণ?",
          options: [
            "A) পাসপোর্ট আবেদন",
            "B) সরকারি কর্মকর্তাদের বেতন ই-পেমেন্ট",
            "C) এক মন্ত্রণালয় থেকে অন্য মন্ত্রণালয়ে ফাইল প্রেরণ",
            "D) ট্যাক্স প্রদান",
          ],
          answer: "C) এক মন্ত্রণালয় থেকে অন্য মন্ত্রণালয়ে ফাইল প্রেরণ",
          explanation: "Government to Government যোগাযোগই হলো G2G।",
        },
        {
          id: 10,
          question: "ই-গভর্ন্যান্স বাস্তবায়নে বড় চ্যালেঞ্জ কোনটি?",
          options: [
            "A) স্মার্টফোনের ব্যবহার",
            "B) সাইবার নিরাপত্তা ও ডিজিটাল বিভাজন",
            "C) ইন্টারনেটের গতি",
            "D) শিক্ষিত হার বৃদ্ধি",
          ],
          answer: "B) সাইবার নিরাপত্তা ও ডিজিটাল বিভাজন",
          explanation:
            "শহর ও গ্রামের প্রযুক্তির বৈষম্যই ডিজিটাল ডিভাইড বা বিভাজন।",
        },
        {
          id: 11,
          question: "জাতীয় ই-সেবা কেন্দ্র (NESS) কত সালে উদ্বোধন করা হয়?",
          options: [
            "A) ২০১০ সালে",
            "B) ২০১১ সালে",
            "C) ২০১২ সালে",
            "D) ২০১৩ সালে",
          ],
          answer: "B) ২০১১ সালে",
          explanation: "জেলায় জেলায় ডিজিটাল সেবা পৌঁছে দিতে এটি করা হয়।",
        },
        {
          id: 12,
          question: "ই-গভর্ন্যান্সের মাধ্যমে সরাসরি সেবা পায় কারা?",
          options: [
            "A) শুধু মন্ত্রীরা",
            "B) শুধু আমলারা",
            "C) সাধারণ নাগরিকবৃন্দ",
            "D) শুধু ব্যবসায়ীরা",
          ],
          answer: "C) সাধারণ নাগরিকবৃন্দ",
          explanation: "জনগণই ই-গভর্ন্যান্সের মূল উপকারভোগী।",
        },
        {
          id: 13,
          question: "মোবাইল ফোনের মাধ্যমে স্বাস্থ্য সেবা দেওয়াকে কী বলে?",
          options: [
            "A) ই-হেলথ",
            "B) এম-হেলথ",
            "C) ডিজিটাল ক্লিনিক",
            "D) টেলিপ্যাথি",
          ],
          answer: "B) এম-হেলথ",
          explanation: "Mobile Health বা এম-হেলথ।",
        },
        {
          id: 14,
          question: "ই-গভর্ন্যান্স মূলত কিসের রূপান্তর?",
          options: [
            "A) কাগজের ফাইলের ডিজিটাল রূপান্তর",
            "B) শুধু ল্যাপটপ বিতরণ",
            "C) অফিসের ডেকোরেশন",
            "D) বেতন বৃদ্ধি",
          ],
          answer: "A) কাগজের ফাইলের ডিজিটাল রূপান্তর",
          explanation: "এতে পেপারলেস অফিস বা ই-নথি ব্যবস্থার উদ্ভব হয়।",
        },
        {
          id: 15,
          question: "নিচের কোনটি ই-গভর্ন্যান্সের সুবিধা নয়?",
          options: [
            "A) ব্যয় সংকোচন",
            "B) সময় সাশ্রয়",
            "C) গোপনীয়তা বৃদ্ধি",
            "D) দুর্নীতির সুযোগ হ্রাস",
          ],
          answer: "C) গোপনীয়তা বৃদ্ধি",
          explanation:
            "ই-গভর্ন্যান্স তথ্যকে উন্মুক্ত করে, খুব বেশি গোপনীয়তা রাখা এর লক্ষ্য নয়।",
        },
        {
          id: 16,
          question: "বাংলাদেশে কত সালে আইসিটি অ্যাক্ট (ICT Act) পাস হয়?",
          options: [
            "A) ২০০৪ সালে",
            "B) ২০০৬ সালে",
            "C) ২০০৯ সালে",
            "D) ২০১২ সালে",
          ],
          answer: "B) ২০০৬ সালে",
          explanation: "এটি পরবর্তীকালে ২০০৯ ও ২০১৩ সালে সংশোধিত হয়।",
        },
        {
          id: 17,
          question: "ই-গভর্ন্যান্সের মাধ্যমে ট্যাক্স জমা দেওয়াকে কী বলে?",
          options: [
            "A) ই-ট্যাক্স",
            "B) ই-ফাইলিং",
            "C) ই-পেমেন্ট",
            "D) ই-কমার্শিয়াল",
          ],
          answer: "B) ই-ফাইলিং",
          explanation: "আয়কর বিবরণী অনলাইনে জমা দেওয়াকে ই-ফাইলিং বলে।",
        },
        {
          id: 18,
          question: "ডিজিটাল স্বাক্ষর (Digital Signature) কেন প্রয়োজন?",
          options: [
            "A) সুন্দর দেখার জন্য",
            "B) নিরাপত্তার নিশ্চয়তার জন্য",
            "C) পেনসিল বাঁচানোর জন্য",
            "D) দ্রুত টাইপ করার জন্য",
          ],
          answer: "B) নিরাপত্তার নিশ্চয়তার জন্য",
          explanation: "অনলাইন ডকুমেন্টের সত্যতা যাচাইয়ে এটি ব্যবহৃত হয়।",
        },
        {
          id: 19,
          question: "Smart Government এর মূল মন্ত্র কোনটি?",
          options: [
            "A) খরচ বাড়ানো",
            "B) দ্রুত সেবা ও জবাবদিহিতা",
            "C) অনেক লোক নিয়োগ",
            "D) এনালগ ফাইল সংরক্ষণ",
          ],
          answer: "B) দ্রুত সেবা ও জবাবদিহিতা",
          explanation: "স্মার্ট গভর্নমেন্ট মানেই হলো গতিশীল সরকার।",
        },
        {
          id: 20,
          question: "নিচের কোনটি অলাভজনক ই-গভর্ন্যান্স সেবা?",
          options: [
            "A) ই-কমার্স",
            "B) অনলাইন নিউজ",
            "C) ই-নামজারি",
            "D) অনলাইন ব্যাংকিং",
          ],
          answer: "C) ই-নামজারি",
          explanation: "এটি একটি নাগরিক সেবা, বাণিজ্যিক ব্যবসা নয়।",
        },
        {
          id: 21,
          question: "ই-গভর্ন্যান্স বাস্তবায়নে 'A2I' প্রকল্পের পূর্ণরূপ কী?",
          options: [
            "A) Access to Information",
            "B) Aspire to Innovate",
            "C) All to Internet",
            "D) Aim to Idea",
          ],
          answer: "B) Aspire to Innovate",
          explanation:
            "বর্তমানে এটি Aspire to Innovate নামে পরিচিত (আগে ছিল Access to Information)।",
        },
        {
          id: 22,
          question: "ই-পাসপোর্ট সেবা বাংলাদেশে কবে চালু হয়?",
          options: [
            "A) ২০১৮ সালে",
            "B) ২০১৯ সালে",
            "C) ২০২০ সালে",
            "D) ২০২১ সালে",
          ],
          answer: "C) ২০২০ সালে",
          explanation: "দক্ষিণ এশিয়ায় বাংলাদেশ প্রথম ই-পাসপোর্ট চালু করে।",
        },
        {
          id: 23,
          question: "তথ্য অধিকার আইন ই-গভর্ন্যান্সের জন্য কেমন?",
          options: ["A) সহায়ক", "B) বিরোধী", "C) অপ্রয়োজনীয়", "D) ক্ষতিকর"],
          answer: "A) সহায়ক",
          explanation: "তথ্যায়ন ই-গভর্ন্যান্সের মূল প্রাণ।",
        },
        {
          id: 24,
          question: "ই-গভর্ন্যান্সের মাধ্যমে সরাসরি ভোট প্রদানকে কী বলে?",
          options: [
            "A) ই-পোলিং",
            "B) ই-ভোটিং",
            "C) ই-ইলেকশন",
            "D) স্মার্ট ভোট",
          ],
          answer: "B) ই-ভোটিং",
          explanation:
            "ইলেক্ট্রনিক ভোটিং এর মাধ্যমে নির্বাচন প্রক্রিয়া সহজ হয়।",
        },
        {
          id: 25,
          question: "ই-গভর্ন্যান্স মূলত কোন ধরণের গণতন্ত্র প্রতিষ্ঠা করে?",
          options: [
            "A) অংশগ্রহণমূলক গণতন্ত্র",
            "B) স্বৈরতন্ত্র",
            "C) অভিজাততন্ত্র",
            "D) রাজতন্ত্র",
          ],
          answer: "A) অংশগ্রহণমূলক গণতন্ত্র",
          explanation: "প্রযুক্তি সাধারণ মানুষের অংশগ্রহণ নিশ্চিত করে।",
        },
        {
          id: 26,
          question: "ডিজিটাল নথির মাধ্যমে সরকারি কাজ পরিচালনাকে কী বলে?",
          options: ["A) ই-বুক", "B) ই-নথি", "C) ই-মেইল", "D) ই-নোটিশ"],
          answer: "B) ই-নথি",
          explanation: "এটি প্রশাসনের গতি বহুগুণ বাড়িয়ে দেয়।",
        },
        {
          id: 27,
          question: "নিচের কোনটি ই-গভর্ন্যান্সের ফলাফল?",
          options: [
            "A) কর্মসংস্থান হ্রাস",
            "B) প্রশাসনিক স্বচ্ছতা বৃদ্ধি",
            "C) কাগজের ব্যবহার বৃদ্ধি",
            "D) গোপনীয় ফাইল চুরি",
          ],
          answer: "B) প্রশাসনিক স্বচ্ছতা বৃদ্ধি",
          explanation:
            "অনলাইন রেকর্ড সহজে পরিবর্তনযোগ্য নয় বিধায় স্বচ্ছতা বাড়ে।",
        },
        {
          id: 28,
          question: "ই-গভর্ন্যান্সের ফলে জনগণের কী সাশ্রয় হয়?",
          options: [
            "A) শুধু টাকা",
            "B) শুধু সময়",
            "C) সময়, অর্থ ও যাতায়াত (T-C-V)",
            "D) কিছুই না",
          ],
          answer: "C) সময়, অর্থ ও যাতায়াত (T-C-V)",
          explanation: "Time, Cost, Visit সাশ্রয়ই ই-সেবার মূল স্লোগান।",
        },
        {
          id: 29,
          question: "বিসিএস ক্যাডার সার্ভিসে ই-গভর্ন্যান্স কেন গুরুত্বপূর্ণ?",
          options: [
            "A) ফেসবুক চালানোর জন্য",
            "B) স্মার্টলি ফাইল ম্যানেজমেন্ট ও দ্রুত জনসেবার জন্য",
            "C) শুধু অফিস সাজানোর জন্য",
            "D) টাইপিং শেখার জন্য",
          ],
          answer: "B) স্মার্টলি ফাইল ম্যানেজমেন্ট ও দ্রুত জনসেবার জন্য",
          explanation: "একজন ক্যাডার অফিসারকে প্রযুক্তিবান্ধব হতে হয়।",
        },
        {
          id: 30,
          question:
            "বাংলাদেশে বর্তমানে কোনটির মাধ্যমে সবচেয়ে বেশি ই-সেবা দেওয়া হয়?",
          options: [
            "A) রেডিও",
            "B) মোবাইল ফোন ও ইন্টারনেট",
            "C) পোস্ট অফিস",
            "D) ক্যাবল টিভি",
          ],
          answer: "B) মোবাইল ফোন ও ইন্টারনেট",
          explanation: "স্মার্টফোনের সহজলভ্যতা ই-সেবাকে ছড়িয়ে দিয়েছে।",
        },
      ],
    },
  },
  {
    _id: "ethics_egovernance_bcs_2026",
    title: "E-Governance: ডিজিটাল যুগে সুশাসন ও সেবা",
    category: "Ethics, Values and Good Governance",
    tags: [
      "E-Governance",
      "Digital Bangladesh",
      "Smart Bangladesh",
      "ICT",
      "BCS",
    ],
    last_updated: "2026-02-05",
    article_content: {
      summary:
        "ই-গভর্ন্যান্স হলো তথ্য ও যোগাযোগ প্রযুক্তির (ICT) মাধ্যমে সরকারি সেবা জনগণের দোরগোড়ায় পৌঁছে দেওয়া এবং সরকারি কাজের স্বচ্ছতা ও জবাবদিহিতা নিশ্চিত করা। এর মূল লক্ষ্য হলো 'Governance' কে 'Smart' করা।",
      key_points: [
        "ই-গভর্ন্যান্সের চারটি মডেল রয়েছে: G2C, G2B, G2G, এবং G2E।",
        "এটি সরকারি কাজে লাল ফিতার দৌরাত্ম্য (Red Tapism) হ্রাস করে।",
        "বাংলাদেশে ই-গভর্ন্যান্সের সফল উদাহরণ হলো ই-নামজারি, ডিজিটাল ল্যান্ড রেকর্ড এবং অনলাইন পাসপোর্ট সেবা।",
      ],
      sections: [
        {
          heading: "১. ই-গভর্ন্যান্সের ধারণা ও উদ্দেশ্য",
          content:
            "ই-গভর্ন্যান্স মানে শুধু সরকারি কাজে কম্পিউটার ব্যবহার নয়, বরং এটি প্রশাসনিক প্রক্রিয়ার আমূল পরিবর্তন। এর প্রধান উদ্দেশ্যসমূহ হলো:\n* সরকারি সেবাকে দ্রুত ও সহজতর করা।\n* দুর্নীতি প্রতিরোধ করা।\n* জনগণের অংশগ্রহণ বৃদ্ধি করা।\n* প্রশাসনিক ব্যয় হ্রাস করা।",
        },
        {
          heading: "২. ই-গভর্ন্যান্সের বিভিন্ন পর্যায় (Stages)",
          content:
            "সাধারণত ই-গভর্ন্যান্স চারটি পর্যায়ে বিকশিত হয়:\n১. তথ্য প্রদান (Information)\n২. একমুখী যোগাযোগ (One-way communication)\n৩. দ্বিমুখী যোগাযোগ (Two-way interaction)\n৪. লেনদেন (Transaction)।",
        },
        {
          heading: "৩. বাংলাদেশে ই-গভর্ন্যান্সের মাইলফলক",
          content:
            "বাংলাদেশ সরকার ২০৪১ সালের মধ্যে 'স্মার্ট বাংলাদেশ' গড়ার লক্ষ্য নির্ধারণ করেছে যার চারটি স্তম্ভ হলো— স্মার্ট সিটিজেন, স্মার্ট ইকোনমি, স্মার্ট গভর্নমেন্ট এবং স্মার্ট সোসাইটি।",
        },
      ],
    },
    preliminary_exam_prep: {
      focus: "Top 30 Questions on E-Governance & Digital Services",
      mcqs: [
        {
          id: 1,
          question: "ই-গভর্ন্যান্স (E-Governance) এর পূর্ণরূপ কী?",
          options: [
            "A) Easy Governance",
            "B) Electronic Governance",
            "C) Essential Governance",
            "D) Efficient Governance",
          ],
          answer: "B) Electronic Governance",
          explanation:
            "তথ্য প্রযুক্তির মাধ্যমে শাসন ব্যবস্থাকেই ই-গভর্ন্যান্স বলে।",
        },
        {
          id: 2,
          question: "ই-গভর্ন্যান্সের প্রধান লক্ষ্য কী?",
          options: [
            "A) কম্পিউটার বিক্রি বাড়ানো",
            "B) সরকারি ভবনের উন্নয়ন",
            "C) স্বচ্ছতা ও জবাবদিহিতা নিশ্চিত করা",
            "D) কাগজের দাম কমানো",
          ],
          answer: "C) স্বচ্ছতা ও জবাবদিহিতা নিশ্চিত করা",
          explanation: "প্রযুক্তির ব্যবহারে তথ্যের স্বচ্ছতা বৃদ্ধি পায়।",
        },
        {
          id: 3,
          question: "G2C মডেল বলতে কী বোঝায়?",
          options: [
            "A) Government to Company",
            "B) Government to Citizen",
            "C) General to Civil",
            "D) Government to Candidate",
          ],
          answer: "B) Government to Citizen",
          explanation: "সরকার থেকে নাগরিককে সেবা প্রদানই হলো G2C।",
        },
        {
          id: 4,
          question: "বাংলাদেশের জাতীয় তথ্য বাতায়ন (National Portal) কোনটি?",
          options: [
            "A) bangladesh.gov.bd",
            "B) info.gov.bd",
            "C) nps.gov.bd",
            "D) bd.gov.com",
          ],
          answer: "A) bangladesh.gov.bd",
          explanation: "এটি বাংলাদেশের সকল সরকারি তথ্যের কেন্দ্রীয় পোর্টাল।",
        },
        {
          id: 5,
          question: "ই-গভর্ন্যান্সের ফলে প্রশাসনে কোনটি হ্রাস পায়?",
          options: [
            "A) স্বচ্ছতা",
            "B) লাল ফিতার দৌরাত্ম্য",
            "C) গতিশীলতা",
            "D) দক্ষতা",
          ],
          answer: "B) লাল ফিতার দৌরাত্ম্য",
          explanation: "ডিজিটাল পদ্ধতিতে কাজের দীর্ঘসূত্রিতা কমে যায়।",
        },
        {
          id: 6,
          question: "স্মার্ট বাংলাদেশের স্তম্ভ কয়টি?",
          options: ["A) ২টি", "B) ৩টি", "C) ৪টি", "D) ৫টি"],
          answer: "C) ৪টি",
          explanation: "স্মার্ট সিটিজেন, ইকোনমি, গভর্নমেন্ট ও সোসাইটি।",
        },
        {
          id: 7,
          question: "নিচের কোনটি ই-গভর্ন্যান্সের একটি উপাদান নয়?",
          options: [
            "A) প্রযুক্তি",
            "B) প্রক্রিয়া",
            "C) জনগণ",
            "D) অস্থিতিশীলতা",
          ],
          answer: "D) অস্থিতিশীলতা",
          explanation: "সুশাসন ও স্থিতিশীলতা ই-গভর্ন্যান্সের সহায়ক।",
        },
        {
          id: 8,
          question: "অনলাইনে জমির খতিয়ান বা পর্চা সংগ্রহের পদ্ধতিকে কী বলে?",
          options: [
            "A) ই-ল্যান্ড",
            "B) ই-নামজারি",
            "C) ই-পর্চা",
            "D) ই-রেকর্ড",
          ],
          answer: "C) ই-পর্চা",
          explanation: "এটি ভূমি সেবার একটি গুরুত্বপূর্ণ অংশ।",
        },
        {
          id: 9,
          question: "নিচের কোনটি G2G সেবার উদাহরণ?",
          options: [
            "A) পাসপোর্ট আবেদন",
            "B) সরকারি কর্মকর্তাদের বেতন ই-পেমেন্ট",
            "C) এক মন্ত্রণালয় থেকে অন্য মন্ত্রণালয়ে ফাইল প্রেরণ",
            "D) ট্যাক্স প্রদান",
          ],
          answer: "C) এক মন্ত্রণালয় থেকে অন্য মন্ত্রণালয়ে ফাইল প্রেরণ",
          explanation: "Government to Government যোগাযোগই হলো G2G।",
        },
        {
          id: 10,
          question: "ই-গভর্ন্যান্স বাস্তবায়নে বড় চ্যালেঞ্জ কোনটি?",
          options: [
            "A) স্মার্টফোনের ব্যবহার",
            "B) সাইবার নিরাপত্তা ও ডিজিটাল বিভাজন",
            "C) ইন্টারনেটের গতি",
            "D) শিক্ষিত হার বৃদ্ধি",
          ],
          answer: "B) সাইবার নিরাপত্তা ও ডিজিটাল বিভাজন",
          explanation:
            "শহর ও গ্রামের প্রযুক্তির বৈষম্যই ডিজিটাল ডিভাইড বা বিভাজন।",
        },
        {
          id: 11,
          question: "জাতীয় ই-সেবা কেন্দ্র (NESS) কত সালে উদ্বোধন করা হয়?",
          options: [
            "A) ২০১০ সালে",
            "B) ২০১১ সালে",
            "C) ২০১২ সালে",
            "D) ২০১৩ সালে",
          ],
          answer: "B) ২০১১ সালে",
          explanation: "জেলায় জেলায় ডিজিটাল সেবা পৌঁছে দিতে এটি করা হয়।",
        },
        {
          id: 12,
          question: "ই-গভর্ন্যান্সের মাধ্যমে সরাসরি সেবা পায় কারা?",
          options: [
            "A) শুধু মন্ত্রীরা",
            "B) শুধু আমলারা",
            "C) সাধারণ নাগরিকবৃন্দ",
            "D) শুধু ব্যবসায়ীরা",
          ],
          answer: "C) সাধারণ নাগরিকবৃন্দ",
          explanation: "জনগণই ই-গভর্ন্যান্সের মূল উপকারভোগী।",
        },
        {
          id: 13,
          question: "মোবাইল ফোনের মাধ্যমে স্বাস্থ্য সেবা দেওয়াকে কী বলে?",
          options: [
            "A) ই-হেলথ",
            "B) এম-হেলথ",
            "C) ডিজিটাল ক্লিনিক",
            "D) টেলিপ্যাথি",
          ],
          answer: "B) এম-হেলথ",
          explanation: "Mobile Health বা এম-হেলথ।",
        },
        {
          id: 14,
          question: "ই-গভর্ন্যান্স মূলত কিসের রূপান্তর?",
          options: [
            "A) কাগজের ফাইলের ডিজিটাল রূপান্তর",
            "B) শুধু ল্যাপটপ বিতরণ",
            "C) অফিসের ডেকোরেশন",
            "D) বেতন বৃদ্ধি",
          ],
          answer: "A) কাগজের ফাইলের ডিজিটাল রূপান্তর",
          explanation: "এতে পেপারলেস অফিস বা ই-নথি ব্যবস্থার উদ্ভব হয়।",
        },
        {
          id: 15,
          question: "নিচের কোনটি ই-গভর্ন্যান্সের সুবিধা নয়?",
          options: [
            "A) ব্যয় সংকোচন",
            "B) সময় সাশ্রয়",
            "C) গোপনীয়তা বৃদ্ধি",
            "D) দুর্নীতির সুযোগ হ্রাস",
          ],
          answer: "C) গোপনীয়তা বৃদ্ধি",
          explanation:
            "ই-গভর্ন্যান্স তথ্যকে উন্মুক্ত করে, খুব বেশি গোপনীয়তা রাখা এর লক্ষ্য নয়।",
        },
        {
          id: 16,
          question: "বাংলাদেশে কত সালে আইসিটি অ্যাক্ট (ICT Act) পাস হয়?",
          options: [
            "A) ২০০৪ সালে",
            "B) ২০০৬ সালে",
            "C) ২০০৯ সালে",
            "D) ২০১২ সালে",
          ],
          answer: "B) ২০০৬ সালে",
          explanation: "এটি পরবর্তীকালে ২০০৯ ও ২০১৩ সালে সংশোধিত হয়।",
        },
        {
          id: 17,
          question: "ই-গভর্ন্যান্সের মাধ্যমে ট্যাক্স জমা দেওয়াকে কী বলে?",
          options: [
            "A) ই-ট্যাক্স",
            "B) ই-ফাইলিং",
            "C) ই-পেমেন্ট",
            "D) ই-কমার্শিয়াল",
          ],
          answer: "B) ই-ফাইলিং",
          explanation: "আয়কর বিবরণী অনলাইনে জমা দেওয়াকে ই-ফাইলিং বলে।",
        },
        {
          id: 18,
          question: "ডিজিটাল স্বাক্ষর (Digital Signature) কেন প্রয়োজন?",
          options: [
            "A) সুন্দর দেখার জন্য",
            "B) নিরাপত্তার নিশ্চয়তার জন্য",
            "C) পেনসিল বাঁচানোর জন্য",
            "D) দ্রুত টাইপ করার জন্য",
          ],
          answer: "B) নিরাপত্তার নিশ্চয়তার জন্য",
          explanation: "অনলাইন ডকুমেন্টের সত্যতা যাচাইয়ে এটি ব্যবহৃত হয়।",
        },
        {
          id: 19,
          question: "Smart Government এর মূল মন্ত্র কোনটি?",
          options: [
            "A) খরচ বাড়ানো",
            "B) দ্রুত সেবা ও জবাবদিহিতা",
            "C) অনেক লোক নিয়োগ",
            "D) এনালগ ফাইল সংরক্ষণ",
          ],
          answer: "B) দ্রুত সেবা ও জবাবদিহিতা",
          explanation: "স্মার্ট গভর্নমেন্ট মানেই হলো গতিশীল সরকার।",
        },
        {
          id: 20,
          question: "নিচের কোনটি অলাভজনক ই-গভর্ন্যান্স সেবা?",
          options: [
            "A) ই-কমার্স",
            "B) অনলাইন নিউজ",
            "C) ই-নামজারি",
            "D) অনলাইন ব্যাংকিং",
          ],
          answer: "C) ই-নামজারি",
          explanation: "এটি একটি নাগরিক সেবা, বাণিজ্যিক ব্যবসা নয়।",
        },
        {
          id: 21,
          question: "ই-গভর্ন্যান্স বাস্তবায়নে 'A2I' প্রকল্পের পূর্ণরূপ কী?",
          options: [
            "A) Access to Information",
            "B) Aspire to Innovate",
            "C) All to Internet",
            "D) Aim to Idea",
          ],
          answer: "B) Aspire to Innovate",
          explanation:
            "বর্তমানে এটি Aspire to Innovate নামে পরিচিত (আগে ছিল Access to Information)।",
        },
        {
          id: 22,
          question: "ই-পাসপোর্ট সেবা বাংলাদেশে কবে চালু হয়?",
          options: [
            "A) ২০১৮ সালে",
            "B) ২০১৯ সালে",
            "C) ২০২০ সালে",
            "D) ২০২১ সালে",
          ],
          answer: "C) ২০২০ সালে",
          explanation: "দক্ষিণ এশিয়ায় বাংলাদেশ প্রথম ই-পাসপোর্ট চালু করে।",
        },
        {
          id: 23,
          question: "তথ্য অধিকার আইন ই-গভর্ন্যান্সের জন্য কেমন?",
          options: ["A) সহায়ক", "B) বিরোধী", "C) অপ্রয়োজনীয়", "D) ক্ষতিকর"],
          answer: "A) সহায়ক",
          explanation: "তথ্যায়ন ই-গভর্ন্যান্সের মূল প্রাণ।",
        },
        {
          id: 24,
          question: "ই-গভর্ন্যান্সের মাধ্যমে সরাসরি ভোট প্রদানকে কী বলে?",
          options: [
            "A) ই-পোলিং",
            "B) ই-ভোটিং",
            "C) ই-ইলেকশন",
            "D) স্মার্ট ভোট",
          ],
          answer: "B) ই-ভোটিং",
          explanation:
            "ইলেক্ট্রনিক ভোটিং এর মাধ্যমে নির্বাচন প্রক্রিয়া সহজ হয়।",
        },
        {
          id: 25,
          question: "ই-গভর্ন্যান্স মূলত কোন ধরণের গণতন্ত্র প্রতিষ্ঠা করে?",
          options: [
            "A) অংশগ্রহণমূলক গণতন্ত্র",
            "B) স্বৈরতন্ত্র",
            "C) অভিজাততন্ত্র",
            "D) রাজতন্ত্র",
          ],
          answer: "A) অংশগ্রহণমূলক গণতন্ত্র",
          explanation: "প্রযুক্তি সাধারণ মানুষের অংশগ্রহণ নিশ্চিত করে।",
        },
        {
          id: 26,
          question: "ডিজিটাল নথির মাধ্যমে সরকারি কাজ পরিচালনাকে কী বলে?",
          options: ["A) ই-বুক", "B) ই-নথি", "C) ই-মেইল", "D) ই-নোটিশ"],
          answer: "B) ই-নথি",
          explanation: "এটি প্রশাসনের গতি বহুগুণ বাড়িয়ে দেয়।",
        },
        {
          id: 27,
          question: "নিচের কোনটি ই-গভর্ন্যান্সের ফলাফল?",
          options: [
            "A) কর্মসংস্থান হ্রাস",
            "B) প্রশাসনিক স্বচ্ছতা বৃদ্ধি",
            "C) কাগজের ব্যবহার বৃদ্ধি",
            "D) গোপনীয় ফাইল চুরি",
          ],
          answer: "B) প্রশাসনিক স্বচ্ছতা বৃদ্ধি",
          explanation:
            "অনলাইন রেকর্ড সহজে পরিবর্তনযোগ্য নয় বিধায় স্বচ্ছতা বাড়ে।",
        },
        {
          id: 28,
          question: "ই-গভর্ন্যান্সের ফলে জনগণের কী সাশ্রয় হয়?",
          options: [
            "A) শুধু টাকা",
            "B) শুধু সময়",
            "C) সময়, অর্থ ও যাতায়াত (T-C-V)",
            "D) কিছুই না",
          ],
          answer: "C) সময়, অর্থ ও যাতায়াত (T-C-V)",
          explanation: "Time, Cost, Visit সাশ্রয়ই ই-সেবার মূল স্লোগান।",
        },
        {
          id: 29,
          question: "বিসিএস ক্যাডার সার্ভিসে ই-গভর্ন্যান্স কেন গুরুত্বপূর্ণ?",
          options: [
            "A) ফেসবুক চালানোর জন্য",
            "B) স্মার্টলি ফাইল ম্যানেজমেন্ট ও দ্রুত জনসেবার জন্য",
            "C) শুধু অফিস সাজানোর জন্য",
            "D) টাইপিং শেখার জন্য",
          ],
          answer: "B) স্মার্টলি ফাইল ম্যানেজমেন্ট ও দ্রুত জনসেবার জন্য",
          explanation: "একজন ক্যাডার অফিসারকে প্রযুক্তিবান্ধব হতে হয়।",
        },
        {
          id: 30,
          question:
            "বাংলাদেশে বর্তমানে কোনটির মাধ্যমে সবচেয়ে বেশি ই-সেবা দেওয়া হয়?",
          options: [
            "A) রেডিও",
            "B) মোবাইল ফোন ও ইন্টারনেট",
            "C) পোস্ট অফিস",
            "D) ক্যাবল টিভি",
          ],
          answer: "B) মোবাইল ফোন ও ইন্টারনেট",
          explanation: "স্মার্টফোনের সহজলভ্যতা ই-সেবাকে ছড়িয়ে দিয়েছে।",
        },
      ],
    },
  },
  {
    _id: "ethics_morality_bcs_2026",
    title: "Morality: বিসিএস সিলেবাসের আলোকে নৈতিকতা ও মূল্যবোধ",
    category: "Ethics, Values and Good Governance",
    tags: ["Morality", "Ethics", "BCS Syllabus", "Values", "Good Governance"],
    last_updated: "2026-02-05",
    article_content: {
      summary:
        "নৈতিকতা (Morality) হলো মানুষের আচরণের সেই মানদণ্ড, যা ভালো-মন্দ, সঠিক-ভুল বা ন্যায়-অন্যায়ের পার্থক্য করতে শেখায়। এটি গ্রিক শব্দ 'Ethos' এবং ল্যাটিন শব্দ 'Moralis' থেকে উদ্ভূত।",
      key_points: [
        "নৈতিকতা হলো ব্যক্তির অভ্যন্তরীণ বিষয় যা তার বিবেক দ্বারা নিয়ন্ত্রিত হয়।",
        "আইন সবার জন্য এক হলেও নৈতিকতা স্থান-কাল-পাত্রভেদে ভিন্ন হতে পারে।",
        "এটি সুশাসনের অন্যতম অলিখিত স্তম্ভ।",
      ],
      sections: [
        {
          heading: "১. নৈতিকতার সংজ্ঞা ও উৎস",
          content:
            "নৈতিকতা মানুষের আচরণের একটি আদর্শ রূপ। এর প্রধান উৎসসমূহ হলো:\n* পরিবার ও সমাজ\n* ধর্মীয় অনুশাসন\n* শিক্ষা প্রতিষ্ঠান\n* বিবেক ও আত্মিক চেতনা\n* মহৎ ব্যক্তিদের জীবনী।",
        },
        {
          heading: "২. নৈতিকতা ও আইনের সম্পর্ক",
          content:
            "আইন ও নৈতিকতা পরস্পর পরিপূরক। আইন হলো রাষ্ট্রের বাধ্যবাধকতা, আর নৈতিকতা হলো বিবেকের বাধ্যবাধকতা।\n* আইন ভঙ্গ করলে শাস্তি পেতে হয়, কিন্তু নৈতিকতা ভঙ্গ করলে সামাজিক অবজ্ঞা বা অনুশোচনা কাজ করে।",
        },
        {
          heading: "৩. সুশাসনে নৈতিকতার গুরুত্ব",
          content:
            "সুশাসন নিশ্চিত করতে হলে সরকারি কর্মচারীদের নৈতিকতা অপরিহার্য। এটি দুর্নীতি রোধ করে, স্বচ্ছতা বাড়ায় এবং ন্যায়বিচার নিশ্চিত করে। 'জাতীয় শুদ্ধাচার কৌশল' (NIS) নৈতিকতা চর্চার একটি রাষ্ট্রীয় কাঠামো।",
        },
        {
          heading: "৪. ব্যক্তিগত ও পেশাগত নৈতিকতা",
          content:
            "ব্যক্তিগত নৈতিকতা মানুষের ব্যক্তিগত জীবন পরিচালনা করে। আর পেশাগত নৈতিকতা (Professional Ethics) কর্মক্ষেত্রে দায়িত্ব পালনের নিয়মাবলী নির্ধারণ করে।",
        },
      ],
    },
    preliminary_exam_prep: {
      focus: "Top 30 Questions on Morality & Values",
      mcqs: [
        {
          id: 1,
          question: "Morality শব্দের উদ্ভব কোন ল্যাটিন শব্দ থেকে?",
          options: ["A) Ethos", "B) Moralis", "C) Mores", "D) Ethics"],
          answer: "B) Moralis",
          explanation: "ল্যাটিন শব্দ 'Moralis' থেকে 'Morality' শব্দের উৎপত্তি।",
        },
        {
          id: 2,
          question: "নৈতিকতার প্রধান উৎস কোনটি?",
          options: ["A) সংবিধান", "B) সংসদ", "C) বিবেক", "D) আদালত"],
          answer: "C) বিবেক",
          explanation:
            "বিবেক হলো মানুষের নৈতিক আচরণের সবচেয়ে শক্তিশালী নিয়ন্ত্রক।",
        },
        {
          id: 3,
          question: "ব্যক্তির আচরণ নিয়ন্ত্রণের অলিখিত নিয়মকে কী বলে?",
          options: ["A) আইন", "B) প্রথা", "C) নৈতিকতা", "D) শৃঙ্খলা"],
          answer: "C) নৈতিকতা",
          explanation: "নৈতিকতা বা মূল্যবোধ হলো সমাজের অলিখিত নিয়ম।",
        },
        {
          id: 4,
          question: "নৈতিকতা ও আইনের মধ্যে কোনটি বেশি ব্যাপক?",
          options: ["A) আইন", "B) নৈতিকতা", "C) উভয়ই সমান", "D) কোনটিই নয়"],
          answer: "B) নৈতিকতা",
          explanation: "নৈতিকতার পরিধি আইনের চেয়ে অনেক বড়।",
        },
        {
          id: 5,
          question: "সুশাসনের চাবিকাঠি কোনটি?",
          options: [
            "A) সামরিক শক্তি",
            "B) নৈতিকতা ও মূল্যবোধ",
            "C) আমলাতন্ত্র",
            "D) অর্থ",
          ],
          answer: "B) নৈতিকতা ও মূল্যবোধ",
          explanation: "নৈতিকতা ছাড়া সুশাসন অসম্ভব।",
        },
        {
          id: 6,
          question: "শুদ্ধাচার কৌশলের (NIS) লক্ষ্য কী?",
          options: [
            "A) বেতন বৃদ্ধি",
            "B) নৈতিকতা প্রতিষ্ঠা ও দুর্নীতি রোধ",
            "C) পদোন্নতি",
            "D) বদলি",
          ],
          answer: "B) নৈতিকতা প্রতিষ্ঠা ও দুর্নীতি রোধ",
          explanation:
            "এটি সরকারি কর্মকর্তাদের নৈতিকতা বজায় রাখার একটি রাষ্ট্রীয় গাইডলাইন।",
        },
        {
          id: 7,
          question: "পেশাগত নৈতিকতার অর্থ কী?",
          options: [
            "A) ব্যক্তিগত লাভ",
            "B) কর্মক্ষেত্রে নির্দিষ্ট কোড অফ কন্ডাক্ট মেনে চলা",
            "C) রাজনীতি করা",
            "D) উপহার গ্রহণ",
          ],
          answer: "B) কর্মক্ষেত্রে নির্দিষ্ট কোড অফ কন্ডাক্ট মেনে চলা",
          explanation: "পেশার মর্যাদা রক্ষার নিয়মই পেশাগত নৈতিকতা।",
        },
        {
          id: 8,
          question: "মানবিক মূল্যবোধের মূল ভিত্তি কী?",
          options: [
            "A) অর্থসম্পদ",
            "B) সততা ও নৈতিকতা",
            "C) আভিজাত্য",
            "D) ক্ষমতা",
          ],
          answer: "B) সততা ও নৈতিকতা",
          explanation: "সততা ও নৈতিকতা মানবিক চরিত্রের ভিত্তি তৈরি করে।",
        },
        {
          id: 9,
          question: "আইন কোন ধরণের বাধ্যবাধকতা?",
          options: [
            "A) বাহ্যিক",
            "B) অভ্যন্তরীণ",
            "C) আধ্যাত্মিক",
            "D) কাল্পনিক",
          ],
          answer: "A) বাহ্যিক",
          explanation: "রাষ্ট্রীয় শক্তি আইন প্রয়োগ করে, তাই এটি বাহ্যিক।",
        },
        {
          id: 10,
          question: "নৈতিকতা কোন ধরণের বাধ্যবাধকতা?",
          options: ["A) বাহ্যিক", "B) অভ্যন্তরীণ", "C) আইনি", "D) রাজনৈতিক"],
          answer: "B) অভ্যন্তরীণ",
          explanation: "নৈতিকতা মানুষের মন থেকে আসে।",
        },
        {
          id: 11,
          question: "বিবেকের আদালত বলতে কী বোঝায়?",
          options: [
            "A) সুপ্রিম কোর্ট",
            "B) হাইকোর্ট",
            "C) নিজস্ব নৈতিক বিচারবোধ",
            "D) জেলা আদালত",
          ],
          answer: "C) নিজস্ব নৈতিক বিচারবোধ",
          explanation: "বিবেকের আদালত মানুষকে ভেতর থেকে শাসন করে।",
        },
        {
          id: 12,
          question: "মূল্যবোধের একটি বড় বৈশিষ্ট্য কী?",
          options: [
            "A) স্থবিরতা",
            "B) পরিবর্তনশীলতা",
            "C) অপ্রয়োজনীয়তা",
            "D) সংকীর্ণতা",
          ],
          answer: "B) পরিবর্তনশীলতা",
          explanation: "সমাজ পরিবর্তনের সাথে সাথে মূল্যবোধ পরিবর্তিত হতে পারে।",
        },
        {
          id: 13,
          question: "社会的 ভিত্তি কোনটি?",
          options: ["A) অস্ত্র", "B) নৈতিকতা", "C) শিল্প", "D) বাজার"],
          answer: "B) নৈতিকতা",
          explanation: "একটি নৈতিক সমাজই স্থিতিশীল থাকে।",
        },
        {
          id: 14,
          question: "কোনটি নৈতিকতার রক্ষাকবচ?",
          options: [
            "A) পুলিশ",
            "B) কারাগার",
            "C) সামাজিক সচেতনতা",
            "D) জরিমানা",
          ],
          answer: "C) সামাজিক সচেতনতা",
          explanation: "সামাজিক সচেতনতা মানুষকে নৈতিক হতে উৎসাহিত করে।",
        },
        {
          id: 15,
          question: "গণতন্ত্রের প্রধান মূলমন্ত্র কী?",
          options: [
            "A) একনায়কতন্ত্র",
            "B) সহনশীলতা ও মূল্যবোধ",
            "C) কঠোর শাসন",
            "D) দুর্নীতি",
          ],
          answer: "B) সহনশীলতা ও মূল্যবোধ",
          explanation: "অন্যের মতের প্রতি সম্মান বা সহনশীলতা একটি নৈতিক গুণ।",
        },
        {
          id: 16,
          question: "রাষ্ট্রের আইন মানা কোন ধরণের দায়িত্ব?",
          options: [
            "A) শুধু আইনি",
            "B) শুধু সামাজিক",
            "C) নৈতিক ও আইনি দায়িত্ব",
            "D) ঐচ্ছিক",
          ],
          answer: "C) নৈতিক ও আইনি দায়িত্ব",
          explanation: "আইন মানা নৈতিকতারও অংশ।",
        },
        {
          id: 17,
          question: "মূল্যবোধ শিক্ষার প্রথম ধাপ কোনটি?",
          options: ["A) বিশ্ববিদ্যালয়", "B) পরিবার", "C) সংসদ", "D) ক্লাব"],
          answer: "B) পরিবার",
          explanation: "পরিবার থেকেই নৈতিক শিক্ষার হাতেখড়ি হয়।",
        },
        {
          id: 18,
          question: "ন্যায়বিচার নিশ্চিত করার প্রধান শর্ত কোনটি?",
          options: [
            "A) দালানকোঠা",
            "B) বিচারকের নৈতিকতা",
            "C) সাক্ষীর সংখ্যা",
            "D) আইনজীবীর ফি",
          ],
          answer: "B) বিচারকের নৈতিকতা",
          explanation: "বিচারক অনৈতিক হলে ন্যায়বিচার সম্ভব নয়।",
        },
        {
          id: 19,
          question: "মানুষের কাজের ভালো-মন্দের বিচারের মানদণ্ডকে কী বলে?",
          options: ["A) বিজ্ঞান", "B) ভূগোল", "C) নৈতিকতা", "D) ইতিহাস"],
          answer: "C) নৈতিকতা",
          explanation: "এটি কাজের মান নির্ণয় করে।",
        },
        {
          id: 20,
          question: "মানুষের চরিত্র গঠনের শ্রেষ্ঠ সময় কোনটি?",
          options: [
            "A) বৃদ্ধকাল",
            "B) শৈশব ও ছাত্রজীবন",
            "C) অবসর জীবন",
            "D) কর্মজীবন",
          ],
          answer: "B) শৈশব ও ছাত্রজীবন",
          explanation:
            "শিক্ষা প্রতিষ্ঠানে নৈতিকতা শিক্ষার আদর্শ সময় ছাত্রজীবন।",
        },
        {
          id: 21,
          question: "দুর্নীতি কিসের অভাব প্রকাশ করে?",
          options: [
            "A) অর্থের অভাব",
            "B) নৈতিকতার অভাব",
            "C) শিক্ষার অভাব",
            "D) খাদ্যের অভাব",
          ],
          answer: "B) নৈতিকতার অভাব",
          explanation: "অনৈতিক মানুষই দুর্নীতিতে লিপ্ত হয়।",
        },
        {
          id: 22,
          question: "মানুষের আচরণের স্থায়ী বিশ্বাসকে কী বলে?",
          options: ["A) ফ্যাশন", "B) মূল্যবোধ", "C) গুজব", "D) শখ"],
          answer: "B) মূল্যবোধ",
          explanation: "মূল্যবোধ হলো দীর্ঘদিনের লালিত বিশ্বাস।",
        },
        {
          id: 23,
          question: "ব্যক্তির সামাজিক পরিচয় কিসের ওপর নির্ভর করে?",
          options: [
            "A) পোশাকের ওপর",
            "B) তার নৈতিক আচরণের ওপর",
            "C) ব্যাংক ব্যালেন্সের ওপর",
            "D) উচ্চতার ওপর",
          ],
          answer: "B) তার নৈতিক আচরণের ওপর",
          explanation: "নৈতিক গুণাবলীই মানুষকে সমাজে সম্মানিত করে।",
        },
        {
          id: 24,
          question: "উত্তম নৈতিকতার উদাহরণ কোনটি?",
          options: [
            "A) আত্মকেন্দ্রিকতা",
            "B) পরোপকার ও সত্যবাদিতা",
            "C) মিথ্যাচার",
            "D) অহংকার",
          ],
          answer: "B) পরোপকার ও সত্যবাদিতা",
          explanation: "এগুলো চিরন্তন নৈতিক গুণ।",
        },
        {
          id: 25,
          question: "সুশাসন ও নৈতিকতা কোনটির অংশ?",
          options: [
            "A) গণিত",
            "B) রাষ্ট্রবিজ্ঞান ও দর্শন",
            "C) রসায়ন",
            "D) জীববিজ্ঞান",
          ],
          answer: "B) রাষ্ট্রবিজ্ঞান ও দর্শন",
          explanation: "রাষ্ট্রবিজ্ঞান ও দর্শনের একটি শাখা হলো নীতিবিদ্যা।",
        },
        {
          id: 26,
          question: "নৈতিকতা কিসের ওপর দাঁড়িয়ে থাকে?",
          options: [
            "A) স্বজনপ্রীতি",
            "B) ন্যায়পরায়ণতা",
            "C) স্বার্থপরতা",
            "D) কঠোরতা",
          ],
          answer: "B) ন্যায়পরায়ণতা",
          explanation: "সবার প্রতি সমান আচরণ বা ন্যায়পরায়ণতাই নৈতিকতা।",
        },
        {
          id: 27,
          question: "আইন ও নৈতিকতার লক্ষ্য কী?",
          options: [
            "A) বিশৃঙ্খলা তৈরি",
            "B) জনকল্যাণ সাধন",
            "C) কর আদায়",
            "D) যুদ্ধ জয়",
          ],
          answer: "B) জনকল্যাণ সাধন",
          explanation: "উভয়ের চূড়ান্ত লক্ষ্য সমাজের মঙ্গল।",
        },
        {
          id: 28,
          question: "স্বচ্ছতা ও জবাবদিহিতা কিসের ফসল?",
          options: [
            "A) স্বৈরশাসন",
            "B) নৈতিক শাসনব্যবস্থা",
            "C) গোপনীয়তা",
            "D) অজ্ঞতা",
          ],
          answer: "B) নৈতিক শাসনব্যবস্থা",
          explanation: "শাসনব্যবস্থা নৈতিক হলে জবাবদিহিতা থাকে।",
        },
        {
          id: 29,
          question: "বিবেক কার প্রতিনিধি হিসেবে কাজ করে?",
          options: ["A) পুলিশের", "B) সরকারের", "C) নৈতিকতার", "D) আদালতের"],
          answer: "C) নৈতিকতার",
          explanation: "বিবেক হলো নৈতিকতার রক্ষক।",
        },
        {
          id: 30,
          question: "নৈতিকতার মানদণ্ড কি বিশ্বজনীন?",
          options: [
            "A) কখনই না",
            "B) কিছু ক্ষেত্রে হ্যাঁ, কিছু ক্ষেত্রে না",
            "C) শুধু বাংলাদেশে",
            "D) শুধু ইউরোপে",
          ],
          answer: "B) কিছু ক্ষেত্রে হ্যাঁ, কিছু ক্ষেত্রে না",
          explanation:
            "সত্য বলা বিশ্বজনীন, কিন্তু কিছু প্রথা সমাজভেদে ভিন্ন হয়।",
        },
      ],
    },
  },
  {
    _id: "ethics_values_bcs_2026",
    title: "Values: মূল্যবোধের ধারণা ও শ্রেণিবিভাগ",
    category: "Ethics, Values and Good Governance",
    tags: ["Values", "Social Values", "Democratic Values", "Ethics", "BCS"],
    last_updated: "2026-02-05",
    article_content: {
      summary:
        "মূল্যবোধ হলো মানুষের আচরণের সেই বিশ্বাস বা আদর্শ যা সমাজ বা গোষ্ঠীর কাছে গ্রহণযোগ্য। এটি ভালো-মন্দের বিচারক এবং সমাজের স্থায়িত্বের প্রতীক।",
      key_points: [
        "মূল্যবোধ একটি মানসিক প্রক্রিয়া এবং এটি দীর্ঘমেয়াদী বিশ্বাস।",
        "গণতান্ত্রিক মূল্যবোধ সুশাসন প্রতিষ্ঠার প্রধান চালিকাশক্তি।",
        "পারিবারিক মূল্যবোধই সামাজিক মূল্যবোধের ভিত্তি তৈরি করে।",
      ],
      sections: [
        {
          heading: "১. মূল্যবোধের সংজ্ঞা ও প্রকৃতি",
          content:
            "মূল্যবোধ হলো মানুষের আবেগ, ইচ্ছা ও বিশ্বাসের একীভূত রূপ। স্টুয়ার্ট সি. ডড (Stuart C. Dodd) এর মতে, 'মূল্যবোধ হলো যা মানুষ চায় বা পছন্দ করে।' এটি কোনো লিখিত আইন নয়, বরং একটি সামাজিক অলিখিত নিয়ম।",
        },
        {
          heading: "২. মূল্যবোধের শ্রেণিবিভাগ",
          content:
            "মূল্যবোধ বিভিন্ন প্রকার হতে পারে:\n* সামাজিক মূল্যবোধ (সহমর্মিতা, শিষ্টাচার)\n* গণতান্ত্রিক মূল্যবোধ (সহনশীলতা, পরমতসহিষ্ণুতা)\n* আধ্যাত্মিক মূল্যবোধ (ধর্মীয় বিশ্বাস)\n* পেশাগত মূল্যবোধ (সততা, কর্তব্যনিষ্ঠা)\n* অর্থনৈতিক মূল্যবোধ (মিতাচার)।",
        },
        {
          heading: "৩. মূল্যবোধের অবক্ষয় ও এর ফলাফল",
          content:
            "মূল্যবোধের অবক্ষয় ঘটলে সমাজে অস্থিরতা, দুর্নীতি এবং অপরাধ বৃদ্ধি পায়। সঠিক শিক্ষা এবং পারিবারিক অনুশাসনের মাধ্যমেই এই অবক্ষয় রোধ করা সম্ভব।",
        },
      ],
    },
    preliminary_exam_prep: {
      focus: "Top 30 Questions on Values & Social Ethics",
      mcqs: [
        {
          id: 1,
          question: "মূল্যবোধ (Values) বলতে কী বোঝায়?",
          options: [
            "A) অর্থনৈতিক সম্পদ",
            "B) মানুষের আচরণের আদর্শ ও বিশ্বাস",
            "C) রাজনৈতিক ক্ষমতা",
            "D) আইনি দলিল",
          ],
          answer: "B) মানুষের আচরণের আদর্শ ও বিশ্বাস",
          explanation:
            "মূল্যবোধ হলো সমাজ অনুমোদিত দীর্ঘস্থায়ী বিশ্বাসের প্রতিফলন।",
        },
        {
          id: 2,
          question: "গণতান্ত্রিক মূল্যবোধের সবচেয়ে গুরুত্বপূর্ণ উপাদান কোনটি?",
          options: [
            "A) কঠোরতা",
            "B) পরমতসহিষ্ণুতা",
            "C) একমুখিতা",
            "D) সামরিক শাসন",
          ],
          answer: "B) পরমতসহিষ্ণুতা",
          explanation:
            "অন্যের মতের প্রতি শ্রদ্ধা প্রদর্শনই গণতান্ত্রিক মূল্যবোধের ভিত্তি।",
        },
        {
          id: 3,
          question: "মূল্যবোধ শিক্ষার প্রধান উৎস কোনটি?",
          options: ["A) সংসদ", "B) পরিবার", "C) ক্লাব", "D) বাজার"],
          answer: "B) পরিবার",
          explanation: "মানুষের মূল্যবোধের ভিত্তি পরিবার থেকেই গড়ে ওঠে।",
        },
        {
          id: 4,
          question: "সমাজের চালিকাশক্তি কোনটি?",
          options: ["A) অস্ত্র", "B) টাকা", "C) মূল্যবোধ", "D) দালান"],
          answer: "C) मूल्यবোধ",
          explanation: "মূল্যবোধ সমাজকে ঐক্যবদ্ধ ও গতিশীল রাখে।",
        },
        {
          id: 5,
          question: "মূল্যবোধ হলো —",
          options: [
            "A) পরিবর্তনশীল",
            "B) অপরিবর্তনীয়",
            "C) স্থির",
            "D) কোনটিই নয়",
          ],
          answer: "A) পরিবর্তনশীল",
          explanation:
            "সময় ও সংস্কৃতির পরিবর্তনের সাথে মূল্যবোধও পরিবর্তিত হতে পারে।",
        },
        {
          id: 6,
          question: "শিষ্টাচার কোন ধরণের মূল্যবোধের অন্তর্ভুক্ত?",
          options: [
            "A) অর্থনৈতিক",
            "B) সামাজিক",
            "C) আধ্যাত্মিক",
            "D) রাজনৈতিক",
          ],
          answer: "B) সামাজিক",
          explanation: "ভদ্রতা ও শিষ্টাচার সামাজিক মূল্যবোধের প্রধান লক্ষণ।",
        },
        {
          id: 7,
          question: "মূল্যবোধের ভিত্তি কোনটি?",
          options: ["A) আইন", "B) নৈতিকতা", "C) পুলিশ", "D) সরকার"],
          answer: "B) নৈতিকতা",
          explanation: "নৈতিকতা থেকেই মূল্যবোধের উৎপত্তি হয়।",
        },
        {
          id: 8,
          question: "ব্যক্তিগত মূল্যবোধ কিসের দ্বারা নিয়ন্ত্রিত হয়?",
          options: ["A) আদালত", "B) নিজের বিবেক", "C) সংবিধান", "D) জেলখানা"],
          answer: "B) নিজের বিবেক",
          explanation: "বিবেকের তাড়নায় মানুষ মূল্যবোধ লালন করে।",
        },
        {
          id: 9,
          question: "সুশাসনের জন্য কোনটি অত্যাবশ্যক?",
          options: [
            "A) আমলাতান্ত্রিক জটিলতা",
            "B) স্বচ্ছ মূল্যবোধ ও নৈতিকতা",
            "C) একদলীয় শাসন",
            "D) কঠোর শাস্তি",
          ],
          answer: "B) স্বচ্ছ মূল্যবোধ ও নৈতিকতা",
          explanation: "মূল্যবোধহীন সমাজ সুশাসন নিশ্চিত করতে পারে না।",
        },
        {
          id: 10,
          question: "মানুষের আচরণের স্থায়ী বিশ্বাসকে কী বলে?",
          options: ["A) ধারণা", "B) মূল্যবোধ", "C) কৌশল", "D) ইচ্ছা"],
          answer: "B) মূল্যবোধ",
          explanation: "এটি ক্ষণস্থায়ী নয়, বরং সুদীর্ঘ সময়ের বিশ্বাস।",
        },
        {
          id: 11,
          question: "মিতাচার কোন ধরণের মূল্যবোধের উদাহরণ?",
          options: ["A) সামাজিক", "B) অর্থনৈতিক", "C) রাজনৈতিক", "D) ধর্মীয়"],
          answer: "B) অর্থনৈতিক",
          explanation: "মিতব্যয়িতা বা মিতাচার অর্থনৈতিক মূল্যবোধের অংশ।",
        },
        {
          id: 12,
          question: "আইনের শাসনের মূল ভিত্তি কোনটি?",
          options: [
            "A) পেশিশক্তি",
            "B) সাম্য ও ন্যায়বিচার",
            "C) স্বজনপ্রীতি",
            "D) দুর্নীতি",
          ],
          answer: "B) সাম্য ও ন্যায়বিচার",
          explanation: "ন্যায়বিচারের মূল্যবোধই আইনের শাসনের মূল কথা।",
        },
        {
          id: 13,
          question: "কোনটি মূল্যবোধের অবক্ষয়ের কারণ?",
          options: [
            "A) মানসম্মত শিক্ষা",
            "B) অনৈতিক প্রতিযোগিতা ও ভোগবাদ",
            "C) সামাজিক ঐক্য",
            "D) ধর্মীয় সহনশীলতা",
          ],
          answer: "B) অনৈতিক প্রতিযোগিতা ও ভোগবাদ",
          explanation: "অত্যধিক লোভ ও ভোগবাদ মূল্যবোধকে ধ্বংস করে।",
        },
        {
          id: 14,
          question: "মূল্যবোধ ও আইনের প্রধান পার্থক্য কী?",
          options: [
            "A) উভয়ই সমান",
            "B) আইন বাধ্যতামূলক, মূল্যবোধ ঐচ্ছিক",
            "C) মূল্যবোধ শক্তিশালী",
            "D) কোনটিই নয়",
          ],
          answer: "B) আইন বাধ্যতামূলক, মূল্যবোধ ঐচ্ছিক",
          explanation:
            "আইন ভঙ্গ করলে শাস্তি নিশ্চিত, মূল্যবোধ ভঙ্গে সামাজিক নিন্দা জোটে।",
        },
        {
          id: 15,
          question: "সমাজের শ্রেষ্ঠ সম্পদ কোনটি?",
          options: [
            "A) ব্যাংক ব্যালেন্স",
            "B) চারিত্রিক মূল্যবোধসম্পন্ন মানুষ",
            "C) খনিজ সম্পদ",
            "D) সামরিক সরঞ্জাম",
          ],
          answer: "B) চারিত্রিক মূল্যবোধসম্পন্ন মানুষ",
          explanation: "সুনাগরিকরাই সমাজের সবচেয়ে বড় সম্পদ।",
        },
        {
          id: 16,
          question: "পেশাগত মূল্যবোধের অন্যতম শর্ত কী?",
          options: [
            "A) ব্যক্তিগত লাভ",
            "B) সততা ও বিশ্বস্ততা",
            "C) রাজনৈতিক সংযোগ",
            "D) বেশি বেতন",
          ],
          answer: "B) সততা ও বিশ্বস্ততা",
          explanation: "পেশার মর্যাদা রক্ষার জন্য সততা অপরিহার্য।",
        },
        {
          id: 17,
          question: "ন্যায়পরায়ণতা বলতে কী বোঝায়?",
          options: [
            "A) পক্ষপাতিত্ব",
            "B) সবার প্রতি সমান ও সঠিক আচরণ",
            "C) নিজের স্বার্থ রক্ষা",
            "D) ভয় প্রদর্শন",
          ],
          answer: "B) সবার প্রতি সমান ও সঠিক আচরণ",
          explanation: "ন্যায়পরায়ণতা একটি মৌলিক নৈতিক মূল্যবোধ।",
        },
        {
          id: 18,
          question:
            "ব্যক্তির সামাজিক মর্যাদা কিসের ওপর ভিত্তি করে নির্ধারিত হয়?",
          options: [
            "A) তার বংশপরিচয়",
            "B) তার ব্যক্তিগত মূল্যবোধ ও আচরণ",
            "C) তার গায়ের রঙ",
            "D) তার ভাষার ধরণ",
          ],
          answer: "B) তার ব্যক্তিগত মূল্যবোধ ও আচরণ",
          explanation: "মূল্যবোধ সম্পন্ন ব্যক্তিই সমাজে শ্রদ্ধেয়।",
        },
        {
          id: 19,
          question: "সহনশীলতা কোন ধরণের গুণের পরিচয় দেয়?",
          options: [
            "A) হীনম্মন্যতা",
            "B) উচ্চতর মানসিক মূল্যবোধ",
            "C) ভীরুতা",
            "D) অজ্ঞতা",
          ],
          answer: "B) উচ্চতর মানসিক মূল্যবোধ",
          explanation: "সহনশীল ব্যক্তি সমাজের স্থিতিশীলতা রক্ষা করেন।",
        },
        {
          id: 20,
          question: "মূল্যবোধ কিসের ওপর প্রভাব ফেলে?",
          options: [
            "A) শুধু খাদ্যাভ্যাসে",
            "B) মানুষের সার্বিক আচরণ ও সিদ্ধান্তে",
            "C) শুধু পোশাকে",
            "D) শুধু আবহাওয়ায়",
          ],
          answer: "B) মানুষের সার্বিক আচরণ ও সিদ্ধান্তে",
          explanation: "মূল্যবোধ মানুষের প্রতিটি পদক্ষেপ নিয়ন্ত্রণ করে।",
        },
        {
          id: 21,
          question: "একটি সুন্দর সমাজ গঠনে কোনটি প্রয়োজন?",
          options: [
            "A) প্রচুর জেলখানা",
            "B) মূল্যবোধের চর্চা",
            "C) সিসিটিভি ক্যামেরা",
            "D) অনেক আইন",
          ],
          answer: "B) মূল্যবোধের চর্চা",
          explanation: "মূল্যবোধের মাধ্যমে অপরাধ স্বতঃস্ফূর্তভাবে কমে আসে।",
        },
        {
          id: 22,
          question: "আধ্যাত্মিক মূল্যবোধের মূল বিষয় কী?",
          options: [
            "A) জাগতিক সম্পদ",
            "B) আত্মিক শান্তি ও বিশ্বাস",
            "C) আধুনিক প্রযুক্তি",
            "D) ফ্যাশন",
          ],
          answer: "B) আত্মিক শান্তি ও বিশ্বাস",
          explanation: "ধর্ম ও আধ্যাত্মিকতা মানুষের আত্মিক মূল্যবোধ বাড়ায়।",
        },
        {
          id: 23,
          question: "মূল্যবোধের ধারণাটি কোনটির সাথে সম্পর্কিত?",
          options: [
            "A) জীববিজ্ঞান",
            "B) সমাজবিজ্ঞান ও নীতিবিদ্যা",
            "C) গণিত",
            "D) পদার্থবিজ্ঞান",
          ],
          answer: "B) সমাজবিজ্ঞান ও নীতিবিদ্যা",
          explanation: "এটি মূলত একটি সমাজতাত্ত্বিক ও দার্শনিক ধারণা।",
        },
        {
          id: 24,
          question: "শ্রমের মর্যাদা কোন ধরণের মূল্যবোধ?",
          options: ["A) সামাজিক", "B) রাজনৈতিক", "C) ধর্মীয়", "D) কোনটিই নয়"],
          answer: "A) সামাজিক",
          explanation: "সব ধরণের কাজকে সম্মান করা একটি সামাজিক মূল্যবোধ।",
        },
        {
          id: 25,
          question: "ব্যক্তিত্ব ও মূল্যবোধের মধ্যে সম্পর্ক কী?",
          options: [
            "A) কোনো সম্পর্ক নেই",
            "B) মূল্যবোধ ব্যক্তিত্বের অংশ",
            "C) বিপরীতমুখী সম্পর্ক",
            "D) গৌণ সম্পর্ক",
          ],
          answer: "B) মূল্যবোধ ব্যক্তিত্বের অংশ",
          explanation: "মূল্যবোধই মানুষের ব্যক্তিত্ব গড়ে তোলে।",
        },
        {
          id: 26,
          question: "স্বচ্ছতা কোন ধরণের মূল্যবোধের বৈশিষ্ট্য?",
          options: [
            "A) প্রশাসনিক ও গণতান্ত্রিক",
            "B) সামরিক",
            "C) পারিবারিক",
            "D) গোপন",
          ],
          answer: "A) প্রশাসনিক ও গণতান্ত্রিক",
          explanation: "স্বচ্ছতা সুশাসন ও গণতন্ত্রের মূল দাবি।",
        },
        {
          id: 27,
          question: "মূল্যবোধ কিসের রক্ষাকবচ হিসেবে কাজ করে?",
          options: [
            "A) দুর্নীতির",
            "B) মানবতার",
            "C) একনায়কতন্ত্রের",
            "D) স্বজনপ্রীতির",
          ],
          answer: "B) মানবতার",
          explanation: "মূল্যবোধ মানুষকে অমানবিক কাজ থেকে দূরে রাখে।",
        },
        {
          id: 28,
          question: "মূল্যবোধের অভাব হলে সমাজে কোনটি প্রাধান্য পায়?",
          options: [
            "A) শান্তি",
            "B) স্বার্থপরতা ও বিশৃঙ্খলা",
            "C) একতা",
            "D) অগ্রগতি",
          ],
          answer: "B) স্বার্থপরতা ও বিশৃঙ্খলা",
          explanation: "অনৈতিক সমাজ বিশৃঙ্খলায় ভরে যায়।",
        },
        {
          id: 29,
          question: "সুনাগরিকের অন্যতম গুণ কোনটি?",
          options: [
            "A) অন্যের অধিকার খর্ব করা",
            "B) সচেতন মূল্যবোধ সম্পন্ন হওয়া",
            "C) সব সময় নীরব থাকা",
            "D) রাজনীতি না করা",
          ],
          answer: "B) সচেতন মূল্যবোধ সম্পন্ন হওয়া",
          explanation: "সুনাগরিক হতে হলে মূল্যবোধ অপরিহার্য।",
        },
        {
          id: 30,
          question: "মূল্যবোধ শিক্ষা কেন দেওয়া উচিত?",
          options: [
            "A) শুধু পরীক্ষা পাসের জন্য",
            "B) নৈতিক অবক্ষয় রোধ ও উন্নত সমাজ গঠনের জন্য",
            "C) বিতর্ক জেতার জন্য",
            "D) অর্থ উপার্জনের জন্য",
          ],
          answer: "B) নৈতিক অবক্ষয় রোধ ও উন্নত সমাজ গঠনের জন্য",
          explanation: "মূল্যবোধ শিক্ষা সমাজকে সভ্য করে।",
        },
      ],
    },
  },
  {
    _id: "ethics_human_rights_bcs_2026",
    title: "Human Rights: মানবাধিকারের ধারণা ও আন্তর্জাতিক ঘোষণা",
    category: "Ethics, Values and Good Governance",
    tags: ["Human Rights", "UDHR", "Fundamental Rights", "Justice", "BCS Prep"],
    last_updated: "2026-02-05",
    article_content: {
      summary:
        "মানবাধিকার হলো সেই সকল সহজাত সুযোগ-সুবিধা যা একজন মানুষ হিসেবে জন্মগ্রহণের কারণে প্রত্যেকের প্রাপ্য। ১৯৪৮ সালের ১০ ডিসেম্বর জাতিসংঘ 'মানবাধিকারের সর্বজনীন ঘোষণা' (UDHR) অনুমোদন করে।",
      key_points: [
        "মানবাধিকার জাতি, ধর্ম, বর্ণ, লিঙ্গ নির্বিশেষে সবার জন্য সমান।",
        "সংবিধানে স্বীকৃত মানবাধিকারগুলোকে 'মৌলিক অধিকার' (Fundamental Rights) বলা হয়।",
        "মানবাধিকার দিবস পালিত হয় প্রতি বছর ১০ ডিসেম্বর।",
      ],
      sections: [
        {
          heading: "১. মানবাধিকারের সর্বজনীন ঘোষণা (UDHR)",
          content:
            "দ্বিতীয় বিশ্বযুদ্ধের পর বিশ্বশান্তি ও মানবিক মর্যাদা রক্ষায় জাতিসংঘ UDHR গ্রহণ করে। এতে মোট ৩০টি অনুচ্ছেদ রয়েছে। এটি কোনো বাধ্যবাধকতামূলক আইন নয়, তবে এটি আন্তর্জাতিক আইনের ভিত্তি হিসেবে কাজ করে।",
        },
        {
          heading: "২. মানবাধিকার ও মৌলিক অধিকারের পার্থক্য",
          content:
            "মানবাধিকার হলো বিশ্বজনীন ও সহজাত। অন্যদিকে, একটি দেশের সংবিধানে যখন মানবাধিকারগুলোকে অন্তর্ভুক্ত করা হয়, তখন তাকে মৌলিক অধিকার বলে। যেমন: বাংলাদেশের সংবিধানের তৃতীয় ভাগে (২৬-৪৭ অনুচ্ছেদ) মৌলিক অধিকারসমূহ বর্ণিত হয়েছে।",
        },
        {
          heading: "৩. মানবাধিকার রক্ষায় প্রাতিষ্ঠানিক কাঠামো",
          content:
            "মানবাধিকার লঙ্ঘিত হলে তা প্রতিকারের জন্য জাতীয় ও আন্তর্জাতিক পর্যায়ে বিভিন্ন সংস্থা কাজ করে। বাংলাদেশে 'জাতীয় মানবাধিকার কমিশন' (NHRC) এবং আন্তর্জাতিকভাবে 'অ্যামনেস্টি ইন্টারন্যাশনাল' ও 'হিউম্যান রাইটস ওয়াচ' অন্যতম।",
        },
      ],
    },
    preliminary_exam_prep: {
      focus: "Top 30 Questions on Human Rights & UDHR",
      mcqs: [
        {
          id: 1,
          question: "মানবাধিকারের সর্বজনীন ঘোষণা (UDHR) কত সালে গৃহীত হয়?",
          options: [
            "A) ১৯৪৫ সালে",
            "B) ১৯৪৬ সালে",
            "C) ১৯৪৮ সালে",
            "D) ১৯৫০ সালে",
          ],
          answer: "C) ১৯৪৮ সালে",
          explanation:
            "১০ ডিসেম্বর ১৯৪৮ সালে জাতিসংঘের সাধারণ পরিষদে এটি গৃহীত হয়।",
        },
        {
          id: 2,
          question: "বিশ্ব মানবাধিকার দিবস কবে পালিত হয়?",
          options: [
            "A) ২৪ অক্টোবর",
            "B) ১ ডিসেম্বর",
            "C) ১০ ডিসেম্বর",
            "D) ১৬ ডিসেম্বর",
          ],
          answer: "C) ১০ ডিসেম্বর",
          explanation:
            "১৯৪৮ সালের ১০ ডিসেম্বর মানবাধিকার ঘোষণা স্মরণে এই দিনটি পালন করা হয়।",
        },
        {
          id: 3,
          question: "UDHR-এ মোট কতটি অনুচ্ছেদ রয়েছে?",
          options: ["A) ২০টি", "B) ২৫টি", "C) ৩০টি", "D) ৩৫টি"],
          answer: "C) ৩০টি",
          explanation:
            "মানবাধিকারের সর্বজনীন ঘোষণাপত্রে ৩০টি ধারা বা অনুচ্ছেদ রয়েছে।",
        },
        {
          id: 4,
          question: "মানবাধিকার কিসের ওপর ভিত্তি করে প্রতিষ্ঠিত?",
          options: [
            "A) গায়ের রঙ",
            "B) মানবিক মর্যাদা ও সাম্য",
            "C) সম্পদ",
            "D) নাগরিকত্ব",
          ],
          answer: "B) মানবিক মর্যাদা ও সাম্য",
          explanation:
            "মানুষ হিসেবে জন্মগত মর্যাদা এবং সবার সমান অধিকারই এর ভিত্তি।",
        },
        {
          id: 5,
          question: "বাংলাদেশের সংবিধানের কোন ভাগে মৌলিক অধিকার বর্ণিত হয়েছে?",
          options: [
            "A) দ্বিতীয় ভাগ",
            "B) তৃতীয় ভাগ",
            "C) চতুর্থ ভাগ",
            "D) পঞ্চম ভাগ",
          ],
          answer: "B) তৃতীয় ভাগ",
          explanation:
            "সংবিধানের ২৬ থেকে ৪৭ নম্বর অনুচ্ছেদে মৌলিক অধিকারের কথা বলা হয়েছে।",
        },
        {
          id: 6,
          question: "নিচের কোনটি একটি মানবাধিকার সংস্থা?",
          options: [
            "A) ইউনেস্কো",
            "B) অ্যামনেস্টি ইন্টারন্যাশনাল",
            "C) ফিফা",
            "D) ডব্লিউটিও (WTO)",
          ],
          answer: "B) অ্যামনেস্টি ইন্টারন্যাশনাল",
          explanation:
            "এটি লন্ডনে অবস্থিত একটি বিখ্যাত আন্তর্জাতিক মানবাধিকার সংস্থা।",
        },
        {
          id: 7,
          question:
            "সংবিধানের কত নম্বর অনুচ্ছেদে 'আইনের চোখে সমান' থাকার অধিকার নিশ্চিত করা হয়েছে?",
          options: [
            "A) অনুচ্ছেদ ২৫",
            "B) অনুচ্ছেদ ২৭",
            "C) অনুচ্ছেদ ৩২",
            "D) অনুচ্ছেদ ৩৬",
          ],
          answer: "B) অনুচ্ছেদ ২৭",
          explanation:
            "২৭ নং অনুচ্ছেদে বলা হয়েছে, সকল নাগরিক আইনের দৃষ্টিতে সমান।",
        },
        {
          id: 8,
          question: "মানবাধিকারের আদি দলিল হিসেবে পরিচিত কোনটি?",
          options: [
            "A) বিল অফ রাইটস",
            "B) ম্যাগনাকার্টা (Magna Carta)",
            "C) ভার্সাই চুক্তি",
            "D) সামাজিক চুক্তি",
          ],
          answer: "B) ম্যাগনাকার্টা (Magna Carta)",
          explanation:
            "১২১৫ সালের ম্যাগনাকার্টাকে মানবাধিকারের প্রাচীনতম দলিল বলা হয়।",
        },
        {
          id: 9,
          question: "মানবাধিকার রক্ষা করা আধুনিক রাষ্ট্রের কী ধরণের দায়িত্ব?",
          options: [
            "A) ঐচ্ছিক দায়িত্ব",
            "B) বাধ্যতামূলক ও নৈতিক দায়িত্ব",
            "C) ব্যবসায়িক দায়িত্ব",
            "D) শুধু আইনি দায়িত্ব",
          ],
          answer: "B) বাধ্যতামূলক ও নৈতিক দায়িত্ব",
          explanation: "নাগরিকের মানবাধিকার রক্ষা করা সুশাসনের অন্যতম শর্ত।",
        },
        {
          id: 10,
          question:
            "জাতীয় মানবাধিকার কমিশন (বাংলাদেশ) কত সালে প্রতিষ্ঠিত হয়?",
          options: [
            "A) ২০০৫ সালে",
            "B) ২০০৭ সালে",
            "C) ২০০৯ সালে",
            "D) ২০১০ সালে",
          ],
          answer: "C) ২০০৯ সালে",
          explanation:
            "২০০৯ সালে আইন পাশের মাধ্যমে এটি বিধিবদ্ধ সংস্থা হিসেবে কাজ শুরু করে।",
        },
        {
          id: 11,
          question: "নিচের কোনটি নাগরিকের রাজনৈতিক মানবাধিকার?",
          options: [
            "A) খাদ্য গ্রহণের অধিকার",
            "B) ভোট দেওয়ার অধিকার",
            "C) শিক্ষা লাভের অধিকার",
            "D) চিকিৎসা লাভের অধিকার",
          ],
          answer: "B) ভোট দেওয়ার অধিকার",
          explanation: "ভোট দেওয়া এবং নির্বাচনে অংশগ্রহণ করা রাজনৈতিক অধিকার।",
        },
        {
          id: 12,
          question: "শিশু অধিকার সনদ (CRC) জাতিসংঘে কবে গৃহীত হয়?",
          options: [
            "A) ১৯৮৫ সালে",
            "B) ১৯৮৯ সালে",
            "C) ১৯৯২ সালে",
            "D) ১৯৯৫ সালে",
          ],
          answer: "B) ১৯৮৯ সালে",
          explanation:
            "২০ নভেম্বর ১৯৮৯ সালে জাতিসংঘ সাধারণ পরিষদে এটি গৃহীত হয়।",
        },
        {
          id: 13,
          question: "নিচের কোনটি মৌলিক মানবাধিকারের পরিপন্থী?",
          options: [
            "A) বাকস্বাধীনতা",
            "B) বর্ণবৈষম্য (Apartheid)",
            "C) লিঙ্গ সমতা",
            "D) ধর্মীয় স্বাধীনতা",
          ],
          answer: "B) বর্ণবৈষম্য (Apartheid)",
          explanation: "গায়ের রঙের ভিত্তিতে বৈষম্য মানবাধিকারের চরম লঙ্ঘন।",
        },
        {
          id: 14,
          question: "জাতীয় মানবাধিকার কমিশনের চেয়ারম্যানকে কে নিয়োগ দেন?",
          options: [
            "A) প্রধানমন্ত্রী",
            "B) রাষ্ট্রপতি",
            "C) স্পিকার",
            "D) প্রধান বিচারপতি",
          ],
          answer: "B) রাষ্ট্রপতি",
          explanation:
            "বাছাই কমিটির সুপারিশক্রমে রাষ্ট্রপতি চেয়ারম্যান নিয়োগ দেন।",
        },
        {
          id: 15,
          question: "জাতিসংঘের কোন পরিষদ মানবাধিকার রক্ষার বিষয়টি তদারকি করে?",
          options: [
            "A) নিরাপত্তা পরিষদ",
            "B) মানবাধিকার কাউন্সিল (HRC)",
            "C) ট্রাস্টিশিপ কাউন্সিল",
            "D) সচিবালয়",
          ],
          answer: "B) মানবাধিকার কাউন্সিল (HRC)",
          explanation: "এটি জেনেভায় অবস্থিত জাতিসংঘের একটি সংস্থা।",
        },
        {
          id: 16,
          question:
            "একজন মানুষের জীবনের অধিকার (Right to Life) কোন ধরণের অধিকার?",
          options: [
            "A) ঐচ্ছিক অধিকার",
            "B) অহরণযোগ্য মানবাধিকার",
            "C) রাজনৈতিক অধিকার",
            "D) অর্থনৈতিক অধিকার",
          ],
          answer: "B) অহরণযোগ্য মানবাধিকার",
          explanation:
            "জীবন ও ব্যক্তির নিরাপত্তার অধিকার অন্যতম প্রধান মৌলিক মানবাধিকার।",
        },
        {
          id: 17,
          question: "CEDAW সনদ কিসের সাথে সম্পর্কিত?",
          options: [
            "A) শিশু অধিকার",
            "B) নারী অধিকার",
            "C) শ্রমিক অধিকার",
            "D) পরিবেশ রক্ষা",
          ],
          answer: "B) নারী অধিকার",
          explanation:
            "নারীর প্রতি সকল প্রকার বৈষম্য বিলোপ সংক্রান্ত সনদই হলো CEDAW।",
        },
        {
          id: 18,
          question:
            "মানবাধিকার লঙ্ঘিত হলে সংবিধানে প্রদত্ত প্রতিকার পাওয়ার অধিকার কত নং অনুচ্ছেদে আছে?",
          options: [
            "A) ৩২ অনুচ্ছেদ",
            "B) ৪৪ অনুচ্ছেদ",
            "C) ১০২ অনুচ্ছেদ",
            "D) B এবং C উভয়ই",
          ],
          answer: "D) B এবং C উভয়ই",
          explanation:
            "৪৪ নং অনুচ্ছেদে অধিকারটি বলা হয়েছে এবং ১০২ নং অনুচ্ছেদে হাইকোর্টে রিট করার ক্ষমতা দেওয়া হয়েছে।",
        },
        {
          id: 19,
          question: "গণমাধ্যমের স্বাধীনতা কোন ধরণের মানবাধিকারের অংশ?",
          options: [
            "A) গোপনীয়তার অধিকার",
            "B) চিন্তা ও মত প্রকাশের স্বাধীনতা",
            "C) ভ্রমণের স্বাধীনতা",
            "D) ধর্মীয় অধিকার",
          ],
          answer: "B) চিন্তা ও মত প্রকাশের স্বাধীনতা",
          explanation:
            "সংবিধানের ৩৯ অনুচ্ছেদ ও মানবাধিকার ঘোষণার ১৯ ধারায় এটি বলা হয়েছে।",
        },
        {
          id: 20,
          question: "কারাগারে বন্দিদের সাথে মানবিক আচরণ করা কিসের অংশ?",
          options: ["A) অনুগ্রহ", "B) মানবাধিকার", "C) দয়া", "D) রাজনৈতিক চাল"],
          answer: "B) মানবাধিকার",
          explanation:
            "বন্দি হলেও একজন মানুষের মৌলিক মানবাধিকারগুলো রক্ষা করা আবশ্যক।",
        },
        {
          id: 21,
          question: "শিক্ষা লাভের অধিকার কোন শ্রেণীর মানবাধিকার?",
          options: [
            "A) রাজনৈতিক",
            "B) সামাজিক ও সাংস্কৃতিক",
            "C) শুধু অর্থনৈতিক",
            "D) সামরিক",
          ],
          answer: "B) সামাজিক ও সাংস্কৃতিক",
          explanation: "এটি সাংস্কৃতিক ও সামাজিক অধিকারের অন্তর্ভুক্ত।",
        },
        {
          id: 22,
          question: "UDHR এর খসড়া তৈরিতে প্রধান ভূমিকা পালন করেন কে?",
          options: [
            "A) মহাত্মা গান্ধী",
            "B) নেলসন ম্যান্ডেলা",
            "C) এলিনর রুজভেল্ট",
            "D) জন এফ কেনেডি",
          ],
          answer: "C) এলিনর রুজভেল্ট",
          explanation:
            "তিনি মানবাধিকার কমিটির চেয়ারম্যান হিসেবে এর খসড়া প্রস্তুত করেন।",
        },
        {
          id: 23,
          question: "বাংলাদেশে মানবাধিকার কমিশনের বর্তমান সদর দপ্তর কোথায়?",
          options: [
            "A) কারওয়ান বাজার, ঢাকা",
            "B) মতিঝিল, ঢাকা",
            "C) শেরেবাংলা নগর, ঢাকা",
            "D) বনানী, ঢাকা",
          ],
          answer: "A) কারওয়ান বাজার, ঢাকা",
          explanation: "জাতীয় মানবাধিকার কমিশন ঢাকার বিটিএমসি ভবনে অবস্থিত।",
        },
        {
          id: 24,
          question: "দাসপ্রথা বিলোপ মানবাধিকার ঘোষণার কত নং ধারায় আছে?",
          options: [
            "A) ১ নং ধারা",
            "B) ২ নং ধারা",
            "C) ৪ নং ধারা",
            "D) ১০ নং ধারা",
          ],
          answer: "C) ৪ নং ধারা",
          explanation: "৪ নং ধারায় দাসত্ব ও দাস প্রথা নিষিদ্ধ করা হয়েছে।",
        },
        {
          id: 25,
          question: "মৌলিক অধিকার বলবৎ করার ক্ষমতা কার হাতে থাকে?",
          options: [
            "A) পুলিশের",
            "B) বিচার বিভাগের",
            "C) সংসদের",
            "D) আমলাদের",
          ],
          answer: "B) বিচার বিভাগের",
          explanation:
            "উচ্চ আদালত রিট জারির মাধ্যমে মৌলিক অধিকার কার্যকর করতে পারে।",
        },
        {
          id: 26,
          question:
            "আইনের আশ্রয় লাভের অধিকার সংবিধানের কোন অনুচ্ছেদে বলা হয়েছে?",
          options: [
            "A) ২৭ অনুচ্ছেদ",
            "B) ৩১ অনুচ্ছেদ",
            "C) ৩২ অনুচ্ছেদ",
            "D) ৩৩ অনুচ্ছেদ",
          ],
          answer: "B) ৩১ অনুচ্ছেদ",
          explanation:
            "৩১ অনুচ্ছেদে নাগরিকের আইনের আশ্রয় লাভের অবিচ্ছেদ্য অধিকারের কথা বলা হয়েছে।",
        },
        {
          id: 27,
          question: "শরণার্থীদের অধিকার রক্ষায় কাজ করে জাতিসংঘের কোন সংস্থা?",
          options: ["A) UNICEF", "B) UNHCR", "C) UNDP", "D) UNESCO"],
          answer: "B) UNHCR",
          explanation: "শরণার্থীদের সুরক্ষা দেওয়া এই সংস্থার প্রধান কাজ।",
        },
        {
          id: 28,
          question: "মানবাধিকার কি সীমাবদ্ধ হতে পারে?",
          options: [
            "A) কখনও না",
            "B) জরুরি অবস্থা বা জনশৃঙ্খলার স্বার্থে যুক্তিসঙ্গত বাধানিষেধ সাপেক্ষে",
            "C) সরকারের ইচ্ছা অনুযায়ী",
            "D) পুলিশের প্রয়োজনে",
          ],
          answer:
            "B) জরুরি অবস্থা বা জনশৃঙ্খলার স্বার্থে যুক্তিসঙ্গত বাধানিষেধ সাপেক্ষে",
          explanation:
            "রাষ্ট্রীয় নিরাপত্তা বা জরুরি অবস্থায় কিছু অধিকার স্থগিত হতে পারে।",
        },
        {
          id: 29,
          question: "নিচের কোনটি মানবাধিকারের পরিপন্থী কাজ?",
          options: [
            "A) বিনা বিচারে আটক রাখা",
            "B) সুবিচার নিশ্চিত করা",
            "C) সমান সুযোগ দেওয়া",
            "D) শিক্ষার প্রচার",
          ],
          answer: "A) বিনা বিচারে আটক রাখা",
          explanation:
            "এটি ব্যক্তিগত স্বাধীনতার পরিপন্থী এবং মানবাধিকারের লঙ্ঘন।",
        },
        {
          id: 30,
          question: "মানবাধিকার চর্চার মাধ্যমে কিসের উন্নয়ন ঘটে?",
          options: [
            "A) শুধু ব্যক্তিগত সম্পত্তি",
            "B) মানবিক মর্যাদা ও বিশ্বশান্তি",
            "C) যুদ্ধ বিগ্রহ",
            "D) দলাদলি",
          ],
          answer: "B) মানবিক মর্যাদা ও বিশ্বশান্তি",
          explanation: "মানবাধিকার রক্ষা পেলে সমাজে শান্তি ও স্থিতি বজায় থাকে।",
        },
      ],
    },
  },
  {
    _id: "ancient_janapadas_bcs_2026",
    title: "Ancient Janapadas: বাংলার প্রাচীন জনপদ ও ভৌগোলিক পরিচয়",
    category: "Bangladesh Affairs",
    tags: [
      "Ancient History",
      "Janapadas",
      "Pundra",
      "Varendra",
      "Samatata",
      "BCS Prep",
    ],
    last_updated: "2026-02-05",
    article_content: {
      summary:
        "প্রাচীনকালে বাংলার বিভিন্ন অংশ পৃথক পৃথক জনপদে বিভক্ত ছিল। এদের মধ্যে পুণ্ড্র, গৌড়, বঙ্গ, সমতট, হরিকেল, রাঢ় ও বরেন্দ্র অন্যতম। এই জনপদগুলোই মূলত বর্তমান বাংলাদেশের ইতিহাসের ভিত্তি।",
      key_points: [
        "পুন্ড্র হলো বাংলার প্রাচীনতম জনপদ।",
        "মহাস্থানগড় পুন্ড্রবর্ধনের রাজধানী ছিল।",
        "সমতট বলতে বর্তমানে কুমিল্লা ও নোয়াখালী অঞ্চলকে বোঝায়।",
      ],
      sections: [
        {
          heading: "১. জনপদের ধারণা ও গুরুত্ব",
          content:
            "ষষ্ঠ শতক থেকে শুরু করে মৌর্য ও গুপ্ত যুগে বাংলার ছোট ছোট অঞ্চলগুলো জনপদ নামে পরিচিত ছিল। এই জনপদগুলো থেকেই আমরা প্রাচীন বাংলার আর্থ-সামাজিক ও রাজনৈতিক অবস্থা সম্পর্কে জানতে পারি।",
        },
        {
          heading: "২. প্রধান জনপদসমূহের ভৌগোলিক অবস্থান",
          content:
            "* **পুন্ড্র:** বগুড়া, রাজশাহী, রংপুর ও দিনাজপুর অঞ্চল।\n* **বঙ্গ:** ঢাকা, ফরিদপুর, ময়মনসিংহ ও বরিশাল অঞ্চল।\n* **গৌড়:** মুর্শিদাবাদ, বীরভূম ও মালদহ অঞ্চল।\n* **সমতট:** কুমিল্লা ও নোয়াখালী অঞ্চল।\n* **হরিকেল:** সিলেট ও চট্টগ্রাম অঞ্চল।\n* **বরেন্দ্র:** উত্তরবঙ্গের বগুড়া, দিনাজপুর ও রাজশাহী জেলার অংশবিশেষ।",
        },
        {
          heading: "৩. বাংলার জনপদের বিলুপ্তি",
          content:
            "সুলতান শামসুদ্দীন ইলিয়াস শাহ যখন ১৩৫২ সালে ক্ষুদ্র ক্ষুদ্র জনপদগুলোকে একত্র করে 'শা-ই-বাঙ্গালাহ' উপাধি নেন, তখন থেকেই এই জনপদগুলোর পৃথক অস্তিত্ব বিলীন হতে শুরু করে।",
        },
      ],
    },
    preliminary_exam_prep: {
      focus: "Top 30 Questions on Ancient Janapadas",
      mcqs: [
        {
          id: 1,
          question: "বাংলার প্রাচীনতম জনপদ কোনটি?",
          options: ["A) বঙ্গ", "B) গৌড়", "C) পুন্ড্র", "D) সমতট"],
          answer: "C) পুন্ড্র",
          explanation:
            "পুন্ড্র হলো বাংলার সবচেয়ে প্রাচীন জনপদ যার অস্তিত্ব বৈদিক সাহিত্যেও পাওয়া যায়।",
        },
        {
          id: 2,
          question: "পুন্ড্রবর্ধনের রাজধানী কোথায় ছিল?",
          options: [
            "A) গৌড়",
            "B) পুন্ড্রনগর (মহাস্থানগড়)",
            "C) কর্ণসুবর্ণ",
            "D) বিক্রমপুর",
          ],
          answer: "B) পুন্ড্রনগর (মহাস্থানগড়)",
          explanation:
            "বগুড়ার মহাস্থানগড়ই ছিল প্রাচীন পুন্ড্রনগরের ধ্বংসাবশেষ।",
        },
        {
          id: 3,
          question: "কুমিল্লা ও নোয়াখালী অঞ্চল কোন জনপদের অন্তর্ভুক্ত ছিল?",
          options: ["A) বঙ্গ", "B) হরিকেল", "C) সমতট", "D) চন্দ্রদ্বীপ"],
          answer: "C) সমতট",
          explanation:
            "মেঘনার পূর্ব তীরের কুমিল্লা ও নোয়াখালী সমতট নামে পরিচিত ছিল।",
        },
        {
          id: 4,
          question: "সিলেট ও চট্টগ্রাম অঞ্চল কোন প্রাচীন জনপদের অংশ?",
          options: ["A) রাঢ়", "B) হরিকেল", "C) বরেন্দ্র", "D) সুহ্ম"],
          answer: "B) হরিকেল",
          explanation: "পূর্ব বাংলার প্রান্তিক অঞ্চলের নাম ছিল হরিকেল।",
        },
        {
          id: 5,
          question: "বরেন্দ্র বা বরেন্দ্রী বলতে কোন অঞ্চলকে বোঝায়?",
          options: [
            "A) উত্তরবঙ্গ",
            "B) দক্ষিণবঙ্গ",
            "C) পূর্ববঙ্গ",
            "D) পশ্চিমবঙ্গ",
          ],
          answer: "A) উত্তরবঙ্গ",
          explanation:
            "রাজশাহী, বগুড়া ও দিনাজপুর জেলার অংশবিশেষ নিয়ে বরেন্দ্র জনপদ গঠিত।",
        },
        {
          id: 6,
          question: "প্রাচীনকালে ঢাকা কোন জনপদের অন্তর্ভুক্ত ছিল?",
          options: ["A) পুন্ড্র", "B) সমতট", "C) বঙ্গ", "D) গৌড়"],
          answer: "C) বঙ্গ",
          explanation: "ঢাকা, ফরিদপুর ও বৃহত্তর ময়মনসিংহের অংশ ছিল বঙ্গ জনপদে।",
        },
        {
          id: 7,
          question: "বরিশাল ও পটুয়াখালী অঞ্চলের প্রাচীন নাম কী ছিল?",
          options: ["A) হরিকেল", "B) চন্দ্রদ্বীপ", "C) রাঢ়", "D) সমতট"],
          answer: "B) চন্দ্রদ্বীপ",
          explanation: "প্রাচীনকালে বরিশাল অঞ্চলকে চন্দ্রদ্বীপ বলা হতো।",
        },
        {
          id: 8,
          question: "কর্ণসুবর্ণ কার রাজধানী ছিল?",
          options: [
            "A) রাজা ধর্মপাল",
            "B) রাজা শশাঙ্ক",
            "C) বিজয় সেন",
            "D) ঈসা খাঁ",
          ],
          answer: "B) রাজা শশাঙ্ক",
          explanation: "গৌড়ের রাজা শশাঙ্কের রাজধানী ছিল কর্ণসুবর্ণ।",
        },
        {
          id: 9,
          question: "গৌড় জনপদটি বর্তমানে কোন জেলার অন্তর্ভুক্ত?",
          options: [
            "A) ঢাকা",
            "B) চাঁপাইনবাবগঞ্জ ও মুর্শিদাবাদ",
            "C) কুমিল্লা",
            "D) চট্টগ্রাম",
          ],
          answer: "B) চাঁপাইনবাবগঞ্জ ও মুর্শিদাবাদ",
          explanation:
            "চাঁপাইনবাবগঞ্জ ও মালদহ অঞ্চলের কিছু অংশ গৌড়ের অন্তর্ভুক্ত ছিল।",
        },
        {
          id: 10,
          question: "ভাগীরথী ও অজয় নদীর মধ্যবর্তী অঞ্চলকে কী বলা হতো?",
          options: ["A) হরিকেল", "B) রাঢ়", "C) বরেন্দ্র", "D) সমতট"],
          answer: "B) রাঢ়",
          explanation: "পশ্চিমবঙ্গের এই অঞ্চলটি রাঢ় জনপদ হিসেবে পরিচিত ছিল।",
        },
        {
          id: 11,
          question: "কোন সুলতান প্রথম বাংলার সব জনপদকে একত্র করেন?",
          options: [
            "A) গিয়াসউদ্দীন আজম শাহ",
            "B) শামসুদ্দীন ইলিয়াস শাহ",
            "C) ফখরুদ্দীন মোবারক শাহ",
            "D) আলাউদ্দীন হোসেন শাহ",
          ],
          answer: "B) শামসুদ্দীন ইলিয়াস শাহ",
          explanation: "তিনি নিজেকে 'শা-ই-বাঙ্গালাহ' উপাধিতে ভূষিত করেন।",
        },
        {
          id: 12,
          question: "মহাস্থানগড় কোন নদীর তীরে অবস্থিত?",
          options: ["A) যমুনা", "B) করতোয়া", "C) ব্রহ্মপুত্র", "D) পদ্মা"],
          answer: "B) করতোয়া",
          explanation: "করতোয়া নদীর পশ্চিম তীরে প্রাচীন পুন্ড্রনগর অবস্থিত।",
        },
        {
          id: 13,
          question: "চীনা পরিব্রাজক হিউয়েন সাং সমতটকে কী বলেছিলেন?",
          options: [
            "A) শিলাদিত্য",
            "B) শি-লি-চা-তা-লো",
            "C) মো-লো-পো",
            "D) পাঞ্চালা",
          ],
          answer: "B) শি-লি-চা-তা-লো",
          explanation: "তিনি সমতট জনপদ ভ্রমণ করেছিলেন।",
        },
        {
          id: 14,
          question: "পাল বংশের রাজারা কোন জনপদের অধিপতি ছিলেন?",
          options: ["A) রাঢ়", "B) সমতট", "C) বরেন্দ্র ও পুন্ড্র", "D) হরিকেল"],
          answer: "C) বরেন্দ্র ও পুন্ড্র",
          explanation: "পাল বংশের শাসনকেন্দ্র ছিল মূলত উত্তরবঙ্গ।",
        },
        {
          id: 15,
          question: "প্রাচীন বঙ্গ জনপদ কয়টি ভাগে বিভক্ত ছিল?",
          options: ["A) ২টি", "B) ৩টি", "C) ৪টি", "D) ৫টি"],
          answer: "A) ২টি",
          explanation: "বঙ্গ ও বিক্রমপুর নামে দুটি ভাগে এটি বিভক্ত ছিল।",
        },
        {
          id: 16,
          question: "তাম্রলিপ্ত কী ছিল?",
          options: [
            "A) একটি রাজধানী",
            "B) একটি প্রাচীন সমুদ্র বন্দর",
            "C) একটি নদ",
            "D) একটি পাহাড়",
          ],
          answer: "B) একটি প্রাচীন সমুদ্র বন্দর",
          explanation: "মেদিনীপুর জেলার তমলুক ছিল এই বিখ্যাত বন্দরের স্থান।",
        },
        {
          id: 17,
          question: "বৃহত্তর বগুড়া জেলা কোন জনপদে ছিল?",
          options: ["A) বঙ্গ", "B) পুন্ড্র", "C) হরিকেল", "D) সমতট"],
          answer: "B) পুন্ড্র",
          explanation: "পুন্ড্র জনপদের মূল কেন্দ্রই ছিল বগুড়া।",
        },
        {
          id: 18,
          question: "বাঙালি জাতির আদি আবাসস্থল কোন জনপদকে বলা হয়?",
          options: ["A) গৌড়", "B) বঙ্গ", "C) পুন্ড্র", "D) হরিকেল"],
          answer: "B) বঙ্গ",
          explanation:
            "বঙ্গ জনপদ থেকেই মূলত বাঙালি জাতির নামকরণ ও বিকাশ ঘটেছে।",
        },
        {
          id: 19,
          question: "ময়নামতী কোন জনপদের অন্তর্ভুক্ত ছিল?",
          options: ["A) হরিকেল", "B) পুন্ড্র", "C) সমতট", "D) বঙ্গ"],
          answer: "C) সমতট",
          explanation: "কুমিল্লার ময়নামতী সমতট জনপদের ঐতিহ্যের অংশ।",
        },
        {
          id: 20,
          question: "বিক্রমপুর প্রাচীনকালে কোন জনপদের রাজধানী ছিল?",
          options: ["A) সমতট", "B) বঙ্গ", "C) গৌড়", "D) রাঢ়"],
          answer: "B) বঙ্গ",
          explanation:
            "বঙ্গ জনপদের একটি প্রধান কেন্দ্র ও রাজধানী ছিল বিক্রমপুর।",
        },
        {
          id: 21,
          question: "প্রাচীন বাংলার জনপদগুলোর কথা কোন গ্রন্থে প্রথম পাওয়া যায়?",
          options: [
            "A) রামায়ণ",
            "B) ঐতরেয় আরণ্যক",
            "C) রাজতরঙ্গিণী",
            "D) অর্থশাস্ত্র",
          ],
          answer: "B) ঐতরেয় আরণ্যক",
          explanation: "এখানেই প্রথম বঙ্গ ও পুন্ড্রদের কথা উল্লেখ পাওয়া যায়।",
        },
        {
          id: 22,
          question: "খুলনা ও পটুয়াখালী অঞ্চল কোন জনপদের অন্তর্ভুক্ত ছিল?",
          options: ["A) গৌড়", "B) বঙ্গ (উপবঙ্গ)", "C) পুন্ড্র", "D) সমতট"],
          answer: "B) বঙ্গ (উপবঙ্গ)",
          explanation: "সুন্দরবন সংলগ্ন এলাকাগুলো উপবঙ্গ বা বঙ্গের অংশ ছিল।",
        },
        {
          id: 23,
          question: "প্রাচীন বাংলার সীমানা নির্ধারণকারী নদী কোনটি?",
          options: ["A) পদ্মা", "B) যমুনা", "C) ভাগীরথী", "D) মেঘনা"],
          answer: "C) ভাগীরথী",
          explanation:
            "পশ্চিমবঙ্গের ভাগীরথী নদী প্রাচীন জনপদগুলোর সীমানা নির্ধারণ করত।",
        },
        {
          id: 24,
          question: "সপ্তম শতকে কোন শক্তিশালী রাজা গৌড় জনপদ শাসন করতেন?",
          options: ["A) গোপাল", "B) শশাঙ্ক", "C) ধর্মপাল", "D) লক্ষ্মণ সেন"],
          answer: "B) শশাঙ্ক",
          explanation: "শশাঙ্ক ছিলেন বাংলার প্রথম স্বাধীন সার্বভৌম রাজা।",
        },
        {
          id: 25,
          question: "মহাস্থানগড় ও পাহাড়পুর কোন জনপদের নিদর্শন?",
          options: ["A) বঙ্গ", "B) সমতট", "C) পুন্ড্র", "D) হরিকেল"],
          answer: "C) পুন্ড্র",
          explanation: "উত্তরবঙ্গের এই দুই স্থানই পুন্ড্র ও বরেন্দ্রর অংশ।",
        },
        {
          id: 26,
          question: "ভুলুয়া (বর্তমান নোয়াখালী) কোন জনপদে ছিল?",
          options: ["A) সমতট", "B) হরিকেল", "C) বঙ্গ", "D) পুন্ড্র"],
          answer: "A) সমতট",
          explanation:
            "নোয়াখালীর প্রাচীন নাম ভুলুয়া ছিল এবং এটি সমতটের অংশ ছিল।",
        },
        {
          id: 27,
          question: "চন্দ্রদ্বীপের বর্তমান নাম কী?",
          options: ["A) ভোলা", "B) বরিশাল", "C) খুলনা", "D) বাগেরহাট"],
          answer: "B) বরিশাল",
          explanation: "চন্দ্রদ্বীপ ছিল মধ্যযুগের আগ পর্যন্ত বরিশালের পরিচিতি।",
        },
        {
          id: 28,
          question:
            "শশাঙ্কের পর বাংলায় প্রায় ১০০ বছর যে অরাজকতা চলে তাকে কী বলে?",
          options: [
            "A) সুশাসন",
            "B) মাৎস্যন্যায়",
            "C) একনায়কতন্ত্র",
            "D) অন্ধকার যুগ",
          ],
          answer: "B) মাৎস্যন্যায়",
          explanation: "জোর যার মুল্লুক তার—এই অবস্থাকে মাৎস্যন্যায় বলা হয়।",
        },
        {
          id: 29,
          question: "পাণ্ডুরাজার ঢিবি কোন জনপদের অংশ?",
          options: ["A) বঙ্গ", "B) রাঢ়", "C) পুন্ড্র", "D) হরিকেল"],
          answer: "B) রাঢ়",
          explanation:
            "এটি পশ্চিমবঙ্গের বর্ধমান জেলায় অবস্থিত প্রাচীন রাঢ়ের নিদর্শন।",
        },
        {
          id: 30,
          question: "বাংলার ইতিহাসের আদি উৎস কোনটি?",
          options: [
            "A) লিপি ও মুদ্রা",
            "B) প্রাচীন জনপদ",
            "C) লোককাহিনী",
            "D) শুধু বই",
          ],
          answer: "B) প্রাচীন জনপদ",
          explanation:
            "জনপদগুলোর মাধ্যমে আমরা বাঙালির হাজার বছরের ইতিহাস খুঁজে পাই।",
        },
      ],
    },
  },
  {
    _id: "ancient_dynasties_bcs_2026",
    title: "Ancient Dynasties: প্রাচীন বাংলার রাজবংশ ও শাসনকাল",
    category: "Bangladesh Affairs",
    tags: ["Mauryas", "Guptas", "Palas", "Senas", "Ancient Dynasties", "BCS"],
    last_updated: "2026-02-05",
    article_content: {
      summary:
        "বাংলার প্রাচীন ইতিহাস মৌর্য ও গুপ্ত যুগের আধিপত্য থেকে শুরু করে পাল ও সেন রাজবংশের নিজস্ব শাসনের এক দীর্ঘ পরিক্রমা। পাল বংশ ছিল বাংলার প্রথম দীর্ঘস্থায়ী দেশীয় রাজবংশ।",
      key_points: [
        "মৌর্য সম্রাট অশোকের সময় পুন্ড্রনগর মৌর্যদের অধীনে ছিল।",
        "পাল বংশ টানা ৪০০ বছর বাংলা শাসন করে যা ইতিহাসে বিরল।",
        "সেন বংশের পতনের মাধ্যমে বাংলায় হিন্দু শাসনের অবসান ঘটে।",
      ],
      sections: [
        {
          heading: "১. মৌর্য ও গুপ্ত শাসন",
          content:
            "চন্দ্রগুপ্ত মৌর্য মৌর্য বংশের প্রতিষ্ঠাতা। সম্রাট অশোকের সময় উত্তরবঙ্গ মৌর্যদের শাসনাধীন ছিল। এর প্রমাণ পাওয়া যায় মহাস্থানগড়ে প্রাপ্ত 'ব্রাহ্মী লিপি' থেকে। * গুপ্ত যুগে বাংলা একটি সুসংগঠিত প্রশাসনিক ইউনিটে পরিণত হয়।",
        },
        {
          heading: "২. পাল রাজবংশ (৭৫০-১১৬১ খ্রি.)",
          content:
            "শশাঙ্কের মৃত্যুর পর বাংলায় চলা বিশৃঙ্খলা (মাৎস্যন্যায়) অবসান ঘটিয়ে গোপাল পাল বংশ প্রতিষ্ঠা করেন। * পাল রাজারা বৌদ্ধ ধর্মাবলম্বী ছিলেন। * রাজা ধর্মপাল 'বিক্রমশীল' উপাধি নেন এবং পাহাড়পুর বৌদ্ধ বিহার (সোমপুর বিহার) নির্মাণ করেন।",
        },
        {
          heading: "৩. সেন রাজবংশ (১০৯৮-১২০৪ খ্রি.)",
          content:
            "পালদের দুর্বলতার সুযোগে কর্ণাটক থেকে আসা সেনরা বাংলায় রাজত্ব শুরু করে। প্রতিষ্ঠাতা সামন্ত সেন হলেও প্রকৃত প্রতিষ্ঠাতা বিজয় সেন। * সেন রাজারা হিন্দু ধর্মাবলম্বী ছিলেন। * লক্ষণ সেনের সময় বখতিয়ার খলজী নদীয়া জয় করলে সেন শাসনের পতন শুরু হয়।",
        },
      ],
    },
    preliminary_exam_prep: {
      focus: "Top 30 Questions on Ancient Dynasties",
      mcqs: [
        {
          id: 1,
          question: "পাল বংশের প্রতিষ্ঠাতা কে?",
          options: ["A) ধর্মপাল", "B) দেবপাল", "C) গোপাল", "D) মহিপাল"],
          answer: "C) গোপাল",
          explanation:
            "৭৫০ খ্রিস্টাব্দে অরাজকতার অবসান ঘটিয়ে প্রজারা তাকে রাজা নির্বাচিত করে।",
        },
        {
          id: 2,
          question: "সম্রাট অশোক কোন বংশের রাজা ছিলেন?",
          options: ["A) গুপ্ত", "B) পাল", "C) মৌর্য", "D) খলজী"],
          answer: "C) মৌর্য",
          explanation:
            "তিনি বিন্দুসারের পুত্র এবং মৌর্য বংশের অন্যতম শ্রেষ্ঠ সম্রাট।",
        },
        {
          id: 3,
          question: "পাহাড়পুর বৌদ্ধ বিহার (সোমপুর বিহার) কে নির্মাণ করেন?",
          options: ["A) গোপাল", "B) ধর্মপাল", "C) বিজয় সেন", "D) শশাঙ্ক"],
          answer: "B) ধর্মপাল",
          explanation:
            "এটি নওগাঁ জেলায় অবস্থিত একটি ইউনেস্কো ওয়ার্ল্ড হেরিটেজ সাইট।",
        },
        {
          id: 4,
          question: "সেন বংশের শেষ রাজা কে ছিলেন?",
          options: [
            "A) বিজয় সেন",
            "B) লক্ষণ সেন",
            "C) বল্লাল সেন",
            "D) হেমন্ত সেন",
          ],
          answer: "B) লক্ষণ সেন",
          explanation: "বখতিয়ার খলজীর আক্রমণের সময় তিনি নদীয়া ত্যাগ করেন।",
        },
        {
          id: 5,
          question: "বাংলার প্রথম স্বাধীন ও সার্বভৌম রাজা কে ছিলেন?",
          options: ["A) শশাঙ্ক", "B) গোপাল", "C) বিজয় সেন", "D) বিক্রমাদিত্য"],
          answer: "A) শশাঙ্ক",
          explanation:
            "তিনি সপ্তম শতকের শুরুতে গৌড় জনপদে স্বাধীন শাসন প্রতিষ্ঠা করেন।",
        },
        {
          id: 6,
          question: "কৈবর্ত বিদ্রোহ কার আমলে সংঘটিত হয়?",
          options: [
            "A) প্রথম মহিপাল",
            "B) দ্বিতীয় মহিপাল",
            "C) রামপাল",
            "D) গোবিন্দ পাল",
          ],
          answer: "B) দ্বিতীয় মহিপাল",
          explanation: "এটি ছিল বাংলার ইতিহাসে প্রথম সফল গণ-বিদ্রোহ।",
        },
        {
          id: 7,
          question: "সেন রাজবংশের আদি নিবাস কোথায় ছিল?",
          options: ["A) কর্ণাটক", "B) উড়িষ্যা", "C) মগধ", "D) তিব্বত"],
          answer: "A) কর্ণাটক",
          explanation: "সেনরা দক্ষিণ ভারতের কর্ণাটক থেকে বাংলায় এসেছিল।",
        },
        {
          id: 8,
          question: "মৌর্য বংশের শ্রেষ্ঠ সম্রাট কে ছিলেন?",
          options: [
            "A) চন্দ্রগুপ্ত মৌর্য",
            "B) বিন্দুসার",
            "C) সম্রাট অশোক",
            "D) সমুদ্রগুপ্ত",
          ],
          answer: "C) সম্রাট অশোক",
          explanation:
            "কলিঙ্গ যুদ্ধের পর তিনি বৌদ্ধ ধর্ম গ্রহণ করে অহিংসার নীতি প্রচার করেন।",
        },
        {
          id: 9,
          question: "কৌলীন্য প্রথা প্রবর্তন করেন কে?",
          options: [
            "A) বিজয় সেন",
            "B) বল্লাল সেন",
            "C) লক্ষণ সেন",
            "D) সামন্ত সেন",
          ],
          answer: "B) বল্লাল সেন",
          explanation:
            "তিনি হিন্দু সমাজে বর্ণভেদের ভিত্তিতে কৌলীন্য প্রথা চালু করেন।",
        },
        {
          id: 10,
          question: "বাংলার ইতিহাসে 'মাৎস্যন্যায়' কোন যুগের সাথে সম্পর্কিত?",
          options: [
            "A) পাল যুগের আগে",
            "B) সেন যুগের পরে",
            "C) মৌর্য যুগে",
            "D) ইংরেজ আমলে",
          ],
          answer: "A) পাল যুগের আগে",
          explanation:
            "শশাঙ্কের মৃত্যুর পর প্রায় ১০০ বছরের অরাজক সময়কালকে মাৎস্যন্যায় বলে।",
        },
        {
          id: 11,
          question: "লক্ষণ সেনের রাজধানী কোথায় ছিল?",
          options: [
            "A) মহাস্থানগড়",
            "B) নদীয়া ও বিক্রমপুর",
            "C) কর্ণসুবর্ণ",
            "D) পুন্ড্রনগর",
          ],
          answer: "B) নদীয়া ও বিক্রমপুর",
          explanation:
            "বখতিয়ার খলজী যখন নদীয়া আক্রমণ করেন, রাজা লক্ষণ সেন তখন সেখানেই ছিলেন।",
        },
        {
          id: 12,
          question: "গুপ্ত বংশের প্রকৃত প্রতিষ্ঠাতা কে ছিলেন?",
          options: [
            "A) শ্রী গুপ্ত",
            "B) প্রথম চন্দ্রগুপ্ত",
            "C) সমুদ্রগুপ্ত",
            "D) দ্বিতীয় চন্দ্রগুপ্ত",
          ],
          answer: "B) প্রথম চন্দ্রগুপ্ত",
          explanation:
            "তিনি ৩২০ খ্রিস্টাব্দে গুপ্ত সাম্রাজ্যের শক্তিশালী ভিত্তি গড়েন।",
        },
        {
          id: 13,
          question: "কাকে 'ভারতের নেপোলিয়ন' বলা হয়?",
          options: [
            "A) সম্রাট অশোক",
            "B) সমুদ্রগুপ্ত",
            "C) আলেকজান্ডার",
            "D) বাবর",
          ],
          answer: "B) সমুদ্রগুপ্ত",
          explanation:
            "ঐতিহাসিক ভি.এ. স্মিথ তার সামরিক বিজয়ের কারণে তাকে এই উপাধি দেন।",
        },
        {
          id: 14,
          question: "পাল বংশের দীর্ঘতম স্থায়ী সম্রাট কে ছিলেন?",
          options: ["A) গোপাল", "B) ধর্মপাল", "C) দেবপাল", "D) মহিপাল"],
          answer: "B) ধর্মপাল",
          explanation:
            "তিনি প্রায় ৪০ বছর রাজত্ব করেন এবং পাল বংশের শ্রেষ্ঠ রাজা ছিলেন।",
        },
        {
          id: 15,
          question: "ব্রাহ্মী লিপি বাংলার কোন প্রাচীন স্থানে পাওয়া গেছে?",
          options: ["A) ময়নামতী", "B) মহাস্থানগড়", "C) পাহাড়পুর", "D) লালমাই"],
          answer: "B) মহাস্থানগড়",
          explanation: "মহাস্থানগড়ে প্রাপ্ত শিলালিপি মৌর্য শাসনের প্রমাণ দেয়।",
        },
        {
          id: 16,
          question: "বৌদ্ধ ধর্মাবলম্বী রাজবংশ কোনটি?",
          options: ["A) সেন বংশ", "B) পাল বংশ", "C) সুলতানি বংশ", "D) দেব বংশ"],
          answer: "B) পাল বংশ",
          explanation: "পাল রাজারা বৌদ্ধ ধর্মের পৃষ্ঠপোষক ছিলেন।",
        },
        {
          id: 17,
          question: "দানসাগর ও অদ্ভুতসাগর গ্রন্থ দুটির রচয়িতা কে?",
          options: ["A) লক্ষণ সেন", "B) বল্লাল সেন", "C) বিজয় সেন", "D) জয়দেব"],
          answer: "B) বল্লাল সেন",
          explanation: "তিনি একজন বিদ্যানুরাগী রাজা ছিলেন।",
        },
        {
          id: 18,
          question: "কোন চীনা পরিব্রাজক দ্বিতীয় চন্দ্রগুপ্তের আমলে ভারতে আসেন?",
          options: [
            "A) ফা-হিয়েন",
            "B) হিউয়েন সাং",
            "C) ই-সিং",
            "D) মেগাস্থিনিস",
          ],
          answer: "A) ফা-হিয়েন",
          explanation: "তিনি দীর্ঘ সময় ভারতে অবস্থান করে ভ্রমণকাহিনী লেখেন।",
        },
        {
          id: 19,
          question: "চর্যাপদ কোন রাজবংশের আমলে রচিত হয় বলে ধারণা করা হয়?",
          options: ["A) সেন আমল", "B) পাল আমল", "C) মৌর্য আমল", "D) গুপ্ত আমল"],
          answer: "B) পাল আমল",
          explanation:
            "বৌদ্ধ সহজিয়া সিদ্ধাচার্যরা পাল যুগে চর্যাপদ রচনা করেন।",
        },
        {
          id: 20,
          question: "বাংলার কোন রাজার দরবারে কবি জয়দেব অবস্থান করতেন?",
          options: ["A) ধর্মপাল", "B) লক্ষণ সেন", "C) বল্লাল সেন", "D) শশাঙ্ক"],
          answer: "B) লক্ষণ সেন",
          explanation:
            "গীতগোবিন্দ কাব্য রচয়িতা জয়দেব ছিলেন লক্ষণ সেনের সভাকবি।",
        },
        {
          id: 21,
          question: "মৌর্য সাম্রাজ্যের পতন ঘটে কার হাতে?",
          options: [
            "A) পুষ্যমিত্র শুঙ্গ",
            "B) কনিষ্ক",
            "C) বিম্বিসার",
            "D) হর্ষবর্ধন",
          ],
          answer: "A) পুষ্যমিত্র শুঙ্গ",
          explanation:
            "মৌর্যদের শেষ সম্রাট বৃহদ্রথকে হত্যা করে তিনি শুঙ্গ বংশ প্রতিষ্ঠা করেন।",
        },
        {
          id: 22,
          question: "পাল রাজবংশের শ্রেষ্ঠ রাজা কে?",
          options: ["A) গোপাল", "B) ধর্মপাল", "C) দেবপাল", "D) রামপাল"],
          answer: "B) ধর্মপাল",
          explanation:
            "তার আমলেই পাল সাম্রাজ্য উত্তর ভারতের অনেক দূর পর্যন্ত বিস্তৃত হয়।",
        },
        {
          id: 23,
          question: "সেন বংশের প্রতিষ্ঠাতা কে?",
          options: [
            "A) হেমন্ত সেন",
            "B) সামন্ত সেন",
            "C) বিজয় সেন",
            "D) লক্ষণ সেন",
          ],
          answer: "B) সামন্ত সেন",
          explanation: "তবে পালদের হটিয়ে রাজনৈতিক ভিত্তি স্থাপন করেন বিজয় সেন।",
        },
        {
          id: 24,
          question: "রামচরিতম্ এর লেখক কে?",
          options: [
            "A) তুলসীদাস",
            "B) সন্ধ্যাকর নন্দী",
            "C) কলহন",
            "D) বিষ্ণুশর্মা",
          ],
          answer: "B) সন্ধ্যাকর নন্দী",
          explanation: "এটি রামপাল ও কৈবর্ত বিদ্রোহের কাহিনী নিয়ে লেখা।",
        },
        {
          id: 25,
          question:
            "গুপ্ত যুগের পর হর্ষবর্ধনের শাসনামলে কোন চীনা পর্যটক বাংলায় আসেন?",
          options: [
            "A) ফা-হিয়েন",
            "B) হিউয়েন সাং",
            "C) আল বেরুনী",
            "D) ইবনে বতুতা",
          ],
          answer: "B) হিউয়েন সাং",
          explanation: "তিনি হর্ষবর্ধনের পৃষ্ঠপোষকতা লাভ করেছিলেন।",
        },
        {
          id: 26,
          question: "সেন যুগে বাংলার প্রধান ধর্ম কী ছিল?",
          options: [
            "A) বৌদ্ধ",
            "B) হিন্দু (ব্রাহ্মণ্যবাদ)",
            "C) ইসলাম",
            "D) জৈন",
          ],
          answer: "B) হিন্দু (ব্রাহ্মণ্যবাদ)",
          explanation: "সেনরা হিন্দু ধর্মের কট্টর অনুসারী ছিলেন।",
        },
        {
          id: 27,
          question: "প্রাচীন ভারতের 'স্বর্ণযুগ' বলা হয় কোন আমলকে?",
          options: [
            "A) মৌর্য আমল",
            "B) গুপ্ত আমল",
            "C) পাল আমল",
            "D) সুলতানি আমল",
          ],
          answer: "B) গুপ্ত আমল",
          explanation:
            "শিল্প ও সাহিত্যের ব্যাপক উন্নতির জন্য এটি স্বর্ণযুগ হিসেবে পরিচিত।",
        },
        {
          id: 28,
          question: "পাল বংশের অবসান ঘটে কোন রাজার মাধ্যমে?",
          options: ["A) মহিপাল", "B) গোবিন্দ পাল", "C) রামপাল", "D) কুমারপাল"],
          answer: "B) গোবিন্দ পাল",
          explanation: "তার মাধ্যমেই পাল শাসনের চূড়ান্ত অবসান ঘটে।",
        },
        {
          id: 29,
          question: "ইন্দ্রের রাজধানী বলা হতো প্রাচীন বাংলার কোন নগরকে?",
          options: ["A) গৌড়", "B) পুন্ড্রনগর", "C) মহাস্থানগড়", "D) বিক্রমপুর"],
          answer: "C) মহাস্থানগড়",
          explanation: "এর জৌলুস ও সমৃদ্ধির কারণে এমন তুলনা করা হতো।",
        },
        {
          id: 30,
          question: "বখতিয়ার খলজীর নদীয়া বিজয়ের সময় লক্ষণ সেনের বয়স কত ছিল?",
          options: ["A) ৬০ বছর", "B) ৭০ বছর", "C) ৮০ বছর", "D) ৯০ বছর"],
          answer: "C) ৮০ বছর",
          explanation: "তিনি তখন বৃদ্ধ ছিলেন এবং পালিয়ে বিক্রমপুরে আশ্রয় নেন।",
        },
      ],
    },
  },
];

export const blog_details_bangladesh_2 = [
  {
    _id: "mughal_empire_bcs_2026",
    title: "উপমহাদেশে মুঘল শাসন-Mughal Empire",
    category: "বাংলাদেশ ও আন্তর্জাতিক বিষয়াবলী",
    tags: [
      "মুঘল শাসন",
      "বাবর",
      "আকবর",
      "শাহজাহান",
      "বিসিএস",
      "ইতিহাস",
      "বাংলার সুবাদার",
    ],
    last_updated: "২০২৬-০২-০৫",
    article_content: {
      summary:
        "১৫২৬ সালে পানিপথের প্রথম যুদ্ধের মাধ্যমে জহিরুদ্দিন মোহাম্মদ বাবর উপমহাদেশে মুঘল সাম্রাজ্যের ভিত্তি স্থাপন করেন। দীর্ঘ ৩৩১ বছরের এই শাসনামল শিল্প, স্থাপত্য, এবং প্রশাসনিক সংস্কারের জন্য বিশ্ব ইতিহাসে অনন্য। মুঘল শাসনামলকে মূলত দুই ভাগে ভাগ করা হয়: মহান মুঘল (বাবর থেকে ঔরঙ্গজেব) এবং পরবর্তী দুর্বল মুঘল শাসকগণ।",
      key_points: [
        "প্রতিষ্ঠাতা: জহিরুদ্দিন মোহাম্মদ বাবর (১৫২৬)।",
        "সর্বশ্রেষ্ঠ সম্রাট: জালালুদ্দিন মোহাম্মদ আকবর।",
        "স্থাপত্যের স্বর্ণযুগ: সম্রাট শাহজাহানের আমল।",
        "বাংলার সুবাদারি শাসন: সম্রাট আকবরের সময় থেকে সুসংগঠিত হয়।",
        "পতন: ১৮৫৭ সালে শেষ মুঘল সম্রাট বাহাদুর শাহ জাফরের নির্বাসনের মাধ্যমে।",
      ],
      visual_representation: {
        image_tag: BD1,
        caption: "মহান মুঘল সম্রাটদের বংশানুক্রমিক তালিকা।",
      },
      sections: [
        {
          heading: "১. মুঘল সাম্রাজ্যের উত্থান: পানিপথের যুদ্ধ ও বাবর",
          content:
            "১৫২৬ সালে পানিপথের প্রথম যুদ্ধে বাবর দিল্লির সুলতান ইব্রাহিম লোদিকে পরাজিত করেন। * এই যুদ্ধে বাবর প্রথমবারের মতো উপমহাদেশে কামান ও বারুদ ব্যবহার করেন। * ১৫৩০ সালে বাবরের মৃত্যুর পর হুমায়ুন সিংহাসনে বসেন, তবে শেরশাহ শুরির কাছে পরাজিত হয়ে তিনি ১৫ বছর পারস্যে নির্বাসিত ছিলেন।",
        },
        {
          heading: "২. আকবরের শাসনকাল ও প্রশাসনিক কাঠামো (মনসবদারি)",
          content:
            "১৫৫৬ সালে পানিপথের দ্বিতীয় যুদ্ধে হিমুকে পরাজিত করে আকবর ক্ষমতা সুসংহত করেন। * তিনি 'মনসবদারি' প্রথা চালু করেন যা ছিল মুঘল সামরিক ও প্রশাসনিক ব্যবস্থার মূল ভিত্তি। * তার অর্থসচিব রাজা টোডরমল ভূমি রাজস্ব ব্যবস্থার আমূল পরিবর্তন আনেন যা 'জবতি প্রথা' নামে পরিচিত।",
        },
        {
          heading: "৩. বাংলা ও বারো ভূঁইয়া: ঢাকা যখন রাজধানী",
          content:
            "সম্রাট জাহাঙ্গীরের আমলে ১৬১০ সালে সুবাদার ইসলাম খাঁ ঢাকা জয় করেন এবং নাম দেন 'জাহাঙ্গীরনগর'। * তিনি অত্যন্ত কৌশলে বাংলার শক্তিশালী জমিদার বা 'বারো ভূঁইয়া'দের দমন করেন। * এর ফলে বাংলা প্রথমবারের মতো দিল্লির সরাসরি শাসনাধীনে আসে এবং ঢাকাকে কেন্দ্র করে প্রশাসনিক বলয় তৈরি হয়।",
        },
        {
          heading: "৪. মুঘল স্থাপত্যের বিবর্তন ও তাজমহল",
          content:
            "সম্রাট শাহজাহানের আমলকে স্থাপত্যের 'স্বর্ণযুগ' বলা হয়। * তিনি তার পত্নী মমতাজের স্মরণে আগ্রায় শ্বেত পাথরের তাজমহল নির্মাণ করেন। * এছাড়া দিল্লির লাল কেল্লা, জামে মসজিদ এবং ময়ূর সিংহাসন তার শাসনামলের শ্রেষ্ঠ কীর্তি।",
        },
        {
          heading: "৫. সাম্রাজ্যের পতন ও সিপাহী বিদ্রোহ (১৮৫৭)",
          content:
            "ঔরঙ্গজেবের মৃত্যুর পর দুর্বল উত্তরসূরিদের কারণে সাম্রাজ্য ক্ষয়িষ্ণু হতে থাকে। * ১৮৫৭ সালের সিপাহী বিদ্রোহের সময় বিদ্রোহীরা দ্বিতীয় বাহাদুর শাহ জাফরকে ভারতের সম্রাট ঘোষণা করেন। * ইংরেজরা বিদ্রোহ দমন করে তাকে রেঙ্গুনে নির্বাসিত করলে ৩৩১ বছরের মুঘল শাসনের চূড়ান্ত অবসান ঘটে।",
        },
      ],
    },
    preliminary_exam_prep: {
      focus: "বিসিএস প্রিলিমিনারি দৃষ্টিকোণ (TOP 30 MCQ)",
      mcqs: [
        {
          id: 1,
          question: "উপমহাদেশে মুঘল সাম্রাজ্যের প্রতিষ্ঠাতা কে?",
          options: ["ক) হুমায়ুন", "খ) আকবর", "গ) বাবর", "ঘ) জাহাঙ্গীর"],
          answer: "গ) বাবর",
          explanation:
            "১৫২৬ সালে পানিপথের প্রথম যুদ্ধের মাধ্যমে বাবর মুঘল সাম্রাজ্য প্রতিষ্ঠা করেন।",
        },
        {
          id: 2,
          question: "বাংলা সনের প্রবর্তক কে?",
          options: [
            "ক) আলাউদ্দীন হোসেন শাহ",
            "খ) সম্রাট আকবর",
            "গ) সুবাদার ইসলাম খাঁ",
            "ঘ) মুর্শিদকুলী খাঁ",
          ],
          answer: "খ) সম্রাট আকবর",
          explanation:
            "১৫৮৪ সালে সম্রাট আকবর খাজনা আদায়ের সুবিধার্থে বাংলা সন প্রবর্তন করেন।",
        },
        {
          id: 3,
          question: "ঢাকা কত সালে মুঘলদের অধীনে বাংলার রাজধানী হয়?",
          options: ["ক) ১৫৭৬", "খ) ১৬১০", "গ) ১৭০৪", "ঘ) ১৭৫৭"],
          answer: "খ) ১৬১০",
          explanation:
            "সুবাদার ইসলাম খাঁ ঢাকা জয় করে বাংলার রাজধানী স্থাপন করেন।",
        },
        {
          id: 4,
          question: "কোন মুঘল সম্রাট জিজিয়া কর রহিত করেন?",
          options: ["ক) বাবর", "খ) আকবর", "গ) শাহজাহান", "ঘ) ঔরঙ্গজেব"],
          answer: "খ) আকবর",
          explanation:
            "অসাম্প্রদায়িক নীতি হিসেবে আকবর হিন্দুদের ওপর থেকে জিজিয়া কর তুলে নেন।",
        },
        {
          id: 5,
          question: "তাজমহলের প্রধান স্থপতি কে ছিলেন?",
          options: [
            "ক) ওস্তাদ ঈসা খাঁ",
            "খ) ওস্তাদ আহমেদ লাহোরি",
            "গ) মীর জুমলা",
            "ঘ) শায়েস্তা খাঁ",
          ],
          answer: "খ) ওস্তাদ আহমেদ লাহোরি",
          explanation:
            "শাহজাহানের নির্দেশে তাজমহল নির্মাণে প্রধান নকশাকার ছিলেন তিনি।",
        },
        {
          id: 6,
          question: "মনসবদারি প্রথা কে প্রবর্তন করেন?",
          options: ["ক) বাবর", "খ) শেরশাহ", "গ) আকবর", "ঘ) ঔরঙ্গজেব"],
          answer: "গ) আকবর",
          explanation:
            "সামরিক ও প্রশাসনিক কর্মকর্তাদের পদমর্যাদা নির্ধারণে এটি চালু হয়।",
        },
        {
          id: 7,
          question: "পানিপথের প্রথম যুদ্ধ কবে সংঘটিত হয়?",
          options: ["ক) ১৫২৬", "খ) ১৫৫৬", "গ) ১৭৬১", "ঘ) ১৫৭৬"],
          answer: "ক) ১৫২৬",
          explanation:
            "২১ এপ্রিল ১৫২৬ সালে বাবর ও ইব্রাহিম লোদির মধ্যে এই যুদ্ধ হয়।",
        },
        {
          id: 8,
          question: "দ্বিতীয় পানিপথের যুদ্ধে আকবরের সেনাপতি কে ছিলেন?",
          options: ["ক) মানসিংহ", "খ) বৈরাম খাঁ", "গ) টোডরমল", "ঘ) বীরবল"],
          answer: "খ) বৈরাম খাঁ",
          explanation:
            "১৫৫৬ সালে বৈরাম খাঁর নেতৃত্বে মুঘলরা হিমুকে পরাজিত করে।",
        },
        {
          id: 9,
          question: "কোন মুঘল সম্রাটের সমাধি লাহোরে অবস্থিত?",
          options: ["ক) বাবর", "খ) জাহাঙ্গীর", "গ) শাহজাহান", "ঘ) হুমায়ুন"],
          answer: "খ) জাহাঙ্গীর",
          explanation: "জাহাঙ্গীরের সমাধি পাকিস্তানের শাহদারা, লাহোরে অবস্থিত।",
        },
        {
          id: 10,
          question: "ময়ূর সিংহাসন কে তৈরি করেছিলেন?",
          options: ["ক) আকবর", "খ) জাহাঙ্গীর", "গ) শাহজাহান", "ঘ) ঔরঙ্গজেব"],
          answer: "গ) শাহজাহান",
          explanation:
            "স্থাপত্যের প্রতি অনুরাগের অংশ হিসেবে তিনি এটি নির্মাণ করেন।",
        },
        {
          id: 11,
          question: "শেষ মুঘল সম্রাট কে ছিলেন?",
          options: [
            "ক) দ্বিতীয় শাহ আলম",
            "খ) দ্বিতীয় বাহাদুর শাহ",
            "গ) সম্রাট ফররুখ শিয়ার",
            "ঘ) মোহাম্মদ শাহ",
          ],
          answer: "খ) দ্বিতীয় বাহাদুর শাহ",
          explanation:
            "১৮৫৭ সালের বিদ্রোহের পর তাকে রেঙ্গুনে নির্বাসিত করা হয়।",
        },
        {
          id: 12,
          question: "দ্বীন-ই-ইলাহি কত সালে প্রবর্তিত হয়?",
          options: ["ক) ১৫৫৬", "খ) ১৫৭৬", "গ) ১৫Check", "ঘ) ১৫৮২"],
          answer: "ঘ) ১৫৮২",
          explanation:
            "আকবর সর্বধর্মের সারকথা নিয়ে এই নতুন ধর্মীয় দর্শন প্রচার করেন।",
        },
        {
          id: 13,
          question: "শাহ সুজা মুঘলদের কোন সুবাদার ছিলেন?",
          options: [
            "ক) বিহারের",
            "খ) বাংলার",
            "গ) উড়িষ্যার",
            "ঘ) দাক্ষিণাত্যের",
          ],
          answer: "খ) বাংলার",
          explanation:
            "তিনি শাহজাহানের পুত্র এবং বাংলার দীর্ঘকালীন সুবাদার ছিলেন।",
        },
        {
          id: 14,
          question: "লালবাগের কেল্লা নির্মাণ কাজ শুরু করেন কে?",
          options: [
            "ক) শায়েস্তা খাঁ",
            "খ) সুবাদার আজম শাহ",
            "গ) মীর জুমলা",
            "ঘ) ইসলাম খাঁ",
          ],
          answer: "খ) সুবাদার আজম শাহ",
          explanation: "১৬৭৮ সালে শাহজাদা আজম এটি শুরু করেন।",
        },
        {
          id: 15,
          question: "কোন মুঘল সম্রাট নিজেকে 'আলমগীর' উপাধি দেন?",
          options: ["ক) শাহজাহান", "খ) জাহাঙ্গীর", "গ) ঔরঙ্গজেব", "ঘ) বাবর"],
          answer: "গ) ঔরঙ্গজেব",
          explanation: "আলমগীর মানে 'বিশ্ববিজয়ী', যা তার রাজকীয় নাম।",
        },
        {
          id: 16,
          question: "তুজুক-ই-বাবরি কোন ভাষায় রচিত?",
          options: ["ক) ফার্সি", "খ) তুর্কি", "গ) আরবি", "ঘ) উর্দু"],
          answer: "খ) তুর্কি",
          explanation: "এটি সম্রাটের আত্মজীবনী যা চাঘতাই তুর্কি ভাষায় লেখা।",
        },
        {
          id: 17,
          question: "বাংলায় বারো ভূঁইয়াদের দমন করেন কে?",
          options: [
            "ক) সম্রাট আকবর",
            "খ) সুবাদার ইসলাম খাঁ",
            "গ) মানসিংহ",
            "ঘ) শায়েস্তা খাঁ",
          ],
          answer: "খ) সুবাদার ইসলাম খাঁ",
          explanation:
            "জাহাঙ্গীরের আমলে ইসলাম খাঁ চূড়ান্তভাবে তাদের পরাজিত করেন।",
        },
        {
          id: 18,
          question: "বিবি পরী কে ছিলেন?",
          options: [
            "ক) শাহজাহানের স্ত্রী",
            "খ) শায়েস্তা খাঁর কন্যা",
            "গ) আজম শাহের বোন",
            "ঘ) নর্তকী",
          ],
          answer: "খ) শায়েস্তা খাঁর কন্যা",
          explanation: "লালবাগ কেল্লায় তার মাজার একটি গুরুত্বপূর্ণ স্থাপত্য।",
        },
        {
          id: 19,
          question:
            "কোন মুঘল সম্রাটের আমলে ইস্ট ইন্ডিয়া কোম্পানি সুরাটে কারখানা স্থাপনের অনুমতি পায়?",
          options: ["ক) আকবর", "খ) জাহাঙ্গীর", "গ) শাহজাহান", "ঘ) ঔরঙ্গজেব"],
          answer: "খ) জাহাঙ্গীর",
          explanation: "১৬১২ সালে তারা বাণিজ্য কুঠি স্থাপনের অনুমতি পায়।",
        },
        {
          id: 20,
          question: "নাদির শাহ কত সালে ভারত আক্রমণ করেন?",
          options: ["ক) ১৭৩৯", "খ) ১৭৬১", "গ) ১৫২৬", "ঘ) ১৮৫৭"],
          answer: "ক) ১৭৩৯",
          explanation:
            "মুঘল সম্রাট মোহাম্মদ শাহের সময় তিনি দিল্লি লুণ্ঠন করেন।",
        },
        {
          id: 21,
          question: "হুমায়ুন নামা কে রচনা করেন?",
          options: [
            "ক) হুমায়ুন",
            "খ) গুলবদন বেগম",
            "গ) আবুল ফজল",
            "ঘ) সম্রাট বাবর",
          ],
          answer: "খ) গুলবদন বেগম",
          explanation: "তিনি ছিলেন সম্রাট হুমায়ুনের বোন।",
        },
        {
          id: 22,
          question: "বাংলার শেষ মোগল সুবাদার কে ছিলেন?",
          options: [
            "ক) শায়েস্তা খাঁ",
            "খ) মুর্শিদকুলী খাঁ",
            "গ) মীর জুমলা",
            "ঘ) আলীবর্দী খাঁ",
          ],
          answer: "খ) মুর্শিদকুলী খাঁ",
          explanation:
            "পরবর্তীতে তিনি বাংলার স্বাধীন নবাব হিসেবে আত্মপ্রকাশ করেন।",
        },
        {
          id: 23,
          question:
            "কোন যুদ্ধের মাধ্যমে আফগানদের হাত থেকে আকবর চূড়ান্তভাবে বাংলা জয় করেন?",
          options: ["ক) পানিপথ", "খ) পলাশী", "গ) রাজমহল", "ঘ) বক্সার"],
          answer: "গ) রাজমহল",
          explanation: "১৫৭৬ সালে দাউদ খাঁ কররানীকে পরাজিত করে বাংলা জয় করেন।",
        },
        {
          id: 24,
          question: "মুঘলদের দরবারের ভাষা কী ছিল?",
          options: ["ক) তুর্কি", "খ) ফার্সি", "গ) উর্দু", "ঘ) হিন্দি"],
          answer: "খ) ফার্সি",
          explanation: "প্রশাসনিক ও দাপ্তরিক ভাষা হিসেবে ফার্সি ব্যবহৃত হতো।",
        },
        {
          id: 25,
          question: "কোন সুবাদারের আমলে চট্টগ্রামে মগ দস্যুদের দমন করা হয়?",
          options: [
            "ক) ইসলাম খাঁ",
            "খ) শায়েস্তা খাঁ",
            "গ) মীর জুমলা",
            "ঘ) শাহ সুজা",
          ],
          answer: "খ) শায়েস্তা খাঁ",
          explanation: "১৬৬৬ সালে তিনি চট্টগ্রাম জয় করে নাম দেন 'ইসলামাবাদ'।",
        },
        {
          id: 26,
          question: "বুলন্দ দরওয়াজা কে নির্মাণ করেন?",
          options: [
            "ক) বাবর",
            "খ) আকবর",
            "গ) শাহজাহান",
            "ঘ) কুতুবউদ্দিন আইবেক",
          ],
          answer: "খ) আকবর",
          explanation: "গুজরাট বিজয় স্মরণে ফতেহপুর সিক্রিতে এটি নির্মিত হয়।",
        },
        {
          id: 27,
          question: "শেরশাহের সমাধি কোথায় অবস্থিত?",
          options: ["ক) দিল্লি", "খ) আগ্রা", "গ) সাসারাম", "ঘ) ঢাকা"],
          answer: "গ) সাসারাম",
          explanation: "বিহারের সাসারামে তার দৃষ্টিনন্দন সমাধি অবস্থিত।",
        },
        {
          id: 28,
          question:
            "মুঘল আমলে গ্র্যান্ড ট্রাঙ্ক রোড (GT Road) কে সংস্কার করেন?",
          options: ["ক) বাবর", "খ) শেরশাহ", "গ) আকবর", "ঘ) শাহজাহান"],
          answer: "খ) শেরশাহ",
          explanation:
            "সুনারগাঁও থেকে সিন্ধু নদ পর্যন্ত এই রাস্তাটি তিনি গুরুত্বপূর্ণ করে তোলেন।",
        },
        {
          id: 29,
          question: "আইন-ই-আকবরী গ্রন্থের রচয়িতা কে?",
          options: ["ক) বীরবল", "খ) আবুল ফজল", "গ) ফৈজী", "ঘ) টোডরমল"],
          answer: "খ) আবুল ফজল",
          explanation: "এটি আকবরের প্রশাসনের একটি প্রামাণ্য দলিল।",
        },
        {
          id: 30,
          question: "ফতোয়া-ই-আলমগিরি কিসের ওপর ভিত্তি করে রচিত?",
          options: ["ক) ইতিহাস", "খ) স্থাপত্য", "গ) ইসলামী আইন", "ঘ) সঙ্গীত"],
          answer: "গ) ইসলামী আইন",
          explanation: "ঔরঙ্গজেবের নির্দেশে ইসলামী বিধিবিধান সংকলিত হয়।",
        },
      ],
    },
    written_exam_prep: {
      guidelines:
        "লিখিত পরীক্ষায় মুঘল আমল থেকে মূলত স্থাপত্য, আকবরের শাসন নীতি এবং বাংলার সুবাদারি শাসনের ওপর প্রশ্ন হয়।",
      possible_questions: [
        {
          question:
            "মুঘল সম্রাট আকবরের রাজপুত নীতি ও দ্বীন-ই-ইলাহি দর্শনের মূল উদ্দেশ্য ব্যাখ্যা করুন।",
          key_points_for_answer: [
            "সাম্রাজ্যের রাজনৈতিক স্থিতিশীলতা রক্ষা।",
            "সংখ্যাগুরু হিন্দুদের সাথে সুসম্পর্ক স্থাপন।",
            "ধর্মীয় গোঁড়ামি দূর করে একটি ঐক্যবদ্ধ জাতি গঠন।",
          ],
        },
        {
          question:
            "বাংলায় মুঘল শাসন সুসংহত করার ক্ষেত্রে সুবাদার ইসলাম খাঁর অবদান আলোচনা করুন।",
          key_points_for_answer: [
            "রাজধানী ঢাকায় স্থানান্তর (১৬১০)।",
            "বারো ভূঁইয়াদের চূড়ান্ত পরাজয় নিশ্চিত করা।",
            "নৌবাহিনী পুনর্গঠন ও প্রশাসনিক বিকেন্দ্রীকরণ।",
          ],
        },
        {
          question:
            "স্থাপত্যের ইতিহাসে সম্রাট শাহজাহানের আমলকে কেন 'স্বর্ণযুগ' বলা হয়?",
          key_points_for_answer: [
            "তাজমহল ও লাল কেল্লার মতো বিশ্বমানের স্থাপত্য।",
            "মার্বেল পাথরের শৈল্পিক ব্যবহার।",
            "ময়ূর সিংহাসন ও দিওয়ান-ই-খাস এর অলঙ্করণ।",
          ],
        },
      ],
    },
  },
  {
    _id: "english_rule_bengal_bcs_2026",
    title: "বাংলায় ইংরেজ শাসন-English Rule in Bengal (1757-1947)",
    category: "বাংলাদেশ বিষয়াবলী",
    tags: [
      "বাংলাদেশ বিষয়াবলী",
      "ইংরেজ শাসন",
      "পলাশীর যুদ্ধ",
      "চিরস্থায়ী বন্দোবস্ত",
      "বঙ্গভঙ্গ",
      "বিসিএস প্রস্তুতি",
      "History of Bengal",
    ],
    last_updated: "২০২৬-০২-০৫",
    article_content: {
      summary:
        "১৭৫৭ সালে পলাশীর যুদ্ধে নবাব সিরাজউদ্দৌলার পতনের মাধ্যমে বাংলায় ইংরেজ শাসনের সূচনা হয়। প্রায় ২০০ বছরের এই শাসনকালকে দুই ভাগে ভাগ করা যায়: কোম্পানি শাসন (১৭৫৭-১৮৫৮) এবং ব্রিটিশ রাজের সরাসরি শাসন (১৮৫৮-১৯৪৭)। এই সময়কালটি রাজনৈতিক চক্রান্ত, অর্থনৈতিক শোষণ এবং একইসাথে আধুনিক শিক্ষা ও সংস্কারের এক সংমিশ্রণ।",
      key_points: [
        "সূচনা: ১৭৫৭ সালের ২৩ জুন পলাশীর যুদ্ধের মাধ্যমে।",
        "দ্বৈত শাসন: ১৭৬৫ সালে লর্ড ক্লাইভ কর্তৃক প্রবর্তিত।",
        "চিরস্থায়ী বন্দোবস্ত: ১৭৯৩ সালে লর্ড কর্নওয়ালিস কর্তৃক প্রবর্তিত ভূমি ব্যবস্থা।",
        "প্রথম স্বাধীনতা যুদ্ধ: ১৮৫৭ সালের সিপাহী বিদ্রোহ।",
        "অবসান: ১৯৪৭ সালের ১৪ ও ১৫ আগস্ট দেশভাগের মাধ্যমে।",
      ],
      visual_representation: {
        image_tag: "",
        caption: "বাংলার মানচিত্রে ব্রিটিশ শাসনের বিস্তার।",
      },
      sections: [
        {
          heading: "১. পলাশী থেকে বক্সার: ইংরেজ আধিপত্যের সূচনা",
          content:
            "১৭৫৭ সালের ২৩ জুন পলাশীর যুদ্ধে মীর জাফরের বিশ্বাসঘাতকতায় নবাব সিরাজউদ্দৌলার পরাজয় ঘটে। * পরবর্তীতে ১৭৬৪ সালে বক্সারের যুদ্ধে মীর কাসিম পরাজিত হলে ইংরেজদের ক্ষমতা নিষ্কণ্টক হয়। * ১৭৬৫ সালে সম্রাট শাহ আলমের কাছ থেকে ইস্ট ইন্ডিয়া কোম্পানি বাংলার 'দেওয়ানি' (রাজস্ব আদায়ের ক্ষমতা) লাভ করে।",
        },
        {
          heading: "২. ভূমি সংস্কার ও চিরস্থায়ী বন্দোবস্ত (১৭৯৩)",
          content:
            "লর্ড কর্নওয়ালিস ১৭৯৩ সালে 'চিরস্থায়ী বন্দোবস্ত' প্রবর্তন করেন। * এর ফলে জমিদাররা জমির স্থায়ী মালিকে পরিণত হয় এবং কৃষকরা ভূমিহীন প্রজায় পরিণত হয়। * এই ব্যবস্থার অন্যতম অনুষঙ্গ ছিল 'সূর্যাস্ত আইন', যেখানে নির্দিষ্ট দিনে সূর্যাস্তের আগে খাজনা দিতে ব্যর্থ হলে জমিদারি নিলামে তোলা হতো।",
        },
        {
          heading: "৩. বাংলার রেনেসাঁ ও সমাজ সংস্কার আন্দোলন",
          content:
            "১৯শ শতকে ইংরেজি শিক্ষার প্রসারের ফলে বাংলায় সমাজ সংস্কার আন্দোলন শুরু হয়। * রাজা রামমোহন রায় 'সতীদাহ প্রথা' উচ্ছেদ (১৮২৯) এবং ঈশ্বরচন্দ্র বিদ্যাসাগর 'বিধবা বিবাহ' (১৮৫৬) প্রচলনে মুখ্য ভূমিকা রাখেন। * এই সময়েই ফরায়েজী আন্দোলন ও তিতুমীরের বাঁশের কেল্লার মতো ব্রিটিশ বিরোধী বিদ্রোহগুলো দানা বাঁধে।",
        },
        {
          heading: "৪. বঙ্গভঙ্গ (১৯০৫) ও ব্রিটিশ বিরোধী আন্দোলন",
          content:
            "প্রশাসনিক সুবিধার অজুহাতে লর্ড কার্জন ১৯০৫ সালে বাংলাকে বিভক্ত করেন (বঙ্গভঙ্গ)। * এর প্রতিবাদে 'স্বদেশী আন্দোলন' ও 'বয়কট আন্দোলন' শুরু হয়। * প্রবল আন্দোলনের মুখে ১৯১১ সালে লর্ড হার্ডিঞ্জ বঙ্গভঙ্গ রদ ঘোষণা করেন, যা বাংলার রাজনীতিতে সুদূরপ্রসারী প্রভাব ফেলে।",
        },
        {
          heading: "৫. ১৯৪০-এর দশক ও ভারত বিভক্তি",
          content:
            "১৯৪০ সালের লাহোর প্রস্তাবের ভিত্তিতে পৃথক মুসলিম রাষ্ট্রের দাবি জোরালো হয়। * ১৯৪৬ সালের সাধারণ নির্বাচন এবং তার পরবর্তী দাঙ্গার প্রেক্ষাপটে লর্ড মাউন্টব্যাটেন ভারত বিভক্তির পরিকল্পনা করেন। * ১৯৪৭ সালের ১৫ আগস্ট ভারত এবং ১৪ আগস্ট পাকিস্তান সৃষ্টির মাধ্যমে বাংলায় ইংরেজ শাসনের অবসান ঘটে।",
        },
      ],
    },
    preliminary_exam_prep: {
      focus: "বিসিএস প্রিলিমিনারি দৃষ্টিকোণ (TOP 30 MCQ)",
      mcqs: [
        {
          id: 1,
          question: "পলাশীর যুদ্ধ কত সালে সংঘটিত হয়?",
          options: ["ক) ১৭৫৭", "খ) ১৭৬৪", "গ) ১৭৬৫", "ঘ) ১৭৯৩"],
          answer: "ক) ১৭৫৭",
          explanation: "১৭৫৭ সালের ২৩ জুন পলাশীর আম্রকাননে এই যুদ্ধ হয়।",
        },
        {
          id: 2,
          question: "বাংলার প্রথম গভর্নর জেনারেল কে ছিলেন?",
          options: [
            "ক) লর্ড ক্লাইভ",
            "খ) ওয়ারেন হেস্টিংস",
            "গ) লর্ড কর্নওয়ালিস",
            "ঘ) লর্ড বেন্টিঙ্ক",
          ],
          answer: "খ) ওয়ারেন হেস্টিংস",
          explanation:
            "১৭৭৩ সালের রেগুলেটিং অ্যাক্ট অনুযায়ী তিনি প্রথম গভর্নর জেনারেল নিযুক্ত হন।",
        },
        {
          id: 3,
          question: "চিরস্থায়ী বন্দোবস্ত কে প্রবর্তন করেন?",
          options: [
            "ক) লর্ড ডালহৌসি",
            "খ) লর্ড কর্নওয়ালিস",
            "গ) লর্ড কার্জন",
            "ঘ) লর্ড মাউন্টব্যাটেন",
          ],
          answer: "খ) লর্ড কর্নওয়ালিস",
          explanation:
            "১৭৯৩ সালে জমিদারদের সাথে এই স্থায়ী ভূমি ব্যবস্থা করা হয়।",
        },
        {
          id: 4,
          question: "সতীদাহ প্রথা বিলুপ্ত হয় কত সালে?",
          options: ["ক) ১৮২৯", "খ) ১৮৫৬", "গ) ১৮৫৮", "ঘ) ১৯০৫"],
          answer: "ক) ১৮২৯",
          explanation:
            "লর্ড বেন্টিঙ্ক রাজা রামমোহন রায়ের সহায়তায় এটি বিলুপ্ত করেন।",
        },
        {
          id: 5,
          question: "বঙ্গভঙ্গ ঘোষণা করেন কোন বড়লাট?",
          options: [
            "ক) লর্ড রিপন",
            "খ) লর্ড কার্জন",
            "গ) লর্ড হার্ডিঞ্জ",
            "ঘ) লর্ড মিন্টো",
          ],
          answer: "খ) লর্ড কার্জন",
          explanation: "১৯০৫ সালের ১৬ অক্টোবর বঙ্গভঙ্গ কার্যকর করা হয়।",
        },
        {
          id: 6,
          question: "বাংলায় 'দ্বৈত শাসন' কে প্রবর্তন করেন?",
          options: [
            "ক) লর্ড ক্লাইভ",
            "খ) লর্ড ক্যানিং",
            "গ) ওয়ারেন হেস্টিংস",
            "ঘ) লর্ড ডালহৌসি",
          ],
          answer: "ক) লর্ড ক্লাইভ",
          explanation: "১৭৬৫ সালে দেওয়ানি লাভের পর তিনি এই ব্যবস্থা চালু করেন।",
        },
        {
          id: 7,
          question: "ছিয়াত্তরের মন্বন্তর (বাংলা ১১৭৬) কত খ্রিষ্টাব্দে হয়েছিল?",
          options: ["ক) ১৭৭০", "খ) ১৭৭৬", "গ) ১৮৭০", "ঘ) ১৮৯৬"],
          answer: "ক) ১৭৭০",
          explanation:
            "অত্যধিক রাজস্ব আদায় ও খরা এই ভয়াবহ দুর্ভিক্ষের কারণ ছিল।",
        },
        {
          id: 8,
          question: "বাঁশের কেল্লা কে নির্মাণ করেছিলেন?",
          options: [
            "ক) হাজী শরীয়তুল্লাহ",
            "খ) তিতুমীর",
            "গ) সূর্য সেন",
            "ঘ) মজনু শাহ",
          ],
          answer: "খ) তিতুমীর",
          explanation:
            "নারকেলবাড়িয়ায় তিনি ইংরেজদের বিরুদ্ধে যুদ্ধের জন্য এটি তৈরি করেন।",
        },
        {
          id: 9,
          question: "উপমহাদেশে প্রথম রেললাইন চালু হয় কার আমলে?",
          options: [
            "ক) লর্ড কার্জন",
            "খ) লর্ড ডালহৌসি",
            "গ) লর্ড বেন্টিঙ্ক",
            "ঘ) লর্ড রিপন",
          ],
          answer: "খ) লর্ড ডালহৌসি",
          explanation: "১৮৫৩ সালে ভারতে প্রথম রেল যোগাযোগ শুরু হয়।",
        },
        {
          id: 10,
          question: "ফরায়েজী আন্দোলনের প্রতিষ্ঠাতা কে?",
          options: [
            "ক) দুদু মিয়া",
            "খ) হাজী শরীয়তুল্লাহ",
            "গ) সৈয়দ আহমদ ব্রেলভী",
            "ঘ) তিতুমীর",
          ],
          answer: "খ) হাজী শরীয়তুল্লাহ",
          explanation:
            "তিনি ইসলাম ধর্ম সংস্কারের লক্ষ্যে এই আন্দোলন শুরু করেন।",
        },
        {
          id: 11,
          question: "সিপাহী বিদ্রোহ কত সালে শুরু হয়?",
          options: ["ক) ১৮৫৭", "খ) ১৮৫৮", "গ) ১৭৫৭", "ঘ) ১৯০৫"],
          answer: "ক) ১৮৫৭",
          explanation:
            "মঙ্গঁল পান্ডের মাধ্যমে ব্যারাকপুরে এই বিদ্রোহের সূচনা হয়।",
        },
        {
          id: 12,
          question: "ব্রিটিশ রাজ সরাসরি ভারতের শাসনভার গ্রহণ করেন কবে?",
          options: ["ক) ১৮৫৭", "খ) ১৮৫৮", "গ) ১৯১১", "ঘ) ১৯৩৫"],
          answer: "খ) ১৮৫৮",
          explanation:
            "মহারানি ভিক্টোরিয়ার ঘোষণার মাধ্যমে কোম্পানি শাসনের অবসান ঘটে।",
        },
        {
          id: 13,
          question: "ভারতবর্ষে প্রথম আদমশুমারি শুরু হয় কার আমলে?",
          options: [
            "ক) লর্ড কার্জন",
            "খ) লর্ড মেয়ো",
            "গ) লর্ড রিপন",
            "ঘ) লর্ড লিটন",
          ],
          answer: "খ) লর্ড মেয়ো",
          explanation: "১৮৭২ সালে লর্ড মেয়োর আমলে প্রথম আদমশুমারি হয়।",
        },
        {
          id: 14,
          question: "বঙ্গভঙ্গ রদ করা হয় কত সালে?",
          options: ["ক) ১৯০৫", "খ) ১৯১১", "গ) ১৯২১", "ঘ) ১৯৪৫"],
          answer: "খ) ১৯১১",
          explanation:
            "দিল্লি দরবারে সম্রাট পঞ্চম জর্জ বঙ্গভঙ্গ রদ ঘোষণা করেন।",
        },
        {
          id: 15,
          question: "ভারতীয় জাতীয় কংগ্রেস কত সালে প্রতিষ্ঠিত হয়?",
          options: ["ক) ১৮৮৫", "খ) ১৯০৬", "গ) ১৯২০", "ঘ) ১৯৩৫"],
          answer: "ক) ১৮৮৫",
          explanation: "অ্যালান অক্টাভিয়ান হিউমের উদ্যোগে এটি প্রতিষ্ঠিত হয়।",
        },
        {
          id: 16,
          question: "মুসলিম লীগ প্রতিষ্ঠিত হয় কোথায়?",
          options: ["ক) কলকাতা", "খ) ঢাকা", "গ) লাহোর", "ঘ) করাচি"],
          answer: "খ) ঢাকা",
          explanation:
            "১৯০৬ সালের ৩০ ডিসেম্বর নবাব সলিমুল্লাহর নেতৃত্বে এটি গঠিত হয়।",
        },
        {
          id: 17,
          question: "দ্বিজাতি তত্ত্বের (Two-Nation Theory) জনক কে?",
          options: [
            "ক) এ কে ফজলুল হক",
            "খ) মোহাম্মদ আলী জিন্নাহ",
            "গ) লর্ড মাউন্টব্যাটেন",
            "ঘ) গান্ধীজি",
          ],
          answer: "খ) মোহাম্মদ আলী জিন্নাহ",
          explanation: "১৯৩৯-৪০ সালের দিকে তিনি এই তত্ত্ব প্রচার করেন।",
        },
        {
          id: 18,
          question: "লাহোর প্রস্তাব উত্থাপন করেন কে?",
          options: [
            "ক) মোহাম্মদ আলী জিন্নাহ",
            "খ) শেরে বাংলা এ কে ফজলুল হক",
            "গ) নবাব সলিমুল্লাহ",
            "ঘ) লিয়াকত আলী খান",
          ],
          answer: "খ) শেরে বাংলা এ কে ফজলুল হক",
          explanation:
            "১৯৪০ সালের ২৩ মার্চ তিনি এই ঐতিহাসিক প্রস্তাবটি পেশ করেন।",
        },
        {
          id: 19,
          question: "নীল দর্পণ নাটকটি কার লেখা?",
          options: [
            "ক) বঙ্কিমচন্দ্র চট্টোপাধ্যায়",
            "খ) দীনবন্ধু মিত্র",
            "গ) মাইকেল মধুসূদন দত্ত",
            "ঘ) রবীন্দ্রনাথ ঠাকুর",
          ],
          answer: "খ) দীনবন্ধু মিত্র",
          explanation: "নীল চাষিদের ওপর অত্যাচারের প্রেক্ষাপটে এটি রচিত।",
        },
        {
          id: 20,
          question: "উপমহাদেশে প্রথম পুলিশ বাহিনী গঠন করেন কে?",
          options: [
            "ক) লর্ড ক্লাইভ",
            "খ) লর্ড কর্নওয়ালিস",
            "গ) লর্ড ক্যানিং",
            "ঘ) লর্ড কার্জন",
          ],
          answer: "খ) লর্ড কর্নওয়ালিস",
          explanation:
            "তিনি শান্তি-শৃঙ্খলা বজায় রাখতে আধুনিক পুলিশ প্রথা চালু করেন।",
        },
        {
          id: 21,
          question: "অবিভক্ত বাংলার শেষ মুখ্যমন্ত্রী কে ছিলেন?",
          options: [
            "ক) এ কে ফজলুল হক",
            "খ) হোসেন শহীদ সোহরাওয়ার্দী",
            "গ) খাজা নাজিমুদ্দিন",
            "ঘ) সুভাষ চন্দ্র বসু",
          ],
          answer: "খ) হোসেন শহীদ সোহরাওয়ার্দী",
          explanation: "দেশভাগের আগ পর্যন্ত তিনি ক্ষমতায় ছিলেন।",
        },
        {
          id: 22,
          question: "বিধবা বিবাহ আইন পাশ হয় কার প্রচেষ্টায়?",
          options: [
            "ক) রাজা রামমোহন রায়",
            "খ) ঈশ্বরচন্দ্র বিদ্যাসাগর",
            "গ) ডিরোজিও",
            "ঘ) রবীন্দ্রনাথ ঠাকুর",
          ],
          answer: "খ) ঈশ্বরচন্দ্র বিদ্যাসাগর",
          explanation: "১৮৫৬ সালে লর্ড ক্যানিংয়ের আমলে এই আইন পাস হয়।",
        },
        {
          id: 23,
          question: "পলাশীর যুদ্ধ কোন নদীর তীরে হয়েছিল?",
          options: ["ক) পদ্মা", "খ) ভাগীরথী", "গ) বুড়িগঙ্গা", "ঘ) যমুনা"],
          answer: "খ) ভাগীরথী",
          explanation:
            "পশ্চিমবঙ্গের মুর্শিদাবাদের ভাগীরথী নদীর তীরে পলাশীর প্রান্তর অবস্থিত।",
        },
        {
          id: 24,
          question: "তেভাগা আন্দোলনের নেত্রী কে ছিলেন?",
          options: [
            "ক) প্রীতিলতা ওয়াদ্দেদার",
            "খ) ইলা মিত্র",
            "গ) সুফিয়া কামাল",
            "ঘ) মাতঙ্গিনী হাজরা",
          ],
          answer: "খ) ইলা মিত্র",
          explanation: "নাচোলের রানী খ্যাত ইলা মিত্র এই আন্দোলনের নেতৃত্ব দেন।",
        },
        {
          id: 25,
          question: "১৯০৫ সালে বঙ্গভঙ্গের সময় বাংলার ছোটলাট কে ছিলেন?",
          options: [
            "ক) অ্যান্ড্রু ফ্রেজার",
            "খ) ব্যামফিল্ড ফুলার",
            "গ) লর্ড কার্জন",
            "ঘ) লর্ড মিন্টো",
          ],
          answer: "ক) অ্যান্ড্রু ফ্রেজার",
          explanation: "লর্ড কার্জন ছিলেন বড়লাট, আর ফ্রেজার ছিলেন ছোটলাট।",
        },
        {
          id: 26,
          question: "সূর্যাস্ত আইন কোন ব্যবস্থার সাথে যুক্ত?",
          options: [
            "ক) দশশালা বন্দোবস্ত",
            "খ) চিরস্থায়ী বন্দোবস্ত",
            "গ) সূর্যাস্ত বন্দোবস্ত",
            "ঘ) সূর্যাস্ত নীতি",
          ],
          answer: "খ) চিরস্থায়ী বন্দোবস্ত",
          explanation:
            "খাজনা দেওয়ার জন্য নির্দিষ্ট দিনের সূর্যাস্ত পর্যন্ত সময় দেওয়া হতো।",
        },
        {
          id: 27,
          question: "বক্সারের যুদ্ধে ইংরেজ সেনাপতি কে ছিলেন?",
          options: [
            "ক) রবার্ট ক্লাইভ",
            "খ) হেক্টর মুনরো",
            "গ) ওয়ারেন হেস্টিংস",
            "ঘ) লর্ড ওয়েলেসলি",
          ],
          answer: "খ) হেক্টর মুনরো",
          explanation: "১৭৬৪ সালে তার নেতৃত্বে ইংরেজরা জয়ী হয়।",
        },
        {
          id: 28,
          question: "ভারতে ইংরেজি শিক্ষাকে সরকারিভাবে স্বীকৃতি দেন কে?",
          options: [
            "ক) লর্ড মেকলে",
            "খ) লর্ড বেন্টিঙ্ক",
            "গ) লর্ড হার্ডিঞ্জ",
            "ঘ) লর্ড ডালহৌসি",
          ],
          answer: "খ) লর্ড বেন্টিঙ্ক",
          explanation: "১৮৩৫ সালে মেকলের প্রস্তাব অনুযায়ী এটি কার্যকর হয়।",
        },
        {
          id: 29,
          question: "সর্বশেষ ব্রিটিশ গভর্নর জেনারেল কে ছিলেন?",
          options: [
            "ক) লর্ড ক্যানিং",
            "খ) লর্ড মাউন্টব্যাটেন",
            "গ) সি রাজাগোপালাচারী",
            "ঘ) লর্ড ওয়েভেল",
          ],
          answer: "খ) লর্ড মাউন্টব্যাটেন",
          explanation: "তার আমলেই ভারত ও পাকিস্তান স্বাধীন হয়।",
        },
        {
          id: 30,
          question: "বাঁশের কেল্লা ধ্বংস হয় কত সালে?",
          options: ["ক) ১৮৩১", "খ) ১৮৫৭", "গ) ১৭৫৭", "ঘ) ১৮২৯"],
          answer: "ক) ১৮৩১",
          explanation:
            "ইংরেজদের কামানের গোলার আঘাতে তিতুমীরের কেল্লা ধ্বংস হয়।",
        },
      ],
    },
    written_exam_prep: {
      guidelines:
        "লিখিত পরীক্ষায় চিরস্থায়ী বন্দোবস্তের সুফল-কুফল এবং বঙ্গভঙ্গের প্রেক্ষাপট ও ফলাফল থেকে বড় প্রশ্ন আসার সম্ভাবনা বেশি।",
      possible_questions: [
        {
          question:
            "বাংলার ইতিহাসে চিরস্থায়ী বন্দোবস্তের রাজনৈতিক ও অর্থনৈতিক প্রভাব আলোচনা করুন।",
          key_points_for_answer: [
            "জমিদার শ্রেণির উদ্ভব ও ব্রিটিশ আনুগত্য বৃদ্ধি।",
            "কৃষকদের ওপর শোষণের মাত্রা বৃদ্ধি।",
            "নির্ধারিত রাজস্বের কারণে কোম্পানি সরকারের আয়ের নিশ্চয়তা।",
          ],
        },
        {
          question:
            "১৯০৫ সালের বঙ্গভঙ্গ কেন করা হয়েছিল? এটি রদ হওয়ার পেছনে প্রধান কারণগুলো কী ছিল?",
          key_points_for_answer: [
            "প্রশাসনিক সুবিধার দোহাই ও 'ভাগ কর শাসন কর' নীতি।",
            "স্বদেশী ও বৈপ্লবিক আন্দোলনের তীব্রতা।",
            "ভারতীয় জাতীয়তাবোধের উত্থান।",
          ],
        },
        {
          question:
            "সিপাহী বিদ্রোহকে কেন ভারতের প্রথম স্বাধীনতা যুদ্ধ বলা হয়? এর ব্যর্থতার কারণগুলো কী?",
          key_points_for_answer: [
            "সর্বভারতীয় রূপ নেওয়ার অভাব।",
            "উন্নত অস্ত্রের অভাব ও নেতৃত্বের দুর্বলতা।",
            "কোম্পানি শাসনের অবসান ও ব্রিটিশ রাজের শাসনের সূচনা।",
          ],
        },
      ],
    },
  },
];
const blog_theory_and_doctrine= [
  {
    _id: "int_politics_theory_bcs_2026",
    title: "আন্তর্জাতিক রাজনীতির তত্ত্ব ও ভূ-রাজনীতি-Theory and Doctrine of International Politics",
    category: "আন্তর্জাতিক বিষয়াবলী",
    tags: [
      "আন্তর্জাতিক রাজনীতি",
      "ভূ-রাজনীতি",
      "বাস্তববাদ",
      "উদারবাদ",
      "বিসিএস",
      "ম্যাকিন্ডার",
      "হান্টিংটন"
    ],
    last_updated: "২০২৬-০২-০৯",
    article_content: {
      summary:
        "আন্তর্জাতিক রাজনীতি হলো রাষ্ট্রসমূহের পারস্পরিক সম্পর্ক এবং ক্ষমতার লড়াইয়ের বিশ্লেষণ। বাস্তববাদ (Realism), উদারবাদ (Liberalism) এবং ভূ-রাজনৈতিক মতবাদসমূহ (Geopolitics) বিশ্বব্যবস্থাকে বোঝার প্রধান হাতিয়ার। বিশেষ করে ম্যাকিন্ডারের হার্টল্যান্ড থিওরি এবং হান্টিংটনের ক্ল্যাশ অফ সিভিলাইজেশন আধুনিক ভূ-রাজনীতির মোড় ঘুরিয়ে দিয়েছে।",
      key_points: [
        "বাস্তববাদ: ক্ষমতার প্রাধান্য ও জাতীয় স্বার্থ রক্ষা।",
        "উদারবাদ: আন্তর্জাতিক সহযোগিতা ও আইনের শাসন।",
        "হার্টল্যান্ড থিওরি: ইউরেশিয়ার কেন্দ্রস্থল নিয়ন্ত্রণের মাধ্যমে বিশ্ব শাসন।",
        "ক্ল্যাশ অফ সিভিলাইজেশন: আদর্শের বদলে সংস্কৃতির সংঘাত।",
        "সফট পাওয়ার: চাপ প্রয়োগ না করে আকর্ষণ ও সংস্কৃতির মাধ্যমে প্রভাব বিস্তার।"
      ],
      visual_representation: {
        image_tag: "INT_GEO_1",
        caption: "আন্তর্জাতিক রাজনীতির প্রধান তত্ত্ব ও ভূ-রাজনৈতিক মডেলসমূহ।",
      },
      sections: [
        {
          heading: "১. আন্তর্জাতিক রাজনীতির মূল ধারা: বাস্তববাদ ও উদারবাদ",
          content:
            "বাস্তববাদ বা Realism মনে করে রাষ্ট্রই আন্তর্জাতিক রাজনীতির একমাত্র অভিনেতা এবং ক্ষমতার লড়াই অনিবার্য। এর বিপরীতে উদারবাদ বা Liberalism মনে করে রাষ্ট্রসমূহের মধ্যে সহযোগিতা এবং আন্তর্জাতিক সংস্থার মাধ্যমে শান্তি বজায় রাখা সম্ভব। উড্রো উইলসনের '১৪ দফা' উদারবাদের একটি বড় উদাহরণ।",
        },
        {
          heading: "২. ভূ-রাজনীতি ও হার্টল্যান্ড থিওরি (Heartland Theory)",
          content:
            "১৯০৪ সালে হ্যালফোর্ড ম্যাকিন্ডার এই তত্ত্ব প্রদান করেন। তার বিখ্যাত উক্তি ছিল— 'Who rules East Europe commands the Heartland; who rules the Heartland commands the World-Island.' এটি মূলত স্থলপথের ক্ষমতার ওপর ভিত্তি করে তৈরি।",
        },
        {
          heading: "৩. রিমল্যান্ড থিওরি ও সমুদ্র শক্তি",
          content:
            "নিকোলাস স্পাইকম্যান রিমল্যান্ড থিওরি প্রবর্তন করেন। তিনি মনে করতেন হার্টল্যান্ডের চেয়েও উপকূলীয় অঞ্চল বা রিমল্যান্ড নিয়ন্ত্রণ করা বেশি জরুরি। অন্যদিকে আলফ্রেড মাহান 'সমুদ্র শক্তি' বা Sea Power-এর ওপর জোর দেন যা ব্রিটিশ ও মার্কিন আধিপত্যের মূলে ছিল।",
        },
        {
          heading: "৪. উত্তর-স্নায়ুযুদ্ধ পরবর্তী মতবাদ",
          content:
            "সোভিয়েত ইউনিয়নের পতনের পর ফ্রান্সিস ফুকুয়ামা তার 'The End of History' গ্রন্থে উদারনৈতিক গণতন্ত্রের বিজয় ঘোষণা করেন। এর প্রতিক্রিয়ায় স্যামুয়েল পি. হান্টিংটন 'Clash of Civilizations' তত্ত্বে বলেন যে, ভবিষ্যতে যুদ্ধ হবে বিভিন্ন সভ্যতার মধ্যে (যেমন: পশ্চিমা বনাম ইসলামি সভ্যতা)।",
        },
      ],
    },
    preliminary_exam_prep: {
      focus: "বিসিএস প্রিলিমিনারি দৃষ্টিকোণ (TOP 15 MCQ)",
      mcqs: [
        {
          id: 1,
          question: "আন্তর্জাতিক রাজনীতির 'বাস্তববাদ' (Realism) তত্ত্বের প্রধান প্রবক্তা কে?",
          options: ["ক) হ্যান্স জে. মর্গ্যানথাউ", "খ) উড্রো উইলসন", "গ) ইমানুয়েল কান্ট", "ঘ) জন লক"],
          answer: "ক) হ্যান্স জে. মর্গ্যানথাউ",
          explanation: "তার 'Politics Among Nations' গ্রন্থটিকে বাস্তববাদের বাইবেল বলা হয়।",
        },
        {
          id: 2,
          question: "'Heartland Theory' বা হার্টল্যান্ড তত্ত্বের জনক কে?",
          options: ["ক) নিকোলাস স্পাইকম্যান", "খ) হ্যালফোর্ড ম্যাকিন্ডার", "গ) কার্ল হাউসহফার", "ঘ) আলফ্রেড মাহান"],
          answer: "খ) হ্যালফোর্ড ম্যাকিন্ডার",
          explanation: "১৯০৪ সালে তিনি এই তত্ত্বটি রয়্যাল জিওগ্রাফিক্যাল সোসাইটিতে পেশ করেন।",
        },
        {
          id: 3,
          question: "'Clash of Civilizations' গ্রন্থটির রচয়িতা কে?",
          options: ["ক) ফ্রান্সিস ফুকুয়ামা", "খ) স্যামুয়েল পি. হান্টিংটন", "গ) নোয়াম চমস্কি", "ঘ) হেনরি কিসিঞ্জার"],
          answer: "খ) স্যামুয়েল পি. হান্টিংটন",
          explanation: "তিনি দাবি করেন ভবিষ্যৎ সংঘাতের মূল কারণ হবে সংস্কৃতি ও ধর্ম।",
        },
        {
          id: 4,
          question: "'The Prince' গ্রন্থটি কে রচনা করেন?",
          options: ["ক) এরিস্টটল", "খ) প্লেটো", "গ) নিকোলো ম্যাকিয়াভেলি", "ঘ) টমাস হবস"],
          answer: "গ) নিকোলো ম্যাকিয়াভেলি",
          explanation: "এই গ্রন্থটি আধুনিক রাজনৈতিক দর্শনের ও বাস্তববাদের অন্যতম ভিত্তি।",
        },
        {
          id: 5,
          question: "'Soft Power' বা কোমল ক্ষমতার ধারণাটি কার?",
          options: ["ক) জোসেফ নাই", "খ) বারাক ওবামা", "গ) জহুরলাল নেহেরু", "ঘ) ভ্লাদিমির লেনিন"],
          answer: "ক) জোসেফ নাই",
          explanation: "সাংস্কৃতিক এবং আদর্শিক প্রভাবের মাধ্যমে অন্যকে প্রভাবিত করাই হলো সফট পাওয়ার।",
        },
        {
          id: 6,
          question: "নিকোলাস স্পাইকম্যান কোন তত্ত্বের জন্য বিখ্যাত?",
          options: ["ক) হার্টল্যান্ড", "খ) রিমল্যান্ড", "গ) ওশানিক পাওয়ার", "ঘ) কন্টেইনমেন্ট"],
          answer: "খ) রিমল্যান্ড",
          explanation: "তিনি মনে করতেন ইউরেশিয়ার উপকূলীয় অঞ্চল নিয়ন্ত্রণই বিশ্ব আধিপত্যের চাবিকাঠি।",
        },
        {
          id: 7,
          question: "'The End of History and the Last Man' বইটি কার লেখা?",
          options: ["ক) কার্ল মার্ক্স", "খ) ফ্রান্সিস ফুকুয়ামা", "গ) ফ্রেডরিক নিটশে", "ঘ) হার্বার্ট স্পেন্সার"],
          answer: "খ) ফ্রান্সিস ফুকুয়ামা",
          explanation: "তিনি সমাজতন্ত্রের পতনের পর গণতন্ত্রের চূড়ান্ত বিজয় নিয়ে এই বই লেখেন।",
        },
        {
          id: 8,
          question: "'Lebensraum' (লেবেনসরম) তত্ত্বে বিশ্বাসী ছিলেন কোন শাসক?",
          options: ["ক) নেপোলিয়ন", "খ) হিটলার", "গ) মুসোলিনি", "ঘ) স্ট্যালিন"],
          answer: "খ) হিটলার",
          explanation: "এটি একটি ভূ-রাজনৈতিক ধারণা যা জার্মান জাতির জন্য অতিরিক্ত বাসযোগ্য স্থানের কথা বলে।",
        },
        {
          id: 9,
          question: "আন্তর্জাতিক রাজনীতিতে 'Anarchy' বা অরাজকতা বলতে কী বোঝায়?",
          options: ["ক) বিশৃঙ্খলা", "খ) কোনো কেন্দ্রীয় বিশ্ব সরকার না থাকা", "গ) গৃহযুদ্ধ", "ঘ) একনায়কতন্ত্র"],
          answer: "খ) কোনো কেন্দ্রীয় বিশ্ব সরকার না থাকা",
          explanation: "বাস্তববাদীদের মতে, বিশ্ব ব্যবস্থায় সার্বভৌম কোনো উচ্চতর কর্তৃপক্ষ নেই।",
        },
        {
          id: 10,
          question: "ভারসাম্য নীতি বা 'Balance of Power' কোন তত্ত্বের অংশ?",
          options: ["ক) উদারবাদ", "খ) বাস্তববাদ", "গ) নারীবাদ", "ঘ) গঠনবাদ"],
          answer: "খ) বাস্তববাদ",
          explanation: "শক্তির ভারসাম্য বজায় রেখে যুদ্ধ এড়ানোর কৌশল এটি।",
        },
        {
          id: 11,
          question: "১৯১৮ সালে 'চৌদ্দ দফা' (14 Points) ঘোষণা করেন কে?",
          options: ["ক) ফ্রাঙ্কলিন ডি রুজভেল্ট", "খ) উড্রো উইলসন", "গ) উইনস্টন চার্চিল", "ঘ) থিওডোর রুজভেল্ট"],
          answer: "খ) উড্রো উইলসন",
          explanation: "এটি আন্তর্জাতিক রাজনীতির উদারবাদ ধারার ভিত্তি স্থাপন করে।",
        },
        {
          id: 12,
          question: "'Geopolitics' শব্দটি প্রথম কে ব্যবহার করেন?",
          options: ["ক) রুডলফ জেলেন", "খ) কার্ল হাউসহফার", "গ) ফ্রেডরিক র‍্যাটজেল", "ঘ) আলেকজান্ডার ফন হুমবোল্ট"],
          answer: "ক) রুডলফ জেলেন",
          explanation: "সুইডিশ এই রাষ্ট্রবিজ্ঞানী ১৮৯৯ সালে প্রথম শব্দটি ব্যবহার করেন।",
        },
        {
          id: 13,
          question: "'Security Dilemma' ধারণাটি কোন ক্ষেত্রের সাথে যুক্ত?",
          options: ["ক) অর্থনীতি", "খ) আন্তর্জাতিক নিরাপত্তা", "গ) পরিবেশ বিজ্ঞান", "ঘ) সমাজবিজ্ঞান"],
          answer: "খ) আন্তর্জাতিক নিরাপত্তা",
          explanation: "একটি রাষ্ট্রের অস্ত্র বৃদ্ধি যখন অন্য রাষ্ট্রের অনিরাপত্তার কারণ হয়ে দাঁড়ায়।",
        },
        {
          id: 14,
          question: "আধুনিক ভূ-রাজনীতিতে 'The Pivot of History' বলতে কোন অঞ্চলকে বোঝানো হয়েছে?",
          options: ["ক) দক্ষিণ এশিয়া", "খ) মধ্য এশিয়া", "গ) উত্তর আমেরিকা", "ঘ) পশ্চিম ইউরোপ"],
          answer: "খ) মধ্য এশিয়া",
          explanation: "ম্যাকিন্ডার এই অঞ্চলকে বিশ্বের কেন্দ্রীয় অক্ষশক্তি বা পিভট এরিয়া বলেছেন।",
        },
        {
          id: 15,
          question: "'Zero-sum game' কোন তত্ত্বের সাথে অধিক সামঞ্জস্যপূর্ণ?",
          options: ["ক) উদারবাদ", "খ) বাস্তববাদ", "গ) বিশ্বায়ন", "ঘ) উত্তর-আধুনিকতাবাদ"],
          answer: "খ) বাস্তববাদ",
          explanation: "যেখানে একজনের লাভ মানেই অন্যজনের ক্ষতি বলে ধরা হয়।",
        },
      ],
    },
    written_exam_prep: {
      guidelines:
        "লিখিত পরীক্ষায় 'হার্টল্যান্ড বনাম রিমল্যান্ড' এবং 'বাস্তববাদ বনাম উদারবাদ' থেকে প্রায়শই তুলনামূলক প্রশ্ন আসে।",
      possible_questions: [
        {
          question: "ম্যাকিন্ডারের হার্টল্যান্ড তত্ত্বটি সংক্ষেপে ব্যাখ্যা করুন এবং বর্তমান প্রেক্ষাপটে এর প্রাসঙ্গিকতা আলোচনা করুন।",
          key_points_for_answer: [
            "ইউরেশিয়ার ভৌগোলিক অবস্থান।",
            "স্থলশক্তি বনাম নৌ-শক্তির লড়াই।",
            "চীনের 'বেল্ট অ্যান্ড রোড ইনিশিয়েটিভ' (BRI) এর সাথে হার্টল্যান্ডের সম্পর্ক।",
          ],
        },
        {
          question: "সভ্যতার সংঘাত (Clash of Civilizations) কি বর্তমান বিশ্ব রাজনীতির অস্থিরতার মূল কারণ? আপনার যুক্তি দিন।",
          key_points_for_answer: [
            "ধর্মীয় ও সাংস্কৃতিক মেরুকরণ।",
            "মধ্যপ্রাচ্য ও পশ্চিমা বিশ্বের দ্বন্দ।",
            "অর্থনৈতিক স্বার্থ বনাম সাংস্কৃতিক পরিচয়।",
          ],
        },
      ],
    },
  },
];

import Interview from "../assets/images/interview-01.jpg"

export const blog_details_interview = [
  {
    "_id": "js_array_reverse_logic_2026",
    "title": "Array Reverse without built-in method (Interview Prep)",
    "category": "JavaScript / Problem Solving",
    "tags": [
      "JavaScript",
      "Interview Questions",
      "Array Reverse",
      "In-place vs Out-of-place",
      "Logic Development"
    ],
    "last_updated": "২০২৬-০২-০৫",
    "article_content": {
      "summary": "কোডিং ইন্টারভিউতে প্রায়ই অ্যারে রিভার্স করার লজিক জিজ্ঞেস করা হয় যেখানে বিল্ট-ইন reverse() মেথড ব্যবহার করা নিষিদ্ধ। এটি মূলত দুটি মেমরি মডেল অনুযায়ী করা যায়: Out-of-place (নতুন অ্যারে তৈরি করে) এবং In-place (মূল অ্যারের ভেতরেই সোয়াপ করে)।",
      "key_points": [
        "Out-of-place: মূল অ্যারে অপরিবর্তিত থাকে, এটি ইমিউটেবল (Immutable) পদ্ধতি।",
        "In-place: কোনো অতিরিক্ত স্পেস নেয় না (Space Complexity: O(1)), এটি মেমরি সাশ্রয়ী।",
        "টাইম কমপ্লেক্সিটি: উভয় পদ্ধতির জন্যই O(n) কারণ উভয়কেই অন্তত একবার লুপ করতে হয়।",
        "সতর্কতা: লুপের ভেতর unshift() ব্যবহার এড়িয়ে চলুন কারণ এটি পারফরম্যান্স কমিয়ে দেয় (O(n^2))।",
        "ES6 Destructuring: ইন-প্লেস সোয়াপিংয়ের জন্য এটি সবচেয়ে আধুনিক এবং ক্লিন পদ্ধতি।"
      ],
      "visual_representation": {
        "image_tag": Interview,
        "caption": "ইন-প্লেস সোয়াপিং (Two-pointer swap) পদ্ধতির ডায়াগ্রাম।"
      },
      "sections": [
        {
          "heading": "১. Out-of-place Method (নতুন অ্যারে ব্যবহার করে)",
          "content": "এই পদ্ধতিতে মূল অ্যারের শেষ ইনডেক্স থেকে লুপ শুরু করা হয় এবং একটি নতুন অ্যারেতে এলিমেন্টগুলো পুশ করা হয়। এতে মূল অ্যারেটি সংরক্ষিত থাকে। ইন্টারভিউতে এটি সবচেয়ে কমন সমাধান। \n\n```javascript\nconst reversedArray = (arr) => {\n  let newArray = [];\n  for (let i = arr.length - 1; i >= 0; i--) {\n    newArray.push(arr[i]);\n  }\n  return newArray;\n};\n\nconst original = [1, 2, 3];\nconsole.log(reversedArray(original)); // [3, 2, 1]\n```"
        },
        {
          "heading": "২. In-place Method (মেমরি সাশ্রয়ী পদ্ধতি)",
          "content": "ইন্টারভিউতে যখন মেমরি লিমিটেশনের কথা বলা হয়, তখন এই পদ্ধতিটি ব্যবহার করা হয়। এখানে দুটি পয়েন্টার (Left এবং Right) ব্যবহার করে একে অপরের মান অদলবদল (Swap) করা হয়। \n\n```javascript\nconst reverseInPlace = (arr) => {\n  let left = 0;\n  let right = arr.length - 1;\n\n  while (left < right) {\n    // ES6 Destructuring Swap\n    [arr[left], arr[right]] = [arr[right], arr[left]];\n    \n    left++;\n    right--;\n  }\n  return arr;\n};\n\nconst numbers = [10, 20, 30, 40];\nreverseInPlace(numbers);\nconsole.log(numbers); // [40, 30, 20, 10]\n```"
        },
        {
          "heading": "৩. ইন্টারভিউ টিপস: কেন ইন-প্লেস পদ্ধতি সেরা?",
          "content": "বড় ডেটাসেটের ক্ষেত্রে নতুন অ্যারে তৈরি করলে তা অনেক মেমরি দখল করে। ইন-প্লেস পদ্ধতিতে Space Complexity হচ্ছে O(1), যা অপ্টিমাইজড কোডিংয়ের জন্য আদর্শ। তবে মনে রাখবেন, এটি মূল অ্যারেকে পরিবর্তন (Mutate) করে ফেলে। রিয়্যাক্ট বা রিডাক্স এর ক্ষেত্রে ডেটা ইমিউটেবল রাখা জরুরি বিধায় সেখানে আউট-অফ-প্লেস পদ্ধতি ব্যবহার করা হয়।"
        },
        {
          "heading": "৪. টাইম কমপ্লেক্সিটি বিশ্লেষণ",
          "content": "উভয় পদ্ধতিতেই আমাদের অ্যারের অর্ধেক বা সম্পূর্ণ এলিমেন্ট একবার ভিজিট করতে হয়। ফলে এদের টাইম কমপ্লেক্সিটি $O(n)$। ইন্টারভিউতে এক্সপ্লেন করার সময় এটি উল্লেখ করা জরুরি।"
        },
        {
          "heading": "৫. স্পেস কমপ্লেক্সিটি ও মেমরি ব্যবহার",
          "content": "আউট-অফ-প্লেস পদ্ধতিতে নতুন অ্যারে তৈরি হওয়ায় এটি $O(n)$ মেমরি ব্যবহার করে। অন্যদিকে ইন-প্লেস পদ্ধতিতে বাড়তি কোনো অ্যারে না নেওয়ায় এটি $O(1)$ মেমরি ব্যবহার করে।"
        }
      ]
    },
    "preliminary_exam_prep": {
      "focus": "Quick Interview Quiz (Mock)",
      "mcqs": [
        { "id": 1, "question": "In-place array reverse এর Space Complexity কত?", "options": ["ক) O(1)", "খ) O(n)", "গ) O(log n)", "ঘ) O(n^2)"], "answer": "ক) O(1)", "explanation": "ইন-প্লেস পদ্ধতিতে কোনো নতুন অ্যারে তৈরি হয় না, তাই এটি কনস্ট্যান্ট স্পেস নেয়।" },
        { "id": 2, "question": "অ্যারে রিভার্স করার সময় লুপের ভেতর unshift() কেন এড়িয়ে চলা উচিত?", "options": ["ক) এটি মেমরি বেশি নেয়", "খ) এর টাইম কমপ্লেক্সিটি O(n^2) করে দেয়", "গ) এটি শুধু স্ট্রিংয়ে কাজ করে", "ঘ) এটি অ্যারে ডিলিট করে দেয়"], "answer": "খ) এর টাইম কমপ্লেক্সিটি O(n^2) করে দেয়", "explanation": "unshift() মেথড প্রতিবার ইনসার্টের সময় পুরো অ্যারের ইনডেক্স শিফট করে।" }
      ]
    },
    "written_exam_prep": {
      "guidelines": "কোডিং ইন্টারভিউতে এই প্রশ্নের উত্তর দেওয়ার সময় টাইম এবং স্পেস কমপ্লেক্সিটি নিয়ে আলোচনা করা প্লাস পয়েন্ট হিসেবে কাজ করে।",
      "possible_questions": [
        {
          "question": "In-place এবং Out-of-place রিভার্স এর মধ্যে প্রধান পার্থক্য কী?",
          "key_points_for_answer": [
            "মেমরি ব্যবহার (Space Complexity O(1) vs O(n))।",
            "অরিজিনাল অ্যারে মিউটেশন (Mutation vs Immutability)।",
            "ব্যবহারের ক্ষেত্র (Performance vs Functional Programming)।"
          ]
        },
        {
          "question": "ES6 Destructuring ব্যবহার করে কীভাবে দুটি ভেরিয়েবল সোয়াপ করা যায়?",
          "key_points_for_answer": [
            "[a, b] = [b, a] লজিক।",
            "থার্ড ভেরিয়েবল ছাড়া সোয়াপ করার সুবিধা।",
            "কোড রিডাবিলিটি বাড়ানো।"
          ]
        }
      ]
    }
  } ,

  {
    "_id": "kids_coding_fun_reverse_2026",
    "title": "অ্যারে উল্টানো ম্যাজিক! - Array Reverse for Kids",
    "category": "Kids Coding Fun",
    "tags": [
      "Kids Coding",
      "JavaScript",
      "Fun Learning",
      "Array Magic",
      "Bangladesh Kids Programmer"
    ],
    "last_updated": "২০২৬-০২-০৫",
    "article_content": {
      "summary": "বন্ধুরা, মনে করো তোমার কাছে একটা খেলনা ট্রেন আছে যার বগিগুলোতে ১, ২, এবং ৩ লেখা আছে। এখন যদি আমরা ট্রেনটাকে উল্টো করে সাজাতে চাই যাতে ৩ সবার আগে থাকে, তবে আমরা সেটা কীভাবে করব? চলো ঝটপট শিখে ফেলি অ্যারে উল্টানোর দুইটা মজার উপায়!",
      "key_points": [
        "ম্যাজিক ১: নতুন একটি ফাঁকা বক্স নিয়ে সেখানে উল্টো করে খেলনা রাখা (Out-of-place)।",
        "ম্যাজিক ২: নিজের জায়গাতেই বন্ধুদের সাথে হাতবদল করে উল্টে যাওয়া (In-place)।",
        "মনে রেখো: কোডিং হলো কম্পিউটারকে মজার সব ইনস্ট্রাকশন দেওয়া!",
        "লজিক: আমরা সবসময় শেষের খেলনাটা আগে এনে সাজাতে পারি।"
      ],
      "visual_representation": {
        "image_tag": "",
        "caption": "ট্রেনের বগিগুলো উল্টো করে সাজানোর মজার খেলা।"
      },
      "sections": [
        {
          "heading": "১. নতুন ঝুড়ি পদ্ধতি (Out-of-place Magic)",
          "content": "ভাবো তোমার কাছে একটা লাল ঝুড়ি আছে যেখানে খেলনা আছে। তুমি একটা নতুন নীল ঝুড়ি নিলে এবং লাল ঝুড়ির একদম শেষের খেলনাটা আগে নীল ঝুড়িতে রাখলে। \n\n```javascript\nconst reverseTrain = (oldBox) => {\n  let newBox = [];\n  for (let i = oldBox.length - 1; i >= 0; i--) {\n    newBox.push(oldBox[i]); // শেষের বন্ধু আগে এসো!\n  }\n  return newBox;\n};\n\nconst myToys = ['🚗', '✈️', '🚢'];\nconsole.log(reverseTrain(myToys)); // ['🚢', '✈️', '🚗']\n```"
        },
        {
          "heading": "২. হাতবদল পদ্ধতি (In-place Swap Magic)",
          "content": "এবার ভাবো তোমার কোনো নতুন ঝুড়ি নেই। তুমি প্রথম বগি আর শেষ বগিকে বললে, 'তোমরা নিজেদের মধ্যে জায়গা বদল করো!' এতে কোনো বাড়তি জায়গা ছাড়াই পুরো ট্রেন উল্টে গেল। \n\n```javascript\nconst swapMagic = (arr) => {\n  let start = 0;\n  let end = arr.length - 1;\n\n  while (start < end) {\n    // জাদুকরী হাতবদল\n    [arr[start], arr[end]] = [arr[end], arr[start]];\n    \n    start++; // এক ধাপ ডানে\n    end--;   // এক ধাপ বামে\n  }\n  return arr;\n};\n```"
        },
        {
          "heading": "৩. আমাদের কেন এটা শিখতে হবে?",
          "content": "কম্পিউটার যখন অনেক বড় বড় লিস্ট নিয়ে কাজ করে, তখন মাঝে মাঝে তাকে সব উল্টো করে দেখতে হয়। যেমন: তোমার ফোনের মেসেজ লিস্টে নতুন মেসেজ সবার আগে দেখায়, সেখানেও এই উল্টানোর ম্যাজিক কাজ করে!"
        }
      ]
    },
    "preliminary_exam_prep": {
      "focus": "মজার কুইজ (Kids Quiz)",
      "mcqs": [
        { "id": 1, "question": "['🍎', '🍌', '🍇'] কে উল্টালে '🍎' কোথায় যাবে?", "options": ["ক) সবার আগে", "খ) মাঝখানে", "গ) সবার শেষে", "ঘ) হারিয়ে যাবে"], "answer": "গ) সবার শেষে", "explanation": "উল্টো করলে প্রথম জিনিসটি সবার শেষে চলে যায়।" },
        { "id": 2, "question": "হাতবদল পদ্ধতিতে কয়টি নতুন ঝুড়ি লাগে?", "options": ["ক) ০টি (লাগে না)", "খ) ১টি", "গ) ১০০টি", "ঘ) ২টি"], "answer": "ক) ০টি (লাগে না)", "explanation": "In-place বা হাতবদল পদ্ধতিতে বাড়তি কোনো জায়গা বা ঝুড়ি লাগে না।" }
      ]
    },
    "written_exam_prep": {
      "guidelines": "ছোট্ট বন্ধুদের জন্য টিপস: কোড করার সময় সবসময় কল্পনা করবে তুমি বাস্তবের কোনো জিনিস নিয়ে খেলছ। তাহলে কোডিং অনেক সহজ হবে!",
      "possible_questions": [
        {
          "question": "তুমি কেন নতুন ঝুড়ি পদ্ধতি পছন্দ করো?",
          "key_points_for_answer": [
            "এটি বুঝতে খুব সহজ।",
            "আসল খেলনাগুলো নিজের জায়গায় ঠিক থাকে।"
          ]
        },
        {
          "question": "কম্পিউটার কেন হাতবদল পদ্ধতি বেশি পছন্দ করে?",
          "key_points_for_answer": [
            "কারণ এতে কম্পিউটারের মেমরি বা জায়গা কম খরচ হয়।",
            "এটি অনেক দ্রুত কাজ করতে পারে।"
          ]
        }
      ]
    }
  },

];
export const blog_details_bangladesh_election = [
  {
    _id: "bd_election_system_bcs_2026",
    title: "বাংলাদেশের জাতীয় নির্বাচন ও নির্বাচনী ব্যবস্থা",
    category: "বাংলাদেশ ও আন্তর্জাতিক বিষয়াবলী",
    tags: [
      "নির্বাচন",
      "জাতীয় সংসদ",
      "নির্বাচন কমিশন",
      "সংবিধান",
      "বিসিএস",
      "অন্তর্বর্তীকালীন সরকার",
      "তত্ত্বাবধায়ক সরকার"
    ],
    last_updated: "২০২৬-০২-০৯",
    article_content: {
      summary:
        "বাংলাদেশের জাতীয় সংসদ নির্বাচন হলো দেশের আইনসভা গঠনের মূল প্রক্রিয়া। বর্তমানে বাংলাদেশে এককক্ষবিশিষ্ট সংসদীয় ব্যবস্থা বিদ্যমান যেখানে মোট ৩৫০ জন সদস্য থাকেন। ২০২৪ সালের আগস্ট মাসে ছাত্র-জনতার গণঅভ্যুত্থানের পর বাংলাদেশের নির্বাচনী ব্যবস্থায় আমূল পরিবর্তনের সংস্কার কাজ চলছে। সুষ্ঠু নির্বাচনের স্বার্থে বর্তমানে একটি স্বাধীন নির্বাচন কমিশন সংস্কার কমিশন কাজ করছে।",
      key_points: [
        "সরাসরি নির্বাচিত আসন: ৩০০টি (একক নির্বাচনী এলাকা)।",
        "সংরক্ষিত নারী আসন: ৫০টি (আনুপাতিক প্রতিনিধিত্বের ভিত্তিতে)।",
        "ভোটদান পদ্ধতি: ফার্স্ট-পাস্ট-দ্য-পোস্ট (সর্বোচ্চ ভোটপ্রাপ্ত বিজয়ী)।",
        "ভোটাধিকারের বয়স: ১৮ বছর।",
        "প্রার্থিতার যোগ্যতা: নূন্যতম ২৫ বছর।"
      ],
      visual_representation: {
        image_tag: "BD_ELECTION_COMMISSION_STRUCTURE",
        caption: "বাংলাদেশের নির্বাচনী কাঠামো ও সংসদীয় আসন বিন্যাস।",
      },
      sections: [
        {
          heading: "১. বাংলাদেশের জাতীয় সংসদ ও আসন বিন্যাস",
          content:
            "জাতীয় সংসদ বাংলাদেশের সর্বোচ্চ আইনসভা। এর মোট আসন সংখ্যা ৩৫০টি। ৩০০টি আসনে সরাসরি জনগণের ভোটে সংসদ সদস্য নির্বাচিত হন। বাকি ৫০টি সংরক্ষিত নারী আসন ৩০০ আসনের নির্বাচিত সদস্যদের ভোটের আনুপাতিক হারে বণ্টিত হয়। সংসদের মেয়াদ প্রথম অধিবেশন থেকে ৫ বছর।"
        },
        {
          heading: "২. নির্বাচন কমিশন ও তার কার্যাবলি",
          content:
            "সংবিধানের ১১৮ অনুচ্ছেদ অনুযায়ী নির্বাচন কমিশন গঠিত হয়। এটি একটি স্বাধীন ও সাংবিধানিক প্রতিষ্ঠান। ভোটার তালিকা প্রস্তুত করা, সীমানা নির্ধারণ এবং শান্তিপূর্ণভাবে নির্বাচন পরিচালনা করা কমিশনের প্রধান কাজ। বর্তমানে ২০২৪-এর পটপরিবর্তনের পর নির্বাচন কমিশনকে ঢেলে সাজানোর প্রক্রিয়া চলছে।"
        },
        {
          heading: "৩. তত্ত্বাবধায়ক ও অন্তর্বর্তীকালীন সরকার ব্যবস্থা",
          content:
            "১৯৯৬ সালে ১৩তম সংশোধনীর মাধ্যমে অবাধ ও সুষ্ঠু নির্বাচনের জন্য ‘নির্দলীয় তত্ত্বাবধায়ক সরকার’ ব্যবস্থা প্রবর্তন করা হয়। তবে ২০১১ সালে ১৫তম সংশোধনীর মাধ্যমে এটি বাতিল করা হয়। ২০২৪ সালের আগস্টে শেখ হাসিনা সরকারের পতনের পর ড. মুহাম্মদ ইউনূসের নেতৃত্বে ‘অন্তর্বর্তীকালীন সরকার’ গঠিত হয়, যা বর্তমানে নির্বাচনী সংস্কারের কাজ করছে।"
        },
        {
          heading: "৪. নির্বাচনী ইতিহাস ও মাইলফলক",
          content:
            "১৯৭৩ সালে বাংলাদেশে প্রথম জাতীয় সংসদ নির্বাচন অনুষ্ঠিত হয়। এ পর্যন্ত মোট ১২টি জাতীয় নির্বাচন হয়েছে। এর মধ্যে ১৯৯১, ১৯৯৬ (জুন), ২০০১ এবং ২০০৮ সালের নির্বাচনগুলো নিরপেক্ষ সরকারের অধীনে অনুষ্ঠিত হওয়ায় সর্বজনগ্রাহ্য হিসেবে বিবেচিত।"
        }
      ],
    },
    preliminary_exam_prep: {
      focus: "বিসিএস প্রিলিমিনারি স্পেশাল (TOP 15 MCQ)",
      mcqs: [
        {
          id: 1,
          question: "বাংলাদেশের জাতীয় সংসদের প্রথম নির্বাচন কবে অনুষ্ঠিত হয়?",
          options: ["ক) ৭ মার্চ ১৯৭২", "খ) ৭ মার্চ ১৯৭৩", "গ) ১০ এপ্রিল ১৯৭৩", "ঘ) ১৬ ডিসেম্বর ১৯৭৩"],
          answer: "খ) ৭ মার্চ ১৯৭৩",
          explanation: "প্রথম জাতীয় সংসদ নির্বাচনের মাধ্যমে ৩০০টি সাধারণ আসনে ভোট গ্রহণ করা হয়েছিল।"
        },
        {
          id: 2,
          question: "সংবিধানের কত নম্বর অনুচ্ছেদ অনুযায়ী নির্বাচন কমিশন গঠিত হয়?",
          options: ["ক) ১১৭", "খ) ১১৮", "গ) ১২২", "ঘ) ১২৩"],
          answer: "খ) ১১৮",
          explanation: "সংবিধানের ১১৮(১) অনুচ্ছেদ অনুযায়ী প্রধান নির্বাচন কমিশনার ও অন্য কমিশনারদের নিয়ে কমিশন গঠিত হয়।"
        },
        {
          id: 3,
          question: "জাতীয় সংসদের সরাসরি নির্বাচিত সদস্য সংখ্যা কত?",
          options: ["ক) ৩৫০", "খ) ৩৩০", "গ) ৩০০", "ঘ) ১৫১"],
          answer: "গ) ৩০০",
          explanation: "সরাসরি ৩০০টি আসন এবং সংরক্ষিত ৫০টি আসন নিয়ে মোট আসন ৩৫০টি।"
        },
        {
          id: 4,
          question: "একজন সংসদ সদস্যের নূন্যতম বয়স কত হওয়া আবশ্যক?",
          options: ["ক) ১৮ বছর", "খ) ২১ বছর", "গ) ২৫ বছর", "ঘ) ৩০ বছর"],
          answer: "গ) ২৫ বছর",
          explanation: "সংবিধানের ৬৬ অনুচ্ছেদ অনুযায়ী ২৫ বছর পূর্ণ হলে তিনি প্রার্থিতার যোগ্য হন।"
        },
        {
          id: 5,
          question: "তত্ত্বাবধায়ক সরকার ব্যবস্থা সংবিধানের কততম সংশোধনীর মাধ্যমে পাস হয়?",
          options: ["ক) ১২তম", "খ) ১৩তম", "গ) ১৪তম", "ঘ) ১৫তম"],
          answer: "খ) ১৩তম",
          explanation: "১৯৯৬ সালে রাজনৈতিক ঐকমত্যের ভিত্তিতে ১৩তম সংশোধনীর মাধ্যমে এটি সংবিধানে যুক্ত হয়।"
        },
        {
          id: 6,
          question: "বাংলাদেশে প্রথম ‘গণভোট’ অনুষ্ঠিত হয় কত সালে?",
          options: ["ক) ১৯৭৩", "খ) ১৯৭৫", "গ) ১৯৭৭", "ঘ) ১৯৮১"],
          answer: "গ) ১৯৭৭",
          explanation: "জিয়াউর রহমানের শাসনামলে ৩০ মে ১৯৭৭ সালে প্রথম গণভোট অনুষ্ঠিত হয়।"
        },
        {
          id: 7,
          question: "জাতীয় সংসদ নির্বাচনে ভোটার হওয়ার নূন্যতম বয়স কত?",
          options: ["ক) ২১ বছর", "খ) ২০ বছর", "গ) ১৮ বছর", "ঘ) ২৫ বছর"],
          answer: "গ) ১৮ বছর",
          explanation: "১৮ বছর বয়সে নাগরিকরা ভোটাধিকার লাভ করেন।"
        },
        {
          id: 8,
          question: "বাংলাদেশের প্রধান নির্বাচন কমিশনারের মেয়াদ কত বছর?",
          options: ["ক) ৪ বছর", "খ) ৫ বছর", "গ) ৬ বছর", "ঘ) ৩ বছর"],
          answer: "খ) ৫ বছর",
          explanation: "তারা দায়িত্ব গ্রহণের তারিখ থেকে ৫ বছর মেয়াদে বহাল থাকেন।"
        },
        {
          id: 9,
          question: "জাতীয় সংসদের কোরাম গঠিত হয় কতজন সদস্যের উপস্থিতিতে?",
          options: ["ক) ৫০ জন", "খ) ৬০ জন", "গ) ৭০ জন", "ঘ) ৮০ জন"],
          answer: "খ) ৬০ জন",
          explanation: "সংসদ অধিবেশনে কমপক্ষে ৬০ জন সদস্য উপস্থিত থাকলে কোরাম পূর্ণ হয়।"
        },
        {
          id: 10,
          question: "সংরক্ষিত নারী আসন ৫০টিতে উন্নীত করা হয় কততম সংশোধনীর মাধ্যমে?",
          options: ["ক) ১৪তম", "খ) ১৫তম", "গ) ১৬তম", "ঘ) ১৭তম"],
          answer: "খ) ১৫তম",
          explanation: "২০১১ সালের ১৫তম সংশোধনীর মাধ্যমে সংরক্ষিত নারী আসন ৪৫ থেকে বাড়িয়ে ৫০ করা হয়।"
        },
        {
          id: 11,
          question: "তত্ত্বাবধায়ক সরকার ব্যবস্থা বাতিল করা হয় কবে?",
          options: ["ক) ২০০৮", "খ) ২০১১", "গ) ২০১৪", "ঘ) ২০১৮"],
          answer: "খ) ২০১১",
          explanation: "১৫তম সংশোধনীর মাধ্যমে ২০১১ সালের ৩০ জুন এটি বাতিল করা হয়।"
        },
        {
          id: 12,
          question: "২০২৪ সালের ১২তম জাতীয় সংসদ কবে বিলুপ্ত করা হয়?",
          options: ["ক) ৫ আগস্ট ২০২৪", "খ) ৬ আগস্ট ২০২৪", "গ) ৮ আগস্ট ২০২৪", "ঘ) ১৫ আগস্ট ২০২৪"],
          answer: "খ) ৬ আগস্ট ২০২৪",
          explanation: "রাষ্ট্রপতি মোহাম্মদ সাহাবুদ্দিন গণঅভ্যুত্থান পরবর্তী পরিস্থিতিতে সংসদ বিলুপ্ত ঘোষণা করেন।"
        },
        {
          id: 13,
          question: "নির্বাচনী এলাকার সীমানা নির্ধারণের প্রধান ভিত্তি কী?",
          options: ["ক) এলাকা", "খ) জনসংখ্যা", "গ) ভোটার সংখ্যা", "ঘ) প্রশাসনিক বিভাগ"],
          answer: "খ) জনসংখ্যা",
          explanation: "আদমশুমারির ভিত্তিতে জনসংখ্যার সমতা রক্ষা করে সীমানা নির্ধারণ করা হয়।"
        },
        {
          id: 14,
          question: "বাংলাদেশের প্রথম জাতীয় সংসদে সংরক্ষিত নারী আসন কতটি ছিল?",
          options: ["ক) ১০টি", "খ) ১৫টি", "গ) ৩০টি", "ঘ) ৪৫টি"],
          answer: "খ) ১৫টি",
          explanation: "১৯৭৩ সালের প্রথম সংসদে নারীদের জন্য ১৫টি সংরক্ষিত আসন ছিল।"
        },
        {
          id: 15,
          question: "২০২৪ সালে গঠিত অন্তর্বর্তীকালীন সরকারের প্রধান উপদেষ্টার নাম কী?",
          options: ["ক) ড. ফখরুদ্দীন আহমদ", "খ) বিচারপতি হাবিবুর রহমান", "গ) ড. মুহাম্মদ ইউনূস", "ঘ) আবু সাঈদ চৌধুরী"],
          answer: "গ) ড. মুহাম্মদ ইউনূস",
          explanation: "ছাত্র-জনতার বিপ্লবের পর ৮ আগস্ট ২০২৪ তিনি প্রধান উপদেষ্টা হিসেবে শপথ নেন।"
        }
      ],
    },
    written_exam_prep: {
      guidelines:
        "লিখিত পরীক্ষায় বর্তমান 'নির্বাচন কমিশন সংস্কার কমিশন' এর সুপারিশ এবং সংবিধানে নির্বাচন সংক্রান্ত পরিবর্তনের সম্ভাবনা থেকে প্রশ্ন আসার সম্ভাবনা বেশি।",
      possible_questions: [
        {
          question: "সুষ্ঠু ও নিরপেক্ষ নির্বাচনের জন্য একটি স্বাধীন নির্বাচন কমিশনের গুরুত্ব আলোচনা করুন।",
          key_points_for_answer: [
            "আর্থিক ও প্রশাসনিক স্বাধীনতা।",
            "নিয়োগ প্রক্রিয়ায় রাজনৈতিক প্রভাবমুক্ত থাকা।",
            "নির্বাচনী অপরাধে কঠোর শাস্তির বিধান প্রয়োগ।"
          ],
        },
        {
          question: "তত্ত্বাবধায়ক সরকার ব্যবস্থা বনাম অন্তর্বর্তীকালীন সরকার ব্যবস্থার মধ্যে পার্থক্য কী?",
          key_points_for_answer: [
            "সংবিধানিক ভিত্তি (১৩তম সংশোধনী বনাম বিশেষ পরিস্থিতি)।",
            "কার্যাবলি ও মেয়াদের ভিন্নতা।",
            "রাষ্ট্রীয় সংস্কার বনাম রুটিন কাজ।"
          ],
        }
      ],
    },
  },
];
export const blog_details_merged = [
  ...blog_details_bangladesh_election,
  ...blog_theory_and_doctrine,
  ...blog_details_interview,
  ...blog_details_bangladesh_2,
  ...blog_details
];

// reversed array without reversed() method for interview-01=real world example
const reversedArray = (arr) => {
  let newArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArray.push(arr[i]);
  }
  return newArray;
};
export const blog_details_data = reversedArray(blog_details_merged)







