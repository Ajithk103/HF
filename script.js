/* ===== LOGIN ===== */
function login(){
  const user=document.getElementById("username").value;
  const pass=document.getElementById("password").value;
  if(user && pass){
    localStorage.setItem("loggedIn","true");
    window.location.href="home.html";
  } else {
    alert("Enter username & password");
  }
}

/* ===== LOGOUT ===== */
function logout(){
  localStorage.removeItem("loggedIn");
  window.location.href="index.html";
}

/* ===== POPUP GALLERY ===== */
function openImg(img){
  document.getElementById("popup").style.display="flex";
  document.getElementById("popupImg").src=img.src;
}
function closeImg(){
  document.getElementById("popup").style.display="none";
}

/* ===== NOTIFICATION ===== */
function showNotification(){
  alert("🔔 No new notifications");
}

/* ===== AUTH CHECK ===== */
if(window.location.href.includes("home.html")){
  if(localStorage.getItem("loggedIn")!=="true"){
    window.location.href="index.html";
  }
}

/* ===== DRAWER MENU ===== */
function toggleMenu(){
  const menu=document.getElementById("drawerMenu");
  menu.style.left=menu.style.left==="0px"?"-250px":"0px";
}

/* ===== BACK BUTTON ===== */
function goBack(){
  window.history.back();
}
function goPage(page) {
  window.location.href = page;
}
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });

  document.getElementById(pageId).classList.add('active');
}
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');

  document.querySelectorAll('.bottom-nav button').forEach(b => b.classList.remove('active'));
  event.currentTarget.classList.add('active');
}
function openPage(pageId) {
  // switch pages
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });
  document.getElementById(pageId).classList.add('active');

  // close drawer
  toggleMenu();

  // update bottom nav active state (optional)
  document.querySelectorAll('.bottom-nav button').forEach(btn => {
    btn.classList.remove('active');
  });
}
