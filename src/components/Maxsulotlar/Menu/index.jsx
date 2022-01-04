import React, { useRef } from "react";
import Dropzone from "../dropzone/index";
import "./style.css";
import {
  Dropdown,
  Path,
  Menu_Close,
  X,
  H4,
  Container,
  UpdataItem,
  Label,
  UpdataInput,
  AddProduct,
  Select,
  Option,
} from "./style";
const clickOutsideRef = (content_ref, toggle_ref) => {
  document.addEventListener("mousedown", (e) => {
    // user click toggle
    if (toggle_ref.current && toggle_ref.current.contains(e.target)) {
      content_ref.current.classList.toggle("active");
    } else {
      // user click outside toggle and content
      if (content_ref.current && !content_ref.current.contains(e.target)) {
        content_ref.current.classList.remove("active");
      }
    }
  });
};
export const Menu = () => {
  const menu_ref = useRef(null);
  const menu_toggle_ref = useRef(null);

  clickOutsideRef(menu_ref, menu_toggle_ref);

  const setActiveMenu = () => menu_ref.current.classList.add("active");

  const closeMenu = () => menu_ref.current.classList.remove("active");
  return (
    <>
      <Dropdown ref={menu_toggle_ref} onClick={() => setActiveMenu()}>
        <Path />
      </Dropdown>

      <div>
        <div className="theme-menu" ref={menu_ref}>
          <Container>
            <H4>Yangi maxsulot qo’shish</H4>
            <UpdataItem>
              <Label>Maxsulot nomi</Label>
              <UpdataInput type="text" placeholder="Chizburger" />
            </UpdataItem>
            <AddProduct>
              <Label>Kategoriya</Label>

              <Select name="active" id="active">
                <Option value="burger">burger</Option>
                <Option value="lavash">lavash</Option>
                <Option value="Mini lavsh">Mini lavash</Option>
              </Select>
            </AddProduct>

            <UpdataItem>
              <Label>Narxi</Label>
              <UpdataInput type="text" placeholder="18,500" />
            </UpdataItem>

            <UpdataItem>
              <Label>Qo’shimcha ma’lumot</Label>
              <UpdataInput
                type="text"
                placeholder="Katta burgur, 2 karra pishloq bor"
              />
            </UpdataItem>

            <Dropzone />
          </Container>
          <Menu_Close onClick={() => closeMenu()}>
            <X />
          </Menu_Close>
        </div>
      </div>

      <div></div>
    </>
  );
};
export default Menu;
