import { createContext, ReactChildren, ReactNode, useContext, useEffect, useState } from "react";
import Web3 from 'web3';
import Web3Modal from "web3modal";


interface Account {
    web3: Web3 | null
    address: string | null,
    nfts: Nft[] | null
}

interface Nft {
    address: string,
    costWeek: number
}

interface AccountContext {
    account: Account | null | undefined,
    setAccount: (account: Account) => void,
    connect: () => void
}

export const AccountContext = createContext<AccountContext>({
    account: null,
    setAccount: () => { },
    connect: () => { }
});

const AccountState = ({ children }: { children: any }) => {
    const [web3, setWeb3] = useState<Web3>();
    const [account, setAccount] = useState<Account | null>(null);

    async function connect() {

        try {
            const web3Modal = new Web3Modal({
                network: "rinkeby",
                cacheProvider: false
            });
    
            const provider = await web3Modal.connect();
            const web3 = new Web3(provider);

            const accounts = await web3.eth.getAccounts();
            setAccount((prev) => ({
                ...prev,
                web3,
                address: accounts[0]
            }))
        } catch (e) { }
    }

    return (
        <AccountContext.Provider value={{
            account,
            setAccount,
            connect
        }}>
            {children}
        </AccountContext.Provider>
    );
};

export default AccountState;