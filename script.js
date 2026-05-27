function elkuldeni() {
  var nev = document.getElementById("nev").value;
  var tel = document.getElementById("tel").value;
  var uzenet = document.getElementById("uzenet").value;

  // ha üres akkor szóljon
  if (nev == "") {
    alert("Írd be a nevedet!");
    return; 
  }

  if (tel == "") {
    alert("Telefonszám is kell légyszi");
    return;
  }

  // ha minden ok
  alert("Köszönöm " + nev + "! Hamarosan felhívlak! :)");

  // kitörölni a mezőket
  document.getElementById("nev").value = "";
  document.getElementById("tel").value = "";
  document.getElementById("uzenet").value = "";

  document.getElementById("visszajelzes").innerHTML = "Üzenet elküldve! Hamarosan jelentkezem.";
}
