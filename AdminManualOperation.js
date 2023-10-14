let mainSection = document.getElementById("mainSection");

    let form = document.createElement("form");
    form.setAttribute("action", "AdminDashboard.html");
    form.name="loginpage";
    form.setAttribute("style", "margin-top:100px;margin-left:350px;");
    let h3=document.createElement("h3");
    h3.textContent="Admin Login Page";
    form.appendChild(h3);
        let label1 = document.createElement("label");
        label1.textContent ="USERNAME";
        form.appendChild(label1);
        let input1 = document.createElement("input");
        input1.setAttribute("type", "text");
        input1.setAttribute("placeholder", "Enter Username");
        input1.setAttribute("name","username");
        input1.setAttribute("id","username");
        input1.setAttribute("style", "margin-top:20px;margin-left:20px;");
        form.appendChild(input1);
        let span1=document.createElement("span");
        span1.setAttribute("style", "color:red;");
        span1.setAttribute("id","span1")  
        form.appendChild(span1); 


        let br1=document.createElement("br");
        form.appendChild(br1);
        
        let label2 = document.createElement("label");
        label2.textContent ="PASSWORD";
       form.appendChild(label2);
        let input2 = document.createElement("input");
        input2.setAttribute("type", "password");
        input2.setAttribute("placeholder", "Enter password");
        input2.setAttribute("name","password");
       // input2.setAttribute("class","form-control");
        input2.setAttribute("id","password");
        input2.setAttribute("style", "margin-top:20px;margin-left:20px;");
        form.appendChild(input2);
        let span2=document.createElement("span");
        span2.setAttribute("style", "color:red;");
        span2.setAttribute("id","span2")  
        form.appendChild(span2); 

        let br2=document.createElement("br");
        form.appendChild(br2);

        let button1=document.createElement("input");
        button1.setAttribute("type", "button");
        button1.setAttribute("value", "LOGIN");
        button1.setAttribute("class", "btn btn-primary");
        button1.setAttribute("style","margin-top:30px");
        button1.setAttribute("onclick", "validateFunction()");
        form.appendChild(button1);
        let button2=document.createElement("input");
        button2.setAttribute("class", "btn btn-danger");
        button2.setAttribute("type", "reset");
        button2.setAttribute("value","RESET");
        button2.setAttribute("style","margin-left:100px;margin-top:30px");
        button2.setAttribute("onclick", "resetFunction()");
        form.appendChild(button2);

    mainSection.appendChild(form);

    
    function validateFunction()
    {
        var uname = document.loginpage.username;
        var upass = document.loginpage.password;
        
        if(username_validation(uname,7,12))
        {
            if(userpass_validation(upass,7,12))  
            {
    
            }
        }
        return false;

    }
    

    function username_validation()
    {
        var uname = document.loginpage.username;
        var uname_len = uname.value.length;
        if (uname_len == 0 || uname_len >= 12 || uname_len < 7)
        {
            alert("User Name should not be empty / length be between 7 to 12");
            document.getElementById('span1').innerHTML = " Full Name should not be empty / length be between 5 to 12";
            document.getElementById('span1').style.color="red";
            uname.focus();
            return false;
        } else{
            document.getElementById('span1').innerHTML = " valid";
            document.getElementById('span1').style.color="green";
            return true;
        }
    }
    function userpass_validation()
    {
        var upass = document.loginpage.password;
        var upass_len = upass.value.length;
        if (upass_len == 0 || upass_len >= 12 || upass_len < 7)
        {
            alert("Password should not be empty / length be between 7 to 12");
            document.getElementById('span2').innerHTML = " Full Name should not be empty / length be between 5 to 12";
            document.getElementById('span2').style.color="red";
            upass.focus();
            return false;
        } else{
            setTimeout(alerting, 3000);
            document.getElementById('span2').innerHTML = " valid";
            document.getElementById('span2').style.color="green";
            return true;
           
            function alerting()
            {
                alert("Login Successful");
                window.location.href = "AdminDashboard.html";
            }
        }
    }

    function resetFunction()
    {
        confirm("Are you sure you want to reset");
    }