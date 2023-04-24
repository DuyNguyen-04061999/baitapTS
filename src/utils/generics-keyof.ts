// interface Device {
//   name: string;
//   price: number;
// }

// export function getDeviceKeys<A extends Device, B extends keyof A>(
//   items: A[],
//   key: B
// ): A[B][] {
//   const sorterdDevices = items.sort((a, b) => (a.price > b.price ? 1 : -1));

//   return sorterdDevices.map((item) => item[key]);
// }

interface Device {
  name: string;
  price: number;
}

export function getDeviceKeys<A extends Device, B extends keyof A>(
  items: A[],
  key: B
): A[B][] {
  const sortedDevice = items.sort((a, b) => (a.price > b.price ? 1 : -1));

  return sortedDevice.map((item) => item[key]);
}

const devices = [
  {
    name: "iphone",
    price: 1000,
  },
  {
    name: "Macbook",
    price: 3000,
  },
  {
    name: "Ipad",
    price: 2000,
  },
];
console.log(getDeviceKeys(devices, "name"));
