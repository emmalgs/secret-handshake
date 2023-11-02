const SECRETS = {
  '1': 'wink',
  '10': 'double blink',
  '100': 'close your eyes',
  '1000': 'jump'
}

export const commands = (num) => {
  const binary = num.toString(2);
  let secret = []
  let currentBinary = [binary[0]]
  for (let i = binary.length - 1; i >= 0; i--) {
    console.log(currentBinary)
    if (binary[i] === '1') {
      secret.push(SECRETS[currentBinary.join("")])
      currentBinary = [binary[i]]
    } else {
      currentBinary.push(binary[i])
    }
  }

  return secret
};
