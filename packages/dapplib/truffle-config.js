require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog office skull dance birth soccer minor idea clock obscure tag'; 
let testAccounts = [
"0x681393a9fbac3237de10ffab2b12664fcf66f19aed04255d812a8db70c2a8c48",
"0xb2e8a2e5e7976d3aed676134feb5adfb50c6b241ac65176e97d3936a614a5d2f",
"0xc928737fd5d60e0479f8cc32b3d39bd1740bb2e7cd3f05aef70f3fcbe93c1c0d",
"0x81f50c27c959d5e365771641e20951a2c53a017cfb1e4feb4d396bbe15fd42af",
"0xf6c259216527b0608af9b6b17a5ce9098d2b9d954ec8d12195b7baaec6ba6d11",
"0x1672c090e6e3c6051ccfc0b2583f9ced86e1dac1419ebeb9802b0bbcc1872f0a",
"0xdba3f87ac041e0f3d988ae0069b31288585996cf6d71142456726f20c2b82639",
"0x9afe80f0fb254e06366e8e39369cd38dab7f2a91128f6405de31154f63c7047d",
"0xa55ab4f36a2009ce9ef6795943fd1732d9a593a0af90239bbc971185bd392f2f",
"0xaddb8247c3cb6c9f78557feef128f3885a061d5ee799a656c20ca2f44376c87e"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

