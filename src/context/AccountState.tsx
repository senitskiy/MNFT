import { createContext, ReactChildren, ReactNode, useContext, useEffect, useState } from "react";
import Web3 from 'web3';
import Web3Modal from "web3modal";

interface Account {
    address: string | null
}

interface AccountContext {
    account: Account,
    setAccount: (account: Account) => void,
    connect: () => void
}

export const AccountContext = createContext<AccountContext>({
    account: {
        address: ""
    },
    setAccount: () => {},
    connect: () => {}
});

const AccountState = ({ children }: { children: any }) => {
    const [account, setAccount] = useState<Account>({ address: null });

    async function connect() {
        const web3Modal = new Web3Modal({
            network: "rinkeby",
            cacheProvider: false
          });
          
        const provider = await web3Modal.connect();
        const web3 = new Web3(provider);
        
        const accounts = await web3.eth.getAccounts();
        setAccount((prev) => ({
            ...prev,
            address: accounts[0]
        }))
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