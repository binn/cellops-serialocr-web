import { Box, Center } from "@chakra-ui/react";
import FilePicker from "chakra-ui-file-picker";
import Header from '../comps/header';

function Index() {
    return (
        <Center>
            <Box w='95vw'>
                <FilePicker></FilePicker>
            </Box>
        </Center>
    );
}

export default Index;