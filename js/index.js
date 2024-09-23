function getInputValue(id){
    return parseFloat(document.getElementById(id).value);
}
function getOutValue(id){
    return parseFloat(document.getElementById(id).innerText);
}

// first donate 
document.getElementById('flood-donate').addEventListener('click',function(event){
    event.preventDefault();
    const firstDoante=getInputValue('donate-amount-one');
    if( firstDoante <= 0 || isNaN(firstDoante)){
        alert('invalid amount')
        return;
    }
  const newBalence =getOutValue('flood-one-value');
   const newamount=newBalence + firstDoante;

    document.getElementById('flood-one-value').innerText=newamount;

    const mainBtn=getOutValue('main-btn');
    const totalAmount=mainBtn-firstDoante;
 
    document.getElementById('main-btn').innerText=totalAmount;
   
    
})

// second donate

document.getElementById('flood-donate-two').addEventListener('click',function(event){
    const firstDoante=getInputValue('donate-amount-two');
    event.preventDefault();
    
    if( firstDoante <= 0 || isNaN(firstDoante)){
        alert('invalid amount')
        return;
    }
  const newBalence =getOutValue('flood-two-value');
   const newamount=newBalence + firstDoante;

    document.getElementById('flood-two-value').innerText=newamount;

    const mainBtn=getOutValue('main-btn');
    const totalAmount=mainBtn-firstDoante;
 
    document.getElementById('main-btn').innerText=totalAmount;
})
   
    // quota

    document.getElementById('quota-donate-three').addEventListener('click',function(event){
        event.preventDefault();
        const firstDoante=getInputValue('donate-amount-three');
        if( firstDoante <= 0 || isNaN(firstDoante)){
            alert('invalid amount')
            return;
        }
      const newBalence =getOutValue('quota-value');
       const newamount=newBalence + firstDoante;
    
        document.getElementById('quota-value').innerText=newamount;
    
        const mainBtn=getOutValue('main-btn');
        const totalAmount=mainBtn-firstDoante;
     
        document.getElementById('main-btn').innerText=totalAmount;
        })
       