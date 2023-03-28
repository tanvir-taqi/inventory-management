
// ==============  toggle button =========== 
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const sidebar = document.getElementsByClassName('sidebar')[0];

toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('show');
});


//  ============== in inventory chnage bg ========== 
const boxShadowColors = [
    'rgba(123, 17, 158, 0.492)',
    'rgba(47, 47, 149, 0.407)',
    'rgba(18, 88, 125, 0.472)',
    'rgba(24, 131, 184, 0.508)',
    'rgba(0, 213, 255, 0.393)'
  ];
  

  const cards = document.querySelectorAll('.card');
  for (let i = 0; i < cards.length; i++) {
    const boxShadowColor = boxShadowColors[i % boxShadowColors.length];
    cards[i].style.boxShadow = `0 0 50px 10px ${boxShadowColor}`;
  }
  
// ================= table ============== 
const rows = document.querySelectorAll('table tbody tr');

rows.forEach(row => {
  const profitMargin = parseInt(row.cells[3].textContent);

  if (profitMargin <= 15) {
    row.cells[3].style.backgroundColor = 'rgba(123, 17, 158, 0.292)';
  } else if (profitMargin >= 20) {
    row.cells[3].style.backgroundColor = 'rgba(0, 213, 255, 0.293)';
  } else {
    row.cells[3].style.backgroundColor = '#ffe7499b';
  }
});
