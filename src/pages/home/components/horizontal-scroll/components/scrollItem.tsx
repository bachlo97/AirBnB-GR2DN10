

type Props = {
    img: string;
    content: string;
};

const ScrollItem = ({img,content}: Props) => {
    return (
        <li className="mx-[1px] inline-flex select-none flex-col items-center justify-center gap-2 p-[10px_15px] opacity-55 transition-all duration-300 hover:opacity-100 after:h-0.5 after:w-[80%] after:bg-transparent hover:after:bg-gray-300">
            <img
                src={img}
                alt=""
                className="h-[30px] w-[30px]"
            />
            <p className="whitespace-nowrap text-[13px]">{content}</p>
        </li>
    );
};

export default ScrollItem;
