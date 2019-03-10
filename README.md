# bip39-deterministic-phrase
Generates a secure deterministic mnemonic phrase out of a given number of strings. Each string will be concatenated with the previous hash and will run 100.000 rounds of sha-256. The last hash representes the entropy for the bip39 mnemonic phrase.
