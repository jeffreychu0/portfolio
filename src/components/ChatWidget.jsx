import React, { useState, useRef, useEffect } from 'react';

// Example initial messages (could be imported from /data/chat.json)
const initialMessages = [
  { role: 'assistant', content: 'Hello! I am Jc, an AI assistant made by Jeffrey to answer any questions you have of Jeffrey. Please ask me any questions you have of Jeffrey.' }
];

const gradientBubble =
  'bg-gradient-to-br from-green-700 to-indigo-700 text-white';

const lambdaRoute = import.meta.env.VITE_LAMBDA_API_URL;

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState('');
  const inputRef = useRef(null);
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus();
    if (open && chatEndRef.current) chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [open, messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const newMessages = [
      ...messages.filter(m => m.role !== 'system'),
      { role: 'user', content: input }
    ];
    setMessages(newMessages);
    setInput('');
    setLoading(true); // Start loading

    try {
      const response = await fetch(lambdaRoute, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
          'x-api-key': import.meta.env.VITE_API_KEY
         },
        body: JSON.stringify({ input })
      });
      const data = await response.json(); // Correct way to get response body
      setMessages(msgs => [
        ...msgs,
        { role: 'assistant', content: data.body }
      ]);
    } catch (err) {
      console.error('Error communicating with AI service:', err);
      setMessages(msgs => [
        ...msgs,
        { role: 'assistant', content: "The API is experiencing issues currently. Please try again later" }
      ]);
    } finally {
      setLoading(false);
    }
  };

  // Collapsed widget button
  if (!open) {
    return (
      <button
        aria-label="Open chat"
        className="fixed z-50 bottom-6 right-6 w-12 md:w-16 h-12 md:h-16 rounded-full shadow-lg flex items-center justify-center bg-gradient-to-br from-green-400 via-purple-500 to-indigo-600 animate-bounce focus:outline-none focus:ring-4 focus:ring-purple-400"
        onClick={() => setOpen(true)}
      >
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.77 9.77 0 01-4-.8L3 21l1.8-4A7.96 7.96 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </button>
    );
  }

  // Expanded chat overlay
  return (
    <div
      className="fixed z-50 bottom-0 right-0 w-full max-w-sm md:max-w-md max-h-screen h-[70vh] md:h-[80vh] bg-gray-900 rounded-t-2xl shadow-2xl flex flex-col border-2 border-blue-700 focus:outline-none"
      role="dialog"
      aria-modal="true"
      tabIndex={-1}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800">
        <span className="font-bold text-lg text-white">AI Chatbot</span>
        <button
          aria-label="Close chat"
          className="text-gray-400 hover:text-white focus:outline-none"
          onClick={() => setOpen(false)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-2 bg-gray-900">
        {messages
          .filter(m => m.role !== 'system')
          .map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`rounded-2xl px-4 py-2 max-w-[80%] text-base break-words shadow
                  ${msg.role === 'user'
                    ? 'bg-gray-800 text-white'
                    : gradientBubble
                  }`}
                tabIndex={0}
                aria-label={`${msg.role === 'user' ? 'You' : 'Assistant'}: ${msg.content}`}
              >
                {msg.content}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="rounded-2xl px-4 py-2 max-w-[80%] text-base break-words shadow bg-gradient-to-br from-green-700 to-indigo-700 text-white animate-pulse">
                <span className="inline-block">Thinking<span className="animate-bounce">...</span></span>
              </div>
            </div>
          )}
        <div ref={chatEndRef} />
      </div>
      {/* Input bar */}
      <form
        className="flex items-center px-4 py-3 border-t border-gray-800 bg-gray-900"
        onSubmit={handleSend}
      >
        <input
          ref={inputRef}
          type="text"
          className="flex-1 rounded-full px-4 py-2 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Type your message…"
          value={input}
          onChange={e => setInput(e.target.value)}
          aria-label="Type your message"
        />
        <button
          type="submit"
          className="ml-3 px-4 py-2 rounded-full font-semibold bg-gradient-to-br from-green-400 via-purple-500 to-indigo-600 text-white shadow hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatWidget;