"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[7976],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return u}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),s=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},d=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),m=s(a),u=r,k=m["".concat(p,".").concat(u)]||m[u]||c[u]||l;return a?n.createElement(k,o(o({ref:e},d),{},{components:a})):n.createElement(k,o({ref:e},d))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},98530:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return m}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),o=["components"],i={sidebar_label:"Wallet Guide",sidebar_position:2,hide_table_of_contents:!1},p="Wallet Guide",s={unversionedId:"Wallet",id:"Wallet",isDocsHomePage:!1,title:"Wallet Guide",description:"What is a Wallet?",source:"@site/docs/Wallet.md",sourceDirName:".",slug:"/Wallet",permalink:"/docs/Wallet",editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/Wallet.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Wallet Guide",sidebar_position:2,hide_table_of_contents:!1},sidebar:"bscSideBar",previous:{title:"Integration",permalink:"/docs/Integrate"},next:{title:"Wallet Key Management",permalink:"/docs/create-wallet"}},d=[{value:"What is a Wallet?",id:"what-is-a-wallet",children:[],level:2},{value:"Supported Wallets",id:"supported-wallets",children:[],level:2}],c={toc:d};function m(t){var e=t.components,a=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"wallet-guide"},"Wallet Guide"),(0,l.kt)("h2",{id:"what-is-a-wallet"},"What is a Wallet?"),(0,l.kt)("p",null,"A crypto wallet is a device or program used for transfer and storage of cryptocurrency. Crypto wallets can be of different types, such as paper wallets, hardware wallets, and software wallets. There are also several smartphone mobile apps and computer programs that provide a user-friendly way to create and manage wallets. Along with crytocurreny, crypto wallets store a collection of crypto keys that are used for sending, receiving, and taracking ownership of cryptocurrencies."),(0,l.kt)("p",null,"A keypair is a cryptographically-derived securely generated private and public keys. A private key and its corresponding public key are together known as a keypair. A wallet contains a collection of one or more keypairs and provides some means to interact with them. The security of any crypto wallet depends upon how the private key is stored."),(0,l.kt)("p",null,"The public key is known as the wallet's receiving address or simply its address. The wallet address may be shared and displayed freely. When another party is going to send some amount of cryptocurrency to a wallet, they need to know the wallet's receiving address. Depending on a blockchain's implementation, the address can also be used to view certain information about a wallet, such as viewing the balance, but has no ability to change anything about the wallet or withdraw any tokens."),(0,l.kt)("p",null,"In order to send cryptocurrencies to another address or to make any changes to the wallet, the private key is used for digitally signing the transactions. It is important to note that the private key must never be shared and should always be kept securely. If by any means access is gained to the private key attached to a wallet, the attacker can withdraw all the tokens contained. Furthermore, if the private key for a wallet is lost, any tokens that have been sent to or stored in that wallet's address are permanently lost."),(0,l.kt)("p",null,"Different wallet solutions offer different approaches to keypair security, interacting with the keypair, and signing transactions to use/spend the tokens. Some are easier to use than others. Some store and back up private keys more securely. Binance Smart Chain supports several wallets, giving its users the right to choose the right wallet for their required security and convenience."),(0,l.kt)("p",null,"If you want to be able to receive BNB and other supported tokens on the Binance Smart Chain blockchain, you will first need to create a wallet and configure ",(0,l.kt)("a",{parentName:"p",href:"/docs/create-wallet"},"key management"),"."),(0,l.kt)("h2",{id:"supported-wallets"},"Supported Wallets"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"List of Wallets Supporting BNB Chain")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Number"),(0,l.kt)("th",{parentName:"tr",align:null},"Wallet Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Website"),(0,l.kt)("th",{parentName:"tr",align:null},"Staking Support"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Binance Extension Wallet"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://binance-wallet.gitbook.io/binance-chain-wallet/"},"https://binance-wallet.gitbook.io/binance-chain-wallet/")),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/wallet/trustwallet"},"Trust Wallet")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://trustwallet.com/"},"https://trustwallet.com/")),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/wallet/math"},"Math Wallet")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://mathwallet.org/en-us/"},"https://mathwallet.org/en-us/")),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4s"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://blog.safepal.io/binance-smart-chain-x-safepal/"},"SafePal")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://safepal.io/"},"https://safepal.io/")),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://tokenpocket-gm.medium.com/defi-with-tokenpocket-how-to-use-binance-smart-chain-swap-with-tokenpocket-e76d6cd7986"},"TokenPocket")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.tokenpocket.pro/"},"https://www.tokenpocket.pro/")),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/wallet/arkane"},"Arkane")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://arkane.network/"},"https://arkane.network/")),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"7"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/wallet/metamask"},"MetaMask")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://metamask.zendesk.com/hc/en-us"},"https://metamask.zendesk.com/hc/en-us")),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/wallet/ledger"},"Ledger")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.ledger.com/"},"https://www.ledger.com/")),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"9"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/wallet/trezor"},"Trezor")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://wallet.trezor.io"},"https://wallet.trezor.io")),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/wallet/myetherwallet"},"MEW")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.myetherwallet.com/"},"https://www.myetherwallet.com/")),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"11"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"wallet/ezdefi.md"},"ezDeFi")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://ezdefi.com"},"http://ezdefi.com")),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"12"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.youtube.com/watch?v=BXFvPMxJ4_Q"},"1inch wallet")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://1inch.io/wallet/"},"https://1inch.io/wallet/")),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"13"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/wallet/infinitywallet"},"Infinity wallet")," (Desktop)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://infinitywallet.io/download/"},"https://infinitywallet.io/download/")),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"14"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/wallets/bitkeep"},"BitKeep")," (App&Chrome)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://bitkeep.com"},"https://bitkeep.com")),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"15"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/wallet/coin98wallet"},"Coin98 Wallet")," (App Web Extension)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://coin98.com/wallet"},"https://coin98.com/wallet")),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"16"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://guarda.com/coins/binance-coin-wallet/"},"Guarda Wallet")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://guarda.com/coins/binance-coin-wallet/"},"https://guarda.com/coins/binance-coin-wallet/")),(0,l.kt)("td",{parentName:"tr",align:null},"No")))))}m.isMDXComponent=!0}}]);