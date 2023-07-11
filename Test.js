let btg = document.getElementById('btgiaipt');
function choso() {
    // set random cac so trong ham 
    let a = Math.round(Math.random() * 10);
    let b = Math.round(Math.random() * 10);
    let c = Math.round(Math.random() * 10);
    // gan gia tri cua cac the input bang cac so vua random ra
    document.getElementById('a').value = a;
    document.getElementById('b').value = b;
    document.getElementById('c').value = c;
    btg.disabled = false;
    btg.className = "nut"
}

function gptb2() {
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    let c = document.getElementById('c').value;
    if (a == 0) {

        if (b == 0) {

            if (c == 0) {
                let inramh = `<p>Phương trình vô số nghiệm </p>`
                document.getElementById('kq').innerHTML = inramh;
            } else {
                let inramh = `<p>Phương trình vô nghiệm </p>`
                document.getElementById('kq').innerHTML = inramh;
            }

        } else {
            let x = - c / b;
            let inramh = `<p>Phương trình có nghiệm duy nhất x = ${x.toFixed(2)} </p>`
            document.getElementById('kq').innerHTML = inramh;

        }


    } else {

        let delta = b * b - 4 * a * c;
        if (delta < 0) {
            // vo nghiem
            document.getElementById('kq').innerHTML = `<p>Phương trình vô nghiệm </p>`;
        } else if (delta == 0) {
            // nhiệm kép 
            let x1 = -b / (2 * a);
            let inramh = `<p>Phương trình có nghiệm kép là : ${x1.toFixed(2)} </p>`
            document.getElementById('kq').innerHTML = inramh;
        } else {
            // co 2 nghiem phan biet
            let x1 = (-b - Math.sqrt(delta)) / (2 * a);
            let x2 = (-b + Math.sqrt(delta)) / (2 * a);
            let inramh = `<p>Phương trình có 2 nghiệm :</p>  
                        <p> x1  = ${x1.toFixed(2)} </p>
                        <p> x2  = ${x2.toFixed(2)} </p>`
            document.getElementById('kq').innerHTML = inramh;
        }

    }
    btg.disabled = true;
    btg.className = "nut_khoa"
}

// đếm số lần giải 
let demsl = 0;
function solangiai() {
    demsl++;
    if (demsl >= 10) {
        btg.disabled = true;
        btg.className = "nut_khoa";
    }
    document.getElementById('solangiai').innerHTML = demsl;
}
// ham settimeout tinh thoi  gian 
function thoigian() {
    let time = new Date();
    let day = time.getDate();
    let month = time.getMonth();
    let year = time.getFullYear();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let tg = `<p> bây giờ là :${hours}h:${minutes}phút:${seconds}giây - ngày ${day} / Tháng ${month} / Năm ${year}</p>`;
    document.getElementById('time').innerHTML = tg;
}
setInterval(thoigian, 1000)



