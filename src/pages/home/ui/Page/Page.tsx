import { PageContainer } from "@shared/ui";
import { Helmet } from "react-helmet-async";

export const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>ECOSORT</title>
        <meta name="description" content="ECOSORT" />
      </Helmet>
      <PageContainer>a</PageContainer>
    </>
  );
};
