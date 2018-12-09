export default name => {
  const resultsJson = localStorage.getItem(name);
  let results = [];
  if (resultsJson) results = JSON.parse(resultsJson);
  if (results.length === 0) return "";

  const rows = [];
  const reRenderHeaders = Array.apply(null, {
    length: results[0].iterations.length
  }).map(Number.call, Number);
  rows.push(
    "Full render number,Full render total time,Iterations ->," +
      reRenderHeaders.join(",")
  );

  results.forEach((r, index) => {
    rows.push(index + 1 + "," + r.total + ",-," + r.iterations.join(","));
  });

  return rows.join("\r\n");
};
