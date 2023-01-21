import { HamburgerIcon } from "@chakra-ui/icons";
import {
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
  Image,
  Box,
  Divider,
  Link,
  Center,
} from "@chakra-ui/react";
import { useAtom } from "jotai";
import React from "react";
import ham from "../images/hum2.svg";
import { stateAtom } from "../state";
import ModalInner from "./ModalInner";

const Hamburger = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box display="inline-block">
      <IconButton
        onClick={onOpen}
        colorScheme=""
        aria-label="いろいろ"
        width="80px"
      >
        <Image src={ham} height="48px" />
      </IconButton>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <ModalInner />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Hamburger;
