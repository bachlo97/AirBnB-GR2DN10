type TThumbail = {
  img: string;
};
type Props = {
  data: TThumbail[];
};

export const Thumbail = ({ data }: Props) => {
  return (
    <>
      <div className="thumbnail zoom">
        <img src={data[0].img} alt="" className="h-full w-full object-cover" />
      </div>
      {(() => {
        const elements = [];
        for (let i = 1; i < data.length; i++) {
          elements.push(
            <div
              className={`thumbnail`}
              key={i}
              style={{
                ["--idx" as string]: i - 1,
              }}
            >
              <img
                src={data[i].img}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>,
          );
        }
        return elements;
      })()}
    </>
  );
};
