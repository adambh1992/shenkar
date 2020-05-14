var me = {
    firstName : 'Adam',
    lastName : 'Ben-Hur'
};
curRecColor = "white"
console.log('hello');
function calcName(m) {
return m.firstName.length * m.lastName.length
}

(function () {
    numOfRectangles=calcName(me);
    for (let index = 0; index < numOfRectangles; index++) {
    var main = document.getElementById('layout3Inner');
    var rec = document.createElement('article');
    rec.style.height = '312px';
    rec.style.width = '204px';
    rec.style.marginTop = '48px';
    main.appendChild(rec)
 }
})();

document.querySelector('#paint-btn').addEventListener('click', function (e) {
    const rec = document.getElementsByTagName('article');
    for (let  index= 0;  index< me.firstName.length; index++) {
        rec[index].style.backgroundColor=('gray')  
    }
    curRecColor="gray"
    });
    document.querySelector('#clear-btn').addEventListener('click', function (e) {
        const rec = document.getElementsByTagName('article');
        for (let  index= 0;  index< me.firstName.length; index++) {
            rec[index].style.backgroundColor=('white')  
        }
        curRecColor="white"
    });
var firstRec = document.querySelector('article');
firstRec.addEventListener('mouseover', function (e) {
    letter = me.firstName.charAt(0)
    firstRec.appendChild(document.createTextNode(letter))
    firstRec.style.fontSize = '270px';
    firstRec.style.fontWeight = ('bold');
    firstRec.style.color = ('white');
    firstRec.style.backgroundColor = ('#6d695c')
    firstRec.style.backgroundImage = ('repeating-linear-gradient(120deg, rgba(255,255,255,.1), rgba(255,255,255,.1) 1px, transparent 1px, transparent 60px),repeating-linear-gradient(60deg, rgba(255,255,255,.1), rgba(255,255,255,.1) 1px, transparent 1px, transparent 60px),linear-gradient(60deg, rgba(0,0,0,.1) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.1) 75%, rgba(0,0,0,.1)),linear-gradient(120deg, rgba(0,0,0,.1) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.1) 75%, rgba(0,0,0,.1))')
    firstRec.style.backgroundSize = '70px 120px'
    
});
    
firstRec.addEventListener('mouseout', function (e) {
    firstRec.removeChild(firstRec.firstChild);
    firstRec.style.backgroundColor = (curRecColor);
    firstRec.style.backgroundImage =('')
    firstRec.style.backgroundSize = ''
});