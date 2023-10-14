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
    let section1=document.createElement("section");
    section1.setAttribute("style", "float:left;margin-left:900px;border:1px solid #ccc;border-radius: 30% 30% 80% 80%;font-size:70px;width:500px;height:500px;text-align:center;color:white;margin-top:50px;padding: 10px;margin:10px;background-color:red");
    section1.textContent="Helping Trust";
    let image1=document.createElement("img");
    image1.setAttribute("style", "margin-top:100px;border-radius:50%;width:200px;height:200px");
    image1.setAttribute("src","bloodDropImage.png");
    image1.setAttribute("alt","Blood Drop");
    section1.appendChild(image1);
    section.appendChild(section1);

    let section2=document.createElement("section2");
    section2.setAttribute("style", "float:right;padding-right:200px;padding-top:250px;border:0px solid #ccc;color:red;font-size:65px");
    section2.textContent="Blood Bank Management";
    section.appendChild(section2);


let footer=document.getElementById("footerId");
    let footer1=document.createElement("footer");
    footer1.setAttribute("style", "background-color:#ccc;text-align:center;margin-top:623px;border:1px solid #ccc;color:red");
    footer1.textContent="Helping Trust";
    footer.appendChild(footer1);
