function toast({ title = 'Success',  /* default for object value */
    msg = '',
    type = 'success',
    duration = 3000,
    parent = '#toast',
     
}) {

    let htmlContent;
    let icon;
    
    let main = document.querySelector(parent);

    const addToast = document.createElement('div');
    let delay = (duration / 1000).toFixed(2); 
    let setTimeOutId

    const icons = {
        success: 'fa fa-check-circle',
        info: 'fa fa-info-circle',
        error: 'fas fa-exclamation-circle',
        warn: 'fas fa-exclamation-circle',
    };

    icon = icons[type];

    htmlContent = `<div class="toast__icon"><i class="${icon}"></i></div>
        <div class="toast__body">
        <h3 class="toast__title">${title}</h3>
        <p class="toast__content">${msg}</p>
        </div>
        <div class="toast__close"><i class="fa fa-times" aria-hidden="true"></i></div>
        `;
    
    addToast.classList.add('toast', `toast--${type}`);
    addToast.style.animation = `slideInLeft linear 0.5s, fadeOut ease 1s ${delay}s forwards`; 
    addToast.innerHTML = htmlContent;

    
    if (main != undefined){
        main.appendChild(addToast);   

        setTimeOutId = setTimeout(() => {
            main.removeChild(addToast)
        }, duration + 1000);   
    }

    /* closest: such erste Child-Element von addToast */
    addToast.onclick = function(e){
        if (e.target.closest('.toast__close')){
            main.removeChild(addToast),
            clearTimeout(setTimeOutId)
        }
    }

}

