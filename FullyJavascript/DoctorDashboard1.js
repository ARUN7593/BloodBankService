let header = document.getElementById("header");
    let header1=document.createElement("header");
    header1.setAttribute("style", "background-color:red;font-size:30px;text-align:center;border:1px solid #ccc;padding: 10px;margin:10px;color:white")
    header1.textContent="Helping Trust Blood Bank Management";
    header.appendChild(header1);

let navbar=document.getElementById("navbar");
let navbar1=document.createElement("nav");
navbar1.setAttribute("style", "background-color: #cccc");
    let ul=[{text:"Home",url:"HomePage.html"},
            {text:"Register",url:"Register.html"},
            {text:"Login",url:"Login.html"},
            {text:"Admin",url:"AdminDashboard.html"},
            {text:"Doctor",url:"DoctorDashboard.html"},
            {text:"Donor",url:"DonorDashboard.html"},
            {text:"Service",url:"Service.html"},
            {text:"Contact us",url:"Contact.html"},
            {text:"About us",url:"About.html"}];
    
    for(let link of ul)
    {
        let lt=document.createElement("a");
        lt.text=link.text;
        lt.href=link.url;
        lt.setAttribute("style","background-color:white;color: red;margin:5px;padding-right:20px;margin-left:10px;text-decoration:none;border:0px solid black; padding:8px;margin-top:10px");
        
        lt.addEventListener("onmouseover", moveFunction1);
        function moveFunction1(){
            lt.style.backgroundColor="red";
            lt.style.color="white";
        }
        lt.addEventListener("onmouseout", moveFunction2);
        function moveFunction2(){
            lt.style.backgroundColor="white";
            lt.style.color="red";
          
        }
        navbar1.appendChild(lt);
    }
    navbar.appendChild(navbar1);

    let section=document.getElementById("section1");
    let donorSection = document.getElementById("section1"); 
    section.setAttribute("style","display:flex;text-align:center;color:red");

    let secArrayName = ["LOGIN", "VIEWER", "ACCEPTED", "REJECTED"];

    for(let i = 0; i < secArrayName.length; i++) 
     {  
       let div1=document.createElement("div");
       div1.textContent=secArrayName[i];
       div1.setAttribute("id", secArrayName[i]);
       div1.setAttribute("style","border:1px solid black;width:400px;height:200px;background-color:white;padding:10px;margin:10px;color:blue;font-size:12px;font-weight:bold");
       donorSection.appendChild(div1);
    }
    section.appendChild(donorSection);
    
let footer=document.getElementById("footerId");
    let footer1=document.createElement("footer");
    footer1.setAttribute("style", "background-color:#ccc;text-align:center;border:1px solid #ccc;color:red");
    footer1.textContent="Helping Trust";
    footer.appendChild(footer1);
