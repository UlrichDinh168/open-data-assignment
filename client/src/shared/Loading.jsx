import React from "react";
import hoistNonReactStatics from "hoist-non-react-statics";

import { css } from "@emotion/react";
import PuffLoader from "react-spinners/PuffLoader";
import "./loading.css";
import { Modal } from "./Modal";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
const withLoadingScreen = (WrapperComponent) => {
  const LoadingScreen = () => {
    const [loading, setLoading] = React.useState(false);
    let mounted = false;
    let closeLoadingTimeout = null;

    React.useEffect(() => {
      mounted = true;
      return () => {
        if (closeLoadingTimeout) {
          clearTimeout(closeLoadingTimeout);
        }
      };
    }, [loading]);

    const showLoading = () => {
      setLoading(true);
    };

    const hideLoading = () => {
      setLoading(false);
    };

    const renderLoading = () => {
      return (
        <PuffLoader
          css={override}
          size={400}
          color="#2C6CAF"
          loading={loading}
        />
      );
    };
    const newProps = {
      showLoading,
      hideLoading,
    };
    return (
      <div className="loading-hoc__container">
        <Modal
          show={loading}
          className={"loading-modal__container"}
          showClose={false}
        >
          {renderLoading()}
        </Modal>
        <WrapperComponent {...newProps} />
      </div>
    );
  };
  hoistNonReactStatics(LoadingScreen, WrapperComponent);
  return LoadingScreen;
};

export default withLoadingScreen;
