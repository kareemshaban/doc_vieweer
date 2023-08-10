import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

const DocumentViewer = () => {
  const docs = [
    { uri: require("./../assets/pdf/1.pdf") }, // Local File
  ];
  //   return <DocViewer documents={docs} />;
  return <DocViewer documents={docs} />;
};

export default DocumentViewer;
