import state from "./state.js";
import { controls } from "./elements.js";
import * as actions from "./actions.js"
import * as el from './elements.js'
import { updateDisplay } from "./timer.js";

import * as sounds from './sounds.js'


export function iconsMusic (){
    const buttonEl = el.icons.querySelectorAll("button");
    buttonEl.forEach((button) => {
        button.addEventListener('click', ()=> {
            const sound = button.dataset.sound;
            if (!sounds[sound]) {
                return
            }
            
            sounds[sound].play()

        })

        
    })

}



export function registerControls(){
    controls.addEventListener('click', (event) => {
        const action = event.target.dataset.action
        if(typeof actions[action] != 'function'){
            return
        }

        actions[action]()
    })

     
}

export function setMinutes(){
    el. minutes.addEventListener('focus', ( ) =>{
        el.minutes.textContent=""
    })

    el.minutes.onkeypress = (event) => /\d/.test(event.key)

    el.minutes.addEventListener('blur', (event) =>{
        let time =event.currentTarget.textContent
        time = time > 60 ? 60 : time

        state.minutes = time
        state.seconds = 0

        updateDisplay()
        el.minutes.removeAttribute('contenteditable')

    })

}