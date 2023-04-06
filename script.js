function replaceChar() {
  var name = document.getElementById("name").value;
  var replaceChar = document.getElementById("replacechar").value;
  var newchar = document.getElementById("newchar").value;
  var regex = new RegExp(replaceChar, "g");

  var result = name.replace(regex, newchar);
  alert(result);
}
