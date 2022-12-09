import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./App.css";


import { Parallax, Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}

        spaceBetween={30}
        effect={"fade"}
        
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
    <div
          slot="container-start"
          className="parallax-bg"
          style={{
            "background-image":
              "url(https://www.channelfutures.com/files/2021/07/1-Evil-Hacker-877x432.jpg)",
          }}
          data-swiper-parallax="-23%"
        ></div>

<SwiperSlide>
  <div className="title" data-Swiper-parallax="-300">
    Who is the best computer programmer in the world?
  </div>

  <div className="subtitle" data-Swiper-parallax="-200">
    1.Dennis Retchie
  </div>
  
  <div className="text" data-Swiper-parallax="-100">
    <p>
    Dennis MacAlistair Ritchie was a computer scientist from the
    United States who “helped shape the digital era.” He co-created
    the C programming language and the Unix operating system with 
    long-time colleague Ken Thompson. Ritchie and Thompson received 
    the ACM Turing Award in 1983, the IEEE Hamming Medal in 1990, and
    President Clinton’s National Medal of Technology in 1999. 
    Ritchie retired in 2007 as the head of the Lucent Technologies System
    Software Research Department.
    </p>
  </div>
</SwiperSlide>

      <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
          Who is the second computer programmer in the world ?
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
          2. Bjarne Stroustrup
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
            Bjarne Stroustrup is a Danish computer scientist best known for developing
            the widely used C++ programming language. He is a Distinguished Research Professor
            at Texas A&M University and holds the College of Engineering Chair in Computer Science.
            He is also a visiting professor at Columbia University and works for Morgan Stanley.
            </p>
          </div>
        </SwiperSlide>


        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
          Who is the third computer programmer in the world ?
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
          3. James Gosling
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
            James Arthur Gosling is a computer scientist from Canada who is best known
            as the creator of the Java programming language. He has also made significant
            contributions to several other software systems, including NeWS and Gosling Emacs.
            Gosling was elected as a Foreign Associate Member of the United States National Academy
            of Engineering to recognize his extraordinary achievements.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
          Who is the fourth computer programmer in the world ?
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
          4. Linus Torvalds
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
            Linus Benedict Torvalds is a Finnish-American software engineer who was instrumental
            in developing the Linux kernel. He later became the Linux kernel’s chief architect and
            is the project’s coordinator. He also created the revision control system Git and the
            diving log software Subsurface.The Technology Academy Finland awarded him, along with
             Shinya Yamanaka, the 2012 Millennium Technology Prize in recognition of his development
              of a new open-source operating system for computers, which led to the widely used Linux kernel.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
          Who is the fifth computer programmer in the world ?
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
          5. Anders Hejlsberg
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
            Anders Hejlsberg is a well-known Danish software engineer who collaborated on developing
            several popular and commercially successful programming languages and development tools.
            He is the creator of the well-known programming language C#. Hejlsbergwas the creator of
            Turbo Pascal as well as the chief architect of Delphi. He is currently employed by Microsoft
            as the lead architect of C# and a TypeScript core developer.
            </p>
          </div>
        </SwiperSlide>









      </Swiper>
</>
  );
}