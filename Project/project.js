window.alert("MyHotelBooking.com wants to u send Notifications !  "); 


var check=false;

setTimeout(function(){

    var a=window.confirm(`Golden-Galaxy want's to use your COOKIES , for your Better Expereince !!!`);

    if(a==true){
        window.alert("THANKS !  WE WILL PROVIDE YOU BEST USER EXPERIENCE !!! "); 
        
    }


    else{

        
        window.alert("Sorry , we are unable to use your cookies , to accept it please Refresh the page Again !! "); 
    }


},2000)









// shorcut faq


// $(".bars-container").click(function(){

//     $("#navbar").style.display="block";

//     console.log("bars-clickedd");
// })




let progress =document.getElementById("progressbar");


let totalheight=document.body.scrollHeight-window.innerHeight;

window.onscroll=function(){
    let progressheight=(window.pageYOffset / totalheight ) *100;


    progress.style.height=progressheight + "%";
}









document.getElementById("bot").addEventListener("click",function(){
   document.getElementById("commonfaq").style.visibility="visible";
})




document.getElementById("close").addEventListener("click",function(){
    document.getElementById("commonfaq").style.visibility="hidden";
 })
 





function wifi(){
    var str="wifi- Free Over Every Booking ";
    var patt=/Free Over Every Booking/gi;
    var result=str.match(patt);

    document.getElementById("chatlog").innerHTML=result;
}



function spa(){
    var str="spa- Booking Above 10,000";
    var patt=/Booking Above 10,000/gi;
    var result=str.match(patt);

    document.getElementById("chatlog").innerHTML=result;
}




function cancel(){
    var str="A guest could cancel their reservation at any time, however any deposits or payments made on the reservation are non-refundable. Cancellations will only be accepted in writing, please send to abcdef@gmail.com.";
    var patt=/A guest could cancel their reservation at any time, however any deposits or payments made on the reservation are non-refundable. Cancellations will only be accepted in writing, please send to abcdef@gmail.com./gi;
    var result=str.match(patt);

    document.getElementById("chatlog").innerHTML=result;
}








function offer(){
    
    var offer1 ="OFFERS : <br> OFFER1 : This festive season, celebrate joy, purity and the finest hospitality Valid till -  5th Apr 2021  <br><br>  OFFER2 : Limited Period Offer Avail 21% savings on Member Rates for Best Available Rate and Bed & Breakfast , Valid till 28 Feb 2021";    
    
    var first=/OFFER[a-z A-Z , 0-9 , -:<br>]*/gi;   
    
    let final1=offer1.match(first);
    
   document.getElementById("chatlog").innerHTML=final1+ "<br>" ;
  
}



function fitness(){

    var fit ="Fitness Center : <br> We ensure that even when you are away from home, you dont compromise on your health and fitness routine , we offers guests a state of the art gymnasium, along with a swimming pool. With fitness instructors on the floor from 6:00 a.m. to 10:00 p.m., our guests can comfortably use the machines and free weights with proper attention from trained professionals.";    
    
    var choose=/Fitness Center[a-z A-Z , 0-9 , -:<br>]*/gi;   
    
    let select=fit.match(choose);
    
   document.getElementById("chatlog").innerHTML=select+ "<br>" ;

}





document.getElementById("wifi").style.height="57px";

document.getElementById("spa").style.height="57px";

document.getElementById("cancel").style.height="42px";


document.getElementById("offer").style.height="57px";


document.getElementById("fitness").style.height="57px";


//---------------



//--reviews given


var a=document.getElementsByClassName("fix");
a.style.color="yellow";



// document.getElementById("star1").addEventListener("mousover",function(){
//     document.getElementById("star1").style.color= "yellow";
// },true)


// document.getElementById("star1").addEventListener("mouseout",function(){
//     document.getElementById("star1").style.color = "black";
// },true)



// document.getElementById("stars").addEventListener("mouseout",function(){
//     document.getElementById("stars").style.color = "black";
// },true)




// document.getElementById("star2").addEventListener("mouseover",function(){
//     document.getElementById("star2").style.color = "yellow";
// },true)


// document.getElementById("star2").addEventListener("mouseout",function(){
//     document.getElementById("star2").style.color = "black";
// },true)





// document.getElementById("star3").addEventListener("mouseover",function(){
//     document.getElementById("star3").style.color = "yellow";
// },true)


// document.getElementById("star3").addEventListener("mouseout",function(){
//     document.getElementById("star3").style.color = "black";
// },true)




// document.getElementById("star4").addEventListener("mouseover",function(){
//     document.getElementById("star4").style.color = "yellow";
// },true)


// document.getElementById("star4").addEventListener("mouseout",function(){
//     document.getElementById("star4").style.color = "black";
// },true)






// document.getElementById("star4").addEventListener("mouseover",function(){
//     // document.getElementById("star5").style.color = "yellow";
//     document.getElementById("star1").style.color = "yellow";
//     document.getElementById("star2").style.color = "yellow";
//     document.getElementById("star3").style.color = "yellow";
//     document.getElementById("star4").style.color = "yellow";
// },true)




// document.getElementById("star4").addEventListener("mouseout",function(){
//     // document.getElementById("star5").style.color = "black";
//     document.getElementById("star1").style.color = "black";
//     document.getElementById("star2").style.color = "black";
//     document.getElementById("star3").style.color = "black";
//     document.getElementById("star4").style.color = "black";
// },true)




// document.getElementById("star4").addEventListener("click",function(){
//     // document.getElementById("star5").style.color = "yellow";
//     document.getElementById("star1").style.color = "yellow";
//     document.getElementById("star2").style.color = "yellow";
//     document.getElementById("star3").style.color = "yellow";
//     // document.getElementById("star4").style.color = "yellow";
// },true)




// document.getElementById("star5").addEventListener("mouseover",function(){
//     document.getElementById("star5").style.color = "yellow";
//     document.getElementById("star1").style.color = "yellow";
//     document.getElementById("star2").style.color = "yellow";
//     document.getElementById("star3").style.color = "yellow";
//     document.getElementById("star4").style.color = "yellow";
// },true)




// document.getElementById("star5").addEventListener("mouseout",function(){
//     document.getElementById("star5").style.color = "black";
//     document.getElementById("star1").style.color = "black";
//     document.getElementById("star2").style.color = "black";
//     document.getElementById("star3").style.color = "black";
//     document.getElementById("star4").style.color = "black";
// },true)

// // document.getElementById("star5").addEventListener("mouseout",function(){
// //     document.getElementById("star5").style.color = "black";
// // },false)



// document.getElementById("star5").addEventListener("click",function(){
//     document.getElementById("star1").style.color = "yellow";
//     document.getElementById("star2").style.color = "yellow";
//     document.getElementById("star3").style.color = "yellow";
//     document.getElementById("star4").style.color = "yellow";
//     document.getElementById("star5").style.color = "yellow";
// },true)



