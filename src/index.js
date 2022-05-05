import modal from './modules/modal'
import three from './modules/threeslider'
import swipeUp from './modules/swipeUp'
import twoSloder from './modules/twoSlider'
import calc from './modules/calc'
// import validateCalc from './modules/validateCalc'
import timer from  './modules/timer'
import sendForm from './modules/form'
import imageZoom from './modules/imageZoom'

modal()
three()
swipeUp()
twoSloder()
calc()
// validateCalc()
timer('1 may 2022')
imageZoom()

const forms = document.querySelectorAll('form')
forms.forEach((form, index) => {
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        form.id = `form${index}`
        
        sendForm({
            formId: `form${index}`,
            someElem: [
                {
                    type: 'block',
                    id: 'calc-total'
                }
            ] 
        })
    })
})