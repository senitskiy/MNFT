import { Button, CircularProgress, FilledInput, Grid, Paper, Stack, TextareaAutosize, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Icon48PictureOutline } from "@vkontakte/icons";
import { useContext, useState } from "react";
import { Login } from "../../../Components/login/Login";
import { Input } from "../../../Components/input/Input"
import { AccountContext } from "../../../context/AccountState"
import { useDropzone } from 'react-dropzone'
import { ProcessedCreateNft } from './../../../Modals/ProcessedCreateNft';
import { Image } from "../../../Components/image/Image";

export interface MNFTForm {
    image_preview?: string | ArrayBuffer,
    image?: File,
    name?: string,
    description?: string,
    cost?: number,
    costAd?: number
}


const CreateMNFT = () => {
    const { account, connect } = useContext(AccountContext);
    const [processedCreateMnft, setProcessedCreateMnft] = useState(false);
    const [form, setForm] = useState<MNFTForm>({});

    function onChange(e: any) {
        const { name, value } = e.target;
        setForm((prev: MNFTForm) => ({
            ...prev,
            [name]: value
        }));
    }

    const onDrop = async (acceptedFiles: any) => {
        var reader = new FileReader();
        reader.readAsDataURL(acceptedFiles[0]);
        reader.onload = function () {
            setForm(prev => ({
                ...prev,
                image_preview: reader.result,
                image: acceptedFiles[0]
            }))
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }

    // async function CreateMNft() {
    //     // @ts-ignore
    //     const { receiptMint, MNFT } = mintResult
    //     // MNFT.methods.create_M_NFT()

    //     await account.web3!.eth.sendTransaction({
    //         to: receiptMint.contractAddress,
    //         from: account.address,
    //         data: MNFT.methods.create_M_NFT(
    //             tokenId,
    //             "ipfs://" + cid + "/0",
    //             form.image,
    //             1644115473
    //         ).encodeABI(),
    //         gas: 3000000,
    //     })
    // }

    // async function Mint() {
    //     //@ts-ignore
    //     const { receiptMint, MNFT } = mintResult
    //     const res = await account.web3!.eth.sendTransaction({
    //         to: receiptMint.contractAddress,
    //         from: account.address!,
    //         data: MNFT.methods.mint().encodeABI(),
    //         gas: 3000000,
    //     })
    //     // @ts-ignore
    //     setTokenId(res.logs[0]);
    //     console.log("res", res);
    // }

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    if (!account) {
        return <Login />
    }

    return (
        <Box>
            <Stack spacing={2} sx={{ height: "calc(100vh - 64px)" }} direction="row" justifyContent="center" alignItems="center">
                <Paper sx={{ borderRadius: 12 }}>
                    {!form.image ? <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            color: "#636366"
                        }}
                        width={400}
                        height={400}
                        p={1}
                        {...getRootProps()}
                    >
                        <>
                            <input name="images" {...getInputProps()} />
                            {/*<input name="images-1" />*/}
                            <Icon48PictureOutline fill="#636366" width={100} height={100} />
                            {isDragActive ?
                                <Typography p={1}>Drag/drope File here</Typography> :
                                <Typography p={1} align="center">Drag 'n' drop some files here, or click to select files</Typography>
                            }
                        </>
                    </Box> :
                        <Image 
                            src={form.image_preview as string}
                            width={400}
                            height={400}
                        />
                    }
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
                            <Input
                                label="Description"
                                name="description"
                                onChange={onChange}
                                value={form.description}
                                placeholder="Description"
                                multiline
                                maxRows={4}
                                minRows={4}
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
                            <Stack spacing={2} direction="row">
                                <Button variant="contained" onClick={() => setProcessedCreateMnft(true)}>Publish</Button>
                                {/* <Button variant="contained" onClick={mintNFT}>Publish original</Button> */}
                                <Button>Save draft</Button>
                                {/* <Button onClick={Mint}>Mint</Button>
                                <Button onClick={CreateMNft}>create M-Nft</Button> */}
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
            </Stack>

            <ProcessedCreateNft form={form} open={processedCreateMnft} onClose={() => setProcessedCreateMnft(false)} />
        </Box>
    );
}

export default CreateMNFT;