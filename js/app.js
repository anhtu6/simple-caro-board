let b = document.getElementById('carogame');
let board = [];
let data = '';
for (i=0;i<5;i++) {
    board[i] = new Array(0,0,0,0,0);
}

for (i=0;i<5;i++) {
    data+="<br>";
    for (j=0;j<5;j++) {
        data += board[i][j]+"&nbsp;&nbsp;"
    }
}

b.innerHTML =data;


function changeValue() {
    let x = parseInt(prompt('Nhap toa do X'));
    let y = parseInt(prompt('Nhap toa do y'));
   board[x][y]= 'x';
   data='';
    for (i=0;i<5;i++) {
        data+="<br>";
        for (j=0;j<5;j++) {
            data += board[i][j]+"&nbsp;&nbsp;"
        }
    }

    b.innerHTML =data;



}
