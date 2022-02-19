import React, { useState, useEffect, useRef } from "react";
import { Image, Transformer } from "react-konva";

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

export const ADVImage = (props: ImageProps) => {
  interface coordinateProps {
    x: number;
    y: number;
  }
  const imageRef = useRef<any>(null);
  const trRef = useRef<any>(null);
  const [image, setImage] = useState<CanvasImageSource>();
  const [coordinate, setCoordinate] = useState<coordinateProps>({ x: 0, y: 0 });
  useEffect(() => {
    loadImage();
  }, [props.src]);

  function handleLoad() {
    const img = imageRef.current;

    if (img.naturalHeight > img.naturalWidth) {
      img.height = props.size * 0.2;
      img.width = img.naturalWidth * (props.size / img.naturalHeight) * 0.2;
      setCoordinate({
        x: (props.size - img.width) / 2,
        y: (props.size - img.height) / 2,
      });
    } else {
      img.height = img.naturalHeight * (props.size / img.naturalWidth) * 0.2;
      img.width = props.size * 0.2;
      setCoordinate({
        x: (props.size - img.width) / 2,
        y: (props.size - img.height) / 2,
      });
    }
    setImage(imageRef.current);
  }

  function loadImage() {
    const img = new window.Image();
    img.src = props.src;
    img.crossOrigin = "Anonymous";
    img.width = props.size;
    img.height = props.size;
    imageRef.current = img;
    imageRef.current.addEventListener("load", handleLoad);
  }

  function handleClick(event: any) {
    props.setSelectADV(true);
    trRef.current.attachTo(event.target);
    trRef.current.getLayer().batchDraw();
  }

  return (
    <React.Fragment>
      <Image
        onClick={(event: any) => {
          handleClick(event);
        }}
        onTap={(event: any) => {
          handleClick(event);
        }}
        onDragEnd={(e) => {
          setCoordinate({ x: e.target.x(), y: e.target.y() });
        }}
        onFocusOut={(e: any) => {
          console.log(e);
        }}
        onTransformEnd={(e) => {
          const node = imageRef.current;
          setCoordinate({ x: e.target.x(), y: e.target.y() });
          node.width = Math.max(5, node.width);
          node.height = Math.max(node.height);
        }}
        x={coordinate.x}
        y={coordinate.y}
        image={image}
        ref={imageRef}
        draggable
      />
      {props.selectADV && (
        <Transformer
          ref={trRef}
          boundBoxFunc={(oldBox, newBox) => {
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </React.Fragment>
  );
};
