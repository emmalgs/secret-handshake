const SECRETS = {
  '1': 'wink',
  '01': 'double blink',
  '001': 'close your eyes',
  '0001': 'jump'
}

export const commands = (num) => {
  const binary = num.toString(2);
  let secret = []
  for (let i = binary.length - 1; i >= 0; i--) {
    console.log(binary[i])
    secret.push(SECRETS[binary[i]])
  }

  return secret
};
