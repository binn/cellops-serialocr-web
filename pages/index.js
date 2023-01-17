import { Box, Center, Button, Text } from "@chakra-ui/react";
import FilePicker from "chakra-ui-file-picker";
import { useState } from "react";
import Header from '../comps/header';

function Index() {
    const [file, setFile] = useState(null);
    const [ocr, setOcr] = useState("");

    const upload = async function() {
        const apiUrl = "https://90c3eae22c06.ngrok.io";
        var data = new FormData();
        data.append('file', file);

        let res = await fetch(apiUrl + '/ocr', {
            method: "POST",
            body: data
        });

        let json = await res.json();
        setOcr(json.serial ?? "No serial found.");
    }

    return (
        <Center>
            <Box w='95vw'>
                <FilePicker onFileChange={(files) => setFile(files[0])} />
                <Button onClick={upload}>Upload</Button>
                <Text>
                    {ocr}
                </Text>
            </Box>
        </Center>
    );
}

export default Index;