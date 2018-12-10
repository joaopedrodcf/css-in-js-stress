export default name => {
  try {
    const resultsJson = localStorage.getItem(name);
    let results = [];
    if (resultsJson) results = JSON.parse(resultsJson);
    if (results.length === 0) return "";
  
    const rows = [];
    const reRenderHeaders = Array.apply(null, {
      length: results[0].length
    }).map(Number.call, Number);
    rows.push(
      "Full render number," +
        reRenderHeaders.join(",")
    );
  
    results.forEach((r, index) => {
      rows.push(index + 1 + "," + r.join(","));
    });
  
    return rows.join("\r\n");
  } catch {
    localStorage.clear();
    return "";
  }
  
};
