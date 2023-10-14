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

let fieldset=document.getElementById("fieldset");
    let fieldset1 = document.createElement("fieldset");
    fieldset1.setAttribute("style", "background-color:white;border:3px solid #ccc;padding-left:80px;width:500px;height:560px;margin:30px 30px 30px 300px;color:black");
    fieldset.appendChild(fieldset1);

    let legend=document.createElement("legend");
    legend.setAttribute("style", "color:black");
    legend.textContent="REGISTER FORM";
    fieldset1.appendChild(legend);

    let form=document.createElement("form");
    fieldset1.appendChild(form);

    let label=document.createElement("label");
    label.setAttribute("style", "color:black");
    label.textContent="Name";
    form.appendChild(label);
    let input=document.createElement("input");
    input.setAttribute("type","text");
    input.setAttribute("name","name");
    input.setAttribute("style","margin-top:20px;margin-bottom:10px;margin-left:100px");
    input.setAttribute("placeholder","Enter Name");
    form.appendChild(input);

    let br=document.createElement("br");
    form.appendChild(br);

    let label1=document.createElement("label");
    label1.setAttribute("style", "color:black");
    label1.textContent="Email";
    form.appendChild(label1);
    let input1=document.createElement("input");
    input1.setAttribute("type","text");
    input1.setAttribute("name","email");
    input1.setAttribute("style","margin-bottom:10px;margin-left:100px");
    input1.setAttribute("placeholder","Enter Email");
    form.appendChild(input1);

    let br1=document.createElement("br");
    form.appendChild(br1);

    let label2=document.createElement("label");
    label2.setAttribute("style", "color:black");
    label2.textContent="Username";
    form.appendChild(label2);
    let input2=document.createElement("input");
    input2.setAttribute("type","text");
    input2.setAttribute("name","username");
    input2.setAttribute("style","margin-bottom:10px;margin-left:80px");
    input2.setAttribute("placeholder","Enter Username");
    form.appendChild(input2);

    let br2=document.createElement("br");
    form.appendChild(br2);

    let label3=document.createElement("label");
    label3.setAttribute("style", "color:black");
    label3.textContent="Password";
    form.appendChild(label3);
    let input3=document.createElement("input");
    input3.setAttribute("type","password");
    input3.setAttribute("name","paswword");
    input3.setAttribute("style","margin-bottom:10px;margin-left:25px");
    input3.setAttribute("placeholder","Enter Password");
    form.appendChild(input3);

    let br3=document.createElement("br");
    form.appendChild(br3);

    let label4=document.createElement("label");
    label4.setAttribute("style", "color:black");
    label4.textContent="Blood Group";
    form.appendChild(label4);
    let select=document.createElement("select");
    select.setAttribute("name","bloodgroup");
    select.setAttribute("style","margin-bottom:10px;margin-left:50px;width:180px");
    let option=document.createElement("option");
    
    let arrOption =["A+","B+","O+","A-","B-","O-","AB+","AB-"];
    for(i=0;i<=arrOption.length;i++) 
    {
        option=document.createElement("option");
        option.text=arrOption[i];
        select.appendChild(option);
    }
    form.appendChild(select);

    let br4=document.createElement("br");
    form.appendChild(br4);

    let label5=document.createElement("label");
    label5.setAttribute("style", "color:black");
    label5.textContent="Address";
    form.appendChild(label5);

    let textarea=document.createElement("textarea");
    textarea.setAttribute("name","address");
    textarea.setAttribute("placeholder","Enter Address");
    textarea.setAttribute("style","margin-left:100px");
    //textarea.setAttribute("style", "background-color:white;border:3px solid #ccc;padding-left:300px;width:500px;height:560px;margin:30px 30px 30px 300px;color:black");
    form.appendChild(textarea);

    let br5=document.createElement("br");
    form.appendChild(br5);

    let label6=document.createElement("label");
    label6.setAttribute("style", "color:black");

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
       

