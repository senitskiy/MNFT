import { Button, FilledInput, Grid, Paper, Stack, TextareaAutosize, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Icon48PictureOutline } from "@vkontakte/icons";
import { useCallback, useContext, useEffect, useState } from "react";
import { Header } from "../../Components/header/Header";
import { Input } from "../../Components/input/Input"
import { Textarea } from "../../Components/input/Textarea"
import { AccountContext } from "../../context/AccountState";
import { useDropzone } from 'react-dropzone'
//@ts-ignore
import { Web3Storage } from 'web3.storage/dist/bundle.esm.min.js'

interface MNFTForm {
    image?: string,
    name?: string,
    description?: string,
    cost?: number,
    costAd?: number
}


const MintMNFT = () => {
    const { account, connect } = useContext(AccountContext);
    const [loadingImage, setLoadingImage] = useState(false);
    const [form, setForm] = useState<MNFTForm>({
        image: "https://previews.123rf.com/images/rglinsky/rglinsky1201/rglinsky120100188/12336990-%E5%9E%82%E7%9B%B4%E6%8C%87%E5%90%91%E3%81%AE%E3%83%91%E3%83%AA%E3%80%81%E3%83%95%E3%83%A9%E3%83%B3%E3%82%B9%E3%81%A7%E6%9C%89%E5%90%8D%E3%81%AA%E3%82%A8%E3%83%83%E3%83%95%E3%82%A7%E3%83%AB%E5%A1%94%E3%81%AE%E3%82%A4%E3%83%A1%E3%83%BC%E3%82%B8%E3%81%A7%E3%81%99%E3%80%82.jpg"
    });

    function onChange(e: any) {
        const { name, value } = e.target;
        setForm((prev: MNFTForm) => ({
            ...prev,
            [name]: value
        }));
    }

    const onDrop = async (acceptedFiles: any) => {
        setLoadingImage(true);
        const client = new Web3Storage({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDM4OTdjNzAxNzkzNzY5NjMzZmI2NkVDQjE4NkE2OTczMjk4RDFjMzYiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2MzIzOTk1MzY0ODUsIm5hbWUiOiJ0ZXN0In0.3vRkc5ObyMCWz_aJ5L8IHnm7imjCbYu8InziDoKZquM" })
        const cid = await client.put(acceptedFiles)
        setLoadingImage(false);
        console.log('stored files with cid:', cid);
    }

    function mintNFT() {

    }

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    if (!account.web3) {
        return <button onClick={connect}>connect Metamask</button>
    }

    return (
        <Box>
            <Header />
            <Stack spacing={2} sx={{ height: "100vh" }} direction="row" justifyContent="center" alignItems="center">

                <Paper>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            color: "#636366"
                        }}
                        width={400}
                        height={400}
                        {...getRootProps()}
                    >
                        <input {...getInputProps()} />
                        <Icon48PictureOutline fill="#636366" width={100} height={100} />
                        {isDragActive ?
                            <Typography>Drag/drope File here</Typography> :
                            <Typography>Drag 'n' drop some files here, or click to select files</Typography>
                        }
                    </Box>
                    {/* <Box
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
                    </Box> */}
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
                                <Button variant="contained">Publish</Button>
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