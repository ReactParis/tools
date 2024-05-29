import { styled } from "../../styled-system/jsx";

const CarouselCanvas = styled("div", {
  base: {
    width: "[540px]",
    height: "[540px]",
    bgGradient: "to-b",
    gradientFrom: "{colors.bg}",
    gradientTo: "{colors.bg2}",
    color: "{colors.text}",
    display: "flex",
    flexFlow: "column nowrap",
  },
});

export default CarouselCanvas;
