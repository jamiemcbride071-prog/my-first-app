function removeDuplicates() {
  const input = document.getElementById("input").value;

  const lines = input
    .split("\n")
    .map(line => line.trim())
    .filter(line => line !== "");

  const uniqueLines = [...new Set(lines)];

  document.getElementById("output").value = uniqueLines.join("\n");
}
