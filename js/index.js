function getInputValue(id){
    return parseFloat(document.getElementById(id).value);
}

function getOutValue(id){
    return parseFloat(document.getElementById(id).innerText);
}

function getbtn(id){
    return document.getElementById(id);
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


//   history item
    const historyItem=document.createElement('div');
    historyItem.className='bg-white p-6 space-y-3 rounded-md border border-indigo-500 ';

    historyItem.innerHTML=`
   
    
      <p  class='  text-black font-bold'> ${firstDoante} Taka is Donated for famine-2024 at Feni, Bangladesh</p>
         <p class='  text-gray-500'>${new Date()}</p>

    `
const historyContainer=document.getElementById('history-list');
historyContainer.insertBefore(historyItem,historyContainer.firstChild)
   
    
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
  
    // history itrm
    const historyItem=document.createElement('div');
    historyItem.className='bg-white p-6 space-y-3 rounded-md border border-indigo-500 gap-3';

    historyItem.innerHTML=`

    
      <p  class='  text-black font-bold'> ${firstDoante} Taka is Donated for Flood Relief in Feni,Bangladesh</p>
            <p class='  text-gray-500'>${new Date()}</p>

    `
const historyContainer=document.getElementById('history-list');
historyContainer.insertBefore(historyItem,historyContainer.firstChild)
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

        // history item
        const historyItem=document.createElement('div');
        historyItem.className='bg-white space-y-3 p-6 rounded-md border border-indigo-500 gap-3';
    
        historyItem.innerHTML=`
     
        
          <p  class='  text-black font-bold'> ${firstDoante}  Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
               <p class='  text-gray-500'>${new Date()}</p>
    
        `
    const historyContainer=document.getElementById('history-list');
    historyContainer.insertBefore(historyItem,historyContainer.firstChild);
    
        })



        // donation btn
    const donationBtn= document.getElementById('donation-btn')
    donationBtn.addEventListener('click',function(){

        donationBtn.classList='bg-[#B4F461] py-3 px-6 rounded-lg font-bold';
        const historyBtn=getbtn('history-button');
        historyBtn.classList.remove('bg-[#B4F461]', 'py-3', 'px-6', 'rounded-lg', 'font-bold');


      document.getElementById('history-section').classList.add('hidden');
     document.getElementById('all-divs').classList.remove('hidden');
      
        })

        

        
    //    histry button

   const historyBtn= document.getElementById('history-button')
   historyBtn.addEventListener('click',function(){
   

    historyBtn.classList='bg-[#B4F461] py-3 px-6 rounded-lg font-bold';
    const donationBtn=getbtn('donation-btn');
    donationBtn.classList.remove('bg-[#B4F461]', 'py-3', 'px-6', 'rounded-lg', 'font-bold');
    
     document.getElementById('all-divs').classList.add('hidden');
     document.getElementById('history-section').classList.remove('hidden')


   })