import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from "react-use-clipboard";
import './style.css'

const App = () => {
  const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-UK' });
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();
  const [isCopied, setCopied] = useClipboard(transcript);

  if (!browserSupportsSpeechRecognition) {
    return null
  }

  return (
    <>
        <div className= 'container mx-auto p-4 w-full justify-center items-center p-10 pt-8 border-4 border-indigo-500/100 rounded-md'>
          <h2 className='text-2xl font-bold mb-4'>Speech To Text </h2>
          <br/>

          <p className='mb-4'>A React Hook that converts speech from microphone to text</p>

          <div>
            <div className='main-content'>
              {transcript}
            </div>
          </div>

          <div className='btn-style space-x-4'>
            <button className='bg-blue-500 text-white px-4 py-2 rounded' onClick={setCopied}>
            {isCopied ? "Copied!" : "Copy to clipboard"}
            </button>
            <button className='bg-green-500 text-white px-4 py-2 rounded' onClick={startListening}>Start Listening</button>
            <button className='bg-red-500 text-white px-4 py-2 rounded' onClick={SpeechRecognition.stopListening}>Stop Listening</button>
          </div>
        </div>
    </>
  )
}


export default App;
