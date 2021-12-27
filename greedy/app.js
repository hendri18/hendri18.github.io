function drawResult(){
    
}

function hitung(){
    var n = Number(document.getElementById('n').value);
    var c = Number(document.getElementById('c').value);
    var w = [];
    var index = 0;

    // mengambil value dari setiap input untuk dijadikan array
    for (var i = 0; i < n; i++) {
        if(document.getElementsByName('w[]')[i]){
            w[index] = Number(document.getElementsByName('w[]')[i].value); // push array manual
            index++;
        }
    }

    // sorting manual menggunakan for-loop
    for (var j = 0; j < w.length; j++) {
        for (var k = 0; k < w.length; k++) {
            if(w[j] < w[k]){
                var temp = w[j];
                w[j] = w[k];
                w[k] = temp;
            }
        }
    }

    var iterator = 0;
    var total = 0;
    var list = [];
    var resultHTML = '';
    var tempHTML = '';
    while(iterator < n){
        if(total + w[iterator] <= c){
            list.push(w[iterator]);
            total += w[iterator];
            if(tempHTML != ''){
                tempHTML += ' + ' + w[iterator];
            }else{
                tempHTML += w[iterator];
            }
            resultHTML += '<div class="green">' + tempHTML + ' = ' + total + '</div> \n';
        }else{
            resultHTML += '<div class="red"> '+w[iterator]+' tidak dipilih karena ' + tempHTML + ' + ' + w[iterator] + ' = ' +(total+w[iterator])+ ' > ' + c + '(c) melebihi muatan</div>\n';
        }
        iterator++;
    }
    
    if(list.length > 0){
        var listBerat = '';
        
        for (let p = 0; p < list.length; p++) {
            if(listBerat != ''){
                listBerat += ' , ' + list[p];
            }else{
                listBerat += list[p];
            }
        }
        resultHTML += '<br><div>Kapal dapat membawa ' + list.length + ' peti ( '+ listBerat +' ) dengan total muatan ' + total + '</div>';
    }else{
        resultHTML = 'Solusi Tidak ditemukan';
    }
    
    document.getElementById('result').innerHTML = resultHTML;
}