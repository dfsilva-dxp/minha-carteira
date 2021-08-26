export function getFirstLetterOfName(name: string) {
  const arr = name.split(" ");
  const [firstname, lastname] = arr;

  return `${firstname.charAt(0)}${lastname.charAt(0)}`;
}
