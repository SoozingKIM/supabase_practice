# supabase_practice

## Firebase
Baas (basckend as a Service)

서버 없이도 빠르게 앱을 출시할 수 있도록 나온 백엔드 플랫폼


### 장점
- 다양한 서비스와 폭넓은 연동 지원
- 적용이 매우 쉽고 문서화가 잘 되어있음
- 커뮤니티가 매우 성숙
- 앱, 웹에서 단순히 사용할 수 있는 NoSQL 기반

### 단점
- 오픈소스가 아님 (Vendor Lock-In)
- 복잡한 쿼리 불가 (NoSQL 기반)
- 유저가 많아졌을 때 비용이 많이 든다
- 앱 개발에는 월등히 좋으나 웹 개발에 최적은 아님

## Supabase
오픈소스

### 핵심 기능
- Database
- Authentication
- Storage
- Realtime

### 장점
- 오픈소스 프로젝트 (자체 서버구축 가능)
- PostgreSQL 기반 (관계형 DB 장점을 살릴 수 있다)
- Firebase 대비 저렴
- 다양한 연동방식 지원 (GraphQL, SDK, DB connection)


### 단점
- 아직 성숙하지 않은 커뮤니티 기반
- 비교적 적은 기능들, 적은 서비스 연동 지원
- 부족한 문서화, 한글 문서 부족
- Firebase보다 높은 러닝커브

### Supabase가 좋은 이유

- 개인 또는 소규모 팀이 풀스택 개발을 하는데 필요한 대부분의 것들이 갖춰져있다.
- 스타트업 or 개인 프로젝트 특성상 복잡한 요구사항이 생기기 쉬운데, 이를 대응하기가 훨씬 용이하다.
- 보안상의 이슈로 직접 서버구축을 해야할 때, Supabase는 비교적 쉽게 이전이 가능하다. (Vendor Loci-In 이슈가 없다는 것이 정말 큰 장점)