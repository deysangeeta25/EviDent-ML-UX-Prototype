function processFiles() {
  const file1 = document.getElementById('file1').files[0];
  const file2 = document.getElementById('file2').files[0];

  if (!file1 || !file2) {
    alert("Please upload both files.");
    return;
  }

  const file1Promise = extractThirdColumn(file1);
  const file2Promise = extractThirdColumn(file2);

  Promise.all([file1Promise, file2Promise]).then(results => {
    const file1Data = results[0];
    const file2Data = results[1];

    localStorage.setItem('file1Data', JSON.stringify(file1Data));
    localStorage.setItem('file2Data', JSON.stringify(file2Data));

    window.location.href = 'confidence_output.html';
  });
}

function extractThirdColumn(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = function(e) {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const range = XLSX.utils.decode_range(worksheet['!ref']);
      const thirdColumn = [];

      for (let row = range.s.r; row <= range.e.r; row++) {
        const cellAddress = XLSX.utils.encode_cell({ r: row, c: 2 });
        const cell = worksheet[cellAddress];
        if (cell) {
          thirdColumn.push(cell.v);
        } else {
          thirdColumn.push("");
        }
      }
      resolve(thirdColumn);
    };

    reader.onerror = reject;

    reader.readAsArrayBuffer(file);
  });
}

const script = document.createElement('script');
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.17.5/xlsx.full.min.js';
document.head.appendChild(script);