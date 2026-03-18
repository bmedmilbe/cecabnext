"use client";
import React, { useActionState, useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {
  ActionFormResponse,
  ActionResponse,
} from "../../lib/services/response-types";
import messageAction from "../actions/message";
const MySwal = withReactContent(Swal);

const alertContent = () => {
  MySwal.fire({
    title: "Obrigado!",
    text: "A sua mensagem foi recebida, vamos te responder brevemente.",
    icon: "success",
    timer: 5000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};
export type InputType = {
  name: string;
  email: string;
  subject: string;
  text: string;
};
const input = {
  name: "",
  email: "",
  subject: "",
  text: "",
};
const AddressForm: React.FC = () => {
  const initialResponse: ActionFormResponse<InputType> = {
    message: "",
    success: false,
    input,
  };

  const [state, actionForm, isPending] = useActionState(
    messageAction,
    initialResponse,
  );

  useEffect(() => {
    console.log(state);
    if (state.success) {
      alertContent();
    }
  }, [state]);

  return (
    <div className="contact-form">
      {state.error && (
        <div className="alert alert-danger" role="alert">
          Erro ao enviar, tente mais tarde.
        </div>
      )}
      <form action={actionForm}>
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Nome"
                className="form-control"
                required
                defaultValue={state.input.name}
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="form-group">
              <input
                type="text"
                name="email"
                placeholder="Email"
                className="form-control"
                required
                defaultValue={state.input.email}
              />
            </div>
          </div>

          <div className="col-lg-12 col-md-12">
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Assunto"
                className="form-control"
                required
                defaultValue={state.input.subject}
              />
            </div>
          </div>
          <div className="col-lg-12 col-md-12">
            <div className="form-group">
              <textarea
                name="text"
                cols={30} // Use number for cols/rows in TSX
                rows={6} // Use number for cols/rows in TSX
                placeholder="Escreva a tua mensagem..."
                className="form-control"
                defaultValue={state.input.text}
                required
              ></textarea>
            </div>
          </div>
          <div className="col-lg-12 col-sm-12">
            <button
              disabled={state.success}
              type="submit"
              className="default-btn"
            >
              Enviar Messagem <span></span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddressForm;
