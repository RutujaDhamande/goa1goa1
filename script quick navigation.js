// section 

const parentContainer = document.querySelector('.read-more-container');

     parentContainer.addEventListener('click', event =>{
         const current = event.target;

         const isReadMoreBtn = current.className.includes('read-more-btn');

         if(!isReadMoreBtn) return;

         const currentText = event.target.parentNode.querySelector('.read-more-text');

         currentText.classList.toggle('read-more-text--show');

         current.textContent = current.textContent.includes('Read More') ? "Read Less" : "Read More";
     })


// section 1

const parentContainer1 = document.querySelector('.read-more-container1');

     parentContainer1.addEventListener('click', event =>{
         const current1 = event.target;

         const isReadMoreBtn1 = current1.className.includes('read-more-btn1');

         if(!isReadMoreBtn1) return;

         const currentText1 = event.target.parentNode.querySelector('.read-more-text1');

         currentText1.classList.toggle('read-more-text--show1');

         current1.textContent = current1.textContent.includes('Read More') ? "Read Less" : "Read More";
     })


// section 2

     const parentContainer2 = document.querySelector('.read-more-container2');

     parentContainer2.addEventListener('click', event =>{
         const current2 = event.target;

         const isReadMoreBtn2 = current2.className.includes('read-more-btn2');

         if(!isReadMoreBtn2) return;

         const currentText2 = event.target.parentNode.querySelector('.read-more-text2');

         currentText2.classList.toggle('read-more-text--show2');

         current2.textContent = current2.textContent.includes('Read More') ? "Read Less" : "Read More";
     })



// section 3

const parentContainer3 = document.querySelector('.read-more-container3');

parentContainer3.addEventListener('click', event =>{
    const current3 = event.target;

    const isReadMoreBtn3 = current3.className.includes('read-more-btn3');

    if(!isReadMoreBtn3) return;

    const currentText3 = event.target.parentNode.querySelector('.read-more-text3');

    currentText3.classList.toggle('read-more-text--show3');

    current3.textContent = current3.textContent.includes('Read More') ? "Read Less" : "Read More";
})





// section 4

const parentContainer4 = document.querySelector('.read-more-container4');

parentContainer4.addEventListener('click', event =>{
    const current4 = event.target;

    const isReadMoreBtn4 = current4.className.includes('read-more-btn4');

    if(!isReadMoreBtn4) return;

    const currentText4 = event.target.parentNode.querySelector('.read-more-text4');

    currentText4.classList.toggle('read-more-text--show4');

    current4.textContent = current4.textContent.includes('Read More') ? "Read Less" : "Read More";
})




// section 5

const parentContainer5 = document.querySelector('.read-more-container5');

parentContainer5.addEventListener('click', event =>{
    const current5 = event.target;

    const isReadMoreBtn5 = current5.className.includes('read-more-btn5');

    if(!isReadMoreBtn5) return;

    const currentText5 = event.target.parentNode.querySelector('.read-more-text5');

    currentText5.classList.toggle('read-more-text--show5');

    current5.textContent = current5.textContent.includes('Read More') ? "Read Less" : "Read More";
})


// section 6

const parentContainer6 = document.querySelector('.read-more-container6');

parentContainer6.addEventListener('click', event =>{
    const current6 = event.target;

    const isReadMoreBtn6 = current6.className.includes('read-more-btn6');

    if(!isReadMoreBtn6) return;

    const currentText6 = event.target.parentNode.querySelector('.read-more-text6');

    currentText6.classList.toggle('read-more-text--show6');

    current6.textContent = current6.textContent.includes('Read More') ? "Read Less" : "Read More";
})


// section 7

const parentContainer7 = document.querySelector('.read-more-container7');

parentContainer7.addEventListener('click', event =>{
    const current7 = event.target;

    const isReadMoreBtn7 = current7.className.includes('read-more-btn7');

    if(!isReadMoreBtn7) return;

    const currentText7 = event.target.parentNode.querySelector('.read-more-text7');

    currentText7.classList.toggle('read-more-text--show7');

    current7.textContent = current7.textContent.includes('Read More') ? "Read Less" : "Read More";
})
