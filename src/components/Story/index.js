import { Box, Image } from "native-base";
import React from "react";

export default function Story({data}){
    return(
        <Box flex={1} marginBottom={4} padding={2}>
            <Box backgroundColor={"violet.800"} padding={0.5} borderRadius={32}>
                <Image
                    src={data.avatarUrl}
                    height={16}
                    width={16}
                    alt="img"
                    borderRadius={32}
                />
            </Box>
        </Box>
    )
}