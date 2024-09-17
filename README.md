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

## Supabase 초기 셋팅

[supabase 페이지](https://supabase.com/)

- DB Password
  프로젝트 생성 시 copy 해서 저장하기

- Project API
  Project Configuration > URL copy

- Anon Key
  브라우저에서 db 쿼리를 할 때 누구간 쿼리를 할 수 있도록 도와주는 API 키 값.
  익명으로 접근할 때 사용되는 키.

- Service Role
  절대 공개되면 안 되는 키.
  서버에서만 사용하는 키.
  어드민 역할을 할 수 있음.
  이번에는 필요가 없어서 따로 저장하진 않음.

## Supabase 설치

```zsh
pnpm i --save @supabase/supabase-js
```

\_\_  
`.env` 파일에 supabase url, uspabase anon key 넣기

```ts
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

\_\_  
package.json에 `generate-types` 커맨드 추가하기

```json
{
  "scripts": {
    # ...
    "generate-types": "pnpx supabase gen types typescript --project-id [project_id] --schema public > types_db.ts"
  }
}
```

[project_id] 부분에는 supabase url의 앞부분 영어 긴 문자열로 바꾸면 된다.

\_\_  
터미널에서 Supabase 로그인 진행 & generate-types 진행

```zsh
pnpx supabase login
pnpm run generate-types
```

여기까지 하고나면 `type_db.ts` 파일이 생긴다.

\_\_  
Supabase client 생성

```ts
import { createClient } from '@supabase/supabase-js';
import { Database } from '../types_db';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

export const supabase = createClient<Database>(supabaseUrl, supabaseKey);
```
`utils` 폴더 만들어서 `supabase.ts` 파일에 넣기.