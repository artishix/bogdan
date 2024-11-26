import { gunsPageContent } from "../data";
import Content from "../components/Content/Content";

const WeaponsPage = () => {
    return gunsPageContent.map((item, index) => <Content {...item} key={index} reversed={++index % 2 === 0} />);
};

export default WeaponsPage;
