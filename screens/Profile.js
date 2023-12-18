import { Box, AspectRatio, Image, Center, Stack, Heading, Text, HStack, Button, VStack, Divider } from "native-base";
import ConfirmationOrder from "./ConfirmationOrder";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import { Header } from '../components';
import { Avatar } from "native-base";



const ProfileUser = () => {
  const navigation = useNavigation();

  return (
    <Box alignItems="center">
      <HStack py="40">
        <Box w="80" rounded="lg" bg="muted.100" borderColor="primary.800" borderWidth="2">
          <Stack p="5" space={10}>
            <Stack space={2}>
              <Avatar alignSelf="center" size="2xl" source={{
                uri: "https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
              }}>
                RB
              </Avatar>
              <Heading> PROFILE </Heading>
              <Divider></Divider>
              <Text fontWeight="400">
                Nama : Ridho Rahmattulloh
              </Text>
              <Text fontWeight="400">
                Umur : 20
              </Text>
              <Text fontWeight="400">
                Alamat : jalan semolowaru
              </Text>
              <Text fontWeight="400">
                kode pos : 60245
              </Text>
              <Divider></Divider>
            </Stack>
          </Stack>
        </Box>
      </HStack>
      <Stack space="2"  mb="10">
        <HStack space="2" >
          <Button bg="primary.400" size="10" rounded="md" _text={{
            color: "white"
          }} shadow="1">
            Edit
          </Button>
          <Button bg="primary.400" size="10" rounded="md" _text={{
            color: "white"
          }} shadow="1">
            Keluar
          </Button>
        </HStack>
      </Stack>
    </Box>

  );
};

export default ProfileUser