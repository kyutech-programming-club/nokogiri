import { HamburgerIcon } from "@chakra-ui/icons";
import {
  ChakraProvider,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import React from "react";

const Hamburger = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <ChakraProvider>
      <IconButton icon={<HamburgerIcon />} onClick={onOpen} aria-label={""} size='lg' background=''/>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody></ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </ChakraProvider>
    </>
  );
};

export default Hamburger;
