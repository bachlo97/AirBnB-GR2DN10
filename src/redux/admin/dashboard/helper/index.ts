import { truncateText } from "@/utils";

export const handleCommentOverView = (data: any) => {
  const filteredComments = data.filter(
    (comment: any) => comment.saoBinhLuan >= 0 && comment.saoBinhLuan <= 5,
  );
  const totalStars = filteredComments.reduce(
    (sum: number, comment: any) => sum + comment.saoBinhLuan,
    0,
  );

  return {
    totalComments: filteredComments.length,
    totalStars,
  };
};

const currentYear = new Date().getFullYear();

export const handleLineChart = (data: any) => {
  const filtered = data.filter((item: any) => {
    const year = new Date(item.ngayDen).getFullYear();
    return year === currentYear;
  });

  const monthCounts = filtered.reduce(
    (acc: { [key: string]: number }, reservation: any) => {
      const month = new Date(reservation.ngayDen).toLocaleString("default", {
        month: "short",
      });

      if (!acc[month]) {
        acc[month] = 0;
      }
      acc[month]++;

      return acc;
    },
    {},
  );

  console.log({ monthCounts });
  const allMonths = Array.from({ length: 12 }, (_, i) =>
    new Date(0, i).toLocaleString("default", { month: "short" }),
  ).reduce((acc: { [key: string]: number }, month) => {
    acc[month] = 0;
    return acc;
  }, {});

  Object.keys(monthCounts).forEach((month) => {
    allMonths[month] = monthCounts[month];
  });

  return {
    lineChartKeys: Object.keys(allMonths),
    lineChartValues: Object.values(allMonths),
  };
};

export const handleColumnChart = (data1: any, data2: any) => {
  const filteredReservations = data1
    .filter(
      (reservation: any) =>
        new Date(reservation.ngayDen).getFullYear() === currentYear,
    )
    .map(({ maPhong, ngayDen, soLuongKhach }: any) => ({
      maPhong,
      ngayDen,
      soLuongKhach,
    }));

  const mapRoomData = new Map(
    data2.map((item: any) => [item.id, item.giaTien]),
  );
  console.log({ mapRoomData });
  const mergeWithRoom = filteredReservations.reduce((acc: any, itemA: any) => {
    const giaTien = mapRoomData.get(itemA.maPhong);
    if (giaTien) {
      acc.push({ ...itemA, giaTien });
    }
    return acc;
  }, []);

  const monthlyTotals = mergeWithRoom.reduce(
    (acc: { [key: string]: number }, reservation: any) => {
      const month = new Date(reservation.ngayDen).toLocaleString("default", {
        month: "short",
      });
      const totalCost = reservation.soLuongKhach * reservation.giaTien;

      if (!acc[month]) {
        acc[month] = 0;
      }
      acc[month] += totalCost;

      return acc;
    },
    {},
  );

  const allMonths = Array.from({ length: 12 }, (_, i) =>
    new Date(0, i).toLocaleString("default", { month: "short" }),
  ).reduce((acc: { [key: string]: number }, month) => {
    acc[month] = 0;
    return acc;
  }, {});

  Object.keys(monthlyTotals).forEach((month) => {
    allMonths[month] = monthlyTotals[month];
  });

  return {
    columnChartKeys: Object.keys(allMonths),
    columnChartValues: Object.values(allMonths),
  };
};

export const handleBarChart = (data1: any, data2: any, data3: any) => {
  const filteredAndMappedData = data1
    .filter(
      (reservation: any) =>
        new Date(reservation.ngayDen).getFullYear() === currentYear,
    )
    .map((reservation: any) => {
      return {
        maPhong: reservation.maPhong,
        soLuongKhach: reservation.soLuongKhach,
      };
    });

  const filteredroomData = new Map(
    data2.map((item: any) => [item.id, item.maViTri]),
  );

  const mergeRoom = filteredAndMappedData.reduce((acc: any, itemA: any) => {
    const maViTri = filteredroomData.get(itemA.maPhong);
    if (maViTri) {
      acc.push({ ...itemA, maViTri });
    }
    return acc;
  }, []);

  // Tạo một map từ arrayC để tra cứu nhanh tinhThanh theo id
  const mapLocation = new Map(
    data3.map((item: any) => [item.id, item.tinhThanh]),
  );

  const filteredLocation = mergeRoom.reduce((acc: any, item: any) => {
    const tinhThanh = mapLocation.get(item.maViTri);
    if (tinhThanh) {
      acc.push({ ...item, tinhThanh });
    }
    return acc;
  }, []);

  const sumByTinhThanh = filteredLocation.reduce((acc: any, item: any) => {
    if (!acc[item.tinhThanh]) {
      acc[item.tinhThanh] = 0;
    }
    acc[item.tinhThanh] += item.soLuongKhach;
    return acc;
  }, {});

  // Chuyển đổi đối tượng kết quả thành mảng
  const result = Object.entries(sumByTinhThanh).map(([tinhThanh, soLuong]) => ({
    tinhThanh,
    soLuong,
  }));

  result.sort((a: any, b: any) => b.soLuong - a.soLuong);

  // Lấy 5 phần tử đầu tiên
  const top5 = result.slice(0, 5);

  // Tạo hai mảng tinhThanh và soLuongTuongUng
  const tinhThanh = top5.map((item) => truncateText(item.tinhThanh, 20));

  const values = top5.map((item) => item.soLuong);
  return {
    barChartKeys: tinhThanh,
    barChartValues: values,
  };
};
