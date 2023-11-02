export const commands = (num) => {
  const binary = num.toString(2);
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

  return secret
};
