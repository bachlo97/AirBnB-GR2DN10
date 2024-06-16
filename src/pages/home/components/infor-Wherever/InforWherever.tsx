import { Container } from "@/components/style-compoment/Container";

import InforWhereverList from "./components/InforWhereverList";
import { useEffect, useState } from "react";
import InforWhereverLoading from "./loading/InforWhereverLoading";
import { useTranslation } from "react-i18next";

function InforWherever() {
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useTranslation();
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  if (isLoading) {
    return <InforWhereverLoading />;
  }
  return (
    <Container>
      <div className="my-3">
        <h3 className="font-bold sm:text-[1.8rem] 2sm:text-[2.2rem]">
          {t("anyWhere.where")}
        </h3>

        <InforWhereverList />
      </div>
    </Container>
  );
}

export default InforWherever;
