(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{48:function(e,t,c){},75:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c(17),s=c.n(r),i=(c(48),c(13)),o=c.n(i),a=c(15),l=c(3),j=c(8),u=c(7),d=Object(n.createContext)(),b=c(0),p=function(){return Object(b.jsx)("div",{className:"left-nav-container",children:Object(b.jsx)("div",{className:"icons",children:Object(b.jsxs)("div",{className:"icons-bis",children:[Object(b.jsx)(j.b,{to:"/",exact:!0,activeClassName:"active-left-nav",children:Object(b.jsx)("img",{src:"./img/icons/home.svg",alt:"home"})}),Object(b.jsx)("br",{}),Object(b.jsx)(j.b,{to:"/trending",exact:!0,activeClassName:"active-left-nav",children:Object(b.jsx)("img",{src:"./img/icons/rocket.svg",alt:"trending"})}),Object(b.jsx)("br",{}),Object(b.jsx)(j.b,{to:"/profil",exact:!0,activeClassName:"active-left-nav",children:Object(b.jsx)("img",{src:"./img/icons/user.svg",alt:"profil"})})]})})})},O=c(2),m=c(6),h=c.n(m),f="GET_POST",x="GET_ALL_POST",g="UPDATE_POST",v="DELETE_POST",w="GET_POST_ERRORS",y="LIKE_POST",N="UNLIKE_POST",_="EDIT_COMMENT",S="DELETE_COMMENT",C="GET_TRENDS",k=function(e){return function(t){return h.a.get("".concat("http://localhost:5000","/api/post")).then((function(c){var n=c.data.slice(0,e);t({type:f,payload:n}),t({type:x,payload:c.data})})).catch((function(e){return console.log(e)}))}},E=function(e){return function(t){return h.a.post("".concat("http://localhost:5000","/api/post"),e).catch((function(e){return console.log(e)}))}},I=function(e){var t=Date.parse(e);return new Date(t).toLocaleDateString("fr-FR",{hour:"2-digit",minute:"2-digit",second:"2-digit",weekday:"long",year:"numeric",month:"short",day:"numeric"}).toString()},T=function(e){return void 0===e||null===e||"object"===typeof e&&0===Object.keys(e)||"string"===typeof e&&0===e.trim().length};var F=function(){var e=Object(n.useState)(!0),t=Object(l.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(""),i=Object(l.a)(s,2),u=i[0],d=i[1],p=Object(n.useState)(null),m=Object(l.a)(p,2),h=m[0],f=m[1],x=Object(n.useState)(""),g=Object(l.a)(x,2),v=g[0],w=g[1],y=Object(n.useState)(""),N=Object(l.a)(y,2),_=N[0],S=N[1],C=Object(O.c)((function(e){return e.userReducer})),F=Object(O.c)((function(e){return e.errorsReducer})),R=Object(O.b)(),D=function(){var e=Object(a.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(u||h||v)){e.next=12;break}return(t=new FormData).append("posterId",C._id),t.append("message",u),t.append("video",v),_&&t.append("file",_),e.next=8,R(E(t));case 8:R(k()),L(),e.next=13;break;case 12:alert("Veuillez entrez un message");case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){d(""),w(""),f(""),S("")};return Object(n.useEffect)((function(){T(C)||r(!1);!function(){for(var e=u.split(" "),t=0;t<e.length;t++)if(e[t].includes("https://www.youtube")||e[t].includes("https://youtube")){var c=e[t].replace("watch?v=","embed/");w(c.split("&")[0]),e.splice(t,1),d(e.join(" ")),f("")}}()}),[C,u,v]),Object(b.jsx)("div",{className:"post-container",children:c?Object(b.jsx)("i",{className:"fas fa-spinner fa-pulse"}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"data",children:[Object(b.jsxs)("p",{children:[Object(b.jsxs)("span",{children:[C.following?C.following.length:null," "]}),Object(b.jsxs)("span",{children:["Abonnement",C.following&&C.following.length>1?"s":null," "]})]}),Object(b.jsxs)("p",{children:[Object(b.jsxs)("span",{children:[C.followers?C.followers.length:null," "]}),Object(b.jsxs)("span",{children:["Abonn\xe9",C.followers&&C.followers.length>1?"s":null," "]})]})]}),Object(b.jsx)(j.b,{exact:!0,to:"/profil",children:Object(b.jsx)("div",{className:"user-info",children:Object(b.jsx)("img",{src:C.picture,alt:"user-pict"})})}),Object(b.jsxs)("div",{className:"post-form",children:[Object(b.jsx)("textarea",{name:"message",id:"message",placeholder:"Quoi de neuf ?",onChange:function(e){return d(e.target.value)},value:u}),u||h||v.lentgh>20?Object(b.jsxs)("li",{className:"card-container",children:[Object(b.jsx)("div",{className:"card-left",children:Object(b.jsx)("img",{src:C.picture,alt:"postUser-pic"})}),Object(b.jsxs)("div",{className:"card-right",children:[Object(b.jsxs)("div",{className:"card-header",children:[Object(b.jsx)("div",{className:"pseudo",children:Object(b.jsx)("h3",{children:C.pseudo})}),Object(b.jsx)("span",{children:I(new Date)})]}),Object(b.jsxs)("div",{className:"content",children:[Object(b.jsx)("p",{children:u}),h&&Object(b.jsx)("img",{src:h,alt:"post-pic"}),v&&Object(b.jsx)("iframe",{src:v,frameBorder:"0",allow:"accelerometer; clipboard-write; encrypted-media;gyroscope;picture-in-picture",allowFullScreen:!0,title:v})]})]})]}):null,Object(b.jsxs)("div",{className:"footer-form",children:[Object(b.jsxs)("div",{className:"icon",children:[T(v)&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("img",{src:"./img/icons/picture.svg",alt:"uplod-icon"}),Object(b.jsx)("input",{type:"file",id:"file-upload",name:"file",accept:".png,.jpg,.jpeg",onChange:function(e){return function(e){f(URL.createObjectURL(e.target.files[0])),S(e.target.files[0]),w("")}(e)}})]}),v&&Object(b.jsx)("button",{onClick:function(){return w("")},children:"Supprimer la video"})]}),!T(F.format&&Object(b.jsx)("p",{children:F.format})),!T(F.maxSize&&Object(b.jsx)("p",{children:F.maxSize})),Object(b.jsxs)("div",{className:"btn-send",children:[u||h||v.length>20?Object(b.jsx)("button",{className:"cancel",onClick:L,children:"Annuler message"}):null,Object(b.jsx)("button",{className:"send",onClick:D,children:"Envoyer"})]})]})]})]})})},R="GET_USER",D="UPLOAD_PICTURE",L="UPDATE_BIO",P="FOLLOW_USER",U="UNFOLLOW_USER",A=function(e){var t=e.idToFollow,c=e.type,r=Object(O.c)((function(e){return e.userReducer})),s=Object(n.useState)(!1),i=Object(l.a)(s,2),o=i[0],a=i[1],j=Object(O.b)();return Object(n.useEffect)((function(){T(r.following)||(r.following.includes(t)?a(!0):a(!1))}),[r,t]),Object(b.jsxs)(b.Fragment,{children:[o&&!T(r)&&Object(b.jsxs)("span",{onClick:function(){var e,c;j((e=r._id,c=t,function(t){return h.a.patch("".concat("http://localhost:5000","/api/user/unfollow/").concat(e),{idToUnFollow:c}).then((function(e){return t({type:U,payload:{idToUnFollow:c}})})).catch((function(e){return console.log(e)}))})),a(!1)},children:["suggestion"===c&&Object(b.jsx)("button",{className:"unfollow-btn",children:"Abonn\xe9"}),"card"===c&&Object(b.jsx)("img",{src:"./img/icons/checked.svg",alt:"follow-icon-checked"})]}),!1===o&&!T(r)&&Object(b.jsxs)("span",{onClick:function(){j(function(e,t){return function(c){return h.a.patch("".concat("http://localhost:5000","/api/user/follow/").concat(e),{idToFollow:t}).then((function(e){return c({type:P,payload:{idToFollow:t}})})).catch((function(e){return console.log(e)}))}}(r._id,t)),a(!0)},children:["suggestion"===c&&Object(b.jsx)("button",{className:"follow-btn",children:"Suivre"}),"card"===c&&Object(b.jsx)("img",{src:"./img/icons/check.svg",alt:"follow-icon-check"})]})]})},M=c(40),V=(c(74),function(e){var t=e.post,c=Object(n.useState)(!1),r=Object(l.a)(c,2),s=r[0],i=r[1],o=Object(n.useContext)(d),a=Object(O.b)();return Object(n.useEffect)((function(){t.likers.includes(o)?i(!0):i(!1)}),[o,t.likers,s]),Object(b.jsxs)("div",{className:"like-container",children:[null===o&&Object(b.jsxs)(M.a,{trigger:Object(b.jsx)("img",{src:"./img/icons/heart.svg",alt:"like"}),position:["bottom center","bottom right","bottom left"],closeOnDocumentClick:!0,children:[" ",Object(b.jsx)("div",{className:"text-black",children:"Connectez-vous pour aimer ce post !"})," "]}),o&&s&&Object(b.jsx)("img",{src:"./img/icons/heart-filled.svg",alt:"like",onClick:function(){var e,c;a((e=t._id,c=o,function(t){return h.a.patch("".concat("http://localhost:5000","/api/post/unlike-post/").concat(e),{id:c}).then((function(n){t({type:N,payload:{postId:e,userId:c}})})).catch((function(e){return console.log(e)}))})),i(!1)}}),o&&!1===s&&Object(b.jsx)("img",{src:"./img/icons/heart.svg",alt:"unlike-field",onClick:function(){var e,c;a((e=t._id,c=o,function(t){return h.a.patch("".concat("http://localhost:5000","/api/post/like-post/").concat(e),{id:c}).then((function(n){t({type:y,payload:{postId:e,userId:c}})})).catch((function(e){return console.log(e)}))})),i(!0),console.log(o)}}),Object(b.jsx)("span",{children:t.likers.length})]})}),z=function(e){var t=e.id,c=Object(O.b)(),n=function(e){var n;c((n=t,function(e){return h.a.delete("".concat("http://localhost:5000","/api/post/").concat(n)).then((function(t){e({type:v,payload:{postId:n}})})).catch((function(e){return console.log(e)}))}))};return Object(b.jsx)("div",{onClick:function(){window.confirm("Voulez-vous vraiment supprim\xe9 ce post")&&n()},children:Object(b.jsx)("img",{src:"./img/icons/trash.svg",alt:"trash"})})},B=function(e){var t=e.comment,c=e.postId,r=Object(n.useState)(!1),s=Object(l.a)(r,2),i=s[0],o=s[1],a=Object(n.useState)(!1),j=Object(l.a)(a,2),u=j[0],p=j[1],m=Object(n.useState)(""),f=Object(l.a)(m,2),x=f[0],g=f[1],v=Object(n.useContext)(d),w=Object(O.b)(),y=function(){w(function(e,t){return function(c){return h.a.patch("".concat("http://localhost:5000","/api/post/delete-comments-post/").concat(e),{commentId:t}).then((function(n){c({type:S,payload:{postId:e,commentId:t}})})).catch((function(e){return console.log(e)}))}}(c,t._id))};return Object(n.useEffect)((function(){v===t.commenterId&&o(!0)}),[v,t.commenterId]),Object(b.jsxs)("div",{className:"edit-comment",children:[i&&!1===u&&Object(b.jsxs)("span",{onClick:function(){return p(!u)},children:[" ",Object(b.jsx)("img",{src:"./img/icons/edit.svg",alt:"edit"})," "]}),i&&u&&Object(b.jsxs)("form",{action:"",onSubmit:function(e){e.preventDefault(),x&&(w(function(e,t,c){return function(n){return h.a.patch("".concat("http://localhost:5000","/api/post/edit-comments-post/").concat(e),{commentId:t,text:c}).then((function(r){n({type:_,payload:{postId:e,commentId:t,text:c}})})).catch((function(e){return console.log(e)}))}}(c,t._id,x)),g(""),p(!1))},className:"edit-comment-form",children:[Object(b.jsx)("label",{htmlFor:"text",onClick:function(){return p(!u)},children:"Editer"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"text",onChange:function(e){return g(e.target.value)},defaultValue:t.text}),Object(b.jsx)("br",{}),Object(b.jsxs)("div",{className:"btn",children:[Object(b.jsx)("span",{onClick:function(){window.confirm("Voulez-vous supprimer ce commentaire")&&y()},children:Object(b.jsx)("img",{src:"./img/icons/trash.svg",alt:"trash"})}),Object(b.jsx)("input",{type:"submit",value:"Valider les modification"})]})]})]})},H=function(e){var t=e.post,c=Object(O.c)((function(e){return e.usersReducer})),r=Object(O.c)((function(e){return e.userReducer})),s=Object(O.b)(),i=Object(n.useState)(),o=Object(l.a)(i,2),a=o[0],j=o[1];return Object(b.jsxs)("div",{className:"comments-container",children:[t.comments.map((function(e){return Object(b.jsxs)("div",{className:e.commenterId===r._id?"comment-container client":"comment-container",children:[Object(b.jsx)("div",{className:"left-part",children:Object(b.jsx)("img",{src:!T(c[0])&&c.map((function(t){return t._id===e.commenterId?t.picture:null})).join(""),alt:"poster_pic"})}),Object(b.jsxs)("div",{className:"right-part",children:[Object(b.jsxs)("div",{className:"comment-header",children:[Object(b.jsxs)("div",{className:"pseudo",children:[Object(b.jsx)("h3",{children:e.commenterPseudo}),e.commenterId!==r._id&&Object(b.jsx)(A,{idToFollow:e.commenterId,type:"card"})]}),Object(b.jsx)("span",{children:(n=e.timestamp,new Date(n).toLocaleDateString("fr-FR",{hour:"2-digit",minute:"2-digit",second:"2-digit",weekday:"long",year:"numeric",month:"short",day:"numeric"}).toString())})]}),Object(b.jsx)("p",{children:e.text}),Object(b.jsx)(B,{comment:e,postId:t._id})]})]},e._id);var n})),r._id&&Object(b.jsxs)("form",{action:"",onSubmit:function(e){e.preventDefault(),a&&s(function(e,t,c,n){return function(r){return h.a.patch("".concat("http://localhost:5000","/api/post/comments-post/").concat(e),{commenterId:t,commenterPseudo:c,text:n}).then((function(t){r({type:"ADD_COMMENT",payload:{postId:e}})})).catch((function(e){return console.log(e)}))}}(t._id,r._id,r.pseudo,a)).then((function(){return s(k())})).then((function(){return j("")}))},className:"comment-form",children:[Object(b.jsx)("input",{type:"text",name:"text",onChange:function(e){return j(e.target.value)},value:a,placeholder:"Laisser un commentaire"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"submit",value:"Envoyer"}),Object(b.jsx)("br",{})]})]})},q=function(e){var t=e.post,c=Object(n.useState)(!0),r=Object(l.a)(c,2),s=r[0],i=r[1],o=Object(O.c)((function(e){return e.usersReducer})),a=Object(O.c)((function(e){return e.userReducer})),j=Object(n.useState)(!1),u=Object(l.a)(j,2),d=u[0],p=u[1],m=Object(n.useState)(""),f=Object(l.a)(m,2),x=f[0],v=f[1],w=Object(n.useState)(!1),y=Object(l.a)(w,2),N=y[0],_=y[1],S=Object(O.b)();Object(n.useEffect)((function(){!T(o[0])&&i(!1)}),[o]);return Object(b.jsx)("li",{className:"card-container",children:s?Object(b.jsx)("i",{className:"fas fa-spinner fa-spin"}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"card-left",children:Object(b.jsx)("img",{src:!T(o[0])&&o.map((function(e){return e._id===t.posterId?e.picture:null})).join(""),alt:"user_poster_pic"})}),Object(b.jsxs)("div",{className:"card-right",children:[Object(b.jsxs)("div",{className:"card-header",children:[Object(b.jsxs)("div",{className:"pseudo",children:[Object(b.jsx)("h3",{children:!T(o[0])&&o.map((function(e){return e._id===t.posterId?e.pseudo:null}))}),t.posterId!==a._id&&Object(b.jsx)(A,{idToFollow:t.posterId,type:"card"})]}),Object(b.jsx)("span",{children:I(t.createdAt)})]}),!1===d&&Object(b.jsx)("p",{children:t.message}),d&&Object(b.jsxs)("div",{className:"update-post",children:[Object(b.jsx)("textarea",{defaultValue:t.message,onChange:function(e){return v(e.target.value)}}),Object(b.jsx)("div",{className:"button-container",children:Object(b.jsx)("button",{className:"btn",onClick:function(e){var c,n;x&&S((c=t._id,n=x,function(e){return h.a.put("".concat("http://localhost:5000","/api/post/").concat(c),{message:n}).then((function(t){e({type:g,payload:{postId:c,message:n}})})).catch((function(e){return console.log(e)}))})),p(!1)},children:"Valider modifications"})})]}),t.picture&&Object(b.jsx)("img",{src:t.picture,alt:"post-pic",className:"card-pic"}),t.video&&Object(b.jsx)("iframe",{width:"500",height:"300",src:t.video,frameBorder:"0",allow:"accelerometer; clipboard-write; encrypted-media;gyroscope;picture-in-picture",allowFullScreen:!0,title:t.video}),a._id===t.posterId&&Object(b.jsxs)("div",{className:"button-container",children:[Object(b.jsxs)("div",{onClick:function(){p(!d)},children:[" ",Object(b.jsx)("img",{src:"./img/icons/edit.svg",alt:"edit"})," "]}),Object(b.jsx)(z,{id:t._id})]}),Object(b.jsxs)("div",{className:"card-footer",children:[Object(b.jsxs)("div",{className:"comment-icon",children:[Object(b.jsx)("img",{src:"./img/icons/message1.svg",alt:"comment",onClick:function(){return _(!N)}}),Object(b.jsx)("i",{class:"fal fa-comment-alt-lines"}),Object(b.jsx)("span",{children:t.comments.length})]}),Object(b.jsx)(V,{post:t}),Object(b.jsx)("img",{src:"./img/icons/share.svg",alt:"share"})]}),N&&Object(b.jsx)(H,{post:t})]})]})},t._id)},G=function(){var e=Object(n.useState)(!0),t=Object(l.a)(e,2),c=t[0],r=t[1],s=Object(O.b)(),i=Object(O.c)((function(e){return e.postReducer})),o=Object(n.useState)(5),a=Object(l.a)(o,2),j=a[0],u=a[1],d=function(){window.innerHeight+document.documentElement.scrollTop+1>document.scrollingElement.scrollHeight&&(r(!0),u(j+5))};return Object(n.useEffect)((function(){return c&&(s(k(j)),r(!1)),window.addEventListener("scroll",d),function(){return window.removeEventListener("scroll",d)}}),[c,s]),Object(b.jsx)("div",{className:"thread-container",children:Object(b.jsx)("ul",{children:!T(i[0])&&i.map((function(e){return Object(b.jsx)(q,{post:e},e._id)}))})})},J=c(19),K=c(5),W=function(){var e=Object(n.useState)({email:"",password:""}),t=Object(l.a)(e,2),c=t[0],r=t[1],s=function(e){var t=e.target.name,n=e.target.value;r(Object(K.a)(Object(K.a)({},c),{},Object(J.a)({},t,n)))};return Object(b.jsxs)("form",{action:"",onSubmit:function(e){e.preventDefault();var t=document.querySelector(".email.error"),n=document.querySelector(".password.error");h()({method:"POST",url:"".concat("http://localhost:5000","/api/user/login"),withCredentials:!0,data:{email:c.email,password:c.password}}).then((function(e){e.data.errors?(t.innerHTML=e.data.errors.email,n.innerHTML=e.data.errors.password):window.location="/"})).catch((function(e){console.log(e)}))},id:"sign-up-form",children:[Object(b.jsx)("label",{htmlFor:"email",children:"Email"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"email",name:"email",id:"email",value:c.email,onChange:s}),Object(b.jsx)("div",{className:"email error"}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{htmlFor:"password",children:"Mot de passe"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"password",name:"password",id:"password",value:c.password,onChange:s}),Object(b.jsx)("div",{className:"password error"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"submit",value:"se connecter"})]})},Q=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)({pseudo:"",email:"",password:"",confirm_password:""}),i=Object(l.a)(s,2),j=i[0],u=i[1],d=function(e){var t=e.target.name,c=e.target.value;u(Object(K.a)(Object(K.a)({},j),{},Object(J.a)({},t,c)))},p=function(){var e=Object(a.a)(o.a.mark((function e(t){var c,n,s,i,a,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),c=document.getElementById("terms"),n=document.querySelector(".pseudo.error"),s=document.querySelector(".email.error"),i=document.querySelector(".password.error"),a=document.querySelector(".confirm-password.error"),l=document.querySelector(".terms.error"),n.textContent=null,s.textContent=null,i.textContent=null,a.textContent=null,l.textContent=null,j.password===j.confirm_password&&c.checked){e.next=17;break}j.password!==j.confirm_password&&(a.textContent="Les mots de passe ne correspondent pas"),c.checked||(l.textContent="Veuillez valider les conditions g\xe9n\xe9rales."),e.next=19;break;case 17:return e.next=19,h()({method:"POST",url:"".concat("http://localhost:5000","/api/user/register"),data:{pseudo:j.pseudo,email:j.email,password:j.password}}).then((function(e){e.data.errors?(n.textContent=e.data.errors.pseudo,s.textContent=e.data.errors.email,i.textContent=e.data.errors.password):r(!0)})).catch((function(e){return console.log(e)}));case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsx)(b.Fragment,{children:c?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(W,{})," ",Object(b.jsx)("span",{}),Object(b.jsx)("h4",{className:"success",children:"Enregistrement R\xe9ussi, veuillez vous connecter"})," "]}):Object(b.jsxs)("form",{action:"",onSubmit:p,id:"sign-up-form",children:[Object(b.jsx)("label",{htmlFor:"pseudo",children:"Pseudo"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"text",name:"pseudo",id:"pseudo",onChange:d,value:j.pseudo}),Object(b.jsx)("div",{className:"pseudo error"}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{htmlFor:"email",children:"Email"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"email",name:"email",id:"email",onChange:d,value:j.email}),Object(b.jsx)("div",{className:"email error"}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{htmlFor:"password",children:"Mot de passe"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"password",name:"password",id:"password",onChange:d,value:j.password}),Object(b.jsx)("div",{className:"password error"}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{htmlFor:"confirm-password",children:"Confirmer mot de passen"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"password",name:"confirm_password",id:"confirm-password",onChange:d,value:j.confirm_password}),Object(b.jsx)("div",{className:"confirm-password error"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"checkbox",name:"terms",id:"terms"}),Object(b.jsxs)("label",{htmlFor:"terms",children:["J'accepte les"," ",Object(b.jsx)("a",{href:"/",target:"_blank",rel:"noopener noreferrer",children:"conditions g\xe9n\xe9rales"})]}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{className:"terms error"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"submit",value:"Valider l'inscription"})]})})},X=function(e){var t=e.signIn,c=e.signUp,r=Object(n.useState)(c),s=Object(l.a)(r,2),i=s[0],o=s[1],a=Object(n.useState)(t),j=Object(l.a)(a,2),u=j[0],d=j[1],p=function(e){"register"===e.target.id?(d(!1),o(!0)):"login"===e.target.id&&(o(!1),d(!0))};return Object(b.jsx)("div",{className:"connection-form",children:Object(b.jsxs)("div",{className:"form-container",children:[Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{onClick:p,id:"register",className:i?"active-btn":null,children:"S'inscrire"}),Object(b.jsx)("li",{onClick:p,id:"login",className:u?"active-btn":null,children:"Se connecter"})]}),i&&Object(b.jsx)(Q,{}),u&&Object(b.jsx)(W,{})]})})},Y=function(){var e=Object(O.c)((function(e){return e.allPostsReducer})),t=Object(O.c)((function(e){return e.trendingReducer})),c=Object(O.c)((function(e){return e.usersReducer})),r=Object(O.b)();return Object(n.useEffect)((function(){if(!T(e[0])){var t=Object.keys(e).map((function(t){return e[t]})).sort((function(e,t){return t.likers.length-e.likers.length}));t.length=3,r(function(e){return function(t){t({type:C,payload:e})}}(t))}}),[e,r]),Object(b.jsxs)("div",{className:"trending-container",children:[Object(b.jsx)("h4",{children:"Trending"}),Object(b.jsx)(j.b,{exact:!0,to:"/trending",children:Object(b.jsx)("ul",{children:t.length&&t.map((function(e){return Object(b.jsxs)("li",{children:[Object(b.jsxs)("div",{children:[e.picture&&Object(b.jsx)("img",{src:e.picture,alt:"post-trend-pic"}),e.video&&Object(b.jsx)("iframe",{src:e.video,frameBorder:"0",allow:"accelerometer; clipboard-write; encrypted-media;gyroscope;picture-in-picture",allowFullScreen:!0,title:e._id}),T(e.picture)&&T(e.video)&&Object(b.jsx)("img",{src:c[0]&&c.map((function(t){return t._id===e.posterId?t.picture:null})).join(""),alt:"profil-pic-trend"})]}),Object(b.jsxs)("div",{className:"trend-content",children:[Object(b.jsx)("p",{children:e.message}),Object(b.jsx)("span",{children:"Lire"})]})]},e._id)}))})})]})},Z=function(){var e=Object(O.c)((function(e){return e.userReducer})),t=Object(O.c)((function(e){return e.usersReducer})),c=(Object(O.b)(),Object(n.useState)(!0)),r=Object(l.a)(c,2),s=r[0],i=r[1],o=Object(n.useState)(!0),a=Object(l.a)(o,2),j=a[0],u=a[1],d=Object(n.useState)([]),p=Object(l.a)(d,2),m=p[0],h=p[1];return Object(n.useEffect)((function(){!j||T(t[0])||T(e._id)||(!function(){var c=[];t.map((function(t){if(t._id!==e._id&&!t.followers.includes(e._id))return c.push(t._id)})),c.sort((function(){return.5-Math.random()})),window.innerHeight>780?c.length=5:window.innerHeight>720?c.length=4:window.innerHeight>610?c.length=3:window.innerHeight>540?c.length=1:c.length=0,h(c)}(),i(!1),u(!1))}),[t,e]),Object(b.jsxs)("div",{className:"get-friends-container",children:[Object(b.jsx)("h4",{children:"Suggestions d'amis"}),s?Object(b.jsx)("div",{className:"icon",children:Object(b.jsx)("i",{className:"fas fa-spinner fa-pulse"})}):Object(b.jsx)("ul",{children:m&&m.map((function(e){for(var c=0;c<t.length;c++)if(e===t[c]._id)return Object(b.jsxs)("li",{className:"user-hint",children:[Object(b.jsx)("img",{src:t[c].picture,alt:"user-pic"}),Object(b.jsx)("p",{children:t[c].pseudo}),Object(b.jsx)(A,{idToFollow:t[c]._id,type:"suggestion"})]},e)}))})]})},$=function(){var e=Object(n.useContext)(d);return Object(b.jsxs)("div",{className:"home",children:[Object(b.jsx)(p,{}),Object(b.jsxs)("div",{className:"main",children:[Object(b.jsx)("div",{className:"home-header",children:e?Object(b.jsx)(F,{}):Object(b.jsx)(X,{signin:!0,signup:!1})}),Object(b.jsx)(G,{})]}),Object(b.jsx)("div",{className:"right-side",children:Object(b.jsx)("div",{className:"right-side-container",children:Object(b.jsxs)("div",{className:"wrapper",children:[Object(b.jsx)(Y,{}),e&&Object(b.jsx)(Z,{})]})})})]})},ee=function(){var e=Object(n.useState)(),t=Object(l.a)(e,2),c=t[0],r=t[1],s=Object(O.b)(),i=Object(O.c)((function(e){return e.userReducer}));return Object(b.jsx)("div",{children:Object(b.jsxs)("form",{action:"",className:"upload-pic",onSubmit:function(e){e.preventDefault();var t=new FormData;t.append("name",i.pseudo),t.append("userId",i._id),t.append("file",c),s(function(e,t){return function(c){return h.a.post("".concat("http://localhost:5000","/api/user/upload"),e).then((function(e){return h.a.get("".concat("http://localhost:5000","/api/user/").concat(t)).then((function(e){c({type:D,payload:e.data.picture})}))})).catch((function(e){return console.log(e)}))}}(t,i._id))},children:[Object(b.jsx)("label",{htmlFor:"file",children:"Changer l'image de profil"}),Object(b.jsx)("input",{type:"file",name:"file",id:"file",accept:".jpg,.jpeg,.png",onChange:function(e){var t=e.target.files[0];r(t)}}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"submit",value:"Envoyer"})]})})},te=function(){var e=Object(n.useState)(),t=Object(l.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(!1),i=Object(l.a)(s,2),o=i[0],a=i[1],j=Object(O.c)((function(e){return e.userReducer})),u=Object(O.c)((function(e){return e.usersReducer})),d=Object(O.b)(),m=Object(n.useState)(!1),f=Object(l.a)(m,2),x=f[0],g=f[1],v=Object(n.useState)(!1),w=Object(l.a)(v,2),y=w[0],N=w[1];return Object(b.jsxs)("div",{className:"profil-container",children:[Object(b.jsx)(p,{}),Object(b.jsxs)("h1",{children:["Profil de ",j.pseudo]}),Object(b.jsxs)("div",{className:"update-container",children:[Object(b.jsxs)("div",{className:"left-part",children:[Object(b.jsx)("h3",{children:"Photo de profil"}),Object(b.jsx)("img",{src:j.picture,alt:"user-logo"}),Object(b.jsx)(ee,{})]}),Object(b.jsxs)("div",{className:"right-part",children:[Object(b.jsxs)("div",{className:"bio-update",children:[Object(b.jsx)("h3",{children:"Bio"}),!1===o&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("p",{onClick:function(){return a(!o)},children:j.bio}),Object(b.jsx)("button",{onClick:function(){return a(!o)},children:"Modifier bio"})]}),o&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("textarea",{name:"",id:"",defaultValue:j.bio,onChange:function(e){return r(e.target.value)}}),Object(b.jsx)("button",{onClick:function(e){d(function(e,t){return function(c){return h.a.put("".concat("http://localhost:5000","/api/user/").concat(e),{bio:t}).then((function(e){return c({type:L,payload:t})})).catch((function(e){return console.log(e)}))}}(j._id,c)),a(!1)},children:"Valider les modifications"})]})]}),Object(b.jsxs)("h4",{children:["Membre depuis le : ",I(j.createdAt)," "]}),Object(b.jsxs)("h5",{onClick:function(){return g(!0)},children:["Abonnement : ",j.following?j.following.length:null]}),Object(b.jsxs)("h5",{onClick:function(){return N(!0)},children:["Abonn\xe9s : ",j.followers?j.followers.length:null]})]})]}),x&&Object(b.jsx)("div",{className:"popup-profil-container",children:Object(b.jsxs)("div",{className:"modal",children:[Object(b.jsx)("h3",{children:"Abonnements"}),Object(b.jsx)("span",{className:"cross",onClick:function(){return g(!1)},children:"\u2715"}),Object(b.jsx)("ul",{children:u.map((function(e){for(var t=0;t<j.following.length;t++)if(e._id===j.following[t])return Object(b.jsxs)("li",{children:[Object(b.jsx)("img",{src:e.picture,alt:"user_pic"}),Object(b.jsx)("h4",{children:e.pseudo}),Object(b.jsx)(A,{idToFollow:e._id,type:"suggestion"})]},e._id)}))})]})}),y&&Object(b.jsx)("div",{className:"popup-profil-container",children:Object(b.jsxs)("div",{className:"modal",children:[Object(b.jsx)("h3",{children:"Abonn\xe9s"}),Object(b.jsx)("span",{className:"cross",onClick:function(){return N(!1)},children:"\u2715"}),Object(b.jsx)("ul",{children:u.map((function(e){for(var t=0;t<j.followers.length;t++)if(e._id===j.followers[t])return Object(b.jsxs)("li",{children:[Object(b.jsx)("img",{src:e.picture,alt:"user_pic"}),Object(b.jsx)("h4",{children:e.pseudo}),Object(b.jsx)(A,{idToFollow:e._id,type:"suggestion"})]},e._id)}))})]})})]})},ce=function(){var e=Object(n.useContext)(d);return Object(b.jsx)("div",{className:"profil-page",children:e?Object(b.jsx)("div",{children:Object(b.jsx)(te,{})}):Object(b.jsxs)("div",{className:"log-container",children:[Object(b.jsx)(X,{signIn:!1,signUp:!0}),Object(b.jsx)("div",{className:"img-container",children:Object(b.jsx)("img",{src:"./img/log.svg",alt:"img-log"})})]})})},ne=function(){var e=Object(n.useContext)(d),t=Object(O.c)((function(e){return e.trendingReducer}));return Object(b.jsxs)("div",{className:"trending-page",children:[Object(b.jsx)(p,{}),Object(b.jsx)("div",{className:"main",children:Object(b.jsx)("ul",{children:!T(t[0])&&t.map((function(e){return Object(b.jsx)(q,{post:e},e._id)}))})}),Object(b.jsx)("div",{className:"right-side",children:Object(b.jsxs)("div",{className:"right-side-container",children:[Object(b.jsx)(Y,{}),e&&Object(b.jsx)(Z,{})]})})]})},re=c(41),se=c.n(re),ie=function(){var e=function(){var e=Object(a.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h()({method:"GET",url:"".concat("http://localhost:5000","/api/user/logout"),withCredentials:!0}).then((function(){return e="jwt",void("undefined"===window&&se.a.remove(e,{expires:1}));var e})).catch((function(e){return console.log(e)}));case 2:window.location="/";case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsx)("li",{onClick:e,children:Object(b.jsx)("img",{src:"./img/icons/logout.svg",alt:"logout-icon"})})},oe=function(){var e=Object(n.useContext)(d),t=Object(O.c)((function(e){return e.userReducer}));return Object(b.jsx)("nav",{children:Object(b.jsxs)("div",{className:"nav-container",children:[Object(b.jsx)("div",{className:"logo",children:Object(b.jsx)(j.b,{exact:!0,to:"/",children:Object(b.jsxs)("div",{className:"logo",children:[Object(b.jsx)("img",{src:"./img/icon.png",alt:"home-logo"}),Object(b.jsx)("h3",{children:"Kiwi-Project"})]})})}),e?Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{}),Object(b.jsx)("li",{className:"welcome",children:Object(b.jsx)(j.b,{exact:!0,to:"/profil",children:Object(b.jsxs)("h5",{children:["Bienvenue ".concat(t.pseudo)," "]})})}),Object(b.jsx)(ie,{})]}):Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{}),Object(b.jsx)("li",{children:Object(b.jsx)(j.b,{exact:!0,to:"/profil",children:Object(b.jsx)("img",{src:"./img/icons/login.svg",alt:"login-logo"})})})]})]})})},ae=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(j.a,{children:[Object(b.jsx)(oe,{}),Object(b.jsxs)(u.d,{children:[Object(b.jsx)(u.b,{path:"/",exact:!0,component:$}),Object(b.jsx)(u.b,{path:"/profil",exact:!0,component:ce}),Object(b.jsx)(u.b,{path:"/trending",exact:!0,component:ne}),Object(b.jsx)(u.a,{to:"/"})]})]})})};var le=function(){var e=Object(n.useState)(null),t=Object(l.a)(e,2),c=t[0],r=t[1],s=Object(O.b)();return Object(n.useEffect)((function(){(function(){var e=Object(a.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h()({method:"get",url:"".concat("http://localhost:5000","/jwtid"),withCredentials:!0}).then((function(e){r(e.data)})).catch((function(e){return console.log("no token")}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),c&&s(function(e){return function(t){return h.a.get("".concat("http://localhost:5000","/api/user/").concat(e)).then((function(e){t({type:R,payload:e.data})})).catch((function(e){return console.log(e)}))}}(c))}),[c,s]),Object(b.jsx)(d.Provider,{value:c,children:Object(b.jsx)(ae,{})})},je=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,76)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),r(e),s(e),i(e)}))},ue=c(16),de=c(42),be=c(43),pe=c(24),Oe={};var me="GET_USERS",he={};var fe={};var xe={};var ge={};var ve={postErrors:[]};var we=Object(ue.combineReducers)({userReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:return t.payload;case D:return Object(K.a)(Object(K.a)({},e),{},{picture:t.payload});case L:return Object(K.a)(Object(K.a)({},e),{},{bio:t.payload});case P:return Object(K.a)(Object(K.a)({},e),{},{following:[].concat(Object(pe.a)(e.following),[t.payload.idToFollow])});case U:return Object(K.a)(Object(K.a)({},e),{},{following:e.following.filter((function(e){return e!==t.payload.idToUnFollow}))});default:return e}},usersReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case me:return t.payload;default:return e}},postReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return t.payload;case y:return e.map((function(e){return e._id===t.payload.postId?Object(K.a)(Object(K.a)({},e),{},{likers:[t.payload.userId].concat(Object(pe.a)(e.likers))}):e}));case N:return e.map((function(e){return e._id===t.payload.postId?Object(K.a)(Object(K.a)({},e),{},{likers:e.likers.filter((function(e){return e!==t.payload.userId}))}):e}));case g:return e.map((function(e){return e._id===t.payload.postId?Object(K.a)(Object(K.a)({},e),{},{message:t.payload.message}):e}));case v:return e.filter((function(e){return e._id!==t.payload.postId}));case _:return e.map((function(e){return e._id===t.payload.postId?Object(K.a)(Object(K.a)({},e),{},{comments:e.comments.map((function(e){return e._id===t.payload.commentId?Object(K.a)(Object(K.a)({},e),{},{text:t.payload.text}):e}))}):e}));case S:return e.map((function(e){return e._id===t.payload.postId?Object(K.a)(Object(K.a)({},e),{},{comments:e.comments.filter((function(e){return e._id!==t.payload.commentId}))}):e}));default:return e}},allPostsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return t.payload;default:return e}},trendingReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return t.payload;default:return e}},errorsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return{postErrors:t.payload,userErrors:[]};default:return e}}}),ye=Object(ue.createStore)(we,Object(be.composeWithDevTools)(Object(ue.applyMiddleware)(de.a)));ye.dispatch((function(e){return h.a.get("".concat("http://localhost:5000","/api/user")).then((function(t){e({type:me,payload:t.data})})).catch((function(e){return console.log(e)}))})),ye.dispatch(k()),s.a.render(Object(b.jsx)(O.a,{store:ye,children:Object(b.jsx)(le,{})}),document.getElementById("root")),je()}},[[75,1,2]]]);
//# sourceMappingURL=main.34c7b807.chunk.js.map