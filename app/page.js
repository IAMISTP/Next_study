import { GrFavorite, GrCart, GrLocation } from "react-icons/gr";

export default function Home() {
  return (
    <div>
      <header>
        <div className="aside_menu">
          <div>회원가입</div>
          <div>로그인</div>
          <div>고객센터</div>
        </div>
        <div className="main_menu">
          <div className="logo_warp">
            <span>fresh</span>
          </div>
          <div className="search_warp">
            <input />
          </div>
          <div className="icon_warp">
            <span>
              <GrLocation />
            </span>
            <span>
              <GrFavorite />
              <span>
                <GrCart />
              </span>
            </span>
          </div>
        </div>
        <div className="sub_menu_warp">
          <div>카테고리</div>
          <ul>
            <li>신상품</li>
            <li>베스트</li>
            <li>특가/혜택</li>
          </ul>
          <div>샛별/배송안내</div>
        </div>
      </header>
      <h4 className="title">애플 후레쉬</h4>
      <p className="title_sub">by dev kim</p>
    </div>
  );
}
