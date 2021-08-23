import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import SkipToContent from "../A11y/index";

function Seo({ page, children }) {
  return (
    <>
      <Helmet>
        <title>{`Zubar  ${page || "Home"}`}</title>
      </Helmet>
      <SkipToContent content="main" />
      {children}
    </>
  );
}

export default Seo;

Seo.propTypes = {
  page: PropTypes.string,
  children: PropTypes.node,
};
