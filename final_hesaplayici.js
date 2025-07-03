function hesapla() {
  let k1 = parseFloat(document.getElementById('k1').value) || 0;
  let k2 = parseFloat(document.getElementById('k2').value) || 0;
  let k3 = parseFloat(document.getElementById('k3').value) || 0;
  let k4 = parseFloat(document.getElementById('k4').value) || 0;
  let k5 = parseFloat(document.getElementById('k5').value) || 0;
  let srp = parseFloat(document.getElementById('srp').value) || 0;
  let donem = document.getElementById('donem').value;

  let ort = (k1 + k2 + k3 + k4 + k5) / 5;
  let toplamSoru = ((ort * 0.582) + srp - 59.5) / 0.194;
  toplamSoru = Math.abs(toplamSoru);
  toplamSoru = Math.ceil(toplamSoru);

  let dersler = {};
  let toplamFinalSorusu = 0;

  if (donem === "1") {
    dersler = {
      "Anatomi": 37,
      "Biofizik": 16,
      "Histoloji": 26,
      "Med Bio": 22,
      "Med His": 10,
      "Organic": 5,
      "Fizyoloji": 9,
      "Health Law": 14,
      "Microbio": 7,
      "Immuno": 6,
      "BS": 12,
      "Biokimya": 26,
      "Bioistatistik": 11
    };
  }

  for (let key in dersler) {
    toplamFinalSorusu += dersler[key];
  }

  let sonucText = `Finalde yapılması gereken minimum soru sayısı: ${toplamSoru}\n`;
  sonucText += "Derslere göre dağılım:\n";

  for (let key in dersler) {
    let oran = dersler[key] / toplamFinalSorusu;
    let gerekli = Math.ceil(toplamSoru * oran);
    sonucText += `${key}: ${gerekli} soru\n`;
  }

  document.getElementById('sonuc').innerText = sonucText;
}
