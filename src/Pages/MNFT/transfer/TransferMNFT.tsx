import { useContext, useEffect } from "react";
import { AccountContext } from "../../../context/AccountState";
import { getUsersNfts } from "./utils/nft_scan";

const TransferMNFT = () => {
    const { account } = useContext(AccountContext)
    useEffect(() => {
        getUsersNfts(account.address)
    }, [])

    return(
        <div>
        </div>
    )
}

export default TransferMNFT;