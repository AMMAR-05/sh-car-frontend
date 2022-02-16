import { route } from "next/dist/server/router";
import { useRouter } from "next/router";

function CarPage() {
  const router = useRouter();
  console.log(router);

  return (
    <div>
      <h1>Car Page</h1>
      <h2>{router.query.slug}</h2>
    </div>
  );
}

export default CarPage;
