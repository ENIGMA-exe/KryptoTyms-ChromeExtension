document.getElementsByClassName("pre-loader")[0].style.display = "block";

document.getElementsByClassName("main")[0].style.display = "none";

fetch(`https://api.nomics.com/v1/currencies/ticker?key=031e3571a09387d9f93f85f06e9eef1e1755c83e&
                ids=BTC,ETH,XRP,DOGE,BNB,SOL,DOT,ALGO,ATOM,LTC,ICP,BCH,MATIC,XLM,THETA,XMR,BCHA,XTZ,QNT,EOS,NEO,WAVES
                &interval=1d,30d&convert=EUR&per-page=100&page=1`)
    .then(res => res.json())
    .then((data) => {
        /*console.log(data);*/

        data.forEach((item) => {
            document.getElementsByClassName('main')[0].innerHTML = document.getElementsByClassName('main')[0].innerHTML + `
                    <div class="info">

                        <div class="indetail">
                            <div class="i-lo">
                                <img src="${item.logo_url}" alt="">
                            </div>
                            <div class="i-name">${item.name}</div>

                            <div class="i-price">$${item.price}</div>
                            <div class="i-prc-chpt">${item['1d']['price_change_pct']}%</div>

                            
                        </div>

                        <div class="lo">
                            <img src="${item.logo_url}" alt="">
                        </div>
                        <div class="name">${item.name}</div>

                        <div class="price">$${item.price}</div>
                        <div class="prc-chpt">${item['1d']['price_change_pct']}%</div>

                        
                    </div>`
        })
    })
    .then(() => {
        var pr_ch = document.getElementsByClassName('prc-chpt');

        for (var x = 0; x < pr_ch.length; x++) {
            if (pr_ch[x].innerText[0] == "-") {
                pr_ch[x].innerHTML = pr_ch[x].innerText + '<span>&ensp;</span>' + `<i class="fas fa-caret-down"></i>`
                pr_ch[x].style.color = '#f77eab';
            } else {
                pr_ch[x].innerHTML = pr_ch[x].innerText + '<span>&ensp;</span>' + `<i class="fas fa-caret-up"></i>`
                pr_ch[x].style.color = '#8ef56c';
            }
        }
    })

    .then(() => {
        document.getElementsByClassName("pre-loader")[0].style.display = "none";

        document.getElementsByClassName("main")[0].style.display = "block";

    })

    .catch(e => console.log(e))


