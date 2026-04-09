import { useState, useRef, useEffect } from 'react';
import { name } from '../info';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isFatalError, setIsFatalError] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const question = input.trim();
    if (!question || isLoading || isFatalError) return;

    setMessages(prev => [...prev, { role: 'user', text: question }]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question }),
      });

      if (response.status === 429) {
        let warningText = 'You already have a pending request in another browser or tab. Please wait for it to complete.';
        try {
          const data = await response.json();
          if (data?.error?.toLowerCase().includes('too many')) {
            warningText = 'Too many requests. Please wait a moment before trying again.';
          }
        } catch { /* use default message */ }
        setMessages(prev => [...prev, { role: 'error', text: warningText }]);
        return;
      }

      if (response.status >= 500) {
        setMessages(prev => [...prev, {
          role: 'error',
          text: 'The chat is currently unavailable. Please try again later.',
        }]);
        setIsFatalError(true);
        return;
      }

      const data = await response.json();
      setMessages(prev => [...prev, { role: 'ai', text: data.answer }]);
    } catch {
      setMessages(prev => [...prev, {
        role: 'error',
        text: 'The chat is currently unavailable. Please try again later.',
      }]);
      setIsFatalError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="chat" className="section chat">
      <div className="container">
        <h2 className="section-title">Ask About {name}</h2>
        <p className="chat-description">
          Have a question about my background, experience, or skills? Ask the AI assistant below.
        </p>
        <p className="chat-disclaimer">
          ⚠️ This AI runs locally on a consumer GPU (RTX 2060 Super) — responses may take a few seconds.
        </p>
        <div className="chat-window">
          <div className="chat-messages">
            {messages.length === 0 && (
              <div className="chat-empty">
                <span className="chat-empty-icon">💬</span>
                <p>Ask anything about {name}&rsquo;s portfolio or career.</p>
              </div>
            )}
            {messages.map((msg, i) => (
              <div key={i} className={`chat-message chat-message--${msg.role}`}>
                {msg.role === 'ai' && <span className="chat-avatar">AI</span>}
                <div className="chat-bubble">{msg.text}</div>
              </div>
            ))}
            {isLoading && (
              <div className="chat-message chat-message--ai">
                <span className="chat-avatar">AI</span>
                <div className="chat-bubble chat-thinking">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <form className="chat-form" onSubmit={handleSubmit}>
            <input
              className="chat-input"
              type="text"
              placeholder={`Ask about ${name}'s experience, skills, or projects…`}
              value={input}
              onChange={e => setInput(e.target.value)}
              disabled={isLoading || isFatalError}
              aria-label="Chat input"
            />
            <button
              className="btn btn-primary chat-submit"
              type="submit"
              disabled={isLoading || isFatalError || !input.trim()}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Chat;
