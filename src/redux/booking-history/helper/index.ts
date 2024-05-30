
import _ from "lodash";

export const convertToBookRoom = (list: TBookRoomApi[]):TBookRoom[] =>{
    return  _.map(list,({maPhong,soLuongKhach}) =>({maPhong,soLuongKhach}))
}


export const combineRoom = (bookingList:TBookRoom[],roomList:TRoomAPI[]) => {
    return bookingList
      .map(bookingItem => {
        const matchingItem = roomList.find(roomItem => roomItem.id === bookingItem.maPhong);
        if (matchingItem) {
          const sample = _.omit(matchingItem,['khach','moTa'])
          return {
            soLuongKhach: bookingItem.soLuongKhach,
            ...sample,
          };    
        }
        return null;
      })
      .filter(item => item !== null);
  };
  

export const handleResult = (roomList:(TRoom|null)[],locationList:TLocation[]) => {
  const validRoomList: TRoom[] = roomList.filter((room): room is TRoom => room !== null);
  return validRoomList
    .map(roomItem => {
      const matchingItem = locationList.find(location => location.id === roomItem.maViTri);
      const roomSample = _.omit(roomItem,['maViTri'])
      if (matchingItem) {
        const locationSample = _.omit(matchingItem,['quocGia','hinhAnh'])
        return {
          ...locationSample,
          ...roomSample,
        };    
      }
      return {
        ...roomSample,
        tenViTri: '???',
        tinhThanh:'???'
      } ;
    })
};

