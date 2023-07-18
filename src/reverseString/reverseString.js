export default function reverseString(str) {
  return str? Array(...str).reverse().toString().replaceAll(',','') : "";
}