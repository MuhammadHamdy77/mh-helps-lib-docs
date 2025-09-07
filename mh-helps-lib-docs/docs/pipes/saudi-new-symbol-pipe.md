
---

### `import { SarCurrencyPipe } from 'mh-helps-lib in ts`
```html
# Sar Currency Pipe change to new Symbol

Format numbers into Saudi Riyal currency.

## Usage
```ts
import { SarCurrencyPipe } from 'mh-helps-lib';
``html
<p>{{ 1500 | sarCurrency }}</p>

<!-- As text -->
<p [innerHTML]="2000 | sarCurrency:'text'"></p>

<!-- As SVG with custom color -->
<p [innerHTML]="1500 | sarCurrency:'svg':'#0a84ff'"></p>
