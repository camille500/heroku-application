/* MAIN JAVASCRIPT FILE
------------------------------------------------------- */
var reloadCount = document.getElementById('reloadCount');

var getReloadAmount = parseInt(localStorage.getItem('amountOfReloads'));
if(getReloadAmount === "NaN" || !getReloadAmount) {
  localStorage.setItem('amountOfReloads', 1);
} else {
  localStorage.setItem('amountOfReloads', getReloadAmount + 1);
  if(reloadCount) {
    reloadCount.innerHTML = parseInt(localStorage.getItem('amountOfReloads'));
  }
}
