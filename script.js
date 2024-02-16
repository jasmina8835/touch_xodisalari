let h = document.querySelector('h1')
let d = document.querySelector('div')
let ctxt = document.querySelector('.context')



// addEventListener('touchstart', (e) => {
//     let start = e.changedTouches[0].pageX
//     console.log(start);
//     addEventListener('touchmove', () => {
//         addEventListener('touchend', (ev) => {
//             let end = ev.changedTouches[0].pageX
//             console.log(end);
//             if (start < end && start < 50) {
//                 ctxt.classList.add('contextActive')
//             } else {
//                 ctxt.classList.remove('contextActive')
//             }
//         })
//     })
// })

addEventListener('touchstart', (e) => {
    let start = e.changedTouches[0].pageX
    console.log(start);
    addEventListener('touchmove', () => {
        addEventListener('touchend', (ev) => {
            let end = ev.changedTouches[0].pageX
            console.log(end);
            if (start < end && start < 50) {
                ctxt.classList.add('contextActive')
            } else {
                ctxt.classList.remove('contextActive')
            }
        })
    })
})



