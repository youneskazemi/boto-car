import { useRouter } from "next/router";
import carsData from "../../data/carsData";
import CarsList from "../../components/templates/CarsList";

const FilteredCars = () => {
  const router = useRouter();
  const [min, max] = router.query.slugs || [];
  const filterdData = carsData.filter(
    (item) => item.price > min && item.price < max
  );
  return <CarsList data={filterdData} />;
};

export default FilteredCars;
