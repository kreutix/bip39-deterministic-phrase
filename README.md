# bip39-deterministic-phrase

Generates a secure deterministic mnemonic phrase out of a given number of strings. Each string will be concatenated with the previous hash and will run 100.000 rounds of sha-256. The last hash representes the entropy for the bip39 mnemonic phrase.

**CAUTION: Please do NOT use this software in production yet!** (It is currently in alpha state)

## Purpose 

The purpose of this tool is to generate a secure mnemonic phrase out of pieces of information which are only known to the creator of the mnemonic phrase. A possible sources of information could be a specific book. One could for example use the first 20 words out of the first 6 chapters of a given book. For extra security one could add a simple to remember but secret word, on the beginning, the end or in between each word. Another strategy could be the usage of a random set of easy to remember sentences. IMHO you should use at least 3 sentences if you use this strategy.

The usage of this tool is only secure if the mnemonic phrase creator uses his own secret strategy. For many people (including me) it's probably easier to remember a strategy instead of 24 ramdomly generated words. As an extra backup the 24 generated words should still be written somewhere offline.

As a benefit of the secret strategy you don't have to dig out your securely stored offline notice if your ledger is resetted. You will also have a second backup (in your head) in case your notice gets lost.

The generation of the mnemonic phrase should be done on an offline PC, ideally booted with an boot CD or USB stick, so no traces of the key are stored on any storage devices.

## Example (with DEBUG output)

```
$ npm start

> bip39-deterministic-phrase@0.0.1 start /Users/stefankreuter/dev/bip39
> node index.js

bip39-deterministic-phrase v0.0.1 (alpha - please do not use in production yet)

Generates a secure deterministic mnemonic phrase out of a given number of strings. Each string will be concatenated with the previous hash and will run 100.000 rounds of sha-256. The last hash representes the entropy for the bip39 mnemonic phrase.

? Please enter your 1. word/sentence: Do you think this is a secure way to generate a good mnemonic phrase?
DEBUG Do you think this is a secure way to generate a good mnemonic phrase? => 6aa04dc46e2cf601beb05ac979e299bfa9655faf27f5a3d7c2511f9b3c0008a5

? Please enter your 2. word/sentence or hit enter to finish input: Please let me know if you don't think so!
DEBUG 6aa04dc46e2cf601beb05ac979e299bfa9655faf27f5a3d7c2511f9b3c0008a5Please let me know if you don't think so! => b5b0a65979facd106499d3ff293a0b128b9fa0e39c4b29b55864cbe9ca448e8b

? Please enter your 3. word/sentence or hit enter to finish input: In my opinion, this should be quite secure if you use multiple sentences.
DEBUG b5b0a65979facd106499d3ff293a0b128b9fa0e39c4b29b55864cbe9ca448e8bIn my opinion, this should be quite secure if you use multiple sentences. => e4b633c11e06d15c86e155677b738a9bf54e3486107d93ea158a5b38fb3e7eee

? Please enter your 4. word/sentence or hit enter to finish input: Let me know, what you think :)
DEBUG e4b633c11e06d15c86e155677b738a9bf54e3486107d93ea158a5b38fb3e7eeeLet me know, what you think :) => 7fcfc2c6a6779fb2918a52d7e21cd513a1300cf9700a52b160d78a644b181668

? Please enter your 5. word/sentence or hit enter to finish input: 
DEBUG entropy: 7fcfc2c6a6779fb2918a52d7e21cd513a1300cf9700a52b160d78a644b181668

lemon lawn random erupt ketchup sun economy engage subject axis crystal chef basic all total access famous mention curious below dwarf metal fluid auto
```
