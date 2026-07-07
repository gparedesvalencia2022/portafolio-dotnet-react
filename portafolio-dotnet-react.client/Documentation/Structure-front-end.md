portafolio-dotnet-react.client/
├── index.html          ← ¡here is the <div id="root">!
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx        ← here is the createRoot
│   ├── pages/
│   │   ├── App.jsx
│   │   └── Home.jsx    ← your component Home (the root is in the index.html)
│   └── stylesheet/
│       └── ...
└── public/
    └── ...
Resume:
"root is in index.html (not in Home.jsx)

main.jsx uses createRoot to 'mount' React in that div

Home.jsx is just ONE of the components that React renders INSIDE root"

##Visual Schema : React Application Architecture

index.html
├── <div id="root">                          ← Entry point (empty container)
│   └── React mounts here
│       └── <App />                          ← Rendered by main.jsx
│           └── <BrowserRouter>              ← React Router DOM (URL management)
│               └── <Routes>                ← Route definitions
│                   └── <Route path="/">    ← Home route
│                       └── <Home />        ← YOUR Home.jsx COMPONENT
│                           ├── <motion.div>           ← Framer Motion animation
│                           │   ├── <TerminalCard />   ← Terminal UI component
│                           │   ├── <motion.h1>        ← Animated title
│                           │   ├── <CustomCarousel /> ← Carousel component
│                           │   ├── <Section>          ← Section wrapper
│                           │   │   └── <Card>         ← Technology cards
│                           │   ├── <Section>          ← Section wrapper
│                           │   │   └── <Card>         ← Project cards
│                           │   └── <Section>          ← Section wrapper
│                           │       ├── <button> EN    ← Language toggle
│                           │       ├── <button> FR    ← Language toggle
│                           │       └── <button> ES    ← Language toggle
│                           └── <Skeleton />           ← Loading state (if portfolio null)
└── </div>

## Data Flow Summary
1. Component Mounts
   ↓
2. useEffect runs (once)
   ↓
3. fetchData() called
   ↓
4. API request to getPortfolio()
   ↓
5. Data received → setPortfolio(data)
   ↓
6. Component re-renders with data
   ↓
7. JSX renders portfolio content
   ↓
8. User interacts (clicks language button)
   ↓
9. setLanguage() updates state
   ↓
10. Component re-renders with new language

## Component Hierarchy
Home.jsx
├── TerminalCard      ← Simulates terminal window
├── CustomCarousel    ← Image carousel
├── Section (x3)      ← Reusable section wrapper
│   ├── Card          ← Technology card
│   ├── Card          ← Project card
│   └── Card          ← About card (with language toggle)
└── Skeleton          ← Loading state (conditional)