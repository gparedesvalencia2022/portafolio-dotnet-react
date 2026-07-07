User Enters Page
       │
       ▼
┌──────────────────────────────────────────────────────────┐
│  1. useEffect (auto-open trigger)                       │
│     - Waits 1.5 seconds                                 │
│     - Sets isOpen = true                                │
│     - Sets hasAutoOpened = true (prevents re-open)      │
└──────────────────────────────────────────────────────────┘
       │
       ▼
┌──────────────────────────────────────────────────────────┐
│  2. useEffect (initial message)                         │
│     - Checks if isOpen = true                           │
│     - Checks if messages array is empty                 │
│     - Calls getInitialMessage() from service            │
│     - Adds welcome message to messages state            │
└──────────────────────────────────────────────────────────┘
       │
       ▼
┌──────────────────────────────────────────────────────────┐
│  3. Chat renders with:                                  │
│     - Welcome message                                   │
│     - 6 Suggestion buttons                              │
│     - Input field                                       │
│     - Send button                                       │
└──────────────────────────────────────────────────────────┘
       │
       ▼
┌──────────────────────────────────────────────────────────┐
│  4. User Interaction:                                   │
│     A) Types question + clicks Send                     │
│     B) Clicks suggestion button                         │
└──────────────────────────────────────────────────────────┘
       │
       ▼
┌──────────────────────────────────────────────────────────┐
│  5. handleSendMessage() OR                              │
│     handleSuggestionClick()                             │
│     - Calls sendUserMessage()                          │
│     - Adds user message to messages state               │
│     - Sets isTyping = true                             │
└──────────────────────────────────────────────────────────┘
       │
       ▼
┌──────────────────────────────────────────────────────────┐
│  6. getChatBotResponse(userMessage) in service          │
│     - Converts message to lowercase                     │
│     - Checks each category's keywords                   │
│     - If match found → returns random response          │
│     - If no match → returns unknown + suggestions       │
└──────────────────────────────────────────────────────────┘
       │
       ▼
┌──────────────────────────────────────────────────────────┐
│  7. Bot response added to messages state                │
│     - Sets isTyping = false                            │
│     - Auto-scroll to bottom                             │
│     - Renders bot message in UI                         │
└──────────────────────────────────────────────────────────┘
       │
       ▼
User continues conversation...
