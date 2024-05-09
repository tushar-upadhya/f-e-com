"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format, isPast } from "date-fns";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import AlertMessage from "./AlertMessage";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { postData } from "@/lib/strapiAPI";

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
  const [messageAlert, setMessageAlert] = useState<{
    message: string;
    type: "error" | "success" | null;
  } | null>(null);

  const router = useRouter();

  const formatDateForStrapi = (date: Date) => {
    return format(date, "YYYY - MM - DD");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      return setMessageAlert(null);
    }, 3000);

    return () => clearTimeout(timer);
  }, [messageAlert]);

  const savedReservation = () => {
    // console.log("savedReservation:", savedReservation);
    if (!checkInDate || !checkOutDate) {
      return setMessageAlert({
        message: "Please select check-in and check-out dates",
        type: "error",
      });
    }

    if (checkInDate.getTime() === checkOutDate.getTime()) {
      return setMessageAlert({
        message: "Check-Out dates cannot be the same",
        type: "error",
      });
    }

    // filter reservations for the current Room
    const isReserved = reservations.data
      .filter((item: any) => item.attributes.room.data.id === room.data.id)
      .some((item: any) => {
        // check if any reservation overlaps with
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

        // convert existing check-in data to midNight
        const checkInTime = checkInDate.setHours(0, 0, 0, 0);
        const checkOutTime = checkOutDate.setHours(0, 0, 0, 0);

        // check if the room is reserved between the checkIN and checkOUT dates
        const isReservedBetweenDates =
          (checkInTime >= existingCheckIn && checkInTime < existingCheckOut) ||
          (checkOutTime > existingCheckIn &&
            checkOutTime <= existingCheckOut) ||
          (existingCheckIn > checkInTime && existingCheckIn < checkOutTime) ||
          (existingCheckOut > checkInTime && existingCheckOut <= checkOutTime);

        return isReservedBetweenDates;
      });

    if (isReserved) {
      setMessageAlert({
        message:
          "This room is already for this date.Please choose different dates or another room",
        type: "error",
      });
    } else {
      const data = {
        data: {
          firstname: userData.family_name,
          lastname: userData.given_name,
          email: userData.email,
          checkIn: checkInDate ? formatDateForStrapi(checkInDate) : null,
          checkOut: checkOutDate ? formatDateForStrapi(checkOutDate) : null,

          room: room.data.id,
        },
      };

      postData("http://127.0.0.1:1337/api/reservations", data);

      setMessageAlert({
        message: "Your booking has been successfully confirmed!",
        type: "success",
      });

      router.refresh();
    }
  };
  return (
    <div>
      <div className="h-[320px] mb-4">
        {/* top */}
        <div className="bg-accent font-secondary font-semibold py-4 text-center relative mb-2">
          <h4 className="text-xl text-white">Book Your Room</h4>
          {/* triangle */}
          <div className="absolute -bottom-[8px] left-[calc(50%_-_10px)] w-0 h-0 border-l-[10px] border-l-transparent border-t-[8px] border-t-accent border-r-[10px] border-r-transparent" />
        </div>
        <div className="flex flex-col gap-4 w-full py-6 px-8">
          {/* check IN */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                size="md"
                className={cn(
                  "w-full flex justify-start text-left font-semibold",
                  !checkInDate && "text-slate-900"
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

          {/* Check OUT */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                size="md"
                className={cn(
                  "w-full flex justify-start text-left font-semibold",
                  !checkOutDate && "text-slate-900"
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

          {/* conditional rendering of the booking based USER */}
          {isUserAuthenticated ? (
            <Button
              size={"md"}
              onClick={() => savedReservation()}
              className="w-full bg-accent font-secondary font-semibold text-white hover:bg-accent-hover"
            >
              Book Now
            </Button>
          ) : (
            <LoginLink>
              <Button
                className="w-full bg-accent font-secondary font-semibold"
                size={"md"}
              >
                Book Now
              </Button>
            </LoginLink>
          )}
        </div>
      </div>
      {messageAlert && (
        <AlertMessage message={messageAlert.message} type={messageAlert.type} />
      )}
    </div>
  );
};

export default Reservation;
