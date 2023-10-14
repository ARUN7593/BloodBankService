	
	let form = document.createElement("form");
	form.setAttribute("method", "post");
	form.setAttribute("action" , "submit");
	form.setAttribute("style","border:1px solid black;width:1580px;height:690px;background-color:white;display:flex")
	document.getElementsByTagName("body")[0].appendChild(form);
	
            
    //variable declaration
    let div1=document.createElement("div");
     //in js setAttribute method used to set the attribute to the tag of a form
    div1.setAttribute("style","border: 1px solid black; margin-left:100px;margin-top:30px; width:500px;height:250px;background-color:skyblue");
    //in js appendChild method used to add corresponding tag to the form
    form.appendChild(div1);

    let h3Var0 = document.createElement("h3");
    h3Var0.setAttribute("style", "color:green;font-weight:bold;text-align:center");
    h3Var0.innerHTML = "BY PHONE";
    div1.appendChild(h3Var0);

    let h3Var1 = document.createElement("h5");
    h3Var1.setAttribute("style", "color:orangered;font-weight:bold;text-align:center");
    h3Var1.innerHTML = "CLICK THE BELOW ICON TO CONTACT US";
    div1.appendChild(h3Var1);
    
    let a11 = document.createElement("a");
    a11.setAttribute("style", "color:orangered;font-weight:bold;text-align:center");
    a11.setAttribute("href", "tel:918608802520");
	let img1 = document.createElement("img");
    img1.setAttribute("style", "width:100px;height:100px;margin-left:100px;margin-top:30px;border-radius:50px;margin-left:200px;border:0px solid black;");
    img1.setAttribute("src", "phone1.png");
    a11.appendChild(img1);
    div1.appendChild(a11);

    //SECOND DIV BY EMAIL

    let div2=document.createElement("div");
    form.appendChild(div2);
    div2.setAttribute("style","border: 1px solid black; margin-left:100px;margin-top:30px; width:500px;height:250px;background-color:skyblue");
    form.appendChild(div2);

    let h3Var11 = document.createElement("h3");
    h3Var11.setAttribute("style", "color:green;font-weight:bold;text-align:center");
    h3Var11.innerHTML = "BY MAILID";
    div2.appendChild(h3Var11);

    let h3Var12 = document.createElement("h5");
    h3Var12.setAttribute("style", "color:orangered;font-weight:bold;text-align:center");
    h3Var12.innerHTML = "CLICK THE BELOW ICON TO CONTACT US";
    div2.appendChild(h3Var12);
    
    let a21 = document.createElement("a");
    a21.setAttribute("style", "color:orangered;font-weight:bold;text-align:center");
    a21.setAttribute("href", "mailto:arunmca7593@gmail.com");
    let img2 = document.createElement("img");
    img2.setAttribute("style", "width:100px;height:100px;margin-left:100px;margin-top:30px;border-radius:50px;margin-left:200px;border:0px solid black;");
    img2.setAttribute("src", "mail1.png");
	a21.appendChild(img2);
	div2.appendChild(a21);
	
	img2.appendChild(a21);
    div2.appendChild(img2);
    