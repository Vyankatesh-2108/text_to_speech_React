import './App.css';
import { useSpeechSynthesis } from 'react-speech-kit'
import { useState } from 'react';

function App() {
  const [text, setText] = useState('')
  const { speak, cancel } = useSpeechSynthesis();

  const handleOnClick = () => {
    speak({ text: text });
  };

  const handleStopClick = () => {
    cancel();
  };

  const handleClearClick = () => {
    setText('')
  };

  return (
    <div>
      <h1 className='header'>Text To Speech Converter</h1>
      <textarea className="textAreaStyle" placeholder='Type Here..!' value={text} onChange={(e) => { setText(e.target.value) }}></textarea>
      <button className="buttonStyle" onClick={handleOnClick}>Listen</button>
      <button className="buttonStyle" onClick={handleStopClick}>Stop</button>
      <button className="buttonStyle" onClick={handleClearClick}>Clear Text</button>
    </div>
  );
}

export default App;
