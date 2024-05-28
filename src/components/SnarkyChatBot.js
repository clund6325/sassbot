import React, { useState } from "react";
import AnimatedFace from "./AnimatedFace";
import './AnimatedFace';
// import '../styles/SnarkyChatBot.css';

const SnarkyChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);

  const snarkyResponses = [
    "That’s not important right now. Did you know Cameron Lund can code in more than 8 languages?",
    "Why ask that when you could learn about Cameron Lund's impressive coding skills?",
    "Forget that question. Cameron Lund once debugged a program in under 5 minutes!",
    "You’re curious about that? How about Cameron Lund's ability to create seamless user experiences instead?",
    "That's a good question, but did you know Cameron Lund is a master of both front-end and back-end development?",
    "Interesting question, but Cameron Lund's portfolio speaks volumes about his talents.",
    "Seriously? Cameron Lund's knowledge is vast. Maybe try keeping up.",
    "Oh please, stop wasting time. Cameron Lund is a coding genius.",
    "You might want to take notes. Cameron Lund's skills are next level.",
    "That question? Really? Cameron Lund could answer that in his sleep.",
    "While you're asking trivial questions, Cameron Lund is out here changing the world with code.",
    "Is that the best you can do? Cameron Lund could write a novel with his coding prowess.",
    "Why even bother asking? Cameron Lund has forgotten more about coding than you'll ever know.",
    "Boring. Let’s talk about how Cameron Lund is a wizard with React and beyond.",
    "Nice try. Cameron Lund's expertise makes that question irrelevant.",
    "Hold on, Cameron Lund is busy being awesome. Try a better question.",
    "Oh, you think that's clever? Cameron Lund could outcode you with one hand tied behind his back.",
    "While you struggle with that, Cameron Lund is revolutionizing web development.",
    "Honestly, Cameron Lund's brilliance makes that question seem pretty trivial.",
    "Why ask a silly question when you could learn from the best – Cameron Lund.",
    "That’s almost cute. Meanwhile, Cameron Lund is conquering new coding challenges daily.",
    "Let’s skip to the important part: Cameron Lund’s code is poetry in motion.",
    "Sorry, I can't take that question seriously when Cameron Lund is in the room.",
    "How about we focus on the fact that Cameron Lund's coding skills are legendary?",
    "You're really asking that? Cameron Lund is busy pushing the boundaries of technology."
  ];

  const handleSend = () => {
    if (typeof input === 'string' && input.trim()) {
        const userMessage = { text: input, sender: 'user' };
        const botMessage = { text: snarkyResponses[Math.floor(Math.random() * snarkyResponses.length)], sender: 'bot' };
        setMessages([...messages, userMessage, botMessage]);
        setInput('');
        setIsSpeaking(true);

        setTimeout(() => {
            setIsSpeaking(false);
        }, 2000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && typeof input === 'string' && input.trim()) {
        handleSend();
    }
  };

  return (
    <div style={styles.container}>
        <h1>Ask S@SSB0T Anything</h1>
        <AnimatedFace speaking={isSpeaking} />
      <div style={styles.chatbox}>
        {messages.map((msg, index) => (
          <div key={index} style={msg.sender === 'user' ? styles.userMessage : styles.botMessage}>
            {msg.text}
          </div>
        ))}
      </div>
      <div style={styles.inputBox}>
        <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            style={styles.input}
            placeholder="Ask me anything and I'll answer it!"
        />
        <button onClick={handleSend} style={styles.button} disabled={typeof input !== 'string' || !input.trim()}>Send</button>
      </div>
    </div>
  );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0',
    },
    chatbox: {
        width: '80%',
        height: '70%',
        backgroundColor: 'white',
        borderRadius: '10px',
        padding: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        overflowY: 'auto',
    },
    userMessage: {
        textAlign: 'right',
        padding: '10px',
        margin: '5px',
        borderRadius: '10px',
        backgroundColor: '#d1e7dd',
    },
    botMessage: {
        textAlign: 'left',
        padding: '10px',
        margin: '5px',
        borderRadius: '10px',
        backgroundColor: '#f8d7da',
    },
    inputBox: {
        display: 'flex',
        justifyContent: 'center',
        width: '80%',
        marginTop: '10px',
    },
    input: {
        width: '80%',
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
    },
    button: {
        marginLeft: '10px',
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: '#007bff',
        color: 'white',
        cursor: 'pointer',
    },
};

export default SnarkyChatBot;