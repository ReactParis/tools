interface CarouselCanvasProps {
  children?: React.ReactNode;
  className?: string;
}

const CarouselCanvas = ({ children, className }: CarouselCanvasProps) => {
  return (
    <div
      className={`w-[540px] h-[540px] bg-gradient-to-b from-background to-background-secondary text-text flex flex-col ${className || ""}`}
    >
      {children}
    </div>
  );
};

export default CarouselCanvas;
