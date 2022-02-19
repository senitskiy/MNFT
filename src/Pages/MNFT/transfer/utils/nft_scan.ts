import axios from 'axios';

export function getUsersNfts(address) {
    var urls = []
    axios.get('http://api-staging.rarible.org/v0.1/items/byOwner?owner=ETHEREUM:' + address)
    .then(res => {
      for(var i = 0; i < res['items'].length; i++) {
        var newUrl = res['items'][i]['meta']
        urls.push(newUrl)
      }

      return urls
    });
}