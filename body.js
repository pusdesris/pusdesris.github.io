


//var bottom = tag('footer');
//bottom.innerHTML = '<img id="loading" src="loading.gif" alt="">' + bottom.innerHTML;



//TODO
window.onload = function(){
         //tag('loading').src = 'loadinginactive.gif';
         
        var elapsed = ((new Date().getTime()-started) * 0.001);
        tag('time').innerHTML = 'Page loaded in ' + elapsed + ' seconds.';

	window.onload = null;
}

















