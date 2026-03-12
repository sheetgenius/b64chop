# b64chop

**Base64 encoder and decoder — browser-only, nothing uploaded.**

## What it does

b64chop encodes any text or binary file to Base64, and decodes Base64 back to text or binary. Supports standard Base64 (RFC 4648 §4) and URL-safe Base64 (RFC 4648 §5). All processing runs in the browser via `btoa`/`atob` and the FileReader API — no server is involved.

## Input / Output

**Encode (text → Base64)**
- Input: any UTF-8 text string
- Output: Base64-encoded string (standard or URL-safe)

**Decode (Base64 → text)**
- Input: Base64 string (standard or URL-safe)
- Output: decoded UTF-8 text, or binary byte count if not valid UTF-8

## How an agent can use this

This is a static browser tool — there is no API endpoint. For programmatic Base64 encoding/decoding, use your runtime's built-in:

- **JavaScript/Node**: `Buffer.from(str).toString('base64')` / `Buffer.from(b64, 'base64').toString()`
- **Python**: `import base64; base64.b64encode(data)` / `base64.b64decode(s)`
- **Ruby**: `Base64.encode64(str)` / `Base64.decode64(s)`
- **Shell**: `echo -n "text" | base64` / `echo "b64" | base64 -d`

**URL-safe variant**: Replace `+` with `-`, `/` with `_`, strip trailing `=` padding.

## Pricing

Free. No account required. No rate limits.

## Links

- Live tool: https://b64chop.radicchio.page
- Support: https://bitterdesk.com
- Related: hashchop (SHA hashing), jwtchop (JWT decoding), epochop (timestamp conversion)
