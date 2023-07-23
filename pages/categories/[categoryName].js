import { useRouter } from "next/router";
import carsData from "../../data/carsData";
import Card from "../../components/module/Card";
import CarsList from "../../components/templates/CarsList";

const Category = () => {
  const router = useRouter();

  const { categoryName } = router.query;
  const cars = carsData.filter((car) => car.category === categoryName);
  return <CarsList data={cars} />;
};

export default Category;
