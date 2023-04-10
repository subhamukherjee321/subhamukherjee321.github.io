import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function ProjectCard2({ item }) {
  return (
    <Stack
      borderWidth="1px"
      borderRadius="lg"
      w={{
        base: "100%",
        sm: "100%",
        md: "540px",
        lg: "100%",
        xl: "80%",
        "2xl": "80%",
      }}
      margin={"auto"}
      direction={{ base: "column", md: "row" }}
      bg={("white", "gray.900")}
      boxShadow={"2xl"}
      padding={4}
    >
      <Flex flex={1} bg="blue.200" h={"300px"}>
        <Image boxSize="100%" src={item.image} h={"100%"} />
      </Flex>
      <Stack
        flex={1}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        p={1}
        pt={"1rem"}
      >
        <Heading
          fontSize={"2xl"}
          fontFamily={"body"}
          color={"white"}
          mb={"0.6rem"}
        >
          {item.title}
        </Heading>
        <Text textAlign={"center"} color={("gray.700", "gray.400")} px={3}>
          {item.description}
        </Text>
        <Stack
          align={"center"}
          justify={"center"}
          direction={"row"}
          m={"1.5rem 0"}
        >
          {item.techStack?.map((ele) => (
            <Flex
              gap={"8px"}
              key={ele.id}
              p={"0.3rem"}
              _hover={{ bg: "white" }}
              fontSize={"1.7rem"}
              color={ele.color}
              my={"0.5rem"}
            >
              {ele.icon}
            </Flex>
          ))}
        </Stack>

        <Stack
          width={"100%"}
          mt={"2rem"}
          direction={"row"}
          padding={2}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Link
            href={item.github}
            target="_blank"
            rel="noreferrer"
            width={"100%"}
            textDecoration={"none"}
          >
            <Button
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              w="100%"
              _hover={{
                bg: "rgba(0, 0, 0, 0.64)",
                color: "white",
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              }}
              _active={{
                boxShadow:
                  "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)",
              }}
            >
              GitHub
            </Button>
          </Link>

          <Link href={item.live} target={"_blank"} width={"100%"} textDecoration={"none"}>
            <Button
              flex={1}
              w="100%"
              fontSize={"sm"}
              rounded={"full"}
              colorScheme="twitter"
              boxShadow={
                "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
              }
            >
              Live
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
}
