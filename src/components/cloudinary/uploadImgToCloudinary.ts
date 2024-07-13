import { SetStateAction } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const updloadCloudinaryImage = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  imgFile: any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setImgHolder: { (value: SetStateAction<string>): void; (arg0: any): void }
) => {
  const data = new FormData();
  data.append("file", imgFile);
  data.append("upload_preset", "smipgehv");
  data.append("cloud_name", "dw57lx7qa");

  fetch("https://api.cloudinary.com/v1_1/dw57lx7qa/image/upload", {
    method: "post",
    body: data,
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      console.log(res?.url);
      setImgHolder(res?.url);
    })
    .catch((err) => console.log(err));
};
