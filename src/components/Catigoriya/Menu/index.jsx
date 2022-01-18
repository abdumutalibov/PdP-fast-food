import React, { useRef } from "react";
// import Dropzone from "../dropzone/index";
import "./style.css";
import {
  Dropdown,
  Path,
  // Menu_Close,
  // X,
  H4,
  Container,
  UpdataItem,
  Label,
  UpdataInput,
  AddProduct,
  Select,
  Option,
  Save,
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
            <H4>Yangi kategori qo’shish</H4>
            <UpdataItem>
              <Label>Kategoriya nomi uz</Label>
              <UpdataInput type="text" placeholder="Issiq ichimliklar" />
             
            </UpdataItem>
   <UpdataItem>
              <Label>Kategoriya nomi ru</Label>
              <UpdataInput
                type="text"
                placeholder="Горячие напитки"
              />
            </UpdataItem>
            <AddProduct>
              <Label>Bosh kategoriyaga biriktirish</Label>

              <Select name="active" id="active">
                <Option value="burger">Ichimlik</Option>
                <Option value="lavash">Coca Cola</Option>
                <Option value="Mini lavsh">Pepsi</Option>
                <Option value="Mini lavsh">Sprayt</Option>
                <Option value="Mini lavsh">Bliss</Option>
              </Select>
            </AddProduct>

         <Save>Saqlsh</Save>
            {/* <Dropzone /> */}
          </Container>
          {/* <Menu_Close onClick={() => closeMenu()}>
            <X />
          </Menu_Close> */}
        </div>
      </div>

    
    </>
  );
};
export default Menu;
