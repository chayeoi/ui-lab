window.onload = function () {
  document.addEventListener('mousemove', handleMouseMove);

  function handleMouseMove(event) {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const xAxisDegree = event.clientY / height * -1 * 40 + 20;
    const yAxisDegree = event.clientX / width * 40 - 20;

    const target = document.querySelector('.card');

    target.style.transform = `rotateX(${xAxisDegree}deg) rotateY(${yAxisDegree}deg)`;

    setSheenPosition(event.clientX / width, event.clientY / height);
  }

  function setSheenPosition(xRatio, yRatio) {
    const xOffset = 1 - (xRatio - 0.5) * 800;
    const yOffset = 1 - (yRatio - 0.5) * 800;

    const target = document.querySelector('.card');

    console.log('xOffset', xOffset)
    console.log('yOffset', yOffset)

    target.style.setProperty('--sheenX', `${xOffset}px`);
    target.style.setProperty('--sheenY', `${yOffset}px`);
  }
}
