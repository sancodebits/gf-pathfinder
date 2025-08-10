import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, Send, Mic, MicOff, X } from "lucide-react";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "bot",
      content: "Hello! I'm here to help you with information about our courses, admissions, and any questions you might have. How can I assist you today?"
    }
  ]);

  const quickQuestions = [
    "Course fees structure",
    "JNV entrance preparation",
    "Class timings",
    "Contact information"
  ];

  const handleSendMessage = () => {
    if (!message.trim()) return;

    setMessages(prev => [...prev, { type: "user", content: message }]);
    
    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        type: "bot",
        content: "Thank you for your question! Our team will provide you with detailed information shortly. For immediate assistance, please call us at +91 98765 43210."
      }]);
    }, 1000);

    setMessage("");
  };

  const handleVoiceToggle = () => {
    setIsListening(!isListening);
    // Voice recognition logic would go here
  };

  const handleQuickQuestion = (question: string) => {
    setMessage(question);
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-strong animate-pulse-glow"
        variant="hero"
        size="icon"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50" data-chat-bot>
      <Card className="w-80 h-96 flex flex-col shadow-strong">
        {/* Header */}
        <div className="bg-gradient-primary p-4 rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-sm">G</span>
              </div>
              <div>
                <h4 className="text-primary-foreground font-semibold">Gayatri Assistant</h4>
                <p className="text-primary-foreground/80 text-xs">Online now</p>
              </div>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsOpen(false)}
              className="text-primary-foreground hover:bg-primary-foreground/10"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                msg.type === 'user' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-muted text-muted-foreground'
              }`}>
                {msg.content}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Questions */}
        <div className="p-2 border-t">
          <div className="grid grid-cols-2 gap-1 mb-2">
            {quickQuestions.map((question, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                className="text-xs h-auto py-1 px-2"
                onClick={() => handleQuickQuestion(question)}
              >
                {question}
              </Button>
            ))}
          </div>
        </div>

        {/* Input */}
        <div className="p-4 border-t">
          <div className="flex space-x-2">
            <Input
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              className="flex-1"
            />
            <Button
              variant="ghost"
              size="icon"
              onClick={handleVoiceToggle}
              className={isListening ? "text-accent" : "text-muted-foreground"}
            >
              {isListening ? <Mic className="w-4 h-4" /> : <MicOff className="w-4 h-4" />}
            </Button>
            <Button
              onClick={handleSendMessage}
              size="icon"
              variant="hero"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ChatBot;