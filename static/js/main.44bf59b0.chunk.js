(this.webpackJsonphihifrontend=this.webpackJsonphihifrontend||[]).push([[0],{202:function(e,t,n){},209:function(e,t,n){},224:function(e,t){},226:function(e,t){},228:function(e,t){},232:function(e,t){},259:function(e,t){},261:function(e,t){},273:function(e,t){},275:function(e,t){},395:function(e,t){},397:function(e,t){},404:function(e,t){},405:function(e,t){},496:function(e,t,n){},497:function(e,t,n){},498:function(e,t,n){},499:function(e,t,n){"use strict";n.r(t);n(202);var a=n(197),i=n(15),s=n(198),r=n.n(s),u=n(25),o=(n(209),n(12)),p=n.n(o),c=n(31),l=n(74),y=n.n(l),d=n(7),m=[{inputs:[{internalType:"string",name:"_name",type:"string"},{internalType:"string",name:"_symbol",type:"string"},{internalType:"string",name:"_initBaseURI",type:"string"},{internalType:"string",name:"_initNotRevealedUri",type:"string"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_mintAmount",type:"uint256"}],name:"mint",outputs:[],stateMutability:"payable",type:"function"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{inputs:[{internalType:"bool",name:"_state",type:"bool"}],name:"pause",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"reveal",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"_newBaseExtension",type:"string"}],name:"setBaseExtension",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"_newBaseURI",type:"string"}],name:"setBaseURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_newCost",type:"uint256"}],name:"setCost",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_newmaxMintAmount",type:"uint256"}],name:"setmaxMintAmount",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"_notRevealedURI",type:"string"}],name:"setNotRevealedURI",outputs:[],stateMutability:"nonpayable",type:"function"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"withdraw",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"baseExtension",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"cost",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"costCheck",outputs:[{internalType:"uint256",name:"_cost",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"maxMintAmount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"maxSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_supply",type:"uint256"}],name:"needToUpdateCost",outputs:[{internalType:"uint256",name:"_cost",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"notRevealedUri",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"paused",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"revealed",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_owner",type:"address"}],name:"walletOfOwner",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"}],b=function(e){var t=e.web3,n=e.mintAmount,a=Object(i.useState)("Proceed to pay"),s=Object(u.a)(a,2),r=s[0],o=s[1],l=function(){var e=Object(c.a)(p.a.mark((function e(){var a,i,s,r,u;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o("Mint in progress..."),e.next=4,t.eth.getAccounts();case 4:return a=e.sent,i=new t.eth.Contract(m,"0x9Fd5bBEA854C027adB8aAf564ff9b5d517893587"),e.t0=i.methods,e.next=9,i.methods.totalSupply().call();case 9:return e.t1=e.sent,e.next=12,e.t0.needToUpdateCost.call(e.t0,e.t1).call();case 12:return s=e.sent,r=t.utils.toWei((s*n/1e18).toString(),"ether"),e.next=16,i.methods.mint(n).send({from:a[0],value:r});case 16:u=e.sent,console.log("Transaction completed:",u),o("Mint successful!"),e.next=25;break;case 21:e.prev=21,e.t2=e.catch(0),console.error("Minting error:",e.t2),o("Mint failed. Try again.");case 25:case"end":return e.stop()}}),e,null,[[0,21]])})));return function(){return e.apply(this,arguments)}}();return Object(d.jsx)("button",{className:"mintbtn",onClick:l,children:r})},f=(n(496),n.p+"static/media/pdfpic.c54fca22.jpeg"),h=function(){var e=Object(c.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=window.ethereum,e.next=3,t.request({method:"eth_requestAccounts"});case 3:return n=new y.a(t),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(i.useState)(null),t=Object(u.a)(e,2),n=t[0],a=t[1],s=function(){var e=Object(c.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"mintzy",children:[Object(d.jsx)("img",{className:"pic",src:f,alt:""}),n?Object(d.jsx)(b,{web3:n,mintAmount:1}):Object(d.jsx)("button",{className:"mintbtn",onClick:s,children:"0.04 AVAX"})]})},j=(n(497),n.p+"static/media/LOGOTR.ef347dd5.png"),w=void 0,T=function(e){var t=e.onLoggedIn,n=Object(i.useState)(!1),a=Object(u.a)(n,2),s=a[0],r=a[1],o=function(e){var t=e.publicAddress,n=e.signature;return fetch("https://vast-forest-35363.herokuapp.com/api".concat("/auth"),{body:JSON.stringify({publicAddress:t,signature:n}),headers:{"Content-Type":"application/json"},method:"POST"}).then((function(e){return e.json()}))},l=function(){var e=Object(c.a)(p.a.mark((function e(t){var n,a,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.publicAddress,a=t.nonce,e.prev=1,e.next=4,w.eth.personal.sign("I am signing my one-time nonce: ".concat(a),n,"");case 4:return i=e.sent,e.abrupt("return",{publicAddress:n,signature:i});case 8:throw e.prev=8,e.t0=e.catch(1),new Error("You need to sign the message to be able to log in.");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),m=function(e){return fetch("https://vast-forest-35363.herokuapp.com/api".concat("/users"),{body:JSON.stringify({publicAddress:e}),headers:{"Content-Type":"application/json"},method:"POST"}).then((function(e){return e.json()}))},b=function(){var e=Object(c.a)(p.a.mark((function e(){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(window.ethereum){e.next=3;break}return window.alert("Please install MetaMask first."),e.abrupt("return");case 3:if(w){e.next=14;break}return e.prev=4,e.next=7,window.ethereum.enable();case 7:w=new y.a(window.ethereum),e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(4),window.alert("You need to allow MetaMask."),e.abrupt("return");case 14:return e.next=16,w.eth.getCoinbase();case 16:if(n=e.sent){e.next=20;break}return window.alert("Please activate MetaMask first."),e.abrupt("return");case 20:a=n.toLowerCase(),r(!0),fetch("https://vast-forest-35363.herokuapp.com/api".concat("/users?publicAddress=",a)).then((function(e){return e.json()})).then((function(e){return e.length?e[0]:m(a)})).then(l).then(o).then(t).catch((function(e){window.alert(e),r(!1)}));case 23:case"end":return e.stop()}}),e,null,[[4,10]])})));return function(){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"page",children:[Object(d.jsx)("div",{className:"header",children:"Login with Metamask to proceed to our VIP dApp"}),Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:j,className:"pic"})}),Object(d.jsx)("button",{className:"Login-button Login-mm",onClick:b,children:s?"Loading...":"Web3 Login"})]})},g=n(22),O=(n(498),n(108)),x=function(e){var t=e.auth,n=e.onLoggedOut,a=Object(i.useState)({loading:!1,user:void 0,username:""}),s=Object(u.a)(a,2),r=s[0],o=s[1];Object(i.useEffect)((function(){var e=t.accessToken,n=Object(O.a)(e).payload.id;fetch("https://vast-forest-35363.herokuapp.com/api".concat("/users/",n),{headers:{Authorization:"Bearer ".concat(e)}}).then((function(e){return e.json()})).then((function(e){return o(Object(g.a)(Object(g.a)({},r),{},{user:e}))})).catch(window.alert)}),[]);var p=t.accessToken,c=Object(O.a)(p).payload.publicAddress,l=r.loading,y=r.user,m=y&&y.username;return Object(d.jsxs)("div",{className:"Profile ",children:[Object(d.jsxs)("div",{className:"names",children:[m?Object(d.jsx)("pre",{children:m}):"not set."," ",Object(d.jsx)("pre",{className:"hidoz",children:c})]}),Object(d.jsxs)("div",{className:"edit",children:[Object(d.jsx)("label",{htmlFor:"username",children:"Change username: "}),Object(d.jsx)("input",{name:"username",onChange:function(e){var t=e.target.value;o(Object(g.a)(Object(g.a)({},r),{},{username:t}))}}),Object(d.jsx)("button",{className:"Login-mm",disabled:l,onClick:function(){var e=t.accessToken,n=r.user,a=r.username;o(Object(g.a)(Object(g.a)({},r),{},{loading:!0})),n?fetch("https://vast-forest-35363.herokuapp.com/api".concat("/users/",n.id),{body:JSON.stringify({username:a}),headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"},method:"PATCH"}).then((function(e){return e.json()})).then((function(e){return o(Object(g.a)(Object(g.a)({},r),{},{loading:!1,user:e}))})).catch((function(e){window.alert(e),o(Object(g.a)(Object(g.a)({},r),{},{loading:!1}))})):window.alert("The user id has not been fetched yet. Please try again in 5 seconds.")},children:"Submit"})]}),Object(d.jsx)("p",{children:Object(d.jsx)("button",{className:"Login-button Login-mm",onClick:n,children:"Logout"})})]})},M=n.p+"static/media/LOGO.04d436a4.png",k="login-with-metamask:auth",A=function(){var e=Object(i.useState)({}),t=Object(u.a)(e,2),n=t[0],a=t[1];Object(i.useEffect)((function(){var e=window.localStorage.getItem(k),t=e&&JSON.parse(e);a({auth:t})}),[]);var s=n.auth;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("header",{className:"App-header",children:Object(d.jsx)("img",{src:M,className:"App-logo",alt:"logo"})}),Object(d.jsx)("div",{className:"App-intro",children:s?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(x,{auth:s,onLoggedOut:function(){localStorage.removeItem(k),a({auth:void 0})}}),Object(d.jsx)(v,{})]}):Object(d.jsx)(T,{onLoggedIn:function(e){localStorage.setItem(k,JSON.stringify(e)),a({auth:e})}})})]})};Object(a.config)({path:".env.production"}),r.a.render(Object(d.jsx)(A,{}),document.getElementById("root"))}},[[499,1,2]]]);
//# sourceMappingURL=main.44bf59b0.chunk.js.map