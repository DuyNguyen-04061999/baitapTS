// [number, number] -> [100,200]

export function simpleUseStateGen<T>(value: T): [() => T, (value: T) => void] {
  return [
    () => value,
    (v) => {
      value = v;
    },
  ];
}
// const [getState, setState] = simpleUseStateGen(100);
// setState(123);
// console.log("getState() :>> ", getState());

//[]
// interface Rank<RankItem> {
//   item: RankItem;
//   rank: number;
// }

// function ranker<RankItem>(
//   items: RankItem[],
//   rank: (v: RankItem) => number
// ): RankItem[] {

//   const ranks: Rank<RankItem>[] = items.map((item) => ({
//     item,
//     rank: rank(item),
//   }));

//   console.log("ranks :>> ", ranks);
//   return ranks.map((rank) => rank.item);
// }
// console.log(ranker([1, 2, 3, 4, 5], (num) => num * 5));

interface Rank<T> {
  item: T;
  rank: number;
}

function rankItem<T>(items: T[], rankCb: (v: T) => number): T[] {
  const ranks: Rank<T>[] = items.map((item) => ({
    item,
    rank: rankCb(item),
  }));

  ranks.sort((a, b) => (a.rank > b.rank ? 1 : -1));

  return ranks.map((rank) => rank.item);
}
const languages: { name: string; difficulty: number }[] = [
  {
    name: "Reactjs",
    difficulty: 40,
  },
  {
    name: "Vuejs",
    difficulty: 20,
  },
  {
    name: "Angular",
    difficulty: 90,
  },
];
const rank = rankItem(languages, (obj) => obj.difficulty);
export interface Product {
  name: string;
  brand: string;
  color: string;
}

export interface ProductNewFeature extends Product {
  speed: string;
}
const newProduct: ProductNewFeature = {
  name: "Duy",
  brand: "a",
  color: "red",
  speed: "1231",
};
