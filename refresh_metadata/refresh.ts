import axios from 'axios';

export function refreshMetadata(token, tokenId) {
    axios.delete('https://api-staging.rarible.org/v0.1/items/ETHEREUM:' + token + ':' + tokenId + '/resetMeta')
}