export const printDiv = (divRef) => {
  var divContents = document.getElementById(divRef).innerHTML;
  var a = window.open("", "", "height=500, width=500");
  a.document.write("<html><head>");
  a.document.write("<link rel=\"stylesheet\" href=\"./src/styles/index.css\">");
  a.document.write("<link rel=\"stylesheet\" href=\"./src/styles/contact-card.css\">");
  a.document.write("</head>");
  a.document.write("<body>");
  a.document.write(divContents);
  a.document.write("</body></html>");
  a.document.close();
  a.print();
};