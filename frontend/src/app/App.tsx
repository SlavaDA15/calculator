import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { NavLink, Outlet } from 'react-router-dom';
import { useRoutesList } from 'api';
import { useSignIn, useSignOut } from 'api/auth/update';
import { AuthContext } from './AuthContextProvider';
import { useContext } from 'react';

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data } = useRoutesList();
  const { mutate: signIn } = useSignIn();
  const { mutate: signOut } = useSignOut();

  const { isAdmin } = useContext(AuthContext);

  return (
    <>
      <Stack minHeight="100vh" background="gray.100">
        <Flex background="gray.700" justifyContent="flex-end">
          <IconButton
            icon={<HamburgerIcon />}
            colorScheme="blue"
            aria-label="Меню"
            onClick={onOpen}
            variant="ghost"
          />
        </Flex>
        <Outlet />
      </Stack>
      <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Калькуляторы</DrawerHeader>
          {data && (
            <DrawerBody>
              <Stack gap="12px" height="100%">
                {data.map((item) => (
                  <Button as={NavLink} to={item.path} key={item.label}>
                    {item.label}
                  </Button>
                ))}
              </Stack>
            </DrawerBody>
          )}
          <DrawerFooter>
            <Stack width="100%">
              {isAdmin && (
                <Button as={NavLink} to="/settings" variant="ghost">
                  Настройки
                </Button>
              )}
              {!isAdmin && (
                <Button onClick={() => signIn()} variant="ghost">
                  Войти под администратором
                </Button>
              )}
              {isAdmin && (
                <Button onClick={() => signOut()} variant="ghost">
                  Выйти
                </Button>
              )}
            </Stack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default App;
