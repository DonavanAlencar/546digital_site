import React, { useState, useEffect } from 'react';

export default function ChatBot() {
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const [isWaiting, setIsWaiting] = useState(false);

  // Função para alternar entre minimizado e expandido
  // Agora toda a área do cabeçalho é clicável para minimizar
  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  // Função para enviar mensagem
  const sendMessage = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Adiciona a mensagem do usuário ao chat
    const userMessage = { text: message, sender: 'user' };
    setChatMessages([...chatMessages, userMessage]);
    setMessage('');
    
    // Ativa o estado de espera - a mensagem "Alguém está escrevendo..." ficará piscando
    // até que a resposta da API seja recebida
    setIsWaiting(true);
    
    // Simula uma resposta da API após 2 segundos
    setTimeout(() => {
      const botResponse = { 
        text: "Obrigado pelo seu contato! Um de nossos especialistas entrará em contato em breve.", 
        sender: 'bot' 
      };
      setChatMessages(prevMessages => [...prevMessages, botResponse]);
      setIsWaiting(false); // Só desativa o estado de espera após receber a resposta
    }, 2000);
  };

  return (
    <div className="chat-container">
      {/* Cabeçalho do chat - toda a área é clicável para minimizar */}
      <div 
        className="chat-header" 
        onClick={toggleMinimize}
        style={{ cursor: 'pointer', width: '100%' }}
      >
        <div>
          <span>Chat Online</span>
        </div>
        <div>
          {isMinimized ? '▼' : '▲'}
        </div>
      </div>
      
      {/* Corpo do chat - visível apenas quando não minimizado */}
      {!isMinimized && (
        <>
          <div className="chat-body">
            {chatMessages.map((msg, index) => (
              <div 
                key={index} 
                className={`message ${msg.sender === 'user' ? 'user-message' : 'bot-message'}`}
                style={{
                  textAlign: msg.sender === 'user' ? 'right' : 'left',
                  margin: '10px 0',
                  padding: '10px 15px',
                  borderRadius: '12px',
                  backgroundColor: msg.sender === 'user' ? '#3066be' : '#f0f0f0',
                  color: msg.sender === 'user' ? 'white' : 'black',
                  maxWidth: '80%',
                  alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                  display: 'inline-block',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
                }}
              >
                {msg.text}
              </div>
            ))}
            {isWaiting && (
              <div className="blinking" style={{ margin: '10px 0', fontWeight: 'bold', color: '#090c9b' }}>
                Alguém está escrevendo...
              </div>
            )}
          </div>
          
          <div className="chat-footer">
            <form onSubmit={sendMessage} style={{ display: 'flex', width: '100%' }}>
              <input
                type="text"
                className="chat-input"
                placeholder="Digite sua mensagem..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button 
                type="submit" 
                className="chat-send-btn"
                disabled={isWaiting}
              >
                Enviar
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
}
