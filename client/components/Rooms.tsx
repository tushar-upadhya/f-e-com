import { getRooms } from "@/lib/strapiAPI";
import RoomList from "./RoomList";

const Rooms = async () => {
  const rooms = await getRooms();
  //   console.log("rooms:", rooms);

  return (
    <section>
      <div className="container mx-auto">
        <RoomList rooms={rooms} />
      </div>
    </section>
  );
};

export default Rooms;
