import React, { useState } from 'react'
import VehicleRegistrationModal from './components/VehicleRegistrationModal'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="App">
      <div style={{ textAlign: 'center', padding: '40px' }}>
        <h1 style={{ color: 'var(--bmw-blue)', marginBottom: '20px' }}>
          BMW QR 차량등록 시스템
        </h1>
        <p style={{ color: 'var(--bmw-gray)', marginBottom: '40px' }}>
          QR 코드를 스캔하여 차량 정보를 등록하세요
        </p>
        <button 
          className="button button-primary"
          onClick={() => setIsModalOpen(true)}
        >
          차량 정보 입력 시작
        </button>
      </div>

      {isModalOpen && (
        <VehicleRegistrationModal 
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  )
}

export default App

