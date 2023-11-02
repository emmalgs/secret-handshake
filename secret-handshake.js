const SECRETS = {
  '00001': 'wink',
  '00010': 'double blink',
  '00100': 'close your eyes',
  '01000': 'jump',
  '10000': 'reverse'
}

export const commands = (num) => {
  const binary = num.toString(2);
  console.log(binary)
  let secret = []
  if (binary[binary.length - 1] === '1') {
    secret.push('wink')
  } 
  if (binary[binary.length - 2] === '1') {
    secret.push('double blink')
  } 
  if (binary[binary.length - 3] === '1') {
    secret.push('close your eyes')
  } 
  if (binary[binary.length - 4] === '1') {
    secret.push('jump')
  }
  if (binary.length === 5 && binary[0] === '1') {
    secret.reverse()
  }
  // let currentBinary = [binary[0]]
  // for (let i = binary.length - 1; i >= 0; i--) {
  //   if (binary[i] === '1') {
  //     secret.push(SECRETS[currentBinary.join("")])
  //     currentBinary = [binary[i]]
  //   } else {
  //     currentBinary.push(binary[i])
  //   }
  // }

  return secret
};
