import React, { Component } from "react";
import ModalVideo from "react-modal-video";
import {Box, Button} from '@chakra-ui/react';
import { FaPlayCircle } from 'react-icons/fa'

export class videoModal extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }
  render() {
    return (
      <div>
        <div>
          <ModalVideo
            channel="youtube"
            isOpen={this.state.isOpen}
            //Change the youtube URL here
            videoId="YXLPkoqBuAY"
            onClose={() => this.setState({ isOpen: false })}
          />
          <Box as={FaPlayCircle} fontSize="90px" color="gray.300" onClick={this.openModal} opacity="1" _hover={{ opacity: 0.8  }}/>
        </div>
      </div>
    );
  }
}

export default videoModal;
