---
id: validators
title: Custom Validators
---

## 📝 CustomValidators

`CustomValidators` هي مجموعة من **Angular Validators** مخصصة للتحقق من القيم في الـ forms مثل أرقام الهواتف، النصوص العربية/الإنجليزية، وتأكيد كلمات المرور.

---

## 📦 الاستيراد (Import)

```ts
import { CustomValidators } from 'mh-helps-lib';

1️⃣ Saudi Number
formControl.setValidators(CustomValidators.saudiNumber()); يتحقق أن الرقم يبدأ بـ 5 ويتبعه 8 أرقام.


2️⃣ Egyptian Number
formControl.setValidators(CustomValidators.egyptianNumber()); يتحقق أن الرقم يبدأ بـ 010, 011, 012 أو 015 ويتبعه 8 أرقام.


3️⃣ Arabic Validator
formControl.setValidators(CustomValidators.ArabicValidator());
يتحقق أن النص يحتوي على الحروف العربية + رموز مسموحة.
ترجع {'ArabicValidator': 'ArabicValidatorMsg'} إذا كان النص غير مطابق.


4️⃣ English Validator
formControl.setValidators(CustomValidators.EnglishValidator());
يتحقق أن النص يحتوي على الحروف الإنجليزية + رموز مسموحة.
ترجع {'EnglishValidator': 'EnglishValidatorMsg'} إذا كان النص غير مطابق.


5️⃣ Confirm Password
CustomValidators.confirmPassword('password', 'confirmPassword');
يتحقق أن كلمة المرور و تأكيد كلمة المرور متطابقين.
مثال في FormGroup:

this.form = this.fb.group({
  password: ['', Validators.required],
  confirmPassword: ['', Validators.required]
}, {
  validators: CustomValidators.confirmPassword('password', 'confirmPassword')
});


⚡ Usage Example (Angular Reactive Forms)

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'mh-helps-lib';

this.form = this.fb.group({
  saudiPhone: ['', CustomValidators.saudiNumber()],
  egyptPhone: ['', CustomValidators.egyptianNumber()],
  arabicName: ['', CustomValidators.arabicOnly()],
  password: ['', Validators.required],
  confirmPassword: ['', Validators.required]
}, {
  validators: CustomValidators.confirmPassword('password', 'confirmPassword')
});
