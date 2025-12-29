import { createPortal } from "react-dom";
import {
  Overlay,
  ModalWrapper,
} from "./BaseModal.styles";

export default function BaseModal({ children, onClose }) {
  return createPortal(
    <Overlay onClick={onClose}>
      <ModalWrapper onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalWrapper>
    </Overlay>,
    document.body
  );
}
