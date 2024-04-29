
var songCodes = [
    { 'title':'Abodatwoi', 'artist':'Gasmilla','code':509538},
    { 'title':'Afi Ab3 Tu Y3n', 'artist':'eShun',	'code':7173413},
    { 'title':'African Woman', 'artist':'Becca', 'code':287547},
    { 'title':'Ay3ka', 'artist':'EB3FAGANG', 'code':666227},
    { 'title':'Hello Hello', 'artist':'Ofori Amponsah', 'code':143},
    { 'title':'Hw3', 'artist':'Becca', 'code':943399},
    { 'title':'Inspiration', 'artist':'Zeal King', 'code':653581},
    { 'title':'Krokro Me', 'artist':'Amakye Dede', 'code':128},
    { 'title':'Letter To My Love', 'artist':'Gabby Kan', 'code':6661304},
    { 'title':'Made In Ghana', 'artist':'Okyeame Kwame', 'code':9603452},
    { 'title':'Nkwa', 'artist':'Phillipa Baaafi', 'code':484},
    { 'title':'Odo Shock', 'artist':'Nana Quame', 'code':391},
    { 'title':'Seihor', 'artist':'Castro ft DBlack', 'code':653529},
    { 'title':'Shame On You', 'artist':'Morris Babyface', 'code':111954},
    { 'title':'Shidaa', 'artist':'Ataa Kofi', 'code':6661507},
    { 'title':'Twaso (Acapella)', 'artist':'Daasebre Dwamena', 'code':552},
    { 'title':'Ye Nea Woho Beto Wu', 'artist':'Daddy Lumba', 'code':653488},
    { 'title':'Yeeko', 'artist':'Okyeame Kwame', 'code':7833429},
    { 'title':'Yenko', 'artist':'Big Ghun', 'code':8623411},
    { 'title':'You Lied to Me (Remix)', 'artist':'Becca', 'code':412}

];

var array = [];



var array_length;
var table_size = 10;
var start_index;
var end_index;
var current_index = 1; 
var max_index;


var pagination = $('#index-btns');
var pagination_buttons = $('#index-btns button');


function displayIndexButtons(){

    preloadCalculations();

    pagination_buttons.remove()
    pagination.append('<button class="btn" onclick = "prev()">Previous</button>');

    for(var i=1; i<=max_index; i++){
        pagination.append('<button index="'+i+'" class="btn" onclick = "indexPagination('+i+')" >'+i+'</button>');
    }
    pagination.append('<button class="btn" onclick = "next()">Next</button>');


    highlightIndexButton();

}

function preloadCalculations(){
    array = songCodes;
    array_length = array.length;
    max_index = array_length/table_size;

    if((array_length%table_size)>0){
        max_index++;
    }
}



function highlightIndexButton(){
    start_index = ((current_index-1)*table_size)+1;
    end_index = (start_index + table_size)-1;

    if(end_index>array_length){
        end_index = array_length;
    }

    $("#table-footer span").text('Showing '+start_index+' to '+end_index+'');
    
    $("#index-btns button").removeClass('active');
    $("#index-btns button[index='"+current_index+"']").addClass('active');

     displayTableRows();
}

 function displayTableRows(){
     $("table#crbt-codes tbody tr").remove();
     var tab_start = start_index-1;
     var tab_end =end_index;

     for (var i = tab_start; i<tab_end; i++){
        var song = array[i];
        var tr ='<tr>'+
                '<td>'+song['title']+'</td>'+
                '<td>'+song['artist']+'</td>'+
                '<td><a href="sms:1355;?&body='+song['code']+'">'+song['code']+'</a></td>'+
                '</tr>';

        $("#crbt-codes tbody").append(tr);
     }
 }



displayIndexButtons();

function next(){
    if(current_index<max_index){
        current_index++;
        highlightIndexButton();
    }

}

function prev(){
    if(current_index > 1){
        current_index--;
        highlightIndexButton();
    }
}

function indexPagination(index){
    current_index = parseInt(index);
    highlightIndexButton();
}


let cta = document.getElementById('call-to-action');
let rtn = document.getElementById('return');


cta.onclick = () =>{
    let test = document.getElementById("song-table");
    let post = test.getBoundingClientRect();

    window.scrollBy(0, 550);
    rtn.classList.add("active");

}


rtn.onclick = () =>{
    window.scrollBy(0, -550);
    rtn.classList.remove("active");
}

if (window.matchMedia("(max-width: 480px)").matches){
    cta.onclick = () =>{
        let test = document.getElementById("song-table");
        let post = test.getBoundingClientRect();
    
        window.scrollBy(0, 660);
        rtn.classList.add("active");
    
    }
    
    
    rtn.onclick = () =>{
        window.scrollBy(0, -550);
        rtn.classList.remove("active");
    }
}









console.log(post.top);

