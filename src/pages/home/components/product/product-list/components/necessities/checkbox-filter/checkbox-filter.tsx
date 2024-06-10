import { changeNecessities } from "@/pages/home/actions/filter-room.actions";
import { useFilterRoom } from "@/pages/home/hooks/filter-rooms.hook";


type Props = {
  name: "wifi" | "mayGiat" | "dieuHoa" | "bep" | "tivi" | "banUi";
  title: string;
};

export function CheckBoxFilter({ name, title }: Props) {
  const [{ chooseNecessities }, dispatch] = useFilterRoom();
  console.log({ chooseNecessities });

  return (    
    <>
      <input
        id={name}
        type="checkbox"
        className="h-[24px] w-[24px] rounded accent-black"
        onChange={(e) => dispatch(changeNecessities(e,name))}
        checked={chooseNecessities[name]}
      />
      <label
        htmlFor={name}
        className="ms-2 ipad:text-[16px] mobile:text-[13px] font-thin text-gray-900"
      >
        {title}
      </label>
    </>
  );
}