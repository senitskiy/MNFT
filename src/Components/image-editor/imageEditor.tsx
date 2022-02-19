import React, { useState, useEffect, useRef } from "react";
import { Layer, Stage } from "react-konva";
import { NFTImage } from "./NFTImage"
import { ADVImage } from "./ADVImage"

interface StyleSheet {
  [key: string]: React.CSSProperties;
}

interface ImageEditorProps {
  size: number;
  image: CanvasImageSource | any;
}

interface stageSizeProps {
  height: number;
  width: number;
}

interface ImageEditorProps {
  size: number;
  image: CanvasImageSource | any;
  ADVImageUrl: any;
}

export const ImageEditor = (props: ImageEditorProps) => {
    
  const NFTImageRef = useRef<any>();
  const ADVImageRef = useRef<any>();
  const stageRef = useRef<any>();
  const [selectADV, setSelectADV] = useState<boolean>(false);
  const [NFTImageUrl, setNFTImageUrl] = useState<string>(props.image);
  const [ADVImageUrl, setADVImageUrl] = useState<string>(props.ADVImageUrl);
  const [stageSize, setStageSize] = useState<stageSizeProps>({
    width: 0,
    height: 0,
  });

  const styles: StyleSheet = {
    imageEditorField: {
      minWidth: stageSize.width,
      minHeight: stageSize.height,
      width: stageSize.width,
      height: stageSize.height,
      borderColor: "black",
      borderStyle: "solid",
      marginTop: "24px",
      objectFit: "fill",
    },
    navbar: {
      backgroundColor: "#333",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
  };

  const AddNFTFromFile = () => {
    if (NFTImageRef.current) {
      NFTImageRef.current.click();
    }
  };

  const AddADVFromFile = () => {
    if (ADVImageRef.current) {
      ADVImageRef.current.click();
    }
  };

  const MakeNFT = () => {
    if (stageRef.current) {
      const dataURL = stageRef.current.toDataURL({ pixelRatio: 2 });
      let link = document.createElement("a");
      link.download = "MNFT.png";
      link.href = dataURL;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  useEffect(() => {
    setADVImageUrl(ADVImageUrl)
  }, [ADVImageUrl])

  return (
    <div>
      <div style={styles.navbar}>
        <div>
          <input
            type="file"
            id="ADV"
            ref={ADVImageRef}
            style={{ display: "none" }}
            onChange={(event: any) => {
              let reader = new FileReader();
              reader.onload = (e: any) => {
                setADVImageUrl(e.target.result);
              };
              reader.readAsDataURL(event.target.files[0]);
            }}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={styles.imageEditorField}>
          <Stage
            width={stageSize.width}
            height={stageSize.height}
            ref={stageRef}
          >
            <Layer>
              <NFTImage
                src={NFTImageUrl}
                size={props.size}
                selectADV={selectADV}
                setSelectADV={setSelectADV}
                stageSize={stageSize}
                setStageSize={setStageSize}
              />
              <ADVImage
                src={ADVImageUrl}
                size={props.size}
                selectADV={selectADV}
                setSelectADV={setSelectADV}
              />
            </Layer>
          </Stage>
        </div>
      </div>
    </div>
  );
};
