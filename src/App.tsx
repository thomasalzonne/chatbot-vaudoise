import { useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('')

  return (
    <div className="App">
      <h1>🏢 Vaudoise Assurances</h1>
      <h2>Portail IA - Chatbot Assistant</h2>

      <div style={{ margin: '2rem', padding: '2rem', border: '1px solid #ccc', borderRadius: '8px' }}>
        <h3>Simulateur de Chat</h3>
        <input
          type="text"
          placeholder="Posez votre question sur votre assurance..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{ width: '300px', padding: '8px', marginRight: '10px' }}
        />
        <button onClick={() => alert(`Message envoyé: ${message}`)}>
          Envoyer
        </button>
      </div>

      <p style={{ marginTop: '2rem', color: '#666' }}>
        Déployé sur Azure Static Web Apps | Environment: {import.meta.env.MODE}
      </p>
    </div>
  )
}

export default App