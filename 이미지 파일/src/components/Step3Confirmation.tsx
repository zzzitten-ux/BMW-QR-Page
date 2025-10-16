import React, { useState, useEffect } from 'react'
import { Car } from 'lucide-react'
import { VehicleData } from './VehicleRegistrationModal'

interface Step3ConfirmationProps {
  vehicleData: VehicleData
  onConfirm: () => void
  onBack: () => void
  isLoading: boolean
}

const Step3Confirmation: React.FC<Step3ConfirmationProps> = ({
  vehicleData,
  onConfirm,
  onBack,
  isLoading
}) => {
  const [vehicleModel, setVehicleModel] = useState<string>('')
  const [isLoadingModel, setIsLoadingModel] = useState(true)

  // 차량번호로 차량 모델 정보 조회 시뮬레이션
  useEffect(() => {
    const fetchVehicleModel = async () => {
      setIsLoadingModel(true)
      // 실제 API 호출 시뮬레이션
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // 차량번호에 따른 모델 매핑 (실제로는 API에서 조회)
      const modelMapping: { [key: string]: string } = {
        '12가 3456': 'BMW X5 xDrive40i',
        '34나 5678': 'BMW 3 Series 320i',
        '56다 7890': 'BMW 5 Series 520d',
        '78라 1234': 'BMW X3 xDrive30e',
        '90마 5678': 'BMW i4 eDrive40'
      }
      
      setVehicleModel(modelMapping[vehicleData.vehicleNumber] || 'BMW X5 xDrive40i')
      setIsLoadingModel(false)
    }

    if (vehicleData.vehicleNumber) {
      fetchVehicleModel()
    }
  }, [vehicleData.vehicleNumber])

  return (
    <div>
      {/* 차량 정보 미리보기 */}
      <div className="vehicle-preview">
        {isLoadingModel ? (
          <div className="loading">
            <div className="spinner"></div>
            <span style={{ marginLeft: '12px', color: 'var(--bmw-gray)' }}>
              차량 정보를 조회하고 있습니다...
            </span>
          </div>
        ) : (
          <>
            <div className="vehicle-model">{vehicleModel}</div>
            <div className="vehicle-image">
              <Car size={48} />
            </div>
            <div style={{ color: 'var(--bmw-gray)', fontSize: '14px' }}>
              차량번호: {vehicleData.vehicleNumber}
            </div>
            <div style={{ color: 'var(--bmw-gray)', fontSize: '14px' }}>
              소유자: {vehicleData.ownerName}
            </div>
          </>
        )}
      </div>

      {/* 확인 버튼 */}
      <div className="button-group">
        <button 
          className="button button-secondary"
          onClick={onBack}
          disabled={isLoading}
        >
          다시 입력하기
        </button>
        <button 
          className="button button-primary"
          onClick={onConfirm}
          disabled={isLoading || isLoadingModel}
          style={{ 
            opacity: (isLoading || isLoadingModel) ? 0.6 : 1,
            cursor: (isLoading || isLoadingModel) ? 'not-allowed' : 'pointer'
          }}
        >
          {isLoading ? (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div className="spinner" style={{ width: '16px', height: '16px', marginRight: '8px' }}></div>
              처리 중...
            </div>
          ) : (
            '확인'
          )}
        </button>
      </div>
    </div>
  )
}

export default Step3Confirmation

