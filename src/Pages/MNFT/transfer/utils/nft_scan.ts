import axios from "axios";

function get_users_nfts(address) {
    axios.get('pi.rarible.org/v0.1/items/byOwner?owner=' + address)
  .then(res => {
    console.log(res.data);
  });
}