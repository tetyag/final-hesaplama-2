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
  toplamSoru = Math.round(toplamSoru);

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

  let dagilim = [];
  for (let key in dersler) {
    let oran = dersler[key] / toplamFinalSorusu;
    let tamDeger = toplamSoru * oran;
    dagilim.push({
      ders: key,
      toplam: dersler[key],
      deger: tamDeger,
      tam: Math.floor(tamDeger),
      kusurat: tamDeger - Math.floor(tamDeger)
    });
  }

  let suAnkiToplam = dagilim.reduce((sum, d) => sum + d.tam, 0);
  let fark = toplamSoru - suAnkiToplam;

  dagilim.sort((a, b) => b.kusurat - a.kusurat);
  for (let i = 0; i < fark; i++) {
    dagilim[i].tam += 1;
  }

  let sonucText = `Finalde yapılması gereken minimum soru sayısı: ${toplamSoru}\n`;
  sonucText += "Derslere göre dağılım (Gereken / Toplam):\n";

  dagilim.sort((a, b) => a.ders.localeCompare(b.ders));
  for (let d of dagilim) {
    sonucText += `${d.ders}: ${d.tam} / ${d.toplam}\n`;
  }

  document.getElementById('sonuc').innerText = sonucText;
}
