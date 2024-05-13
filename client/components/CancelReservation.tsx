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
import { deleteData } from "@/lib/strapiAPI";

const CancelReservation = ({ reservation }: { reservation: any }) => {
  const router = useRouter();

  const handleCancelReservation = (id: number) => {
    // console.log("id:", id);
    deleteData(`http://127.0.0.1:1337/api/reservations/${id}`);
    router.refresh();
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          size={"md"}
          className="bg-accent hover:bg-accent-hover font-primary text-white"
        >
          Cancel Reservation
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent className="bg-white font-primary font-semibold">
        {/* header */}
        <AlertDialogHeader>
          <AlertDialogTitle className="text-2xl text-accent">
            Are you sure?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone
          </AlertDialogDescription>
        </AlertDialogHeader>

        {/* footer */}
        <AlertDialogFooter>
          <AlertDialogCancel className="bg-accent hover:bg-accent-hover transition-all duration-200 hover:text-white">
            Dismiss
          </AlertDialogCancel>
          <AlertDialogAction
            className="hover:bg-accent-hover transition-all border border-accent duration-200 hover:text-white"
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
