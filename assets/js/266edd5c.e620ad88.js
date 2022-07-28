"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[8603],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),h=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=h(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=h(n),p=i,m=u["".concat(s,".").concat(p)]||u[p]||d[p]||o;return n?a.createElement(m,r(r({ref:t},c),{},{components:n})):a.createElement(m,r({ref:t},c))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var h=2;h<o;h++)r[h]=n[h];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6439:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return h},toc:function(){return c},default:function(){return u}});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),r=["components"],l={sidebar_label:"BNB Smart Chain Archive Node",hide_table_of_contents:!1,sidebar_position:2},s="How to Run An Archivenode on BNB Smart Chain",h={unversionedId:"archivenode",id:"archivenode",isDocsHomePage:!1,title:"How to Run An Archivenode on BNB Smart Chain",description:"What is archive node?",source:"@site/docs/archivenode.md",sourceDirName:".",slug:"/archivenode",permalink:"/docs/archivenode",editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/archivenode.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"BNB Smart Chain Archive Node",hide_table_of_contents:!1,sidebar_position:2},sidebar:"bscSideBar",previous:{title:"Upgrading Geth",permalink:"/docs/validator/upgrade-fullnode"},next:{title:"Using ChainIDE",permalink:"/docs/chainide"}},c=[{value:"What is archive node?",id:"what-is-archive-node",children:[],level:2},{value:"Why is an archive node important?",id:"why-is-an-archive-node-important",children:[],level:2},{value:"Suggested Requirements",id:"suggested-requirements",children:[],level:2},{value:"How to run an archive node for BSC mainnet?",id:"how-to-run-an-archive-node-for-bsc-mainnet",children:[{value:"1. Run with a Geth client",id:"1-run-with-a-geth-client",children:[{value:"1.1 Run one segment archive node with a snapshot",id:"11-run-one-segment-archive-node-with-a-snapshot",children:[],level:4},{value:"1.2 Build one full archive node with segmented archive nodes",id:"12-build-one-full-archive-node-with-segmented-archive-nodes",children:[],level:4}],level:3},{value:"2. Run with an Erigon client",id:"2-run-with-an-erigon-client",children:[],level:3}],level:2},{value:"Comparison between Geth and Erigon",id:"comparison-between-geth-and-erigon",children:[],level:2}],d={toc:c};function u(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-run-an-archivenode-on-bnb-smart-chain"},"How to Run An Archivenode on BNB Smart Chain"),(0,o.kt)("h2",{id:"what-is-archive-node"},"What is archive node?"),(0,o.kt)("p",null,'Simply speaking, an archive node is a full node running with one more special option "--gcmode archive". It stores all the historical data of the block chain since the genesis block. Different with a typical full node just holding all the state change data for some latest blocks, an archive node always stores them for each block.'),(0,o.kt)("h2",{id:"why-is-an-archive-node-important"},"Why is an archive node important?"),(0,o.kt)("p",null,"Developers are limited to querying the limited recent blocks to check the balance of an address and the state of a smart contract with a full node. It is hard to get all what they want as the block chain is moving forward at the same time, while they can query any block at a specific point in time with an archive node.\nArchive nodes are used by various applications on the block chain for challenging use cases, including but not limited to the followings:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Automatic trading system needs historical data to optimize trading model"),(0,o.kt)("li",{parentName:"ul"},"Verification modules need state data to verify transactions in time"),(0,o.kt)("li",{parentName:"ul"},"Analytical tools need full historical data to do data analysis"),(0,o.kt)("li",{parentName:"ul"},"Exchange in some wallets depends on archive node for fast and efficient transfers")),(0,o.kt)("h2",{id:"suggested-requirements"},"Suggested Requirements"),(0,o.kt)("p",null,"Running an archive node will take a high cost as it includes all the block and state change data. First of all it needs the disk with sufficient capacity; besides this, the cpu and disk performance should be good enough to catch up with the latest block height."),(0,o.kt)("h2",{id:"how-to-run-an-archive-node-for-bsc-mainnet"},"How to run an archive node for BSC mainnet?"),(0,o.kt)("h3",{id:"1-run-with-a-geth-client"},"1. Run with a Geth client"),(0,o.kt)("h4",{id:"11-run-one-segment-archive-node-with-a-snapshot"},"1.1 Run one segment archive node with a snapshot"),(0,o.kt)("p",null,"A segment archive node is a node which has all the data from one starting block height to one ending block height, such as ","[19000000, latest]",". To create such one archive node,  you need a snapshot with starting block number,  less than 19000000.\nYou can get one snapshot from Binance website, where holds all recent snapshots:\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.bnbchain.org/docs/validator/snapshot"},"BNB Chain Chaindata Snapshot"),"\nand ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/binance-chain/bsc-snapshots"},"BNB Chain Snapshot Repo"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Command to run:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./geth --config local_config_dir/config.toml --datadir local_data_dir --pprof.addr 0.0.0.0 --rpc.allow-unprotected-txs --rpccorsdomain * --light.serve 50 --cache 5000 --metrics --snapshot=true --rangelimit --gcmode archive --txlookuplimit 0 --syncmode full --pprof\n")),(0,o.kt)("h4",{id:"12-build-one-full-archive-node-with-segmented-archive-nodes"},"1.2 Build one full archive node with segmented archive nodes"),(0,o.kt)("p",null,"Instead of putting all archive data on a single Geth instance, it is suggested to create multiple segment instances, each of them only serving part of the chain. To get better performance, it is suggested that each segment's size is better to control under 4TB. There will be about 35TB data in all(up to June, 2022). For all BSC snapshots you can refer to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/allada/bsc-archive-snapshot"},"Free public Binance Smart Chain Archive Snapshot"),". The owner has put all BSC archive snapshots on S3. As described this path is public but is configured as requester-pays. This means you'll need an AWS account in order to download them. After having all the segments, you need one proxy to dispatch the requests to the right segment. And thanks the owner, one proxy was also implemented. Please follow the owner's guide to build."),(0,o.kt)("h3",{id:"2-run-with-an-erigon-client"},"2. Run with an Erigon client"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/ledgerwatch/erigon"},"Erigon")," has supported BSC mainnet. You can also refer to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/allada/bsc-archive-snapshot"},"Free public Binance Smart Chain Archive Snapshot"),' for the guide to run a BSC archive node with an Erigon client. The owner has switched to using an Erigon client for a BSC archive node recently. You can dowload the archive snapshot which is a tarball from aws s3. The s3 path is "s3://public-blockchain-snapshots/bsc/erigon-latest.tar.zstd". This path is public, but is configured as requester-pays. Also this means you\'ll need an AWS account in order to download it.'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Command to download to local dir:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'aws s3 cp --request-payer=requester  "s3://public-blockchain-snapshots/bsc/erigon-latest.tar.zstd"   local_data_dir\n\ntar --use-compress-program=unzstd -xvf erigon-latest.tar.zstd\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Command to run:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./erigon --chain=bsc --datadir  local_data_dir\n")),(0,o.kt)("p",null,"The known Issue with an Erigon client is that it does not really keep up with the latest blocks as mentioned in the Github. If you want to keep up with the latest blocks it is suggested to run a BSC archive node with high performance disk such as NVME, or run a BSC full node with a Geth client at the same time which  means you need one proxy that will ask Erigon if it has the block height and if not forward it to the Geth client."),(0,o.kt)("h2",{id:"comparison-between-geth-and-erigon"},"Comparison between Geth and Erigon"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Data size")),(0,o.kt)("p",{parentName:"li"},"Up to now(June, 2022), the whole data size is about 35TB with Geth client while it is about 6TB with Erigon client, much smaller.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Maturity")),(0,o.kt)("p",{parentName:"li"},"Erigon is new and not yet battle tested while Geth has been running a long  time, more stable. Archive nodes with Geth client can support all RPC APIs while some of them are not supported well by Erigon client such as eth_getProof.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Complexity")),(0,o.kt)("p",{parentName:"li"},"It is easier to run one BSC archive node with an Erigon client than that with a Geth client. And it is nearly the same complexity if you want to keep up the latest blocks with a Erigon archive node & a Geth full node at the same time."))),(0,o.kt)("p",null,"All in all, people can choose one of the methods above to run a BSC archive node based on their own requirements."))}u.isMDXComponent=!0}}]);