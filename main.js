/*
Card Div
<div class="card">
            <img class="cardImage" src="./chars/base/exampleCard.png" draggable="false">
        </div>
*/
let rows = 4
const tooltip = document.querySelector('#tooltip')
let idenORIG = [
    {
        name: "Kyle",
        src: `./chars/base/${"Kyle".toLowerCase()}.png`
    },
    {
        name: "Sarah",
        src: `./chars/base/${"Sarah".toLowerCase()}.png`
    },
    {
        name: "Rachel",
        src: `./chars/base/${"Rachel".toLowerCase()}.png`
    },
    {
        name: "Liz",
        src: `./chars/base/${"Liz".toLowerCase()}.png`
    },
    {
        name: "Brandon",
        src: `./chars/base/${"Brandon".toLowerCase()}.png`
    },{
        name: "Joseph",
        src: `./chars/base/${"Joseph".toLowerCase()}.png`
    },{
        name: "Jon",
        src: `./chars/base/${"Jon".toLowerCase()}.png`
    },{
        name: "Donna",
        src: `./chars/base/${"Donna".toLowerCase()}.png`
    },{
        name: "Lisa",
        src: `./chars/base/${"Lisa".toLowerCase()}.png`
    },{
        name: "Connor",
        src: `./chars/base/${"Connor".toLowerCase()}.png`
    },{
        name: "Jess",
        src: `./chars/base/${"Jess".toLowerCase()}.png`
    },{
        name: "Emily",
        src: `./chars/base/${"Emily".toLowerCase()}.png`
    },
    {
        name: "Megan",
        src: `./chars/base/${"Megan".toLowerCase()}.png`
    },{
        name: "Andy",
        src: `./chars/base/${"Andy".toLowerCase()}.png`
    },{
        name: "Katie",
        src: `./chars/base/${"Katie".toLowerCase()}.png`
    },{
        name: "Gail",
        src: `./chars/base/${"Gail".toLowerCase()}.png`
    },{
        name: "Nick",
        src: `./chars/base/${"Nick".toLowerCase()}.png`
    },{
        name: "Daniel",
        src: `./chars/base/${"Daniel".toLowerCase()}.png`
    },
    {
        name: "Jay",
        src: `./chars/base/${"Jay".toLowerCase()}.png`
    },
    {
        name: "Rebecca",
        src: `./chars/base/${"Rebecca".toLowerCase()}.png`
    },{
        name: "James",
        src: `./chars/base/${"James".toLowerCase()}.png`
    },{
        name: "Jake",
        src: `./chars/base/${"Jake".toLowerCase()}.png`
    },{
        name: "Ashley",
        src: `./chars/base/${"Ashley".toLowerCase()}.png`
    },{
        name: "David",
        src: `./chars/base/${"David".toLowerCase()}.png`
    }
]
let rowCount = idenORIG.length / rows
let iden = []
for (const x in (Array.apply(null, { length: rows }))) {
    let trod = []
    for (const i in (Array.apply(null, { length: rowCount }))) {
        trod.push(idenORIG[(rowCount*x)+parseInt(i)]);
    }
    iden.push(trod)
}
function forEachCard() {
    document.querySelectorAll('div.card').forEach((element)=>{
    element.addEventListener('mousemove', (e)=>{
        tooltip.hidden = false;
        tooltip.style = `top: ${e.clientY + 20}; left:${e.clientX - 75};`
        tooltip.innerHTML=element.querySelector('img a').innerHTML
    })
    element.addEventListener('mouseleave', ()=>{
        tooltip.hidden = true;
    })
    if (element.classList.contains('bigcard')) {
        return
    }
    element.addEventListener('click', ()=>{
        if (!element.classList.contains('down')) {
            element.classList.add('down');
            return
        }
        element.classList.remove('down');
    })
})
}
document.querySelectorAll('.bigcard.card').forEach((e)=>{
    let rando = idenORIG[Math.floor(Math.random()*idenORIG.length)]
    e.querySelector('img').src = rando["src"]
    e.querySelector('img').innerHTML = `<a>You are ${rando["name"]}</a>`
})
console.log(iden)
function createCards(){
    for (const x in iden) {
        let bigDiv = document.createElement('div')
        for(const i of iden[x]) {
            let cardDiv = document.createElement('div');
            let cardImage = document.createElement('img');
            cardDiv.classList.add('card');
            cardImage.classList.add('cardImage');
            cardImage.draggable = false;
            cardImage.src = i["src"];
            cardImage.innerHTML = "<a>" + i["name"] +"</a>"
            cardDiv.appendChild(cardImage)
            bigDiv.appendChild(cardDiv);
        }
        document.querySelector('#container').appendChild(bigDiv)
    }
}
createCards()
forEachCard()