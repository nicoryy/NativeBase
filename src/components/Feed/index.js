import { Box, Heading, Icon, Image, Text } from "native-base";
import { Feather } from "@expo/vector-icons";

export default function Feed({ data }) {
    return (
        <Box
            backgroundColor={"#fff"}
            flex={1}
            marginBottom={4}
            padding={2}
            borderRadius={10}
        >
            <Box>
                <Image
                    src={data.avatarUrl}
                    alt="Feed Post"
                    w={"100%"}
                    h={120}
                />
            </Box>
            <Box marginY={4}>
                <Heading size={"sm"}>Aprendendo Native-Base</Heading>
                <Text numberOfLines={2}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Neque cumque eos laboriosam doloremque distinctio nemo
                    repellendus voluptatum maxime natus dignissimos delectus,
                    voluptas aperiam magni! A nesciunt ratione voluptates
                    perspiciatis incidunt.
                </Text>
            </Box>
            <Box
                flexDir={"row"}
                backgroundColor={"gray.200"}
                paddingX={3}
                paddingY={1}
                alignSelf={"flex-start"}
                borderRadius={10}
            >
                <Icon
                    as={Feather}
                    name="user"
                    size={5}
                    marginRight={2}
                    color={"#000"}
                />
                <Text>{data.fullName}</Text>
            </Box>
        </Box>
    );
}
