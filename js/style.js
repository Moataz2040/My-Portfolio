let all = document.getElementById('select-all');
let frontEnd = document.getElementById('select-front-end');
let wordpress = document.getElementById('wordpress');
let shopify = document.getElementById('select-shopify');
let allSelection=document.getElementsByClassName('all-selection');
let allFrontEnd=document.getElementsByClassName('front-end');
let allWordpress=document.getElementsByClassName('wordpress');
all.addEventListener("click",function () {
    for (let i = 0; i < allSelection.length; i++) {
        const element = allSelection[i];
        element.style="display: block;";
    }
})
frontEnd.addEventListener("click",function () {
    for (let i = 0; i < allSelection.length; i++) {
        const element = allSelection[i];
        element.style="display: none;";
    }
    for (let i = 0; i < allFrontEnd.length; i++) {
        const elementFront = allFrontEnd[i];
        elementFront.style="display: block;";
    }
})
wordpress.addEventListener("click",function () {
    for (let i = 0; i < allSelection.length; i++) {
        const element = allSelection[i];
        element.style="display: none;";
    }
    for (let i = 0; i < allWordpress.length; i++) {
        const elementWordpress = allWordpress[i];
        elementWordpress.style="display: block;";
    }
})