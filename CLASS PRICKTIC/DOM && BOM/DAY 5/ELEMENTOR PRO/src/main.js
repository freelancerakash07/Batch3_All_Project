
const text = document.querySelector('.text');
const regult = document.querySelector('.regult');
const font_size = document.querySelector('.font-size');
const color = document.querySelector('.color');
const font_weight = document.querySelector('.font_weight');
const text_style = document.querySelector('.text_style');
const text_align = document.querySelector('.text_align');
const bg_color = document.querySelector('.bg_color');
const span_size = document.querySelector('.span_size');
const font_weight_size = document.querySelector('.font_weight_size');


/**
 * text input evean
 * @param {*} e 
 */

text.oninput = (e) => {
    
    const val = e.target.value;
    console.log(val);
    regult.innerHTML = val
    
}


/**
 * font size control
 * @param {*} e 
 */

font_size.oninput = (e) => {
    const val = e.target.value
    regult.style.fontSize = `${val}px`
    span_size.innerHTML = `${val} px`
}


/**
 * color control
 * @param {*} e 
 */

color.oninput = (e) => {

    const val = e.target.value

    regult.style.color = `${val}`
}


bg_color.oninput = (e) => {
    
    const val = e.target.value

    regult.style.backgroundColor = `${val}`
}



/**
 * font weight control
 * @param {*} e 
 */

font_weight.oninput = (e) => {
    
    const val = e.target.value
    
    regult.style.fontWeight = `${val}`

    font_weight_size.innerHTML = `${val}`
}


text_style.oninput = (e) => {

    const val = e.target.value

    regult.style.fontFamily = `${val}`
}



text_align.oninput = (e) => {
    
    const val = e.target.value

    regult.style.textAlign = `${val}`
}

