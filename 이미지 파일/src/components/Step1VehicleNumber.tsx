import React, { useState } from 'react'
import { Car } from 'lucide-react'

interface Step1VehicleNumberProps {
  vehicleNumber: string
  onVehicleNumberChange: (number: string) => void
  onNext: () => void
}

const Step1VehicleNumber: React.FC<Step1VehicleNumberProps> = ({
  vehicleNumber,
  onVehicleNumberChange,
  onNext
}) => {
  const [error, setError] = useState('')

  const validateVehicleNumber = (number: string): boolean => {
    // 한국 차량번호 형식 검증 (예: 12가 3456, 123가 4567)
    const pattern = /^\d{2,3}[가-힣]\s\d{4}$/
    return pattern.test(number)
  }

  const handleVehicleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    onVehicleNumberChange(value)
    
    if (value && !validateVehicleNumber(value)) {
      setError('올바른 차량번호 형식으로 입력해주세요 (예: 12가 3456)')
    } else {
      setError('')
    }
  }

  const handleNext = () => {
    if (!vehicleNumber) {
      setError('차량번호를 입력해주세요')
      return
    }
    
    if (!validateVehicleNumber(vehicleNumber)) {
      setError('올바른 차량번호 형식으로 입력해주세요')
      return
    }
    
    onNext()
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleNext()
    }
  }

  return (
    <div>
      <div className="form-group">
        <label className="form-label">차량번호</label>
        <input
          type="text"
          className="form-input"
          placeholder="123가 1234"
          value={vehicleNumber}
          onChange={handleVehicleNumberChange}
          onKeyPress={handleKeyPress}
          maxLength={10}
        />
        {error && <div className="error-message">{error}</div>}
      </div>

      <button 
        className="button button-primary"
        onClick={handleNext}
        disabled={!vehicleNumber || !!error}
        style={{ 
          width: '100%',
          opacity: (!vehicleNumber || !!error) ? 0.6 : 1,
          cursor: (!vehicleNumber || !!error) ? 'not-allowed' : 'pointer'
        }}
      >
        차량 정보 입력
      </button>
    </div>
  )
}

export default Step1VehicleNumber

