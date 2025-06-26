const file1Data = JSON.parse(localStorage.getItem('file1Data'));
const file2Data = JSON.parse(localStorage.getItem('file2Data'));

if (file1Data && file2Data) {
  document.getElementById('file1-columns').textContent = JSON.stringify(file1Data, null, 2);
  document.getElementById('file2-columns').textContent = JSON.stringify(file2Data, null, 2);
} else {
  document.body.innerHTML = "<h1>Error: No data found. Please return to the previous page.</h1>";
}