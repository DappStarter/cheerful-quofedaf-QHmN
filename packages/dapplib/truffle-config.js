require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drip flock tooth guard render remind concert hunt creek flip sell'; 
let testAccounts = [
"0x5e815e862a2a8f638d90a9977fd1c3644974108df7a57b5b8f4d7686d45af9f0",
"0x942ac1f82253642873a14482dd984e7f73157463ca8b9847838d9cf55c0a3f23",
"0x940633687aa1f9f68299ab15eb9cde9c3d8218ee57cf8d25f183fc9cf1d97596",
"0xcdefc44ea23174e9b8ef3d0afd5aac26a2002c70b9741e8993876b27cd9d37ce",
"0x5e5dbf42549589bb2910ac47994c2758b0e38bae737c9f24a5dc61e8c665a01f",
"0xeff19fca942ab0dbab13fea45fbaf3bee8465cd15145ea3817f07767ffbe3f23",
"0xe86d71e1fcad4620c239b23584065f748e96713a2e0a41d42aac3cdc41dc103b",
"0xcc74654528dc66a08580581c8fc81690a2876f0fbb034249eed53ee6101c41a1",
"0x8b19a3d8d6b6aa5d9b275db6da1a2dcef04a774b5a2569eddcafb475f3b3b653",
"0x14c9619708c8d828ba70102e113cc3f6f60c43add25ffa5ae8df25f815e1d328"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

