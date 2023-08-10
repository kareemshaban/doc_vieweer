import DocumentViewer from "../components/DocViewer";
import DocPages from "../components/DocPages";
import DocTools from "../components/DocTools";
import { styled } from "styled-components";

const Home = () => {
  return (
    <HomeWrapper>
      <div className="item">
        <DocPages />
      </div>
      <div className="item center">
        <DocumentViewer />
      </div>
      <div className="item">
        <DocTools />
      </div>
    </HomeWrapper>
  );
};
export default Home;

const HomeWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
  gap: 10px;

  padding: 10px;
  .item {
    background-color: rgba(255, 255, 255, 0.8);
    text-align: center;
    padding: 20px 0;
    font-size: 30px;
  }
  :last-child {
    border: none;
  }
  .center {
    grid-column: 2 / 6;
  }
`;
