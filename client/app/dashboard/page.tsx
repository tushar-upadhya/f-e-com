import { format } from "date-fns";

const getUserReservations = async (userEmail: any) => {
  const res = await fetch(
    `http://127.0.0.1:1337/api/reservations?[filters][email][$eq]=${userEmail}&populate=*`,
    {
      next: {
        revalidate: 0,
      },
    }
  );
  return await res.json();
};

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import CancelReservation from "@/components/CancelReservation";

const DashBoardPage = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  // console.log("user:", user);

  const userReservations = await getUserReservations(user?.email);
  // console.log("userReservations:", userReservations);
  return (
    <section className="min-h-[82vh]">
      <div className="container mx-auto py-8 h-full">
        <h3 className="h3 font-bold mb-12 border-b pb-4 text-center lg:text-left">
          My Booking
        </h3>

        <div>
          {userReservations.data.length < 1 ? (
            <div>
              <p>You don't have any reservation</p>
            </div>
          ) : (
            userReservations.data.map((reservation: any) => {
              // console.log("reservation:", reservation);

              return (
                <div key={reservation.id} className="bg-gray-100 py-8 px-12">
                  <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                    <h3 className="text-2xl font-medium w-[200px] text-center lg:text-left">
                      {reservation.attributes.room.data.attributes.title}
                    </h3>

                    {/* check in & check OUT */}
                    <div className="flex flex-col lg:flex-row gap-2 lg:w-[380px]">
                      {/* check In */}
                      <div className="flex items-center gap-1 flex-1">
                        <span className="text-accent font-bold uppercase tracking-[2px]">
                          From :{" "}
                        </span>
                        <span className="text-secondary font-semibold ">
                          {format(reservation.attributes.checkIn, "PPP")}
                        </span>
                      </div>
                      {/* check OUT */}
                      <div className="flex items-center gap-1 flex-1">
                        <span className="text-accent font-bold uppercase tracking-[2px]">
                          to :{" "}
                        </span>
                        <span className="text-secondary font-semibold">
                          {format(reservation.attributes.checkOut, "PPP")}
                        </span>
                      </div>
                    </div>

                    <CancelReservation reservation={reservation} />
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};

export default DashBoardPage;
