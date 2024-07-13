// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const calculatePrice = (data: any) => {
  let result = 0;
  for (let i = 0; i < data.length; i++) {
    result = result + data[i];
  }
  return result;
};
