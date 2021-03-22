let who = ['My dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

function excuseGenerator(quien, accion, que, cuando){
    let Quien = Math.floor(Math.random() * quien.length);
    let Accion = Math.floor(Math.random() * action.length);
    let Que = Math.floor(Math.random() * que.length);
    let Cuando = Math.floor(Math.random() * cuando.length);
    return quien[Quien] + " " + accion[Accion] + " " + que[Que] + " " +  cuando[Cuando];
}
function onLoad(){
    var excusa = document.getElementById('excuse');
    excusa.innerHTML = excuseGenerator(who, action, what, when);
}
window.onload = onLoad;