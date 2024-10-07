import React, { useState } from 'react'
import { Clipboard, Search, FileDown } from 'lucide-react'
import LicensePlateInput from './components/LicensePlateInput'
import TirePressureForm from './components/TirePressureForm'
import Overview from './components/Overview'

function App() {
  const [currentView, setCurrentView] = useState('input')
  const [licensePlate, setLicensePlate] = useState('')

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">Luchtbrigade Tire Pressure App</h1>
      </header>
      <nav className="bg-blue-500 p-2">
        <button
          className={`mr-2 px-4 py-2 rounded ${currentView === 'input' ? 'bg-white text-blue-500' : 'text-white'}`}
          onClick={() => setCurrentView('input')}
        >
          <Clipboard className="inline-block mr-2" />
          Input
        </button>
        <button
          className={`px-4 py-2 rounded ${currentView === 'overview' ? 'bg-white text-blue-500' : 'text-white'}`}
          onClick={() => setCurrentView('overview')}
        >
          <Search className="inline-block mr-2" />
          Overview
        </button>
      </nav>
      <main className="flex-grow p-4">
        {currentView === 'input' ? (
          <>
            <LicensePlateInput onSubmit={setLicensePlate} />
            {licensePlate && <TirePressureForm licensePlate={licensePlate} />}
          </>
        ) : (
          <Overview />
        )}
      </main>
      <footer className="bg-gray-200 p-4 text-center">
        <button className="bg-green-500 text-white px-4 py-2 rounded">
          <FileDown className="inline-block mr-2" />
          Export Data
        </button>
      </footer>
    </div>
  )
}

export default App