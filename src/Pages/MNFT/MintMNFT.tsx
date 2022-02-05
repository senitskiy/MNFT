import { Button, FilledInput, Grid, Paper, Stack, TextareaAutosize, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Icon48PictureOutline } from "@vkontakte/icons";
import { useContext, useEffect, useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { Input } from "../../Components/input/Input"
import { Textarea } from "../../Components/input/Textarea"
import { AccountContext } from "../../context/AccountState";

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
        image: "https://artinvestment.ru/content/download/news_2021/20210824_Visa_CryptoPunk.jpg"
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

    function mintNFT() {

    }

    return (
        <Grid p={2} spacing={3} sx={{ height: "100vh" }} container justifyContent="center" alignItems="center">
            <Grid item>
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
                        component="img" 
                        sx={{ borderRadius: 8 }} 
                        width={400} 
                        height={400} 
                        src={form.image}
                    />
                </Paper>
            </Grid>
            <Grid item xs={3}>
                <Grid container spacing={2} component="form">
                    <Grid item xs={10}>
                        <Input label="Name" name="name" onChange={onChange} value={form.name} placeholder="Name of composition" />
                    </Grid>
                    <Grid item xs={10}>
                        <Textarea label="Description" name="description" onChange={onChange} value={form.description} placeholder="Description" />
                    </Grid>
                    <Grid item xs={10}>
                        <Input label="Price of NFT" name="cost" type="number" onChange={onChange} value={form.cost} placeholder="1.1 ETH" />
                    </Grid>
                    <Grid item xs={10}>
                        <Input label="Price of one week ad" type="number" name="costAd" onChange={onChange} value={form.costAd} placeholder="0.11 ETH" />
                    </Grid>
                    <Grid item xs={10}>
                        <Stack justifyContent="space-between" direction="row">
                            <Button variant="contained">Publish</Button>
                            <Button>Save draft</Button>
                        </Stack>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default MintMNFT;