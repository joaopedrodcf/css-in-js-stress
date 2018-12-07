export default name => {
  const resultsJson = localStorage.getItem(name);
  let results = [];
  if (resultsJson) results = JSON.parse(resultsJson);

  const rows = [];
  const reloadsHeaders = Array.apply(null, { length: results.length }).map(
    Number.call,
    Number
  );
  rows.push("Page load," + reloadsHeaders.join(","));

  rows.push("Total," + results.map(r => r.total).join(","));
  rows.push("Iterations\r\n");
  const iterationCount = results[0].iterations.length;

  for (let i = 0; i < iterationCount; i++) {
    rows.push(i + 1 + "," + results.map(r => r.iterations[i]).join(","));
  }
  return rows.join("\r\n");
};
