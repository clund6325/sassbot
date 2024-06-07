import React, { useEffect, useState } from "react";
import AnimatedFace from "./AnimatedFace";
import './AnimatedFace';
import predefinedResponses from "./responses";

const SnarkyChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voices, setVoices] = useState([]);

    // const voices = window.speechSynthesis.getVoices();
    // voices.forEach((voice, index) => {
    //     console.log(`${index}: ${voice.name} (${voice.lang}) - ${voice.default ? 'default' : ''}`)
    // });

    useEffect(() => {
        const storedMessages = JSON.parse(localStorage.getItem('chatMessages'));
        if (storedMessages) {
            setMessages(storedMessages);
        }

        const loadVoices = () => {
            const availableVoices = window.speechSynthesis.getVoices();
            setVoices(availableVoices);
        };

        window.speechSynthesis.onvoiceschanged = loadVoices;
        loadVoices();
    }, []);

    useEffect(() => {
        localStorage.setItem('chatMessages', JSON.stringify(messages));
    }, [messages]);

    const fetchResponse = async (input) => {
        const lowerInput = input.toLowerCase().trim();
        console.log(`User input: ${lowerInput}`);
        if (predefinedResponses[lowerInput]) {
            console.log(`Predefined response: ${predefinedResponses[lowerInput]}`);
            return predefinedResponses[lowerInput];
        } else {
            console.log(`No predefined response found for: ${lowerInput}`);
        }
        try {
            const response = await fetch('http://localhost:5001/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: input }),
            });
            const data = await response.json();
            if (response.ok) {
                return data.response.trim();
            } else {
                throw new Error(data.error || 'Unknown error occurred');
            }
        } catch (error) {
            console.error('Error fetching AI response:', error);
            return "Sorry, I couldn't understand that. Can you please rephrase?";
        }
    };

  const handleSend = async () => {
    if (typeof input === 'string' && input.trim()) {
        const userMessage = { text: input, sender: 'user' };
        setMessages([...messages, userMessage]);
        setInput('');
        setIsSpeaking(true);

        const botMessageText = await fetchResponse(input);
        const botMessage = { text: botMessageText, sender: 'bot' };

        setMessages((prevMessages) => [...prevMessages, botMessage]);
        speakResponse(botMessageText);

        setTimeout(() => {
            setIsSpeaking(false);
        }, 8000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && typeof input === 'string' && input.trim()) {
        handleSend();
    }
  };

  const speakResponse = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    const selectedVoice = voices.find(voice => voice.name === 'Google US English' || voice.name === 'Alex');
    if (selectedVoice) {
        utterance.voice = selectedVoice;
    }
    utterance.rate = 0.8;
    window.speechSynthesis.speak(utterance);
  }

  const startListening = () => {
    const recognition = new window.SpeechRecognition();
    recognition.onresult = (event) => {
        const spokenInput = event.results[0][0].transcript;
        setInput(spokenInput);
        handleSend();
    };
    recognition.start();
  };

  return (
    <div style={styles.container}>
        <h1>Ask CH@TB0T Anything</h1>
        <AnimatedFace speaking={isSpeaking} />
      <div style={styles.chatbox}>
        Ask me anything and I'll answer it! Or for specific responses about Cameron Lund, try typing in these prompts:
        <ul>
            <li>Who is Cameron Lund?</li>
            <li>What is Cameron Lund's background?</li>
            <li>What technologies does Cameron Lund know?</li>
            <li>What does Cameron Lund do for fun?</li>
            <li>What are Cameron Lund's values?</li>
            <li>What are the most important things for me to know about Cameron Lund?</li>
            <li>What are some fun facts about Cameron Lund?</li>
        </ul>
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
            placeholder="Type your message here..."
        />
        <button onClick={handleSend} style={styles.button} disabled={typeof input !== 'string' || !input.trim()}>Send</button>
        <button onClick={startListening} style={styles.button}>Speak</button>
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