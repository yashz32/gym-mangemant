function showMessage() {
  alert("Gram Sabha meeting will be held on Sunday at 10 AM.");
}
function showVillageWork() {
  document.getElementById("villageWork").style.display = "block";
  document.getElementById("kamWork").style.display = "none";
}

function showKamWork() {
  document.getElementById("kamWork").style.display = "block";
  document.getElementById("villageWork").style.display = "none";
}

function showMessage() {
  alert("Gram Panchayat Notice: Meeting on Monday at 11 AM");
}
function logout() {
  // clear login data (optional)
  localStorage.clear();
  sessionStorage.clear();

  // redirect to login page
  window.location.href = "login.html";
}
