"use client";
import Icons from "@/constants/Icons";
import {
  Box,
  Text,
  Image,
  Stack,
  Divider,
  Card,
  SimpleGrid,
  Button,
} from "@mantine/core";
import clasess from "/app/page.module.css";

export default function Services() {
  const ServiceCard = (image: string, title: string, text: string) => (
    <>
      <Card className={clasess.serviceCard}>
        <Card.Section>
          <Image m="xl" h="60%" w="auto" src={image} />
        </Card.Section>
        <Text fw={500} fz={24} mt="md">
          {title}
        </Text>
        <Text mt="xs" fw="normal" c="#7D7987" fz={16}>
          {text}
        </Text>
      </Card>
    </>
  );

  return (
    <>
      <Box>
        <Stack align="center" gap="xl">
          <Text fz={36} fw={500} c="black">
            Our services
          </Text>
          <Divider size="sm" color="black" w="5%" />
          <Text ta="center" fz={18} fw="normal" c="#7D7987">
            We provide to you the best choiches for you. Adjust it to your
            health needs and make sure your undergo treatment <br />
            with our highly qualified doctors you can consult with us which type
            of service is suitable for your health
          </Text>
          <SimpleGrid cols={3} spacing="2rem" pt="xl" px="9rem">
            {ServiceCard(
              Icons.SearchDoctor,
              "Search doctor",
              "Choose your doctor from thousands of specialist, general, and trusted hospitals"
            )}
            {ServiceCard(
              Icons.OnlinePharmacy,
              "Online pharmacy",
              "Choose your doctor from thousands of specialist, general, and trusted hospitals"
            )}
            {ServiceCard(
              Icons.Consultation,
              "Consultation",
              "Choose your doctor from thousands of specialist, general, and trusted hospitals"
            )}
            {ServiceCard(
              Icons.DetailInfo,
              "Detail info",
              "Choose your doctor from thousands of specialist, general, and trusted hospitals"
            )}
            {ServiceCard(
              Icons.EmergencyCare,
              "Emergency care",
              "Choose your doctor from thousands of specialist, general, and trusted hospitals"
            )}
            {ServiceCard(
              Icons.Tracking,
              "Tracking",
              "Choose your doctor from thousands of specialist, general, and trusted hospitals"
            )}
          </SimpleGrid>
          <Button className={clasess.btn1}>Learn more</Button>
        </Stack>
      </Box>
    </>
  );
}
