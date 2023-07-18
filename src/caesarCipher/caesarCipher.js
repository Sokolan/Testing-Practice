const lettersInABC = 26;

export default function caesarCipher(str, shiftFactor) {
  const a = "a".charCodeAt(0);
  const A = "A".charCodeAt(0);
  const z = "z".charCodeAt(0);
  const Z = "Z".charCodeAt(0);
  return Array(...str).map((char) => {
    let charCode = char.charCodeAt(0);
    if (charCode <= z && charCode >= a) {
      charCode += shiftFactor % lettersInABC;
      if (charCode > z) charCode -= lettersInABC;
      return String.fromCharCode(charCode);
    }
    if (charCode <= Z && charCode >= A) {
      charCode += shiftFactor % lettersInABC;
      if (charCode > Z) charCode -= lettersInABC;
      return String.fromCharCode(charCode);
    }
    return undefined;
  }).toString().replaceAll(',','');
}