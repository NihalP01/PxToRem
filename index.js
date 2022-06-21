function convertValue() {
  const a = document.getElementById('pxVal').value;
  val = a / 16;
  document.getElementById('remVal').value = val + ' Rem';
}
