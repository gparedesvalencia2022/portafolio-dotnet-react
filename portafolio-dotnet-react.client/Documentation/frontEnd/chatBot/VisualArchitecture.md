ChatBot System Architecture
│
├── 📁 UI Layer (Components)
│   ├── ChatBot.jsx                 ← Main component container
│   │   ├── State Management        ← useState hooks
│   │   ├── Effects                ← useEffect for lifecycle
│   │   ├── Auto-open logic        ← Opens chat after 1.5s
│   │   ├── Suggestion buttons     ← Quick action buttons
│   │   └── Message handling       ← Send/receive messages
│   │
│   ├── ChatMessage.jsx            ← Individual message renderer
│   │   ├── User messages          ← Right-aligned, green bubbles
│   │   └── Bot messages           ← Left-aligned, dark bubbles
│   │
│   └── ChatBot.css                ← Styling (dark theme)
│
├── 📁 Business Logic Layer
│   └── chatBotService.js          ← Knowledge base & response engine
│       ├── knowledgeBase          ← Object with topic categories
│       │   ├── greetings          ← Keywords: hello, hi, hey, etc.
│       │   ├── about              ← Keywords: about, who, background
│       │   ├── tech               ← Keywords: tech, skills, stack
│       │   ├── projects           ← Keywords: project, portfolio, work
│       │   ├── contact            ← Keywords: contact, email, phone
│       │   ├── experience         ← Keywords: experience, years, career
│       │   └── education          ← Keywords: education, degree, school
│       │
│       ├── defaultTopics          ← Fallback suggestions
│       ├── unknownResponse        ← Unknown query handler
│       ├── getRandomResponse()    ← Returns random response from array
│       ├── getChatBotResponse()   ← Main matching function
│       └── getInitialMessage()    ← Welcome message with suggestions
│
└── 📁 Integration Layer
    └── App.jsx                    ← Parent component
        └── <ChatBot />            ← Rendered outside <AnimatePresence>