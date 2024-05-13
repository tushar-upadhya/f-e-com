import CancelReservation from "@/components/CancelReservation";
import { getUserReservations } from "@/lib/strapiAPI";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const DashboardPage = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  // console.log("user:", user);

  const userReservations = await getUserReservations(user?.email);
  console.log("userReservations:", userReservations);

  return (
    <section className="min-h-[80vh]">
      <div className="container mx-auto py-8 h-full">
        <h3 className="h3 font-bold font-primary mb-12 border-b pb-4 text-center lg:text-left">
          My bookings
        </h3>
      </div>
      {userReservations.data.length < 1 ? (
        <div>
          <p>You don't have reservation</p>
        </div>
      ) : (
        userReservations.data.map((reservation: any) => {
          // console.log("reservation:", reservation);

          return (
            <div className="bg-tertiary py-8 px-12" key={reservation.id}>
              <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                <h3 className="text-2xl font-medium font-secondary w-[200px] text-center">
                  {reservation.attributes.room.data.attributes.title}
                </h3>
                {/* check in & check out */}

                <div className="flex flex-col lg:flex-row gap-2 lg:w-[380px]">
                  {/* check in */}
                  <div className="flex font-secondary font-semibold flex-1 gap-1 items-center">
                    <span className="text-accent font-bold uppercase tracking-[2px]">
                      from :{" "}
                    </span>
                    <span> {reservation.attributes.checkIn} </span>
                  </div>
                  {/* check out */}
                  <div className="flex font-secondary font-semibold flex-1 gap-1 items-center">
                    <span className="text-accent font-bold uppercase tracking-[2px]">
                      to :{" "}
                    </span>
                    <span> {reservation.attributes.checkOut} </span>
                  </div>
                </div>

                <CancelReservation reservation={reservation} />
              </div>
            </div>
          );
        })
      )}
    </section>
  );
};

export default DashboardPage;
