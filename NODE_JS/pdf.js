const fs = require('fs');
const pdfParse = require('pdf-parse');

// Read the PDF file
const pdfPath = './pdf.pdf';
const dataBuffer = fs.readFileSync(pdfPath);

pdfParse(dataBuffer)
  .then(data => {
    console.log('PDF Text:', data.text); // Extracted text
    console.log('PDF Metadata:', data.info); // Metadata
    console.log('Number of Pages:', data.numpages); // Page count
  })
  .catch(err => {
    console.error('Error reading PDF:', err);
  });
