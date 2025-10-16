import React, { useState } from 'react'

interface Step2OwnerNameProps {
  ownerName: string
  onOwnerNameChange: (name: string) => void
  onNext: () => void
  onBack: () => void
}

const Step2OwnerName: React.FC<Step2OwnerNameProps> = ({
  ownerName,
  onOwnerNameChange,
  onNext,
  onBack
}) => {
  const [error, setError] = useState('')

  const validateOwnerName = (name: string): boolean => {
    // 소유자명은 2글자 이상, 특수문자 제한
    const pattern = /^[가-힣a-zA-Z\s()(주)(유)(합)(기)(사)]{2,50}$/
    return pattern.test(name)
  }

  const handleOwnerNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    onOwnerNameChange(value)
    
    if (value && !validateOwnerName(value)) {
      setError('올바른 소유자명을 입력해주세요')
    } else {
      setError('')
    }
  }

  const handleNext = () => {
    if (!ownerName) {
      setError('소유자명을 입력해주세요')
      return
    }
    
    if (!validateOwnerName(ownerName)) {
      setError('올바른 소유자명을 입력해주세요')
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
        <label className="form-label">소유자명</label>
        <input
          type="text"
          className="form-input"
          placeholder="소유자명을 입력하세요"
          value={ownerName}
          onChange={handleOwnerNameChange}
          onKeyPress={handleKeyPress}
          maxLength={50}
        />
        {error && <div className="error-message">{error}</div>}
      </div>

      <div className="button-group">
        <button 
          className="button button-secondary"
          onClick={onBack}
        >
          이전
        </button>
        <button 
          className="button button-primary"
          onClick={handleNext}
          disabled={!ownerName || !!error}
          style={{ 
            opacity: (!ownerName || !!error) ? 0.6 : 1,
            cursor: (!ownerName || !!error) ? 'not-allowed' : 'pointer'
          }}
        >
          다음
        </button>
      </div>
    </div>
  )
}

export default Step2OwnerName

