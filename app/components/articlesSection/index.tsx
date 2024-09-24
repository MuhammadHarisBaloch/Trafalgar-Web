import Arrows from "@/constants/Arrows";
import Images from "@/constants/Images";
import {
  Box,
  Text,
  Image,
  Stack,
  Divider,
  Group,
  Card,
  Flex,
  Button,
} from "@mantine/core";
import clasess from "/app/page.module.css";

const ArticleCards = (image: string, title: string, description: string) => (
  <>
    <Card className={clasess.articlesCard}>
      <Card.Section>
        <Image h="auto" w="22rem" src={image} />
      </Card.Section>

      <Text fw={500} fz={21} mt="sm">
        {title}
      </Text>

      <Text fz={16} fw="lighter" c="#7D7987" mt="xs">
        {description}
      </Text>
      <Flex gap="sm" mt="xs">
        <Text fz={17} fw="normal" c="#4089ED">
          Read more
        </Text>
        <Image mt="sm" h={9} w={14.4} src={Arrows.ArticleArrow} />
      </Flex>
    </Card>
  </>
);

export default function ArticlesSection() {
  return (
    <>
      <Box>
        <Stack align="center">
          <Text fz={36} fw={500}>
            Check out our latest article
          </Text>
          <Divider size="sm" w="6%" color="black" />
          <Group px="5rem" mt="5rem">
            {ArticleCards(
              Images.DoctorDoingInjection,
              "Disease detection, check \n up in the laboratory",
              "In this case, the role of the health \n laboratory is very important to do \n a disease detection..."
            )}
            {ArticleCards(
              Images.DoctorDoingResearch,
              "Herbal medicines that are safe for consumption",
              "Herbal medicine is very widely used at this time because of its very good for your health..."
            )}
            {ArticleCards(
              Images.WomanWithFaceMask,
              "Natural care for healthy facial skin",
              "A healthy lifestyle should start from now and also for your skin health. There are some..."
            )}
          </Group>
          <Button mt="2rem" className={clasess.btn1}>
            View all
          </Button>
        </Stack>
      </Box>
    </>
  );
}
