let items = document.querySelectorAll('#btn')
items.forEach((item)=>{
    item.addEventListener('click',orderFood)
})


function orderFood(e){
    let foodItems=document.getElementById('foodItems')
    let orderSuccessfull=document.getElementById('orderSuccessfull')
    foodItems.style.display='none'
    orderSuccessfull.style.display='block'
    
    //manage order detials
    let GST_PERCENTAGE=.18
    let name=e.target.dataset.name
    let price=parseInt(e.target.dataset.price)
    let gst=price*GST_PERCENTAGE  
    let deliveryCharge=price<140 ?40 :0
    let total=price+gst+deliveryCharge
    document.getElementById('name').innerHTML=name
    document.getElementById('price').innerHTML=price
    document.getElementById('gst').innerHTML=gst
    document.getElementById('deliveryCharges').innerHTML=deliveryCharge
    document.getElementById('total').innerHTML=total
}