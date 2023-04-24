// [number, number] -> [100,200]

type ThreeDCoordinate = [x: number, y: number, z: number];

function add3DCoordinate(
  a: ThreeDCoordinate,
  b: ThreeDCoordinate
): ThreeDCoordinate {
  return [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
}

add3DCoordinate([1, 100, 200], [200, 300, 600]);

export function simpleUseState(
  value: string
): [() => string, (value: string) => void] {
  return [
    () => value,
    (v: string) => {
      value = v;
    },
  ];
}
const [getterState, setterState] = simpleUseState("Duy");

console.log("getterState() :>> ", getterState());
setterState("Dev");
console.log("getterState() :>> ", getterState());
