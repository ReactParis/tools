import React from "react";

export interface ImageProps extends React.ComponentPropsWithoutRef<"img"> {}

export default function Image(props: ImageProps) {
  const { src } = props;
  const [dataUri, setDataUri] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (!src) return;

    const getImageUri = (src: string) => {
      const controller = new AbortController();
      fetch(src, { signal: controller.signal })
        .then((response) => response.blob())
        .then((blob) => {
          const reader = new FileReader();

          reader.onloadend = () => {
            setDataUri(reader.result as string);
          };

          reader.readAsDataURL(blob);
        })
        .catch((error) => {
          console.error(error);
        });
      return { controller };
    };

    const { controller } = getImageUri(src);

    return () => controller.abort();
  }, [src]);

  if (!dataUri) return null;
  return <img {...props} src={dataUri} />;
}
