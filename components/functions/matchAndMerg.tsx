export default function matchAndMerg(Arr1: any, Arr2: any) {
  if (typeof Arr1 !== "object" || typeof Arr2 !== "object") {
    return [];
  }

  return Arr1.map((dataObj: any) => {
    let hasItem = Arr2.find(({ id }: any) => id == dataObj.id);

    if (hasItem) {
      return { ...hasItem, ...dataObj };
    }
  }).filter((item: any) => item);
}
