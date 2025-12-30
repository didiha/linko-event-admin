# 📌 Event Admin Page (Frontend)

## 🧩 프로젝트 개요
이 프로젝트는 **이벤트(대회) 생성 및 관리용 어드민 페이지**를 구현하는 프론트엔드 과제입니다.  
디자인 시안(Figma)을 기반으로 실제 운영 환경을 고려한 **관리자 UI/UX**를 목표로 개발하고 있습니다.

---

## 🛠️ 기술 스택

### Frontend
- React 18.2.0
- Create React App (react-scripts 5.0.1)
- styled-components 6.1.19
- JavaScript (ES6+)

### Runtime
- Node.js 16.13.2 (LTS)

---

## ❓ CRA(Create React App)를 사용한 이유
이번 프로젝트는 **빌드 설정이나 프레임워크 구조보다는 UI 구현과 컴포넌트 설계에 집중**하는 것이 목적이었기 때문에 CRA를 선택했습니다.

- 초기 설정 없이 바로 개발을 시작할 수 있음
- Webpack, Babel 등의 설정을 직접 다루지 않아도 됨
- 과제 성격상 **빠른 구현과 안정성**이 중요
- React 기본 구조를 가장 명확하게 보여줄 수 있음

👉 즉, **학습 목적 + 과제 목적에 가장 적합한 선택**이라고 판단했습니다.

---

## 📂 프로젝트 구조 (요약)

```bash
src/
 ├─ components/        # 공통 UI 컴포넌트
 │   └─ common/
 │   └─ icon/
 │   └─ layout/
 ├─ features/          # 이벤트 생성 관련 도메인 단위 기능
 │   └─ event/
 │      ├─ components/
 │      │     └─ fields/
 │      │           └─ editor/
 │      │           └─ preview/
 │      ├─ hooks/
 │      └─ pages/
 │      └─ utils/
 └─ App.jsx

## ✅ 현재까지 구현한 기능

### 1. 레이아웃 구성
- 사이드바 + 메인 콘텐츠 구조
- 관리자 페이지에 적합한 고정 레이아웃 설계
- Flex 기반 반응형 정렬

### 2. 이벤트 생성 페이지
- 이벤트명 입력
- 이벤트 설명 (Textarea 자동 높이 조절)
- 대회 기간 / 신청 기간 필드
- 대회 장소, 주관사, 후원사 입력
- 참가 공통 기념품 입력 및 이미지 업로드 영역

### 3. UI/UX 디테일
- Figma 디자인 기반 픽셀 단위 맞춤 구현
- 버튼 활성 / 비활성 상태 처리
- hover / focus 상태 스타일링
- textarea 자동 리사이즈 처리
- styled-components를 활용한 재사용 가능한 UI 컴포넌트 설계

---

## 🎯 작업 방향성
- 디자인 시안과 최대한 동일한 결과물 구현
- 실제 관리자 사용성을 고려한 인터랙션 설계
- 컴포넌트 단위 분리로 유지보수성 확보
