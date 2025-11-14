function showScreen(screenId) {
  const screens = document.querySelectorAll('.screen');
  screens.forEach(screen => {
    screen.classList.remove('active');
  });
  
  const targetScreen = document.getElementById(screenId);
  if (targetScreen) {
    targetScreen.classList.add('active');
  }
}

function goBack() {
  showScreen('home');
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('Ecos de Plata y Oscuridad - Aplicación cargada correctamente');
});
