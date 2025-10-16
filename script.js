// Modal functionality
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.querySelector('.close');

// Modal content data
const modalContent = {
    'registration-deadline': {
        title: '등록 기한 안내',
        content: `
            <h3><b>차량 출고일 기준 1년 이내 등록 필수</b></h3>
            <p>BMW 전기차 충전 서비스 혜택을 받으시려면 <b>반드시 차량 출고일 기준 1년 이내</b>에 BMW Charging App을 통해 회원가입을 완료하셔야 합니다.</p>
            
            <div class="warning-box">
                <strong>중요:</strong> <b>기한 내 미가입 시, 모든 혜택 제공이 불가능합니다.</b>
            </div>
            
            <h3>등록 기한 확인 방법</h3>
            <ol>
                <li>차량 출고일은 <b>차량등록증</b>에서 확인 가능합니다</li>
                <li><b>BMW 딜러</b>를 통해 정확한 출고일을 문의하실 수 있습니다</li>
                <li>등록 기한이 임박한 경우 <b>BMW Charging 고객센터(1600-4087)</b>로 연락하세요</li>
            </ol>
            
            <div class="highlight">
                <b>차량 구매 후 가능한 빨리 BMW Charging App을 설치하고 회원가입을 완료하시는 것을 권장합니다.</b>
            </div>
        `
    },
    'new-car-benefits': {
        title: '신차구매혜택 상세 안내',
        content: `
            <h3><b>차량정보 확인 후 크레딧 지급</b></h3>
            <p>BMW 전기차 충전 서비스 혜택은 <b>차량정보 확인 후 자동으로 지급</b>됩니다. 차량정보 인증이 완료되면 해당 차종에 맞는 크레딧이 자동으로 적립됩니다.</p>
            
            <h3>차종별 적용 기준</h3>
            <ol>
                <li><strong>i7:</strong> <b>2022년 12월 16일 이후</b> 등록 차량</li>
                <li><strong>BMW xEV:</strong> <b>2023년 1월 1일 이후</b> 등록 차량</li>
            </ol>
            
            <div class="info-box">
                <b>참고:</b> 이전 등록 차량은 기존 혜택이 유지됩니다.
            </div>
            
            <h3>크레딧 지급 과정</h3>
            <ol>
                <li><b>BMW Charging App 회원가입 완료</b></li>
                <li><b>차량정보 입력 및 인증</b></li>
                <li><b>차지비 고객센터에서 차량정보 확인 (1-2일 소요)</b></li>
                <li><b>차종별 크레딧 자동 지급</b></li>
            </ol>
            
            <div class="highlight">
                <b>BMW Charging App > MY차지비 > 충전크레딧</b>에서 지급된 크레딧을 확인하실 수 있습니다.
            </div>
        `
    },
    'usage-restrictions': {
        title: '사용 제한 및 주의사항',
        content: `
            <h3><b>구매하신 신차에만 사용 가능</b></h3>
            <p>BMW 전기차 충전 서비스 혜택은 <b>구매하신 신차에만 사용</b>할 수 있습니다. 다른 차량이나 타인에게 양도하는 것은 <b>불가능</b>합니다.</p>
            
            <h3>금지되는 사용 행위</h3>
            <ol>
                <li><strong>동시 충전:</strong> <b>여러 차량을 동시에 충전하는 행위</b></li>
                <li><strong>연속 충전:</strong> <b>비정상적으로 연속적인 충전 행위</b></li>
                <li><strong>원거리 충전:</strong> <b>차량과 거리가 먼 충전기에서의 충전</b></li>
                <li><strong>타인 양도:</strong> <b>충전카드나 계정을 타인에게 양도하는 행위</b></li>
                <li><strong>상업적 이용:</strong> <b>상업적 목적으로 충전 서비스를 이용하는 행위</b></li>
            </ol>
            
            <div class="warning-box">
                <b>서비스 제재:</b> 위반 시 <b>충전 프로그램 회수, 계정 영구정지</b> 등의 제재가 적용될 수 있습니다.
            </div>
            
            <h3>정상 사용 가이드</h3>
            <ol>
                <li><b>본인 소유 차량에서만</b> 충전 이용</li>
                <li><b>충전 완료 후 즉시</b> 차량 이동</li>
                <li><b>충전카드 분실 시 즉시</b> 신고</li>
                <li><b>정기적인 충전 패턴</b> 유지</li>
            </ol>
            
            <div class="highlight">
                <b>보안:</b> 충전카드는 <b>개인정보와 연결</b>되어 있으므로 안전하게 보관하시기 바랍니다.
            </div>
        `
    },
    'join-step-1': {
        title: '1. BMW Charging App 설치',
        content: `
            <img src="이미지 파일/앱 이미지.png" alt="BMW Charging 앱 아이콘" style="width:72px;height:72px;display:block;margin:0 auto 16px;border-radius:16px;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="display:flex;gap:12px;justify-content:center;margin-bottom:16px;flex-wrap:wrap;">
              <a href="https://apps.apple.com/kr/app/bmw-charging/id6446106472" target="_blank" class="btn btn-primary" style="background:#003366;min-width:140px;margin-bottom:6px;">
                <i class="fab fa-apple"></i> iPhone 다운로드
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.chargev.bmw" target="_blank" class="btn btn-primary" style="background:#003366;min-width:140px;margin-bottom:6px;">
                <i class="fab fa-google-play"></i> Android 다운로드
              </a>
            </div>
            <p>App Store 또는 Google Play에서 <b>BMW Charging App</b>을 검색하여 설치하세요.</p>
        `
    },
    'join-step-2': {
        title: '2. 차량 정보 입력',
        content: `
            <div style="display:flex;justify-content:center;margin-bottom:16px;">
                <img src="이미지 파일/2. 차량 정보 입력.png" alt="차량 정보 입력" style="width:100%;max-width:350px;border-radius:10px;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            </div>
            <p><b>차량번호</b>와 <b>소유자명</b>을 정확하게 입력해주세요.<br>차량등록증을 참고하면 쉽게 확인할 수 있습니다.</p>
            <div style="background:#f8f9fa;border-radius:8px;padding:10px 14px;margin-top:8px;font-size:0.98rem;">
                <b>소유자명 입력 예시:</b> 비엠더블유파이낸셜서비스코리아(주)
            </div>
        `
    },
    'join-step-3': {
        title: '3. 충전카드 등록',
        content: `
            <div style="display:flex;justify-content:center;align-items:center;gap:18px;margin-bottom:12px;flex-wrap:wrap;">
                <img src="이미지 파일/3. 충전카드 등록.png" alt="충전카드 등록 예시" style="width:100%;max-width:110px;display:block;margin-right:36px;">
                <div style="display:flex;flex-direction:column;align-items:center;gap:18px;">
                    <span style="font-size:1.05rem;color:#003366;font-weight:700;margin-bottom:2px;">카드형</span>
                    <div style="display:flex;gap:18px;align-items:flex-end;">
                        <img src="이미지 파일/참고. 충전카드(카드형).png" alt="충전카드 카드형" style="width:100%;max-width:80px;border-radius:3px;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
                        <img src="이미지 파일/참고. 충전카드(I7 카드형).png" alt="충전카드 I7 카드형" style="width:100%;max-width:80px;border-radius:3px;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
                    </div>
                    <span style="font-size:1.05rem;color:#003366;font-weight:700;margin:14px 0 2px 0;">키링형</span>
                    <img src="이미지 파일/참고. 충전카드(키링형).png" alt="충전카드 키링형" style="width:100%;max-width:60px;border-radius:10px;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
                </div>
            </div>
            <p>회원가입 시 <b>충전카드</b> 등록은 필수입니다.<br>앱에서 충전카드 번호 16자리를 입력하고 등록을 완료하세요.</p>
        `
    },
    'join-step-4': {
        title: '4. 승인 완료',
        content: `
            <p style="font-size:1.08rem;text-align:left;margin-bottom:8px;">등록된 차량 정보 확인 후, <b>신차 구매 혜택</b>이 지급됩니다.</p>
            <div style="display:flex;justify-content:center;margin-bottom:16px;">
                <img src="이미지 파일/4. 신차구매혜택.png" alt="신차구매혜택" style="width:100%;max-width:120px;border-radius:10px;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            </div>
            <p style="margin-top:8px;font-size:0.98rem;">※ 단일 상품의 경우 자동지급됩니다.</p>
            <div style="margin-top:18px;">
                <div style="margin-bottom:10px;font-weight:600;color:#003366;">[1] 충전 크레딧 선택 시 유의사항</div>
                <ul style="font-size:0.98rem;line-height:1.7;margin-bottom:14px;">
                    <li>지급된 크레딧은 BMW Charging 앱에서 확인 및 사용 가능합니다.</li>
                    <li>일부 충전소에서는 사용이 제한될 수 있습니다.</li>
                    <li>유효기간 내 사용하지 않으면 자동 소멸됩니다.</li>
                </ul>
                <div style="margin-bottom:10px;font-weight:600;color:#003366;">[2] 홈충전기 설치 선택 시 유의사항</div>
                <ul style="font-size:0.98rem;line-height:1.7;">
                    <li>설치 전 전문 설치업체에서 별도 연락을 드립니다.</li>
                    <li>설치 주소와 연락처 정보를 정확히 입력해 주세요.</li>
                    <li>설치 가능 여부는 현장 점검 결과에 따라 달라질 수 있습니다.</li>
                </ul>
            </div>
        `
    },
    'anti-abuse': {
        title: '이용 시 유의사항 (부정사용 금지)',
        content: `
            <h3>부정사용 금지</h3>
            <ul>
                <li>타인에게 충전카드 또는 계정을 양도하는 행위</li>
                <li>상업적 목적(재판매, 대여 등)으로 충전 서비스를 이용하는 행위</li>
                <li>동시 충전, 연속 충전 등 비정상적인 충전 패턴</li>
                <li>허위 정보 등록, 부정한 방법으로 혜택을 취득하는 행위</li>
            </ul>
            <div class="warning-box">
                위와 같은 부정사용이 적발될 경우, 서비스 이용이 제한되거나 계정이 영구 정지될 수 있습니다.
            </div>
            <div class="highlight">
                BMW Charging 서비스는 구매하신 신차에 한해 정상적으로 이용해 주세요.
            </div>
        `
    },
    'roaming-detail': {
        title: '로밍 충전요금 상세 안내',
        content: `
            <h3><b>로밍 충전요금 할인 (Special Tariff)</b></h3>
            <ul>
                <li><b>적용 대상:</b> <b>차지비와 제휴된 로밍 충전사(민간 제휴사)</b></li>
                <li><b>요금:</b> <b>315원/kWh</b> (2023.08.01 기준, BMW 충전 포인트 결제 시)</li>
            </ul>
            <h4 style="margin-top:18px;"><b>미적용 대상(일반 요금 적용)</b></h4>
            <ul>
                <li><b>차지비(일반요금)</b></li>
                <li><b>환경부(50kW 324.4원, 그 외 347.2원)</b></li>
                <li><b>한국전력(400원)</b></li>
                <li><b>제주도청(320원)</b></li>
            </ul>
            <div class="info-box">
                <b>상기 요금은 BMW 충전 포인트 결제 시에만 유효</b>하며, 포인트 및 혜택 소진 이후에는 <b>일반 로밍 요금이 적용</b>됩니다.<br>
                <b>충전요금 할인은 시장 상황에 따라 변동</b>될 수 있습니다.
            </div>
            <div class="highlight">
                자세한 내용은 <a href="https://www.gschargev.co.kr/mobile/mobile_cost_notice" target="_blank" style="color:#003366;text-decoration:underline;font-weight:500;"><b>공식 안내 페이지</b></a>를 참고하세요.
            </div>
        `
    },
    'pnc-detail': {
        title: 'PnC(Plug & Charge) 가입 상세 안내',
        content: `
            <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-bottom:16px;">
                <img src="이미지 파일/bmw 앱 메인 이미지.jpg" alt="앱 메인" style="width:100%;max-width:110px;border-radius:10px;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
                <img src="이미지 파일/bmw 앱 화면1.png" alt="PnC 메뉴" style="width:100%;max-width:110px;border-radius:10px;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            </div>
            <ol style="font-size:1.05rem;line-height:2;">
                <li><b>BMW Charging App에 로그인</b> 후 차량 이미지를 클릭</li>
                <li><b>PnC 서비스 이용 가능 여부</b> 확인</li>
                <li><b>PnC 서비스 신청 및 약관</b> 확인</li>
                <li><b>PnC 서비스 계약 완료</b></li>
            </ol>
            <div class="info-box" style="margin-top:12px;"><b>PnC는 지원 차량에 한해 제공</b>됩니다.<br>중고차량의 PnC 가입 방법은 <b>고객센터로 문의</b> 주세요.<br>자세한 내용은 <b>고객센터로 문의</b>하세요.</div>
        `
    },
    'coupon-detail': {
        title: '쿠폰 구매 안내',
        content: `
            <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-bottom:16px;">
                <img src="이미지 파일/bmw 앱 로그인 화면.png" alt="앱 로그인" style="width:100%;max-width:110px;border-radius:10px;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
                <img src="이미지 파일/bmw 앱 화면1.png" alt="쿠폰 메뉴" style="width:100%;max-width:110px;border-radius:10px;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            </div>
            <ol style="font-size:1.05rem;line-height:2;">
                <li><b>BMW Charging App에 로그인</b></li>
                <li><b>MY차지비</b> &gt; <b>충전쿠폰</b> 메뉴 선택</li>
                <li><b>원하는 쿠폰을 선택하고 결제 진행</b></li>
                <li><b>구매한 쿠폰은 앱 내에서 바로 사용 가능</b>합니다</li>
            </ol>
            <div class="info-box" style="margin-top:12px;"><b>쿠폰 종류 및 가격은 앱 내에서 확인</b>할 수 있습니다. 자세한 내용은 <b>고객센터로 문의</b>하세요.</div>
        `
    },
    'charging-station-detail': {
        title: 'BMW 차징스테이션 소개',
        content: `
            <h3>BMW 차징허브라운지</h3>
            <p style="font-size:1.05rem;line-height:1.8;margin-bottom:12px;">BMW 그룹 코리아의 전 세계 첫 라운지형 급속 충전소인 BMW 차징 허브 라운지는 전기차 충전과 카페를 동시에 이용할 수 있는 특화된 전기차 충전소입니다.</p>
            <div style="display:flex;justify-content:center;align-items:center;gap:20px;margin-bottom:16px;width:100%;">
                <img src="이미지 파일/참고. BMW 차징허브라운지" alt="BMW 차징허브라운지" style="max-width:240px;max-height:160px;width:auto;height:auto;border-radius:10px;box-shadow:0 2px 8px rgba(0,0,0,0.08);object-fit:cover;">
                <img src="이미지 파일/참고. BMW 차징허브라운지2" alt="BMW 차징허브라운지2" style="max-width:240px;max-height:160px;width:auto;height:auto;border-radius:10px;box-shadow:0 2px 8px rgba(0,0,0,0.08);object-fit:cover;">
            </div>
            <div class="highlight" style="margin-bottom:16px;">
                <a href="https://blog.naver.com/gschargev/223753561274" target="_blank" style="color:#003366;text-decoration:underline;font-weight:500;">차징허브라운지 상세 안내 보기</a>
            </div>
            <h3>BMW 차징스테이션 특징</h3>
            <ul style="font-size:1.05rem;line-height:2;">
                <li>BMW 전용 충전기로 안전하고 빠른 충전</li>
                <li>BMW Charging App으로 간편한 결제 및 이용</li>
                <li>전국 주요 지역에 설치된 BMW 차징스테이션</li>
                <li>24시간 이용 가능한 편리한 서비스</li>
            </ul>
            <h3>이용 방법</h3>
            <ol style="font-size:1.05rem;line-height:2;">
                <li>BMW Charging App에서 주변 충전기 검색</li>
                <li>원하는 BMW 차징스테이션 선택</li>
                <li>충전기에서 BMW Charging App으로 결제</li>
                <li>충전 완료 후 즉시 이용 가능</li>
            </ol>
            <div class="info-box" style="margin-top:12px;">BMW 차징스테이션 위치 및 상세 정보는 BMW Charging App에서 확인하실 수 있습니다.<br>자세한 내용은 고객센터로 문의하세요.</div>
        `
    }
};

document.addEventListener('DOMContentLoaded', function() {
    // Event listeners ([data-modal] 속성이 있는 모든 요소)
    document.querySelectorAll('[data-modal]').forEach(card => {
        // Accessibility hints
        if (!card.hasAttribute('tabindex')) card.setAttribute('tabindex', '0');
        if (!card.hasAttribute('role')) card.setAttribute('role', 'button');
        card.setAttribute('aria-pressed', 'false');
        card.addEventListener('click', function(e) {
            e.preventDefault();
            const modalType = this.getAttribute('data-modal');
            const content = modalContent[modalType];
            if (content) {
                modalTitle.textContent = content.title;
                modalBody.innerHTML = content.content;
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
                this.setAttribute('aria-pressed', 'true');
            }
        });
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });

    // Close modal
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        document.querySelectorAll('[data-modal][aria-pressed="true"]').forEach(el => el.setAttribute('aria-pressed', 'false'));
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add loading animation to cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    document.querySelectorAll('.service-card, .step, .note-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}); 