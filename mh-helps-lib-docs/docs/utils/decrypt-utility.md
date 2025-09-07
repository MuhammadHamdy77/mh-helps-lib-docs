

## 🔐 EncryptDecryptUtility

`EncryptDecryptUtility` هي خدمة Angular داخل **mh-helps-lib** لتشفير وفك تشفير النصوص باستخدام **AES (CBC + PKCS7)**.  
يمكن استخدامها لحماية البيانات قبل التخزين أو الإرسال.

---

## 📦 الاستيراد (Import)

```ts
import { EncryptDecryptUtility } from 'mh-helps-lib';

```markdown
# EncryptDecryptUtility

Secure encryption and decryption.

## Usage
```ts
Use this 
EncryptDecryptUtility.encrypt('my-secret')
EncryptDecryptUtility.encryptURI('my-secret')
EncryptDecryptUtility.decrypt(encrypted)
