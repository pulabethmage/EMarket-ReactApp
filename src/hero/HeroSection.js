import React from "react";
import Card from "../card/Card";

export default function HeroSection() {
  return (
    <div className="flex m-auto max-w-6xl justify-center mt-24">
      <div className="grid md:grid-cols-2 gap-4 w-full h-full">
        <Card
          title={"Card 01"}
          subtitle={"This is sample text for the subtitle"}
          status={true}
        />
        <Card title={"Card 02"} status={false} />
        <Card title={"Card 03"} status={false} />
        <Card title={"Card 04"} status={false} />
        <Card title={"Card 05"} status={true} />
        <Card title={"Card 06"} status={false} />
        <Card title={"Card 07"} status={true} />
      </div>
    </div>
  );
}
