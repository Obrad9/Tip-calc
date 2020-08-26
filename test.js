function myFunction() {
  const a = document.getElementById("bill").value;
  const p = document.getElementById("people").value;
  const q = document.getElementById("quality").value;


  const total = ( (a*q) / p ).toFixed(2);
  document.getElementById("calculate").innerHTML = total;
}
