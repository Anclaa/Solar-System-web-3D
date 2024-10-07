document.getElementById('zoom-container').addEventListener('wheel', function(event) {
    event.preventDefault();

    const universe = document.getElementById('universe');
    let scale = parseFloat(universe.style.transform.replace(/scale\(([^)]+)\)/, '$1')) || 1;

    if (event.deltaY < 0) {
        // Zoom in
        scale += 0.1;
    } else {
        // Zoom out
        scale -= 0.1;
    }

    // Limitar el zoom para que no sea demasiado pequeño o grande
    scale = Math.min(Math.max(scale, 0.5), 3);

    universe.style.transform = `scale(${scale})`;
});
