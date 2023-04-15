// Link get address: https://docs-v2.opengsn.org/networks/addresses.html
const getPayMaster = (networkId) => {
  return {
    97: '0x01a5a06C5Ba6E5f8FC9CB060492fae1b3d03c69d'
  }[networkId];
};

const getRelayHub = (networkId) => {
  return {
    97: '0xAa3E82b4c4093b4bA13Cb5714382C99ADBf750cA'
  }[networkId];
};

const getForwarder = (networkId) => {
  return {
    97: '0xeB230bF62267E94e657b5cbE74bdcea78EB3a5AB'
  }[networkId];
};

module.exports = {
  getCounter,
  getPayMaster,
  getRelayHub,
  getForwarder
}