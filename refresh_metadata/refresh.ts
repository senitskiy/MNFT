import axios from 'axios';

export function refreshMetadata(tokenId) {
    axios.delete('https://api-staging.rarible.org/v0.1/items/' + tokenId + '/resetMeta')
}