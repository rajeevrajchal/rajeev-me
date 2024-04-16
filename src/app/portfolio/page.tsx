import { Flex } from "@radix-ui/themes";
import { getPortfolio } from "./action";

const Portfolio = async () => {
  const portfolio = await getPortfolio();
  return (
    <Flex direction="column" gap="2">
      <p className="text-[4rem]">I am Rajeev. I need free design suggestion</p>

      <pre>{JSON.stringify(portfolio.data?.results, null, 2)}</pre>
    </Flex>
  );
};

export default Portfolio;
