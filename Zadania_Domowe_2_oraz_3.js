// wszystkie elementy <div>, posiadające zarówno klasę “grid” oraz klasę “grid-12”.

var zadanie_1_1 = $("div[class='grid'], div[class='grid-12']"); 
var zadanie_1_2 = $(".nav a[href^='http']"); 


var zadanie_1_3 = $("input[type='radio'], input[type='checkbox'], input:not([type='checkbox']:checked)"); 

/* 
<form>
<input type="checkbox" checked>Checkbox</input><br/>
<input type="radio">Radio</input>
</form>
*/

var zadanie_1_4 = $("div#text p:first-child:empty");

/* 
<div id="text">
<p></p>
<p>jeden</p>
<p>dwa</p>
</div>
*/

var zadanie_1_5 = $(".pagination-item *:not('span')");

/*
<div class="pagination-item">
<p>trzy</p>
<span>nie koloruj</span>
<p>jeden</p>
<p>dwa</p>
</div>

<section class="pagination-item">
<p>trzy</p>
<span>nie koloruj</span>
<p>jeden</p>
<p>dwa</p>
</section>
*/