import { useState } from "react"
import { fetchProductBySearch } from "../../store/productSlice";
import { Link, useNavigate } from "react-router-dom";
// import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { selectProductBySearch } from "../../store/productSlice";
import { FaSearch, FaTimes } from "react-icons/fa";


// const data = [
//   { id: 1, name: "devrecipes.net" },
//   { id: 2, name: "dsfgsdfg" },
//   { id: 3, name: "dsafg we wareg efg fd" },
//   { id: 4, name: "sdg dsfg dsfgwaerr wASA  " },
//   { id: 5, name: "DFSGDSFG RTEWRTGXCZXZXV  SFDGSADFG" },
//   { id: 6, name: "faizan" }
// ];

// const filterdata = (key) => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       const searchResult = data.filter((item) => item.name.includes(key))
//       res(searchResult)
//     }, 500)
//   })
// }

const Search = () => {
  const [open, SetOpen] = useState(false);
  const [profile, Setprofile] = useState(false);
  const [findresult, SetFindresult] = useState([]);
  const getSearchitem = useSelector(selectProductBySearch);
  const dispatch = useDispatch();



  const inputChange = (e) => {
    let input = e.target.value;
    dispatch(fetchProductBySearch(input));
    // SetFindresult([]);
    // filterdata(input).then((res) => {
    //   SetFindresult(res);
    // })
  }


  return (
    <>
      <div className="search">
        <div className="right-menu">
          <button className="search-btn" onClick={() => SetOpen(true)}>
            <FaSearch />
          </button>
        </div>

        <div className={`search-wrapper  ${open ? 'open' : ''} `}>
          <input className="search-box" id="search" type="search" placeholder="Enter Keywords..." onChange={inputChange} />
          <button className="search-icon" onClick={() => SetOpen(false)}><FaTimes /></button>
          <div className="row">
            <div className="col-12">
              <div className="list-group" id="list-tab" role="tablist">
                {Array.isArray(getSearchitem) && getSearchitem.length > 0 ? (
                  getSearchitem.map((res) => (
                    <Link
                      key={res.product_id}
                      className="list-group-item list-group-item-action"
                      to={`/products-details/${res.product_id}`}
                      onClick={() => SetOpen(false)}
                    >
                      {res.name}
                    </Link>
                  ))
                ) : (
                  <p>{getSearchitem?.message || ""}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Search