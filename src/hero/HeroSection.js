import React from "react";
import Card from "../card/Card";

export default function HeroSection() {
  return (
    <div className="flex m-auto max-w-6xl justify-center mt-24">
      <div className="grid md:grid-cols-2 gap-4 w-full h-full">
        <Card
          title={"Card 01"}
          subtitle={"This is sample text for the subtitle"}
          longdesc={
            "Long decriptions are really important. Due to lack of infomation in the Subtitle we really want to explain the title by the long description."
          }
          status={true}
        />
        <Card
          title={"Card 02"}
          subtitle={"This is sample text for the subtitle"}
          longdesc={
            "Long decriptions are really important. Due to lack of infomation in the Subtitle we really want to explain the title by the long description."
          }
          status={false}
        />
        <Card
          title={"Card 03"}
          subtitle={"This is sample text for the subtitle"}
          longdesc={
            "Long decriptions are really important. Due to lack of infomation in the Subtitle we really want to explain the title by the long description."
          }
          status={false}
        />

        <Card
          title={"Card 04"}
          subtitle={"This is sample text for the subtitle"}
          longdesc={
            "Long decriptions are really important. Due to lack of infomation in the Subtitle we really want to explain the title by the long description."
          }
          status={false}
        />

        <Card
          title={"Card 05"}
          subtitle={"This is sample text for the subtitle"}
          longdesc={
            "Long decriptions are really important. Due to lack of infomation in the Subtitle we really want to explain the title by the long description."
          }
          status={true}
        />
      </div>
    </div>
  );
}
