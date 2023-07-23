import styles from "./SearchBar.module.css";
import { useState } from "react";
import { useRouter } from "next/router";

const SearchBar = () => {
  const router = useRouter();
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  const searchHandler = () => {
    if (min && max) {
      router.push(`/filter/${min}/${max}`);
    } else {
      alert("Please provice minimum and maximum");
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <input
          placeholder="min price"
          value={min}
          onChange={(e) => setMin(e.target.value)}
        ></input>
        <input
          placeholder="max price"
          value={max}
          onChange={(e) => setMax(e.target.value)}
        ></input>
      </div>
      <button onClick={searchHandler}>Search</button>
    </div>
  );
};

export default SearchBar;
