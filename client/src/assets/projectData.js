export const ProjectData = [
  {
    id: "m1",
    moduleTitle: "Module 1: Frontend Foundation & Chat Architecture",
    duration: "40 Minutes",
    slug: "mern-chat-setup",
    description: "Kickstart your MERN Chat App by setting up a high-performance React environment with Vite and designing a dynamic grid layout.",
    topics: [
      "Vite + React Boilerplate Setup",
      "Tailwind CSS Utility-First Configuration",
      "Google Fonts Integration (Outfit)",
      "Scalable File & Folder Structure",
      "Dynamic Grid Layouts (2-column vs 3-column)"
    ],
    steps: [
      {
        ref: "1a",
        description: "1. Initialize the project using Vite and install core dependencies:\n2. tailwindcss, and first install vite tailwind pakages,\n3.second paste tailwind/vite in vite.config.js and \n3. also add tailwindcss() in.also import 'tailwindcss' in index.css.",
        solution: "npm create vite@latest client \nnpm install tailwindcss @tailwindcss/vite \nimport tailwindcss from '@tailwindcss/vite' \ntailwindcss(),\n@import 'tailwindcss' \nnpm run dev"
      },
      {
        ref: "1b",
        description: "Implement 'Outfit' Google Font in your index.css and extend the Tailwind config to use it as the default sans serif.",
        solution: "@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');\n\n// tailwind.config.js\ntheme: { extend: { fontFamily: { sans: ['Outfit', 'sans-serif'] } } }"
      },
      {
        ref: "1c",
        description: "Create a global background wrapper that persists across all routes using a fixed inset div with a background image.",
        solution: "<div className='fixed inset-0 -z-10 h-full w-full bg-cover bg-center' style={{ backgroundImage: \"url('/bg.png')\" }} />\nbg-contain"
      },
      {
        ref: "1d",
        description: "Implement the 'Chat Layout' logic: Create a 2-column grid (Sidebar, Welcome) that transforms into a 3-column grid (Sidebar, Chat, UserInfo) only when 'selectedUser' is true.",
        solution: "<div className={`grid h-[90vh] w-full ${selectedUser ? 'grid-cols-[1fr_2fr_1fr]' : 'grid-cols-[1fr_3fr]'} gap-4`}>\n  <Sidebar />\n  <ChatArea />\n  {selectedUser && <UserInfo />}\n</div>"
      }
    ]
  },

 

];