import styles from "./Card.module.css";
import Image from "next/image";
import Location from "../icons/Location";
import Link from "next/link";

const Card = (props) => {
  const { id, name, model, year, distance, location, image, price } = props;
  return (
    <Link href={`/cars/${id}`}>
      <div className={styles.container}>
        <Image src={image} className={styles.image} width={300} height={200} />
        <h4 className={styles.title}>{`${name} is ${model}`}</h4>
        <p className={styles.detail}>{`${year} . ${distance}`}km</p>
        <div className={styles.footer}>
          <p>$ {price}</p>
          <div className={styles.location}>
            <p>{location}</p>
            <Location />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
