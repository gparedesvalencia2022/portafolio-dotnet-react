// Chatbot knowledge base
const knowledgeBase = {
    // Greetings
    greetings: {
        keywords: ['hello', 'hi', 'hey', 'hola', 'bonjour', 'salut', 'good morning', 'good afternoon'],
        responses: [
            "Hello! 👋 How can I help you today? Feel free to ask me about my work, skills, or experience!",
            "Hi there! 😊 I'm here to assist you. Check out the suggestions below or ask me anything about my portfolio!",
            "Hey! 🚀 Great to see you! I can tell you about my projects, technologies, experience, or how to contact me."
        ]
    },

    // About section
    about: {
        keywords: ['about', 'who', 'background', 'presentation', 'tell me about yourself', 'introduce'],
        responses: [
            "👨‍💻 I'm Guillermo Paredes, a passionate software developer with 10+ years of experience. I specialize in .NET, React, and full-stack development. I love solving real-world problems with clean, well-tested code. Check out the 'About Me' section for more details!",
            "🌟 I'm a full-stack developer with expertise in JavaScript, C#, .NET Core, React, Angular, and more. I have a strong background in building robust APIs and modern web applications. The 'About Me' section has all the details!"
        ]
    },

    // Technologies/Skills
    tech: {
        keywords: ['tech', 'technology', 'skills', 'stack', 'languages', 'framework', 'tools', 'programming'],
        responses: [
            "🛠️ My tech stack includes: \n• Frontend: React, Angular, TypeScript, JavaScript, HTML5, CSS3, Bootstrap\n• Backend: C#, .NET Core, REST APIs, Entity Framework\n• Databases: SQL Server, Oracle, PostgreSQL\n• Tools: Git, Docker, Azure, AWS\n• Testing: Unit Testing, Integration Testing\n\nCheck the 'Technologies' section for the complete list!",
            "💻 I work with a variety of technologies: \n• Languages: C#, JavaScript, TypeScript, SQL\n• Frameworks: .NET Core, React, Angular, Bootstrap\n• APIs: REST, Web API\n• Databases: SQL Server, Oracle\n• DevOps: Git, CI/CD, Docker\n\nSee the full list in the 'Technologies' section!"
        ]
    },

    // Projects
    projects: {
        keywords: ['project', 'portfolio', 'work', 'demo', 'showcase', 'applications', 'build'],
        responses: [
            "📁 I've worked on various projects including: \n• Full-stack web applications with React + .NET Core\n• REST APIs with C# and SQL Server\n• Microservices architecture\n• Modern responsive websites\n\nVisit the 'Projects' section to see detailed descriptions and technologies used!",
            "🚀 My portfolio includes: \n• .NET Core + React applications\n• API development and integration\n• Database design and optimization\n• Frontend development with Angular and React\n\nCheck out the 'Projects' section for more details!"
        ]
    },

    // Contact
    contact: {
        keywords: ['contact', 'email', 'phone', 'reach', 'connect', 'hire', 'call', 'message', 'linkedin', 'github'],
        responses: [
            "📬 You can reach me at: • GitHub: https://github.com/gparedesvalencia2022\n• Website: https://gparedesdotnet.onrender.com/\n\nI'm open to new opportunities and collaborations!",
            "🤝 Let's connect! 💻 GitHub: https://github.com/gparedesvalencia2022\n• 🌐 Portfolio: https://gparedesdotnet.onrender.com/\n\nFeel free to reach out anytime!"
        ]
    },

    // Experience
    experience: {
        keywords: ['experience', 'years', 'work', 'career', 'professional', 'background', 'journey'],
        responses: [
            "👔 I have 10+ years of experience in software development. I've worked on:\n• Complex enterprise systems\n• API development and integration\n• Frontend applications with React and Angular\n• Database design and optimization\n• Agile teams and collaborative environments\n\nI'm passionate about delivering high-quality, well-tested solutions.",
            "💼 My professional journey includes:\n• 10+ years in software development\n• Full-stack development with .NET and JavaScript\n• Experience in startups, corporate environments, and freelancing\n• Strong focus on clean code and best practices\n• Continuous learning and adaptation to new technologies"
        ]
    },

    // Education
    education: {
        keywords: ['education', 'degree', 'university', 'school', 'college', 'certified', 'training'],
        responses: [
            "🎓 I have a strong educational background in software development and computer science. I continuously update my skills through courses, certifications, and hands-on projects. You can check my LinkedIn profile for detailed education information!",
            "📚 I believe in lifelong learning. My education includes formal training in computer science, plus ongoing professional development in modern frameworks, cloud technologies, and software architecture best practices."
        ]
    }
};

// Default topics (shown when user asks something not recognized)
const defaultTopics = [
    "I'm not sure I understand. Here are some topics I can help with:",
    "📌 • About me - Learn about my background and experience",
    "💻 • Technologies - Explore my tech stack and skills",
    "📁 • Projects - View my portfolio and work samples",
    "📬 • Contact - Get in touch with me",
    "👔 • Experience - My professional journey",
    "🎓 • Education - My academic background"
];

// Unknown response (when no keywords match)
const unknownResponse = {
    keywords: ['unknown'],
    responses: [
        "🤔 Hmm, I don't have an answer for that specific question. But don't worry! You can reach out directly:\n\n📧 💻 https://github.com/gparedesvalencia2022\n\nOr ask me something from the suggested topics above! 😊"
    ]
};

// Helper to get random response from array
const getRandomResponse = (responses) => {
    return responses[Math.floor(Math.random() * responses.length)];
};

// Main function to match user input with knowledge base
export const getChatBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase().trim();

    // Check if message matches any category (except default)
    for (const [category, data] of Object.entries(knowledgeBase)) {
        // Skip if not a category with keywords
        if (!data.keywords || category === 'default') continue;

        // Check if any keyword matches
        const match = data.keywords.some(keyword =>
            message.includes(keyword.toLowerCase())
        );

        if (match) {
            return getRandomResponse(data.responses);
        }
    }

    // No match found - return unknown response with suggested topics
    return `${getRandomResponse(unknownResponse.responses)}\n\n${defaultTopics.join('\n')}`;
};

// Get initial welcome message with suggestions
export const getInitialMessage = () => {
    return `👋 Hey there! I'm your virtual assistant. I can help you learn about Guillermo's work, skills, and experience. 

Here are some things you can ask me about:
📌 • About me
💻 • Technologies
📁 • Projects
📬 • Contact
👔 • Experience
🎓 • Education

Type your question or click on a topic above! 😊`;
};

// Get default suggestions (for quick buttons)
export const getSuggestions = () => {
    return [
        { label: "📌 About", value: "About" },
        { label: "💻 Technologies", value: "Technologies" },
        { label: "📁 Projects", value: "Projects" },
        { label: "📬 Contact", value: "Contact" },
        { label: "👔 Experience", value: "Experience" },
        { label: "🎓 Education", value: "Education" }
    ];
};