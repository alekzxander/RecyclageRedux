export const indiceResult = (score) => {
    let colorResult;
    if (score >= 70) {
        colorResult = 'green';
    } else if (score >= 40 && score < 70) {
        colorResult = 'orange';
    } else if (score < 40) {
        colorResult = 'red';
    }
    return colorResult;
}
export const indiceGarbage = (garbage) => {
    let colorGarbage;
    if (garbage === 'Bleu') {
        colorGarbage = '#16193D'
    } else if (garbage === 'Verte') {
        colorGarbage = '#0B2E13'
    } else if (garbage === 'Marron') {
        colorGarbage = '#69471E'
    } else if (garbage === 'Jaune') {
        colorGarbage = '#E0D42B'
    }
    return colorGarbage;
}