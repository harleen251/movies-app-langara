import { Box, StatusBar, Text } from "@gluestack-ui/themed";
import { SafeAreaView } from "react-native-safe-area-context";

const Header = () => {
    const backgroundColor = "#2c3e50";

    return (
        <SafeAreaView style={{ backgroundColor }}>
            <StatusBar backgroundColor={backgroundColor} style="light" />
            <Box bg={backgroundColor} alignItems="center" justifyContent="center" safeAreaTop py={3}>
                <Text color="#fff" fontSize={20} fontWeight="bold">Movies App</Text>
            </Box>
        </SafeAreaView>
    );
}

export default Header;
