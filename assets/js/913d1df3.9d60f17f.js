"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[5677],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return c}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),p=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=p(t.components);return a.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,u=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),m=p(n),c=r,h=m["".concat(u,".").concat(c)]||m[c]||d[c]||i;return n?a.createElement(h,o(o({ref:e},s),{},{components:n})):a.createElement(h,o({ref:e},s))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},41393:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={sidebar_label:"NFT Metadata Standard",sidebar_position:1},u="Implementing token URI",p={unversionedId:"nft-metadata-standard",id:"nft-metadata-standard",isDocsHomePage:!1,title:"Implementing token URI",description:"To facilitate a marketplace on BSC to pull in off-chain metadata for BEP721 assets, the NFT contract will need to return a URI where the metadata can be found. To find this URI, the tokenURI method in ERC721 and the uri method in ERC1155 are used to track your NFT. You should implement the function in the Contract:",source:"@site/docs/nft-metadata-standard.md",sourceDirName:".",slug:"/nft-metadata-standard",permalink:"/docs/nft-metadata-standard",editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/nft-metadata-standard.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"NFT Metadata Standard",sidebar_position:1},sidebar:"bscSideBar",previous:{title:"Verify Your Contract on BscScan",permalink:"/docs/verify"},next:{title:"Deploy NFT on BSC",permalink:"/docs/ERC721"}},s=[{value:"Attributes",id:"attributes",children:[{value:"Numeric Traits",id:"numeric-traits",children:[],level:3},{value:"Date",id:"date",children:[],level:3}],level:2}],d={toc:s};function m(t){var e=t.components,n=(0,r.Z)(t,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"implementing-token-uri"},"Implementing token URI"),(0,i.kt)("p",null,"To facilitate a marketplace on BSC to pull in off-chain metadata for BEP721 assets, the NFT contract will need to return a URI where the metadata can be found. To find this URI, the tokenURI method in ERC721 and the uri method in ERC1155 are used to track your NFT. You should implement the function in the Contract:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\n/**\n * @dev Returns an URI for a given token ID\n */\nfunction tokenURI(uint256 _tokenId) public view returns (string) {\n  return Strings.strConcat(\n      baseTokenURI(),\n      Strings.uint2str(_tokenId)\n  );\n}\n\n")),(0,i.kt)("p",null,"The tokenURI function in your Contract should return an HTTP or IPFS URL. When queried, this URL should in turn return a JSON blob of data with the metadata for your token."),(0,i.kt)("h1",{id:"metadata-structure"},"Metadata structure"),(0,i.kt)("p",null,"Marketplaces on BSC support metadata that is structured according to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md"},"the official ERC721 metadata standard"),". Additionally, several properties for your items are supported, giving you all the sorting and filtering capabilities on BSC Marketplaces.\nThe below metadata structure, allows the BSC Marketplace to read and display the details about the assets which your NFTs represent."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'\n{\n    "name":"NFT Name",\n    "description":"NFT Description",\n    "image":"https://somedomain.com/pic/xxxx.jpg",\n    "external_url":"https://originalsite.io/2",\n    "attributes":[...]\n}\n\n')),(0,i.kt)("p",null,"Here's how each of these properties work:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"name"),(0,i.kt)("td",{parentName:"tr",align:null},"Name of the item. Max 200 characters.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"description"),(0,i.kt)("td",{parentName:"tr",align:null},"A human-readable description of the item. Markdown is supported. Max 500 characters.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"image"),(0,i.kt)("td",{parentName:"tr",align:null},"This is the URL to the image of the item. It can be just about any type of image. A 350 x 350 image is recommended.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"animation_url"),(0,i.kt)("td",{parentName:"tr",align:null},"This is the URL to a multi-media attachment for the item. The file extensions GLTF, GLB, WEBM, MP4, M4V, OGV, and OGG are supported, along with the audio-only extensions MP3, WAV, and OGA.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"animation_type"),(0,i.kt)("td",{parentName:"tr",align:null},"This is the file format of the multi-media attachment provided from animation_url.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"external_url"),(0,i.kt)("td",{parentName:"tr",align:null},"This is the URL that will appear below the asset's image on the marketplace and will allow users to leave the marketplace and view the item on your site.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"attributes"),(0,i.kt)("td",{parentName:"tr",align:null},"These are the attributes for the item to describe the detail of the NFT. (see array below)")))),(0,i.kt)("h2",{id:"attributes"},"Attributes"),(0,i.kt)("p",null,"To present NFT traits, include the following array in the metadata: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'\n{\n    "attributes":[\n        {\n            "trait_type":"Rarity Class",\n            "value":"Normal"\n        },\n        {\n            "trait_type":"Type",\n            "value":"Male"\n        },\n        {\n            "trait_type":"Face",\n            "value":"Mole"\n        },\n        {\n            "trait_type":"Beard",\n            "value":"Chinstrap"\n        },\n        {\n            "display_type":"boost_number",\n            "trait_type":"Power",\n            "value":"Power"\n        },\n        {\n            "display_type":"boost_percentage",\n            "trait_type":"Health Increase",\n            "value":"20"\n        },\n        {\n            "display_type":"number",\n            "trait_type":"Generation",\n            "value":"3"\n        }\n    ]\n}\n\n')),(0,i.kt)("p",null,"Here ",(0,i.kt)("inlineCode",{parentName:"p"},"trait_type")," is the name of the trait, ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," is the value of the trait, and ",(0,i.kt)("inlineCode",{parentName:"p"},"display_type")," is a field indicating how you would like a numeric value should be displayed. For string traits, you don't have to worry about ",(0,i.kt)("inlineCode",{parentName:"p"},"display_type"),".\nAll traits included in the attributes will be displayed in ",(0,i.kt)("inlineCode",{parentName:"p"},"Attribute"),".\nIf you don't want to have a ",(0,i.kt)("inlineCode",{parentName:"p"},"trait_type")," for a particular trait, you can include just a value in the trait and it will be set as a generic attribute."),(0,i.kt)("h3",{id:"numeric-traits"},"Numeric Traits"),(0,i.kt)("p",null,"There are 3 supported options for ",(0,i.kt)("inlineCode",{parentName:"p"},"display_type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," will show the value in pure number, ",(0,i.kt)("inlineCode",{parentName:"p"},"boost_number")," allows you to show the number with Plus or Minus symbol, and ",(0,i.kt)("inlineCode",{parentName:"p"},"boost_percentage")," is similar to boost_number but will show a percent sign behind the number."),(0,i.kt)("h3",{id:"date"},"Date"),(0,i.kt)("p",null,"Marketplace also supports date traits in ",(0,i.kt)("inlineCode",{parentName:"p"},"date")," ",(0,i.kt)("inlineCode",{parentName:"p"},"display_type"),". Pass in a unix timestamp as the value."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'\n   {\n      "display_type": "date", \n      "trait_type": "birthday", \n      "value": 1608490000\n    }\n    \n')))}m.isMDXComponent=!0}}]);