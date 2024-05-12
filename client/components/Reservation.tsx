"use client";
import { useEffect, useState } from "react";

import { format, isPast } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import AlertMessage from "./AlertMessage";
import { postData } from "@/lib/strapiAPI";
import { useRouter } from "next/navigation";

const Reservation = ({
  reservations,
  room,
  isUserAuthenticated,
  userData,
}: {
  reservations: any;
  room: any;
  isUserAuthenticated: boolean;
  userData: any;
}) => {
  const [checkInDate, setCheckInDate] = useState<Date>();
  const [checkOutDate, setCheckOutDate] = useState<Date>();
  const [alertMessage, setAlertMessage] = useState<{
    message: string;
    type: "error" | "success" | null;
  } | null>(null);

  const router = useRouter();

  const formatDataForStrapi = (date: Date) => {
    return format(date, "yyyy-MM-dd");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlertMessage(null);
    }, 3000);

    return () => clearTimeout(timer);
  }, [alertMessage]);

  const handleSaveReservation = () => {
    if (!checkInDate || !checkOutDate) {
      setAlertMessage({
        message: "Please select check-in and check-out dates",
        type: "error",
      });
    }

    const isReserved = reservations.data
      .filter((item: any) => item.attributes.room.data.id === room.data.id)
      .some((item: any) => {
        const existingCheckIn = new Date(item.attributes.checkIn).setHours(
          0,
          0,
          0,
          0
        );
        const existingCheckOut = new Date(item.attributes.checkOut).setHours(
          0,
          0,
          0,
          0
        );

        // convert selected check-in date to midnight
        const checkInTime = checkInDate.setHours(0, 0, 0, 0);
        const checkOutTime = checkOutDate.setHours(0, 0, 0, 0);

        // check if the room is reserved between the check in and check out dates
        const isReservedBetweenDates =
          (checkInTime >= existingCheckIn && checkOutDate < existingCheckOut) ||
          (checkOutDate > existingCheckIn &&
            checkOutTime <= existingCheckOut) ||
          (existingCheckIn > checkInTime && existingCheckIn < checkOutTime) ||
          (existingCheckOut > checkInTime && existingCheckOut <= checkOutTime);

        return isReservedBetweenDates;
      });

    if (isReserved) {
      setAlertMessage({
        message:
          "This room is already booked for the selected dates. Please choose different dates or another room.",
        type: "error",
      });
    } else {
      const data = {
        data: {
          firstname: userData.family_name,
          lastname: userData.give_name,
          email: userData.email,
          checkIn: checkInDate ? formatDataForStrapi(checkInDate) : null,

          checkOut: checkOutDate ? formatDataForStrapi(checkOutDate) : null,

          room: room.data.id,
        },
      };
      postData(`http://127.0.0.1:1337/api/reservations`, data);
      setAlertMessage({
        message: "Your booking has been successfully confirmed",
        type: "error",
      });
    }
  };

  return (
    <div>
      <div className="bg-tertiary h-[320px] mb-4">
        {/* top */}
        <div className="bg-accent py-4 text-center relative mb-2">
          <h4 className="text-xl text-white font-primary">Book Your Room</h4>
          {/* triangle */}
          <div className="absolute -bottom-[8px] left-[calc(50%_-_10px)] w-0 h-0 border-l-[10px] border-l-transparent border-t-[8px] border-t-accent border-r-[10px] border-r-transparent" />
        </div>
        <div className="flex flex-col gap-4 w-full py-6 px-8">
          {/* check IN */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"default"}
                size={"md"}
                className={cn(
                  "w-full flex justify-start text-left font-semibold",
                  !checkInDate && "text-secondary"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {checkInDate ? (
                  format(checkInDate, "PPP")
                ) : (
                  <span>Check In</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={checkInDate}
                onSelect={setCheckInDate}
                initialFocus
                disabled={isPast}
              />
            </PopoverContent>
          </Popover>
          {/* check out */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"default"}
                size={"md"}
                className={cn(
                  "w-full flex justify-start text-left font-semibold",
                  !checkOutDate && "text-secondary"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {checkOutDate ? (
                  format(checkOutDate, "PPP")
                ) : (
                  <span>Check Out</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={checkOutDate}
                onSelect={setCheckOutDate}
                initialFocus
                disabled={isPast}
              />
            </PopoverContent>
          </Popover>

          {isUserAuthenticated ? (
            <Button
              onClick={() => handleSaveReservation()}
              size="md"
              className="w-full bg-accent hover:bg-accent-hover text-white font-primary"
            >
              Book Now
            </Button>
          ) : (
            <LoginLink>
              <Button
                className="w-full bg-accent hover:bg-accent-hover text-white font-primary"
                size="md"
              >
                Book Now
              </Button>
            </LoginLink>
          )}
        </div>
      </div>
      {alertMessage && (
        <AlertMessage message={alertMessage.message} type={alertMessage.type} />
      )}
    </div>
  );
};

export default Reservation;
