function display(val)
{
 document.getElementById("textval").value+=val
 }
function evaluate1()
{
 let x_val = document.getElementById("textval").value
 let y = eval(x_val)
document.getElementById("textval").value = y
}
function clr()
{
 document.getElementById("textval").value = ""
}
