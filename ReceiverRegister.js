let mainSection = document.getElementById("mainSection");
mainSection.setAttribute("style","display:flex");
    
    let form = document.createElement("form");
    form.setAttribute("style", "margin-top:20px;margin-left:50px;width:400px;background-color:lightyellow;");
    form.setAttribute("name","registration");
    form.setAttribute("onsubmit","formValidation();");
    let h3=document.createElement("h3");
    h3.textContent="Receiver Register Page";
    form.appendChild(h3);
       
    let label1 = document.createElement("label");
    label1.textContent ="FULLNAME";
    form.appendChild(label1);
    let input1 = document.createElement("input");
    input1.setAttribute("type", "text");
    input1.setAttribute("placeholder", "Enter Fullname");
    input1.setAttribute("id","fullname");
    input1.setAttribute("name","fullname");
    input1.setAttribute("size","20");
    input1.setAttribute("required", "required");
    input1.setAttribute("style", "margin-top:20px;margin-left:20px;");
    form.appendChild(input1);
    let span1=document.createElement("span");
    span1.setAttribute("style", "color:red;");
    span1.setAttribute("id","span1")  
    form.appendChild(span1);     
    let br1=document.createElement("br");
    form.appendChild(br1);

    let label2 = document.createElement("label");
    label2.textContent ="USERNAME";
    form.appendChild(label2);
    let input2 = document.createElement("input");
    input2.setAttribute("type", "text");
    input2.setAttribute("placeholder", "Enter Username");
    input2.setAttribute("id","username");
    input2.setAttribute("name","username");
    input2.setAttribute("size","20");
    input2.setAttribute("required", "required");
    input2.setAttribute("style", "margin-top:20px;margin-left:20px;");
    form.appendChild(input2);
    let span2=document.createElement("span");
    span2.setAttribute("style", "color:red;");
    span2.setAttribute("id","span2")  
    form.appendChild(span2); 

    let br2=document.createElement("br");
    form.appendChild(br2);
    
    let label3 = document.createElement("label");
    label3.textContent ="PASSWORD";
    form.appendChild(label3);
    let input3 = document.createElement("input");
    input3.setAttribute("type", "password");
    input3.setAttribute("placeholder", "Enter password");
    input3.setAttribute("id","password");
    input3.setAttribute("name","password");
    input3.setAttribute("size","20");
    input3.setAttribute("required", "required");
    input3.setAttribute("style", "margin-top:20px;margin-left:20px;");
    form.appendChild(input3);
    let span3=document.createElement("span");
    span3.setAttribute("style", "color:red;");
    span3.setAttribute("id","span3")  
    form.appendChild(span3); 
   
    let br3=document.createElement("br");
    form.appendChild(br3);

    let label4 = document.createElement("label");
    label4.textContent ="GENDER";
    form.appendChild(label4);
        let input41 = document.createElement("input");
        input41.setAttribute("type", "radio");
        let label41=document.createElement("label");
        input41.setAttribute("name","gender");
        input41.setAttribute("id","male");
        input41.setAttribute("style", "margin-top:20px;margin-left:20px;");
        input41.setAttribute("required", "User Id should not be empty");
        label41.textContent="MALE";
    
        let input42 = document.createElement("input");
        input42.setAttribute("type", "radio");
        let label42=document.createElement("label");
        input42.setAttribute("required", "required");
        label42.innerText="FEMALE";
        input42.setAttribute("id","female");
        input42.setAttribute("name","gender");
        input42.setAttribute("style", "margin-top:20px;margin-left:20px;");
        form.appendChild(input41);
        form.appendChild(label41);
        form.appendChild(input42);
        form.appendChild(label42);
        let span4=document.createElement("span");
        span4.setAttribute("style", "color:red;");
        span4.setAttribute("id","span4")  
        form.appendChild(span4); 
    
    let br4=document.createElement("br");
    form.appendChild(br4);

    let label5 = document.createElement("label");
    label5.textContent ="DEGREE";
    form.appendChild(label5);
    let input5 = document.createElement("select");
    input5.setAttribute("placeholder", "Select Degree");
    input5.setAttribute("id","degreeId");
    input5.setAttribute("style", "margin-top:20px;margin-left:20px;");

    let degreeArray=["MBBS","MDS","BDS"];
    for(i=0;i<=degreeArray.length;i++)
    {
        let option1 = document.createElement("option");
        option1.setAttribute("style", "margin-top:20px;margin-left:20px;");
        option1.setAttribute("id","option1");
        option1.setAttribute("name","degree");
        input5.setAttribute("required", "required");
        option1.textContent=degreeArray[i];
        //option1.value=degreeArray[i].value;
        input5.appendChild(option1);
    }
        
    form.appendChild(input5);
    let span5=document.createElement("span");
    span5.setAttribute("style", "color:red;");
    span5.setAttribute("id","span5")  
    form.appendChild(span5); 
    
    let br5=document.createElement("br");
    form.appendChild(br5);

    let label6 = document.createElement("label");
    label6.textContent ="DUTY ON";
    label6.setAttribute("style","margin-right:20px");
    form.appendChild(label6);
    
        let input61=document.createElement("input");
        input61.setAttribute("type", "checkbox");
        input61.setAttribute("id","ipward");
        input61.setAttribute("required", "true");
        input61.setAttribute("style","margin-right:20px");
        form.appendChild(input61);
        let label61=document.createElement("label");
        label61.textContent="I-P Ward";
        label61.setAttribute("style","margin-right:20px");
        form.appendChild(label61);

        let input62=document.createElement("input");
        input62.setAttribute("type", "checkbox");
        input62.setAttribute("id","opward");
        input62.setAttribute("required", "true");
        input62.setAttribute("style","margin-right:20px");
        form.appendChild(input62);
        let label62=document.createElement("label");
        label62.textContent="O-P Ward";
        label62.setAttribute("style","margin-right:20px");
    form.appendChild(label62);
    let span6=document.createElement("span");
        span6.setAttribute("style", "color:red;");
        span6.setAttribute("id","span6")  
        form.appendChild(span6); 

    let br6=document.createElement("br");
    form.appendChild(br6);



        let button1=document.createElement("input");
        button1.setAttribute("type", "submit");
        button1.setAttribute("value", "REGISTER");
        button1.setAttribute("class", "btn btn-primary");
        button1.setAttribute("style","margin-top:30px");
        button1.setAttribute("onclick", "formValidation()");
        form.appendChild(button1);
        let button2=document.createElement("input");
        button2.setAttribute("class", "btn btn-danger");
        button2.setAttribute("type", "reset");
        button2.setAttribute("value","RESET");
        button2.setAttribute("style","margin-left:50px;margin-top:30px");
        button2.setAttribute("onclick", "resetFunction()");
        form.appendChild(button2);
        let button3=document.createElement("input");
        button3.setAttribute("class", "btn btn-success");
        button3.setAttribute("type", "button");
        button3.setAttribute("value","GENERATE ID");
        button3.setAttribute("style","margin-left:50px;margin-top:30px");
        button3.setAttribute("onclick", "generateFunction()");
        form.appendChild(button3);
        
        function generateFunction()
        { 
            setTimeout(alerting,3000);
            let divg1 = document.createElement("div");
            divg1.setAttribute("id","generateDiv");
            divg1.setAttribute("style","border: 1px solid black;width:600px;height:500px;color:black;background-color: lightgreen;margin-left:200px");
            
                let h2 = document.createElement("h2");
                h2.textContent=" Successfully generated RECEIVER id";
                h2.setAttribute("style","background-color:lighttomato;color:black");
                divg1.appendChild(h2);
    
                function getRandom(min, max)
                {
                    return Math.floor(Math.random() * (max - min)) + min;
                }
    
                let para=document.createElement("p");
                para.innerHTML="As Per the records the RECEIVER ID is <h3>RECID"+getRandom(1200,5000)+"<h3>";
    
                divg1.appendChild(para);
    
                let table=document.createElement("table");
                table.setAttribute("style","border:1px solid black;margin:30px");
                    let tr1=document.createElement("tr");
                        let td1=document.createElement("th");
                        td1.setAttribute("style","border:1px solid black;padding:10px");
                        td1.textContent="Fullname";
                        let td2=document.createElement("th");
                        td2.setAttribute("style","border:1px solid black;padding:10px");
                        td2.textContent="Username";
                        let td3=document.createElement("th");
                        td3.setAttribute("style","border:1px solid black;padding:10px");
                        td3.textContent="Password";
                        let td4=document.createElement("th");
                        td4.setAttribute("style","border:1px solid black;padding:10px");
                        td4.textContent="Gender";
                        let td5=document.createElement("th");
                        td5.setAttribute("style","border:1px solid black;padding:10px");
                        td5.textContent="Degree";
                        let td6=document.createElement("th");
                        td6.setAttribute("style","border:1px solid black;padding:10px");
                        td6.textContent="Duty On";
                    tr1.appendChild(td1);
                    tr1.appendChild(td2);
                    tr1.appendChild(td3);
                    tr1.appendChild(td4);
                    tr1.appendChild(td5);
                    tr1.appendChild(td6);
                table.appendChild(tr1);
    
                   /* let tr2=document.createElement("tr");
                        let td11=document.createElement("td");
                        td11.setAttribute("style","border:1px solid black;padding:10px");
                        td11.innerHTML=document.getElementById("fullname").value;
                        let td12=document.createElement("td");
                        td12.setAttribute("style","border:1px solid black;padding:10px");
                        td12.innerHTML=document.getElementById("username").value;
                        let td13=document.createElement("td");
                        td13.setAttribute("style","border:1px solid black;padding:10px");
                        td13.innerHTML=document.getElementById("password").value;
                        let td14=document.createElement("td");
                        td14.setAttribute("style","border:1px solid black;padding:10px");
                        td14.innerHTML=document.getElementById("gender").value;
                        let td15=document.createElement("td");
                        td15.setAttribute("style","border:1px solid black;padding:10px");
                        td15.innerHTML=document.getElementById("degree").value;
                        let td16=document.createElement("td");
                        td16.setAttribute("style","border:1px solid black;padding:10px");
                        td16.innerHTML=document.getElementById("duty").value;
                    tr.appendChild(td11);
                    tr.appendChild(td12);
                    tr.appendChild(td13);
                    tr.appendChild(td14);
                    tr.appendChild(td15);
                    tr.appendChild(td16);
                table.appendChild(tr2);*/
    
    
                divg1.appendChild(table);
                mainSection.appendChild(divg1); 
                function alerting()
                {
                    alert("Register Successful");
                    window.location.href = "ReceiverLogin.html";
                }
        
        }
    mainSection.appendChild(form);

    function registerFunction()
    {
        alert("Register Success!");
    }

    function resetFunction()
    {
        confirm("Are you sure you want to reset");
    }

    function formValidation()
    {
        var fname = document.registration.fullname;
        var uname = document.registration.username;
        var upass = document.registration.password;
        var umsex = document.registration.msex;
        var ufsex = document.registration.fsex;
        var udeg = document.registration.degree;
        var ipward = document.registration.ipward;
        var opward = document.registration.opward;
         
        if(fullname_validation(fname,5,12))
        {
            if(username_validation(uname,7,12))
            {
                if(userpass_validation(upass,7,12))  
                {
                    if(email_validation(uemail))// if(allLetter(uname))
                    {
                        if(validsex(umsex,ufsex))//if(alphanumeric(uadd))
                        { 
                            if(degree_validation(udeg))
                            {
                                if(duty_validation(ipward,opward))
                                {
                                    
                                }
                            }
                        }
                    }
                }
            }
        }
        return false;
    }
    function fullname_validation()
    {
        var fname = document.registration.fullname;
        var fname_len = fname.value.length;
        if (fname_len == 0 || fname_len >= 12 || fname_len < 5)
        {
            alert("Full Name should not be empty / length be between 5 to 12");
            document.getElementById('span1').innerHTML = "Full Name should not be empty / length be between 5 to 12";
            fname.focus();
            return false;
        }
        else{
            document.getElementById('span1').innerHTML = "valid";
            document.getElementById('span1').style.color="green";
            return true;
        }
    }
    function username_validation()
    {
        var uname = document.registration.username;
        var uname_len = uname.value.length;
        if (uname_len == 0 || uname_len >= 12 || uname_len < 7)
        {
            alert("User Name should not be empty / length be between 7 to 12");
            document.getElementById('span2').innerHTML = "Full Name should not be empty / length be between 5 to 12";
            uname.focus();
            return false;
        } else{
            document.getElementById('span2').innerHTML = "valid";
            document.getElementById('span2').style.color="green";
            return true;
        }
    }
    function userpass_validation()
    {
        var upass = document.registration.password;
        var upass_len = upass.value.length;
        if (upass_len == 0 || upass_len >= 12 || upass_len < 7)
        {
            alert("Password should not be empty / length be between 7 to 12");
            document.getElementById('span3').innerHTML = "Full Name should not be empty / length be between 5 to 12";
            upass.focus();
            return false;
        } else{
            document.getElementById('span3').innerHTML = "valid";
            document.getElementById('span3').style.color="green";
            return true;
        }
    }
   /* function email_validation()
    {
        var uemail = document.registration.email;
        var atpos = uemail.indexOf("@");
        var dotpos = uemail.lastIndexOf(".");
        if (atpos<1 || dotpos<atpos+2 || dotpos+2>=uemail.length)
        {
            alert("Email should be valid");
            document.getElementById('span4').innerHTML = "Full Name should not be empty / length be between 5 to 12";
            uemail.focus();
            return false;
        } else{
            document.getElementById('span4').innerHTML = "valid";
            document.getElementById('span4').style.color="green";
            return true;
        }
    }
    */
    function validsex(umsex,ufsex)
    {
        x=0;

        if(umsex.checked) 
        {
            x++;
        }
        if(ufsex.checked)
        {
            x++; 
        }
        if(x==0)
        {
            alert('Select Male/Female');
            document.getElementById('span5').innerHTML = "Full Name should not be empty / length be between 5 to 12";
            umsex.focus();
            return false;
        }
        else{
            document.getElementById('span5').innerHTML = "valid";
            document.getElementById('span5').style.color="green";
            return true;
        }
        
    }
   /* function address_validation()
    {
        var uaddr = document.registration.address;
        var uaddr_len = uaddr.value.length;
        if (uaddr_len == 0 || uaddr_len >= 12 || uaddr_len < 7)
        {
            alert("Address should not be empty / length be between 7 to 12");
            document.getElementById('span6').innerHTML = "Full Name should not be empty / length be between 5 to 12";
            uaddr.focus();
            return false;
        }
        return true;
    }
    function countryselect(country)
    {
        var ucountry = document.registration.country;
        var ucountry_len = ucountry.value.length;
        if (ucountry_len == 0 || ucountry_len >= 12 || ucountry_len < 7)
        {
            alert("Country should not be empty / length be between 7 to 12");
            document.getElementById('span6').innerHTML = "Full Name should not be empty / length be between 5 to 12";
            ucountry.focus();
            return false;
        }
        return true;
    }
    function allnumeric(uzip)
    {
        var uzip = document.registration.zip;
        var uzip_len = uzip.value.length;
        if (uzip_len == 0 || uzip_len >= 12 || uzip_len < 7)
        {
            alert("Zip should not be empty / length be between 7 to 12");
            uzip.focus();
            return false;
        }
        return true;
    }*/
    function duty_validation()
    {
        var uduty = document.registration.degree;
        var uduty_len = uduty.value;
        x=0;

        if(uduty_len.checked) 
        {
            x++;
        }
        if (uduty_len == 0)
        {
            alert("Degree should not be empty / length be between 7 to 12");
            document.getElementById('span7').innerHTML = "Full Name should not be empty / length be between 5 to 12";
            udeg.focus();
            return false;
        }
        else
        {
            setTimeout(alerting, 3000);
            function alerting()
            {
                alert("Register Successful");
                window.location.href = "ReceiverDashboard.html";
            }
            return true;
        }
    }