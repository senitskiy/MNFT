import axios from 'axios';

function get_users_nfts(address) {
    var urls = []
    axios.get('http://api-staging.rarible.org/v0.1/items/byOwner?owner=ETHEREUM:' + address)
    .then(res => {
      for(var i = 0; i < res['items'].length; i++) {
        var new_url = res['items'][i]['meta']
        urls.push(new_url)
      }

      return urls
    });
}