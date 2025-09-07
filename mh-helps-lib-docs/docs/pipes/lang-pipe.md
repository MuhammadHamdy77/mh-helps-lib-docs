# Lang Pipe

Switch text automatically between Arabic and English.

## Usage
```ts
import { LangPipe } from 'mh-helps-lib';

``html
<p>{{ user | lang:'name' }}</p>

// If currentLang = ar → user.nameAr
// If currentLang = en → user.nameEn