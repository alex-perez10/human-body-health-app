import { useState } from "react";
import "./App.css";
import { Home, MessageCircle,Bookmark, Settings } from 'lucide-react'
import Model from 'react-body-highlighter'

function App() {
  const [view, setView] = useState('front')
  const [selectedPart, setSelectedPart] = useState(null)
  return (
    <div className="app">

      {/* Header */}
      <div className="header">
        <h1>Click On Body Part For Information</h1>
      </div>

      {/* Front Back Toggle */}
      <div className="toggle">
        <h3>Change View</h3>
        <button className={view === 'front' ? 'toggle-btn active': 'toggle-btn'} onClick={() => setView('front')}>Front View</button>
        <button className={view === 'back' ? 'toggle-btn active': 'toggle-btn'} onClick={() => setView('back')}>Back View</button>
      </div>

<p>Current view:{view}</p>
{/* Temporary body part buttons */}
      <div>
        <button onClick={() => setSelectedPart('Head')}>Head</button>
        <button onClick={() => setSelectedPart('Neck')}>Neck</button>
        <button onClick={() => setSelectedPart('Back')}>Back</button>
        <button onClick={() => setSelectedPart('Legs')}>Legs</button>
      </div>
      <p>Selected Part:{selectedPart}</p>
      {/* Body Diagram Section*/}
      <div className="diagram-container">
        <Model
  onClick={(part) => setSelectedPart(part.muscle)}
  type="anterior"
  style={{ width: '250px', height: 'auto' }}
  data={selectedPart ? [{ name: 'selected', muscles: [selectedPart] }] : []}

/>
      </div>

      {/* AI Chat Section */}
      <div className="chat-box">
        <h3>AI Chat</h3>
        <p>You asked about: {selectedPart}</p>
        <div className="chat-message">
          Hello! I see you're asking about the {selectedPart} What would you like to know?
        </div>
      </div>

      {/* Bottom Scroll Bar */}
      <div className="bottom-layout">
  <div className="bottom-button">
    <Home size={22} />
    <span>Home</span>
  </div>
  <div className="bottom-button">
    <MessageCircle size={22} />
    <span>AI Chat</span>
  </div>
  <div className="bottom-button">
    <Bookmark size={22} />
    <span>Saved Chats</span>
  </div>
  <div className="bottom-button">
    <Settings size={22} />
    <span>Settings</span>
  </div>
</div>
</div>
  );
}

export default App;