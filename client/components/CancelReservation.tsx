"use client";

import { useRouter } from "next/navigation";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "./ui/button";

const CancelReservation = ({ reservation }: { reservation: any }) => {
  const handleCancelReservation = (id: number) => {
    console.log("id:", id);
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button size={"md"}>Cancel Reservation</Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        {/* header */}
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone
          </AlertDialogDescription>
        </AlertDialogHeader>

        {/* footer */}
        <AlertDialogFooter>
          <AlertDialogCancel>Dismiss</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => handleCancelReservation(reservation.id)}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CancelReservation;
