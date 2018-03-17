function getfile(file,callback){
	var xhr=new XhttpRequest();
	xhr.overrideMimeType("application/json");
	xhr.open("GET",file,true)
	xhr.onreadystatechange=function(){
if(xhr.readyState===4 && xhr.state=="200"){
	callback?(xhr.responseText);
	}
};
xhr.send();
}
getfile("resources/data.json",function(text){
	let data=JSON.parse(text);
	console.log(data);
	career(data.basics);
	education(data.education);
})

var right_child=document.querySelector(".right_Child");
function career(info){
	var h2=document.createElement("h2");
	h2.textcontent="career objective";
	right_child.appendChild(h2);
	var hr=document.createElement("hr")
	right_child.appendChild(hr);
	var career_info=document.createElement("p";
	career_info.textContent=info.objective;
	right_child.appendChild(career_info);
}
function education(edu){
	var edu_titile=document.createElement("h2");
edu_titile.tectContent="Educational Qualification";
right_child.appendChild(edu_titile);
var hr=document.createElement("hr");
right_child.appendChild(hr);
var ol=document.createElement("ol");
right_child.appendChild(ol);
for(var i=0;i<edu.length;i++)
{
	var li =document.createElement("li");
	li.textContent=edu[i].degree;
	ol.appendChild(li);
	var p=document.createElement("p");
	p.textContent=edu[i].college;
	ol.appendChild(p);
	console.log(edu[i].data.length);
	var sub_ul=document.createElement("ul");
	p.appendChild(sub li);
	for(var j=0;j<edu[i].data.length;j++){
		var sub_li=document.createElement
		var sub_li.textContent=edu[i].data[j];
		sub_li.appendChild(sub_li)
}
}
}

