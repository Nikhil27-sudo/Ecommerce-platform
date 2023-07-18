import React, { useState } from 'react'
import { RxCross1 } from 'react-icons/rx';
import { IoBagHandleOutline } from "react-icons/io5";
import styles from "../../styles/styles";
import { HiOutlineMinus, HiPlus } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { BsCartPlus } from "react-icons/bs";

const Wishlist = ({ setOpenWishlist }) => {

    const cartData = [
        {
            name : "Iphone 14 pro max 256 gb SSD and 8gb RAM silver color",
            description: "Test",
            price: 999,
        },
        {
            name : "Iphone 14 pro max 256 gb SSD and 8gb RAM silver color",
            description: "Test",
            price: 888,
        },
        {
            name : "Iphone 14 pro max 256 gb SSD and 8gb RAM silver color",
            description: "Test",
            price: 777,
        }

    ]

  return (
    <div className="fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10">
      <div className="fixed top-0 right-0 min-h-full w-[25%] bg-white flex flex-col justify-between shadow-sm">
        <div>
            <div className="flex w-full justify-end pt-5 pr-5 ">
              <RxCross1
                size={25}
                className="cursor-pointer"
                onClick={() => setOpenWishlist(false)}
              />
            </div>
            {/* Item length */}
            <div className={`${styles.normalFlex} p-4`}>
                <IoBagHandleOutline size={25} />
                <h5 className="pl-2 text-[20px] font-[500]">
                  3 items
                </h5>
              </div>

              {/* cart Single Items */}
              <br />
              <div className="w-full border-t">
                {
                cartData && cartData.map((i, index) => (
                    <CartSingle
                      key={index}
                      data={i}
                    />
                  ))}
              </div>
            </div>
        </div>
    
      </div>
  );
};

const CartSingle = ({data}) => {
    const [value, setValue] = useState(1);
    const totalPrice = data.price * value;


  
    return (
      <div className="border-b p-4">
        <div className="w-full flex items-center">
            <RxCross1 classname = "w-full flex items-center" />
            <img
            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-13-pro-max-graphite-2023?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1679072989055"
            alt=""
            className="w-[80px] h-[80px] ml-2"
            />
         
        <div className="pl-[5px]">
          <h1>{data.name}</h1>
          <h4 className="font-[600] text-[17px] pt-[3px] text-[#d02222] font-Roboto">
            US${totalPrice}
          </h4>
        </div>
        <div>
          <BsCartPlus size={20} className="cursor-pointer" tile="Add to cart"
          />
        </div>
        </div>
      </div>
    );
  };


export default Wishlist;