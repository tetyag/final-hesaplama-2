
function hesapla() {
  let k1 = parseFloat(document.getElementById('k1').value) || 0;
  let k2 = parseFloat(document.getElementById('k2').value) || 0;
  let k3 = parseFloat(document.getElementById('k3').value) || 0;
  let k4 = parseFloat(document.getElementById('k4').value) || 0;
  let k5 = parseFloat(document.getElementById('k5').value) || 0;
  let srp = parseFloat(document.getElementById('srp').value) || 0;

  let ort = (k1 + k2 + k3 + k4 + k5) / 5;
  let final_soru = ((ort * 0.582) + srp - 59.5) / 0.194;
  final_soru = Math.abs(final_soru);
  final_soru = Math.ceil(final_soru);

  document.getElementById('sonuc').innerText = 
    "Finalde yapılması gereken minimum soru sayısı: " + final_soru;
}
