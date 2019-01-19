function bold(){
    document.getElementById("para").style.fontWeight="bold"
}
function italic(){
    document.getElementById('para').style.fontStyle="italic"
}
function underline(){
    document.getElementById('para').style.textDecoration="underline"
} 
function changesize(){
    var select =document.getElementById('Size')
    var Size = select.options[select.selectedIndex].value;
    document.getElementById('para').style.fontSize= Size +"px";
}
function changefont(){
    var select =document.getElementById('font')
    var font = select.options[select.selectedIndex].value;
    document.getElementById('para').style.fontFamily= font;
}
