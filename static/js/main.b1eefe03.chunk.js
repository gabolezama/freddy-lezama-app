(this.webpackJsonpcultura_cafe=this.webpackJsonpcultura_cafe||[]).push([[0],{32:function(e,t,c){},35:function(e,t,c){},44:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){"use strict";c.r(t);var a=c(5),n=c.n(a),s=c(36),r=c.n(s),i=(c(44),c(32),c(7)),o=c(23),l=c(15),d=c(16),j=c(2),u=Object(a.createContext)(),b=function(e){var t=e.children,c=Object(a.useState)([]),n=Object(i.a)(c,2),s=n[0],r=n[1],b=Object(a.useState)(!1),O=Object(i.a)(b,2),m=O[0],f=O[1],h=Object(a.useState)(0),p=Object(i.a)(h,2),x=p[0],v=p[1],g=Object(a.useState)({}),y=Object(i.a)(g,2),N=y[0],C=y[1],I=Object(a.useState)(),k=Object(i.a)(I,2),A=k[0],S=k[1],P=Object(a.useState)(),w=Object(i.a)(P,2),D=w[0],E=w[1],B=Object(a.useState)([]),q=Object(i.a)(B,2),F=q[0],M=q[1],T=Object(a.useState)([]),z=Object(i.a)(T,2),L=z[0],U=z[1],H=Object(a.useState)([]),K=Object(i.a)(H,2),Q=K[0],R=K[1];Object(a.useEffect)((function(){void 0!==A&&(alert("Su compra se gener\xf3 con exito!!, el ID de su compra es: ".concat(A)),S(void 0)),Object.values(N).length>0&&function(){console.log(N);var e=Object(d.e)(),t=Object(d.b)(e,"orders");Object(d.a)(t,N).then((function(e){var t=e.id;return S(t)})),function(e){var t=Object(d.e)(),c=Object(d.b)(t,"items");e.items.map((function(e){Object(d.f)(Object(d.c)(c,function(e){var t="",c=e.split(" ");if("Croissant"===c[0])t="Croissant";switch(c[1]){case"Brasileno":t="Brasil";break;case"Brasile\xf1o":t="Brazil";break;case"Colombiano":t="Colombia";break;case"Uruguayo":t="Uruguay";break;case"Paraguayo":t="Paraguay";break;case"Frances":t="Francia";break;case"Peruano":t="Peru";break;case"Mexicano":t="Mexico";break;case"Venezolano":t="Venezuela";break;case"Argentino":t="Argentina"}return t}(e.name)),{stock:e.stock})}))}(N),C({}),V()}()}),[N,A]);console.log("Cart: ",s);var V=function(){r([]),v(0)};return Object(j.jsx)(u.Provider,{value:{cart:s,cntProducto:x,loading:m,arrayCafe:F,arrayInfusion:L,addItem:function(e,t,c,a,n){if(0!==t||void 0!==t){v(x+t);var i=s.find((function(t){return t.producto===e}));if(i)i.quantity+=t,r(s);else{var o,d,j,u;if("Cafe"===D||void 0===D)o=null===(j=F.find((function(t){return t.productId===e})))||void 0===j?void 0:j.title,d=null===(u=F.find((function(t){return t.productId===e})))||void 0===u?void 0:u.img;else if("Infusiones"===D){var b,O;o=null===(b=L.find((function(t){return t.productId===e})))||void 0===b?void 0:b.title,d=null===(O=L.find((function(t){return t.productId===e})))||void 0===O?void 0:O.img}else{var m,f;o=null===(m=Q.find((function(t){return t.productId===e})))||void 0===m?void 0:m.title,d=null===(f=Q.find((function(t){return t.productId===e})))||void 0===f?void 0:f.img}r([].concat(Object(l.a)(s),[{producto:e,name:o,img:d,quantity:t,stock:c,price:a,added:n}]))}}},clearAll:V,deleteItem:function(e){var t;console.log("Elimino: ",e);var c=s.find((function(t){return t.producto===e})),a=s.filter((function(t){return t.producto!==e}));v(0===s.length?0:x-(null!==(t=null===c||void 0===c?void 0:c.quantity)&&void 0!==t?t:0)),r(a)},setLoader:function(e){f(e)},setCategory:E,setArrayCafe:M,setArrayInfusion:U,setArrayPastel:R,generatePurchase:function(e,t){C({buyer:Object(o.a)({},e),items:s,total:t})}},children:t})};c(35);var O=function(e){var t=e.itemsQty,c=Object(a.useContext)(u).clearAll;return Object(j.jsxs)("div",{className:"cartWidget",children:[Object(j.jsx)("img",{id:"imgCart",src:"https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/000000/external-shopping-cart-ecommerce-kiranshastry-solid-kiranshastry.png"}),Object(j.jsx)("p",{className:"contador",children:null!==t&&void 0!==t?t:""}),Object(j.jsx)("button",{type:"button",class:"btn btn-warning btn-reset",onClick:function(){c()},children:"Resetear"})]})},m=c.p+"static/media/cafe.77601a33.jpg",f=c(18);var h=function(){var e=Object(a.useState)(0),t=Object(i.a)(e,2),c=t[0],n=t[1],s=["Cafe","Infusiones","Pasteleria"],r=Object(a.useContext)(u).cntProducto;return Object(a.useEffect)((function(){n(r)}),[r]),Object(j.jsxs)("nav",{className:"NavBar",children:[Object(j.jsx)("h4",{id:"titleApp",children:Object(j.jsx)(f.c,{to:"/",children:"Cultura Caf\xe9"})}),Object(j.jsx)("img",{id:"logoCafe",src:m,alt:"logo"}),s.map((function(e,t){return Object(j.jsx)("div",{id:"".concat(s[t]),className:"link",children:Object(j.jsx)("a",{children:Object(j.jsx)(f.b,{to:"/".concat(e),children:e})})},t)})),r?Object(j.jsx)(O,{itemsQty:c}):Object(j.jsx)("div",{})]})},p=c(12);var x=function(e){var t=e.id,c=e.country,a=e.title,n=e.price,s=e.stock,r=e.initial,i=e.img,o=e.rating;return o.length<=4&&o.push(s),o.length<=4&&o.push(r),Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("img",{id:"imgCard",src:i,className:"card-img-top",alt:"juan-valdez"}),Object(j.jsx)(f.c,{className:"itemNavLink",to:0===s?"/":"/ItemDetail/".concat(c,"/").concat(t,"/").concat(o,"/").concat(n),children:Object(j.jsx)("button",{type:"button",className:0!==s?"btn btn-success":"btn btn-secondary",children:" M\xe1s Info "})}),Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("h5",{className:"card-title",children:a}),Object(j.jsx)("p",{className:"card-text",children:"ID del Producto ".concat(t)}),Object(j.jsx)("p",{className:"card-text",children:"Precio: ".concat(n," ---   Stock: ").concat(s)}),!s&&Object(j.jsx)("p",{children:" Disculpe! no tenemos stock "})]})]})};var v=function(e){var t=e.category,c=Object(a.useState)([]),n=Object(i.a)(c,2),s=n[0],r=n[1],l=Object(a.useState)([]),b=Object(i.a)(l,2),O=b[0],m=b[1],f=Object(a.useState)(!1),h=Object(i.a)(f,2),p=h[0],v=h[1],g=Object(a.useContext)(u),y=g.setLoader,N=g.setArrayCafe,C=g.setArrayInfusion,I=g.setArrayPastel,k=g.setCategory;return y(!0),Object(a.useEffect)((function(){k(t);var e=Object(d.e)(),c=Object(d.b)(e,"items");Object(d.d)(c).then((function(e){m(e.docs.map((function(e){return Object(o.a)({},e.data())})))})),r(O.filter((function(e){return"Cafe"===t||void 0===t?"cafe"===e.type:"Infusiones"===t?"mate"===e.type:"pastel"===e.type})))}),[p,t]),console.log(s),s.length>0?("Cafe"===t||void 0===t?N(s):"Infusiones"===t?C(s):I(s),y(!1)):setTimeout((function(){v(!p)}),500),Object(j.jsx)("div",{className:"row justify-content-center",children:Array.isArray(s)&&s.length>0&&s.map((function(e,t){return Object(j.jsx)(x,{id:e.productId,country:e.country,title:e.title,price:e.price,stock:e.stock,initial:e.initial,img:e.img,rating:e.rating},t)}))})};var g=function(e){var t=Object(p.g)().categoria;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(v,{category:t})})},y=c(0),N=c.n(y),C=c(4),I=(c(48),c(49),c.p+"static/media/anadir-al-carrito.218cdd96.png");var k=function(e){var t=e.myId,c=e.stock,n=e.initial,s=e.onAdd,r=Object(a.useState)(n>c?parseInt(c):parseInt(n)),o=Object(i.a)(r,2),l=o[0],d=o[1];return Object(j.jsxs)("div",{className:"ItemCount",children:[Object(j.jsxs)("div",{className:"col counter",children:[Object(j.jsx)("input",{type:"text",className:"form-control",value:l}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("button",{type:"button",className:"col mt-1 btn btn-outline-primary button-mas",onClick:function(){d(l>=c?c:l+1)},children:"+"}),Object(j.jsx)("button",{type:"button",className:"col mt-1 btn btn-outline-danger button-menos",onClick:function(){d(l<=0?0:l-1)},children:"-"})]})]}),Object(j.jsx)("div",{className:"col",children:Object(j.jsxs)("button",{type:"button",disabled:!c,className:"col btn btn-success btn-verde",onClick:function(){return s(t,l,c)},children:["Agregar",Object(j.jsx)("img",{className:"carritoMas",src:I})]})})]})};var A=function(e){var t=e.id,c=e.bandera,n=e.name,s=e.region,r=e.rating,o=e.price,d=r.split(","),b=Object(a.useState)(!0),O=Object(i.a)(b,2),m=O[0],f=O[1],h=Object(a.useState)(d[3]),p=Object(i.a)(h,2),x=p[0],v=p[1],g=Object(a.useContext)(u),y=g.cart,N=g.addItem;return new CustomEvent("agregarItem",{bubbles:!0}),Object(a.useEffect)((function(){var e=y.find((function(e){return e.producto===parseInt(t)}));f(void 0===e||e.added)}),[y]),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsxs)("div",{className:"col",children:[Object(j.jsx)("h1",{children:"Detalles para ".concat(n)}),Object(j.jsx)("img",{id:"banderaDetail",src:c})]}),Object(j.jsxs)("div",{className:"col",children:[Object(j.jsx)("h1",{children:"Descripci\xf3n del producto"}),Object(j.jsxs)("div",{className:"row productDescription",children:[Object(j.jsxs)("div",{className:"col",children:[Object(j.jsxs)("p",{style:{width:"3rem"},children:["Ubicaci\xf3n: ",s]}),Object(j.jsxs)("p",{children:["Cuerpo:",Object(j.jsx)("div",{className:"star-rating",children:Object(l.a)(Array(parseInt(d[0]))).map((function(){return Object(j.jsx)("span",{className:"star",children:"\u2605"})}))})]}),Object(j.jsxs)("p",{children:["Amargo:",Object(j.jsx)("div",{className:"star-rating",children:Object(l.a)(Array(parseInt(d[1]))).map((function(){return Object(j.jsx)("span",{className:"star",children:"\u2605"})}))})]}),Object(j.jsxs)("p",{children:["Acido:",Object(j.jsx)("div",{className:"star-rating",children:Object(l.a)(Array(parseInt(d[2]))).map((function(){return Object(j.jsx)("span",{className:"star",children:"\u2605"})}))})]})]}),Object(j.jsx)("div",{className:"col",children:Object(j.jsx)("p",{id:"description",children:"Esta es un breve parrafo descriptivo del producto Que incluye caracter\xedsticas propias de cada pa\xeds de origen Descripciones de costumbres sobre la babida y cultura propia"})})]})]}),Object(j.jsxs)("div",{className:"col purchaseControl",children:[Object(j.jsx)("h1",{children:"Controles de Compra:"}),Object(j.jsxs)("p",{children:["Cantidad Inicial: ",d[4]]}),Object(j.jsxs)("p",{children:["Unidades Disponibles: ",x]}),void 0===m||!0===m?Object(j.jsx)(k,{myId:t,initial:d[4],stock:d[3],onAdd:function(e,t,c){return function(e,t){v(d[3]-parseInt(t));var c=d[3]-parseInt(t);0!==t&&N(parseInt(e),parseInt(t),c,parseInt(o),!1)}(e,t)}}):Object(j.jsx)("span",{id:"purchaseEndBadge",className:"badge bg-secondary",children:"Este producto ya se agreg\xf3 al carrito"})]})]})};var S=function(){var e,t=Object(p.g)(),c=t.country,n=t.id,s=t.rating,r=t.price,o=Object(a.useState)([]),l=Object(i.a)(o,2),d=l[0],u=l[1],b=function(){var e=Object(C.a)(N.a.mark((function e(){var t,a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://restcountries.com/v3.1/name/".concat(c,"?fullText=true"));case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){b().then((function(e){return u(e[0])}))}),[]),Object(j.jsx)("div",{className:"detailContainer",children:Object(j.jsx)(A,{id:n,bandera:null===d||void 0===d||null===(e=d.flags)||void 0===e?void 0:e.png,region:null===d||void 0===d?void 0:d.subregion,name:c,rating:s,price:r})})};c(50);var P=c(9);var w=function(e){var t=e.cart,c=e.getPersonalData,n=Object(a.useState)({name:null,lastName:null,email:null}),s=Object(i.a)(n,2),r=s[0],l=s[1],d=function(e,t){l(Object(o.a)(Object(o.a)({},r),{},Object(P.a)({},t,e)))};return Object(a.useEffect)((function(){c(r)}),[r]),Object(j.jsx)("div",{class:"container",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsxs)("div",{className:"col",children:[Object(j.jsx)("h6",{children:"Datos Personales"}),Object(j.jsx)("p",{children:"Por favor ingrese sus datos para poder registrar su compra"}),Object(j.jsxs)("form",{children:[Object(j.jsxs)("div",{className:"mb-3",children:[Object(j.jsx)("label",{for:"name",className:"form-label",children:"Nombre"}),Object(j.jsx)("input",{type:"text",onChange:function(e){return d(e.target.value,e.target.id)},className:"form-control",id:"name"})]}),Object(j.jsxs)("div",{className:"mb-3",children:[Object(j.jsx)("label",{for:"lastName",className:"form-label",children:"Apellido"}),Object(j.jsx)("input",{type:"text",onChange:function(e){return d(e.target.value,e.target.id)},className:"form-control",id:"lastName"})]}),Object(j.jsxs)("div",{className:"mb-3",children:[Object(j.jsx)("label",{for:"exampleInputEmail1",className:"form-label",children:"Email address"}),Object(j.jsx)("input",{type:"email",onChange:function(e){return d(e.target.value,e.target.id)},className:"form-control",id:"email","aria-describedby":"emailHelp"})]})]})]}),Object(j.jsxs)("div",{className:"col",children:[Object(j.jsx)("h6",{children:"Resumen de la Compra"}),t.map((function(e){return Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col",children:[Object(j.jsxs)("label",{className:"form-label",children:[e.name," X"]}),Object(j.jsx)("label",{className:"form-label",children:e.quantity})]})})}))]})]})})};var D=function(e){var t=e.showModal,c=e.totalPrice,n=Object(a.useContext)(u),s=n.cart,r=n.generatePurchase,o=Object(a.useState)({}),l=Object(i.a)(o,2),d=l[0],b=l[1];return Object(j.jsx)("div",{className:"modalContainer",children:Object(j.jsxs)("div",{className:"purchaseModal",children:[Object(j.jsx)(w,{cart:s,getPersonalData:function(e){return function(e){b(e)}(e)}}),Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col modalButtons",children:[Object(j.jsx)("button",{type:"button",className:"btn btn-danger cancelar",onClick:function(){return t(!1)},children:"Cancelar"}),Object(j.jsx)("button",{type:"button",className:"btn btn-success",onClick:function(){void 0===Object.values(d).find((function(e){return null===e||""===e.trim()}))?r(d,c):alert("No ha llenado todos los datos necesarios!!")},children:"Aceptar Compra"})]})})]})})};var E=function(){var e=Object(a.useContext)(u),t=e.cart,c=e.deleteItem,n=Object(a.useState)(0),s=Object(i.a)(n,2),r=s[0],o=s[1],l=Object(a.useState)(!1),d=Object(i.a)(l,2),b=d[0],O=d[1],m=0,h=0,p=function(e){O(e)};return Object(a.useEffect)((function(){t.length>=1&&t.forEach((function(e){h+=e.price*e.quantity})),o(h)}),[t]),Object(j.jsxs)("div",{children:[!1,t.length>0?t.map((function(e,t){return m+=parseInt(e.quantity),Object(j.jsx)("div",{class:"listContainer",children:Object(j.jsxs)("div",{class:"addedItem",style:{backgroundColor:t%2===0?"lightseagreen":"lightgreen"},children:[Object(j.jsx)("img",{class:"listImg",src:"".concat(e.img)}),Object(j.jsx)("div",{class:"name",children:e.name}),Object(j.jsx)("div",{class:"qty",children:e.quantity}),Object(j.jsx)("div",{class:"qty",children:e.price}),Object(j.jsx)("button",{type:"button",class:"btn btn-danger",onClick:function(){return t=e.producto,void c(parseInt(t));var t},children:"Deshacer Agregar"})]})})})):Object(j.jsx)("h1",{className:"failMessage",children:Object(j.jsx)(f.c,{className:"failNav",to:"/",children:"No hay Elementos Agregados al Carrito, Haga click ac\xe1 para ir a Home"})}),t.length>0&&Object(j.jsx)("div",{class:"listContainer",children:Object(j.jsxs)("div",{class:"addedItem",children:[Object(j.jsx)("div",{class:"listImg",children:"Total Acumulado: "}),Object(j.jsx)("div",{class:"name"}),Object(j.jsx)("div",{class:"acum",children:m}),Object(j.jsx)("div",{class:"qty",children:r}),Object(j.jsx)(f.c,{id:"purchaseEnd",to:"/cart",children:Object(j.jsx)("button",{type:"button",className:"btn btn-success",onClick:function(){return p(!0)},children:"Terminar mi Compra"})})]})}),b&&t.length>0&&Object(j.jsx)(D,{totalPrice:r,showModal:function(e){return p(e)}})]})};var B=function(){var e=Object(a.useState)(0),t=Object(i.a)(e,2),c=t[0],n=t[1],s=Object(a.useContext)(u).loading;return setTimeout((function(){n(c<100?c+20:0)}),500),s&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{class:"progress",style:{height:".3rem"},children:Object(j.jsx)("div",{class:"progress-bar bg-success",role:"progressbar",style:{width:"".concat(c,"%"),height:".3rem"},"aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"})}),Object(j.jsx)("span",{class:"badge bg-secondary",children:"Cargando..."})]})},q=c.p+"static/media/coffee.359cfb87.png";var F=function(){return!Object(a.useContext)(u).loading&&Object(j.jsxs)(f.c,{className:"floatButton",to:"/cart",children:[Object(j.jsx)("img",{className:"taza",src:q})," ",Object(j.jsx)("br",{}),Object(j.jsx)("button",{type:"button",class:"btn btn-warning",children:"Ver Carrito"})]})};var M=function(){var e=function(){return Object(j.jsx)("div",{children:Object(j.jsx)(g,{})})};return Object(j.jsx)(b,{children:Object(j.jsxs)(f.a,{children:[Object(j.jsx)(h,{}),Object(j.jsx)(B,{}),Object(j.jsx)(F,{}),Object(j.jsxs)(p.c,{children:[Object(j.jsx)(p.a,{exact:!0,path:"/",element:Object(j.jsx)(e,{})}),Object(j.jsx)(p.a,{exact:!0,path:"/:categoria",element:Object(j.jsx)(e,{})}),Object(j.jsx)(p.a,{exact:!0,path:"/ItemDetail/:country/:id/:rating/:price",element:Object(j.jsx)(S,{})}),Object(j.jsx)(p.a,{exact:!0,path:"/cart",element:Object(j.jsx)(E,{})})]})]})})},T=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,52)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))},z=c(37),L=c(39),U=Object(z.a)({apiKey:"AIzaSyDmqOeZncURweBFPTzD8FfxAOif5uDKXL0",authDomain:"culturacafe-2de70.firebaseapp.com",projectId:"culturacafe-2de70",storageBucket:"culturacafe-2de70.appspot.com",messagingSenderId:"659043482953",appId:"1:659043482953:web:c297024acd668bc2062e98",measurementId:"G-4H2WK7M041"});Object(L.a)(U);r.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(M,{})}),document.getElementById("root")),T()}},[[51,1,2]]]);
//# sourceMappingURL=main.b1eefe03.chunk.js.map