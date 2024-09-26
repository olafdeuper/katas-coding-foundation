function extractClassName(sessionTitle) {
  // Objekt mit den Monatsnamen und
  // Monatszahlen als Objekt anlegen
  const months = {
    Januar: "01",
    Februar: "02",
    März: "03",
    Maerz: "03",
    April: "04",
    Mai: "05",
    Juni: "06",
    Juli: "07",
    August: "08",
    September: "09",
    Oktober: "10",
    November: "11",
    Dezember: "12",
  };
  // Konstanten für den Gültigkeitsbereich der Jahreszahlen
  const minJear = 2000;
  const maxJear = 2024;
  // Leeres Array für das Ergebnis
  let buffer = [];
  // Die einzelnen Worte des String in einem Array speichern
  let arrStr = sessionTitle.split(" ");
  // Das Array parsen
  for (let i = 0; i < arrStr.length; i++) {
    // Ist das Schlüsselwort Class vorhanden?
    if (arrStr[i] === "Class") {
      // Falls ja, ist das nächste Wort eine Jahreszahl im Gültigkeitsbereich?
      if (arrStr[i + 1] * 1 >= minJear && arrStr[i + 1] * 1 <= maxJear) {
        // Falls ja, ist das nächste Wort als Schlüssel im Objekt months vorhanden?
        if (arrStr[i + 2] in months) {
          // Falls ja, die Worte in der richtigen Reihenfolge mit Bindestrich in den buffer pushen
          buffer.push(arrStr[i + 1] + "-");
          buffer.push(months[arrStr[i + 2]]);
        }
      }
    }
  }
  // Falls keine gültiger Strings gefunden wurden ist
  // buffer leer, dann null zurückgeben
  if (buffer.length === 0) return null;
  // buffer in String wandeln und zurück geben
  return buffer.join("");
}
