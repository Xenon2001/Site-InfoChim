function carte()
{
    var x=document.getElementById('cover1');
    x.classList.toggle('covers2');
    x.classList.remove('covers');
    var y=document.getElementById('cover2');
    y.classList.toggle('covers2');
    y.classList.remove('covers');
    document.getElementById('book_open').style.display='inline-block';
    document.getElementById('back').style.display='inline-block';
    document.getElementById('book_open').style.transform="translate(-50%,-50%) scale(1.3)";
    document.getElementById('book_open').style.transformOrigin="center";
}
function notebook()
{
    var x=document.getElementById('cover1');
    x.classList.toggle('covers2');
    x.classList.remove('covers');
    var y=document.getElementById('cover2');
    y.classList.toggle('covers2');
    y.classList.remove('covers');
    document.getElementById('notebook_open').style.display='inline-block';
    document.getElementById('back2').style.display='inline-block';
}
function back1()
{
    document.getElementById('book_open').style.display='none';
    document.getElementById('notebook_open').style.display='none';
    var x=document.getElementById('cover1');
    x.classList.toggle('covers');
    x.classList.remove('covers2');
    var y=document.getElementById('cover2');
    y.classList.toggle('covers');
    y.classList.remove('covers2'); 
    document.getElementById('back').style.display='none';
	document.getElementById('cover1').classList.toggle("rotateBack");
	f2();

}
function back2()
{
    document.getElementById('book_open').style.display='none';
    document.getElementById('notebook_open').style.display='none';
    var x=document.getElementById('cover1');
    x.classList.toggle('covers');
    x.classList.remove('covers2');
    var y=document.getElementById('cover2');
    y.classList.toggle('covers');
    y.classList.remove('covers2'); 
    document.getElementById('back2').style.display='none';
	document.getElementById('cover2').classList.toggle("rotateBack");
	f2();
}
function rotate1()
{
    document.getElementById('cover1').classList.toggle("rotateBack");
}
function rotate2()
{
    document.getElementById('cover2').classList.toggle("rotateBack");
}

function n()
{
	document.getElementById("c0").style.display="none";
	document.getElementById("c1").style.display="block";
}
function n1()
{
	document.getElementById("c1").style.display="none";
	document.getElementById("c2").style.display="block";
}
function n2()
{
	document.getElementById("c2").style.display="none";
	document.getElementById("c3").style.display="block";
}
function n3()
{
	document.getElementById("c3").style.display="none";
	document.getElementById("c4").style.display="block";
}
function n4()
{
	document.getElementById("c4").style.display="none";
	document.getElementById("c5").style.display="block";
}
function n5()
{
	document.getElementById("c5").style.display="none";
	document.getElementById("c6").style.display="block";
}
function n6()
{
	document.getElementById("c6").style.display="none";
	document.getElementById("c7").style.display="block";
}
function n7()
{
	document.getElementById("c7").style.display="none";
	document.getElementById("c8").style.display="block";
}
function n8()
{
	document.getElementById("c8").style.display="none";
	document.getElementById("c9").style.display="block";
}
function n9()
{
	document.getElementById("c9").style.display="none";
	document.getElementById("c10").style.display="block";
}
function n10()
{
	document.getElementById("c10").style.display="none";
	document.getElementById("c11").style.display="block";
}
function n11()
{
	document.getElementById("c11").style.display="none";
	document.getElementById("c12").style.display="block";
}
function n12()
{
	document.getElementById("c12").style.display="none";
	document.getElementById("c13").style.display="block";
}



function b1()
{
	document.getElementById("c0").style.display="block";
	document.getElementById("c1").style.display="none";
}
function b2()
{
	document.getElementById("c1").style.display="block";
	document.getElementById("c2").style.display="none";
}
function b3()
{
	document.getElementById("c2").style.display="block";
	document.getElementById("c3").style.display="none";
}
function b4()
{
	document.getElementById("c3").style.display="block";
	document.getElementById("c4").style.display="none";
}
function b5()
{
	document.getElementById("c4").style.display="block";
	document.getElementById("c5").style.display="none";
}
function b6()
{
	document.getElementById("c5").style.display="block";
	document.getElementById("c6").style.display="none";
}
function b7()
{
	document.getElementById("c6").style.display="block";
	document.getElementById("c7").style.display="none";
}
function b8()
{
	document.getElementById("c7").style.display="block";
	document.getElementById("c8").style.display="none";
}
function b9()
{
	document.getElementById("c8").style.display="block";
	document.getElementById("c9").style.display="none";
}
function b10()
{
	document.getElementById("c9").style.display="block";
	document.getElementById("c10").style.display="none";
}
function b11()
{
	document.getElementById("c10").style.display="block";
	document.getElementById("c11").style.display="none";
}
function b12()
{
	document.getElementById("c11").style.display="block";
	document.getElementById("c12").style.display="none";
}
function f(ce)
{
    var x=document.getElementById('cover1');
    x.classList.toggle('covers2');
    x.classList.remove('covers');
    var y=document.getElementById('cover2');
    y.classList.toggle('covers2');
    y.classList.remove('covers');
    if(ce=="book")
        document.getElementById('book_open').style.display='inline-block';
    else
        document.getElementById('notebook_open').style.display='inline-block';
    document.getElementById('back').style.display='inline-block';
}
function f2()
{
    location=location;
}
function deschide(categorie){
    document.getElementById("container").style.display="block";
    include(categorie+'.js');
    console.log(categorie);
    include('quiz.js');
}
function include(file)
{

  var script  = document.createElement('script');
  script.src  = file;
  script.type = 'text/javascript';
  script.defer = true;
  document.getElementsByTagName('head').item(0).appendChild(script);
}
