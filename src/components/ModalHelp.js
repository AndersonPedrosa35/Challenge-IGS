import React, { useContext } from 'react';
import { Modal } from 'react-bootstrap';
import { Context } from '../contexts/Context';

export default function ModalHelp() {
  const { isHelp, setIsHelp } = useContext(Context);
  return (
        <Modal
          show={isHelp}
          onHide={() => setIsHelp(false)}
          fullscreen="xl-down"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
              Como Jogar
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Para jogar clique em uma das imagens ilustradas no Carrosel, você será redirecionado para a instalação do jogo, se der sorte você será redirecionado para jogar o jogo diretamente</p>
            <p>Ganhe pontos e depois troque por descontos ou ganhe cash em outros jogos</p>
          </Modal.Body>
        </Modal>
  );
}
