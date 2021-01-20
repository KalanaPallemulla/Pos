import { Grid } from "@material-ui/core";
import React from "react";
import ImageGallery from "react-image-gallery";

export default function ImageSlider() {
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];
  return (
    <div>
      <Grid>
        {" "}
        <ImageGallery
          items={images}
          showPlayButton="false"
          showThumbnails="false"
          showNav="false"
          disableThumbnailScroll="false"
          slideOnThumbnailOver="false"
          lazyLoad="false"
        />
      </Grid>
    </div>
  );
}
