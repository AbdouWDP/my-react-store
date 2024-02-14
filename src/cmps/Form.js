function Form() {
  return (
    <>
      <section className="checkout-form w-1/2 flex flex-col items-center justify-center p-4">
        <div className="full-form flex flex-col items-center justify-center">
          <form
            action=""
            className="form w-full bg-white flex flex-col items-center justify-center gap-1"
          >
            <div className="name-number flex gap-1">
              <div className="phone_number fields w-1/2">
                <label className="label" for="phone">
                  رقم الهاتف
                </label>
                <input
                  type="number"
                  id="phone_input"
                  className="mt-0.5"
                  maxlength="10"
                  dir="rtl"
                />
              </div>
              <div className="full_name fields w-1/2">
                <label for="name" className="label">
                  الاسم الكامل
                </label>
                <input
                  type="text"
                  id="name_input"
                  className="mt-0.5"
                  dir="rtl"
                />
              </div>
            </div>

            <div className="selectors flex gap-1">
              <div className="commune_selector fields w-1/2">
                <label for="commune" className="label">
                  العنوان الكامل
                </label>
                <select
                  name="commune"
                  id="select_commune"
                  className="mt-0.5"
                  dir="rtl"
                >
                  <option value="">bab ezzouar</option>
                </select>
              </div>
              <div className="wilaya_selector fields w-1/2">
                <label for="wilaya" className="label">
                  الولاية
                </label>
                <select
                  name="wilaya"
                  id="select_wilaya"
                  className="mt-0.5"
                  dir="rtl"
                >
                  <option value="">Alger</option>
                </select>
              </div>
            </div>

            <div className="livraison_tarif fields flex gap-1">
              <div className="liv-domicile livraison flex items-center gap-1 w-1/2">
                <input type="checkbox" id="liv_domicile_checkbox" />
                <p>Total Domicile: 5000</p>
              </div>
              <div className="liv-bureau livraison flex items-center gap-1 w-1/2">
                <input type="checkbox" id="liv_bureau_checkbox" />
                <p>Total Bureau: 5000</p>
              </div>
            </div>

            <div className="quantity-submit flex w-full gap-2">
              <input
                type="submit"
                id="submit"
                value="أنقر هنا لتأكيد الطلب"
                className="bg-green-700 text-white font-semibold hover:bg-green-600"
              />
              <div className="quantity w-full h-full text-white flex justify-between items-center">
                <button className="sub_quantity h-full text-black">
                  <span>
                    <i className="fa-solid fa-minus"></i>
                  </span>
                </button>
                <div className="quantity_number text-xl text-semibold text-black">
                  1
                </div>
                <button className="add_quantity h-full text-black">
                  <span id="add" className="h-full w-full">
                    <i className="fa-solid fa-plus"></i>
                  </span>
                </button>
              </div>
            </div>
          </form>
          <div className="order-summary">
            <div className="summary flex justify-between items-center rounded">
              <div className="arrow px-4 text-lg">
                <i className="fa-solid fa-chevron-down"></i>
              </div>
              <div className="summary-title px-4 font-semibold">
                <span>ملخص الطلب</span>
                <span className="cart-shopping">
                  <i className="fa-solid fa-cart-shopping"></i>
                </span>
              </div>
            </div>
            <div className="order-details">
              <div
                style={{
                  width: "100%",
                  height: "50px",
                  borderBottom: "2px solid #3232325a",
                }}
                className="flex flex-col"
              >
                <div className="details-row px-4" dir="rtl">
                  <h3 className="product-title">منتج 1</h3>
                  <h3>1600 دج</h3>
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  height: "50px",
                  borderBottom: "1px solid #3232325a",
                }}
                className="flex flex-col"
              >
                <div className="details-row px-4" dir="rtl">
                  <h3>سعر التوصيل</h3>
                  <h3>800 دج</h3>
                </div>
              </div>
              <div
                style={{ width: "100%", height: "50px" }}
                className="flex flex-col"
              >
                <div className="details-row px-4" dir="rtl">
                  <h3>السعر الكلي</h3>
                  <h3>2400 دج</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Form;
