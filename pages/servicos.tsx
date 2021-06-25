import websitePageHOC from "@ninjas/components/wrappers/WebsitePage/hoc";
import servicesScreeen from "@ninjas/components/screens/ServicesScreen";

export default websitePageHOC(servicesScreeen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: "Serviços",
    },
    menuProps: {
      display: true,
    },
  },
});
