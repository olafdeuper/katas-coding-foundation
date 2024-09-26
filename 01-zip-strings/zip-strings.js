function zipStrings(strA, strB) {
  // Variablen mit Stringlängen
  let la = strA.length;
  let lb = strB.length;

  // Noch kein result
  let result = "";

  // Zähler um die Strings auf die gleiche Länge zu bringen
  let counter = Math.abs(la - lb);
  // Zähler für den Zip "Addierer"
  let counterstr = Math.max(la, lb);
  // Falls einer der Strings leer ist,
  // den jeweils anderen zurückgeben
  if (strA.length == 0) return strB;
  if (strB.length == 0) return strA;

  // Strings gleich lang machen
  // durch das Addieren von Leerzeichen
  if (la > lb) {
    for (let i = 0; i < counter; i++) {
      strB += " ";
    }
  } else if (la < lb) {
    for (let i = 0; i < counter; i++) {
      strA += " ";
    }
  }
  // Strings im Zip-Verfahren addieren
  // enthalten, falls nicht gleich lang, Leerzeichen
  for (let i = 0; i < counterstr; i++) {
    result += strA[i] + strB[i];
  }
  // Leerzeichen wieder entfernen
  result = result.replaceAll(" ", "");

  return result;
}
