import { Button, FilledInput, Grid, Paper, Stack, TextareaAutosize, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Icon48PictureOutline } from "@vkontakte/icons";
import { useContext, useEffect, useState } from "react";
import { Header } from "../../Components/header/Header";
import { Input } from "../../Components/input/Input"
import { Textarea } from "../../Components/input/Textarea"
import { AccountContext } from "../../context/AccountState"
import abi from "./contract.json"
import bs from "./contract_bs.json"

interface MNFTForm {
    image?: string,
    name?: string,
    description?: string,
    cost?: number,
    costAd?: number
}


const MintMNFT = () => {
    const { account, connect } = useContext(AccountContext)
    const [form, setForm] = useState<MNFTForm>({
        image: "https://previews.123rf.com/images/rglinsky/rglinsky1201/rglinsky120100188/12336990-%E5%9E%82%E7%9B%B4%E6%8C%87%E5%90%91%E3%81%AE%E3%83%91%E3%83%AA%E3%80%81%E3%83%95%E3%83%A9%E3%83%B3%E3%82%B9%E3%81%A7%E6%9C%89%E5%90%8D%E3%81%AA%E3%82%A8%E3%83%83%E3%83%95%E3%82%A7%E3%83%AB%E5%A1%94%E3%81%AE%E3%82%A4%E3%83%A1%E3%83%BC%E3%82%B8%E3%81%A7%E3%81%99%E3%80%82.jpg"
    });

    if (!account.web3) {
        return <button onClick={connect}>connect Metamask</button>
    }

    function onChange(e: any) {
        const { name, value } = e.target;
        setForm((prev: MNFTForm) => ({
            ...prev,
            [name]: value
        }));
    }

    async function mintNFT() {
        if(!account) return; 
        if(!account.web3) return;

        console.log(account)
        //@ts-ignore
        const Contract = new account.web3.eth.Contract(abi, account.address, {
            from: account.address,
            gasPrice: '300000'
        });

        const contract = await Contract.deploy({
            data: bs.object
        }).send({
            from: account!.address!
        }, (err: any, trc: any) => {
            console.log(trc, err);
        });
    }

    return (
        <Box>
            <Header />
            <Stack spacing={2} sx={{ height: "100vh" }} direction="row" justifyContent="center" alignItems="center">

                <Paper>
                    {/* <Box  
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    color: "#636366"
                                }}
                                width={400} 
                                height={400} 
                            >
                                <Icon48PictureOutline fill="#636366" width={100} height={100} />
                                <Typography>Drag/drope File here</Typography>
                            </Box> */}
                    <Box
                        width={400}
                        height={400}
                        sx={{
                            backgroundImage: `url(${form.image})`,
                            backgroundColor: "background.paper",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            backgroundSize: "contain",
                            borderRadius: 8
                        }}
                    >
                    </Box>
                </Paper>

                <Box width="30%">
                    <Grid container spacing={2} component="form">
                        <Grid item xs={12}>
                            <Input
                                label="Name"
                                name="name"
                                onChange={onChange}
                                value={form.name}
                                placeholder="Name of composition"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Textarea
                                label="Description"
                                name="description"
                                onChange={onChange}
                                value={form.description}
                                placeholder="Description"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Input
                                label="Price of NFT"
                                name="cost"
                                type="number"
                                onChange={onChange}
                                value={form.cost}
                                placeholder="1.1 ETH"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Input
                                label="Price of one week ad"
                                type="number"
                                name="costAd"
                                onChange={onChange}
                                value={form.costAd}
                                placeholder="0.11 ETH"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Stack justifyContent="space-between" direction="row">
                                <Button variant="contained" onClick={() => mintNFT()}>Publish</Button>
                                <Button>Save draft</Button>
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
            </Stack>
        </Box>
    );
}

export default MintMNFT;