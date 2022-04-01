## Case9 : Mobx4 → Mobx6 로 마이그레이션 하기​

### 환경

React, next.js, Mobx

### 케이스 주제

Mobx의 최신버전인 Mobx6가 IE11 을 지원하지 않아 어쩔 수 없이 구버전인 Mobx4로 구현했지만 얼마전 IE11 지원 종료 발표에 맞춰
IE11을 버리고 Mobx6로 마이그레이션 하기

### 기능 요구사항

1. Class Component, Mobx4 로 구성된 레거시한 구성을 React hook, Mobx6의 최신 구성으로 변경

### 문제

Mobx4의 레거시한 설정과 스토어 방식을 Mobx6로 마이그레이션 한다
