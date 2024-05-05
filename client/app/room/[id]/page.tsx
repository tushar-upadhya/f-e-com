import Reservation from "@/components/Reservation";
import { getReservationData, getRoomData } from "@/lib/strapiAPI";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Maximize, Users } from "lucide-react";
import Image from "next/image";

const RoomDetailsPage = async ({ params }: { params: any }) => {
  // console.log("params:", params);

  const room = await getRoomData({ params });
  const reservations = await getReservationData();
  // console.log("reservations:", reservations);
  const { isAuthenticated, getUser } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();
  const userData = await getUser();

  const imgURL = `http://127.0.0.1:1337${room.data.attributes.image.data.attributes.url}`;
  // console.log("imgURL:", imgURL);

  return (
    <section className="min-h-[80vh]">
      <div className="container mx-auto py-8">
        <div className="flex flex-col lg:flex-row lg:gap-12 h-full">
          {/* img & text */}
          <div className="flex-1">
            {/* image */}
            <div className="relative h-[360px] lg:h-[420] mb-8">
              <Image
                src={imgURL}
                fill
                className="object-cover"
                alt="roomImage"
              />
            </div>
            <div className="flex flex-1 flex-col mb-8">
              {/* title & price */}
              <div className="flex justify-between items-center mb-4">
                <h3 className="h3">{room.data.attributes.title}</h3>
                <p className="h3 font-secondary font-medium text-accent">
                  &#8377; {room.data.attributes.price}
                  <span className="text-base text-primary">/ Night</span>
                </p>
              </div>
              {/* info */}
              <div className="flex items-center gap-8 mb-4">
                <div className="flex items-center gap-2">
                  <div className="text-2xl text-accent">
                    <Maximize />
                  </div>
                  <p>
                    {room.data.attributes.size} m <sup>2</sup>{" "}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-2xl text-accent">
                    <Users />
                  </div>
                  <p>{room.data.attributes.capacity} Guests</p>
                </div>
              </div>
            </div>
          </div>
          {/* reservation */}
          <div className="w-full lg:max-w-[360px] h-max">
            <Reservation
              reservations={reservations}
              room={room}
              isUserAuthenticated={isUserAuthenticated}
              userData={userData}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomDetailsPage;
