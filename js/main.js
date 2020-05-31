function dropdownToggle() {
    document.getElementById("dropdownBrand").classList.toggle("show");
    document.getElementById("dropdownCollection").classList.toggle("show");
    document.getElementById("dropdownCategory").classList.toggle("show");
}

window.onclick = function (e) {
    if (!e.target.matches('.dropdownBrand')) {
        var dropdown = document.getElementById("dropdownBrand");
        if (dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
        }
    }
    if (!e.target.matches('.dropdownCollection')) {
        var dropdown = document.getElementById("dropdownCollection");
        if (dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
        }
    } if (!e.target.matches('.dropdownCategory')) {
        var dropdown = document.getElementById("dropdownCategory");
        if (dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
        }
    }
}

function mobileToggle() {
    var x = document.getElementById("mobileToggle");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function newIn() {
    const newIn = document.querySelector('.slider__new');
    const ul = newIn.querySelector('ul');
    const buttons = newIn.querySelectorAll('.slider-arrow');
    let startPos =  parseFloat(getComputedStyle(ul).marginLeft);

    buttons[0].addEventListener('click', leftArrow);
    buttons[1].addEventListener('click',rightArrow);

    function leftArrow(){
        startPos = Math.min( startPos + 400,0);
        ul.style.marginLeft = startPos + 'px';
    }
    function rightArrow() {
        if (-startPos < 1200) {
            startPos = startPos - 400;
            ul.style.marginLeft = startPos + 'px';
        }
    }

}
function bestSeller() {
    const bestSeller = document.querySelector('.slider__best');
    const ul = bestSeller.querySelector('ul');
    const buttons = bestSeller.querySelectorAll('.slider-arrow');
    let startPos =  parseFloat(getComputedStyle(ul).marginLeft);

    buttons[0].addEventListener('click', leftArrow);
    buttons[1].addEventListener('click', rightArrow);

    function leftArrow(){
        startPos = Math.min( startPos + 400,0);
        ul.style.marginLeft = startPos + 'px';
    }
    function rightArrow() {
        if (-startPos < 1200) {
            startPos = startPos - 400;
            ul.style.marginLeft = startPos + 'px';
        }
    }
}

newIn();
bestSeller();