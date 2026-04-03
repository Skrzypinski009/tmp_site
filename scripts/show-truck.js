function showTruck() {
  closeCart();
  const truck = document.getElementById('truck-overlay');
  truck.style.display = 'flex';
  setTimeout(() => { location.reload() }, 5000);
}
