import DocViewer from "@cyntler/react-doc-viewer";
import { styled } from "styled-components";

const DocPages = () => {
  const docs = [
    { uri: require("./../assets/pdf/1.pdf") }, // Local File
  ];
  /**
   *  1- number of document pages
   *  2- loop <DocViewer {intialpage => index}/>
   *  3- keep header hidden
   *  4- keep control bar hidden
   */
  return (
    <Pager>
      <DocViewer
        documents={docs}
        config={{
          header: {
            disableHeader: true,
            disableFileName: true,
            retainURLParams: true,
            overrideComponent: <div></div>,
          },
        }}
      />
    </Pager>
  );
};

export default DocPages;

const Pager = styled.div`
  #pdf-controls {
    display: none;
  }
`;
