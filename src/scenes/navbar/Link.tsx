import AnchorLink from "react-anchor-link-smooth-scroll";

import {SelectedPage}  from "../../shared/types";
type Props = {
  page: string;
  selectedPage:SelectedPage,
  setSelectedPage: (value:SelectedPage) => void,
  txt:string
};

const Link = ({ page, selectedPage, setSelectedPage, txt}:Props) => {

    const lowerCasePage = page.toLocaleLowerCase().replace(/ /g, "") as SelectedPage;

  return <AnchorLink
    className = {`${selectedPage === lowerCasePage? "text-primary-500":""} transition duration-500 hover:text-primary-300`}
    href = {`#${lowerCasePage}`}
    onClick = {()=>{setSelectedPage(lowerCasePage)}}
  >{txt}</AnchorLink>;
};

export default Link;
