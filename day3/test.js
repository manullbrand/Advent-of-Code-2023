let arrayDiffLines = [];

for (let i = 0; i < 140; i++) {
  if (lineIndex + 1 < inputArray.length) {
    let nextLine = inputArray[lineIndex + 1];

    let testResult =
      line[i].match(regexFindNumber) &&
      ((nextLine[i - 1] && nextLine[i - 1].match(regexSymbols)) ||
        (nextLine[i] && nextLine[i].match(regexSymbols)) ||
        (nextLine[i + 1] && nextLine[i + 1].match(regexSymbols)));

    if (testResult) {
      let startIndex = i;
      let endIndex = i;

      while (startIndex >= 0 && line[startIndex].match(/\d/)) {
        startIndex--;
      }
      startIndex++;

      while (endIndex < line.length && line[endIndex].match(/\d/)) {
        endIndex++;
      }

      let entireNumberBlock = line.slice(startIndex, endIndex);
      arrayDiffLines.push(entireNumberBlock);
    }
  }
}
