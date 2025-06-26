function downloadPDF() {
    const link = document.createElement('a');
    link.href = 'DRSTemplate.pdf'; // Ensure this file exists in the same directory
    link.setAttribute('download', 'DRSTemplate.pdf'); // Forces download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function downloadExcel() {
    const link = document.createElement('a');
    link.href = 'EvidenceCollectionTemplate.xlsx'; // Ensure this file exists in the same directory
    link.setAttribute('download', 'EvidenceCollectionTemplate.xlsx'); // Forces download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}