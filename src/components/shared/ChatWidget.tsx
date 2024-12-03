import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle message submission
    setMessage('');
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-900 text-white p-4 rounded-full shadow-lg hover:bg-blue-800 transition-colors duration-200"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl w-80">
          <div className="p-4 bg-blue-900 text-white rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">Chat with us</h3>
            <button onClick={() => setIsOpen(false)}>
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="h-96 p-4 flex flex-col">
            <div className="flex-grow overflow-y-auto mb-4">
              {/* Chat messages would go here */}
              <div className="bg-gray-100 p-3 rounded-lg mb-2 max-w-[80%]">
                Hello! How can we help you today?
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-grow px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
              <button
                type="submit"
                className="bg-blue-900 text-white p-2 rounded-lg hover:bg-blue-800"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}