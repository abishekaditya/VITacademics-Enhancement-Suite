var link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = 'http://fonts.googleapis.com/css?family=Raleway:700';
document.getElementsByTagName('head')[0].appendChild(link);

document.getElementsByTagName('form')[0].style.display="none";
 var nav = document.getElementsByTagName('form')[0];
	var div1 = document.createElement("div");
	div1.setAttribute("class", "text-wrapper");
	var div2 = document.createElement("div");
	div2.setAttribute("class","title");
	div2.setAttribute("data-content","404");
	var t1 = document.createTextNode("Session Expired");
	div2.appendChild(t1);
	var div3 = document.createElement("div");
	div3.setAttribute("class","subtitle");
	var t2 = document.createTextNode("I've got some bad news, pal.");
	div3.appendChild(t2);
	var div4 = document.createElement("div");
	div4.setAttribute("class","buttons");
	var tag1 = document.createElement("a");
	tag1.setAttribute("href", "https://vtop.vit.ac.in/student/stud_login.asp");
	tag1.setAttribute("target", "_blank");
	tag1.setAttribute("class", "button1");
	var t3 = document.createTextNode("Go To Login Page");
	tag1.appendChild(t3);
	div4.appendChild(tag1);
	div1.appendChild(div2);
	div1.appendChild(div3);
	div1.appendChild(div4);
	 nav.parentElement.appendChild(div1);
