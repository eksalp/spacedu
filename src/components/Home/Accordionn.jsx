import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box } from '@chakra-ui/react';
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Accordionn = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Accordion allowToggle>
      <AccordionItem data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
        <h2>
          <AccordionButton>
            <Box color="black" as="span" flex="1" textAlign="left">
              Bagaimana cara mendaftar Tryout?
            </Box>
            <AccordionIcon color="black" />
          </AccordionButton>
        </h2>
        <AccordionPanel textAlign="justify" pb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
        <h2>
          <AccordionButton>
            <Box color="black" as="span" flex="1" textAlign="left">
              Section 2 title
            </Box>
            <AccordionIcon color="black" />
          </AccordionButton>
        </h2>
        <AccordionPanel textAlign="justify" pb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default Accordionn;
