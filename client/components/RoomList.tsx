"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Star, StarHalf } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { setFips } from "crypto";

const RoomList = ({ rooms }: { rooms: any }) => {
  //   console.log("rooms:", rooms);

  const [roomType, setRoomType] = useState("all");
  const [filterRooms, setFilterRooms] = useState([]);
  // console.log("roomType:", roomType);

  useEffect(() => {
    const filtered = rooms.data?.filter((room: any) => {
      return roomType === "all" ? rooms : roomType === room.attributes.type;
    });
    setFilterRooms(filtered);
  }, [roomType]);
  // console.log("filterRooms:", filterRooms);

  return (
    <section className="py-16 min-h-[90vh]">
      {/* title & image */}
      <div className="flex flex-col items-center">
        {/* image */}
        <div className="relative w-[82px] h-[20px]">
          <Image
            src={"/assets/heading-icon.svg"}
            fill
            alt="headingImage"
            className="object-cover"
          />
        </div>
        <h2 className="h-2 mb-8">Our Rooms</h2>
      </div>

      {/* tabs */}
      <Tabs
        defaultValue="all"
        className="w-[240px] mx-auto lg:w-[540px] h-[200px] lg:h-auto mb-8"
      >
        <TabsList className="w-full h-full lg:h-[46px] flex flex-col lg:flex-row">
          <TabsTrigger
            className="w-full h-full"
            onClick={() => setRoomType("all")}
            value="all"
          >
            All
          </TabsTrigger>
          <TabsTrigger
            className="w-full h-full"
            onClick={() => setRoomType("single")}
            value="single"
          >
            Single
          </TabsTrigger>
          <TabsTrigger
            className="w-full h-full"
            onClick={() => setRoomType("double")}
            value="double"
          >
            Double
          </TabsTrigger>
          <TabsTrigger
            className="w-full h-full"
            onClick={() => setRoomType("extended")}
            value="extended"
          >
            Extended
          </TabsTrigger>
        </TabsList>
      </Tabs>

      {/* room list */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {filterRooms.map((room: any) => {
          const imgURL = `http://127.0.0.1:1337${room.attributes.image.data?.attributes.url}`;
          return (
            <div key={room.id}>
              <Link href={`/room/${room.id}`}>
                <div className="relative w-full h-[300px] overflow-hidden mb-6">
                  <Image
                    src={imgURL}
                    fill
                    priority
                    alt="image"
                    className="object-contain"
                  />
                </div>
              </Link>

              <div className="h-[134px]">
                <div className="flex items-center w-fit gap-2 justify-between mb-6">
                  <div className="font-primary  font-semibold">
                    Capacity - {room.attributes.capacity} person
                  </div>

                  <div className="flex gap-1 text-accent ">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <StarHalf />
                  </div>
                </div>
                <Link href={"/room/$room.id"}>
                  <h3 className="h3 font-secondary">{room.attributes.title}</h3>
                </Link>

                <p className="h3 font-primary font-semibold text-accent mb-4">
                  &#x20B9; {room.attributes.price}
                  <span className="text-base text-primary"> / night</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default RoomList;
