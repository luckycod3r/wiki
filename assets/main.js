// 
//   ? Main
//     A_() - главная функция
//       .random(min,max) - рандомное числа минимум-максимум
//       .sort(array) - сортирует массив по возрастанию
//       .init() - подгружает конфиг
//       .config() - работа с конфигом либы
//         .enable(param) - включает параметр
//         .disable(param) - выключает параметр
//         .get(param) - получает состояние параметра
//         .load() - загружает конфиг
//         .apply(object) - применяет свой образ конфига
//          
//              let cfg = { 
//                  "param" : true
//              }
//          
//   !   Устарело, но работает
//       .dialogs() - диалоги 
//          .open(object);
//          
//          
//          
//     A_(selector) - возвращает элемент
//       .class() - работа с классом
//         .add("class,class2,class3") - добавление класса
//         .remove("class,class2,class3") - удаление класса
//         .contains("class,class2,class3") - наличие класса
//       .html() - получение innerHTML элемента
//       .html("<div></div>") - запись innerHTML
//       .html("<div></div>","+") - дозапись innerHTML
//    
//    
//    
//   ? Dialogs
//     new Dialog(object) - создание диалога
//      
//      
//   ? Classes
//   * конструктор должен вызыватья не в функции.
//       let config = {
//           backgroundColor: "#f00",
//           borderRadius: "10px",
//           color: "#fff",
//           padding: "1vh 2vh",
//           textDecoration: "none"
//       }
//     new Class(config) - создание класса
//       .applyTo(elem) - применить класс к элементу
//       .unset(elem) - удалить созданный класс у элемента
//   ? EventListeners
//      new Listener("selector"/elem,"event",(event)=>{ // do }) - создаст EventListener для элемента
//   ? Playgrounds
//   * Оболочки кода, позволяющие переключаться между исполнителями
//      let p = new Playground(()=>{code}) - занесёт новый playground в переменную p
//       p.start() - запустит выполнение оболочки, т.е до тех пор пока не будет вызван .start() код указанный в конструкторе выполнен не будет

let p = new Playground(()=>{
    let myClass = {
        backgroundColor: "#f00",
        color: "#fff"
    }
    let result = new Class(myClass);
    console.log(result.name)
    new Listener(".unsetClass","click",(event)=>{
        result.unset(A_(".genericClass"));
    });
    result.applyTo(A_(".genericClass"));
})

let events = new Playground(()=>{
    A_(".eventListener").remove();
    A_("#event_playground").html(`<a jsl class="eventListener aqua-js-btn">Тык!</a>`,"+")
    let elem = A_(".eventListener");
    
    new Listener(elem,"click",(event)=>{
        console.log("event listened");
    })
    
})

let dialogs = new Playground(()=>{
    A_(".dialogRunner").remove();
    A_("#dialogs_playground").html(`<a jsl class="dialogRunner aqua-js-btn">Открыть диалог</a>`,"+")
    let elem = A_(".dialogRunner");
    new Listener(elem,"click",(event)=>{
        let dialog = {
            title: "Заголовок",
            message: "Сообщение",
            onYes: function(){
                alert(`Вы нажали ДА`)
            },
            onDecline : function(){
                alert(`Вы нажали НЕТ`)
            }
        }
        let dialogObject = new Dialog(dialog)
        dialogObject.open();
    }) 
})

function getElement(){
    console.log(A_(".aqua-virtual-console"));
}

document.querySelectorAll(`[tooltip="true"]`).forEach(function(i){
    new Listener(i,"mouseover",()=>{
        let cords = i.getBoundingClientRect();
        A_(".root").html(`<div class="tooltip" style="left: ${cords.x}px; top: ${cords.y - 40}px">${i.getAttribute("tooltip-text")}</div>`);
    })
    new Listener(i,"mouseleave",()=>{
        A_(".tooltip").remove();
    })
})

// TODO : Заглушки для кастомных элементов в виде CustomProperty_html | CustomProperty_attr_attrName


function d(ds){
    alert(ds);
}


let watchs = new Playground(()=>{

    new Watch("testVar",0,(ver,varName)=>{
        console.log(`Variable was edited: ${varName} = ${ver}`);
    })
    A_("#watch_playground a").remove();
    A_("#watch_playground").html(`<a jsl class="watchRunner aqua-js-btn" tooltip="true" tooltip-text="Обновит переменную testVar">Изменить переменную</a>`,"+")
    new Listener(".watchRunner","click",(event)=>{
        testVar++;
    })
})


