import styles from "./AllButton.module.css";
import Link from "next/link";
import useRouter from "next/router";

const AllButton = () => {
  return (
    <div className={styles.container}>
      <Link href="/cars">See all cars</Link>
    </div>
  );
};

export default AllButton;
