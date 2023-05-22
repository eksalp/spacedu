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
              Apa itu Spacedu?
            </Box>
            <AccordionIcon color="black" />
          </AccordionButton>
        </h2>
        <AccordionPanel textAlign="justify" pb={4}>
          Spacedu merupakan sebuah platform yang dibuat untuk membantu para siswa untuk memudahkan masuk ke Kedinasan maupun CPNS dengan latihan soal dalam bentuk Tryout yang dinilai secara nasional.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
        <h2>
          <AccordionButton>
            <Box color="black" as="span" flex="1" textAlign="left">
              Bagaimana cara mendaftar Tryout dan pembayarannya?
            </Box>
            <AccordionIcon color="black" />
          </AccordionButton>
        </h2>
        <AccordionPanel textAlign="justify" pb={4}>
          Caranya mudah, kalian pergi ke halaman Program Tryout. Setelah itu, kalian mencari tryout apa yang sedang dibuka oleh Spacedu dan memilih tipe tryout untuk Kedinasan atau CPNS. Kalian bisa langung pesan Tryout dan setelah
          melakukan proses pemesanan, kalian akan mendapatkan email notifikasi untuk pengerjaan Tryout.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
        <h2>
          <AccordionButton>
            <Box color="black" as="span" flex="1" textAlign="left">
              Bagaimana mendapatkan Promo Tryout?
            </Box>
            <AccordionIcon color="black" />
          </AccordionButton>
        </h2>
        <AccordionPanel textAlign="justify" pb={4}>
          Ada 2 cara bestie, yang pertama kalian bisa mem-follow akun sosial media Spacedu. Nantikan promo di sosial media Spaceduyang diadakan setiap minggunya. Selain itu, kalian bisa langung mengunjungi website Spacedu dan pergi ke
          halaman program Tryout, nanti kalian bisa melihat promo apa yang sedang berjalan.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
        <h2>
          <AccordionButton>
            <Box color="black" as="span" flex="1" textAlign="left">
              Bagaimana cara untuk gabung grup belajar?
            </Box>
            <AccordionIcon color="black" />
          </AccordionButton>
        </h2>
        <AccordionPanel textAlign="justify" pb={4}>
          Untuk gabung ke grup belajar, Spacedu akan memberikan link setelah kalian melakukan pemesanan tryout, baik Kedinasan maupun CPNS. Kalian bisa join ke grup belajar tersebut dan bisa berdiskusi dan mendapat promo Tryout menarik yang
          diberikan oleh Spacedu dan tentu promo tersebut sangat terbatas.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
        <h2>
          <AccordionButton>
            <Box color="black" as="span" flex="1" textAlign="left">
              Bagaimana cara untuk pengerjaan Tryout?
            </Box>
            <AccordionIcon color="black" />
          </AccordionButton>
        </h2>
        <AccordionPanel textAlign="justify" pb={4}>
          Setelah kalian melakukan pemesanan, kalian bisa mengakses soal Tryout yang diberikan melalui email masing-masing yang sudah didaftarkan. Kalian nanti akan di arahkan ke canvas lms. Disitu kalian mendaftarkan akun dengan email yang
          sudah didaftarkan tadi dna bisa langung mengakses soal Tryout dengan tenggat waktu yang sudah ditentukan. Untuk penilaiannya akan diumumkan beberapa hari kedepan karena pengumuman berupa hasil seluruh peserta Tryout secara
          nasional. Jika diluar waktu yang diberikan, maka nilai akan diumumkan di email masing-masing beserta sertifikat.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default Accordionn;
