function Paragraph(anyText) {
    let newParagraph = document.createElement("p");
    newParagraph.textContent = anyText;
    document.body.appendChild(newParagraph);
  }
  Paragraph("This is a new paragraph.");
  