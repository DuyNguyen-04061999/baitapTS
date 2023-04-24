import { useEffect, useState } from "react";
import { Permission } from "../../utils/enums";
import { Age } from "../../utils/types";
import { simpleUseState } from "../../utils/tuple";
import Card from "../Card";
// arrObj: {}[] = [{}]
const reviews: {
  name: string;
  image: string;
  stars: number;
  premiumUser: boolean;
  date: string;
}[] = [
  {
    name: "Evondev",
    image: "",
    stars: 5,
    premiumUser: true,
    date: "05/09/2022",
  },
  {
    name: "CharkaUI",
    image: "",
    stars: 4,
    premiumUser: false,
    date: "03/08/2022",
  },
];

const travelItem: {
  image: string;
  name: string;
  totalReviews: number;
  rating: number;
  location: string;
  price: number;
  date: string | number;
  departure: string;
  features: {
    wifi: string;
    freeParking: boolean;
    specialOffer: boolean;
  };
}[] = [
  {
    image: "https://source.unsplash.com/random",
    name: "haha",
    totalReviews: 0,
    rating: 5,
    location: "HCM",
    price: 900,
    date: 123,
    departure: "long",
    features: {
      wifi: "aloca",
      freeParking: true,
      specialOffer: false,
    },
  },
];

// const obj: {} = {}
// union types |

function App() {
  const [count, setCount] = useState(0);

  const user: {
    firstName: string;
    lastName: string;
    age: Age;
    isStudent: boolean;
    school: Array<string | number>;
    scores: (number | string)[];
    contact: [number, string];
    permission: Permission;
  } = {
    firstName: "Tran",
    lastName: "Anh Ngu",
    age: 40,
    isStudent: false,
    school: ["Ngu", "TDT", "SG", 9],
    scores: [10, 9, 9, "Aasds"],
    contact: [123123123, "adsasd"],
    permission: Permission.ADMIN,
  };
  function displayReview(
    totalReviews: number,
    name: string,
    premium?: boolean
  ) {
    return (
      <>
        Review total <strong>{totalReviews}</strong> | Last reviewed by //{" "}
        <strong>{name}</strong> {premium ? "⭐️" : ""}
      </>
    );
  }
  // optional: không bắt buộc
  // name?: parameter này không bắt buộc
  // const travelItem: image, name, totalReviews, rating, location, price, date, departure, features: wifi, parking, offer
  // Khai báo 1 biến có tên là travelItem là một mảng chứa các object có các properties(thuộc tính) như trên
  const [value, setValue] = simpleUseState("duy");
  setValue("hello");
  console.log("value :>> ", value);
  return (
    <div>
      <Card description="abcas" image="asdasd" link="asdasd" name="asdasd" />
      <div className="review">
        <div className="review-image">
          <img
            src="https://images.unsplash.com/photo-1659464797962-62a9b8324abc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt=""
          />
        </div>
        <div className="review-info">
          {displayReview(
            reviews.length,
            reviews[0].name,
            reviews[0].premiumUser
          )}
          {user.age}
        </div>
      </div>
    </div>
  );
}

export default App;
