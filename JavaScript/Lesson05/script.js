function showArray(a) {
    document.write("<ul>");
    a.forEach((e, i) => document.write("<li><h1>" + i + "->" + e + "</h1></li>"));
    document.write("</ul>");
}
