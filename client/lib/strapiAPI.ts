// get Rooms
export const getRooms = async () => {
  const res = await fetch(`http://127.0.0.1:1337/api/rooms?populate=*`, {
    next: {
      revalidate: 0,
    },
  });
  return await res.json();
};

// getRoom Data

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

// getReservationData

export const getReservationData = async () => {
  const res = await fetch(`http://127.0.0.1:1337/api/reservations?populate=*`, {
    next: {
      revalidate: 0,
    },
  });
  return await res.json();
};

// postData
export const postData = async (url: string, data: object) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  try {
    const res = await fetch(url, options);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("error:", error);
  }
};

// deleteData
export const deleteData = async (url: string) => {
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

// getUserReservations
export const getUserReservations = async (userEmail: any) => {
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
