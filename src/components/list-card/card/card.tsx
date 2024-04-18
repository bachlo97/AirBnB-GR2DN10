/**
 * S = {
 *  CardWrapper,
 *CardBody,
 * }
 */

import { Link, useNavigate } from "react-router-dom";
import * as S from "./card.style";

import { TCard } from "./card.type";

/**
 * Omit<TCard, "id">: loại bỏ thuộc tính id trong TCard
 *
 * {
 *  img: string;
 *  name: string;
 *  shortDesc: string;
 *  price: string;
 * }
 */
export function Card(props: TCard) {
    const navigate = useNavigate();
    return (
        <S.CardWrapper>
            <img
                style={{
                    width: 200,
                }}
                src={props.img}
            />

            <S.CardBody>
                <h3>{props.name}</h3>

                <p>{props.shortDesc}</p>

                <div>
                    <S.Button
                        variant="success"
                        onClick={() => {
                            // Cách 2: dùng useNavigate (ưu điểm khi dùng cách này là sẽ xử lý logic(if,else,..) trước khi di chuyển trang)
                            // navigate('/detail')
                        }}
                    >
                        {/* Cách 1: Dùng thẻ link */}
                        <Link to={`/detail/${props.id}`}>Buy Now</Link>
                        {/* Buy now */}
                    </S.Button>
                    <S.Button variant="dark">{props.price}$</S.Button>
                </div>
            </S.CardBody>
        </S.CardWrapper>
    );
}
