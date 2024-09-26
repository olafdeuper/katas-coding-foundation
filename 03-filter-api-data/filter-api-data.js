function filterApiData(apiData, mandatoryKeys) {
  // result mit apiData initialisieren
  let result = apiData;
  // Äußere Schleife für jedes Element von apiData durchlaufen
  for (let item of apiData) {
    // innere Schleife für jeden key auf den gefiltert werden soll
    // durchlaufen
    for (let key of mandatoryKeys) {
      // jeden weiteren key auf den vorherigen gefilterten Inhalt anwenden.
      result = result.filter((a) => key in a);
    }
  }
  return result;
}
