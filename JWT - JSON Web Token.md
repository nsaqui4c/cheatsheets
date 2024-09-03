* JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object.
* JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.
* Whenever the user wants to access a protected route or resource, the user agent should send the JWT, typically in the Authorization header using the Bearer schema. 
  * The content of the header should look like the following:
  ```
  Authorization: Bearer <token>
  
  ```
 ### How it works:
 * we send a payload containing Header,payload (hashed by algorythm).
 * This hash is known and can be easily de-hashed.
 * But we also send a signature with the payload which is encypted using secret key and consuming the payload data.
 * since payload also contain iat and exp (initialtion and expiration time), the signed code is unique, and cannot be replicated without the secret key.
 * therefore eventhough people can see payload they cannot create and send token with different expiration time.
 * on server side we again encrypt the token received from front end and compare it with signature received to autorize person,

### JSON Web Token structure
In its compact form, JSON Web Tokens consist of three parts separated by dots (.), which are: xxxxx.yyyyy.zzzzz
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```
* Header
```
{
  "alg": "HS256",
  "typ": "JWT"
}
```
* Payload
```
{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true
}
```
* Signature
* This 3rd party is the security
* this hash is created by hashing, header and payload with a secret key(stored in server).
* Even if hacker can get payload and header, they cannot create same signature without having secret key
  * To create the signature part you have to take the encoded header, the encoded payload, a secret, the algorithm specified in the header, and sign that using the secret.
 
