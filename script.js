// Puedes agregar interactividad aquí si lo deseas
// Ejemplo: Mostrar alerta al descargar el CV

document.addEventListener('DOMContentLoaded', function () {
  const cvBtn = document.querySelector('a[download]');
  if (cvBtn) {
    cvBtn.addEventListener('click', function () {
      alert('¡Gracias por descargar mi CV!');
    });
  }
});
