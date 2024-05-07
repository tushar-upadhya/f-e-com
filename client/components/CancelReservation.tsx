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

const deleteData = async (url: string) => {
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await fetch(url, options);
    const data = await res.json();

    return data;
  } catch (error) {
    console.log("error:", error);
  }
};

const CancelReservation = ({ reservation }: { reservation: any }) => {
  const router = useRouter();

  const handleCancelReservation = (id: number) => {
    // console.log("id:", id);
    deleteData(`http://127.0.0.1:1337/api/reservation/${id}`);
    router.refresh();
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

//  3 17
