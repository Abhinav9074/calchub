function buttonclick(val)
{
    console.log(val)
    document.getElementById("screen").value=document.getElementById("screen").value+val;
}
function cleartext()
{
    document.getElementById("screen").value=""
}
function equalclick()
{
    var text=document.getElementById("screen").value
    var result= eval(text)
    document.getElementById("screen").value=result
}
function aboutclick()
{
    document.getElementById("screen").value="Credits : @_abhin__av_"  
}