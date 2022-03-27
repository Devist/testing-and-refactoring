## Case3 : React, Storybook, Jest를 이용한 TDD 개발(컴포넌트 연동)

### 케이스 주제

제품의 상세페이지가 담겨있는 페이지를 Storybook을 이용해 구현하고,  
Jest를 이용하여 검증가능한 코드를 만든다.
Case2에서 기능을 확장한다. => discount 컴포넌트 구현

### 기능 요구사항

1. 할인

- 사용자 포인트를 통해 주문금액에서 할인을 받을 수 있다.
- 제시된 쿠폰을 이용해서 할인을 받을 수 있다.

`./src/__fixtures__/coupons.json`
