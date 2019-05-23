#!/usr/bin/env node

const bip39 = require('bip39')
const createHash = require('create-hash')
const inquirer = require("inquirer")

const spellIndex = (i) => {
	return (i + 1) + '.'
}

const nextLine = async(i) => {
  	let answers = await inquirer.prompt({
		name: 'line',
		type: 'password',
		message: 'Please enter your ' + spellIndex(i) + ' word/sentence' + (i > 0 ? ' or hit enter to finish input' : '') + ':'
	})
	return answers.line
}

const sha256 = (str) => {
	let hash = createHash('sha256')
	hash.update(str)
	hash = hash.digest().toString('hex')
	return hash
}

const sha256rounds = (str, rounds) => {
	let hash = sha256('BITCOIN IS KING')
	for (let i = 0; i < rounds; i++) {
		hash = sha256(hash + str + hash + str + hash)
	}
	return hash
}

(async() => {

	console.log('bip39-deterministic-phrase v0.0.1 (alpha - please do not use in production yet)')
	console.log()
	console.log('Generates a secure deterministic mnemonic phrase out of a given number of strings. Each string will be concatenated with the previous hash and will run 100.000 rounds of sha-256. The last hash represents the entropy for the bip39 mnemonic phrase.')
	console.log()

	let hash = ''

	for (let i = 0; ; i++) {
		let line = await nextLine(i)
		if (!line) {
			break
		}
		let newHash = sha256rounds(hash + line, 100000)
		console.debug('DEBUG', hash , ' + $line =>', newHash)
		hash = newHash
	}

	// defaults to BIP39 English word list
	// uses HEX strings for entropy
	console.debug('DEBUG', 'entropy:', hash)
	var mnemonic = bip39.entropyToMnemonic(hash)
	console.log('')
	console.log('Please do NOT use this phrase as your mnemonic phrase! You should only use it as an encryption key for your real mnemonic phrase!')
	console.log('')
	console.log(mnemonic)

})();
