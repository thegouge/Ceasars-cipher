// Instructions Go Here

export function rot13(str) {
  const orig = str.toUpperCase().split("");

  let rot = orig.map((char) => {
    let code = char.charCodeAt();
    if (code >= 65 && code <= 90) {
      code += 13;
      if (code > 90) {
        code -= 26;
      }
      return String.fromCharCode(code);
    } else {
      return char;
    }
  });

  return rot.join("");
}

const input = document.getElementById("input");
const output = document.getElementById("output");
const submit = document.getElementById("submit");

submit.addEventListener("click", () => {
  output.innerHTML = `"${input.value}" === ${rot13(input.value)}`;
});
