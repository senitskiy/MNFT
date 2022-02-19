import React, { useState, useEffect, useRef } from "react";
import { Image } from "react-konva";

interface stageSizeProps {
  height: number;
  width: number;
}

interface ImageProps {
  src: CanvasImageSource | any;
  size: number;
  selectADV: boolean;
  setSelectADV: (selectADV: boolean) => void;
  stageSize?: stageSizeProps;
  setStageSize?: any;
}

export const NFTImage = (props: ImageProps) => {
  const imageRef = useRef<any>(null);
  const [image, setImage] = useState<CanvasImageSource>();
  const checkDeselect = (e: any) => {
    props.setSelectADV(false);
  };
  useEffect(() => {
    loadImage();
  }, [props.src]);

  function handleLoad() {
    const img = imageRef.current;
    if (img.naturalHeight > img.naturalWidth) {
      img.height = props.size;
      img.width = img.naturalWidth * (props.size / img.naturalHeight);
    } else {
      img.height = img.naturalHeight * (props.size / img.naturalWidth);
      img.width = props.size;
    }
    setImage(imageRef.current);
    props.setStageSize({ width: img.width, height: img.height });
  }

  function loadImage() {
    const img = new window.Image();
    img.src = props.src;
    img.crossOrigin = "Anonymous";
    imageRef.current = img;
    imageRef.current.addEventListener("load", handleLoad);
  }

  return (
    <Image
      x={0}
      y={0}
      image={image}
      style={{ objectFit: "fill" }}
      ref={imageRef}
      onMouseDown={checkDeselect}
      onTouchStart={checkDeselect}
    />
  );
};
