import React from "react";
import { toAbsoluteUrl } from "../../../_metronic";
import "../../../_metronic/_assets/sass/pages/error/error-1.scss";
import { Button } from "@material-ui/core";
import { Router, Link } from "react-router-dom";

export function ErrorPage1() {
  return (
    <>
      <div className="kt-grid kt-grid--ver kt-grid--root">
        <div
          className="kt-grid__item kt-grid__item--fluid kt-grid kt-error-v1"
          style={{
            backgroundImage: `url(${toAbsoluteUrl(
              "/media/error/bg1.jpg"
            )})`
          }}
        >
          <div className="kt-error-v1__container">
            <h1 className="kt-error-v1__number">404</h1>
            <p className="kt-error-v1__desc">OOPS! No hay nada que hacer aquí</p>
            <Link to="/escritorio"><Button style={{ marginLeft: "5%" }}>Volver al escritorio</Button></Link>
          </div>
        </div>
      </div>
    </>
  );
}
