import React, { useState, useEffect } from 'react'
import { X, ArrowRight, Car } from 'lucide-react'
import Step1VehicleNumber from './Step1VehicleNumber'
import Step2OwnerName from './Step2OwnerName'
import Step3Confirmation from './Step3Confirmation'

interface VehicleRegistrationModalProps {
  onClose: () => void
}

export interface VehicleData {
  vehicleNumber: string
  ownerName: string
  vehicleModel?: string
}

const VehicleRegistrationModal: React.FC<VehicleRegistrationModalProps> = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState(1)
  const [vehicleData, setVehicleData] = useState<VehicleData>({
    vehicleNumber: '',
    ownerName: ''
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleVehicleDataUpdate = (data: Partial<VehicleData>) => {
    setVehicleData(prev => ({ ...prev, ...data }))
  }

  const handleConfirm = async () => {
    setIsLoading(true)
    // 실제 API 호출 시뮬레이션
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsLoading(false)
    onClose()
  }

  const handleClose = () => {
    if (currentStep === 1 && !vehicleData.vehicleNumber) {
      onClose()
    } else {
      // 확인 다이얼로그를 표시할 수 있음
      onClose()
    }
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1VehicleNumber
            vehicleNumber={vehicleData.vehicleNumber}
            onVehicleNumberChange={(number) => handleVehicleDataUpdate({ vehicleNumber: number })}
            onNext={handleNext}
          />
        )
      case 2:
        return (
          <Step2OwnerName
            ownerName={vehicleData.ownerName}
            onOwnerNameChange={(name) => handleVehicleDataUpdate({ ownerName: name })}
            onNext={handleNext}
            onBack={handleBack}
          />
        )
      case 3:
        return (
          <Step3Confirmation
            vehicleData={vehicleData}
            onConfirm={handleConfirm}
            onBack={handleBack}
            isLoading={isLoading}
          />
        )
      default:
        return null
    }
  }

  const getStepStatus = (step: number) => {
    if (step < currentStep) return 'completed'
    if (step === currentStep) return 'active'
    return 'inactive'
  }

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">2. 차량 정보 입력</h2>
          <button className="close-button" onClick={handleClose}>
            <X size={24} />
          </button>
        </div>

        <div className="modal-content">
          {/* 단계 표시 */}
          <div className="steps-container">
            <div className="step">
              <div className={`step-circle ${getStepStatus(1)}`}>
                {getStepStatus(1) === 'completed' ? '✓' : '1'}
              </div>
              <span style={{ fontSize: '12px', color: 'var(--bmw-gray)' }}>차량번호</span>
            </div>
            <ArrowRight className="step-arrow" />
            <div className="step">
              <div className={`step-circle ${getStepStatus(2)}`}>
                {getStepStatus(2) === 'completed' ? '✓' : '2'}
              </div>
              <span style={{ fontSize: '12px', color: 'var(--bmw-gray)' }}>소유자명</span>
            </div>
            <ArrowRight className="step-arrow" />
            <div className="step">
              <div className={`step-circle ${getStepStatus(3)}`}>
                {getStepStatus(3) === 'completed' ? '✓' : '3'}
              </div>
              <span style={{ fontSize: '12px', color: 'var(--bmw-gray)' }}>확인</span>
            </div>
          </div>

          {/* 단계별 콘텐츠 */}
          {renderStepContent()}

          {/* 안내 섹션 */}
          <div className="info-section">
            <p className="info-text">
              차량번호와 소유자명을 정확하게 입력해주세요. 차량등록증을 참고하면 쉽게 확인할 수 있습니다.
            </p>
            <div className="example-box">
              소유자명 입력 예시: 비엠더블유파이낸셜서비스코리아(주)
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VehicleRegistrationModal

