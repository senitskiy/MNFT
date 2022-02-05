import { useContext, useEffect } from "react";
import { AccountContext } from "../context/AccountState";

const MintMNFT = () => {
    const { account, connect } = useContext(AccountContext)

    if(!account.address) {
        return <button onClick={connect}>connect Metamask</button>
    }

    return (
        <main>
            <h1>Mint M-NFT</h1>
        </main>
    );
}

export default MintMNFT;