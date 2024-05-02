export const getRooms = async () => {
  const res = await fetch(`http://127.0.0.1:1337/api/rooms?populate=*`, {
    next: {
      revalidate: 0,
    },
  });
  return await res.json();
};

export const getRoomData = async ({ params }: { params: any }) => {
  const res = await fetch(
    `http://127.0.0.1:1337/api/rooms/${params.id}?populate=*`,
    {
      next: {
        revalidate: 0,
      },
    }
  );
  return await res.json();
};

export const getReservationData = async () => {
  const res = await fetch(`http://127.0.0.1:1337/api/reservations?populate=*`, {
    next: {
      revalidate: 0,
    },
  });
  return await res.json();
};
