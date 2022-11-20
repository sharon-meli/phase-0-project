
function eventCaster(message) { 
    let caster = document.getElementById('caster'); 
    caster.innerHTML = message; 
}
document.getElementById('image').addEventListener('mouseover', () => eventCaster ('You\'ve triggered the Mouseover Event') ) 
