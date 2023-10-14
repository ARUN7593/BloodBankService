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
            {text:"Service",url:"Service.html"},
            {text:"Contact us",url:"Contact.html"},
            {text:"About us",url:"Aboutus.html"},
            {text:"Program",url:"Program.html"},
            {text:"Download",url:"download.html"}];
    
    for(let link of ul)
    {
        let lt=document.createElement("a");
        lt.text=link.text;
        lt.href=link.url;
        lt.setAttribute("style","background-color:white;color: red;margin:5px;padding-right:20px;margin-left:10px;text-decoration:none;border:0px solid black; padding:8px;margin-top:10px");
        navbar1.appendChild(lt);
    }
    navbar.appendChild(navbar1);

let sectionID = document.getElementById("section1");
    let fieldset=document.getElementById("fieldset");
    let fieldset1 = document.createElement("fieldset");
    fieldset1.setAttribute("style", "background-color:white;border:3px solid #ccc;padding-left:80px;width:700px;height:560px;margin:30px 30px 30px 300px;color:black");
    sectionID.appendChild(fieldset1);

    let legend=document.createElement("legend");
    legend.setAttribute("style", "color:black;width:200px");
    legend.textContent="LOGIN FORM";
    fieldset1.appendChild(legend);

    let form=document.createElement("form");
    fieldset1.appendChild(form);

    let label=document.createElement("label");
    label.setAttribute("style", "color:black");
    label.textContent="Username";
    form.appendChild(label);
    let input=document.createElement("input");
    input.setAttribute("type","text");
    input.setAttribute("name","username");
    input.setAttribute("style","margin-top:20px;margin-bottom:10px;margin-left:55px");
    input.setAttribute("placeholder","Enter username");
    form.appendChild(input);

    let br=document.createElement("br");
    form.appendChild(br);

    let label1=document.createElement("label");
    label1.setAttribute("style", "color:black");
    label1.textContent="Password";
    form.appendChild(label1);
    let input1=document.createElement("input");
    input1.setAttribute("type","password");
    input1.setAttribute("name","password");
    input1.setAttribute("style","margin-bottom:10px;margin-left:55px");
    input1.setAttribute("placeholder","Enter Passowrd");
    form.appendChild(input1);

    let br1=document.createElement("br");
    form.appendChild(br1);

    let button=document.createElement("button");
    button.setAttribute("type","submit");
    button.setAttribute("style", "padding-left:20px");
    button.setAttribute("class","btn btn-primary"); 
    button.textContent="Submit";
    form.appendChild(button);
    let button1=document.createElement("button");
    button1.setAttribute("type","reset");
    button1.setAttribute("class","btn btn-danger"); 
    button1.setAttribute("style", "padding-left:20px");
    button1.textContent="Reset";
    form.appendChild(button1);
       
let hr1 = document.createElement("hr");
form.appendChild(hr1);

let spanOutput =document.createElement("span");
spanOutput.setAttribute("id", "spanId");
spanOutput.textContent="RESULT";
form.appendChild(spanOutput);

let brResults = document.createElement("br");
brResults.appendChild(spanOutput);

let spanError =document.createElement("span");
spanError.setAttribute("id", "spanId");
spanError.textContent="ERROR";
form.appendChild(spanError);